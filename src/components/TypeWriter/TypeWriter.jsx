// ================================
// TypeWriter Component - Word-by-Word Animation
// ================================

import { useState, useEffect } from 'react';
import './TypeWriter.css';

const TypeWriter = ({ text, speed = 80, className = '', delay = 0, startAnimation = true }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const words = text.split(' ');

  useEffect(() => {
    // Only start animation if startAnimation is true
    if (!startAnimation) return;

    if (currentIndex < words.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + (prev ? ' ' : '') + words[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, currentIndex === 0 ? delay : speed);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, words, speed, delay, startAnimation]);

  return (
    <span className={`typewriter ${className}`}>
      {displayedText}
      {currentIndex < words.length && startAnimation && <span className="typewriter__cursor">|</span>}
    </span>
  );
};

export default TypeWriter;
