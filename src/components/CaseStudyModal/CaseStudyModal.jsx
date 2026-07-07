// ================================
// Case Study Modal Component
// ================================

import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaChevronRight } from 'react-icons/fa';
import './CaseStudyModal.css';

const bulletPrefix = /^•\s*/;

const headingKeywords = [
  'Project Overview',
  'Problem',
  'Solution',
  'Impact',
  'Key Insight',
  'Overview'
];

const isSubheadingLine = (line) => {
  const trimmed = line.trim();
  if (!trimmed) return false;
  if (bulletPrefix.test(trimmed)) return false;

  // Explicit headings (preferred over heuristics to avoid mis-highlighting lines like "Client: ...").
  if (trimmed.endsWith(':')) return true;

  const normalized = trimmed.endsWith(':') ? trimmed.slice(0, -1).trim() : trimmed;
  if (headingKeywords.includes(normalized)) return true;

  // Headings with a label prefix (e.g., "Solution: Analogics MDM Implementation")
  return headingKeywords.some((k) => normalized.startsWith(`${k}:`));
};

const renderRichText = (text, keyPrefix, options = {}) => {
  if (!text) return null;

  const sectionTitle = options.sectionTitle?.trim();

  const lines = String(text).split('\n');
  const elements = [];
  let bulletItems = [];
  let keyIndex = 0;

  const flushBullets = () => {
    if (bulletItems.length === 0) return;
    elements.push(
      <ul className="case-modal__list" key={`${keyPrefix}-list-${keyIndex++}`}>
        {bulletItems.map((item, i) => (
          <li key={`${keyPrefix}-li-${keyIndex++}-${i}`}>{item}</li>
        ))}
      </ul>
    );
    bulletItems = [];
  };

  for (const rawLine of lines) {
    const line = rawLine.trimEnd();
    const trimmed = line.trim();

    if (!trimmed) {
      flushBullets();
      // Create a small visual separation for blank lines.
      elements.push(<div className="case-modal__spacer" key={`${keyPrefix}-spacer-${keyIndex++}`} />);
      continue;
    }

    if (bulletPrefix.test(trimmed)) {
      bulletItems.push(trimmed.replace(bulletPrefix, '').trim());
      continue;
    }

    flushBullets();

    if (isSubheadingLine(trimmed)) {
      let headingText = trimmed.endsWith(':') ? trimmed.slice(0, -1).trim() : trimmed;

      // If we're already inside a section named the same as the heading keyword,
      // drop the redundant prefix (e.g., in the Solution section, turn
      // "Solution: Analogics MDM Implementation" into "Analogics MDM Implementation").
      if (sectionTitle && headingKeywords.includes(sectionTitle)) {
        if (headingText === sectionTitle) {
          continue;
        }
        const prefix = `${sectionTitle}:`;
        if (headingText.startsWith(prefix)) {
          headingText = headingText.slice(prefix.length).trim();
          if (!headingText) continue;
        }
      }

      elements.push(
        <h4 className="case-modal__subheading" key={`${keyPrefix}-h-${keyIndex++}`}>{headingText}</h4>
      );
      continue;
    }

    elements.push(<p key={`${keyPrefix}-p-${keyIndex++}`}>{trimmed}</p>);
  }

  flushBullets();
  return elements;
};

const CaseStudyModal = ({ isOpen, onClose, caseStudy }) => {
  if (!caseStudy) return null;

  const { title, description, logo, fullContent } = caseStudy;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="case-modal__backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          {/* Modal */}
          <motion.div
            className="case-modal"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="case-modal__header">
              <div className="case-modal__header-content">
                <span className="case-modal__label">CASE STUDY</span>
                <h2 className="case-modal__title">{title}</h2>
                <p className="case-modal__subtitle">{description}</p>
              </div>
              <button className="case-modal__close" onClick={onClose}>
                <FaTimes />
                <span>CLOSE</span>
              </button>
            </div>

            {/* Body */}
            <div className="case-modal__body">
              {/* About Section */}
              <section className="case-modal__section">
                <h3 className="case-modal__section-title">About {title}</h3>
                <div className="case-modal__about-content">
                  {logo && (
                    <div className="case-modal__logo">
                      <img src={logo} alt={`${title} logo`} />
                    </div>
                  )}
                  <div>
                    {renderRichText(fullContent?.about, 'about')}
                  </div>
                </div>
              </section>

              {/* Objective Section */}
              <section className="case-modal__section">
                <h3 className="case-modal__section-title">Objective</h3>
                <div className="case-modal__content">
                  {renderRichText(fullContent?.objective, 'objective', { sectionTitle: 'Objective' })}
                </div>
              </section>

              {/* Solution Section */}
              <section className="case-modal__section">
                <h3 className="case-modal__section-title">Solution</h3>
                <div className="case-modal__content">
                  {renderRichText(fullContent?.solution, 'solution', { sectionTitle: 'Solution' })}
                </div>
              </section>

              {/* Contact Section - Single Contact */}
              {fullContent?.contact && (
                <section className="case-modal__section">
                  <h3 className="case-modal__section-title">Contact Us</h3>
                  <div className="case-modal__contact">
                    <h4 className="case-modal__contact-name">{fullContent.contact.name}</h4>
                    <ul className="case-modal__contact-list">
                      <li>
                        <FaChevronRight />
                        <span>{fullContent.contact.designation}</span>
                      </li>
                      <li>
                        <FaChevronRight />
                        <span>Ph: {fullContent.contact.phone}</span>
                      </li>
                      <li>
                        <FaChevronRight />
                        <span>{fullContent.contact.email}</span>
                      </li>
                    </ul>
                  </div>
                </section>
              )}

              {/* Contact Section - Multiple Contacts */}
              {fullContent?.contacts && fullContent.contacts.length > 0 && (
                <section className="case-modal__section">
                  <h3 className="case-modal__section-title">Contact Us</h3>
                  <div className="case-modal__contacts-grid">
                    {fullContent.contacts.map((contact, index) => (
                      <div key={index} className="case-modal__contact">
                        <h4 className="case-modal__contact-name">{contact.name}</h4>
                        <ul className="case-modal__contact-list">
                          <li>
                            <FaChevronRight />
                            <span>{contact.designation}</span>
                          </li>
                          <li>
                            <FaChevronRight />
                            <span>Ph: {contact.phone}</span>
                          </li>
                          <li>
                            <FaChevronRight />
                            <span>{contact.email}</span>
                          </li>
                        </ul>
                      </div>
                    ))}
                  </div>
                </section>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CaseStudyModal;
