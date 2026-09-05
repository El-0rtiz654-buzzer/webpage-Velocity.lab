import React, { useState } from 'react';

export default function BikeCard({ bike, onQuickView, onAddToCart, onOpenSpecs }) {
  const [selectedColorIndex, setSelectedColorIndex] = useState(0);

  const currentColor = bike.colors[selectedColorIndex] || bike.colors[0];

  const formatPrice = (value) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      maximumFractionDigits: 0
    }).format(value);
  };

  return (
    <div className="bike-card">
      {/* Card Header with Badges */}
      <div className="bike-card-header">
        <span className={`badge-tag ${bike.isFeatured ? 'highlight' : ''}`}>
          {bike.badge}
        </span>
        <div className="badge-rating" title={`${bike.reviewsCount} avaliações de atletas`}>
          <span>★</span>
          <span>{bike.rating}</span>
        </div>
      </div>

      {/* Visual Frame & Color Picker */}
      <div className="bike-media-frame" onClick={() => onOpenSpecs ? onOpenSpecs(bike.id) : onQuickView(bike, currentColor)} style={{ cursor: 'pointer' }}>
        <img
          src={currentColor.image}
          alt={`${bike.name} na cor ${currentColor.name}`}
          loading="lazy"
        />

        {/* Color Dots */}
        {bike.colors.length > 1 && (
          <div className="bike-color-selector" title={`Cor: ${currentColor.name}`} onClick={(e) => e.stopPropagation()}>
            {bike.colors.map((color, idx) => (
              <button
                key={color.id}
                type="button"
                className={`color-dot ${selectedColorIndex === idx ? 'active' : ''}`}
                style={{ backgroundColor: color.hex }}
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedColorIndex(idx);
                }}
                aria-label={`Selecionar cor ${color.name}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Card Body */}
      <div className="bike-body">
        <span className="bike-category">{bike.categoryLabel}</span>
        <h3
          className="bike-name"
          onClick={() => onOpenSpecs ? onOpenSpecs(bike.id) : onQuickView(bike, currentColor)}
          style={{ cursor: 'pointer' }}
          title="Ver página de engenharia completa"
        >
          {bike.name}
        </h3>
        <p className="bike-tagline">{bike.tagline}</p>

        {/* Specs Strip */}
        <div className="bike-specs-strip">
          <div className="spec-item">
            <span className="spec-key">Peso</span>
            <span className="spec-val">{bike.specs.weight}</span>
          </div>
          <div className="spec-item">
            <span className="spec-key">Quadro</span>
            <span className="spec-val" title={bike.specs.frame}>
              {bike.specs.frame.includes('Carbono') ? 'Full Carbon' : 'Alloy Pro'}
            </span>
          </div>
          <div className="spec-item">
            <span className="spec-key">Grupo</span>
            <span className="spec-val" title={bike.specs.groupset}>
              {bike.specs.groupset ? bike.specs.groupset.split(' ')[0] : 'Shimano'}
            </span>
          </div>
        </div>

        {/* Card Footer */}
        <div className="bike-footer">
          <div className="bike-price-wrap">
            <span className="price-label">A partir de</span>
            <span className="price-val">{formatPrice(bike.price)}</span>
          </div>

          <div className="card-actions-group">
            <button
              type="button"
              className="btn-card-details"
              onClick={() => onOpenSpecs ? onOpenSpecs(bike.id) : onQuickView(bike, currentColor)}
              title="Abrir página de especificações técnicas"
            >
              Specs
            </button>
            <button
              type="button"
              className="btn-card-cart"
              onClick={() => onAddToCart(bike, currentColor, bike.sizes[1] || bike.sizes[0])}
              title="Adicionar ao Carrinho"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
              <span>Pedir</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
