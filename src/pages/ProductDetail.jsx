// ================================
// Product Detail Page - Analogics Website
// ================================

import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    FaArrowLeft,
    FaCheckCircle,
    FaMicrochip,
    FaMemory,
    FaNetworkWired,
    FaWifi,
    FaPlug,
    FaRulerCombined,
    FaThermometerHalf,
    FaCog,
    FaDownload,
    FaExternalLinkAlt
} from 'react-icons/fa';
import TypeWriter from '../components/TypeWriter/TypeWriter';
import DatasheetModal from '../components/DatasheetModal/DatasheetModal';
import { products, productCategories } from '../data/products';
import './ProductDetail.css';

const iconMap = {
    PROCESSOR: FaMicrochip,
    'OPERATING SYSTEM': FaCog,
    MEMORY: FaMemory,
    'I/O PORTS': FaNetworkWired,
    'COMMUNICATION PORTS': FaNetworkWired,
    'WIRELESS CONNECTIVITY': FaWifi,
    POWER: FaPlug,
    DIMENSIONS: FaRulerCombined,
    'OPERATING CONDITIONS': FaThermometerHalf,
};

const ProductDetail = () => {
    const { category, id } = useParams();
    const navigate = useNavigate();
    const [datasheetModalOpen, setDatasheetModalOpen] = useState(false);

    // Find the product by ID
    const product = products.find(p => p.id === parseInt(id));

    if (!product) {
        return (
            <div className="product-detail-error">
                <h2>Product not found</h2>
                <Link to="/products" className="btn btn-primary">Back to Products</Link>
            </div>
        );
    }

    const categoryInfo = productCategories.find(c => c.id === product.category);
    const hasDetailedInfo = product.detailedInfo;
    
    // Count products in the same category
    const categoryProductsCount = products.filter(p => p.category === product.category).length;

    return (
        <main className="product-detail">
            {/* Header Section */}
            <section className="product-detail__header">
                <div className="container">
                    <motion.button
                        className="product-detail__back"
                        onClick={() => navigate('/products')}
                        whileHover={{ x: -5 }}
                    >
                        <FaArrowLeft /> Back to Products
                    </motion.button>

                    <motion.div
                        className="product-detail__header-content"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="product-detail__category">{categoryInfo?.name || 'Category'}</span>
                        <h1 className="product-detail__title">{product.name}</h1>
                    </motion.div>
                </div>
            </section>

            {/* Main Content */}
            <section className="product-detail__content section">
                <div className="container">
                    {/* Products Count */}
                    <div className="product-detail__count">
                        <p>
                            Showing <strong>{categoryProductsCount}</strong> products in <strong>{categoryInfo?.name}</strong>
                        </p>
                    </div>
                    <div className="product-detail__grid">
                        {/* Product Image */}
                        <motion.div
                            className="product-detail__image-wrapper"
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <div className="product-detail__image">
                                <img src={product.image} alt={product.name} />
                            </div>
                        </motion.div>

                        {/* Overview Section */}
                        <motion.div
                            className="product-detail__overview"
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            <h2>Overview</h2>
                            <p>
                                <TypeWriter
                                    text={hasDetailedInfo ? product.detailedInfo.overview : product.description}
                                    speed={50}
                                    delay={300}
                                />
                            </p>
                            
                            {/* Data Sheet and GeM Links - Moved to top for better UX */}
                            <div className="product-detail__quick-links">
                                {product.dataSheet && (
                                    <div className="quick-link-item">
                                        <p>For more details please download our data sheet</p>
                                        <button
                                            className="brochure-download-btn"
                                            onClick={() => setDatasheetModalOpen(true)}
                                        >
                                            <FaDownload /> Download Data Sheet
                                        </button>
                                    </div>
                                )}
                                
                                {product.gemLink && (
                                    <div className="quick-link-item">
                                        <p>To order this product through GeM</p>
                                        <a 
                                            href={product.gemLink} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="brochure-download-btn gem-button"
                                        >
                                            <FaExternalLinkAlt /> View Product
                                        </a>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    </div>

                    {/* Key Features */}
                    {hasDetailedInfo && product.detailedInfo.keyFeatures && (
                        <motion.div
                            className="product-detail__section"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <h2>Key Features</h2>
                            <ul className="product-detail__features">
                                {product.detailedInfo.keyFeatures.map((feature, index) => (
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

                    {/* Application Areas */}
                    {hasDetailedInfo && product.detailedInfo.applicationAreas && (
                        <motion.div
                            className="product-detail__section"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <h2>Application Areas</h2>
                            <ul className="product-detail__applications">
                                {product.detailedInfo.applicationAreas.map((area, index) => (
                                    <li key={index}>{area}</li>
                                ))}
                            </ul>
                        </motion.div>
                    )}

                    {/* Available Models */}
                    {hasDetailedInfo && product.detailedInfo.availableModels && (
                        <motion.div
                            className="product-detail__section"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <h2>Available Models</h2>
                            <ul className="product-detail__models">
                                {product.detailedInfo.availableModels.map((model, index) => (
                                    <li key={index}>{model}</li>
                                ))}
                            </ul>
                        </motion.div>
                    )}

                    {/* Additional Features */}
                    {hasDetailedInfo && product.detailedInfo.additionalFeatures && (
                        <motion.div
                            className="product-detail__section"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <h2>Additional Features</h2>
                            <ul className="product-detail__models">
                                {product.detailedInfo.additionalFeatures.map((feature, index) => (
                                    <li key={index}>{feature}</li>
                                ))}
                            </ul>
                        </motion.div>
                    )}

                    {/* Custom Options */}
                    {hasDetailedInfo && product.detailedInfo.customOptions && (
                        <motion.div
                            className="product-detail__section"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <h2>CMRI Custom Options</h2>
                            <ul className="product-detail__models">
                                {product.detailedInfo.customOptions.map((option, index) => (
                                    <li key={index}>{option}</li>
                                ))}
                            </ul>
                        </motion.div>
                    )}

                    {/* Salient Features */}
                    {hasDetailedInfo && product.detailedInfo.salientFeatures && (
                        <motion.div
                            className="product-detail__section"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <h2>Salient Features</h2>
                            <ul className="product-detail__features">
                                {product.detailedInfo.salientFeatures.map((feature, index) => (
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

                    {/* COP3 Information */}
                    {hasDetailedInfo && product.detailedInfo.cop3Info && (
                        <motion.div
                            className="product-detail__section"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <h2>COP3 (Common Optical Port)</h2>
                            <p className="product-detail__overview">
                                {product.detailedInfo.cop3Info.description}
                            </p>
                        </motion.div>
                    )}

                    {/* Meter Evaluation Criteria */}
                    {hasDetailedInfo && product.detailedInfo.meterEvaluation && (
                        <motion.div
                            className="product-detail__section"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <h2>Meter Evaluation Criteria</h2>
                            <ul className="product-detail__features">
                                {product.detailedInfo.meterEvaluation.map((item, index) => (
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

                    {/* Available Alarms */}
                    {hasDetailedInfo && product.detailedInfo.availableAlarms && (
                        <motion.div
                            className="product-detail__section"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <h2>Available Alarms</h2>
                            <ul className="product-detail__features">
                                {product.detailedInfo.availableAlarms.map((alarm, index) => (
                                    <motion.li
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.05 }}
                                    >
                                        <FaCheckCircle className="feature-icon" />
                                        <span>{alarm}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    )}

                    {/* Water Meter Reading Methods */}
                    {hasDetailedInfo && product.detailedInfo.readingMethods && (
                        <motion.div
                            className="product-detail__section"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <h2>Water Meter Reading Methods</h2>
                            <ul className="product-detail__features">
                                {product.detailedInfo.readingMethods.map((method, index) => (
                                    <motion.li
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.05 }}
                                    >
                                        <FaCheckCircle className="feature-icon" />
                                        <span>{method}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    )}

                    {/* Technical Specifications */}
                    {hasDetailedInfo && product.detailedInfo.technicalSpecs && Object.keys(product.detailedInfo.technicalSpecs).length > 0 && (
                        <motion.div
                            className="product-detail__section"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <h2>Technical Specifications</h2>
                            <div className="product-detail__specs">
                                {Object.entries(product.detailedInfo.technicalSpecs).map(([key, spec], index) => {
                                    const IconComponent = iconMap[spec.label] || FaCog;
                                    return (
                                        <motion.div
                                            key={key}
                                            className="spec-card"
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.1 }}
                                        >
                                            <div className="spec-card__icon">
                                                <IconComponent />
                                            </div>
                                            <div className="spec-card__content">
                                                <h4>{spec.label}</h4>
                                                <p>{spec.value.split('\\n').map((line, i) => (
                                                    <span key={i}>
                                                        {line}
                                                        {i < spec.value.split('\\n').length - 1 && <br />}
                                                    </span>
                                                ))}</p>
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </motion.div>
                    )}

                    {/* Contact CTA */}
                    <motion.div
                        className="product-detail__cta"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h3>Interested in this product?</h3>
                        <p>Get in touch with our team to learn more about {product.name}</p>
                        <Link to="/contact" className="btn btn-primary">Contact Us</Link>
                    </motion.div>
                </div>
            </section>

            {/* Datasheet Download Modal */}
            <DatasheetModal
                isOpen={datasheetModalOpen}
                onClose={() => setDatasheetModalOpen(false)}
                productName={product.name}
                datasheetUrl={product.dataSheet}
            />
        </main>
    );
};

export default ProductDetail;
