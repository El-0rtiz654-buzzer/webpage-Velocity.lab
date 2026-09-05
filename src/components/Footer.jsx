import React, { useState } from 'react';
import '../styles/footer.css';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer id="contact" className="footer-section">
      <div className="container">
        {/* Trust Badges Row */}
        <div className="footer-trust-grid">
          <div className="trust-card">
            <div className="trust-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
            </div>
            <div className="trust-info">
              <h4>Garantia Vitalícia</h4>
              <p>Quadro em carbono com substituição em caso de falha estrutural comprovada.</p>
            </div>
          </div>

          <div className="trust-card">
            <div className="trust-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="1" y="3" width="15" height="13"></rect>
                <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
                <circle cx="5.5" cy="18.5" r="2.5"></circle>
                <circle cx="18.5" cy="18.5" r="2.5"></circle>
              </svg>
            </div>
            <div className="trust-info">
              <h4>Envio Blindado VIP</h4>
              <p>Entrega montada em mala técnica com proteção especial em todo o Brasil.</p>
            </div>
          </div>

          <div className="trust-card">
            <div className="trust-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="8" x2="12" y2="12"></line>
                <line x1="12" y1="16" x2="12.01" y2="16"></line>
              </svg>
            </div>
            <div className="trust-info">
              <h4>Bike Fit Consultivo</h4>
              <p>Suporte de mecânicos Pro Tour para ajuste milimétrico das suas medidas.</p>
            </div>
          </div>
        </div>

        {/* Main Footer Links */}
        <div className="footer-main-grid">
          <div className="footer-brand">
            <h3>VELOCITY<span style={{ color: 'var(--color-primary)' }}>.LAB</span></h3>
            <p>
              Laboratório de engenharia ciclística de alta performance. 
              Projetamos e comercializamos bicicletas que desafiam os limites da física e do tempo.
            </p>
          </div>

          <div className="footer-col">
            <h4>Showroom</h4>
            <div className="footer-links">
              <a href="#showroom">Aero Road RS-1</a>
              <a href="#showroom">Gravel All-Road</a>
              <a href="#showroom">VoltApex Elétrica</a>
              <a href="#showroom">Vortex Enduro 29</a>
              <a href="#showroom">Chronos TT Triathlon</a>
            </div>
          </div>

          <div className="footer-col">
            <h4>Laboratório</h4>
            <div className="footer-links">
              <a href="#engineering">Túnel de Vento CFD</a>
              <a href="#engineering">Fibra Toray T1100G</a>
              <a href="#engineering">Monocoque Integrado</a>
              <a href="#contact">Garantia & Crash Replacement</a>
              <a href="#contact">Paddock Club VIP</a>
            </div>
          </div>

          <div className="footer-col newsletter-box">
            <h4>Paddock Newsletter</h4>
            <p>Cadastre-se para convites exclusivos de lançamentos de modelos e eventos de test-ride.</p>
            {subscribed ? (
              <p style={{ color: 'var(--color-electric-green)', fontWeight: 600 }}>
                ✓ Cadastrado com sucesso no Paddock VIP!
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="newsletter-form">
                <input
                  type="email"
                  className="newsletter-input"
                  placeholder="Seu melhor e-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button type="submit" className="newsletter-btn">
                  Entrar
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Rights */}
        <div className="footer-bottom">
          <span>&copy; {new Date().getFullYear()} VELOCITY.LAB — Todos os direitos reservados.</span>
          <span>Designed with High Performance Precision • Pure CSS</span>
        </div>
      </div>
    </footer>
  );
}
