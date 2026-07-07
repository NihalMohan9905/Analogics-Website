// ================================
// Form Progress Component - Analogics Website
// ================================

import { motion } from 'framer-motion';
import { FaCheck } from 'react-icons/fa';
import './FormProgress.css';

const FormProgress = ({ currentStep, totalSteps, steps }) => {
  const progress = (currentStep / totalSteps) * 100;

  return (
    <div className="form-progress">
      <div className="form-progress__bar-container">
        <motion.div
          className="form-progress__bar"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        />
      </div>

      <div className="form-progress__steps">
        {steps.map((step, index) => {
          const stepNumber = index + 1;
          const isCompleted = stepNumber < currentStep;
          const isCurrent = stepNumber === currentStep;

          return (
            <motion.div
              key={step}
              className={`form-progress__step ${
                isCompleted ? 'form-progress__step--completed' : ''
              } ${isCurrent ? 'form-progress__step--current' : ''}`}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="form-progress__step-circle">
                {isCompleted ? (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <FaCheck />
                  </motion.div>
                ) : (
                  <span>{stepNumber}</span>
                )}
              </div>
              <span className="form-progress__step-label">{step}</span>
            </motion.div>
          );
        })}
      </div>

      <div className="form-progress__percentage">
        <motion.span
          key={progress}
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          {Math.round(progress)}% Complete
        </motion.span>
      </div>
    </div>
  );
};

export default FormProgress;
