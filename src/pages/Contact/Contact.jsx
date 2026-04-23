import { useState, useEffect } from 'react';
import useScrollReveal from '../../hooks/useScrollReveal.js';
import './Contact.css';

const faqItems = [
  {
    question: 'What surfaces are DEMOCLEAN products safe for?',
    answer: 'Our formulas are engineered and tested for all common household surfaces including hardwood, tile, marble, laminate, vinyl, and sealed concrete. Always test on an inconspicuous area first for specialty surfaces.',
  },
  {
    question: 'How does the 14-day dust repel technology work?',
    answer: 'Our hydrophobic polymer matrix creates an invisible nano-coating on surfaces that reduces static charge accumulation, which is the primary mechanism by which dust adheres to surfaces.',
  },
  {
    question: 'Are DEMOCLEAN products safe for pets and children?',
    answer: 'Yes. All DEMOCLEAN formulas are VOC-free and have undergone rigorous dermatological and respiratory safety testing. Our Bio-Clean line is additionally certified for households with sensitive occupants.',
  },
  {
    question: 'What is your shipping policy?',
    answer: 'We offer free standard shipping on all orders over $100. Standard delivery takes 3-5 business days. Express shipping (1-2 days) is available at checkout for an additional fee.',
  },
];

const Contact = () => {
  const revealRef = useScrollReveal();
  const [openFaq, setOpenFaq] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <main className="contact page-enter" id="contact-page">
      {/* Hero */}
      <section className="contact__hero">
        <div className="contact__hero-bg">
          <div className="contact__hero-orb" />
        </div>
        <div className="container">
          <span className="label-caps" style={{ color: 'var(--accent-aqua)' }}>
            GET IN TOUCH
          </span>
          <h1 className="contact__hero-title">Initiate Contact</h1>
          <p className="body-lg contact__hero-subtitle">
            Direct comms established. Connect with our engineering and support teams
            to optimize your DEMOCLEAN experience.
          </p>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="contact__main section" ref={revealRef}>
        <div className="container">
          <div className="contact__grid">
            {/* Info Cards */}
            <div className="contact__info">
              <div className="contact__info-card glass-card scroll-reveal delay-1" id="contact-hq">
                <div className="contact__info-icon">
                  <span className="material-icons">location_on</span>
                </div>
                <div>
                  <h3 className="label-caps">Global HQ</h3>
                  <p>Level 42, Nexus Tower<br />Cybernetic District, Neo-Tokyo 100-0001</p>
                </div>
              </div>

              <div className="contact__info-card glass-card scroll-reveal delay-2" id="contact-email">
                <div className="contact__info-icon contact__info-icon--aqua">
                  <span className="material-icons">email</span>
                </div>
                <div>
                  <h3 className="label-caps">Support Channel</h3>
                  <a href="mailto:comms@democlean.sys" className="contact__info-link">
                    comms@democlean.sys
                  </a>
                </div>
              </div>

              <div className="contact__info-card glass-card scroll-reveal delay-3" id="contact-phone">
                <div className="contact__info-icon contact__info-icon--lime">
                  <span className="material-icons">phone</span>
                </div>
                <div>
                  <h3 className="label-caps">Direct Line</h3>
                  <a href="tel:+18005550199" className="contact__info-link">
                    +1.800.555.0199
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact__form-wrapper glass-card scroll-reveal delay-2" id="contact-form-wrapper">
              <h2>Transmit Message</h2>
              {submitted ? (
                <div className="contact__success">
                  <span className="material-icons" style={{ fontSize: '48px', color: 'var(--accent-lime)' }}>
                    check_circle
                  </span>
                  <h3>Message Transmitted</h3>
                  <p>Our team will respond within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact__form" id="contact-form">
                  <div className="contact__form-row">
                    <div className="contact__form-group">
                      <label className="label-caps" htmlFor="contact-name">Identifier</label>
                      <input
                        type="text"
                        id="contact-name"
                        name="name"
                        className="input-field"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="contact__form-group">
                      <label className="label-caps" htmlFor="contact-email-input">Comm Channel</label>
                      <input
                        type="email"
                        id="contact-email-input"
                        name="email"
                        className="input-field"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="contact__form-group">
                    <label className="label-caps" htmlFor="contact-subject">Subject Vector</label>
                    <input
                      type="text"
                      id="contact-subject"
                      name="subject"
                      className="input-field"
                      placeholder="What's this about?"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="contact__form-group">
                    <label className="label-caps" htmlFor="contact-message">Message Payload</label>
                    <textarea
                      id="contact-message"
                      name="message"
                      className="input-field"
                      placeholder="Your message..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <button type="submit" className="btn btn-primary contact__submit-btn" id="contact-submit">
                    <span className="material-icons">send</span>
                    Transmit
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="contact__faq section" id="faq-section">
        <div className="container">
          <div className="contact__faq-header scroll-reveal">
            <span className="label-caps" style={{ color: 'var(--accent-aqua)' }}>
              KNOWLEDGE BASE
            </span>
            <h2>Systems FAQ</h2>
          </div>

          <div className="contact__faq-list">
            {faqItems.map((faq, index) => (
              <div
                key={index}
                className={`contact__faq-item glass-card scroll-reveal delay-${index + 1}`}
                id={`faq-item-${index}`}
              >
                <button
                  className="contact__faq-question"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <span>{faq.question}</span>
                  <span className={`material-icons contact__faq-icon ${openFaq === index ? 'contact__faq-icon--open' : ''}`}>
                    expand_more
                  </span>
                </button>
                <div className={`contact__faq-answer ${openFaq === index ? 'contact__faq-answer--open' : ''}`}>
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
