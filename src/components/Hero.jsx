import React from 'react';
import '../styles/hero.css';

export default function Hero({ onExploreClick, onTestRideClick, onCustomStudioClick }) {
  return (
    <section id="home" className="hero-section">
      <div className="hero-grid-bg"></div>

      <div className="container hero-content-wrapper">
        {/* Left Column: Headlines & Telemetry */}
        <div className="hero-text-content">
          <div className="hero-pill-badge">
            <span className="indicator"></span>
            <span>VELOCITY.LAB • TEMPORADA 2026</span>
          </div>

          <div className="speed-line"></div>

          <h1 className="hero-title">
            ENGENHARIA PURA.<br />
            <span className="hero-title-accent">VELOCIDADE ABSOLUTA.</span>
          </h1>

          <p className="hero-description">
            A convergência definitiva entre aerodinâmica desenvolvida em túnel de vento, 
            fibra de carbono Torayca T1100G e transmissão eletrônica sem fio. Projetada para atletas 
            que encaram cada pedalada como busca pela perfeição mecânica.
          </p>

          <div className="hero-cta-group">
            <a href="#showroom" className="btn-primary" onClick={onExploreClick}>
              <span>Explorar Showroom</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>

            <button
              type="button"
              className="btn-secondary"
              onClick={onCustomStudioClick}
              style={{ borderColor: 'var(--color-primary)', color: '#FFF' }}
            >
              <span>Custom Studio ✨</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 20h9"></path>
                <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
              </svg>
            </button>

            <a href="#engineering" className="btn-secondary" onClick={onTestRideClick}>
              <span>P&D do Lab</span>
            </a>
          </div>

          {/* Telemetry Metrics */}
          <div className="hero-metrics-grid">
            <div className="metric-card">
              <span className="metric-value highlight">6.6 kg</span>
              <span className="metric-label">Peso Recorde</span>
            </div>
            <div className="metric-card">
              <span className="metric-value">-18.4W</span>
              <span className="metric-label">Arrasto Aero @ 45km/h</span>
            </div>
            <div className="metric-card">
              <span className="metric-value">T1100G</span>
              <span className="metric-label">Carbono Aeroespacial</span>
            </div>
            <div className="metric-card">
              <span className="metric-value">100%</span>
              <span className="metric-label">Cabos Integrados</span>
            </div>
          </div>
        </div>

        {/* Right Column: Visual Stage */}
        <div className="hero-visual-stage">
          <div className="hero-visual-frame">
            <img 
              src="https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&w=1200&q=85" 
              alt="Bicicleta Aero de Competição VELOCITY.LAB" 
              loading="eager"
            />
          </div>

          <div className="hero-floating-card">
            <div className="floating-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
              </svg>
            </div>
            <div className="floating-info">
              <h4>AeroStrata RS-1</h4>
              <p>● Edição Limitada Disponível</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
