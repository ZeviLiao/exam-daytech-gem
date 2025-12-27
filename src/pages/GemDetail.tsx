import { useParams, Link, useNavigate } from 'react-router-dom';
import { getGemById } from '../data/gems';
import './GemDetail.css';

export default function GemDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const gem = id ? getGemById(id) : undefined;

  if (!gem) {
    return (
      <div className="gem-detail-page">
        <nav className="navbar">
          <div className="navbar-container">
            <div className="navbar-brand">
              <h1>DAYKARKAL</h1>
            </div>
          </div>
        </nav>
        <div className="not-found">
          <h2>Gem Not Found</h2>
          <p>The gemstone you're looking for doesn't exist.</p>
          <Link to="/" className="back-link">Back to Collection</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="gem-detail-page">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-brand">
            <h1>DAYKARKAL</h1>
          </div>
          <div className="navbar-menu">
            <a href="#home" className="nav-link">Home</a>
            <Link to="/" className="nav-link active">Gems</Link>
            <a href="#about" className="nav-link">About</a>
            <a href="#contact" className="nav-link">Contact</a>
          </div>
        </div>
      </nav>

      {/* Breadcrumb */}
      <div className="breadcrumb">
        <div className="breadcrumb-container">
          <Link to="/">Gems</Link>
          <span className="separator">/</span>
          <span>{gem.category}</span>
          <span className="separator">/</span>
          <span className="current">{gem.name}</span>
        </div>
      </div>

      {/* Main Content */}
      <main className="gem-detail-content">
        <div className="gem-detail-container">
          <button className="back-button" onClick={() => navigate(-1)}>
            ← Back to Collection
          </button>

          <div className="gem-detail-grid">
            {/* Image Section */}
            <div className="gem-detail-image-section">
              <div className="gem-detail-image-wrapper">
                <img src={gem.imageUrl} alt={gem.name} className="gem-detail-image" />
                {gem.certified && (
                  <div className="certified-badge-large">✓ Certified Authentic</div>
                )}
              </div>
            </div>

            {/* Information Section */}
            <div className="gem-detail-info-section">
              <div className="gem-category-tag-large">{gem.category}</div>
              <h1 className="gem-detail-title">{gem.name}</h1>

              <div className="gem-price-section">
                <div className="gem-detail-price">${gem.price.toLocaleString()}</div>
                <div className={`stock-status ${gem.inStock ? 'in-stock' : 'out-of-stock'}`}>
                  {gem.inStock ? '✓ In Stock' : '✗ Out of Stock'}
                </div>
              </div>

              <div className="gem-description">
                <h2>Description</h2>
                <p>{gem.description}</p>
              </div>

              <div className="gem-specifications">
                <h2>Specifications</h2>
                <div className="specs-grid">
                  <div className="spec-item">
                    <span className="spec-label">Weight</span>
                    <span className="spec-value">{gem.weight} carats</span>
                  </div>
                  <div className="spec-item">
                    <span className="spec-label">Color</span>
                    <span className="spec-value">{gem.color}</span>
                  </div>
                  <div className="spec-item">
                    <span className="spec-label">Clarity</span>
                    <span className="spec-value">{gem.clarity}</span>
                  </div>
                  <div className="spec-item">
                    <span className="spec-label">Cut</span>
                    <span className="spec-value">{gem.cut}</span>
                  </div>
                  <div className="spec-item">
                    <span className="spec-label">Origin</span>
                    <span className="spec-value">{gem.origin}</span>
                  </div>
                  <div className="spec-item">
                    <span className="spec-label">Category</span>
                    <span className="spec-value">{gem.category}</span>
                  </div>
                </div>
              </div>

              <div className="gem-actions">
                {gem.inStock ? (
                  <>
                    <button className="btn-primary">Inquire Now</button>
                    <button className="btn-secondary">Schedule Viewing</button>
                  </>
                ) : (
                  <button className="btn-secondary" disabled>Currently Unavailable</button>
                )}
              </div>

              <div className="gem-additional-info">
                <div className="info-card">
                  <h3>🔒 Secure Transaction</h3>
                  <p>All purchases are protected with secure payment processing and insurance.</p>
                </div>
                <div className="info-card">
                  <h3>📜 Certificate of Authenticity</h3>
                  <p>Every gemstone comes with a professional certificate of authenticity.</p>
                </div>
                <div className="info-card">
                  <h3>🚚 Worldwide Shipping</h3>
                  <p>Secure, insured shipping available to most countries worldwide.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <p>&copy; 2024 DAYKARKAL. All rights reserved.</p>
          <div className="footer-links">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
            <a href="#contact">Contact Us</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
