// ================================
// Solutions Page - Analogics Website
// ================================

import { useState, useMemo, useEffect, useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaBolt, 
  FaClock, 
  FaUniversity, 
  FaBoxes, 
  FaBus,
  FaArrowRight,
  FaTh,
  FaList
} from 'react-icons/fa';
import SectionTitle from '../components/SectionTitle/SectionTitle';
import { solutions, solutionCategories } from '../data/solutions';
import './Solutions.css';

const iconMap = {
  FaBolt: FaBolt,
  FaClock: FaClock,
  FaUniversity: FaUniversity,
  FaBoxes: FaBoxes,
  FaBus: FaBus
};

const Solutions = () => {
  const { category } = useParams();
  const [activeCategory, setActiveCategory] = useState('all');
  const [viewMode, setViewMode] = useState('grid');
  const isInitialMount = useRef(true);
  const skipNextAutoScroll = useRef(false);

  // Sync active category with URL param (/solutions/:category)
  useEffect(() => {
    if (!category) {
      skipNextAutoScroll.current = true;
      setActiveCategory('all');
      return;
    }

    const categoryExists = solutionCategories.some(c => c.id === category);
    skipNextAutoScroll.current = true;
    setActiveCategory(categoryExists ? category : 'all');
  }, [category]);

  // Scroll to solutions section when category changes (not on initial load)
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }

    if (skipNextAutoScroll.current) {
      skipNextAutoScroll.current = false;
      return;
    }

    const solutionsSection = document.querySelector('.solutions-list');
    if (solutionsSection) {
      const offset = 100;
      const elementPosition = solutionsSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }, [activeCategory]);

  const filteredSolutions = useMemo(() => {
    if (activeCategory === 'all') return solutions;
    return solutions.filter(solution => solution.category === activeCategory);
  }, [activeCategory]);

  const renderSolutionCard = (solution, index) => (
    <motion.div
      key={solution.id}
      className={`solution-card ${solution.category === 'utilities' && index < 3 ? 'solution-card--featured-utility' : ''}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -10 }}
    >
      <div className="solution-card__image">
        {solution.image ? (
          <img
            src={solution.image}
            alt={solution.name}
            className="solution-card__img"
            loading="lazy"
          />
        ) : (
          <div className="solution-card__placeholder">
            <span>No Image Available</span>
          </div>
        )}
      </div>
      <div className="solution-card__content">
        <span className="solution-card__category">{solution.category}</span>
        <h3 className="solution-card__title">{solution.name}</h3>
        <p className="solution-card__description">{solution.description}</p>

        <Link to={`/solutions/${solution.category}/${solution.id}`} className="solution-card__btn">
          View Product
          <FaArrowRight />
        </Link>
      </div>
    </motion.div>
  );

  return (
    <main className="solutions-page">
      {/* Hero Section */}
      <section className="solutions-hero">
        <div className="solutions-hero__background"></div>
        <div className="container">
          <motion.div 
            className="solutions-hero__content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="solutions-hero__subtitle">Software & Solutions</span>
            <h1 className="solutions-hero__title">End-to-End Technology Solutions</h1>
            <p className="solutions-hero__description">
              Powerful cross-platform software applications designed to help businesses 
              simplify their operational processes and drive efficiency.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="solutions-filters">
        <div className="container">
          <div className="solutions-filters__wrapper">
            <div className="solutions-filters__tabs">
              <button
                className={`solutions-filters__tab ${activeCategory === 'all' ? 'active' : ''}`}
                onClick={() => setActiveCategory('all')}
              >
                All Solutions
              </button>
              {solutionCategories.map(category => {
                const IconComponent = iconMap[category.icon];
                return (
                  <button
                    key={category.id}
                    className={`solutions-filters__tab ${activeCategory === category.id ? 'active' : ''}`}
                    onClick={() => setActiveCategory(category.id)}
                  >
                    {IconComponent && <IconComponent />}
                    {category.name}
                  </button>
                );
              })}
            </div>

            <div className="solutions-filters__view">
              <button
                className={`solutions-filters__view-btn ${viewMode === 'grid' ? 'active' : ''}`}
                onClick={() => setViewMode('grid')}
                aria-label="Grid view"
              >
                <FaTh />
              </button>
              <button
                className={`solutions-filters__view-btn ${viewMode === 'list' ? 'active' : ''}`}
                onClick={() => setViewMode('list')}
                aria-label="List view"
              >
                <FaList />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="solutions-list section">
        <div className="container">
          {/* Results Count */}
          <div className="solutions-list__header">
            <p className="solutions-list__count">
              Showing <strong>{filteredSolutions.length}</strong> solutions
              {activeCategory !== 'all' && (
                <> in <strong>{solutionCategories.find(c => c.id === activeCategory)?.name}</strong></>
              )}
            </p>
          </div>

          <AnimatePresence mode="wait">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              key={activeCategory}
            >
              {activeCategory === 'all' ? (
                solutionCategories.map((category) => {
                  const categorySolutions = filteredSolutions.filter(s => s.category === category.id);
                  if (categorySolutions.length === 0) return null;

                  const IconComponent = iconMap[category.icon];

                  return (
                    <div key={category.id} className="solutions-category-section">
                      <motion.div
                        className="solutions-category-header"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                      >
                        <div className="solutions-category-header__icon">
                          {IconComponent && <IconComponent />}
                        </div>
                        <div className="solutions-category-header__content">
                          <h2 className="solutions-category-header__title">{category.name}</h2>
                          <p className="solutions-category-header__description">{category.description}</p>
                          <span className="solutions-category-header__count">
                            {categorySolutions.length} {categorySolutions.length === 1 ? 'Item' : 'Items'}
                          </span>
                        </div>
                      </motion.div>

                      <div className={`solutions-list__grid ${viewMode === 'list' ? 'solutions-list__grid--list' : ''}`}>
                        {categorySolutions.map((solution, index) => renderSolutionCard(solution, index))}
                      </div>
                    </div>
                  );
                })
              ) : (
                <div className={`solutions-list__grid ${viewMode === 'list' ? 'solutions-list__grid--list' : ''}`}>
                  {filteredSolutions.map((solution, index) => renderSolutionCard(solution, index))}
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Categories Detail */}
      <section className="solution-categories section bg-off-white">
        <div className="container">
          <SectionTitle
            subtitle="Our Expertise"
            title="Solution Categories"
            description="We offer comprehensive solutions across various industry verticals."
          />

          <div className="solution-categories__grid">
            {solutionCategories.map((category, index) => {
              const IconComponent = iconMap[category.icon];
              return (
                <motion.div
                  key={category.id}
                  className="solution-categories__card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="solution-categories__icon">
                    {IconComponent && <IconComponent />}
                  </div>
                  <div className="solution-categories__content">
                    <h4>{category.name}</h4>
                    <p>{category.description}</p>
                    <button
                      className="solution-categories__btn"
                      onClick={() => {
                        setActiveCategory(category.id);
                        window.scrollTo({ top: 400, behavior: 'smooth' });
                      }}
                    >
                      View Solutions
                      <FaArrowRight />
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="solutions-cta section">
        <div className="solutions-cta__background"></div>
        <div className="container">
          <motion.div 
            className="solutions-cta__content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Need a Custom Solution?</h2>
            <p>
              Our team of experts can design and develop customized solutions 
              tailored to your specific business requirements.
            </p>
            <Link to="/contact" className="btn btn-white btn-lg">
              Get in Touch
              <FaArrowRight />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Solutions;
