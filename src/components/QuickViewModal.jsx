import React, { useState, useEffect } from 'react';
import '../styles/modal.css';

export default function QuickViewModal({ bike, initialColor, onClose, onAddToCart, onOpenSpecsPage }) {
  const [selectedColor, setSelectedColor] = useState(initialColor || bike.colors[0]);
  const [selectedSize, setSelectedSize] = useState(bike.sizes[1] || bike.sizes[0]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!bike) return null;

  const formatPrice = (value) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      maximumFractionDigits: 0
    }).format(value);
  };

  const handleAddToCart = () => {
    onAddToCart(bike, selectedColor, selectedSize);
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button
          type="button"
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Fechar modal"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <div className="modal-content">
          {/* Visual Side */}
          <div className="modal-visual-side">
            <div className="modal-image-wrap">
              <img
                src={selectedColor.image}
                alt={`${bike.name} - ${selectedColor.name}`}
              />
            </div>

            {/* Colors Choice */}
            <div className="modal-colors-wrap">
              <span className="colors-label">Acabamento de Pintura ({selectedColor.name})</span>
              <div className="colors-options">
                {bike.colors.map((color) => (
                  <button
                    key={color.id}
                    type="button"
                    className={`color-option-btn ${selectedColor.id === color.id ? 'active' : ''}`}
                    onClick={() => setSelectedColor(color)}
                  >
                    <span
                      className="color-circle"
                      style={{ backgroundColor: color.hex }}
                    />
                    <span>{color.name.split(' ')[0]}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Button to full specs page */}
            {onOpenSpecsPage && (
              <button
                type="button"
                className="btn-secondary"
                style={{ width: '100%', fontSize: '12px', padding: '10px' }}
                onClick={() => {
                  onClose();
                  onOpenSpecsPage(bike.id);
                }}
              >
                Abrir Página Completa de Engenharia →
              </button>
            )}
          </div>

          {/* Technical Specs Side */}
          <div className="modal-info-side">
            <div className="modal-badge-row">
              <span className="badge-tag highlight">{bike.badge}</span>
              <span className="badge-tag">{bike.categoryLabel}</span>
            </div>

            <h2 className="modal-title">{bike.name}</h2>
            <p className="modal-tagline">{bike.tagline}</p>
            <p className="modal-desc">{bike.description}</p>

            {/* Sizes Selection */}
            <div className="size-selector-group">
              <div className="selector-heading">
                <span>Tamanho do Quadro</span>
                <span style={{ color: 'var(--color-primary)' }}>Guia de Altura Ativo</span>
              </div>
              <div className="size-pills">
                {bike.sizes.map((size) => (
                  <button
                    key={size}
                    type="button"
                    className={`size-btn ${selectedSize === size ? 'active' : ''}`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Detailed Specs Grid */}
            <div className="specs-table">
              {Object.entries(bike.specs).map(([key, val]) => (
                <div key={key} className="table-item">
                  <span className="table-label">{key}</span>
                  <span className="table-val">{val}</span>
                </div>
              ))}
            </div>

            {/* Checkout Action */}
            <div className="modal-checkout-row">
              <div className="modal-price-display">
                <span className="price-label">Investimento Total</span>
                <span className="modal-price-num">{formatPrice(bike.price)}</span>
              </div>

              <button
                type="button"
                className="btn-primary"
                onClick={handleAddToCart}
              >
                <span>Adicionar ao Carrinho</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
