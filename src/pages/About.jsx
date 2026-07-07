// ================================
// About Page - Analogics Website
// ================================

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  FaCheckCircle,
  FaBullseye,
  FaEye,
  FaHeart,
  FaUsers,
  FaAward,
  FaGlobe
} from 'react-icons/fa';
import SectionTitle from '../components/SectionTitle/SectionTitle';
import Stats from '../components/Stats/Stats';
import TypeWriter from '../components/TypeWriter/TypeWriter';
import './About.css';

const overviewGalleryImages = [
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

// Leader Card Component with scroll-triggered animation
const LeaderCard = ({ leader, delay }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      className="leader__card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
    >
      <div className="leader__photo-wrapper">
        <div className="leader__photo">
          <img src={leader.photo} alt={leader.name} />
        </div>
      </div>
      <div className="leader__info">
        <h3 className="leader__name">{leader.name}</h3>
        <p className="leader__title">{leader.title}</p>
      </div>
      <div className="leader__content">
        <p className="leader__bio">
          <TypeWriter
            text={leader.bio}
            speed={20}
            delay={0}
            startAnimation={isInView}
          />
        </p>
      </div>
    </motion.div>
  );
};

const values = [
  {
    icon: FaHeart,
    title: 'Customer First',
    description: 'We prioritize understanding and meeting our customers\' unique needs.'
  },
  {
    icon: FaAward,
    title: 'Quality Excellence',
    description: 'Committed to delivering products and solutions of the highest quality.'
  },
  {
    icon: FaUsers,
    title: 'Team Spirit',
    description: 'Collaborative work environment fostering innovation and growth.'
  },
  {
    icon: FaGlobe,
    title: 'Global Vision',
    description: 'Expanding our reach while maintaining local relevance and support.'
  }
];

const milestones = [
  { year: '2000', event: 'Company Founded', description: 'Started with a vision to provide technology solutions' },
  { year: '2005', event: 'First Product Launch', description: 'Launched our first handheld device' },
  { year: '2010', event: 'Manufacturing Unit', description: 'Established our first manufacturing facility' },
  { year: '2015', event: '100+ Clients', description: 'Crossed 100 enterprise clients milestone' },
  { year: '2020', event: 'Global Expansion', description: 'Expanded operations internationally' },
  { year: '2024', event: '650K+ Devices', description: 'Over 650,000 devices deployed worldwide' }
];

const leaders = [
  {
    name: 'M. Surender Reddy',
    title: 'Founder & Managing Director',
    photo: '/images/surender-reddy.jpg',
    bio: 'A technocrat entrepreneur with 43 years of experience in the electronics industry. A post graduate in M.Tech, Advanced Electronics from JNTU, Hyderabad. He has worked in reputed organization, ISRO for 20 yrs. in Design & Development of Space systems, Remote Sensing Systems for Mineral exploration and Mapping applications. He left ISRO to become an entrepreneur in 1999 and since then is the driving force for Analogics and his dedicated efforts have made ATIL a technology focused & solution-oriented today.'
  },
  {
    name: 'D. Prashanth',
    title: 'Director - R & D',
    photo: '/images/d-prashanth.jpg',
    bio: 'Youngest Director of ATIL, who has been associated with the company since 2003. He has overall Degree with specialization in Electronics & Communications from Osmania University, Hyderabad. Prior to joining Analogics he was associated with Research Centre Imarat (RCI) for 2 years. He has overall experience of 22 years and is actively involved in the design & development of new technologies and products.'
  },
  {
    name: 'Pavan Kayathi',
    title: 'Director - IT',
    photo: '/images/pavan-kayathi.jpg',
    bio: 'He is the youngest Director at Analogics, heading the IT wing of the company. On finishing his under graduation from JNTU, he pursued his MS in Computer Science from Oklahoma State University, USA and has since then worked with multiple MNC\'s in the US & After consulting his services at Analogics for more than an year he joined the organization full time as Software Projects Head in the year 2015 and has since then never looked back. He has been in the IT sector for over 15 years now and brings with him a gamut of domain expertise.'
  }
];

const About = () => {
  return (
    <main className="about">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero__background"></div>
        <div className="container">
          <motion.div
            className="about-hero__content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="about-hero__subtitle">About Us</span>
            <h1 className="about-hero__title">Redefining Technologies</h1>
            <p className="about-hero__description">
              For over two decades, we've been at the forefront of technology innovation,
              providing end-to-end solutions that transform businesses across industries.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Overview with Images */}
      <section className="overview section">
        <div className="container">
          <div className="overview__content">
            <motion.div
              className="overview__images"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {overviewGalleryImages.map((img) => (
                <div className="overview__image-item" key={img.src}>
                  <img src={img.src} alt={img.alt} className="overview__img" loading="lazy" />
                </div>
              ))}
            </motion.div>

            <motion.div
              className="overview__text"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="section-title section-title--left">
                <span className="section-title__subtitle">Who We Are</span>
                <h2 className="section-title__title">
                  <TypeWriter
                    text="Welcome to Analogics Group"
                    speed={100}
                    delay={0}
                  />
                </h2>
              </div>
              <p>
                <TypeWriter
                  text="We provide end-to-end technology solutions to various industry sectors with our innovative range of products and software solutions. Over the past two decades, the focus has been on understanding customer needs and providing cost-effective solutions, thus making us a market leader for providing efficient technology solutions in India."
                  speed={50}
                  delay={2800}
                />
              </p>
              <p>
                <TypeWriter
                  text="Today our portfolio of products and solutions include Hand Held computers, Portable Printers, Smart Grid products & solutions, Time & Biometric attendance solutions, Micro ATMs, Rugged Tablets, Ticketing & Billing machines, AC & DC Solar Water Pump Controllers, Grid Tied Inverters, Defence products and a range of high quality accessories."
                  speed={50}
                  delay={7500}
                />
              </p>
              <ul className="overview__list">
                <li><FaCheckCircle /> 4 State-of-the-art Manufacturing Units</li>
                <li><FaCheckCircle /> 50+ Range of Products</li>
                <li><FaCheckCircle /> 100+ Clients Worldwide</li>
                <li><FaCheckCircle /> 250+ Dedicated Team Members</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Group of Companies */}
      <section className="companies section">
        <div className="container">
          <div className="companies__header">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="companies__title">GROUP OF COMPANIES</h2>
              <p className="companies__subtitle">
                The Analogics Group comprises of 3 operating companies, including Analogics Tech India Ltd.
              </p>
            </motion.div>
          </div>

          <div className="companies__grid">
            <motion.div
              className="company__card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="company__logo">
                <img src="/images/c2p-logo.png" alt="C2P Logo" />
              </div>
              <h3 className="company__name">C2P Engineering Solutions Pvt Ltd.</h3>
              <p className="company__description">
                Incorporated in 2003 and based in Hyderabad, C2P is a full-service product design and development
                company that provides innovative and unique designs of the highest standards.
              </p>
            </motion.div>

            <motion.div
              className="company__card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="company__logo">
                <img src="/images/secure-data-logo.png" alt="Secure Data Products Logo" />
              </div>
              <h3 className="company__name">Secure Data Products</h3>
              <p className="company__description">
                Started in the year 2002, Secure Data Products is a limited company with the main objective to provide
                AMC services and After-sales services for all the products and projects executed by Analogics all over India.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Production Units */}
      <section className="production section">
        <div className="container">
          <motion.div
            className="production__header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="production__title">PRODUCTION UNITS</h2>
          </motion.div>

          <div className="production__grid">
            <motion.div
              className="production__card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="production__image">
                <img src="/images/production-unit-1.jpg" alt="Production Unit 1" />
              </div>
              <div className="production__info">
                <h3>Production Unit - I</h3>
                <p>Nacharam, Hyderabad</p>
              </div>
            </motion.div>

            <motion.div
              className="production__card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="production__image">
                <img src="/images/production-unit-2.jpg" alt="Production Unit 2" />
              </div>
              <div className="production__info">
                <h3>Production Unit - II</h3>
                <p>Kompally, Hyderabad</p>
              </div>
            </motion.div>

            <motion.div
              className="production__card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="production__image">
                <img src="/images/production-unit-3.jpg" alt="Production Unit 3" />
              </div>
              <div className="production__info">
                <h3>Production Unit - III</h3>
                <p>Hardware Park, Hyderabad</p>
              </div>
            </motion.div>

            <motion.div
              className="production__card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <div className="production__image">
                <img src="/images/production-unit-4.jpg" alt="Production Unit 4" />
              </div>
              <div className="production__info">
                <h3>Production Unit - IV</h3>
                <p>Kotdwar, Uttarakhand</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Infrastructure */}
      <section className="infrastructure section">
        <div className="container">
          <div className="infrastructure__header">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="infrastructure__title">INFRASTRUCTURE</h2>
              <p className="infrastructure__subtitle">
                Ever since 1994, we have been growing at a rapid pace and today we are proud to be capable to deliver
                over 20,000 consolidated devices per month in a total of 4 production units.
              </p>
            </motion.div>
          </div>

          <div className="infrastructure__grid">
            <motion.div
              className="infrastructure__image"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <img src="/images/infrastructure-1.jpg" alt="Manufacturing Equipment 1" />
            </motion.div>
            <motion.div
              className="infrastructure__image"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <img src="/images/infrastructure-2.jpg" alt="Manufacturing Equipment 2" />
            </motion.div>
            <motion.div
              className="infrastructure__image"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <img src="/images/infrastructure-3.jpg" alt="Manufacturing Equipment 3" />
            </motion.div>
            <motion.div
              className="infrastructure__image"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <img src="/images/infrastructure-4.jpg" alt="Manufacturing Equipment 4" />
            </motion.div>
            <motion.div
              className="infrastructure__image"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <img src="/images/infrastructure-5.jpg" alt="Manufacturing Equipment 5" />
            </motion.div>
            <motion.div
              className="infrastructure__image"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <img src="/images/infrastructure-6.jpg" alt="Manufacturing Equipment 6" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="certifications section">
        <div className="container">
          <div className="certifications__grid">
            <motion.div
              className="certification__item"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="certification__logo-single">
                <img src="/images/iso-9001-14001.png" alt="ISO 9001 & ISO 14001" />
              </div>
              <div className="certification__text">
                <p>ISO 9001:2025 certified company – Internationally recognized Quality Management System</p>
                <p>ISO 14001:2025 certified company – Internationally recognized Environment Management System.</p>
              </div>
            </motion.div>

            <motion.div
              className="certification__item"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="certification__logo-single">
                <img src="/images/iso-27001.png" alt="ISO 27001" />
              </div>
              <div className="certification__text">
                <p>ISO 27001 certified company - Internationally recognized Information Security Management System (ISMS)</p>
              </div>
            </motion.div>

            <motion.div
              className="certification__item"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="certification__logo-single">
                <img src="/images/cmmi-level3.png" alt="CMMI Level 3" />
              </div>
              <div className="certification__text">
                <p>CMMI Level 3 certified organization</p>
              </div>
            </motion.div>

            <motion.div
              className="certification__item"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <div className="certification__logo-single">
                <img src="/images/dsir.png" alt="DSIR" />
              </div>
              <div className="certification__text">
                <p>DSIR recognized R&D centre – Highest recognition given by the Ministry of Science & Technology, India</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Leadership Management */}
      <section className="leadership section">
        <div className="container">
          <motion.div
            className="leadership__header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="leadership__title">LEADERSHIP MANAGEMENT</h2>
          </motion.div>

          <div className="leadership__grid">
            {leaders.map((leader, index) => (
              <LeaderCard 
                key={index}
                leader={leader}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;

