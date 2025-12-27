import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { GEMS_DATA } from '../data/gems';
import { GemCategory, SortOption } from '../types/gem';
import './GemList.css';

const CATEGORIES: GemCategory[] = ['All', 'Ruby', 'Sapphire', 'Emerald', 'Diamond'];

export default function GemList() {
  const [selectedCategory, setSelectedCategory] = useState<GemCategory>('All');
  const [sortBy, setSortBy] = useState<SortOption>('name-asc');

  const filteredAndSortedGems = useMemo(() => {
    // Filter by category
    let filtered = selectedCategory === 'All'
      ? GEMS_DATA
      : GEMS_DATA.filter(gem => gem.category === selectedCategory);

    // Sort
    const sorted = [...filtered].sort((a, b) => {
      switch (sortBy) {
        case 'price-asc':
          return a.price - b.price;
        case 'price-desc':
          return b.price - a.price;
        case 'name-asc':
          return a.name.localeCompare(b.name);
        case 'name-desc':
          return b.name.localeCompare(a.name);
        default:
          return 0;
      }
    });

    return sorted;
  }, [selectedCategory, sortBy]);

  return (
    <div className="gem-list-page">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-brand">
            <h1>DAYKARKAL</h1>
          </div>
          <div className="navbar-menu">
            <a href="#home" className="nav-link">Home</a>
            <a href="#gems" className="nav-link active">Gems</a>
            <a href="#about" className="nav-link">About</a>
            <a href="#contact" className="nav-link">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h2>Premium Gemstone Collection</h2>
          <p>Discover the world's finest precious stones, expertly curated and certified</p>
        </div>
      </section>

      {/* Filter and Sort Section */}
      <section className="controls">
        <div className="controls-container">
          <div className="filter-section">
            <h3>Categories</h3>
            <div className="category-filters">
              {CATEGORIES.map(category => (
                <button
                  key={category}
                  className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="sort-section">
            <label htmlFor="sort">Sort by:</label>
            <select
              id="sort"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortOption)}
              className="sort-select"
            >
              <option value="name-asc">Name (A-Z)</option>
              <option value="name-desc">Name (Z-A)</option>
              <option value="price-asc">Price (Low to High)</option>
              <option value="price-desc">Price (High to Low)</option>
            </select>
          </div>
        </div>
      </section>

      {/* Results Count */}
      <div className="results-info">
        <p>Showing {filteredAndSortedGems.length} {filteredAndSortedGems.length === 1 ? 'gem' : 'gems'}</p>
      </div>

      {/* Gem Grid */}
      <section className="gem-grid">
        <div className="gem-grid-container">
          {filteredAndSortedGems.map(gem => (
            <Link
              to={`/gem/${gem.id}`}
              key={gem.id}
              className="gem-card"
            >
              <div className="gem-image-wrapper">
                <img src={gem.imageUrl} alt={gem.name} className="gem-image" />
                {!gem.inStock && (
                  <div className="out-of-stock-badge">Out of Stock</div>
                )}
                {gem.certified && (
                  <div className="certified-badge">Certified</div>
                )}
              </div>

              <div className="gem-info">
                <div className="gem-category-tag">{gem.category}</div>
                <h3 className="gem-name">{gem.name}</h3>

                <div className="gem-details">
                  <div className="gem-detail-item">
                    <span className="detail-label">Weight:</span>
                    <span className="detail-value">{gem.weight} ct</span>
                  </div>
                  <div className="gem-detail-item">
                    <span className="detail-label">Color:</span>
                    <span className="detail-value">{gem.color}</span>
                  </div>
                  <div className="gem-detail-item">
                    <span className="detail-label">Origin:</span>
                    <span className="detail-value">{gem.origin}</span>
                  </div>
                </div>

                <div className="gem-footer">
                  <div className="gem-price">${gem.price.toLocaleString()}</div>
                  <button className="view-details-btn">View Details</button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

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
