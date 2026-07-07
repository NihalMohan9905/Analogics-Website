// ================================
// App Component - Analogics Website
// ================================

import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

// Styles
import './styles/global.css';

// Layout Components
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ChatBot from './components/ChatBot/ChatBot';
import ScrollToTopButton from './components/ScrollToTopButton/ScrollToTopButton';
import ReadingProgress from './components/ReadingProgress/ReadingProgress';
import AnimatedBackground from './components/AnimatedBackground/AnimatedBackground';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Solutions from './pages/Solutions';
import SolutionDetail from './pages/SolutionDetail';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';

// Page Styles
import './pages/Home.css';
import './pages/About.css';
import './pages/Products.css';
import './pages/ProductDetail.css';
import './pages/Solutions.css';
import './pages/Contact.css';
import './pages/PrivacyPolicy.css';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <ReadingProgress />
      <AnimatedBackground />
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:category" element={<Products />} />
          <Route path="/products/:category/:id" element={<ProductDetail />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/solutions/:category" element={<Solutions />} />
          <Route path="/solutions/:category/:id" element={<SolutionDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          {/* Add more routes as needed */}
          <Route path="*" element={<Home />} />
        </Routes>
        <Footer />
        <ScrollToTopButton />
        <ChatBot />
      </div>
    </Router>
  );
}

export default App;
