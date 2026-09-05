import React, { useState } from 'react';

export default function ComponentCard({ component, onAddToCart }) {
  const [selectedVariant, setSelectedVariant] = useState(component.sizes[0] || 'Padrão');

  const formatPrice = (val) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      maximumFractionDigits: 0
    }).format(val);
  };

  const handleAdd = () => {
    const cartProduct = {
      id: component.id,
      name: component.name,
      tagline: component.description,
      categoryLabel: component.categoryLabel,
      price: component.price,
      selectedColor: {
        id: "default-comp",
        name: selectedVariant,
        image: component.image
      },
      selectedSize: selectedVariant,
      specs: {
        weight: component.weight
      }
    };

    onAddToCart(
      cartProduct,
      { id: "comp", name: selectedVariant, image: component.image },
      selectedVariant
    );
  };

  return (
    <div className="comp-card">
      {/* Header Badge */}
      <div className="comp-card-header">
        <span className="badge-tag highlight" style={{ fontSize: '9px' }}>
          {component.badge}
        </span>
        <div className="badge-rating">
          <span>★</span>
          <span>{component.rating}</span>
        </div>
      </div>

      {/* Media Image Frame */}
      <div className="comp-media-frame">
        <img
          src={component.image}
          alt={component.name}
          loading="lazy"
        />
      </div>

      {/* Body Details */}
      <div className="comp-card-body">
        <span className="comp-category-name">{component.categoryLabel}</span>
        <h3 className="comp-name" title={component.name}>
          {component.name}
        </h3>
        <p className="comp-desc-text">
          {component.description}
        </p>

        {/* Specs Bar: Material and Weight */}
        <div className="comp-specs-bar">
          <span className="comp-spec-tag">Massa:</span>
          <span className="comp-weight-badge">{component.weight}</span>
        </div>

        {/* Variant Dropdown */}
        {component.sizes && component.sizes.length > 1 && (
          <div className="comp-variant-select">
            <select
              className="comp-dropdown"
              value={selectedVariant}
              onChange={(e) => setSelectedVariant(e.target.value)}
            >
              {component.sizes.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>
        )}

        {/* Footer: Price and Add Button */}
        <div className="comp-card-footer">
          <span className="comp-price">{formatPrice(component.price)}</span>
          <button
            type="button"
            className="btn-add-comp-cart"
            onClick={handleAdd}
            title="Adicionar ao Paddock"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
            <span>Pedir</span>
          </button>
        </div>
      </div>
    </div>
  );
}
