// ================================
// Products Page - Analogics Website
// ================================

import { useState, useMemo, useEffect, useRef } from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaBolt,
  FaMobileAlt,
  FaFingerprint,
  FaPrint,
  FaWifi,
  FaSolarPanel,
  FaShieldAlt,
  FaPlug,
  FaTint,
  FaTh,
  FaList,
  FaArrowRight,
  FaNetworkWired
} from 'react-icons/fa';
import SectionTitle from '../components/SectionTitle/SectionTitle';
import ProductCard from '../components/ProductCard/ProductCard';
import { products, productCategories } from '../data/products';
import './Products.css';

const iconMap = {
  FaBolt: FaBolt,
  FaTint: FaTint,
  FaMobileAlt: FaMobileAlt,
  FaFingerprint: FaFingerprint,
  FaPrint: FaPrint,
  FaWifi: FaWifi,
  FaSolarPanel: FaSolarPanel,
  FaShieldAlt: FaShieldAlt,
  FaPlug: FaPlug,
  FaNetworkWired: FaNetworkWired
};

const Products = () => {
  const { category } = useParams();
  const location = useLocation();
  const [activeCategory, setActiveCategory] = useState('all');
  const [viewMode, setViewMode] = useState('grid');
  const isInitialMount = useRef(true);
  const skipNextAutoScroll = useRef(false);

  const focusedProductId = useMemo(() => {
    const value = new URLSearchParams(location.search).get('productId');
    if (!value) return null;
    const parsed = parseInt(value, 10);
    return Number.isFinite(parsed) ? parsed : null;
  }, [location.search]);

  // Set active category from URL parameter on mount
  useEffect(() => {
    if (category) {
      // Validate that the category exists in productCategories
      const categoryExists = productCategories.some(cat => cat.id === category);
      if (categoryExists) {
        skipNextAutoScroll.current = true;
        setActiveCategory(category);
      } else {
        skipNextAutoScroll.current = true;
        setActiveCategory('all');
      }
    } else {
      skipNextAutoScroll.current = true;
      setActiveCategory('all');
    }
  }, [category]);

  // Scroll to products section when category changes (not on initial load)
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }

    if (skipNextAutoScroll.current) {
      skipNextAutoScroll.current = false;
      return;
    }

    const productsSection = document.querySelector('.products-list');
    if (productsSection) {
      const offset = 100;
      const elementPosition = productsSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }, [activeCategory]);

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesCategory = activeCategory === 'all' || product.category === activeCategory;
      const matchesFocused = focusedProductId == null || product.id === focusedProductId;
      return matchesCategory && matchesFocused;
    });
  }, [activeCategory, focusedProductId]);

  return (
    <main className="products-page">
      {/* Hero Section */}
      <section className="products-hero">
        <div className="products-hero__background"></div>
        <div className="container">
          <motion.div
            className="products-hero__content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="products-hero__subtitle">Our Products</span>
            <h1 className="products-hero__title">Innovative Hardware Solutions</h1>
            <p className="products-hero__description">
              Explore our range of rugged, reliable, and user-friendly products
              designed for various industry applications.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="products-filters">
        <div className="container">
          <div className="products-filters__wrapper">
            {/* Category Tabs */}
            <div className="products-filters__categories">
              <button
                className={`products-filters__category ${activeCategory === 'all' ? 'active' : ''}`}
                onClick={() => setActiveCategory('all')}
              >
                All Products
              </button>
              {productCategories.map(category => {
                const IconComponent = iconMap[category.icon];
                return (
                  <button
                    key={category.id}
                    className={`products-filters__category ${activeCategory === category.id ? 'active' : ''}`}
                    onClick={() => setActiveCategory(category.id)}
                  >
                    {IconComponent && <IconComponent />}
                    {category.name}
                  </button>
                );
              })}
            </div>

            {/* View Toggle */}
            <div className="products-filters__view">
              <button
                className={`products-filters__view-btn ${viewMode === 'grid' ? 'active' : ''}`}
                onClick={() => setViewMode('grid')}
                aria-label="Grid view"
              >
                <FaTh />
              </button>
              <button
                className={`products-filters__view-btn ${viewMode === 'list' ? 'active' : ''}`}
                onClick={() => setViewMode('list')}
                aria-label="List view"
              >
                <FaList />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="products-list section">
        <div className="container">
          {/* Results Count */}
          <div className="products-list__header">
            <p className="products-list__count">
              Showing <strong>{filteredProducts.length}</strong> products
              {activeCategory !== 'all' && (
                <> in <strong>{productCategories.find(c => c.id === activeCategory)?.name}</strong></>
              )}
            </p>
          </div>

          {/* Products Grid */}
          <AnimatePresence mode="wait">
            {filteredProducts.length > 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                key={activeCategory}
              >
                {/* Group products by category when viewing all */}
                {activeCategory === 'all' ? (
                  productCategories.map((category) => {
                    const categoryProducts = filteredProducts.filter(p => p.category === category.id);
                    if (categoryProducts.length === 0) return null;

                    const IconComponent = iconMap[category.icon];

                    return (
                      <div key={category.id} className="products-category-section">
                        <motion.div
                          className="products-category-header"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                        >
                          <div className="products-category-header__icon">
                            {IconComponent && <IconComponent />}
                          </div>
                          <div className="products-category-header__content">
                            <h2 className="products-category-header__title">{category.name}</h2>
                            <p className="products-category-header__description">{category.description}</p>
                            <span className="products-category-header__count">
                              {categoryProducts.length} {categoryProducts.length === 1 ? 'Product' : 'Products'}
                            </span>
                          </div>
                        </motion.div>

                        <div className={`products-list__grid ${viewMode === 'list' ? 'products-list__grid--list' : ''}`}>
                          {categoryProducts.map((product, index) => (
                            <ProductCard key={product.id} product={product} index={index} />
                          ))}
                        </div>
                      </div>
                    );
                  })
                ) : (
                  // Show single category without heading
                  <div className={`products-list__grid ${viewMode === 'list' ? 'products-list__grid--list' : ''}`}>
                    {filteredProducts.map((product, index) => (
                      <ProductCard key={product.id} product={product} index={index} />
                    ))}
                  </div>
                )}
              </motion.div>
            ) : (
              <motion.div
                className="products-list__empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <div className="products-list__empty-icon">🔍</div>
                <h3>No products found</h3>
                <p>Try adjusting your search or filter to find what you're looking for.</p>
                <button
                  className="btn btn-primary"
                  onClick={() => { setActiveCategory('all'); setSearchQuery(''); }}
                >
                  Clear Filters
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Categories Overview - Only show when viewing all products */}
      {activeCategory === 'all' && (
        <section className="categories section bg-off-white">
          <div className="container">
            <SectionTitle
              subtitle="Product Categories"
              title="Explore by Category"
              description="Browse our comprehensive range of products organized by industry and application."
            />

            <div className="categories__grid">
              {productCategories.map((category, index) => {
                const IconComponent = iconMap[category.icon];
                return (
                  <motion.div
                    key={category.id}
                    className="categories__card"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -10 }}
                    onClick={() => {
                      setActiveCategory(category.id);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                  >
                    <div className="categories__icon">
                      {IconComponent && <IconComponent />}
                    </div>
                    <h4>{category.name}</h4>
                    <p>{category.description}</p>
                    <span className="categories__count">
                      {products.filter(p => p.category === category.id).length} Products
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="products-cta section">
        <div className="products-cta__background"></div>
        <div className="container">
          <motion.div
            className="products-cta__content"
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

export default Products;
