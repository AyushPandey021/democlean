import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { useEffect, lazy, Suspense } from 'react';
import Navbar from './components/Navbar/Navbar.jsx';
import Footer from './components/Footer/Footer.jsx';
import GlowCursor from './components/GlowCursor/GlowCursor.jsx';
import WhatsAppButton from './components/WhatsAppButton/WhatsAppButton.jsx';
import './App.css';

// Lazy load pages for code splitting
const Home = lazy(() => import('./pages/Home/Home.jsx'));
const Shop = lazy(() => import('./pages/Shop/Shop.jsx'));
const ProductDetail = lazy(() => import('./pages/ProductDetail/ProductDetail.jsx'));
const About = lazy(() => import('./pages/About/About.jsx'));
const Contact = lazy(() => import('./pages/Contact/Contact.jsx'));

// Loading fallback component
const PageLoader = () => (
  <div className="page-loader" id="page-loader">
    <div className="page-loader__spinner" />
    <p className="page-loader__text">Loading...</p>
  </div>
);

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App = () => {
  return (
    <div className="app" id="app-root">
      {/* Animated Background Mesh */}
      <div className="mesh-bg" aria-hidden="true">
        <div className="mesh-blob mesh-blob-1" />
        <div className="mesh-blob mesh-blob-2" />
        <div className="mesh-blob mesh-blob-3" />
      </div>

      {/* Glow Cursor */}
      <GlowCursor />

      {/* Navigation */}
      <Navbar />

      {/* Scroll Reset */}
      <ScrollToTop />

      {/* Routes with Suspense for lazy loading */}
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Shop />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>

      {/* Footer */}
      <Footer />

      {/* WhatsApp Floating Button */}
      <WhatsAppButton />
    </div>
  );
};

export default App;
