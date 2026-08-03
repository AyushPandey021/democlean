import { Link } from "react-router-dom";
import ProductCard from "../../components/ProductCard/ProductCard.jsx";
import useScrollReveal from "../../hooks/useScrollReveal.js";
import { products } from "../../data/products.js";
import config from "../../config.js";
import "./Home.css";

const benefits = [
  {
    icon: "health_and_safety",
    title: "Hygienic everyday clean",
    text: "A dependable formula designed for the floors your family uses every day.",
  },
  {
    icon: "local_florist",
    title: "Fresh fragrances",
    text: "Choose the bright freshness of jasmine or the warm, familiar scent of rose.",
  },
  {
    icon: "home",
    title: "Made for real homes",
    text: "Practical bottle sizes for kitchens, living rooms, offices, shops, and more.",
  },
];

const storyContent = {
  heading: "DEMOCLEAN™ INDIA - Our Story",
  paragraphs: [
    "Every successful brand begins with a vision, a purpose, and the determination to make a meaningful difference. DEMOCLEAN™ was born from that very vision—to provide Indian families, businesses, and institutions with cleaning and hygiene solutions that combine superior quality, reliable performance, and exceptional value.",
    "Founded by Mr. Sachchitanand Pandey, under the banner of Vishal & Vishal Marketing Company, DEMOCLEAN™ represents years of dedication, perseverance, and an unwavering commitment to excellence.",
    "The journey of DEMOCLEAN™ began with a simple belief: every home deserves a cleaner, healthier, and safer environment. Recognizing the growing need for dependable cleaning products in both urban and rural markets, Mr. Pandey embarked on a mission to manufacture products that could deliver powerful cleaning performance while remaining affordable for everyday use.",
    "Over the years, DEMOCLEAN™ has steadily expanded its product portfolio to address a wide range of household and institutional cleaning needs. Today, the brand proudly offers an extensive selection of products, including Herbal White Floor Cleaners, Scented Floor Cleaners, White Phenyl, Coloured Phenyl, Super Strong Black Phenyl, Toilet Cleaners, Super Strong Toilet Cleaners, Dishwash Solutions, Naphthalene Balls, and other hygiene products.",
    "At DEMOCLEAN™, we believe that hygiene is not just about appearance—it is about protecting families, promoting healthier lifestyles, and creating environments where people can live and work with confidence. Every product manufactured by our company reflects this philosophy, combining carefully selected ingredients, modern manufacturing practices, and stringent quality control measures.",
    "As the company continues to grow, the vision of the founder is being carried forward by the next generation. Mr. Vishal Pandey, the founder's son, actively contributes to the company's future by focusing on brand development, digital transformation, modern marketing strategies, product innovation, and business expansion.",
    "Our long-term vision extends beyond manufacturing cleaning products. We aspire to build a nationally recognized home care and hygiene brand that stands for trust, innovation, affordability, and customer satisfaction."
  ],
  leadership: [
    { name: "Mr. Sachchitanand Pandey", role: "Founder" },
    { name: "Mr. Vishal Pandey", role: "Next Generation Leadership – Brand Development & Marketing" }
  ],
  vision: "To become one of India's most trusted home care and hygiene brands by delivering innovative, high-quality, and affordable cleaning solutions that improve everyday life.",
  mission: "To manufacture reliable, effective, and value-driven hygiene products while building long-term relationships with customers, distributors, retailers, and business partners through quality, integrity, and continuous innovation.",
  values: [
    "Quality Without Compromise",
    "Customer First",
    "Integrity & Transparency",
    "Continuous Innovation",
    "Sustainable Growth",
    "Commitment to Hygiene",
    "Made for India"
  ],
  tagline: "DEMOCLEAN™ — Cleaning Today. Caring Forever."
};

const Home = () => {
  const revealRef = useScrollReveal();
  const whatsappUrl = config.getWhatsAppUrl(
    "Hi DEMOCLEAN, I would like to place an order.",
  );

  return (
    <main className="home page-enter" ref={revealRef}>
      <section className="home-hero">
        <div className="home-hero__shape" aria-hidden="true" />
        <div className="container home-hero__grid">
          <div className="home-hero__content">
            <span className="eyebrow">Hygiene ka rakshak</span>
            <h1>
              Clean floors.
              <br />
              <span className="text-red">Confident homes.</span>
            </h1>
            <p>
              DEMOCLEAN brings powerful everyday floor cleaning together with
              fresh, welcoming fragrances made for Indian homes.
            </p>
            <div className="home-hero__actions">
              <Link to="/products" className="btn btn-primary">
                Shop the range{" "}
                <span className="material-icons">arrow_forward</span>
              </Link>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="btn btn-secondary"
              >
                Order on WhatsApp
              </a>
            </div>
            <div className="home-hero__trust">
              <div className="home-hero__avatars">
                <span>D</span>
                <span>C</span>
                <span>✓</span>
              </div>
              <p>
                <strong>Trusted for daily cleaning</strong>
                <br />
                Fresh floors, simple routine.
              </p>
            </div>
          </div>

          <div className="home-hero__visual">
            <div className="home-hero__red-card">
              <span className="home-hero__badge">
                <span className="material-icons">verified</span> Made in India
              </span>
              <img
                src="/images/allBottel.png"
                alt="DEMOCLEAN floor cleaner product range"
              />
              <div className="home-hero__floating home-hero__floating--top">
                <strong>2</strong>
                <span>
                  signature
                  <br />
                  fragrances
                </span>
              </div>
              <div className="home-hero__floating home-hero__floating--bottom">
                <span className="material-icons">auto_awesome</span>
                <span>
                  Fresh-looking
                  <br />
                  floors, every day
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="home-hero__ticker" aria-label="Product benefits">
          <div>
            POWERFUL CLEANING <span>✦</span> LONG-LASTING FRAGRANCE{" "}
            <span>✦</span> FAMILY-FRIENDLY FLOOR CARE <span>✦</span> MADE IN
            INDIA
          </div>
        </div>
      </section>

      <section className="home-video section section--soft">
        <div className="container home-video__grid">
          <div className="home-video__content scroll-reveal">
            <span className="eyebrow">See DEMOCLEAN</span>
            <h2>
              Five fresh choices.{" "}
              <span className="text-red">One trusted clean.</span>
            </h2>
            <p>
              Explore our complete fragrance range—from floral favourites to
              calming everyday freshness—made to leave every room feeling clean
              and welcoming.
            </p>
            <div className="home-video__facts">
              <div>
                <strong>5</strong>
                <span>
                  fresh
                  <br />
                  fragrances
                </span>
              </div>
              <div>
                <strong>99.9%</strong>
                <span>
                  germ
                  <br />
                  protection
                </span>
              </div>
            </div>
            <Link to="/products" className="btn btn-primary">
              Explore products{" "}
              <span className="material-icons">arrow_forward</span>
            </Link>
          </div>

          <div className="home-video__player scroll-reveal delay-1">
            <video
              controls
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster="/images/WhatsApp%20Image%202026-08-02%20at%204.13.52%20PM.jpeg"
              aria-label="DEMOCLEAN product showcase video"
            >
              <source
                src="/images/home-video.mp4"
                type="video/mp4"
              />
              <source
                src="/images/WhatsApp%20Video%202026-08-02%20at%204.13.52%20PM.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
            <span className="home-video__label">
              <span className="material-icons">play_arrow</span> Product
              showcase
            </span>
          </div>

          <div className="home-video__poster scroll-reveal delay-2">
            <img
              src="/images/WhatsApp%20Image%202026-08-02%20at%204.13.52%20PM.jpeg"
              alt="DEMOCLEAN five fragrance range"
              loading="lazy"
            />
            <span>Rose • Mogra • Kewda • Lavender • Herbal</span>
          </div>
        </div>
      </section>

      <section className="home-benefits section">
        <div className="container">
          <div className="section-heading section-heading--center scroll-reveal">
            <span className="eyebrow">Why DEMOCLEAN</span>
            <h2>
              Everything you want from an{" "}
              <span className="text-red">everyday cleaner.</span>
            </h2>
          </div>
          <div className="home-benefits__grid">
            {benefits.map((benefit, index) => (
              <article
                key={benefit.title}
                className={`home-benefit scroll-reveal delay-${index + 1}`}
              >
                <span className="home-benefit__icon material-icons">
                  {benefit.icon}
                </span>
                <span className="home-benefit__index">0{index + 1}</span>
                <h3>{benefit.title}</h3>
                <p>{benefit.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="home-products section section--soft">
        <div className="container">
          <div className="home-products__header scroll-reveal">
            <div className="section-heading">
              <span className="eyebrow">Our favourites</span>
              <h2>
                Pick your kind of <span className="text-red">fresh.</span>
              </h2>
            </div>
            <Link to="/products" className="home-products__all">
              View all products{" "}
              <span className="material-icons">arrow_forward</span>
            </Link>
          </div>
          <div className="home-products__grid">
            {products.slice(0, 2).map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="home-story section">
        <div className="container home-story__grid">
          <div className="home-story__image scroll-reveal">
            <img
              src="/images/img3.jpeg"
              alt="DEMOCLEAN hygiene protector campaign"
              loading="lazy"
            />
            <div className="home-story__stamp">
              <strong>100%</strong>
              <span>
                made for
                <br />
                everyday care
              </span>
            </div>
          </div>
          <div className="home-story__content scroll-reveal delay-1">
            <span className="eyebrow">Our Story</span>
            <h2>DEMOCLEAN™ INDIA</h2>
            <div className="home-story__full-content">
              {storyContent.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
              
              <div className="home-story__leadership">
                <h3>Leadership</h3>
                <ul>
                  {storyContent.leadership.map((leader, index) => (
                    <li key={index}>
                      <strong>{leader.name}</strong> - {leader.role}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="home-story__vision-mission">
                <div>
                  <h4>Our Vision</h4>
                  <p>{storyContent.vision}</p>
                </div>
                <div>
                  <h4>Our Mission</h4>
                  <p>{storyContent.mission}</p>
                </div>
              </div>
              
              <div className="home-story__values">
                <h4>Our Core Values</h4>
                <ul>
                  {storyContent.values.map((value, index) => (
                    <li key={index}>{value}</li>
                  ))}
                </ul>
              </div>
              
              <p className="home-story__tagline"><strong>{storyContent.tagline}</strong></p>
            </div>
            
            <div className="home-story__contact">
              <h4>Contact Us</h4>
              <p>
                <span className="material-icons">email</span>
                <strong>Email:</strong> vishalandvishal70@gmail.com
              </p>
              <p>
                <span className="material-icons">phone</span>
                <strong>Mobile:</strong> +91 9098667176
              </p>
            </div>
            
            <Link to="/about" className="btn btn-primary">
              Discover our story{" "}
              <span className="material-icons">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="home-gallery section section--soft">
        <div className="container">
          <div className="section-heading section-heading--center scroll-reveal">
            <span className="eyebrow">Our Products in Action</span>
            <h2>Explore DEMOCLEAN <span className="text-red">Gallery</span></h2>
          </div>
          <div className="home-gallery__grid scroll-reveal delay-1">
            <div className="home-gallery__item">
              <img src="/images/allBottel.png" alt="DEMOCLEAN product range" loading="lazy" />
              <p>Complete Product Range</p>
            </div>
            <div className="home-gallery__item">
              <img src="/images/Democlean_Jasmine.png" alt="DEMOCLEAN Jasmine floor cleaner" loading="lazy" />
              <p>Jasmine Floor Cleaner</p>
            </div>
            <div className="home-gallery__item">
              <img src="/images/Democlean_Rose.png" alt="DEMOCLEAN Rose floor cleaner" loading="lazy" />
              <p>Rose Floor Cleaner</p>
            </div>
            <div className="home-gallery__item">
              <img src="/images/img2.jpeg" alt="DEMOCLEAN advertising" loading="lazy" />
              <p>Advertising Campaign</p>
            </div>
            <div className="home-gallery__item">
              <img src="/images/ad.jpeg" alt="DEMOCLEAN advertisement" loading="lazy" />
              <p>Product Promotion</p>
            </div>
          </div>
        </div>
      </section>

      <section className="home-cta">
        <div className="container home-cta__inner scroll-reveal">
          <div>
            <span className="eyebrow">Ready when you are</span>
            <h2>
              Bring home the <span>DEMOCLEAN difference.</span>
            </h2>
            <div className="home-cta__contact-info">
              <p>
                <span className="material-icons">email</span>
                <strong>Email:</strong> vishalandvishal70@gmail.com
              </p>
              <p>
                <span className="material-icons">phone</span>
                <strong>Mobile:</strong> +91 9098667176
              </p>
            </div>
          </div>
          <div className="home-cta__actions">
            <Link to="/products" className="btn btn-primary">
              Choose your cleaner
            </Link>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="home-cta__whatsapp"
            >
              <span className="material-icons">chat</span> Chat with us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
