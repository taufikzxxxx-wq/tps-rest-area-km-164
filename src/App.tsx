import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProductCatalog } from './components/ProductCatalog';
import { PresentationViewer } from './components/PresentationViewer';
import { CircularProcess } from './components/CircularProcess';
import { WasteCalculator } from './components/WasteCalculator';
import { RestAreaInfo } from './components/RestAreaInfo';
import { CartDrawer } from './components/CartDrawer';
import { ViralShareModal } from './components/ViralShareModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Footer } from './components/Footer';
import { CartItem, Product } from './types';

export default function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('tps_km164_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem('tps_km164_cart', JSON.stringify(cartItems));
    } catch {
      // storage quota or private browsing
    }
  }, [cartItems]);

  const handleAddToCart = (product: Product, quantity: number) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity }];
    });
  };

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveItem(productId);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const handleRemoveItem = (productId: string) => {
    setCartItems((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#06120c] text-slate-100 flex flex-col font-['Plus_Jakarta_Sans',sans-serif]">
      {/* Top Navbar */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenShare={() => setIsShareModalOpen(true)}
      />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onExploreProducts={() => scrollToSection('toko-online')}
          onExplorePresentation={() => scrollToSection('presentasi')}
        />

        {/* Product Catalog (Online Store) */}
        <ProductCatalog onAddToCart={handleAddToCart} />

        {/* Official 8-Slide Presentation Viewer */}
        <PresentationViewer />

        {/* 5-Step Circular & 4-Step Maggot Ecosystem */}
        <CircularProcess />

        {/* Interactive Waste & Economics Calculator */}
        <WasteCalculator />

        {/* Rest Area KM 164B Tol Cipali Location & Testimonials */}
        <RestAreaInfo />
      </main>

      {/* Footer */}
      <Footer />

      {/* Shopping Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* Viral Sharing Toolkit Modal */}
      <ViralShareModal
        isOpen={isShareModalOpen}
        onClose={() => setIsShareModalOpen(false)}
      />

      {/* Floating WhatsApp and Cart Quick Pill */}
      <FloatingWhatsApp
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
      />
    </div>
  );
}
