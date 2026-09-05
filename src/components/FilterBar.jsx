import React from 'react';
import '../styles/filterbar.css';
import { CATEGORIES } from '../data/bikes';

export default function FilterBar({
  selectedCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
  sortBy,
  onSortChange,
  resultsCount
}) {
  return (
    <div className="filterbar-section">
      <div className="container">
        <div className="power-bar">
          {/* Top Row: Category Pills */}
          <div className="category-pills">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                type="button"
                className={`pill-btn ${selectedCategory === cat.id ? 'active' : ''}`}
                onClick={() => onSelectCategory(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Bottom Row: Search, Sort & Counter */}
          <div className="power-controls">
            {/* Search Input */}
            <div className="search-box">
              <span className="search-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </span>
              <input
                type="text"
                className="search-input"
                placeholder="Buscar por modelo, componente ou tecnologia (ex: Dura-Ace, Carbono)..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
              />
            </div>

            {/* Sort Select */}
            <div className="sort-box">
              <label htmlFor="sort-select" className="sort-label">Ordenar:</label>
              <select
                id="sort-select"
                className="sort-select"
                value={sortBy}
                onChange={(e) => onSortChange(e.target.value)}
              >
                <option value="featured">Destaques da Temporada</option>
                <option value="price-asc">Menor Preço</option>
                <option value="price-desc">Maior Preço</option>
                <option value="weight">Menor Peso (Mais Leve)</option>
              </select>
            </div>

            {/* Counter */}
            <div className="results-badge">
              <span>Modelos: <strong>{resultsCount}</strong></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
