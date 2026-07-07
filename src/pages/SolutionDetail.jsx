// ================================
// Solution Detail Page - Analogics Website
// ================================

import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaCheckCircle, FaDownload } from 'react-icons/fa';
import TypeWriter from '../components/TypeWriter/TypeWriter';
import { solutions, solutionCategories } from '../data/solutions';
import './ProductDetail.css';

const SolutionDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const solution = solutions.find(s => s.id === parseInt(id));

  if (!solution) {
    return (
      <div className="product-detail-error">
        <h2>Solution not found</h2>
        <Link to="/solutions" className="btn btn-primary">Back to Solutions</Link>
      </div>
    );
  }

  const categoryInfo = solutionCategories.find(c => c.id === solution.category);
  const hasDetailedInfo = solution.detailedInfo;
  const overviewText = hasDetailedInfo?.overview || solution.description;
  const keyFeatures = hasDetailedInfo?.keyFeatures || solution.features || [];
  const keyBenefits = hasDetailedInfo?.keyBenefits || [];
  const lotusMobileAttendance = hasDetailedInfo?.lotusMobileAttendance;
  const moreInfoLink = hasDetailedInfo?.moreInfoLink;
  const systemRequirements = hasDetailedInfo?.systemRequirements || [];
  const applicationAreas = hasDetailedInfo?.applicationAreas || [];
  const appScreenshots = hasDetailedInfo?.appScreenshots || [];
  const relatedProduct = hasDetailedInfo?.relatedProduct;
  // MDMS-specific fields
  const keyFeaturesImage = hasDetailedInfo?.keyFeaturesImage;
  const remoteFeatures = hasDetailedInfo?.remoteFeatures || [];
  const importantFeatures = hasDetailedInfo?.importantFeatures || [];
  const deviceSecurity = hasDetailedInfo?.deviceSecurity || [];
  const accessControl = hasDetailedInfo?.accessControl;

  return (
    <main className="product-detail">
      <section className="product-detail__header">
        <div className="container">
          <motion.button
            className="product-detail__back"
            onClick={() => navigate('/solutions')}
            whileHover={{ x: -5 }}
          >
            <FaArrowLeft /> Back to Solutions
          </motion.button>

          <motion.div
            className="product-detail__header-content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="product-detail__category">{categoryInfo?.name || 'Category'}</span>
            <h1 className="product-detail__title">{solution.name}</h1>
          </motion.div>
        </div>
      </section>

      <section className="product-detail__content section">
        <div className="container">
          <div className="product-detail__grid">
            <motion.div
              className="product-detail__image-wrapper"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="product-detail__image">
                {solution.image ? (
                  <img src={solution.image} alt={solution.name} />
                ) : (
                  <div
                    style={{
                      width: '100%',
                      height: '100%',
                      minHeight: 260,
                      border: '1px solid var(--gray-100)',
                      borderRadius: 'var(--radius-xl)',
                      background: 'var(--gray-50)'
                    }}
                  />
                )}
              </div>
            </motion.div>

            <motion.div
              className="product-detail__overview"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h2>Overview</h2>
              <p>
                <TypeWriter text={overviewText} speed={50} delay={300} />
              </p>

              {moreInfoLink?.to && (
                <p style={{ marginTop: 'var(--spacing-sm)' }}>
                  {moreInfoLink.prefixText || 'For more details, please '}
                  <Link
                    to={moreInfoLink.to}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'var(--primary)', fontWeight: 600 }}
                  >
                    {moreInfoLink.label || 'click here'}
                  </Link>
                </p>
              )}
            </motion.div>
          </div>

          {keyFeatures.length > 0 && (
            <motion.div
              className="product-detail__section"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2>Key Features</h2>
              <ul className="product-detail__features">
                {keyFeatures.map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <FaCheckCircle className="feature-icon" />
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}

          {/* Key Features of MDM – diagram image */}
          {keyFeaturesImage && (
            <motion.div
              className="product-detail__section"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2>Key Features of MDM</h2>
              <div className="mdms-key-features-image">
                <img src={keyFeaturesImage} alt="Key Features of MDM" />
              </div>
            </motion.div>
          )}

          {/* MDMS – Remote Control Features */}
          {remoteFeatures.length > 0 && (
            <motion.div
              className="product-detail__section"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2>Remote Control Features</h2>
              <ul className="product-detail__features">
                {remoteFeatures.map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <FaCheckCircle className="feature-icon" />
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}

          {/* MDMS – Important Features */}
          {importantFeatures.length > 0 && (
            <motion.div
              className="product-detail__section"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2>Important Features</h2>
              <ul className="product-detail__features">
                {importantFeatures.map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <FaCheckCircle className="feature-icon" />
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}

          {/* MDMS – Device Security */}
          {deviceSecurity.length > 0 && (
            <motion.div
              className="product-detail__section"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2>Device Security</h2>
              <ul className="product-detail__features">
                {deviceSecurity.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <FaCheckCircle className="feature-icon" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}

          {/* MDMS – Access Control */}
          {accessControl && (
            <motion.div
              className="product-detail__section"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2>Access Control</h2>
              {accessControl.description && (
                <p style={{ marginBottom: 'var(--spacing-lg)', color: 'var(--gray-700)' }}>
                  {accessControl.description}
                </p>
              )}
              {accessControl.roles?.length > 0 && (
                <div className="mdms-roles-grid">
                  {accessControl.roles.map((role, index) => (
                    <motion.div
                      key={index}
                      className="mdms-role-badge"
                      initial={{ opacity: 0, scale: 0.85 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.08 }}
                    >
                      {role}
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.div>
          )}

          {lotusMobileAttendance?.points?.length > 0 && (
            <motion.div
              className="product-detail__section"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2>{lotusMobileAttendance.title || 'Lotus for Mobile Attendance'}</h2>
              <ul className="product-detail__features">
                {lotusMobileAttendance.points.map((point, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <FaCheckCircle className="feature-icon" />
                    <span>{point}</span>
                  </motion.li>
                ))}
              </ul>

              {lotusMobileAttendance.link?.to && (
                <p style={{ marginTop: 'var(--spacing-sm)' }}>
                  For more information please{' '}
                  <Link
                    to={lotusMobileAttendance.link.to}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'var(--primary)', fontWeight: 600 }}
                  >
                    {lotusMobileAttendance.link.label || 'click here'}
                  </Link>
                </p>
              )}
            </motion.div>
          )}

          {keyBenefits.length > 0 && (
            <motion.div
              className="product-detail__section"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2>Key Benefits</h2>
              <ul className="product-detail__features">
                {keyBenefits.map((benefit, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <FaCheckCircle className="feature-icon" />
                    <span>{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}

          {systemRequirements.length > 0 && (
            <motion.div
              className="product-detail__section"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2>System Requirements</h2>
              <ul className="product-detail__applications">
                {systemRequirements.map((req, index) => (
                  <li key={index}>{req}</li>
                ))}
              </ul>
            </motion.div>
          )}

          {applicationAreas.length > 0 && (
            <motion.div
              className="product-detail__section"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2>Application Areas</h2>
              <ul className="product-detail__applications">
                {applicationAreas.map((area, index) => (
                  <li key={index}>{area}</li>
                ))}
              </ul>
            </motion.div>
          )}

          {appScreenshots.length > 0 && (
            <motion.div
              className="product-detail__section"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2>App Screenshots</h2>
              <div className="app-screenshots-grid">
                {appScreenshots.map((screenshot, index) => (
                  <motion.div
                    key={index}
                    className="screenshot-item"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <img src={screenshot.image} alt={screenshot.title} />
                    <h3>{screenshot.title}</h3>
                    <p>{screenshot.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {relatedProduct && (
            <motion.div
              className="product-detail__section"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2>{relatedProduct.title}</h2>
              <p>
                {relatedProduct.description}{' '}
                {relatedProduct.link?.to && (
                  <Link 
                    to={relatedProduct.link.to}
                    className="text-link"
                  >
                    {relatedProduct.link.label || 'click here'}
                  </Link>
                )}
              </p>
            </motion.div>
          )}

          <motion.div
            className="product-detail__cta"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3>Interested in this solution?</h3>
            <p>Get in touch with our team for more details about {solution.name}</p>
            <Link to="/contact" className="btn btn-primary">Contact Us</Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default SolutionDetail;
