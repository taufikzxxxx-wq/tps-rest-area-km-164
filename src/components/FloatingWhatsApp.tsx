import React from 'react';
import { MessageCircle, ShoppingBag } from 'lucide-react';
import { OFFICIAL_WHATSAPP_NUMBER, OFFICIAL_WHATSAPP_LINK } from '../data/products';

interface FloatingWhatsAppProps {
  cartCount: number;
  onOpenCart: () => void;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ cartCount, onOpenCart }) => {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3 pointer-events-none">
      
      {/* Quick Cart button if items in cart */}
      {cartCount > 0 && (
        <button
          onClick={onOpenCart}
          className="pointer-events-auto flex items-center gap-2 px-4 py-2.5 rounded-full bg-slate-900/95 hover:bg-slate-800 text-white border border-emerald-700/80 shadow-xl transition-all hover:scale-105 cursor-pointer backdrop-blur-md"
          aria-label="Lihat Keranjang"
        >
          <ShoppingBag className="w-4 h-4 text-emerald-400" />
          <span className="text-xs font-bold">Keranjang ({cartCount})</span>
        </button>
      )}

      {/* Floating WhatsApp Action */}
      <a
        href={`${OFFICIAL_WHATSAPP_LINK}?text=Halo%20Admin%20TPS%20Rest%20Area%20KM%20164B%20Tol%20Cipali,%20saya%20ingin%20memesan%20produk%20pupuk%20dan%20maggot.`}
        target="_blank"
        rel="noopener noreferrer"
        className="pointer-events-auto flex items-center gap-2.5 px-4 py-3 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs sm:text-sm shadow-2xl shadow-emerald-500/40 hover:scale-105 transition-all group cursor-pointer border-2 border-white/20"
        title="Chat WhatsApp Sekarang"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-slate-950 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-slate-950"></span>
        </span>
        <MessageCircle className="w-5 h-5 fill-slate-950" />
        <span className="tracking-wide">Chat WA: {OFFICIAL_WHATSAPP_NUMBER}</span>
      </a>
    </div>
  );
};
