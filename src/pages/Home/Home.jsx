import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import useScrollReveal from '../../hooks/useScrollReveal.js';
import config from '../../config.js';
import './Home.css';

const Home = () => {
  const revealRef = useScrollReveal();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="home page-enter" id="home-page" ref={revealRef}>
      {/* Hero Section */}
      <section className="home__hero" id="hero-section">
        <div className="home__hero-bg">
          <div className="home__hero-orb home__hero-orb--1" />
          <div className="home__hero-orb home__hero-orb--2" />
          <div className="home__hero-orb home__hero-orb--3" />
        </div>

        <div className="container home__hero-content">
          <div className="home__hero-badge chip">NEXT-GEN FORMULA</div>
          <h1 className="home__hero-title">
            The Last Cleaner Your Floor Will{' '}
            <span className="text-gradient">Ever Need.</span>
          </h1>
          <p className="home__hero-subtitle body-lg">
            Experience atomic-level clean with our signature fluid dynamic formula.
            Engineered for absolute purity, designed for the modern home.
          </p>
          <div className="home__hero-actions">
            <Link to="/products" className="btn btn-primary" id="hero-shop-btn">
              Shop Now
              <span className="material-icons">arrow_forward</span>
            </Link>
            <Link to="/about" className="btn btn-secondary" id="hero-learn-btn">
              Our Science
            </Link>
          </div>

          <div className="home__hero-stats">
            <div className="home__stat">
              <span className="home__stat-number text-gradient">99.9%</span>
              <span className="home__stat-label">Bacteria Kill Rate</span>
            </div>
            <div className="home__stat-divider" />
            <div className="home__stat">
              <span className="home__stat-number text-gradient">14</span>
              <span className="home__stat-label">Days Dust Repel</span>
            </div>
            <div className="home__stat-divider" />
            <div className="home__stat">
              <span className="home__stat-number text-gradient">0</span>
              <span className="home__stat-label">VOC Compounds</span>
            </div>
          </div>
        </div>
        <div className="home_hero_img">
          <img src="/public/images/allBottel.png" alt="" />
        </div>
      </section>

      {/* Features Section */}
      <section className="home__features section" id="features-section">
        <div className="container">
          <div className="home__features-header scroll-reveal">
            <span className="label-caps" style={{ color: 'var(--accent-aqua)' }}>
              ENGINEERED PRECISION
            </span>
            <h2>
              Not just clean. <span className="text-gradient-gold">Scientifically pure.</span>
            </h2>
          </div>

          <div className="home__features-grid">
            <div className="home__feature glass-card scroll-reveal delay-1" id="feature-bacteria">
              <div className="home__feature-icon">
                <span className="material-icons">biotech</span>
              </div>
              <h3>Kills 99.9% Bacteria</h3>
              <p>
                Our ion-charged formula annihilates microscopic threats on
                contact, leaving surfaces clinically sterile.
              </p>
            </div>

            <div className="home__feature glass-card scroll-reveal delay-2" id="feature-streak">
              <div className="home__feature-icon home__feature-icon--aqua">
                <span className="material-icons">auto_awesome</span>
              </div>
              <h3>Streak-Free Glide</h3>
              <p>
                Advanced polymers reduce surface tension, ensuring a perfectly
                smooth, invisible finish every time.
              </p>
            </div>

            <div className="home__feature glass-card scroll-reveal delay-3" id="feature-eco">
              <div className="home__feature-icon home__feature-icon--lime">
                <span className="material-icons">eco</span>
              </div>
              <h3>Eco-Synthetic</h3>
              <p>
                Powerful enough for industrial use, formulated from 100%
                biodegradable synthetic compounds.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="home__cta section" id="cta-section">
        <div className="container">
          <div className="home__cta-card glass-card scroll-reveal">
            <div className="home__cta-glow" />
            <h2>Experience the DEMOCLEAN Difference</h2>
            <p className="body-lg">
              Join thousands who've already upgraded their cleaning ritual!
              Browse our collection and order directly on WhatsApp.
            </p>
            <div className="home__cta-actions">
              <Link to="/products" className="btn btn-primary" id="cta-explore-btn">
                Explore Collection
                <span className="material-icons">arrow_forward</span>
              </Link>
              <a
                href={config.getWhatsAppUrl("Hi! I'm interested in DEMOCLEAN products.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp-outline"
                id="cta-whatsapp-btn"
              >
                <svg width="20" height="20" viewBox="0 0 32 32" fill="currentColor" style={{ flexShrink: 0 }}>
                  <path d="M16.004 2.667A13.28 13.28 0 0 0 2.72 15.947a13.18 13.18 0 0 0 1.792 6.64L2.667 29.333l6.96-1.824A13.27 13.27 0 0 0 16.004 29.333 13.28 13.28 0 0 0 29.333 16.053 13.32 13.32 0 0 0 16.004 2.667Zm0 24.266a10.88 10.88 0 0 1-5.544-1.52l-.4-.236-4.132 1.084 1.1-4.024-.264-.416a10.84 10.84 0 0 1-1.664-5.8 10.92 10.92 0 0 1 10.9-10.888 10.92 10.92 0 0 1 10.9 10.92 10.93 10.93 0 0 1-10.896 10.88Zm5.98-8.152c-.328-.164-1.94-.956-2.24-1.064-.3-.112-.52-.164-.74.164-.22.328-.848 1.064-1.04 1.284-.192.22-.384.244-.712.08-.328-.164-1.384-.508-2.636-1.624-.976-.868-1.636-1.94-1.828-2.268-.192-.328-.02-.504.144-.668.148-.148.328-.384.492-.576.164-.192.22-.328.328-.548.108-.22.056-.412-.028-.576-.084-.164-.74-1.784-1.012-2.44-.268-.644-.54-.556-.74-.568-.192-.008-.412-.012-.632-.012-.22 0-.576.084-.88.412-.3.328-1.152 1.128-1.152 2.748s1.18 3.188 1.344 3.408c.164.22 2.32 3.544 5.624 4.968.788.34 1.4.544 1.88.696.788.252 1.508.216 2.076.132.632-.096 1.94-.792 2.216-1.56.272-.768.272-1.424.192-1.56-.084-.14-.3-.224-.632-.388Z" />
                </svg>
                Order on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
