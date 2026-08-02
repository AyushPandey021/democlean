import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import config from '../../config.js';
import './Navbar.css';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/products', label: 'Products' },
  { to: '/about', label: 'Our Story' },
  { to: '/contact', label: 'Contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [location.pathname]);

  const isActive = (path) => path === '/' ? location.pathname === '/' : location.pathname.startsWith(path);

  return (
    <header className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__notice">Powerful cleaning. Complete protection. Made in India.</div>
      <div className="navbar__inner container">
        <Link to="/" className="brand-logo" aria-label="DEMOCLEAN home">
          <span className="brand-logo__crop">
            <img src="/images/logo%20.jpeg" alt="DEMOCLEAN Floor Cleaner" />
          </span>
        </Link>

        <nav className={`navbar__nav ${isMobileOpen ? 'navbar__nav--open' : ''}`} aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link key={link.to} to={link.to} className={`navbar__link ${isActive(link.to) ? 'navbar__link--active' : ''}`}>
              {link.label}
            </Link>
          ))}
          <a className="btn btn-primary navbar__mobile-cta" href={config.getWhatsAppUrl('Hi DEMOCLEAN, I would like to know more about your products.')} target="_blank" rel="noreferrer">
            Order on WhatsApp
          </a>
        </nav>

        <div className="navbar__actions">
          <Link to="/products" className="navbar__shop-link">Shop now <span className="material-icons">arrow_outward</span></Link>
          <button className={`navbar__hamburger ${isMobileOpen ? 'navbar__hamburger--open' : ''}`} onClick={() => setIsMobileOpen((open) => !open)} aria-label="Toggle navigation" aria-expanded={isMobileOpen}>
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
