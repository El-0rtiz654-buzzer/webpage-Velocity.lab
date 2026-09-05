import React, { useState } from 'react';
import '../styles/navbar.css';

export default function Navbar({ cartCount, onOpenCart, activeTab, onNavigate }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNav = (tab, hash) => {
    setIsMobileMenuOpen(false);
    onNavigate(tab, hash);
  };

  return (
    <header className="navbar">
      <div className="navbar-inner">
        {/* Brand Logo */}
        <a href="#home" className="brand-logo" onClick={(e) => { e.preventDefault(); handleNav('home', '#home'); }}>
          <span>VELOCITY<span className="brand-sub">.LAB</span></span>
          <span className="brand-dot"></span>
          <span className="brand-badge">PADDOCK</span>
        </a>

        {/* Navigation Menu */}
        <nav className={`nav-menu ${isMobileMenuOpen ? 'open' : ''}`}>
          <button
            type="button"
            className={`nav-link ${activeTab === 'home' ? 'active' : ''}`}
            onClick={() => handleNav('home', '#home')}
          >
            Início
          </button>
          <button
            type="button"
            className={`nav-link ${activeTab === 'showroom' ? 'active' : ''}`}
            onClick={() => handleNav('home', '#showroom')}
          >
            Showroom
          </button>
          <button
            type="button"
            className={`nav-link ${activeTab === 'components' ? 'active' : ''}`}
            onClick={() => handleNav('components', '#components')}
          >
            Componentes
          </button>
          <button
            type="button"
            className={`nav-link ${activeTab === 'studio' ? 'active' : ''}`}
            onClick={() => handleNav('studio', '#studio')}
          >
            Custom Studio
          </button>
          <button
            type="button"
            className={`nav-link ${activeTab === 'specs' ? 'active' : ''}`}
            onClick={() => handleNav('specs', '#specs')}
          >
            Engenharia
          </button>
          <button
            type="button"
            className={`nav-link ${activeTab === 'engineering' ? 'active' : ''}`}
            onClick={() => handleNav('home', '#engineering')}
          >
            P&D Lab
          </button>
          <button
            type="button"
            className={`nav-link ${activeTab === 'contact' ? 'active' : ''}`}
            onClick={() => handleNav('home', '#contact')}
          >
            Sobre
          </button>
        </nav>

        {/* Right Actions */}
        <div className="nav-actions">
          {/* Cart Button */}
          <button 
            type="button" 
            className="btn-icon" 
            onClick={onOpenCart}
            aria-label="Abrir Carrinho"
          >
            <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <path d="M16 10a4 4 0 0 1-8 0"></path>
            </svg>
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </button>

          {/* Action CTA: Test-Ride */}
          <button
            type="button"
            className="btn-testride"
            onClick={() => handleNav('specs', '#specs')}
          >
            <span>Test-Ride</span>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>

          {/* Mobile Toggle Button */}
          <button 
            type="button" 
            className="mobile-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Abrir menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
}
