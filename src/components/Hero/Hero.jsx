// ================================
// Hero Component - Analogics Website
// ================================

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowRight, FaPlay } from 'react-icons/fa';
import './Hero.css';

const slides = [
  {
    id: 1,
    title: 'Power Utilities',
    subtitle: 'Advanced Solutions',
    description: 'Comprehensive power utility management solutions for modern infrastructure.',
    cta: 'Learn More',
    link: '/products/utilities',
    image: '/images/software solution 4.jpg'
  },
  {
    id: 2,
    title: 'Hand Held Computers',
    subtitle: 'Rugged & Reliable',
    description: 'Industrial-grade handheld devices designed for field operations in challenging environments.',
    cta: 'Learn More',
    link: '/products/handheld',
    image: '/images/software solution 2.jpg'
  },
  {
    id: 3,
    title: 'Software & Solutions',
    subtitle: 'Custom & Scalable',
    description: 'Powerful cross-platform software applications designed to simplify your operations.',
    cta: 'View Solutions',
    link: '/solutions',
    image: '/images/software-solutions.jpg'
  },
  {
    id: 4,
    title: 'Watermeters',
    subtitle: 'Smart & Efficient',
    description: 'Advanced water metering solutions for accurate measurement and management.',
    cta: 'Learn More',
    link: '/products/water',
    image: '/images/software solution 3.jpg'
  },
  {
    id: 5,
    title: 'Solar Inverters & Controllers',
    subtitle: 'Renewable Energy',
    description: 'Advanced solar inverters and controllers for efficient renewable energy management.',
    cta: 'Learn More',
    link: '/products/solar',
    image: '/images/software solution 5.jpg'
  }
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const handleScrollDown = () => {
    const nextSection = document.getElementById('home-welcome');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
      return;
    }

    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  };

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const slideVariants = {
    enter: { opacity: 0, x: 100 },
    center: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: 'easeOut' }
    })
  };

  return (
    <section className="hero">
      {/* Background Gradient */}
      <div className="hero__background">
        <div className="hero__gradient hero__gradient--left"></div>
        <div className="hero__gradient hero__gradient--right"></div>
        <div className="hero__pattern"></div>
      </div>

      <div className="container">
        <div className="hero__content">
          {/* Left Content */}
          <div className="hero__text">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="hero__slide-content"
              >
                <motion.span
                  className="hero__subtitle"
                  custom={0}
                  variants={textVariants}
                >
                  {slides[currentSlide].subtitle}
                </motion.span>

                <motion.h1
                  className="hero__title"
                  custom={1}
                  variants={textVariants}
                >
                  {slides[currentSlide].title}
                </motion.h1>

                <motion.p
                  className="hero__description"
                  custom={2}
                  variants={textVariants}
                >
                  {slides[currentSlide].description}
                </motion.p>

                <motion.div
                  className="hero__buttons"
                  custom={3}
                  variants={textVariants}
                >
                  <Link to={slides[currentSlide].link} className="btn btn-secondary btn-lg">
                    {slides[currentSlide].cta}
                    <FaArrowRight />
                  </Link>
                </motion.div>
              </motion.div>
            </AnimatePresence>

            {/* Slide Indicators */}
            <div className="hero__indicators hero__indicators--desktop">
              {slides.map((_, index) => (
                <button
                  key={index}
                  className={`hero__indicator ${index === currentSlide ? 'active' : ''}`}
                  onClick={() => goToSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                >
                  <span className="hero__indicator-progress"></span>
                </button>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="hero__image">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                className="hero__image-wrapper"
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5 }}
              >
                <img
                  src={slides[currentSlide].image}
                  alt={slides[currentSlide].title}
                  className="hero__slide-image"
                />
              </motion.div>
            </AnimatePresence>

            {/* Floating Elements */}
            <motion.div
              className="hero__float hero__float--1"
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity }}
            ></motion.div>
            <motion.div
              className="hero__float hero__float--2"
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 5, repeat: Infinity }}
            ></motion.div>
            <motion.div
              className="hero__float hero__float--3"
              animate={{ y: [-5, 15, -5] }}
              transition={{ duration: 6, repeat: Infinity }}
            ></motion.div>

            {/* Slide Indicators (Mobile: under image) */}
            <div className="hero__indicators hero__indicators--mobile">
              {slides.map((_, index) => (
                <button
                  key={index}
                  className={`hero__indicator ${index === currentSlide ? 'active' : ''}`}
                  onClick={() => goToSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                >
                  <span className="hero__indicator-progress"></span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="hero__scroll-wrapper">
        <motion.button
          type="button"
          className="hero__scroll"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          onClick={handleScrollDown}
          aria-label="Scroll down"
        >
          <span>Scroll Down</span>
          <div className="hero__scroll-line"></div>
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;
