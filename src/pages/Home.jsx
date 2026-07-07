// ================================
// Home Page - Analogics Website
// ================================

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaBolt,
  FaWifi,
  FaFingerprint,
  FaBus,
  FaUniversity,
  FaSolarPanel,
  FaShieldAlt,
  FaCashRegister,
  FaArrowRight,
  FaCog,
  FaLaptopCode,
  FaChevronLeft,
  FaChevronRight,
  FaCheckCircle
} from 'react-icons/fa';
import Hero from '../components/Hero/Hero';
import SectionTitle from '../components/SectionTitle/SectionTitle';
import Stats from '../components/Stats/Stats';
import ProductCard from '../components/ProductCard/ProductCard';
import ClientLogos from '../components/ClientLogos/ClientLogos';
import CaseStudyModal from '../components/CaseStudyModal/CaseStudyModal';
import TypeWriter from '../components/TypeWriter/TypeWriter';
import FAQAccordion from '../components/FAQAccordion/FAQAccordion';
import { products } from '../data/products';
import { caseStudies, faqs } from '../data/company';
import './Home.css';

const sectors = [
  { id: 1, name: 'Utilities', icon: FaBolt, link: '/solutions/utilities' },
  { id: 2, name: 'Internet of Things', icon: FaWifi, link: '/products/iot' },
  { id: 3, name: 'Biometric Attendance', icon: FaFingerprint, link: '/solutions/attendance' },
  { id: 5, name: 'Banking', icon: FaUniversity, link: '/solutions/banking' },
  { id: 6, name: 'Solar', icon: FaSolarPanel, link: '/products/solar' },
  { id: 7, name: 'Defence', icon: FaShieldAlt, link: '/products/defence' },
  { id: 8, name: 'Retail Billing', icon: FaCashRegister, link: '/products/printers' }
];

const MotionLink = motion(Link);

const welcomeGalleryImages = [
  { src: '/images/about-1.jpg', alt: 'Biometric Attendance System' },
  { src: '/images/about-2.jpg', alt: 'Handheld Device Manufacturing' },
  { src: '/images/about-3.jpg', alt: 'Field Operations' },
  { src: '/images/about-4.jpg', alt: 'Component Assembly' },
  { src: '/images/about-5.jpg', alt: 'PCB Manufacturing' },
  { src: '/images/about-6.jpg', alt: 'Production & Testing' },
  { src: '/images/about-7.jpg', alt: 'Manufacturing' },
  { src: '/images/about-8.jpg', alt: 'Assembly' },
  { src: '/images/about-9.jpg', alt: 'Quality Inspection' },
];

const successProjects = [
  {
    id: 1,
    tag: 'Power & Energy',
    title: 'Substation Automation',
    image: '/images/products/substation-automation.jpg',
    highlights: [
      'End-to-end IEC 61850-compliant automation deployed across multiple 33/11 kV substations',
      'Integrated SCADA with real-time monitoring, remote control, and fault diagnostics',
      'Reduced manual intervention by over 70%, improving grid reliability and operator safety',
      'Seamless interoperability with legacy RTUs, enabling phased modernisation without downtime',
    ],
  },
];

const Home = () => {
  const featuredProducts = products.slice(0, 4);
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = successProjects.length;
  const prevSlide = () => setCurrentSlide((p) => (p - 1 + totalSlides) % totalSlides);
  const nextSlide = () => setCurrentSlide((p) => (p + 1) % totalSlides);

  const openCaseStudyModal = (study) => {
    setSelectedCaseStudy(study);
    setIsModalOpen(true);
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';
  };

  const closeCaseStudyModal = () => {
    setIsModalOpen(false);
    setSelectedCaseStudy(null);
    document.documentElement.style.overflow = 'auto';
    document.body.style.overflow = 'auto';
  };

  return (
    <main className="home">
      {/* Hero Section */}
      <Hero />

      {/* Welcome Section */}
      <section id="home-welcome" className="welcome section">
        <div className="container">
          <div className="welcome__content">
            <motion.div
              className="welcome__images"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {welcomeGalleryImages.map((img) => (
                <div className="welcome__image" key={img.src}>
                  <img src={img.src} alt={img.alt} className="welcome__img" loading="lazy" />
                </div>
              ))}
            </motion.div>

            <motion.div
              className="welcome__text"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="welcome__subtitle">About Us</span>
              <h2 className="welcome__title">
                <TypeWriter
                  text="Welcome to Analogics Group"
                  speed={100}
                  delay={0}
                />
              </h2>
              <p className="welcome__description">
                <TypeWriter
                  text="We provide end-to-end technology solutions to various industry sectors with our innovative range of products and software solutions. Over the past two decades, the focus has been on understanding customer needs and providing cost-effective solutions, thus making us a market leader for providing efficient technology solutions in India."
                  speed={50}
                  delay={2800}
                />
              </p>
              <p className="welcome__description">
                <TypeWriter
                  text="Today our portfolio of products and solutions include Hand Held computers, Portable Printers, Smart Grid products & solutions, Time & Biometric attendance solutions, Micro ATMs, Rugged Tablets, Ticketing & Billing machines, AC & DC Solar Water Pump Controllers, Grid Tied Inverters, Defence products and a range of high quality accessories."
                  speed={50}
                  delay={7500}
                />
              </p>
              <Link to="/about" className="btn btn-primary">
                Learn More About Us
                <FaArrowRight />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sectors Section */}
      <section className="sectors section">
        <div className="container">
          <div className="sectors__header">
            <motion.p
              className="sectors__label"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Our Products & Solutions Cater to Needs in Multiple Sectors
            </motion.p>
          </div>
          <div className="sectors__grid">
            {sectors.map((sector, index) => {
              const IconComponent = sector.icon;
              return (
                <MotionLink
                  key={sector.id}
                  className="sectors__item sectors__item-link"
                  to={sector.link}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  aria-label={`${sector.name} sector`}
                >
                  <div className="sectors__icon">
                    <IconComponent />
                  </div>
                  <span className="sectors__name">{sector.name}</span>
                </MotionLink>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <Stats />

      {/* Product Launching News Section */}
      <section className="product-launch-news section">
        <div className="container">
          <SectionTitle
            subtitle="Latest News"
            title="Product Launching News"
            description="Introducing our latest innovation in smart motor pump management solutions."
          />

          <motion.div
            className="launch-news__card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="launch-news__image-wrap">
              <img
                src="/images/products/smart-starter.jpg"
                alt="Smart Starter"
                className="launch-news__image"
              />
              <span className="launch-news__badge">New Launch</span>
            </div>

            <div className="launch-news__content">
              <span className="launch-news__category">Agriculture &amp; Irrigation</span>
              <h3 className="launch-news__title">Smart Starter</h3>
              <p className="launch-news__description">
                Analogics' <strong>Smart Starter</strong> is a highly intelligent starter designed to operate motor pump sets locally or remotely, with accurate metering, remote monitoring, and built-in control &amp; protection.
              </p>

              <ul className="launch-news__features">
                <li>Operate motor pump sets locally or remotely</li>
                <li>Performs all metering functions</li>
                <li>Operate, monitor, control &amp; protect the pump sets</li>
                <li>Switch ON/OFF remotely or manually</li>
                <li>Compact size, easy to install</li>
                <li>IP65 device for harsh environmental conditions</li>
                <li>Rustproof &amp; waterproof design</li>
              </ul>

              <div className="launch-news__specs">
                <div className="launch-news__spec-item">
                  <span className="launch-news__spec-label">HP Range</span>
                  <span className="launch-news__spec-value">3 HP to 10 HP</span>
                </div>
                <div className="launch-news__spec-item">
                  <span className="launch-news__spec-label">IP Rating</span>
                  <span className="launch-news__spec-value">IP65</span>
                </div>
                <div className="launch-news__spec-item">
                  <span className="launch-news__spec-label">Control</span>
                  <span className="launch-news__spec-value">Local / Remote</span>
                </div>
                <div className="launch-news__spec-item">
                  <span className="launch-news__spec-label">Protection</span>
                  <span className="launch-news__spec-value">All faults</span>
                </div>
              </div>

              <div className="launch-news__actions">
                <Link to="/products/water/54" className="btn btn-primary">
                  View Product
                  <FaArrowRight />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Latest Success Projects Section */}
      <section className="success-projects section">
        <div className="container">
          <SectionTitle
            subtitle="Our Work"
            title="Latest Success Projects"
            description="Real-world deployments where Analogics technology delivered measurable impact."
          />

          <div className="success-projects__slider">
            <AnimatePresence mode="wait">
              {successProjects.map((project, index) =>
                index === currentSlide ? (
                  <motion.div
                    key={project.id}
                    className="success-projects__card"
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -40 }}
                    transition={{ duration: 0.45 }}
                  >
                    <div className="success-projects__image-wrap">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="success-projects__image"
                        onError={(e) => { e.target.style.display = 'none'; }}
                      />
                      <span className="success-projects__tag">{project.tag}</span>
                    </div>
                    <div className="success-projects__content">
                      <h3 className="success-projects__title">{project.title}</h3>
                      <ul className="success-projects__highlights">
                        {project.highlights.map((point, i) => (
                          <li key={i}>
                            <FaCheckCircle className="success-projects__check" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ) : null
              )}
            </AnimatePresence>

            {/* Controls */}
            {totalSlides > 1 && (
              <div className="success-projects__controls">
                <button className="success-projects__arrow" onClick={prevSlide} aria-label="Previous">
                  <FaChevronLeft />
                </button>
                <div className="success-projects__dots">
                  {successProjects.map((_, i) => (
                    <button
                      key={i}
                      className={`success-projects__dot${i === currentSlide ? ' success-projects__dot--active' : ''}`}
                      onClick={() => setCurrentSlide(i)}
                      aria-label={`Slide ${i + 1}`}
                    />
                  ))}
                </div>
                <button className="success-projects__arrow" onClick={nextSlide} aria-label="Next">
                  <FaChevronRight />
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services section">
        <div className="container">
          <SectionTitle
            subtitle="What We Offer"
            title="Our Services"
            description="We believe in being at the forefront of technological advancement and it is this belief that led us to constantly innovate and provide everything ranging from hardware to software and solutions."
          />

          <div className="services__grid">
            <motion.div
              className="services__card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="services__card-bg"></div>
              <div className="services__card-content">
                <div className="services__card-icon">
                  <FaCog />
                </div>
                <h3>Products</h3>
                <p>
                  Our products are rugged, compact and user-friendly, making it
                  ideal for any field use. We customize all our hardware products
                  in accordance with the client's specific requirements.
                </p>
                <Link to="/products" className="services__card-link">
                  View All Products
                  <FaArrowRight />
                </Link>
              </div>
            </motion.div>

            <motion.div
              className="services__card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{ y: -10 }}
            >
              <div className="services__card-bg"></div>
              <div className="services__card-content">
                <div className="services__card-icon">
                  <FaLaptopCode />
                </div>
                <h3>Software & Solutions</h3>
                <p>
                  Our powerful cross-platform software applications along with our
                  Hand Held Computers and other devices are customizable and are
                  designed to help businesses simplify their operational processes.
                </p>
                <Link to="/solutions" className="services__card-link">
                  View All Solutions
                  <FaArrowRight />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <ClientLogos />

      {/* Case Studies Section */}
      <section className="case-studies section">
        <div className="container">
          <SectionTitle
            subtitle="Success Stories"
            title="Case Studies"
            description="See how our solutions have helped organizations across various sectors achieve their goals."
          />

          <div className="case-studies__grid">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                className="case-studies__card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <span className="case-studies__label">Case Study</span>
                <h3 className="case-studies__title">{study.title}</h3>
                <p className="case-studies__description">{study.description}</p>
                <button
                  className="case-studies__link"
                  onClick={() => openCaseStudyModal(study)}
                >
                  View Case Study
                  <FaArrowRight />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Modal */}
      <CaseStudyModal
        isOpen={isModalOpen}
        onClose={closeCaseStudyModal}
        caseStudy={selectedCaseStudy}
      />

      {/* FAQ Section */}
      <section className="faq-section section">
        <div className="container">
          <SectionTitle
            subtitle="Common Questions"
            title="Frequently Asked Questions"
            description="Find answers to common questions about our products, services, and support."
          />
          <FAQAccordion faqs={faqs} category="all" />
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta section">
        <div className="cta__background"></div>
        <div className="container">
          <motion.div
            className="cta__content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Ready to Transform Your Operations?</h2>
            <p>
              Get in touch with us to discuss how our products and solutions
              can help streamline your business processes.
            </p>
            <div className="cta__buttons">
              <Link to="/contact" className="btn btn-white btn-lg">
                Contact Us
                <FaArrowRight />
              </Link>
              <Link to="/products" className="btn btn-outline btn-lg" style={{ borderColor: 'white', color: 'white' }}>
                Explore Products
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Home;

