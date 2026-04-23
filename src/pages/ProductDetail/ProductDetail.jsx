import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProductById } from '../../data/products.js';
import config from '../../config.js';
import './ProductDetail.css';

const ProductDetail = () => {
  const { id } = useParams();
  const product = getProductById(id);
  const [selectedVolume, setSelectedVolume] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
    if (product && product.volumes.length > 0) {
      setSelectedVolume(product.volumes[0]);
    }
  }, [product]);

  if (!product) {
    return (
      <main className="product-detail page-enter" id="product-not-found">
        <div className="container" style={{ paddingTop: '160px', textAlign: 'center' }}>
          <h2>Product not found</h2>
          <Link to="/products" className="btn btn-secondary" style={{ marginTop: '24px' }}>
            Back to Shop
          </Link>
        </div>
      </main>
    );
  }

  const handleOrderOnWhatsApp = () => {
    const message = `Hi! I'd like to order:\n\n🧴 *${product.name}*\n📏 Volume: ${selectedVolume}\n💰 Price: ₹${product.price.toFixed(2)}\n\nPlease confirm availability and delivery details.`;
    const url = config.getWhatsAppUrl(message);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <main className="product-detail page-enter" id="product-detail-page">
      {/* Breadcrumb */}
      <div className="product-detail__breadcrumb">
        <div className="container">
          <Link to="/" className="product-detail__crumb">Home</Link>
          <span className="material-icons" style={{ fontSize: '16px', color: 'var(--outline)' }}>
            chevron_right
          </span>
          <Link to="/products" className="product-detail__crumb">Products</Link>
          <span className="material-icons" style={{ fontSize: '16px', color: 'var(--outline)' }}>
            chevron_right
          </span>
          <span className="product-detail__crumb product-detail__crumb--current">
            {product.name}
          </span>
        </div>
      </div>

      {/* Product Hero */}
      <section className="product-detail__hero">
        <div className="container">
          <div className="product-detail__grid">
            {/* Image */}
            <div className="product-detail__image glass-card" id="product-image">
              <div
                className="product-detail__image-bg"
                style={{ background: product.gradient }}
              >
                <div className="product-detail__image-glow" />
                {product.image ? (
                  <img src={product.image} alt={product.name} className="product-detail__image-element" />
                ) : (
                  <div className="product-detail__bottle">
                    <div
                      className="product-detail__bottle-shape"
                      style={{ borderColor: product.accentColor }}
                    >
                      <span
                        className="product-detail__bottle-label"
                        style={{ color: product.accentColor }}
                      >
                        {product.name.charAt(0)}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Info */}
            <div className="product-detail__info">
              {product.badge && (
                <span className="chip" id="product-badge">{product.badge}</span>
              )}
              <h1 className="product-detail__title" id="product-title">
                {product.name}
              </h1>
              <p className="product-detail__tagline">{product.tagline}</p>

              <div className="product-detail__price" id="product-price">
                <span className="price-display" style={{ color: product.accentColor, fontSize: '32px' }}>
                  ₹{product.price.toFixed(2)}
                </span>
              </div>

              {/* Volume Selector */}
              <div className="product-detail__selector">
                <h3 className="label-caps">Select Volume</h3>
                <div className="product-detail__volumes" id="volume-selector">
                  {product.volumes.map((vol) => (
                    <button
                      key={vol}
                      className={`product-detail__vol-btn ${selectedVolume === vol ? 'product-detail__vol-btn--active' : ''}`}
                      onClick={() => setSelectedVolume(vol)}
                    >
                      {vol}
                    </button>
                  ))}
                </div>
              </div>

              {/* Order on WhatsApp */}
              <button
                className="btn btn-whatsapp product-detail__order-btn"
                onClick={handleOrderOnWhatsApp}
                id="order-whatsapp-btn"
              >
                <svg width="22" height="22" viewBox="0 0 32 32" fill="currentColor" style={{ flexShrink: 0 }}>
                  <path d="M16.004 2.667A13.28 13.28 0 0 0 2.72 15.947a13.18 13.18 0 0 0 1.792 6.64L2.667 29.333l6.96-1.824A13.27 13.27 0 0 0 16.004 29.333 13.28 13.28 0 0 0 29.333 16.053 13.32 13.32 0 0 0 16.004 2.667Zm0 24.266a10.88 10.88 0 0 1-5.544-1.52l-.4-.236-4.132 1.084 1.1-4.024-.264-.416a10.84 10.84 0 0 1-1.664-5.8 10.92 10.92 0 0 1 10.9-10.888 10.92 10.92 0 0 1 10.9 10.92 10.93 10.93 0 0 1-10.896 10.88Zm5.98-8.152c-.328-.164-1.94-.956-2.24-1.064-.3-.112-.52-.164-.74.164-.22.328-.848 1.064-1.04 1.284-.192.22-.384.244-.712.08-.328-.164-1.384-.508-2.636-1.624-.976-.868-1.636-1.94-1.828-2.268-.192-.328-.02-.504.144-.668.148-.148.328-.384.492-.576.164-.192.22-.328.328-.548.108-.22.056-.412-.028-.576-.084-.164-.74-1.784-1.012-2.44-.268-.644-.54-.556-.74-.568-.192-.008-.412-.012-.632-.012-.22 0-.576.084-.88.412-.3.328-1.152 1.128-1.152 2.748s1.18 3.188 1.344 3.408c.164.22 2.32 3.544 5.624 4.968.788.34 1.4.544 1.88.696.788.252 1.508.216 2.076.132.632-.096 1.94-.792 2.216-1.56.272-.768.272-1.424.192-1.56-.084-.14-.3-.224-.632-.388Z" />
                </svg>
                Order on WhatsApp
              </button>

              {/* Description */}
              <div className="product-detail__desc glass-card" id="product-description">
                <p>{product.description}</p>
                <ul className="product-detail__features">
                  {product.features.map((feature, i) => (
                    <li key={i}>
                      <span className="material-icons" style={{ color: product.accentColor, fontSize: '18px' }}>
                        check_circle
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProductDetail;
