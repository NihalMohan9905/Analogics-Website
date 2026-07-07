// ================================
// FAQ Accordion Component - Analogics Website
// ================================

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown, FaQuestionCircle } from 'react-icons/fa';
import './FAQAccordion.css';

const FAQAccordion = ({ faqs, category = 'all' }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const filteredFAQs = category === 'all' 
    ? faqs 
    : faqs.filter(faq => faq.category === category);

  if (!filteredFAQs || filteredFAQs.length === 0) {
    return null;
  }

  return (
    <div className="faq-accordion">
      {filteredFAQs.map((faq, index) => (
        <motion.div
          key={index}
          className={`faq-accordion__item ${openIndex === index ? 'faq-accordion__item--active' : ''}`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
        >
          <button
            className="faq-accordion__question"
            onClick={() => toggleFAQ(index)}
            aria-expanded={openIndex === index}
          >
            <div className="faq-accordion__question-content">
              <FaQuestionCircle className="faq-accordion__icon" />
              <span className="faq-accordion__question-text">{faq.question}</span>
            </div>
            <FaChevronDown
              className={`faq-accordion__chevron ${
                openIndex === index ? 'faq-accordion__chevron--open' : ''
              }`}
            />
          </button>

          <AnimatePresence>
            {openIndex === index && (
              <motion.div
                className="faq-accordion__answer-wrapper"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
              >
                <div className="faq-accordion__answer">
                  <p>{faq.answer}</p>
                  {faq.link && (
                    <a href={faq.link.url} className="faq-accordion__link">
                      {faq.link.text} →
                    </a>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
};

export default FAQAccordion;
