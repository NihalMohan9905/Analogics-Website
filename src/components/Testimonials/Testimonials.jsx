// ================================
// Testimonials Component - Analogics Website
// ================================

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight, FaStar, FaQuoteLeft } from 'react-icons/fa';
import './Testimonials.css';

const Testimonials = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    if (!isAutoPlay || testimonials.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlay, testimonials.length]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlay(false);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlay(false);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlay(false);
  };

  if (!testimonials || testimonials.length === 0) {
    return null;
  }

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="testimonials">
      <div className="testimonials__container">
        <FaQuoteLeft className="testimonials__quote-icon" />
        
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            className="testimonials__content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {/* Rating */}
            <div className="testimonials__rating">
              {[...Array(5)].map((_, i) => (
                <FaStar
                  key={i}
                  className={`testimonials__star ${
                    i < currentTestimonial.rating ? 'testimonials__star--filled' : ''
                  }`}
                />
              ))}
            </div>

            {/* Review Text */}
            <p className="testimonials__text">"{currentTestimonial.text}"</p>

            {/* Author Info */}
            <div className="testimonials__author">
              <div className="testimonials__author-info">
                <h4 className="testimonials__author-name">{currentTestimonial.name}</h4>
                <p className="testimonials__author-position">
                  {currentTestimonial.position}
                  {currentTestimonial.company && (
                    <span className="testimonials__author-company"> • {currentTestimonial.company}</span>
                  )}
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        {testimonials.length > 1 && (
          <>
            <button
              className="testimonials__nav testimonials__nav--prev"
              onClick={goToPrevious}
              aria-label="Previous testimonial"
            >
              <FaChevronLeft />
            </button>
            <button
              className="testimonials__nav testimonials__nav--next"
              onClick={goToNext}
              aria-label="Next testimonial"
            >
              <FaChevronRight />
            </button>

            {/* Dots Indicator */}
            <div className="testimonials__dots">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`testimonials__dot ${
                    index === currentIndex ? 'testimonials__dot--active' : ''
                  }`}
                  onClick={() => goToSlide(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Testimonials;
