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
