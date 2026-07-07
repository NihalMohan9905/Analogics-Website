// ================================
// Datasheet Download Modal - Analogics Website
// Captures user details before triggering download
// ================================

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import {
  FaTimes,
  FaUser,
  FaEnvelope,
  FaPhone,
  FaDownload,
  FaCheckCircle,
  FaSpinner,
  FaExclamationCircle,
  FaFileAlt
} from 'react-icons/fa';
import './DatasheetModal.css';

const EMAILJS_SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID  || 'service_t24cl7p';
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_DATASHEET_TEMPLATE_ID || import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_hd1ymdl';
const EMAILJS_PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY  || 'QX39afSpRf-CsHOR0';

const DatasheetModal = ({ isOpen, onClose, productName, datasheetUrl }) => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
  const [errors, setErrors]     = useState({});
  const [status, setStatus]     = useState('idle'); // idle | loading | success | error

  // Reset state whenever modal opens fresh
  useEffect(() => {
    if (isOpen) {
      setFormData({ name: '', email: '', phone: '' });
      setErrors({});
      setStatus('idle');
    }
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => { if (e.key === 'Escape') onClose(); };
    if (isOpen) window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim())                           errs.name  = 'Name is required';
    if (!formData.email.trim())                          errs.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) errs.email = 'Enter a valid email';
    if (!formData.phone.trim())                          errs.phone = 'Phone number is required';
    else if (!/^\+?[\d\s\-()]{7,15}$/.test(formData.phone))      errs.phone = 'Enter a valid phone number';
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const triggerDownload = () => {
    const link = document.createElement('a');
    link.href = datasheetUrl;
    link.download = '';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }

    setStatus('loading');

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name:    formData.name,
          from_email:   formData.email,
          from_phone:   formData.phone,
          product_name: productName,
          to_email:     'info@analogicgroup.com'
        },
        EMAILJS_PUBLIC_KEY
      );

      setStatus('success');
      triggerDownload();

      // Auto-close after 2.5 s
      setTimeout(() => onClose(), 2500);
    } catch (err) {
      console.error('EmailJS error:', err);
      setStatus('error');
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="ds-modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
        >
          <motion.div
            className="ds-modal"
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.95 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          >
            {/* Close button */}
            <button className="ds-modal__close" onClick={onClose} aria-label="Close">
              <FaTimes />
            </button>

            {/* Header */}
            <div className="ds-modal__header">
              <div className="ds-modal__icon-wrap">
                <FaFileAlt />
              </div>
              <h2 className="ds-modal__title">Download Data Sheet</h2>
              <p className="ds-modal__subtitle">
                Please provide your details to download the <strong>{productName}</strong> datasheet.
              </p>
            </div>

            {/* Success state */}
            {status === 'success' ? (
              <motion.div
                className="ds-modal__success"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <FaCheckCircle className="ds-modal__success-icon" />
                <h3>Download Started!</h3>
                <p>Thank you. Your datasheet is downloading and your details have been sent to our team.</p>
              </motion.div>
            ) : (
              <form className="ds-modal__form" onSubmit={handleSubmit} noValidate>
                {/* Name */}
                <div className={`ds-modal__group ${errors.name ? 'ds-modal__group--error' : ''}`}>
                  <label htmlFor="ds-name" className="ds-modal__label">
                    <FaUser className="ds-modal__label-icon" /> Full Name <span>*</span>
                  </label>
                  <input
                    id="ds-name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="ds-modal__input"
                    disabled={status === 'loading'}
                  />
                  {errors.name && (
                    <span className="ds-modal__error">
                      <FaExclamationCircle /> {errors.name}
                    </span>
                  )}
                </div>

                {/* Email */}
                <div className={`ds-modal__group ${errors.email ? 'ds-modal__group--error' : ''}`}>
                  <label htmlFor="ds-email" className="ds-modal__label">
                    <FaEnvelope className="ds-modal__label-icon" /> Email Address <span>*</span>
                  </label>
                  <input
                    id="ds-email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email address"
                    className="ds-modal__input"
                    disabled={status === 'loading'}
                  />
                  {errors.email && (
                    <span className="ds-modal__error">
                      <FaExclamationCircle /> {errors.email}
                    </span>
                  )}
                </div>

                {/* Phone */}
                <div className={`ds-modal__group ${errors.phone ? 'ds-modal__group--error' : ''}`}>
                  <label htmlFor="ds-phone" className="ds-modal__label">
                    <FaPhone className="ds-modal__label-icon" /> Phone Number <span>*</span>
                  </label>
                  <input
                    id="ds-phone"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                    className="ds-modal__input"
                    disabled={status === 'loading'}
                  />
                  {errors.phone && (
                    <span className="ds-modal__error">
                      <FaExclamationCircle /> {errors.phone}
                    </span>
                  )}
                </div>

                {/* Server error */}
                {status === 'error' && (
                  <div className="ds-modal__server-error">
                    <FaExclamationCircle />
                    Something went wrong. Please try again or contact us directly at&nbsp;
                    <a href="mailto:info@analogicgroup.com">info@analogicgroup.com</a>
                  </div>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  className="ds-modal__submit"
                  disabled={status === 'loading'}
                >
                  {status === 'loading' ? (
                    <><FaSpinner className="ds-modal__spinner" /> Sending…</>
                  ) : (
                    <><FaDownload /> Download Data Sheet</>
                  )}
                </button>

                <p className="ds-modal__privacy">
                  Your information will only be used to process this request and will be shared with our team at&nbsp;
                  <a href="mailto:info@analogicgroup.com">info@analogicgroup.com</a>.
                </p>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DatasheetModal;
