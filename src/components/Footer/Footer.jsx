import { Link } from 'react-router-dom';
import config from '../../config.js';
import './Footer.css';

const Footer = () => {
  const whatsappUrl = config.getWhatsAppUrl('Hi DEMOCLEAN, I would like help choosing a floor cleaner.');

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <Link to="/" className="footer__logo" aria-label="DEMOCLEAN home">
              <span className="footer__logo-crop"><img src="/images/logo%20.jpeg" alt="DEMOCLEAN" /></span>
            </Link>
            <p>Reliable everyday floor care made for Indian homes, families, and busy spaces.</p>
          </div>

          <div className="footer__links">
            <div>
              <h4>Explore</h4>
              <Link to="/products">Products</Link>
              <Link to="/about">Our Story</Link>
              <Link to="/contact">Contact</Link>
            </div>
            <div>
              <h4>Need help?</h4>
              <a href={whatsappUrl} target="_blank" rel="noreferrer">WhatsApp us</a>
              <a href={config.contactPhoneHref}>Mobile: {config.contactPhone}</a>
              <a href={`mailto:${config.contactEmail}`}>Email: {config.contactEmail}</a>
              <span>Mon–Sat, 9 AM–7 PM</span>
            </div>
          </div>

          <div className="footer__cta">
            <span className="eyebrow">Cleaner floors</span>
            <h3>Find your everyday cleaning essential.</h3>
            <Link to="/products" className="btn btn-primary">Explore products <span className="material-icons">arrow_forward</span></Link>
          </div>
        </div>

        <div className="footer__bottom">
          <span>© {new Date().getFullYear()} DEMOCLEAN. All rights reserved.</span>
          <span>Proudly made in India.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
