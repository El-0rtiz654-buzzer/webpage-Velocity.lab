import React, { useEffect } from 'react';
import '../styles/cart.css';

export default function CartDrawer({
  isOpen,
  onClose,
  items,
  onUpdateQty,
  onRemoveItem,
  onCheckout
}) {
  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const formatPrice = (value) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      maximumFractionDigits: 0
    }).format(value);
  };

  const subtotal = items.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const totalItemsCount = items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <>
      <div className="cart-overlay" onClick={onClose} />
      <div className="cart-drawer">
        {/* Header */}
        <div className="cart-header">
          <h3>
            <span>Seu Paddock</span>
            <span className="cart-header-count">{totalItemsCount} {totalItemsCount === 1 ? 'item' : 'itens'}</span>
          </h3>
          <button
            type="button"
            className="cart-close-btn"
            onClick={onClose}
            aria-label="Fechar carrinho"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        {/* Body */}
        <div className="cart-items-body">
          {items.length === 0 ? (
            <div className="cart-empty-state">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="9" cy="21" r="1"></circle>
                <circle cx="20" cy="21" r="1"></circle>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
              </svg>
              <h4>Seu carrinho está vazio</h4>
              <p>Nenhuma bicicleta selecionada no momento. Explore nosso showroom e escolha sua máquina de alta performance.</p>
            </div>
          ) : (
            items.map((item) => (
              <div key={`${item.id}-${item.selectedColor.id}-${item.selectedSize}`} className="cart-item-card">
                <div className="cart-item-thumb">
                  <img src={item.selectedColor.image} alt={item.name} />
                </div>
                <div className="cart-item-details">
                  <div>
                    <h4 className="cart-item-title">{item.name}</h4>
                    <p className="cart-item-meta">
                      Cor: {item.selectedColor.name.split(' ')[0]} | Tam: {item.selectedSize.split(' ')[0]}
                    </p>
                  </div>
                  <div className="cart-item-price">
                    {formatPrice(item.price)}
                  </div>
                  <div className="cart-item-bottom">
                    <div className="cart-qty-ctrl">
                      <button
                        type="button"
                        className="cart-qty-btn"
                        onClick={() => onUpdateQty(item.id, item.selectedColor.id, item.selectedSize, item.quantity - 1)}
                      >
                        -
                      </button>
                      <span className="cart-qty-val">{item.quantity}</span>
                      <button
                        type="button"
                        className="cart-qty-btn"
                        onClick={() => onUpdateQty(item.id, item.selectedColor.id, item.selectedSize, item.quantity + 1)}
                      >
                        +
                      </button>
                    </div>
                    <button
                      type="button"
                      className="cart-remove-btn"
                      onClick={() => onRemoveItem(item.id, item.selectedColor.id, item.selectedSize)}
                    >
                      Remover
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="cart-footer">
            <div className="cart-summary-row">
              <span className="summary-label">Montagem Técnica & Frete</span>
              <span className="summary-val" style={{ color: 'var(--color-electric-green)' }}>Grátis (VIP Paddock)</span>
            </div>
            <div className="cart-summary-row">
              <span className="summary-label">Subtotal</span>
              <span className="summary-total">{formatPrice(subtotal)}</span>
            </div>

            <button
              type="button"
              className="btn-checkout"
              onClick={onCheckout}
            >
              <span>Avançar para Pedido</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          </div>
        )}
      </div>
    </>
  );
}
