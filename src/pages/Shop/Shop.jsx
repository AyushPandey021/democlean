import ProductCard from '../../components/ProductCard/ProductCard.jsx';
import useScrollReveal from '../../hooks/useScrollReveal.js';
import { products } from '../../data/products.js';
import './Shop.css';

const Shop = () => {
  const revealRef = useScrollReveal();

  return (
    <main className="shop page-enter" ref={revealRef}>
      <section className="shop-hero">
        <div className="container shop-hero__inner">
          <div>
            <span className="eyebrow">DEMOCLEAN range</span>
            <h1>Find your <span className="text-red">fresh.</span></h1>
            <p>Everyday floor cleaners in bright jasmine and classic rose fragrances, available in practical sizes for every home.</p>
          </div>
          <div className="shop-hero__mark" aria-hidden="true">D</div>
        </div>
      </section>

      <section className="shop-products section">
        <div className="container">
          <div className="shop-products__bar scroll-reveal">
            <p><strong>{products.length} products</strong> designed for everyday floor care</p>
            <span>Jasmine • Rose • Family packs</span>
          </div>
          <div className="shop-products__grid">
            {products.map((product, index) => <ProductCard key={product.id} product={product} index={index} />)}
          </div>
        </div>
      </section>

      <section className="shop-assurance section--soft">
        <div className="container shop-assurance__grid">
          <div><span className="material-icons">verified</span><h3>Trusted quality</h3><p>Dependable products for regular cleaning routines.</p></div>
          <div><span className="material-icons">inventory_2</span><h3>Useful pack sizes</h3><p>Choose the quantity that fits your space and frequency.</p></div>
          <div><span className="material-icons">support_agent</span><h3>Easy ordering</h3><p>Message us directly on WhatsApp for product help.</p></div>
        </div>
      </section>
    </main>
  );
};

export default Shop;
