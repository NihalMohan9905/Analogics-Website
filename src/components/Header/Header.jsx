// ================================
// Header Component - Analogics Website
// ================================

import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaBars,
  FaTimes,
  FaArrowLeft,
  FaMobileAlt,
  FaShieldAlt,
  FaPlug
} from 'react-icons/fa';
import './Header.css';

const productMenuItems = [
  { id: 'utilities', name: 'Utilities', icon: 'FaMobileAlt', link: '/products/utilities' },
  { id: 'handheld', name: 'Hand Held Computers', icon: 'FaMobileAlt', link: '/products/handheld' }
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const mobileMenuVariants = {
    hidden: { x: '100%' },
    visible: {
      x: 0,
      transition: { type: 'tween', duration: 0.3 }
    }
  };

  return (
    <header className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
      <div className="container">
        <nav className="nav">
          {/* Logo */}
          <Link to="/" className="logo">
            <img src="/logo.png" alt="Analogics - Redefining Technologies" className="logo__image" />
          </Link>

          {/* Desktop Navigation */}
          <ul className="nav__menu">
            <li className="nav__item">
              <Link to="/" className={`nav__link ${location.pathname === '/' ? 'active' : ''}`}>
                Home
              </Link>
            </li>
            <li className="nav__item">
              <Link to="/about" className={`nav__link ${location.pathname === '/about' ? 'active' : ''}`}>
                About Us
              </Link>
            </li>

            {/* Products Link */}
            <li className="nav__item">
              <Link to="/products" className={`nav__link ${location.pathname.includes('/products') ? 'active' : ''}`}>
                Products
              </Link>
            </li>

            {/* Solutions Link */}
            <li className="nav__item">
              <Link to="/solutions" className={`nav__link ${location.pathname.includes('/solutions') ? 'active' : ''}`}>
                Software & Solutions
              </Link>
            </li>

            <li className="nav__item">
              <Link to="/contact" className={`nav__link ${location.pathname === '/contact' ? 'active' : ''}`}>
                Contact Us
              </Link>
            </li>
          </ul>

          {/* Mobile Menu Toggle */}
          <button
            className="nav__toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="mobile-menu"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <button
              type="button"
              className="mobile-menu__back"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <FaArrowLeft />
            </button>
            <ul className="mobile-menu__list">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/products">Products</Link></li>
              <li><Link to="/solutions">Software & Solutions</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
            <Link to="/contact" className="btn btn-secondary mobile-menu__cta">
              Get a Quote
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
