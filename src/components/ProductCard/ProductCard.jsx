// ================================
// Product Card Component - Analogics Website
// ================================

import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import './ProductCard.css';

const ProductCard = ({ product, index }) => {
  return (
    <motion.div
      className="product-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -10 }}
    >
      <div className="product-card__image">
        <img
          src={product.image}
          alt={product.name}
          className="product-card__img"
        />
      </div>

      <div className="product-card__content">
        <span className="product-card__category">{product.category}</span>
        <h3 className="product-card__title">{product.name}</h3>
        <p className="product-card__description">{product.description}</p>

        <Link
          to={`/products/${product.category}/${product.id}`}
          className="product-card__btn"
        >
          View Product
          <FaArrowRight />
        </Link>
      </div>
    </motion.div>
  );
};

export default ProductCard;
