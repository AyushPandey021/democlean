import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getProductById } from '../../data/products.js';
import config from '../../config.js';
import './ProductDetail.css';

const ProductDetail = () => {
  const { id } = useParams();
  const product = getProductById(id);
  const [selectedVolume, setSelectedVolume] = useState('');

  useEffect(() => {
    if (product) setSelectedVolume(product.volumes[0]);
  }, [product]);

  if (!product) {
    return (
      <main className="product-detail product-detail--missing">
        <div className="container">
          <span className="eyebrow">404</span>
          <h1>Product not found.</h1>
          <Link to="/products" className="btn btn-primary">Back to products</Link>
        </div>
      </main>
    );
  }

  const orderUrl = config.getWhatsAppUrl(`Hi DEMOCLEAN, I would like to order ${product.name} in ${selectedVolume}. Please share availability and delivery details.`);

  return (
    <main className="product-detail page-enter">
      <div className="product-detail__crumbs container">
        <Link to="/">Home</Link><span>/</span><Link to="/products">Products</Link><span>/</span><strong>{product.name}</strong>
      </div>

      <section className="product-detail__main">
        <div className="container product-detail__grid">
          <div className={`product-detail__visual product-detail__visual--${product.theme}`}>
            <span className="product-detail__outline">DEMOCLEAN</span>
            <img src={product.image} alt={product.name} />
            <span className="product-detail__fresh">Fresh<br />floors</span>
          </div>

          <div className="product-detail__info">
            <span className="chip">{product.badge}</span>
            <h1>{product.name}</h1>
            <p className="product-detail__tagline">{product.tagline}</p>
            <div className="product-detail__price"><span>Starting from</span><strong>₹{product.price}</strong></div>

            <div className="product-detail__selector">
              <span className="label-caps">Choose pack size</span>
              <div>
                {product.volumes.map((volume) => (
                  <button key={volume} className={selectedVolume === volume ? 'active' : ''} onClick={() => setSelectedVolume(volume)}>{volume}</button>
                ))}
              </div>
            </div>

            <a href={orderUrl} target="_blank" rel="noreferrer" className="btn btn-whatsapp product-detail__order"><span className="material-icons">chat</span> Order on WhatsApp</a>

            <div className="product-detail__description">
              <p>{product.description}</p>
              <ul>
                {product.features.map((feature) => <li key={feature}><span className="material-icons">check_circle</span>{feature}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="product-detail__care section--soft">
        <div className="container">
          <div className="section-heading section-heading--center"><span className="eyebrow">Simple floor care</span><h2>Pour. Mop. Enjoy the <span className="text-red">freshness.</span></h2></div>
          <div className="product-detail__steps">
            <div><strong>01</strong><h3>Dilute</h3><p>Add the recommended amount to a bucket of water.</p></div>
            <div><strong>02</strong><h3>Mop</h3><p>Clean the floor evenly with your usual mop.</p></div>
            <div><strong>03</strong><h3>Refresh</h3><p>Let the clean floor and fragrance renew the room.</p></div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProductDetail;
