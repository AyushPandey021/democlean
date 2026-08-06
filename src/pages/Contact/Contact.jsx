import { useState } from 'react';
import config from '../../config.js';
import useScrollReveal from '../../hooks/useScrollReveal.js';
import './Contact.css';

const faqItems = [
  { question: 'Which cleaner should I choose?', answer: 'Choose Black Phenyl for super-strong cleaning, Herbal White for classic freshness, or Mogra, Kewda & Lavender, Jasmine, and Pink Rose for a floral finish.' },
  { question: 'Which pack size is right for me?', answer: '500 ml and 1 L packs work well for regular home use. Larger packs are useful for bigger homes, offices, shops, and frequent cleaning.' },
  { question: 'How can I place an order?', answer: 'Use any Order on WhatsApp button on the website and our team can confirm the product, pack size, price, and delivery details.' },
];

const Contact = () => {
  const revealRef = useScrollReveal();
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);
  const whatsappUrl = config.getWhatsAppUrl('Hi DEMOCLEAN, I need help with a product or order.');

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="contact page-enter" ref={revealRef}>
      <section className="contact-hero">
        <div className="container contact-hero__inner">
          <span className="eyebrow">Talk to DEMOCLEAN</span>
          <h1>Let’s make your floors <span className="text-red">feel fresh.</span></h1>
          <p>Need product advice, order help, or business information? Our team is ready to help.</p>
        </div>
      </section>

      <section className="contact-main section">
        <div className="container contact-main__grid">
          <div className="contact-main__details scroll-reveal">
            <span className="eyebrow">Quick support</span>
            <h2>The easiest way to reach us.</h2>
            <p>For fast product and order support, send us a WhatsApp message. You can also write to us by email using the details below.</p>
            <a href={whatsappUrl} target="_blank" rel="noreferrer" className="contact-channel contact-channel--whatsapp">
              <span className="material-icons">chat</span>
              <div><strong>WhatsApp</strong><small>{config.contactPhone}</small></div>
              <span className="material-icons">arrow_outward</span>
            </a>
            <a href={config.contactPhoneHref} className="contact-channel">
              <span className="material-icons">phone</span>
              <div><strong>Mobile</strong><small>{config.contactPhone}</small></div>
              <span className="material-icons">arrow_outward</span>
            </a>
            <a href={`mailto:${config.contactEmail}`} className="contact-channel">
              <span className="material-icons">mail</span>
              <div><strong>Email</strong><small>{config.contactEmail}</small></div>
              <span className="material-icons">arrow_outward</span>
            </a>
            <div className="contact-main__hours"><span className="material-icons">schedule</span><p><strong>Support hours</strong><br />Monday–Saturday, 9:00 AM–7:00 PM</p></div>
          </div>

          <div className="contact-form scroll-reveal delay-1">
            {submitted ? (
              <div className="contact-form__success">
                <span className="material-icons">check_circle</span>
                <h3>Thank you!</h3>
                <p>Your message is ready. For the fastest response, please also contact us on WhatsApp.</p>
                <button className="btn btn-secondary" onClick={() => setSubmitted(false)}>Send another message</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="contact-form__heading"><span className="chip">SEND A MESSAGE</span><h3>How can we help?</h3></div>
                <div className="contact-form__row">
                  <label><span className="label-caps">Your name</span><input className="input-field" name="name" placeholder="Full name" required /></label>
                  <label><span className="label-caps">Phone number</span><input className="input-field" type="tel" name="phone" placeholder="Your number" required /></label>
                </div>
                <label><span className="label-caps">Email address</span><input className="input-field" type="email" name="email" placeholder="you@example.com" required /></label>
                <label><span className="label-caps">Message</span><textarea className="input-field" name="message" placeholder="Tell us what you need..." required /></label>
                <button type="submit" className="btn btn-primary">Send message <span className="material-icons">arrow_forward</span></button>
              </form>
            )}
          </div>
        </div>
      </section>

      <section className="contact-faq section section--soft">
        <div className="container contact-faq__grid">
          <div className="section-heading scroll-reveal"><span className="eyebrow">Helpful answers</span><h2>Before you <span className="text-red">ask.</span></h2><p>Quick answers to common DEMOCLEAN questions.</p></div>
          <div className="contact-faq__list scroll-reveal delay-1">
            {faqItems.map((faq, index) => (
              <div key={faq.question} className={`contact-faq__item ${openFaq === index ? 'active' : ''}`}>
                <button onClick={() => setOpenFaq(openFaq === index ? -1 : index)} aria-expanded={openFaq === index}>
                  <span>{faq.question}</span><span className="material-icons">add</span>
                </button>
                <div><p>{faq.answer}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
