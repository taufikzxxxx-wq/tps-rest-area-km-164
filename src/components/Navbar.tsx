import React, { useState } from 'react';
import { ShoppingBag, MessageCircle, Menu, X, PhoneCall } from 'lucide-react';
import { OFFICIAL_WHATSAPP_NUMBER, OFFICIAL_WHATSAPP_LINK } from '../data/products';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenShare: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ cartCount, onOpenCart, onOpenShare }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Toko Online', href: '#toko-online' },
    { label: 'Presentasi Zero Waste', href: '#presentasi' },
    { label: 'Alur Sirkular', href: '#alur-sirkular' },
    { label: 'Kalkulator Eco', href: '#kalkulator' },
    { label: 'Lokasi Rest Area', href: '#lokasi' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#06120c]/90 backdrop-blur-md border-b border-emerald-950/60 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Zone 1: Single text element wordmark with highway shield KM 164 */}
          <a href="#" className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded-lg">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600 text-slate-950 font-black flex flex-col items-center justify-center shadow-lg shadow-amber-500/20 border border-amber-300">
              <span className="text-[9px] uppercase tracking-wider font-extrabold leading-none">KM</span>
              <span className="text-base font-black leading-none">164</span>
            </div>
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-bold tracking-tight text-white group-hover:text-emerald-400 transition-colors">
                TPS KM 164B Tol Cipali
              </span>
              <span className="text-[11px] text-emerald-400/80 font-medium hidden sm:inline">
                Ekosistem Zero Waste & Smart Waste Management
              </span>
            </div>
          </a>

          {/* Zone 2: 4-5 clean text navigation links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-emerald-400 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-emerald-400 hover:after:w-full after:transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1-2 primary actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={onOpenShare}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-emerald-300 bg-emerald-950/60 border border-emerald-800/60 rounded-lg hover:bg-emerald-900/60 transition-colors whitespace-nowrap cursor-pointer"
              title="Bagikan ke WhatsApp / Medsos"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Bagikan
            </button>

            {/* Shopping Cart Button */}
            <button
              onClick={onOpenCart}
              className="relative flex items-center gap-2 px-3 sm:px-4 py-2 text-xs sm:text-sm font-semibold text-slate-100 bg-emerald-900/40 border border-emerald-700/50 hover:border-emerald-500 rounded-lg hover:bg-emerald-800/40 transition-all cursor-pointer whitespace-nowrap"
              aria-label="Buka Keranjang Belanja"
            >
              <ShoppingBag className="w-4 h-4 text-emerald-400" />
              <span className="hidden sm:inline">Keranjang</span>
              {cartCount > 0 && (
                <span className="flex items-center justify-center min-w-5 h-5 px-1.5 text-xs font-bold text-slate-950 bg-emerald-400 rounded-full animate-bounce">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Direct WhatsApp Callout */}
            <a
              href={`${OFFICIAL_WHATSAPP_LINK}?text=Halo%20Admin%20TPS%20Rest%20Area%20KM%20164B%20Tol%20Cipali,%20saya%20ingin%20tanya%20produk%20dan%20layanan`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 sm:px-4 py-2 text-xs sm:text-sm font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg shadow-md shadow-emerald-500/20 transition-all cursor-pointer whitespace-nowrap"
            >
              <MessageCircle className="w-4 h-4 fill-slate-950 text-slate-950" />
              <span className="hidden md:inline font-bold">WA: {OFFICIAL_WHATSAPP_NUMBER}</span>
              <span className="md:hidden font-bold">WA</span>
            </a>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-300 hover:text-white rounded-lg hover:bg-emerald-950/60"
              aria-label="Buka Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-emerald-950 bg-[#06120c] px-4 pt-3 pb-5 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-slate-200 hover:text-emerald-400 hover:bg-emerald-950/50"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 border-t border-emerald-950/60 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenShare();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium text-emerald-300 bg-emerald-950/80 border border-emerald-800"
            >
              Bagikan Kisah Zero Waste KM 164
            </button>
            <a
              href={`tel:${OFFICIAL_WHATSAPP_NUMBER}`}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium text-slate-300 bg-slate-900 border border-slate-800"
            >
              <PhoneCall className="w-4 h-4 text-emerald-400" />
              Telepon: {OFFICIAL_WHATSAPP_NUMBER}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
