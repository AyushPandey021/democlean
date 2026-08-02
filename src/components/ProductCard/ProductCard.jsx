import { Link } from 'react-router-dom';
import './ProductCard.css';

const ProductCard = ({ product, index = 0 }) => (
  <article className={`product-card scroll-reveal delay-${(index % 4) + 1}`}>
    <Link to={`/products/${product.id}`} className={`product-card__visual product-card__visual--${product.theme}`}>
      {product.badge && <span className="chip product-card__badge">{product.badge}</span>}
      <span className="product-card__number">0{product.id}</span>
      <img src={product.image} alt={product.name} loading="lazy" />
      <span className="product-card__view">View product <span className="material-icons">arrow_outward</span></span>
    </Link>
    <div className="product-card__content">
      <div>
        <h3><Link to={`/products/${product.id}`}>{product.name}</Link></h3>
        <p>{product.tagline}</p>
      </div>
      <div className="product-card__meta">
        <span>From</span>
        <strong>₹{product.price}</strong>
      </div>
    </div>
  </article>
);

export default ProductCard;
