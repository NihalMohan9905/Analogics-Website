// ================================
// ChatBot Component - Live Chat Widget
// Integrated with Groq API
// ================================

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaComments, FaTimes, FaPaperPlane, FaRobot, FaUser, FaCopy, FaTrash } from 'react-icons/fa';
import { sendMessageToGroq } from '../../services/chatbotApi';
import './ChatBot.css';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      text: 'Hello! 👋 Welcome to Analogics Group. How can I help you today?',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [rateLimitCount, setRateLimitCount] = useState(0);
  const [rateLimitReset, setRateLimitReset] = useState(Date.now());
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // Rate limiting: 10 messages per minute
  const RATE_LIMIT = 10;
  const RATE_LIMIT_WINDOW = 60000; // 1 minute

  // Quick reply options
  const quickReplies = [
    'Products Info',
    'Get a Quote',
    'Support',
    'Contact Sales'
  ];

  // Scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen]);

  const handleSendMessage = async (message = inputValue) => {
    if (!message.trim()) return;

    // Check rate limit
    const now = Date.now();
    if (now - rateLimitReset > RATE_LIMIT_WINDOW) {
      setRateLimitCount(0);
      setRateLimitReset(now);
    }

    if (rateLimitCount >= RATE_LIMIT) {
      const errorMsg = {
        id: messages.length + 1,
        type: 'bot',
        text: 'You\'re sending messages too quickly. Please wait a moment before trying again.',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, errorMsg]);
      return;
    }

    setRateLimitCount(prev => prev + 1);

    const userMessage = {
      id: messages.length + 1,
      type: 'user',
      text: message,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    try {
      // Get all messages for context (last 10 for efficiency)
      const conversationHistory = [...messages.slice(-10), userMessage];
      
      // Call Groq API
      const botResponseText = await sendMessageToGroq(conversationHistory);

      const botResponse = {
        id: messages.length + 2,
        type: 'bot',
        text: botResponseText,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      
      setMessages(prev => [...prev, botResponse]);
    } catch (error) {
      console.error('Error getting bot response:', error);
      
      const errorResponse = {
        id: messages.length + 2,
        type: 'bot',
        text: "I'm sorry, I'm having trouble responding right now. Please contact us directly at atm@analogicgroup.com or call +91-40-6735 5000.",
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      
      setMessages(prev => [...prev, errorResponse]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleQuickReply = (reply) => {
    handleSendMessage(reply);
  };

  const handleClearChat = () => {
    setMessages([
      {
        id: 1,
        type: 'bot',
        text: 'Hello! 👋 Welcome to Analogics Group. How can I help you today?',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
    ]);
    setRateLimitCount(0);
    setRateLimitReset(Date.now());
  };

  const handleCopyMessage = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      // Optional: Show a toast notification
    }).catch(err => {
      console.error('Failed to copy:', err);
    });
  };

  return (
    <div className="chatbot">
      {/* Chat Toggle Button */}
      <motion.button
        className={`chatbot__toggle ${isOpen ? 'active' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label={isOpen ? 'Close chat' : 'Open chat'}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.span
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
            >
              <FaTimes />
            </motion.span>
          ) : (
            <motion.span
              key="open"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
            >
              <FaComments />
            </motion.span>
          )}
        </AnimatePresence>
        {!isOpen && <span className="chatbot__badge">1</span>}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="chatbot__window"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          >
            {/* Header */}
            <div className="chatbot__header">
              <div className="chatbot__header-info">
                <div className="chatbot__avatar">
                  <FaRobot />
                </div>
                <div className="chatbot__header-text">
                  <h4>Analogics Support</h4>
                  <span className="chatbot__status">
                    <span className="chatbot__status-dot"></span>
                    Online
                  </span>
                </div>
              </div>
              <div className="chatbot__header-actions">
                <button 
                  className="chatbot__action-btn"
                  onClick={handleClearChat}
                  aria-label="Clear chat"
                  title="Clear conversation"
                >
                  <FaTrash />
                </button>
                <button 
                  className="chatbot__close"
                  onClick={() => setIsOpen(false)}
                  aria-label="Close chat"
                >
                  <FaTimes />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="chatbot__messages">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  className={`chatbot__message chatbot__message--${message.type}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <div className="chatbot__message-avatar">
                    {message.type === 'bot' ? <FaRobot /> : <FaUser />}
                  </div>
                  <div className="chatbot__message-content">
                    <p>{message.text}</p>
                    <div className="chatbot__message-footer">
                      <span className="chatbot__message-time">{message.time}</span>
                      {message.type === 'bot' && (
                        <button
                          className="chatbot__copy-btn"
                          onClick={() => handleCopyMessage(message.text)}
                          aria-label="Copy message"
                          title="Copy to clipboard"
                        >
                          <FaCopy />
                        </button>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <motion.div
                  className="chatbot__message chatbot__message--bot"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <div className="chatbot__message-avatar">
                    <FaRobot />
                  </div>
                  <div className="chatbot__typing">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Replies */}
            {messages.length <= 2 && (
              <div className="chatbot__quick-replies">
                {quickReplies.map((reply, index) => (
                  <button
                    key={index}
                    className="chatbot__quick-reply"
                    onClick={() => handleQuickReply(reply)}
                  >
                    {reply}
                  </button>
                ))}
              </div>
            )}

            {/* Input */}
            <div className="chatbot__input-container">
              <input
                ref={inputRef}
                type="text"
                className="chatbot__input"
                placeholder="Type your message..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
              />
              <button
                className="chatbot__send"
                onClick={() => handleSendMessage()}
                disabled={!inputValue.trim()}
                aria-label="Send message"
              >
                <FaPaperPlane />
              </button>
            </div>

            {/* Footer */}
            <div className="chatbot__footer">
              <span>Powered by Analogics Group</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ChatBot;
