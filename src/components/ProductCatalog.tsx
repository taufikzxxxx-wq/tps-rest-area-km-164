import React, { useState } from 'react';
import { ShoppingBag, MessageCircle, Star, Eye, Check, Sparkles } from 'lucide-react';
import { Product } from '../types';
import { PRODUCTS, OFFICIAL_WHATSAPP_NUMBER, OFFICIAL_WHATSAPP_LINK } from '../data/products';
import { ProductDetailModal } from './ProductDetailModal';

interface ProductCatalogProps {
  onAddToCart: (product: Product, quantity: number) => void;
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({ onAddToCart }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'pupuk' | 'pakan'>('all');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [justAddedId, setJustAddedId] = useState<string | null>(null);

  const filteredProducts = PRODUCTS.filter((p) => {
    if (activeFilter === 'all') return true;
    return p.category === activeFilter;
  });

  const handleQuickAdd = (product: Product) => {
    onAddToCart(product, 1);
    setJustAddedId(product.id);
    setTimeout(() => setJustAddedId(null), 1800);
  };

  const handleQuickWA = (product: Product) => {
    const text = encodeURIComponent(
      `Halo Admin TPS Rest Area KM 164B Tol Cipali! 🌿\n\n` +
      `Saya tertarik memesan produk:\n` +
      `📦 ${product.name}\n` +
      `💵 Harga: Rp ${product.price.toLocaleString('id-ID')} / ${product.unit}\n\n` +
      `Apakah stok tersedia? Saya ingin ambil di Rest Area KM 164B Tol Cipali / kirim via ekspedisi. Terima kasih!`
    );
    window.open(`${OFFICIAL_WHATSAPP_LINK}?text=${text}`, '_blank');
  };

  return (
    <section id="toko-online" className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-6 border-b border-emerald-950/60">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 mb-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            KATALOG RESMI TPS REST AREA KM 164B TOL CIPALI
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            Toko Online Produk Sirkular Berkelanjutan
          </h2>
          <p className="text-sm text-slate-300 mt-2 max-w-2xl">
            Hasil olahan biokonversi mandiri sampah organik rest area. Setiap pembelian Anda langsung mendukung operasional zero waste dan kelestarian lingkungan jalan tol.
          </p>
        </div>

        {/* Interactive Filter Control Tabs (Segmented control) */}
        <div className="flex items-center gap-1.5 p-1.5 bg-slate-900/90 border border-emerald-950 rounded-xl self-start md:self-auto">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-3.5 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
              activeFilter === 'all'
                ? 'bg-emerald-400 text-slate-950 shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Semua ({PRODUCTS.length})
          </button>
          <button
            onClick={() => setActiveFilter('pupuk')}
            className={`px-3.5 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
              activeFilter === 'pupuk'
                ? 'bg-emerald-400 text-slate-950 shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Pupuk Organik (3)
          </button>
          <button
            onClick={() => setActiveFilter('pakan')}
            className={`px-3.5 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
              activeFilter === 'pakan'
                ? 'bg-emerald-400 text-slate-950 shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Pakan Maggot (1)
          </button>
        </div>
      </div>

      {/* Product Cards Grid: 4 items (2 cols on tablet, 4 cols on desktop) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="flex flex-col bg-[#071910] border border-emerald-900/60 rounded-2xl overflow-hidden hover:border-emerald-600/70 transition-all duration-300 hover:-translate-y-1 shadow-xl group"
          >
            {/* Product Image Area */}
            <div className="relative aspect-[4/3] bg-emerald-950/60 overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />

              {/* Tag / Category Badge */}
              <div className="absolute top-3 left-3 flex items-center gap-1.5">
                <span className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-[#06120c]/85 text-emerald-300 border border-emerald-800/80 backdrop-blur-sm">
                  {product.tag}
                </span>
              </div>

              {/* Unit Badge */}
              <span className="absolute bottom-3 right-3 px-2 py-0.5 rounded text-[10px] font-semibold bg-black/75 text-slate-200 backdrop-blur-sm">
                {product.unit}
              </span>

              {/* Quick Detail View Overlay Button */}
              <button
                onClick={() => setSelectedProduct(product)}
                className="absolute top-3 right-3 p-2 rounded-lg bg-black/60 hover:bg-black text-slate-300 hover:text-white backdrop-blur-sm transition-colors cursor-pointer"
                title="Lihat Spesifikasi & Detail"
              >
                <Eye className="w-4 h-4" />
              </button>
            </div>

            {/* Card Content Area */}
            <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                {/* Rating & Category metadata */}
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span className="text-[11px] font-medium text-emerald-400 uppercase tracking-wider">
                    {product.categoryLabel}
                  </span>
                  <div className="flex items-center gap-1 text-amber-400">
                    <Star className="w-3.5 h-3.5 fill-amber-400" />
                    <span className="font-bold text-slate-200">{product.rating}</span>
                  </div>
                </div>

                {/* Product Name */}
                <h3 
                  onClick={() => setSelectedProduct(product)}
                  className="font-bold text-lg text-white hover:text-emerald-400 transition-colors cursor-pointer line-clamp-1"
                >
                  {product.name}
                </h3>

                {/* Description */}
                <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                  {product.shortDesc}
                </p>
              </div>

              {/* Price & Primary Actions */}
              <div className="pt-3 border-t border-emerald-950/80 space-y-3">
                <div className="flex items-baseline justify-between">
                  <span className="text-xs text-slate-400">Harga:</span>
                  <div className="text-xl font-extrabold text-emerald-400 tabular-nums">
                    Rp {product.price.toLocaleString('id-ID')}
                  </div>
                </div>

                {/* Buttons Grid */}
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => handleQuickAdd(product)}
                    className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold text-slate-200 bg-emerald-950 hover:bg-emerald-900 border border-emerald-800/80 transition-colors cursor-pointer"
                  >
                    {justAddedId === product.id ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Masuk!</span>
                      </>
                    ) : (
                      <>
                        <ShoppingBag className="w-3.5 h-3.5 text-emerald-400" />
                        <span>+ Keranjang</span>
                      </>
                    )}
                  </button>

                  <button
                    onClick={() => handleQuickWA(product)}
                    className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-xs font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition-colors cursor-pointer shadow-md shadow-emerald-500/20"
                    title={`Pesan langsung via WhatsApp ke ${OFFICIAL_WHATSAPP_NUMBER}`}
                  >
                    <MessageCircle className="w-3.5 h-3.5 fill-slate-950" />
                    <span>Beli via WA</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Rest Area Delivery & Pick-up banner */}
      <div className="mt-12 p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-emerald-950/70 via-[#071b11] to-emerald-950/70 border border-emerald-800/60 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <div className="text-sm font-bold text-white">Sedang Melintas di Tol Cipali Arah Jakarta?</div>
            <p className="text-xs text-slate-300">
              Mampir ke <strong>Rest Area KM 164B</strong>, Anda bisa ambil langsung pesanan Anda tanpa ongkos kirim sambil melihat langsung peternakan maggot & komposter kami!
            </p>
          </div>
        </div>
        <a
          href={`${OFFICIAL_WHATSAPP_LINK}?text=Halo%20Admin%20TPS%20KM%20164B,%20saya%20sedang%20di%20Tol%20Cipali%20dan%20mau%20mampir%20beli%20pupuk/maggot`}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2.5 rounded-xl text-xs font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition-colors whitespace-nowrap shadow-md"
        >
          Konfirmasi Singgah ke WA: {OFFICIAL_WHATSAPP_NUMBER}
        </a>
      </div>

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={onAddToCart}
      />
    </section>
  );
};
