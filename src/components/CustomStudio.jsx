import React, { useState, useMemo } from 'react';
import '../styles/custom-studio.css';
import {
  STUDIO_FRAMES,
  STUDIO_COLORS,
  STUDIO_GROUPSETS,
  STUDIO_WHEELS,
  STUDIO_COCKPIT_OPTIONS
} from '../data/customStudioData';

export default function CustomStudio({ onAddToCart, onNavigateHome }) {
  // Steps: 1: Chassi, 2: Cor/Pintura, 3: Transmissão, 4: Rodas, 5: Cockpit/Ergonomia, 6: Gravação a Laser
  const [activeStep, setActiveStep] = useState(1);

  // Configuration Choices
  const [selectedFrame, setSelectedFrame] = useState(STUDIO_FRAMES[0]);
  const [selectedColor, setSelectedColor] = useState(STUDIO_COLORS[0]);
  const [selectedGroupset, setSelectedGroupset] = useState(STUDIO_GROUPSETS[0]);
  const [selectedWheel, setSelectedWheel] = useState(STUDIO_WHEELS[0]);
  const [selectedSize, setSelectedSize] = useState(STUDIO_COCKPIT_OPTIONS.sizes[1]);
  const [selectedStem, setSelectedStem] = useState(STUDIO_COCKPIT_OPTIONS.stemLengths[1]);
  const [selectedBarWidth, setSelectedBarWidth] = useState(STUDIO_COCKPIT_OPTIONS.barWidths[1]);
  const [selectedFinish, setSelectedFinish] = useState(STUDIO_COCKPIT_OPTIONS.finishes[0]);
  const [hasPowerMeter, setHasPowerMeter] = useState(true);
  const [hasCeramicBearings, setHasCeramicBearings] = useState(true);
  const [laserName, setLaserName] = useState("PILOTO PRO #07");

  // Dynamic Calculation of Total Price and Weight
  const totalPrice = useMemo(() => {
    let sum = selectedFrame.basePrice;
    sum += selectedColor.price;
    sum += selectedGroupset.price;
    sum += selectedWheel.price;
    if (hasPowerMeter) sum += STUDIO_COCKPIT_OPTIONS.powerMeter.price;
    if (hasCeramicBearings) sum += STUDIO_COCKPIT_OPTIONS.ceramicBearings.price;
    return sum;
  }, [selectedFrame, selectedColor, selectedGroupset, selectedWheel, hasPowerMeter, hasCeramicBearings]);

  const totalWeight = useMemo(() => {
    let w = selectedFrame.baseWeight;
    w += selectedGroupset.weightDiff;
    w += selectedWheel.weightDiff;
    if (hasPowerMeter) w += STUDIO_COCKPIT_OPTIONS.powerMeter.weightDiff;
    if (hasCeramicBearings) w += STUDIO_COCKPIT_OPTIONS.ceramicBearings.weightDiff;
    return Math.max(5.8, w).toFixed(2);
  }, [selectedFrame, selectedGroupset, selectedWheel, hasPowerMeter, hasCeramicBearings]);

  const formatPrice = (val) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      maximumFractionDigits: 0
    }).format(val);
  };

  const handleFinishBuild = () => {
    const customBike = {
      id: `custom-${Date.now()}`,
      name: `Custom Studio • ${selectedFrame.name.split(' ')[0]}`,
      tagline: `Configuração Exclusiva sob Encomenda (${selectedColor.name})`,
      categoryLabel: selectedFrame.category,
      price: totalPrice,
      badge: "CUSTOM BUILD",
      specs: {
        weight: `${totalWeight} kg`,
        frame: selectedFrame.name,
        groupset: selectedGroupset.name,
        wheels: selectedWheel.name,
        laser: laserName
      }
    };

    onAddToCart(customBike, selectedColor, selectedSize);
  };

  const STEPS = [
    { id: 1, label: "1. Chassi" },
    { id: 2, label: "2. Pintura" },
    { id: 3, label: "3. Transmissão" },
    { id: 4, label: "4. Rodas" },
    { id: 5, label: "5. Cockpit" },
    { id: 6, label: "6. Assinatura" }
  ];

  return (
    <section className="studio-section">
      <div className="container">
        {/* Studio Header */}
        <div className="studio-header">
          <div>
            <span className="studio-tag">LABORATÓRIO DE CONFIGURAÇÃO SOB MEDIDA</span>
            <h1 className="studio-title">Montador Custom Studio</h1>
          </div>
          <p className="studio-header-desc">
            Construa a sua bicicleta de alto rendimento peça por peça. Cada componente afeta 
            diretamente a massa total, a aerodinâmica e a resposta mecânica no asfalto.
          </p>
        </div>

        {/* Studio Workspace */}
        <div className="studio-workspace-grid">
          {/* Left Column: Visual Stage & Live Telemetry */}
          <div className="studio-stage-column">
            <div className="studio-visual-card">
              <div className="studio-stage-lights"></div>

              {/* Top Bar of Stage */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span className="badge-tag highlight">BUILD ATIVA: {selectedFrame.name.split(' ')[0]}</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--color-text-muted)' }}>
                  ACABAMENTO: {selectedFinish}
                </span>
              </div>

              {/* Central Bike Visualizer */}
              <div className="studio-bike-frame">
                <img
                  src={selectedColor.image}
                  alt={`${selectedFrame.name} - ${selectedColor.name}`}
                />
              </div>

              {/* Laser Plate */}
              <div className="laser-engraving-plate">
                <div className="laser-indicator"></div>
                <span className="laser-plate-text">
                  GRAVAÇÃO A LASER: <strong>{laserName || "VELOCITY.LAB RACING"}</strong>
                </span>
              </div>
            </div>

            {/* Telemetry Dashboard */}
            <div className="studio-telemetry-row">
              <div className="telemetry-block">
                <span className="telemetry-label">Peso Estimado</span>
                <span className="telemetry-val highlight">{totalWeight} kg</span>
              </div>
              <div className="telemetry-block">
                <span className="telemetry-label">Aerodinâmica</span>
                <span className="telemetry-val">{selectedFrame.dragRating}</span>
              </div>
              <div className="telemetry-block">
                <span className="telemetry-label">Transmissão</span>
                <span className="telemetry-val" style={{ fontSize: '15px' }}>
                  {selectedGroupset.name.split(' ')[0]} {selectedGroupset.name.split(' ')[1]}
                </span>
              </div>
            </div>

            {/* Quick Actions */}
            <div style={{ display: 'flex', gap: '10px' }}>
              <button
                type="button"
                className="btn-secondary"
                style={{ flex: 1, fontSize: '12px', padding: '10px' }}
                onClick={onNavigateHome}
              >
                ← Voltar ao Showroom
              </button>
              <button
                type="button"
                className="btn-secondary"
                style={{ flex: 1, fontSize: '12px', padding: '10px' }}
                onClick={() => {
                  setSelectedFrame(STUDIO_FRAMES[0]);
                  setSelectedColor(STUDIO_COLORS[0]);
                  setSelectedGroupset(STUDIO_GROUPSETS[0]);
                  setSelectedWheel(STUDIO_WHEELS[0]);
                  setHasPowerMeter(true);
                  setHasCeramicBearings(true);
                  setLaserName("PILOTO PRO #07");
                  setActiveStep(1);
                }}
              >
                Resetar Configuração
              </button>
            </div>
          </div>

          {/* Right Column: Step by Step Configurator */}
          <div className="studio-config-column">
            {/* Step Navigation Tabs */}
            <div className="config-steps-nav">
              {STEPS.map((step) => (
                <button
                  key={step.id}
                  type="button"
                  className={`step-nav-btn ${activeStep === step.id ? 'active' : ''}`}
                  onClick={() => setActiveStep(step.id)}
                >
                  {step.label}
                </button>
              ))}
            </div>

            {/* Step 1: Chassi / Frame */}
            {activeStep === 1 && (
              <div className="config-active-panel">
                <div className="panel-header">
                  <h3 className="panel-title">1. Escolha o Chassi Base</h3>
                  <span className="panel-counter">4 Opções de Compósito</span>
                </div>
                <div className="option-cards-list">
                  {STUDIO_FRAMES.map((frame) => (
                    <div
                      key={frame.id}
                      className={`option-select-card ${selectedFrame.id === frame.id ? 'active' : ''}`}
                      onClick={() => setSelectedFrame(frame)}
                    >
                      <div className="option-info">
                        <span className="option-name">{frame.name}</span>
                        <span className="option-sub">{frame.description}</span>
                      </div>
                      <span className="option-price-tag">{formatPrice(frame.basePrice)}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Step 2: Colors and Paintwork */}
            {activeStep === 2 && (
              <div className="config-active-panel">
                <div className="panel-header">
                  <h3 className="panel-title">2. Acabamento & Pintura do Estúdio</h3>
                  <span className="panel-counter">Pintura em Cabine a Laser</span>
                </div>

                <div className="colors-grid-studio">
                  {STUDIO_COLORS.map((color) => (
                    <div
                      key={color.id}
                      className={`color-choice-box ${selectedColor.id === color.id ? 'active' : ''}`}
                      onClick={() => setSelectedColor(color)}
                    >
                      <span
                        className="color-swatch-circle"
                        style={{ backgroundColor: color.hex }}
                      />
                      <div className="option-info">
                        <span className="option-name" style={{ fontSize: '13px' }}>{color.name}</span>
                        <span className="option-sub">
                          {color.price === 0 ? 'Padrão Studio' : `+ ${formatPrice(color.price)}`}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Finish Type Selection */}
                <div style={{ marginTop: '20px' }}>
                  <label className="telemetry-label" style={{ display: 'block', marginBottom: '8px' }}>
                    Brilho da Resina Protetora:
                  </label>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    {STUDIO_COCKPIT_OPTIONS.finishes.map((finish) => (
                      <button
                        key={finish}
                        type="button"
                        className={`size-btn ${selectedFinish === finish ? 'active' : ''}`}
                        onClick={() => setSelectedFinish(finish)}
                        style={{ flex: 1, padding: '10px' }}
                      >
                        {finish}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Groupset / Transmission */}
            {activeStep === 3 && (
              <div className="config-active-panel">
                <div className="panel-header">
                  <h3 className="panel-title">3. Grupo & Transmissão Eletrônica</h3>
                  <span className="panel-counter">Câmbios Sem Fio</span>
                </div>
                <div className="option-cards-list">
                  {STUDIO_GROUPSETS.map((group) => (
                    <div
                      key={group.id}
                      className={`option-select-card ${selectedGroupset.id === group.id ? 'active' : ''}`}
                      onClick={() => setSelectedGroupset(group)}
                    >
                      <div className="option-info">
                        <span className="option-name">{group.name}</span>
                        <span className="option-sub">{group.subtitle}</span>
                      </div>
                      <span className="option-price-tag">+ {formatPrice(group.price)}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Step 4: Wheels and Bearings */}
            {activeStep === 4 && (
              <div className="config-active-panel">
                <div className="panel-header">
                  <h3 className="panel-title">4. Conjunto de Rodas & Rolamentos</h3>
                  <span className="panel-counter">Carbono Otimizado</span>
                </div>
                <div className="option-cards-list">
                  {STUDIO_WHEELS.map((wheel) => (
                    <div
                      key={wheel.id}
                      className={`option-select-card ${selectedWheel.id === wheel.id ? 'active' : ''}`}
                      onClick={() => setSelectedWheel(wheel)}
                    >
                      <div className="option-info">
                        <span className="option-name">{wheel.name}</span>
                        <span className="option-sub">{wheel.subtitle}</span>
                      </div>
                      <span className="option-price-tag">+ {formatPrice(wheel.price)}</span>
                    </div>
                  ))}
                </div>

                {/* Ceramic Bearings Upgrade */}
                <div style={{ marginTop: '20px' }}>
                  <div
                    className={`addon-toggle-row ${hasCeramicBearings ? 'active' : ''}`}
                    onClick={() => setHasCeramicBearings(!hasCeramicBearings)}
                  >
                    <div>
                      <span className="option-name" style={{ display: 'block' }}>
                        {STUDIO_COCKPIT_OPTIONS.ceramicBearings.name}
                      </span>
                      <span className="option-sub">Redução de atrito de 40% nos cubos e movimento central</span>
                    </div>
                    <span className="option-price-tag">
                      {hasCeramicBearings ? `+ ${formatPrice(STUDIO_COCKPIT_OPTIONS.ceramicBearings.price)}` : 'Desativado'}
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* Step 5: Cockpit & Ergonomics */}
            {activeStep === 5 && (
              <div className="config-active-panel">
                <div className="panel-header">
                  <h3 className="panel-title">5. Cockpit & Medidas de Bike Fit</h3>
                  <span className="panel-counter">Ajuste Milimétrico</span>
                </div>

                <div className="cockpit-select-grid">
                  <div className="cockpit-item">
                    <label>Tamanho do Chassi</label>
                    <select
                      className="studio-dropdown"
                      value={selectedSize}
                      onChange={(e) => setSelectedSize(e.target.value)}
                    >
                      {STUDIO_COCKPIT_OPTIONS.sizes.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>

                  <div className="cockpit-item">
                    <label>Comprimento do Avanço</label>
                    <select
                      className="studio-dropdown"
                      value={selectedStem}
                      onChange={(e) => setSelectedStem(e.target.value)}
                    >
                      {STUDIO_COCKPIT_OPTIONS.stemLengths.map((stem) => (
                        <option key={stem} value={stem}>{stem}</option>
                      ))}
                    </select>
                  </div>

                  <div className="cockpit-item">
                    <label>Largura do Guidão Aero</label>
                    <select
                      className="studio-dropdown"
                      value={selectedBarWidth}
                      onChange={(e) => setSelectedBarWidth(e.target.value)}
                    >
                      {STUDIO_COCKPIT_OPTIONS.barWidths.map((bar) => (
                        <option key={bar} value={bar}>{bar}</option>
                      ))}
                    </select>
                  </div>

                  <div className="cockpit-item">
                    <label>Montagem de Cabos</label>
                    <input
                      type="text"
                      className="studio-dropdown"
                      value="100% Oculto Monocoque"
                      disabled
                      style={{ opacity: 0.8 }}
                    />
                  </div>
                </div>

                {/* Power Meter Addon */}
                <div
                  className={`addon-toggle-row ${hasPowerMeter ? 'active' : ''}`}
                  onClick={() => setHasPowerMeter(!hasPowerMeter)}
                >
                  <div>
                    <span className="option-name" style={{ display: 'block' }}>
                      {STUDIO_COCKPIT_OPTIONS.powerMeter.name}
                    </span>
                    <span className="option-sub">Medição precisa de watts esquerda/direita no pedivela</span>
                  </div>
                  <span className="option-price-tag">
                    {hasPowerMeter ? `+ ${formatPrice(STUDIO_COCKPIT_OPTIONS.powerMeter.price)}` : 'Desativado'}
                  </span>
                </div>
              </div>
            )}

            {/* Step 6: Laser Engraving */}
            {activeStep === 6 && (
              <div className="config-active-panel">
                <div className="panel-header">
                  <h3 className="panel-title">6. Assinatura do Piloto a Laser</h3>
                  <span className="panel-counter">Personalização no Top Tube</span>
                </div>
                <p className="option-sub" style={{ marginBottom: '16px' }}>
                  Grave seu nome, número de corrida ou brasão de equipe diretamente na fibra de carbono 
                  do tubo superior com feixe de laser de alta precisão.
                </p>

                <div className="studio-input-wrap">
                  <label>Texto da Gravação a Laser (Máx 25 caracteres):</label>
                  <input
                    type="text"
                    className="studio-text-input"
                    maxLength={25}
                    value={laserName}
                    onChange={(e) => setLaserName(e.target.value.toUpperCase())}
                    placeholder="EX: CARLOS SILVA #07"
                  />
                </div>
              </div>
            )}

            {/* Summary and Paddock Submission */}
            <div className="studio-summary-card">
              <div className="summary-details-list">
                <div className="summary-detail-item">
                  <span>Chassi:</span>
                  <strong>{selectedFrame.name}</strong>
                </div>
                <div className="summary-detail-item">
                  <span>Pintura:</span>
                  <strong>{selectedColor.name} ({selectedFinish})</strong>
                </div>
                <div className="summary-detail-item">
                  <span>Transmissão:</span>
                  <strong>{selectedGroupset.name}</strong>
                </div>
                <div className="summary-detail-item">
                  <span>Rodas:</span>
                  <strong>{selectedWheel.name}</strong>
                </div>
                <div className="summary-detail-item">
                  <span>Ajuste Fit:</span>
                  <strong>{selectedSize.split(' ')[0]} | Avanço {selectedStem.split(' ')[0]}</strong>
                </div>
                {hasPowerMeter && (
                  <div className="summary-detail-item">
                    <span>Power Meter:</span>
                    <strong style={{ color: 'var(--color-electric-green)' }}>Dual-Side Integrado</strong>
                  </div>
                )}
                {hasCeramicBearings && (
                  <div className="summary-detail-item">
                    <span>Rolamentos:</span>
                    <strong style={{ color: 'var(--color-electric-green)' }}>CeramicSpeed Pro</strong>
                  </div>
                )}
              </div>

              <div className="studio-price-row">
                <span className="studio-price-label">Investimento Custom:</span>
                <span className="studio-price-value">{formatPrice(totalPrice)}</span>
              </div>

              <button
                type="button"
                className="btn-add-custom-paddock"
                onClick={handleFinishBuild}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <path d="M16 10a4 4 0 0 1-8 0"></path>
                </svg>
                <span>Salvar Montagem & Adicionar ao Paddock</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
