import React, { useState } from 'react';
import '../styles/engineering-specs.css';
import { BIKES_DATA } from '../data/bikes';

export default function EngineeringSpecsPage({
  initialBikeId,
  onNavigateHome,
  onNavigateShowroom,
  onAddToCart,
  onOpenTestRide
}) {
  const [selectedBikeId, setSelectedBikeId] = useState(initialBikeId || BIKES_DATA[0].id);
  const [selectedColorIndex, setSelectedColorIndex] = useState(0);
  const [selectedSizeIndex, setSelectedSizeIndex] = useState(1);

  const currentBike = BIKES_DATA.find((b) => b.id === selectedBikeId) || BIKES_DATA[0];
  const currentColor = currentBike.colors[selectedColorIndex] || currentBike.colors[0];
  const currentSize = currentBike.sizes[selectedSizeIndex] || currentBike.sizes[0];

  const formatPrice = (value) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      maximumFractionDigits: 0
    }).format(value);
  };

  const handleSelectBike = (bikeId) => {
    setSelectedBikeId(bikeId);
    setSelectedColorIndex(0);
    setSelectedSizeIndex(1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="specs-page">
      <div className="container">
        {/* Breadcrumbs */}
        <nav className="specs-breadcrumbs">
          <span className="crumb-link" onClick={onNavigateHome}>Início</span>
          <span>/</span>
          <span className="crumb-link" onClick={onNavigateShowroom}>Showroom</span>
          <span>/</span>
          <span className="crumb-link" onClick={() => {}}>{currentBike.categoryLabel}</span>
          <span>/</span>
          <span className="crumb-active">{currentBike.name}</span>
        </nav>

        {/* Header with Title, Tagline and Price */}
        <div className="specs-header-row">
          <div>
            <h1 className="specs-model-title">{currentBike.name}</h1>
            <p className="specs-model-subtitle">
              {currentBike.tagline} — {currentBike.specs.frame} com transmissão {currentBike.specs.groupset || 'Eletrônica Integrada'}.
            </p>
          </div>
          <div className="specs-header-right">
            <span className="specs-header-price">{formatPrice(currentBike.price)}</span>
            <span className="specs-header-tax">Montagem Técnica Especializada Inclusa</span>
          </div>
        </div>

        {/* Model Tabs Bar */}
        <div className="model-tabs-bar">
          {BIKES_DATA.map((bike) => (
            <button
              key={bike.id}
              type="button"
              className={`model-tab-btn ${bike.id === currentBike.id ? 'active' : ''}`}
              onClick={() => handleSelectBike(bike.id)}
            >
              {bike.name}
            </button>
          ))}
        </div>

        {/* Two Column Layout */}
        <div className="specs-layout-grid">
          {/* Main Column */}
          <div className="specs-main-col">
            {/* Bento Media Grid */}
            <div className="bento-media-grid">
              <div className="bento-main-item">
                <img
                  src={currentColor.image}
                  alt={`${currentBike.name} - ${currentColor.name}`}
                />
                <div className="bento-caption">
                  Vista Lateral Completa • Cor: {currentColor.name}
                </div>
              </div>

              <div className="bento-side-item">
                <img
                  src={currentBike.colors[1]?.image || currentBike.colors[0].image}
                  alt="Cockpit e Tubo Superior"
                />
                <div className="bento-caption">
                  Cockpit Monocoque Integrado
                </div>
              </div>

              <div className="bento-side-item">
                <img
                  src={currentBike.colors[2]?.image || currentBike.colors[0].image}
                  alt="Transmissão e Rodas de Carbono"
                />
                <div className="bento-caption">
                  Transmissão e Rodas Aero
                </div>
              </div>
            </div>

            {/* 4 Performance KPI Metrics */}
            <div className="specs-kpi-grid">
              <div className="kpi-card">
                <span className="kpi-label">Peso Verificado</span>
                <span className="kpi-val" style={{ color: 'var(--color-primary)' }}>
                  {currentBike.specs.weight}
                </span>
              </div>
              <div className="kpi-card">
                <span className="kpi-label">Compósito Base</span>
                <span className="kpi-val">
                  {currentBike.specs.frame.includes('T1100') ? 'T1100G' : 'Toray T900'}
                </span>
              </div>
              <div className="kpi-card">
                <span className="kpi-label">Transmissão</span>
                <span className="kpi-val">
                  {currentBike.specs.groupset ? currentBike.specs.groupset.split(' ')[0] : '12v Sem Fio'}
                </span>
              </div>
              <div className="kpi-card">
                <span className="kpi-label">Classificação</span>
                <span className="kpi-val" style={{ color: 'var(--color-gold)' }}>
                  ★ {currentBike.rating} ({currentBike.reviewsCount})
                </span>
              </div>
            </div>

            {/* Build Highlights Table */}
            <div className="specs-table-card">
              <h2 className="specs-card-title">
                <span className="title-bar"></span>
                <span>Ficha de Engenharia & Especificações Técnicas</span>
              </h2>

              <div className="specs-list-grid">
                <div className="spec-row">
                  <span className="spec-row-label">Quadro & Garfo</span>
                  <span className="spec-row-val">{currentBike.specs.frame}</span>
                </div>
                <div className="spec-row">
                  <span className="spec-row-label">Grupo & Câmbios</span>
                  <span className="spec-row-val">{currentBike.specs.groupset || 'Transmissão Otimizada Selada'}</span>
                </div>
                <div className="spec-row">
                  <span className="spec-row-label">Conjunto de Rodas</span>
                  <span className="spec-row-val">{currentBike.specs.wheels || 'Velocity Aero Carbon Disc'}</span>
                </div>
                <div className="spec-row">
                  <span className="spec-row-label">Sistema de Freios</span>
                  <span className="spec-row-val">{currentBike.specs.brakes || 'Disco Hidráulico 160mm'}</span>
                </div>
                <div className="spec-row">
                  <span className="spec-row-label">Roteamento de Cabos</span>
                  <span className="spec-row-val">100% Interno (Zero arrasto frontal)</span>
                </div>
                <div className="spec-row">
                  <span className="spec-row-label">Clearance Máximo de Pneus</span>
                  <span className="spec-row-val">{currentBike.specs.tireClearance || 'Até 32mm'}</span>
                </div>
                {currentBike.specs.motor && (
                  <div className="spec-row">
                    <span className="spec-row-label">Unidade Motora</span>
                    <span className="spec-row-val">{currentBike.specs.motor}</span>
                  </div>
                )}
                {currentBike.specs.battery && (
                  <div className="spec-row">
                    <span className="spec-row-label">Capacidade da Bateria</span>
                    <span className="spec-row-val">{currentBike.specs.battery}</span>
                  </div>
                )}
                <div className="spec-row">
                  <span className="spec-row-label">Garantia Estrutural</span>
                  <span className="spec-row-val" style={{ color: 'var(--color-electric-green)' }}>
                    Vitalícia com Registro no Paddock VIP
                  </span>
                </div>
                <div className="spec-row">
                  <span className="spec-row-label">Certificação Internacional</span>
                  <span className="spec-row-val">UCI Approved Competição</span>
                </div>
              </div>
            </div>

            {/* Performance Narrative */}
            <div className="narrative-card">
              <h2 className="specs-card-title">
                <span className="title-bar"></span>
                <span>Narrativa de Performance & Dinâmica</span>
              </h2>
              <p className="narrative-text">
                {currentBike.description} Cada tubo e ponto de junção foi desenhado após centenas de horas 
                de simulação computacional de dinâmica de fluidos (CFD) e testes no velódromo com sensores de telemetria 
                em tempo real. O resultado é um comportamento neutro sob fortes ventos cruzados, aceleração explosiva 
                em aclives e rigidez absoluta quando você se levanta dos pedais para o sprint final.
              </p>
            </div>
          </div>

          {/* Sticky Aside */}
          <aside className="specs-sticky-aside">
            {/* Investment Summary */}
            <div className="aside-card">
              <h3 className="aside-card-title">Resumo de Configuração</h3>

              {/* Color Selector */}
              <div style={{ marginBottom: '18px' }}>
                <span className="spec-row-label" style={{ display: 'block', marginBottom: '8px' }}>
                  Acabamento: <strong>{currentColor.name}</strong>
                </span>
                <div style={{ display: 'flex', gap: '8px' }}>
                  {currentBike.colors.map((c, i) => (
                    <button
                      key={c.id}
                      type="button"
                      className={`color-dot ${selectedColorIndex === i ? 'active' : ''}`}
                      style={{ backgroundColor: c.hex, width: '22px', height: '22px' }}
                      onClick={() => setSelectedColorIndex(i)}
                      title={c.name}
                    />
                  ))}
                </div>
              </div>

              {/* Size Selector */}
              <div style={{ marginBottom: '20px' }}>
                <span className="spec-row-label" style={{ display: 'block', marginBottom: '8px' }}>
                  Tamanho Selecionado: <strong>{currentSize}</strong>
                </span>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {currentBike.sizes.map((s, i) => (
                    <button
                      key={s}
                      type="button"
                      className={`size-btn ${selectedSizeIndex === i ? 'active' : ''}`}
                      onClick={() => setSelectedSizeIndex(i)}
                      style={{ fontSize: '11px', padding: '6px 10px' }}
                    >
                      {s.split(' ')[0]}
                    </button>
                  ))}
                </div>
              </div>

              <div className="breakdown-row">
                <span>Chassi & Garfo Torayca</span>
                <span>Incluso</span>
              </div>
              <div className="breakdown-row">
                <span>Transmissão {currentBike.specs.groupset ? currentBike.specs.groupset.split(' ')[0] : 'Eletrônica'}</span>
                <span>Incluso</span>
              </div>
              <div className="breakdown-row">
                <span>Bike Fit Virtual 3D</span>
                <span style={{ color: 'var(--color-electric-green)' }}>Grátis VIP</span>
              </div>
              <div className="breakdown-row">
                <span>Mala Rígida de Transporte</span>
                <span style={{ color: 'var(--color-electric-green)' }}>Inclusa</span>
              </div>

              <div className="breakdown-row total-row">
                <span className="total-label">Investimento</span>
                <span className="total-num">{formatPrice(currentBike.price)}</span>
              </div>

              <div className="aside-actions">
                <button
                  type="button"
                  className="btn-specs-cart"
                  onClick={() => onAddToCart(currentBike, currentColor, currentSize)}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                  </svg>
                  <span>Adicionar ao Paddock</span>
                </button>

                <button
                  type="button"
                  className="btn-specs-testride"
                  onClick={() => onOpenTestRide(currentBike)}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                  </svg>
                  <span>Agendar Test-Ride VIP</span>
                </button>
              </div>
            </div>

            {/* Performance Consultant */}
            <div className="consult-card">
              <h4>Consultor de P&D Dedicado</h4>
              <p>
                Precisa de auxílio na escolha do comprimento do avanço, largura do guidão ou relação de coroas?
              </p>
              <div className="consult-expert-badge">
                <div className="expert-avatar">VL</div>
                <div className="expert-info">
                  <span className="expert-name">Equipe Técnica de Competição</span>
                  <span className="expert-role">● Online para Atendimento VIP</span>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
