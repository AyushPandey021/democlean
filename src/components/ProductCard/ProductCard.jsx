import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css';

const ProductCard = ({ product, index }) => {
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setTilt({
      x: (y - 0.5) * -12,
      y: (x - 0.5) * 12,
    });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <Link
      to={`/products/${product.id}`}
      className={`product-card scroll-reveal delay-${(index % 6) + 1}`}
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(800px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
      }}
      id={`product-card-${product.id}`}
    >
      <div className="product-card__image" style={{ background: product.gradient }}>
        <div className="product-card__image-glow" />
        {product.badge && (
          <span className="chip product-card__badge">{product.badge}</span>
        )}
        {product.image ? (
          <img src={product.image} alt={product.name} />
        ) : (
          <div className="product-card__bottle">
            <div className="product-card__bottle-shape" style={{ borderColor: product.accentColor }}>
              <span className="product-card__bottle-label" style={{ color: product.accentColor }}>
                {product.name.charAt(0)}
              </span>
            </div>
          </div>
        )}
      </div>

      <div className="product-card__content">
        <h3 className="product-card__title">{product.name}</h3>
        <p className="product-card__desc">{product.tagline}</p>
        <div className="product-card__footer">
          <span className="price-display" style={{ color: product.accentColor }}>
            ₹{product.price.toFixed(2)}
          </span>
          <span className="product-card__arrow material-icons">arrow_forward</span>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
