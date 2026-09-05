import React from 'react';
import '../styles/showroom.css';
import BikeCard from './BikeCard';

export default function Showroom({ bikes, onQuickView, onAddToCart, onResetFilters, onOpenSpecs }) {
  return (
    <section id="showroom" className="showroom-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div>
            <span className="section-tag">CATÁLOGO & SHOWROOM 2026</span>
            <h2 className="section-title">Modelos em Destaque</h2>
          </div>
          <p className="section-sub">
            Selecione o modelo ideal para o seu perfil e personalize os acabamentos de pintura 
            e especificações de transmissão antes do checkout.
          </p>
        </div>

        {/* Grid or Empty */}
        {bikes.length > 0 ? (
          <div className="showroom-grid">
            {bikes.map((bike) => (
              <BikeCard
                key={bike.id}
                bike={bike}
                onQuickView={onQuickView}
                onAddToCart={onAddToCart}
                onOpenSpecs={onOpenSpecs}
              />
            ))}
          </div>
        ) : (
          <div className="showroom-empty">
            <h3>Nenhum modelo encontrado</h3>
            <p>Tente ajustar os termos de busca ou selecione outra categoria na Power Bar.</p>
            <button
              type="button"
              className="btn-primary"
              onClick={onResetFilters}
            >
              Limpar Filtros
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
