import React, { useState } from 'react';
import { X, Check, ShoppingBag, MessageCircle, Star, Shield, ArrowRight } from 'lucide-react';
import { Product } from '../types';
import { OFFICIAL_WHATSAPP_NUMBER, OFFICIAL_WHATSAPP_LINK } from '../data/products';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, quantity: number) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onAddToCart,
}) => {
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  if (!product) return null;

  const handleAdd = () => {
    onAddToCart(product, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const handleDirectWhatsApp = () => {
    const total = product.price * quantity;
    const text = encodeURIComponent(
      `Halo Admin TPS Rest Area KM 164B Tol Cipali! 🌿\n\n` +
      `Saya ingin memesan langsung produk berikut:\n` +
      `📦 Produk: ${product.name}\n` +
      `🔢 Jumlah: ${quantity} ${product.unit}\n` +
      `💰 Total: Rp ${total.toLocaleString('id-ID')}\n\n` +
      `Mohon info ketersediaan stok & cara pengambilan di Rest Area KM 164B / pengiriman ekspedisi. Terima kasih!`
    );
    window.open(`${OFFICIAL_WHATSAPP_LINK}?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-[#08170f] border border-emerald-800/80 rounded-2xl shadow-2xl p-6 sm:p-8 text-slate-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-lg hover:bg-emerald-950/80 transition-colors cursor-pointer"
          aria-label="Tutup Detail"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-start">
          {/* Product Image */}
          <div className="space-y-3">
            <div className="relative rounded-xl overflow-hidden border border-emerald-900/60 bg-emerald-950/40 aspect-[4/3]">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <span className="absolute top-3 left-3 px-2.5 py-1 text-xs font-bold rounded-md bg-emerald-900/90 text-emerald-300 border border-emerald-700/50">
                {product.categoryLabel}
              </span>
            </div>

            {/* Price Banner */}
            <div className="p-3 rounded-xl bg-emerald-950/50 border border-emerald-800/40 flex items-center justify-between">
              <div>
                <div className="text-xs text-slate-400">Harga Resmi TPS KM 164B</div>
                <div className="text-2xl font-black text-emerald-400 tabular-nums">
                  Rp {product.price.toLocaleString('id-ID')}
                </div>
              </div>
              <div className="text-right text-xs text-slate-300 font-medium">
                {product.unit}
              </div>
            </div>
          </div>

          {/* Product Information */}
          <div className="space-y-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <div className="flex items-center text-amber-400 text-xs">
                  <Star className="w-3.5 h-3.5 fill-amber-400 mr-1" />
                  <span className="font-bold">{product.rating}</span>
                </div>
                <span className="text-slate-500">·</span>
                <span className="text-xs text-slate-400">{product.soldCount} terjual</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                {product.name}
              </h2>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {product.description}
            </p>

            {/* Key Benefits */}
            <div className="space-y-1.5 pt-1">
              <h4 className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                Keunggulan & Manfaat:
              </h4>
              <ul className="space-y-1 text-xs text-slate-300">
                {product.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* How to use */}
            <div className="p-3 rounded-lg bg-emerald-950/40 border border-emerald-900/60 text-xs text-slate-300 space-y-1">
              <span className="font-semibold text-emerald-300">Cara Penggunaan:</span>
              <p>{product.howToUse}</p>
            </div>

            {/* Specs Table */}
            <div className="space-y-1 pt-1">
              <div className="grid grid-cols-2 gap-2 text-xs">
                {product.specs.map((spec, i) => (
                  <div key={i} className="p-2 rounded bg-slate-900/60 border border-slate-800">
                    <div className="text-[10px] text-slate-400">{spec.label}</div>
                    <div className="font-medium text-slate-200 truncate">{spec.value}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quantity Stepper & Buy Buttons */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-slate-300">Jumlah Pesanan:</span>
                <div className="flex items-center border border-emerald-800/80 rounded-lg overflow-hidden bg-slate-900">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-1 text-slate-300 hover:text-white hover:bg-emerald-950"
                  >
                    -
                  </button>
                  <span className="px-4 py-1 text-xs font-bold text-white tabular-nums">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-1 text-slate-300 hover:text-white hover:bg-emerald-950"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={handleAdd}
                  className="flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-lg text-xs font-bold text-slate-200 bg-emerald-950/80 hover:bg-emerald-900/80 border border-emerald-700/80 transition-colors cursor-pointer"
                >
                  <ShoppingBag className="w-4 h-4 text-emerald-400" />
                  {added ? 'Ditambahkan! ✓' : 'Tambah Keranjang'}
                </button>

                <button
                  onClick={handleDirectWhatsApp}
                  className="flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-lg text-xs font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition-colors cursor-pointer shadow-md shadow-emerald-500/20"
                >
                  <MessageCircle className="w-4 h-4 fill-slate-950" />
                  Beli via WA ({OFFICIAL_WHATSAPP_NUMBER})
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
