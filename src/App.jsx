import React, { useState, useMemo } from 'react';
import './styles/tokens.css';
import './styles/reset.css';
import './App.css';

import { BIKES_DATA } from './data/bikes';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FilterBar from './components/FilterBar';
import Showroom from './components/Showroom';
import EngineeringLab from './components/EngineeringLab';
import EngineeringSpecsPage from './components/EngineeringSpecsPage';
import CustomStudio from './components/CustomStudio';
import ComponentsPage from './components/ComponentsPage';
import QuickViewModal from './components/QuickViewModal';
import CartDrawer from './components/CartDrawer';
import Footer from './components/Footer';

export default function App() {
  // Navigation View State ('home', 'specs', or 'studio')
  const [currentView, setCurrentView] = useState('home');
  const [selectedSpecsBikeId, setSelectedSpecsBikeId] = useState(BIKES_DATA[0].id);

  // Filters State
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('featured');

  // Quick View Modal State
  const [activeModalBike, setActiveModalBike] = useState(null);
  const [activeModalColor, setActiveModalColor] = useState(null);

  // Cart Drawer State
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  // Test-Ride Modal State
  const [isTestRideOpen, setIsTestRideOpen] = useState(false);
  const [testRideForm, setTestRideForm] = useState({ name: '', phone: '', model: '' });

  // Toast State
  const [toastMessage, setToastMessage] = useState(null);

  const showToast = (title, sub = '') => {
    setToastMessage({ title, sub });
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  // Filtered and Sorted Bikes for Showroom
  const filteredBikes = useMemo(() => {
    let result = [...BIKES_DATA];

    // Filter by Category
    if (selectedCategory !== 'all') {
      result = result.filter((b) => b.category === selectedCategory);
    }

    // Filter by Search
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (b) =>
          b.name.toLowerCase().includes(q) ||
          b.tagline.toLowerCase().includes(q) ||
          b.description.toLowerCase().includes(q) ||
          Object.values(b.specs).some((spec) => typeof spec === 'string' && spec.toLowerCase().includes(q))
      );
    }

    // Sort
    if (sortBy === 'price-asc') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-desc') {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'weight') {
      result.sort((a, b) => parseFloat(a.specs.weight) - parseFloat(b.specs.weight));
    } else {
      // 'featured'
      result.sort((a, b) => (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0));
    }

    return result;
  }, [selectedCategory, searchQuery, sortBy]);

  // Open Specs Page with specific bike
  const handleOpenSpecs = (bikeId) => {
    setSelectedSpecsBikeId(bikeId || BIKES_DATA[0].id);
    setCurrentView('specs');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Navigation Handler from Navbar
  const handleNavigate = (tab, hash) => {
    if (tab === 'studio') {
      setCurrentView('studio');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (tab === 'components') {
      setCurrentView('components');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (tab === 'specs') {
      setCurrentView('specs');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setCurrentView('home');
      setTimeout(() => {
        if (hash) {
          const el = document.querySelector(hash);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 50);
    }
  };

  // Cart Handlers
  const handleAddToCart = (bike, selectedColor, selectedSize) => {
    setCartItems((prev) => {
      const existingIndex = prev.findIndex(
        (item) =>
          item.id === bike.id &&
          item.selectedColor.id === selectedColor.id &&
          item.selectedSize === selectedSize
      );

      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += 1;
        return updated;
      } else {
        return [
          ...prev,
          {
            ...bike,
            selectedColor,
            selectedSize,
            quantity: 1
          }
        ];
      }
    });

    showToast(
      `${bike.name} adicionada ao Paddock!`,
      `Cor: ${selectedColor.name.split(' ')[0]} | ${selectedSize.split(' ')[0]}`
    );
  };

  const handleUpdateQty = (bikeId, colorId, size, newQty) => {
    if (newQty <= 0) {
      handleRemoveItem(bikeId, colorId, size);
      return;
    }

    setCartItems((prev) =>
      prev.map((item) => {
        if (
          item.id === bikeId &&
          item.selectedColor.id === colorId &&
          item.selectedSize === size
        ) {
          return { ...item, quantity: newQty };
        }
        return item;
      })
    );
  };

  const handleRemoveItem = (bikeId, colorId, size) => {
    setCartItems((prev) =>
      prev.filter(
        (item) =>
          !(item.id === bikeId && item.selectedColor.id === colorId && item.selectedSize === size)
      )
    );
    showToast('Item removido do seu Paddock.');
  };

  const handleCheckout = () => {
    showToast('Pedido VIP em processamento!', 'Nossa equipe técnica entrará em contato para agendar a entrega.');
    setCartItems([]);
    setIsCartOpen(false);
  };

  const handleScheduleTestRide = (e) => {
    e.preventDefault();
    setIsTestRideOpen(false);
    showToast('Sessão VIP Solicitada!', 'Você receberá os dados de confirmação via WhatsApp/SMS.');
  };

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="app-wrapper">
      {/* Navigation Header */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        activeTab={currentView}
        onNavigate={handleNavigate}
      />

      <main>
        {currentView === 'studio' ? (
          /* Montador Custom Studio */
          <CustomStudio
            onAddToCart={handleAddToCart}
            onNavigateHome={() => handleNavigate('home', '#showroom')}
          />
        ) : currentView === 'components' ? (
          /* Componentes & Acessórios de Alta Precisão */
          <ComponentsPage
            onAddToCart={handleAddToCart}
            onNavigateHome={() => handleNavigate('home', '#home')}
          />
        ) : currentView === 'specs' ? (
          /* Dedicated Engineering & Technical Specs Page */
          <EngineeringSpecsPage
            initialBikeId={selectedSpecsBikeId}
            onNavigateHome={() => handleNavigate('home', '#home')}
            onNavigateShowroom={() => handleNavigate('home', '#showroom')}
            onAddToCart={handleAddToCart}
            onOpenTestRide={(bike) => {
              setTestRideForm((prev) => ({ ...prev, model: bike.name }));
              setIsTestRideOpen(true);
            }}
          />
        ) : (
          /* Home & Showroom Landing Page */
          <>
            {/* Hero Section */}
            <Hero
              onExploreClick={() => handleNavigate('home', '#showroom')}
              onTestRideClick={() => handleNavigate('home', '#engineering')}
              onCustomStudioClick={() => handleNavigate('studio', '#studio')}
            />

            {/* Power Bar (Filters) */}
            <FilterBar
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              sortBy={sortBy}
              onSortChange={setSortBy}
              resultsCount={filteredBikes.length}
            />

            {/* Showroom Grid */}
            <Showroom
              bikes={filteredBikes}
              onQuickView={(bike, color) => {
                setActiveModalBike(bike);
                setActiveModalColor(color);
              }}
              onAddToCart={handleAddToCart}
              onOpenSpecs={handleOpenSpecs}
              onResetFilters={() => {
                setSelectedCategory('all');
                setSearchQuery('');
                setSortBy('featured');
              }}
            />

            {/* Engineering Lab Highlights */}
            <EngineeringLab
              onScheduleTestRide={() => setIsTestRideOpen(true)}
            />
          </>
        )}
      </main>

      {/* Footer */}
      <Footer />

      {/* Quick View Modal */}
      {activeModalBike && (
        <QuickViewModal
          bike={activeModalBike}
          initialColor={activeModalColor}
          onClose={() => setActiveModalBike(null)}
          onAddToCart={handleAddToCart}
          onOpenSpecsPage={handleOpenSpecs}
        />
      )}

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQty={handleUpdateQty}
        onRemoveItem={handleRemoveItem}
        onCheckout={handleCheckout}
      />

      {/* Test-Ride VIP Modal */}
      {isTestRideOpen && (
        <div className="modal-overlay" onClick={() => setIsTestRideOpen(false)}>
          <div className="testride-dialog" onClick={(e) => e.stopPropagation()}>
            <h3>Agendar Sessão VIP no Lab</h3>
            <p>
              Preencha seus dados para agendar um teste dinâmico e Bike Fit com nossos 
              engenheiros no circuito fechado VELOCITY.LAB.
            </p>
            <form onSubmit={handleScheduleTestRide} className="testride-form">
              <div>
                <label>Nome Completo</label>
                <input
                  type="text"
                  className="testride-input"
                  placeholder="Ex: Carlos Silva"
                  required
                  value={testRideForm.name}
                  onChange={(e) => setTestRideForm({ ...testRideForm, name: e.target.value })}
                />
              </div>
              <div>
                <label>WhatsApp / Telefone</label>
                <input
                  type="tel"
                  className="testride-input"
                  placeholder="(11) 99999-9999"
                  required
                  value={testRideForm.phone}
                  onChange={(e) => setTestRideForm({ ...testRideForm, phone: e.target.value })}
                />
              </div>
              <div>
                <label>Modelo Desejado para Teste</label>
                <select
                  className="testride-input"
                  value={testRideForm.model}
                  onChange={(e) => setTestRideForm({ ...testRideForm, model: e.target.value })}
                >
                  <option value="">Selecione o Modelo</option>
                  {BIKES_DATA.map((b) => (
                    <option key={b.id} value={b.name}>{b.name} ({b.categoryLabel})</option>
                  ))}
                </select>
              </div>
              <div className="testride-actions">
                <button
                  type="button"
                  className="btn-secondary"
                  style={{ flex: 1 }}
                  onClick={() => setIsTestRideOpen(false)}
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="btn-primary"
                  style={{ flex: 1 }}
                >
                  Confirmar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Toast Notification */}
      {toastMessage && (
        <div className="app-toast">
          <div className="toast-icon">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </div>
          <div>
            <div className="toast-message">{toastMessage.title}</div>
            {toastMessage.sub && <div className="toast-sub">{toastMessage.sub}</div>}
          </div>
        </div>
      )}
    </div>
  );
}
