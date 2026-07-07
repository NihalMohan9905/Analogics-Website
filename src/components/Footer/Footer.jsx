// ================================
// Footer Component - Analogics Website
// ================================

import { Link } from 'react-router-dom';
import { 
  FaFacebookF, 
  FaLinkedinIn, 
  FaPhone,
  FaFax,
  FaEnvelope,
  FaMapMarkerAlt,
  FaChevronRight
} from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const companyLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'Software & Solutions', path: '/solutions' },
    { name: 'Contact Us', path: '/contact' },
  ];

  const productLinks = [
    { name: 'Power Utilities', path: '/products/utilities' },
    { name: 'Power Automation', path: '/products/power-automation' },
    { name: 'Water Utilities', path: '/products/water' },
    { name: 'Hand Held Computers', path: '/products/handheld' },
    { name: 'Biometric Attendance', path: '/products/biometric' },
    { name: 'Portable Printers', path: '/products/printers' },
    { name: 'IoT', path: '/products/iot' },
    { name: 'Solar', path: '/products/solar' },
    { name: 'Defence', path: '/products/defence' },
    { name: 'Accessories', path: '/products/accessories' },
    { name: 'Smart Meters', path: '/products/smart-meters' }
  ];

  const solutionLinks = [
    { name: 'Utilities', path: '/solutions/utilities' },
    { name: 'Time & Attendance', path: '/solutions/attendance' },
    { name: 'Banking', path: '/solutions/banking' },
    { name: 'Public Distribution System', path: '/solutions/pds' }
  ];

  const policyLinks = [
    { name: '# Privacy Policy', path: '/privacy-policy' }
  ];

  return (
    <footer className="footer">
      {/* Circuit Pattern Background */}
      <div className="footer__pattern"></div>
      
      <div className="container">
        <div className="footer__content">
          {/* Company Info */}
          <div className="footer__section footer__section--info">
            <Link to="/" className="footer__logo">
              <img src="/logo.png" alt="Analogics - Redefining Technologies" className="footer__logo-image" />
            </Link>
            <p className="footer__description">
              We provide end-to-end technology solutions to various industry sectors 
              with our innovative range of products and software solutions.
            </p>
            <div className="footer__social">
              <a href="https://www.facebook.com/AnalogicsTechIndiaLtd" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FaFacebookF />
              </a>
              <a href="https://www.linkedin.com/company/analogics-tech-india-pvt-ltd" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div className="footer__section">
            <h4 className="footer__title">Company</h4>
            <ul className="footer__links">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <Link to={link.path}>
                    <FaChevronRight className="footer__link-icon" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products Links */}
          <div className="footer__section">
            <h4 className="footer__title">Products</h4>
            <ul className="footer__links">
              {productLinks.map((link, index) => (
                <li key={index}>
                  <Link to={link.path}>
                    <FaChevronRight className="footer__link-icon" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions Links */}
          <div className="footer__section">
            <h4 className="footer__title">Software & Solutions</h4>
            <ul className="footer__links">
              {solutionLinks.map((link, index) => (
                <li key={index}>
                  <Link to={link.path}>
                    <FaChevronRight className="footer__link-icon" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Policy Links */}
          <div className="footer__section">
            <h4 className="footer__title">Policy</h4>
            <ul className="footer__links">
              {policyLinks.map((link, index) => (
                <li key={index}>
                  <Link to={link.path}>
                    <FaChevronRight className="footer__link-icon" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer__section">
            <h4 className="footer__title">Contact Us</h4>
            <ul className="footer__contact">
              <li>
                <FaMapMarkerAlt className="footer__contact-icon" />
                <span>
                  Analogics Tech India Ltd.<br />
                  # 9/10, Road No. 6,<br />
                  Nacharam Industrial Estate<br />
                  Hyderabad – 500 076, Telangana, India
                </span>
              </li>
              <li>
                <FaPhone className="footer__contact-icon footer__contact-icon--phone" />
                <a href="tel:+914067355000">Telephone: +91-40-6735 5000</a>
              </li>
              <li>
                <FaFax className="footer__contact-icon" />
                <a href="tel:+914027172675">Fax : +91-40-2717 2675</a>
              </li>
              <li>
                <FaEnvelope className="footer__contact-icon" />
                <a href="mailto:atm@analogicgroup.com">atm@analogicgroup.com</a>
              </li>
              <li>
                <FaEnvelope className="footer__contact-icon" />
                <a href="mailto:hr@analogicgroup.com">hr@analogicgroup.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer__bottom">
          <p>&copy; {currentYear} Analogics Group. All rights reserved.</p>
          <div className="footer__bottom-links">
            <Link to="/terms">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
