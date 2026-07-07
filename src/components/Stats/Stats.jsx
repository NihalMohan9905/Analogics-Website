// ================================
// Stats Component - Analogics Website
// ================================

import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './Stats.css';

const statsData = [
  { id: 1, value: 4, label: 'Manufacturing Units', suffix: '' },
  { id: 2, value: 50, label: 'Range of Products', suffix: '+' },
  { id: 3, value: 100, label: 'Clients Worldwide', suffix: '+' },
  { id: 4, value: 250, label: 'Team Members', suffix: '+' },
  { id: 5, value: 650000, label: 'Hand Held Terminals', suffix: '+', format: true }
];

const Counter = ({ value, suffix, format, isInView }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let startTime = null;
    const duration = 2000; // 2 seconds

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(easeOutQuart * value);
      
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(value); // Ensure final value is exact
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, value]);

  const formatNumber = (num) => {
    if (format && num >= 1000) {
      return num.toLocaleString();
    }
    return num;
  };

  return (
    <span className="stats__value">
      {formatNumber(count)}{suffix}
    </span>
  );
};

const Stats = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section className="stats" ref={ref}>
      <div className="stats__background">
        <div className="stats__stripe stats__stripe--1"></div>
        <div className="stats__stripe stats__stripe--2"></div>
        <div className="stats__stripe stats__stripe--3"></div>
        <div className="stats__stripe stats__stripe--4"></div>
        <div className="stats__stripe stats__stripe--5"></div>
      </div>

      <div className="container">
        <div className="stats__grid">
          {statsData.map((stat, index) => (
            <motion.div 
              key={stat.id}
              className="stats__item"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Counter value={stat.value} suffix={stat.suffix} format={stat.format} isInView={isInView} />
              <span className="stats__label">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
