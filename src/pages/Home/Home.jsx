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
          <video
  src="/videos/../../images/home-video.mp4"
  autoPlay
  muted
  loop
  playsInline
  className="w-full h-auto rounded-lg object-cover"
>
  Your browser does not support the video tag.
</video>
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
              <source src="/images/home-video.mp4" type="video/mp4" />
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
            <span className="eyebrow">Protecting every home</span>
            <h2>
              Clean is not a luxury. It is{" "}
              <span className="text-red">daily confidence.</span>
            </h2>
            <p>
              From busy kitchens to welcoming living rooms, DEMOCLEAN is made to
              make regular floor care easier, fresher, and more dependable.
            </p>
            <div className="home-story__points">
              <div>
                <span className="material-icons">check_circle</span>
                <p>
                  <strong>Simple to use</strong>
                  <br />
                  Fits easily into your daily cleaning routine.
                </p>
              </div>
              <div>
                <span className="material-icons">check_circle</span>
                <p>
                  <strong>Fresh after-clean feel</strong>
                  <br />
                  Fragrances that make the whole room feel renewed.
                </p>
              </div>
              <div>
                <span className="material-icons">check_circle</span>
                <p>
                  <strong>Sizes for every need</strong>
                  <br />
                  From regular home use to larger spaces.
                </p>
              </div>
            </div>
            <Link to="/products" className="btn btn-primary">
              Discover our products{" "}
              <span className="material-icons">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="home-gallery section section--soft">
        <div className="container">
          <div className="section-heading section-heading--center scroll-reveal">
            <span className="eyebrow">Our Products in Action</span>
            <h2>
              Explore DEMOCLEAN <span className="text-red">Gallery</span>
            </h2>
          </div>
          <div className="home-gallery__grid scroll-reveal delay-1">
            <div className="home-gallery__item">
              <img
                src="/images/allBottel.png"
                alt="DEMOCLEAN product range"
                loading="lazy"
              />
              <p>Complete Product Range</p>
            </div>
            <div className="home-gallery__item">
              <img
                src="/images/Democlean_Jasmine.png"
                alt="DEMOCLEAN Jasmine floor cleaner"
                loading="lazy"
              />
              <p>Jasmine Floor Cleaner</p>
            </div>
            <div className="home-gallery__item">
              <img
                src="/images/Democlean_Rose.png"
                alt="DEMOCLEAN Rose floor cleaner"
                loading="lazy"
              />
              <p>Rose Floor Cleaner</p>
            </div>
            <div className="home-gallery__item">
              <img
                src="/images/img2.jpeg"
                alt="DEMOCLEAN advertising"
                loading="lazy"
              />
              <p>Advertising Campaign</p>
            </div>
            <div className="home-gallery__item">
              <img
                src="/images/ad.jpeg"
                alt="DEMOCLEAN advertisement"
                loading="lazy"
              />
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
