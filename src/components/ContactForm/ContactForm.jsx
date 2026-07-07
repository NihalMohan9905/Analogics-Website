// ================================
// Contact Form Component - Analogics Website
// ================================

import { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { 
  FaUser, 
  FaEnvelope, 
  FaPhone, 
  FaBuilding, 
  FaCommentAlt,
  FaPaperPlane,
  FaCheck,
  FaExclamationCircle
} from 'react-icons/fa';
import FormProgress from '../FormProgress/FormProgress';
import './ContactForm.css';

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_t24cl7p';
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_hd1ymdl';
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'QX39afSpRf-CsHOR0';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: false,
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: false, message: '' });

    try {
      const templateParams = {
        name: formData.name,
        email: formData.email,
        title: formData.subject,
        phone: formData.phone,
        company: formData.company,
        message: formData.message
      };

      console.log('Sending email with:', {
        serviceId: EMAILJS_SERVICE_ID,
        templateId: EMAILJS_TEMPLATE_ID,
        publicKey: EMAILJS_PUBLIC_KEY,
        params: templateParams
      });

      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      console.log('Email sent successfully:', result);

      setStatus({
        loading: false,
        success: true,
        error: false,
        message: 'Thank you! Your message has been sent successfully.'
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        message: ''
      });

      // Clear success message after 5 seconds
      setTimeout(() => {
        setStatus(prev => ({ ...prev, success: false, message: '' }));
      }, 5000);

    } catch (error) {
      console.error('EmailJS error:', error);
      console.error('Error details:', {
        message: error.message || error.text,
        status: error.status,
        text: error.text
      });
      
      setStatus({
        loading: false,
        success: false,
        error: true,
        message: `Error: ${error.text || error.message || 'Something went wrong. Please try again later.'}`
      });
    }
  };

  // Calculate form progress
  const calculateProgress = () => {
    const fields = ['name', 'email', 'phone', 'company', 'subject', 'message'];
    const filledFields = fields.filter(field => formData[field].trim() !== '');
    const progressPercentage = (filledFields.length / fields.length) * 100;
    
    // Determine current step (1-4)
    if (progressPercentage === 0) return 1;
    if (progressPercentage <= 33) return 2;
    if (progressPercentage <= 66) return 3;
    return 4;
  };

  const formSteps = ['Start', 'Basic Info', 'Details', 'Complete'];

  return (
    <div className="contact-form-wrapper">
      <FormProgress 
        currentStep={calculateProgress()} 
        totalSteps={4} 
        steps={formSteps} 
      />
      
      <motion.form 
      className="contact-form"
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="contact-form__grid">
        {/* Name */}
        <div className="contact-form__group">
          <label className="contact-form__label">
            <FaUser className="contact-form__icon" />
            Full Name *
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="contact-form__input"
          />
        </div>

        {/* Email */}
        <div className="contact-form__group">
          <label className="contact-form__label">
            <FaEnvelope className="contact-form__icon" />
            Email Address *
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="name@example.com"
            required
            className="contact-form__input"
          />
        </div>

        {/* Phone */}
        <div className="contact-form__group">
          <label className="contact-form__label">
            <FaPhone className="contact-form__icon contact-form__icon--phone" />
            Phone Number
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+91 98765 43210"
            className="contact-form__input"
          />
        </div>

        {/* Company */}
        <div className="contact-form__group">
          <label className="contact-form__label">
            <FaBuilding className="contact-form__icon" />
            Company Name
          </label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="Your Company"
            className="contact-form__input"
          />
        </div>
      </div>

      {/* Subject */}
      <div className="contact-form__group">
        <label className="contact-form__label">
          <FaCommentAlt className="contact-form__icon" />
          Subject *
        </label>
        <select
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="contact-form__input contact-form__select"
        >
          <option value="">Select a subject</option>
          <option value="product-inquiry">Product Inquiry</option>
          <option value="solution-inquiry">Solution Inquiry</option>
          <option value="partnership">Partnership Opportunity</option>
          <option value="support">Technical Support</option>
          <option value="other">Other</option>
        </select>
      </div>

      {/* Message */}
      <div className="contact-form__group">
        <label className="contact-form__label">
          <FaCommentAlt className="contact-form__icon" />
          Message *
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us about your requirements..."
          required
          rows="5"
          className="contact-form__input contact-form__textarea"
        ></textarea>
      </div>

      {/* Status Messages */}
      {status.success && (
        <motion.div 
          className="contact-form__status contact-form__status--success"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <FaCheck />
          {status.message}
        </motion.div>
      )}

      {status.error && (
        <motion.div 
          className="contact-form__status contact-form__status--error"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <FaExclamationCircle />
          {status.message}
        </motion.div>
      )}

      {/* Submit Button */}
      <button 
        type="submit" 
        className="contact-form__submit btn btn-secondary btn-lg"
        disabled={status.loading}
      >
        {status.loading ? (
          <>
            <span className="contact-form__spinner"></span>
            Sending...
          </>
        ) : (
          <>
            <FaPaperPlane />
            Send Message
          </>
        )}
      </button>
    </motion.form>
    </div>
  );
};

export default ContactForm;
