import { useEffect } from 'react';
import useScrollReveal from '../../hooks/useScrollReveal.js';
import './About.css';

const About = () => {
  const revealRef = useScrollReveal();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="about page-enter" id="about-page" ref={revealRef}>
      {/* Hero */}
      <section className="about__hero">
        <div className="about__hero-bg">
          <div className="about__hero-orb about__hero-orb--1" />
          <div className="about__hero-orb about__hero-orb--2" />
        </div>
        <div className="container">
          <span className="label-caps" style={{ color: 'var(--accent-aqua)' }}>
            OUR STORY
          </span>
          <h1 className="about__hero-title">
            We didn't just reimagine cleaning products; we engineered{' '}
            <span className="text-gradient">a new paradigm</span> for surface hygiene.
          </h1>
          <p className="body-lg about__hero-subtitle">
            Precision, efficacy, and future-forward design.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="about__story section" ref={revealRef}>
        <div className="container">
          <div className="about__story-grid">
            <div className="about__story-content scroll-reveal">
              <h2>
                Precision in <span className="text-gradient-gold">Every Drop.</span>
              </h2>
              <p className="body-lg">
                DEMOCLEAN began with a simple question: Why does essential maintenance
                feel antiquated? We sought to bridge the gap between industrial efficacy
                and high-end consumer experience.
              </p>
              <p>
                Our laboratories spent three years perfecting the molecular structure of
                our flagship formula, ensuring it not only cleans but actively repels
                future accumulation.
              </p>
              <p>
                It's not just about removing dirt. It's about elevating the standard of
                the environments we inhabit. Welcome to the frictionless future.
              </p>
            </div>

            <div className="about__story-visual glass-card scroll-reveal delay-2">
              <div className="about__story-visual-inner">
                <div className="about__molecule">
                  <div className="about__molecule-core" />
                  <div className="about__molecule-orbit about__molecule-orbit--1">
                    <div className="about__molecule-electron" />
                  </div>
                  <div className="about__molecule-orbit about__molecule-orbit--2">
                    <div className="about__molecule-electron" />
                  </div>
                  <div className="about__molecule-orbit about__molecule-orbit--3">
                    <div className="about__molecule-electron" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="about__values section" id="values-section">
        <div className="container">
          <div className="about__values-header scroll-reveal">
            <span className="label-caps" style={{ color: 'var(--accent-aqua)' }}>
              CORE PRINCIPLES
            </span>
            <h2>The DEMOCLEAN Standard</h2>
          </div>

          <div className="about__values-grid">
            <div className="about__value glass-card scroll-reveal delay-1" id="value-sustainability">
              <div className="about__value-icon">
                <span className="material-icons">park</span>
              </div>
              <h3>Sustainability</h3>
              <p>
                Engineered to minimize environmental impact without compromising
                industrial-grade performance.
              </p>
            </div>

            <div className="about__value glass-card scroll-reveal delay-2" id="value-transparency">
              <div className="about__value-icon about__value-icon--aqua">
                <span className="material-icons">visibility</span>
              </div>
              <h3>Transparency</h3>
              <p>
                Open-source material lists. We hide nothing behind 'proprietary
                blend' labels.
              </p>
            </div>

            <div className="about__value glass-card scroll-reveal delay-3" id="value-innovation">
              <div className="about__value-icon about__value-icon--gold">
                <span className="material-icons">rocket_launch</span>
              </div>
              <h3>Innovation</h3>
              <p>
                Continuous iterative improvement of our molecular compounds for
                optimal glide coefficients.
              </p>
            </div>

            <div className="about__value glass-card scroll-reveal delay-4" id="value-safety">
              <div className="about__value-icon about__value-icon--lime">
                <span className="material-icons">shield</span>
              </div>
              <h3>Safety</h3>
              <p>
                Rigorous dermatological and respiratory testing ensures our
                formulations are as safe as they are effective.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="about__timeline section">
        <div className="container">
          <h2 className="about__timeline-title scroll-reveal" style={{ textAlign: 'center', marginBottom: 'var(--space-lg)' }}>
            Our <span className="text-gradient">Journey</span>
          </h2>
          <div className="about__timeline-items">
            <div className="about__timeline-item scroll-reveal delay-1">
              <div className="about__timeline-dot" />
              <div className="about__timeline-content glass-card">
                <span className="label-caps" style={{ color: 'var(--tertiary)' }}>2019</span>
                <h3>The Spark</h3>
                <p>Founded in a garage lab with a vision to reinvent surface care through molecular engineering.</p>
              </div>
            </div>
            <div className="about__timeline-item scroll-reveal delay-2">
              <div className="about__timeline-dot" />
              <div className="about__timeline-content glass-card">
                <span className="label-caps" style={{ color: 'var(--accent-aqua)' }}>2021</span>
                <h3>First Formula</h3>
                <p>After 18 months of R&D, our flagship Daily Fresh achieves 99.9% bacterial elimination in lab tests.</p>
              </div>
            </div>
            <div className="about__timeline-item scroll-reveal delay-3">
              <div className="about__timeline-dot" />
              <div className="about__timeline-content glass-card">
                <span className="label-caps" style={{ color: 'var(--accent-lime)' }}>2023</span>
                <h3>Full Collection</h3>
                <p>Expansion to 6 specialized formulas covering every surface type in the modern home.</p>
              </div>
            </div>
            <div className="about__timeline-item scroll-reveal delay-4">
              <div className="about__timeline-dot" />
              <div className="about__timeline-content glass-card">
                <span className="label-caps" style={{ color: 'var(--primary)' }}>2024</span>
                <h3>The Future</h3>
                <p>Launching our bio-synthetic line—industrial strength meets 100% biodegradable compounds.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
