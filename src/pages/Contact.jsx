// ================================
// Contact Page - Analogics Website
// ================================

import { motion } from 'framer-motion';
import { 
  FaMapMarkerAlt, 
  FaPhone, 
  FaFax,
  FaEnvelope, 
  FaClock,
  FaFacebookF,
  FaLinkedinIn,
  FaStar,
  FaCodeBranch,
  FaTools,
  FaUser,
} from 'react-icons/fa';
import ContactForm from '../components/ContactForm/ContactForm';
import './Contact.css';

const serviceCentres = [
  {
    id: 'hyderabad', city: 'Hyderabad', type: 'corporate',
    info: { name: 'Analogics Tech India Ltd.', address: '# 9/10, Road No. 6, Nacharam Industrial Estate, Hyderabad – 500 076, Telangana', phone: '+91-40-6735 5000' },
  },
  {
    id: 'bangalore', city: 'Bangalore', type: 'branch',
    info: { name: 'Analogics Tech India Ltd.', contact: 'Nanda Kumar', address: 'Bangalore, Karnataka', phone: '+91 98869 96453' },
  },
  {
    id: 'delhi', city: 'Delhi', type: 'branch',
    info: { name: 'Analogics Tech India Ltd.', contact: 'Vikram Yadav', address: 'New Delhi, Delhi', phone: '+91 99115 11772' },
  },
  {
    id: 'kolkata', city: 'Kolkata', type: 'branch',
    info: { name: 'Analogics Tech India Ltd.', address: 'Kolkata, West Bengal', phone: '+91-40-6735 5000' },
  },
  {
    id: 'bhubaneswar', city: 'Bhubaneswar', type: 'branch',
    info: { name: 'Analogics Tech India Ltd.', address: 'Bhubaneswar, Odisha', phone: '+91-40-6735 5000' },
  },
  {
    id: 'ludhiana', city: 'Ludhiana / Patiala', type: 'service',
    info: { name: 'Analogics Service Center', address: 'Ludhiana / Patiala, Punjab', phone: '+91-40-6735 5000' },
  },
  {
    id: 'shimla', city: 'Shimla', type: 'service',
    info: { name: 'Analogics Service Center', address: 'Shimla, Himachal Pradesh', phone: '+91-40-6735 5000' },
  },
  {
    id: 'uttarakhand', city: 'Uttarakhand', type: 'service',
    info: { name: 'Analogics Service Center', address: 'Dehradun, Uttarakhand', phone: '+91-40-6735 5000' },
  },
  {
    id: 'meerut', city: 'Meerut', type: 'service',
    info: { name: 'Analogics Service Center', address: 'Meerut, Uttar Pradesh', phone: '+91-40-6735 5000' },
  },
  {
    id: 'jaipur', city: 'Jaipur', type: 'service',
    info: { name: 'Analogics Service Center', address: 'Jaipur, Rajasthan', phone: '+91-40-6735 5000' },
  },
  {
    id: 'lucknow', city: 'Lucknow', type: 'service',
    info: { name: 'Analogics Service Center', address: 'Lucknow, Uttar Pradesh', phone: '+91-40-6735 5000' },
  },
  {
    id: 'patna', city: 'Patna', type: 'service',
    info: { name: 'Analogics Service Center', address: 'Patna, Bihar', phone: '+91-40-6735 5000' },
  },
  {
    id: 'ahmedabad', city: 'Ahmedabad', type: 'service',
    info: { name: 'Analogics Service Center', address: 'Ahmedabad, Gujarat', phone: '+91-40-6735 5000' },
  },
  {
    id: 'bhopal', city: 'Bhopal', type: 'service',
    info: { name: 'Analogics Service Center', address: 'Bhopal, Madhya Pradesh', phone: '+91-40-6735 5000' },
  },
  {
    id: 'nagpur', city: 'Nagpur', type: 'service',
    info: { name: 'Analogics Service Center', address: 'Nagpur, Maharashtra', phone: '+91-40-6735 5000' },
  },
  {
    id: 'raipur', city: 'Raipur', type: 'service',
    info: { name: 'Analogics Service Center', address: 'Raipur, Chhattisgarh', phone: '+91-40-6735 5000' },
  },
  {
    id: 'visakhapatnam', city: 'Visakhapatnam', type: 'service',
    info: { name: 'Analogics Service Center', address: 'Visakhapatnam, Andhra Pradesh', phone: '+91-40-6735 5000' },
  },
  {
    id: 'vijayawada', city: 'Vijayawada', type: 'service',
    info: { name: 'Analogics Service Center', address: 'Vijayawada, Andhra Pradesh', phone: '+91-40-6735 5000' },
  },
  {
    id: 'hubli', city: 'Hubli', type: 'service',
    info: { name: 'Analogics Service Center', address: 'Hubli, Karnataka', phone: '+91 98869 96453' },
  },
  {
    id: 'chennai', city: 'Chennai', type: 'service',
    info: { name: 'Analogics Service Center', address: 'Chennai, Tamil Nadu', phone: '+91 7418 720 326' },
  },
];

const typeConfig = {
  corporate: { label: 'Corporate Office', icon: FaStar,       color: '#1B4F9E' },
  branch:    { label: 'Branch Office',    icon: FaCodeBranch, color: '#e53e3e' },
  service:   { label: 'Service Centre',   icon: FaTools,      color: '#F7931E' },
};

const contactInfo = [
  {
    icon: FaMapMarkerAlt,
    title: 'Our Office',
    content: [
      'Analogics Tech India Ltd.',
      '# 9/10, Road No. 6,',
      'Nacharam Industrial Estate',
      'Hyderabad – 500 076, Telangana, India'
    ]
  },
  {
    icon: FaPhone,
    title: 'Telephone',
    content: [
      '+91-40-6735 5000'
    ],
    links: true,
    linkPrefix: 'tel:'
  },
  {
    icon: FaFax,
    title: 'Fax',
    content: [
      '+91-40-2717 2675'
    ],
    links: true,
    linkPrefix: 'tel:'
  },
  {
    icon: FaEnvelope,
    title: 'Email',
    content: [
      'info@analogicgroup.com',
      'atm@analogicgroup.com',
      'hr@analogicgroup.com'
    ],
    links: true,
    linkPrefix: 'mailto:'
  }
];

const Contact = () => {
  return (
    <main className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="contact-hero__background"></div>
        <div className="container">
          <motion.div 
            className="contact-hero__content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="contact-hero__subtitle">Get in Touch</span>
            <h1 className="contact-hero__title">Contact Us</h1>
            <p className="contact-hero__description">
              Have a question or want to discuss your requirements? 
              We'd love to hear from you. Reach out to us and we'll respond as soon as possible.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="contact-content section">
        <div className="container">
          <div className="contact-content__grid">
            {/* Contact Info */}
            <motion.div 
              className="contact-info"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="contact-info__title">Let's Talk</h2>
              <p className="contact-info__description">
                Whether you're looking for innovative hardware solutions, 
                custom software development, or need support with existing products, 
                our team is here to help.
              </p>

              <div className="contact-info__items">
                {contactInfo.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <motion.div 
                      key={index}
                      className="contact-info__item"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="contact-info__icon">
                        <IconComponent
                          className={
                            item.title === 'Telephone'
                              ? 'contact-info__icon-svg contact-info__icon-svg--phone'
                              : 'contact-info__icon-svg'
                          }
                        />
                      </div>
                      <div className="contact-info__details">
                        <h4>{item.title}</h4>
                        {item.content.map((line, i) => (
                          item.links ? (
                            <a key={i} href={`${item.linkPrefix}${line.replace(/\s/g, '')}`}>
                              {line}
                            </a>
                          ) : (
                            <p key={i}>{line}</p>
                          )
                        ))}
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Social Links */}
              <div className="contact-social">
                <h4>Follow Us</h4>
                <div className="contact-social__links">
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                    <FaFacebookF />
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <FaLinkedinIn />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <div className="contact-form-wrapper">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="contact-map">
        <a
          className="contact-map__link"
          href="https://www.google.com/maps?q=Analogics%20Tech%20India%20Ltd,%209%2F10,%20Road%20No.%206,%20Nacharam%20Industrial%20Estate,%20Hyderabad%20500076"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open Analogics Tech India Ltd. location in Google Maps"
        >
          <div className="contact-map__embed" aria-hidden="true">
            <iframe
              title="Analogics Tech India Ltd. Location"
              src="https://www.google.com/maps?q=17.4384564,78.5615239&z=15&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="contact-map__placeholder">
            <div className="contact-map__content">
              <FaMapMarkerAlt />
              <p>Interactive Map</p>
              <span>Nacharam Industrial Estate, Hyderabad, Telangana</span>
            </div>
          </div>
        </a>
      </section>

      {/* Service Centres Cards Section */}
      <section className="service-centres-section section">
        <div className="container">
          <motion.div
            className="service-centres-section__header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="service-centres-section__subtitle">Nationwide Presence</span>
            <h2 className="service-centres-section__title">Service Centres</h2>
            <p className="service-centres-section__desc">
              Analogics has a strong pan-India presence with our Corporate Office, Branch Offices,
              and Service Centers across the country.
            </p>
          </motion.div>

          <div className="sc-cards__grid">
            {serviceCentres.map((centre, i) => {
              const cfg = typeConfig[centre.type];
              const Icon = cfg.icon;
              return (
                <motion.div
                  key={centre.id}
                  className={`sc-card sc-card--${centre.type}`}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: (i % 5) * 0.07 }}
                >
                  <div className="sc-card__icon-wrap" style={{ background: cfg.color + '18', color: cfg.color }}>
                    <Icon />
                  </div>
                  <div className="sc-card__body">
                    <span className="sc-card__badge" style={{ background: cfg.color + '18', color: cfg.color }}>{cfg.label}</span>
                    <h4 className="sc-card__city">{centre.city}</h4>
                    <p className="sc-card__address">
                      <FaMapMarkerAlt className="sc-card__addr-icon" />
                      {centre.info.address}
                    </p>
                    {centre.info.contact && (
                      <p className="sc-card__contact">
                        <FaUser className="sc-card__addr-icon" />
                        {centre.info.contact}
                      </p>
                    )}
                    <a href={`tel:${centre.info.phone.replace(/[\s-]/g, '')}`} className="sc-card__phone">
                      <FaPhone className="sc-card__addr-icon" />
                      {centre.info.phone}
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Offices Section */}
      <section className="offices section bg-off-white">
        <div className="container">
          <motion.div 
            className="offices__header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Our Offices</h2>
            <p>Visit us at one of our locations across India</p>
          </motion.div>

          <div className="offices__grid">
            <motion.div 
              className="offices__card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <h4>Production Unit - I</h4>
              <p>
                Nacharam, Hyderabad
              </p>
            </motion.div>

            <motion.div 
              className="offices__card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              whileHover={{ y: -10 }}
            >
              <h4>Production Unit - II</h4>
              <p>
                Kompally, Hyderabad
              </p>
            </motion.div>

            <motion.div 
              className="offices__card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{ y: -10 }}
            >
              <h4>Production Unit - III</h4>
              <p>
                Hardware Park, Hyderabad
              </p>
            </motion.div>

            <motion.div 
              className="offices__card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              whileHover={{ y: -10 }}
            >
              <h4>Production Unit - IV</h4>
              <p>
                Kotdwar, Uttarakhand
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
