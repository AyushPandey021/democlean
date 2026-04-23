import { useEffect } from 'react';
import useScrollReveal from '../../hooks/useScrollReveal.js';
import ProductCard from '../../components/ProductCard/ProductCard.jsx';
import { products } from '../../data/products.js';
import './Shop.css';

const Shop = () => {
  const revealRef = useScrollReveal();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="shop page-enter" id="shop-page">
      {/* Hero */}
      <section className="shop__hero">
        <div className="shop__hero-bg">
          <div className="shop__hero-orb" />
        </div>
        <div className="container">
          <span className="label-caps" style={{ color: 'var(--accent-aqua)' }}>
            THE COLLECTION
          </span>
          <h1 className="shop__hero-title">Our Collection</h1>
          <p className="body-lg shop__hero-subtitle">
            Engineered cleanliness for every surface. Discover the future of home care.
          </p>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="shop__filters">
        <div className="container">
          <div className="shop__filter-bar glass-card">
            <button className="shop__filter-btn shop__filter-btn--active" id="filter-all">
              All Products
            </button>
            <button className="shop__filter-btn" id="filter-surfaces">Surfaces</button>
            <button className="shop__filter-btn" id="filter-specialty">Specialty</button>
            <button className="shop__filter-btn" id="filter-eco">Eco-Line</button>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="shop__products section" ref={revealRef}>
        <div className="container">
          <div className="shop__grid">
            {products.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Shop;
