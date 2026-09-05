import React, { useState, useMemo } from 'react';
import '../styles/components-store.css';
import { COMPONENTS_DATA, ACCESSORY_CATEGORIES } from '../data/componentsData';
import ComponentCard from './ComponentCard';

export default function ComponentsPage({ onAddToCart, onNavigateHome }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('featured');

  const filteredComponents = useMemo(() => {
    let list = [...COMPONENTS_DATA];

    // Filter Category
    if (selectedCategory !== 'all') {
      list = list.filter((c) => c.category === selectedCategory);
    }

    // Filter Search
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      list = list.filter(
        (c) =>
          c.name.toLowerCase().includes(q) ||
          c.description.toLowerCase().includes(q) ||
          c.categoryLabel.toLowerCase().includes(q) ||
          Object.values(c.specs).some((s) => typeof s === 'string' && s.toLowerCase().includes(q))
      );
    }

    // Sort
    if (sortBy === 'price-asc') {
      list.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-desc') {
      list.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'weight') {
      list.sort((a, b) => parseInt(a.weight, 10) - parseInt(b.weight, 10));
    } else {
      list.sort((a, b) => b.rating - a.rating);
    }

    return list;
  }, [selectedCategory, searchQuery, sortBy]);

  return (
    <section className="components-page">
      <div className="container">
        {/* Header */}
        <div className="comp-header">
          <div>
            <span className="comp-tag">UPGRADE DE PERFORMANCE • OFICINA DE PADDOCK</span>
            <h1 className="comp-title">Componentes & Acessórios de Alta Precisão</h1>
          </div>
          <p className="comp-desc">
            Cada grama e cada watt economizados contam. Componentes em fibra de carbono T1100G, 
            rolamentos cerâmicos CeramicSpeed, eletrônica de potência bilateral e vestuário testado em túnel de vento.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="comp-filter-bar">
          {/* Categories Pills */}
          <div className="comp-category-pills">
            {ACCESSORY_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                type="button"
                className={`pill-btn ${selectedCategory === cat.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Controls: Search, Sort and Counter */}
          <div className="comp-controls-row">
            {/* Search Box */}
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
                placeholder="Buscar componente por nome, material ou padrão (ex: Ceramic, Carbono)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Sort Select */}
            <div className="sort-box">
              <label htmlFor="comp-sort" className="sort-label">Classificar:</label>
              <select
                id="comp-sort"
                className="sort-select"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="featured">Melhor Avaliados</option>
                <option value="price-asc">Menor Preço</option>
                <option value="price-desc">Maior Preço</option>
                <option value="weight">Menor Massa (Mais Leve)</option>
              </select>
            </div>

            {/* Counter */}
            <div className="results-badge">
              <span>Peças: <strong>{filteredComponents.length}</strong></span>
            </div>
          </div>
        </div>

        {/* Grid or Empty */}
        {filteredComponents.length > 0 ? (
          <div className="components-grid">
            {filteredComponents.map((item) => (
              <ComponentCard
                key={item.id}
                component={item}
                onAddToCart={onAddToCart}
              />
            ))}
          </div>
        ) : (
          <div className="showroom-empty">
            <h3>Nenhum componente encontrado</h3>
            <p>Tente ajustar os filtros ou os termos digitados na busca de componentes.</p>
            <button
              type="button"
              className="btn-primary"
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
                setSortBy('featured');
              }}
            >
              Restaurar Filtros
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
