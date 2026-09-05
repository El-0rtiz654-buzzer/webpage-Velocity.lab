import React from 'react';
import '../styles/engineering.css';
import { LAB_HIGHLIGHTS } from '../data/bikes';

export default function EngineeringLab({ onScheduleTestRide }) {
  const renderIcon = (type) => {
    switch (type) {
      case 'wind':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"></path>
          </svg>
        );
      case 'layers':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
            <polyline points="2 17 12 22 22 17"></polyline>
            <polyline points="2 12 12 17 22 12"></polyline>
          </svg>
        );
      case 'cable':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
          </svg>
        );
      case 'shield':
      default:
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
          </svg>
        );
    }
  };

  return (
    <section id="engineering" className="engineering-section">
      <div className="container">
        <span className="eng-badge">P&D • TECNOLOGIA PROPRIETÁRIA</span>
        <h2 className="eng-title">Arquitetura de Alta Performance</h2>
        <p className="eng-desc">
          Nosso laboratório não utiliza moldes genéricos de catálogo. Desenvolvemos compósitos 
          de carbono patenteados e laminados com resinas aeroespaciais curadas em autoclave a alta pressão.
        </p>

        {/* 4 Cards */}
        <div className="eng-cards-grid">
          {LAB_HIGHLIGHTS.map((item, index) => (
            <div key={index} className="eng-card">
              <div className="eng-icon-box">
                {renderIcon(item.icon)}
              </div>
              <h3 className="eng-card-title">{item.title}</h3>
              <p className="eng-card-desc">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Action Banner */}
        <div className="eng-banner">
          <div className="banner-content">
            <h3>Quer sentir a resposta no asfalto?</h3>
            <p>
              Agende uma sessão VIP de Bike Fit dinâmico a laser 3D e teste qualquer 
              modelo do showroom no nosso velódromo parceiro ou circuito fechado.
            </p>
          </div>
          <button
            type="button"
            className="btn-primary"
            onClick={onScheduleTestRide}
          >
            <span>Agendar Sessão VIP</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="16" y1="2" x2="16" y2="6"></line>
              <line x1="8" y1="2" x2="8" y2="6"></line>
              <line x1="3" y1="10" x2="21" y2="10"></line>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
