import { Link } from 'react-router-dom';
import useScrollReveal from '../../hooks/useScrollReveal.js';
import './About.css';

const values = [
  { icon: 'cleaning_services', title: 'Practical performance', text: 'Floor care should be straightforward, dependable, and ready for everyday life.' },
  { icon: 'favorite', title: 'Made for families', text: 'We design around the rooms, routines, and expectations of real households.' },
  { icon: 'flag', title: 'Proudly Indian', text: 'A homegrown brand with a clear focus on accessible cleaning essentials.' },
  { icon: 'sentiment_satisfied', title: 'Freshness that feels good', text: 'A clean home should look brighter and feel more welcoming after every mop.' },
];

const About = () => {
  const revealRef = useScrollReveal();

  return (
    <main className="about page-enter" ref={revealRef}>
      <section className="about-hero">
        <div className="container about-hero__grid">
          <div className="about-hero__content">
            <span className="eyebrow">Our story</span>
            <h1>Built for the way <span className="text-red">India cleans.</span></h1>
            <p>DEMOCLEAN is an everyday floor-care brand focused on dependable cleaning, enjoyable fragrances, and practical value for homes and businesses.</p>
          </div>
          <div className="about-hero__visual">
            <img src="/images/img3.jpeg" alt="DEMOCLEAN brand campaign" />
            <span className="about-hero__tag">Powerful cleaning.<br />Complete protection.</span>
          </div>
        </div>
      </section>

      <section className="about-story section">
        <div className="container">
          <div className="section-heading scroll-reveal">
            <span className="eyebrow">DEMOCLEAN™ INDIA</span>
            <h2>Our Story</h2>
          </div>
          <div className="about-story__content scroll-reveal delay-1">
            <p>
              Every successful brand begins with a vision, a purpose, and the determination to make a meaningful difference. DEMOCLEAN™ was born from that very vision—to provide Indian families, businesses, and institutions with cleaning and hygiene solutions that combine superior quality, reliable performance, and exceptional value.
            </p>
            <p>
              Founded by Mr. Sachchitanand Pandey, under the banner of Vishal & Vishal Marketing Company, DEMOCLEAN™ represents years of dedication, perseverance, and an unwavering commitment to excellence.
            </p>
            <p>
              The journey of DEMOCLEAN™ began with a simple belief: every home deserves a cleaner, healthier, and safer environment. Recognizing the growing need for dependable cleaning products in both urban and rural markets, Mr. Pandey embarked on a mission to manufacture products that could deliver powerful cleaning performance while remaining affordable for everyday use. His commitment to quality, ethical business practices, and customer satisfaction laid the foundation of a brand that continues to earn the trust of retailers, distributors, and consumers alike.
            </p>
            <p>
              Over the years, DEMOCLEAN™ has steadily expanded its product portfolio to address a wide range of household and institutional cleaning needs. Today, the brand proudly offers an extensive selection of products, including Herbal White Floor Cleaners, Scented Floor Cleaners, White Phenyl, Coloured Phenyl, Super Strong Black Phenyl, Toilet Cleaners, Super Strong Toilet Cleaners, Dishwash Solutions, Naphthalene Balls, and other hygiene products. Every formulation is developed with the objective of delivering effective cleaning, long-lasting freshness, and dependable performance while maintaining the highest standards of quality.
            </p>
            <p>
              At DEMOCLEAN™, we believe that hygiene is not just about appearance—it is about protecting families, promoting healthier lifestyles, and creating environments where people can live and work with confidence. Every product manufactured by our company reflects this philosophy, combining carefully selected ingredients, modern manufacturing practices, and stringent quality control measures to ensure consistent performance and customer satisfaction.
            </p>
            <p>
              As the company continues to grow, the vision of the founder is being carried forward by the next generation. Mr. Vishal Pandey, the founder's son, actively contributes to the company's future by focusing on brand development, digital transformation, modern marketing strategies, product innovation, and business expansion. By blending traditional manufacturing expertise with contemporary business practices, he is helping position DEMOCLEAN™ as a modern Indian brand prepared to meet the evolving expectations of today's consumers and business partners.
            </p>
            <p>
              Our long-term vision extends beyond manufacturing cleaning products. We aspire to build a nationally recognized home care and hygiene brand that stands for trust, innovation, affordability, and customer satisfaction. Through continuous investment in research, product development, packaging innovation, and distribution expansion, DEMOCLEAN™ is committed to reaching more households, retailers, distributors, institutions, and commercial establishments across India.
            </p>
            <p>
              At the heart of our success lies the trust of our customers and business partners. Their confidence motivates us to continuously improve, innovate, and maintain the standards that define the DEMOCLEAN™ name. Every bottle that leaves our manufacturing facility carries not only a cleaning solution but also our promise of quality, reliability, and excellence.
            </p>
          </div>
          
          <div className="about-story__details scroll-reveal delay-2">
            <div className="about-story__leadership">
              <h3>Leadership</h3>
              <ul>
                <li><strong>Mr. Sachchitanand Pandey</strong> - Founder</li>
                <li><strong>Mr. Vishal Pandey</strong> - Next Generation Leadership – Brand Development & Marketing</li>
              </ul>
            </div>
            
            <div className="about-story__vision-mission">
              <div>
                <h4>Our Vision</h4>
                <p>To become one of India's most trusted home care and hygiene brands by delivering innovative, high-quality, and affordable cleaning solutions that improve everyday life.</p>
              </div>
              <div>
                <h4>Our Mission</h4>
                <p>To manufacture reliable, effective, and value-driven hygiene products while building long-term relationships with customers, distributors, retailers, and business partners through quality, integrity, and continuous innovation.</p>
              </div>
            </div>
            
            <div className="about-story__values">
              <h4>Our Core Values</h4>
              <ul>
                <li>Quality Without Compromise</li>
                <li>Customer First</li>
                <li>Integrity & Transparency</li>
                <li>Continuous Innovation</li>
                <li>Sustainable Growth</li>
                <li>Commitment to Hygiene</li>
                <li>Made for India</li>
              </ul>
            </div>
            
            <div className="about-story__contact">
              <h4>Contact Us</h4>
              <p><span className="material-icons">email</span> <strong>Email:</strong> vishalandvishal70@gmail.com</p>
              <p><span className="material-icons">phone</span> <strong>Mobile:</strong> +91 9098667176</p>
            </div>
            
            <p className="about-story__tagline"><strong>DEMOCLEAN™ — Cleaning Today. Caring Forever.</strong></p>
          </div>
        </div>
      </section>

      <section className="about-intro section">
        <div className="container about-intro__grid">
          <div className="about-intro__quote scroll-reveal"><span>“</span><h2>A cleaner floor changes how the whole home feels.</h2></div>
          <div className="about-intro__copy scroll-reveal delay-1">
            <span className="eyebrow">The DEMOCLEAN idea</span>
            <p>We believe good floor care does not need to be complicated. It should clean reliably, leave a pleasant fragrance, and be available in sizes that make sense for daily life.</p>
            <p>That simple belief shapes every DEMOCLEAN product—from our familiar jasmine and rose variants to larger family packs for frequent use.</p>
          </div>
        </div>
      </section>

      <section className="about-values section section--soft">
        <div className="container">
          <div className="section-heading scroll-reveal"><span className="eyebrow">What guides us</span><h2>Simple values. <span className="text-red">Visible results.</span></h2></div>
          <div className="about-values__grid">
            {values.map((value, index) => (
              <article key={value.title} className={`about-value scroll-reveal delay-${index + 1}`}>
                <span className="material-icons">{value.icon}</span>
                <h3>{value.title}</h3>
                <p>{value.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-range section">
        <div className="container about-range__grid">
          <div className="about-range__content scroll-reveal">
            <span className="eyebrow">One brand, many spaces</span>
            <h2>From the family room to the <span className="text-red">shop floor.</span></h2>
            <p>DEMOCLEAN supports regular cleaning in homes, offices, stores, clinics, common areas, and other busy spaces where freshness matters every day.</p>
            <Link to="/products" className="btn btn-primary">Explore the range <span className="material-icons">arrow_forward</span></Link>
          </div>
          <div className="about-range__image scroll-reveal delay-1"><img src="/images/allBottel.png" alt="Full DEMOCLEAN product family" loading="lazy" /></div>
        </div>
      </section>
    </main>
  );
};

export default About;
