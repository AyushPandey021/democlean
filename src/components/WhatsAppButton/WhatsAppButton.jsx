import { useState, useEffect } from 'react';
import config from '../../config.js';
import './WhatsAppButton.css';

const DEFAULT_MESSAGE = 'Hi! I\'m interested in DEMOCLEAN products. I\'d like to place an order.';

const WhatsAppButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Delay entrance so it doesn't compete with page load animation
    const timer = setTimeout(() => setVisible(true), 1200);
    return () => clearTimeout(timer);
  }, []);

  const whatsappUrl = config.getWhatsAppUrl(DEFAULT_MESSAGE);

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`whatsapp-fab ${visible ? 'whatsapp-fab--visible' : ''}`}
      aria-label="Order on WhatsApp"
      id="whatsapp-fab"
    >
      {/* Pulse ring */}
      <span className="whatsapp-fab__pulse" />

      {/* WhatsApp SVG Icon */}
      <svg
        className="whatsapp-fab__icon"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16.004 2.667A13.28 13.28 0 0 0 2.72 15.947a13.18 13.18 0 0 0 1.792 6.64L2.667 29.333l6.96-1.824A13.27 13.27 0 0 0 16.004 29.333 13.28 13.28 0 0 0 29.333 16.053 13.32 13.32 0 0 0 16.004 2.667Zm0 24.266a10.88 10.88 0 0 1-5.544-1.52l-.4-.236-4.132 1.084 1.1-4.024-.264-.416a10.84 10.84 0 0 1-1.664-5.8 10.92 10.92 0 0 1 10.9-10.888 10.92 10.92 0 0 1 10.9 10.92 10.93 10.93 0 0 1-10.896 10.88Zm5.98-8.152c-.328-.164-1.94-.956-2.24-1.064-.3-.112-.52-.164-.74.164-.22.328-.848 1.064-1.04 1.284-.192.22-.384.244-.712.08-.328-.164-1.384-.508-2.636-1.624-.976-.868-1.636-1.94-1.828-2.268-.192-.328-.02-.504.144-.668.148-.148.328-.384.492-.576.164-.192.22-.328.328-.548.108-.22.056-.412-.028-.576-.084-.164-.74-1.784-1.012-2.44-.268-.644-.54-.556-.74-.568-.192-.008-.412-.012-.632-.012-.22 0-.576.084-.88.412-.3.328-1.152 1.128-1.152 2.748s1.18 3.188 1.344 3.408c.164.22 2.32 3.544 5.624 4.968.788.34 1.4.544 1.88.696.788.252 1.508.216 2.076.132.632-.096 1.94-.792 2.216-1.56.272-.768.272-1.424.192-1.56-.084-.14-.3-.224-.632-.388Z"
          fill="currentColor"
        />
      </svg>

      {/* Tooltip */}
      <span className="whatsapp-fab__tooltip">Order on WhatsApp</span>
    </a>
  );
};

export default WhatsAppButton;
