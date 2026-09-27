import React, { useState } from 'react';
import { X, Trash2, ShoppingBag, MessageCircle, Copy, Check, Car, Truck, ArrowRight } from 'lucide-react';
import { CartItem, OrderFormData } from '../types';
import { OFFICIAL_WHATSAPP_NUMBER, OFFICIAL_WHATSAPP_LINK } from '../data/products';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  const [formData, setFormData] = useState<OrderFormData>({
    customerName: '',
    phone: '',
    deliveryMethod: 'pickup_rest_area',
    vehiclePlate: '',
    shippingAddress: '',
    notes: '',
  });

  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const subtotal = items.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const totalItemsCount = items.reduce((acc, item) => acc + item.quantity, 0);

  // Generate neat WhatsApp Message text
  const generateOrderMessage = () => {
    let msg = `*PESANAN ONLINE PRODUK TPS KM 164B TOL CIPALI* 🌿\n\n`;
    msg += `Halo Admin TPS Rest Area KM 164B Tol Cipali,\n`;
    msg += `Saya ingin melakukan pemesanan produk Zero Waste dengan rincian sbb:\n\n`;
    
    msg += `📋 *DAFTAR ITEM PESANAN:*\n`;
    items.forEach((item, index) => {
      const lineTotal = item.product.price * item.quantity;
      msg += `${index + 1}. ${item.product.name} (${item.product.unit})\n`;
      msg += `   - Jumlah: ${item.quantity}x @ Rp ${item.product.price.toLocaleString('id-ID')}\n`;
      msg += `   - Subtotal: Rp ${lineTotal.toLocaleString('id-ID')}\n`;
    });
    
    msg += `\n💰 *TOTAL PEMBAYARAN:* Rp ${subtotal.toLocaleString('id-ID')}\n\n`;
    
    msg += `🚚 *METODE PENERIMAAN:*\n`;
    if (formData.deliveryMethod === 'pickup_rest_area') {
      msg += `• Ambil Langsung di TPS Rest Area KM 164B Tol Cipali (Arah Jakarta)\n`;
      if (formData.vehiclePlate) {
        msg += `• Plat Kendaraan: ${formData.vehiclePlate}\n`;
      }
    } else {
      msg += `• Kirim Ekspedisi ke Alamat\n`;
      msg += `• Alamat: ${formData.shippingAddress || '-'}\n`;
    }

    msg += `\n👤 *DATA PEMESAN:*\n`;
    msg += `• Nama: ${formData.customerName || '-'}\n`;
    msg += `• WhatsApp: ${formData.phone || '-'}\n`;
    if (formData.notes) {
      msg += `• Catatan: ${formData.notes}\n`;
    }

    msg += `\nMohon konfirmasi ketersediaan stok & petunjuk pembayaran. Terima kasih banyak!`;
    return msg;
  };

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    if (items.length === 0) return;

    if (!formData.customerName.trim()) {
      alert('Silakan masukkan Nama Pemesan.');
      return;
    }

    const message = generateOrderMessage();
    const encoded = encodeURIComponent(message);
    window.open(`${OFFICIAL_WHATSAPP_LINK}?text=${encoded}`, '_blank');
  };

  const handleCopyOrder = () => {
    const message = generateOrderMessage();
    navigator.clipboard.writeText(message);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#071910] border-l border-emerald-800/80 shadow-2xl flex flex-col text-slate-100">
          
          {/* Drawer Header */}
          <div className="p-5 border-b border-emerald-950 flex items-center justify-between bg-[#05140d]">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-emerald-400" />
              <h2 className="text-lg font-bold text-white">
                Keranjang Belanja ({totalItemsCount})
              </h2>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-emerald-950/80 transition-colors cursor-pointer"
              aria-label="Tutup Keranjang"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Drawer Body */}
          <div className="flex-1 overflow-y-auto p-5 space-y-6">
            
            {items.length === 0 ? (
              <div className="py-16 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-950/70 border border-emerald-800/60 mx-auto flex items-center justify-center text-emerald-400">
                  <ShoppingBag className="w-8 h-8 opacity-70" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-base font-bold text-white">Keranjang Masih Kosong</h3>
                  <p className="text-xs text-slate-400">
                    Pilih pupuk organik cair, padat, kasgot, atau maggot kering dari katalog kami.
                  </p>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                
                {/* Items List */}
                <div className="space-y-3">
                  {items.map((item) => (
                    <div
                      key={item.product.id}
                      className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/80 border border-emerald-950"
                    >
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-16 h-16 rounded-lg object-cover border border-emerald-900/60 shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="text-xs font-bold text-white truncate">
                          {item.product.name}
                        </div>
                        <div className="text-xs text-emerald-400 font-semibold tabular-nums">
                          Rp {item.product.price.toLocaleString('id-ID')} / {item.product.unit}
                        </div>

                        {/* Quantity Stepper */}
                        <div className="flex items-center gap-2 mt-2">
                          <button
                            onClick={() => onUpdateQuantity(item.product.id, item.quantity - 1)}
                            className="w-6 h-6 rounded flex items-center justify-center bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 text-xs"
                          >
                            -
                          </button>
                          <span className="text-xs font-bold text-white tabular-nums px-1">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                            className="w-6 h-6 rounded flex items-center justify-center bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 text-xs"
                          >
                            +
                          </button>
                          <span className="text-xs text-slate-400 font-medium ml-auto tabular-nums">
                            Rp {(item.product.price * item.quantity).toLocaleString('id-ID')}
                          </span>
                        </div>
                      </div>

                      <button
                        onClick={() => onRemoveItem(item.product.id)}
                        className="p-1.5 text-slate-500 hover:text-rose-400 transition-colors"
                        title="Hapus"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>

                {/* Subtotal Banner */}
                <div className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-800/40 flex items-center justify-between text-xs">
                  <span className="text-slate-300">Total Harga Barang:</span>
                  <span className="text-lg font-black text-emerald-400 tabular-nums">
                    Rp {subtotal.toLocaleString('id-ID')}
                  </span>
                </div>

                {/* Checkout & Delivery Form */}
                <form onSubmit={handleSendWhatsApp} className="space-y-4 pt-2">
                  <div className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                    Pilihan Pengambilan & Data Pemesan:
                  </div>

                  {/* Delivery Mode Choice */}
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, deliveryMethod: 'pickup_rest_area' })}
                      className={`p-2.5 rounded-xl border text-left text-xs transition-all cursor-pointer ${
                        formData.deliveryMethod === 'pickup_rest_area'
                          ? 'bg-emerald-950/80 border-emerald-400 text-white shadow-sm'
                          : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:border-slate-700'
                      }`}
                    >
                      <div className="flex items-center gap-1.5 font-bold mb-0.5">
                        <Car className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Ambil di Rest Area</span>
                      </div>
                      <div className="text-[10px] text-emerald-300 font-semibold">Gratis Ongkir</div>
                    </button>

                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, deliveryMethod: 'shipping' })}
                      className={`p-2.5 rounded-xl border text-left text-xs transition-all cursor-pointer ${
                        formData.deliveryMethod === 'shipping'
                          ? 'bg-emerald-950/80 border-emerald-400 text-white shadow-sm'
                          : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:border-slate-700'
                      }`}
                    >
                      <div className="flex items-center gap-1.5 font-bold mb-0.5">
                        <Truck className="w-3.5 h-3.5 text-amber-400" />
                        <span>Kirim Ekspedisi</span>
                      </div>
                      <div className="text-[10px] text-slate-400">JNE / J&T / Cargo</div>
                    </button>
                  </div>

                  {/* Name & Phone */}
                  <div className="space-y-3">
                    <div>
                      <label className="block text-[11px] font-semibold text-slate-300 mb-1">
                        Nama Lengkap: <span className="text-amber-400">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Contoh: Pak Herman / Ibu Siska"
                        value={formData.customerName}
                        onChange={(e) => setFormData({ ...formData, customerName: e.target.value })}
                        className="w-full px-3 py-2 text-xs rounded-lg bg-slate-900 border border-emerald-950 text-white focus:outline-none focus:border-emerald-500"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold text-slate-300 mb-1">
                        Nomor HP / WhatsApp:
                      </label>
                      <input
                        type="tel"
                        placeholder="Contoh: 0812xxxxxxx"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3 py-2 text-xs rounded-lg bg-slate-900 border border-emerald-950 text-white focus:outline-none focus:border-emerald-500"
                      />
                    </div>

                    {formData.deliveryMethod === 'pickup_rest_area' ? (
                      <div>
                        <label className="block text-[11px] font-semibold text-slate-300 mb-1">
                          Nomor Plat Mobil / Waktu Singgah di Rest Area KM 164B:
                        </label>
                        <input
                          type="text"
                          placeholder="Contoh: B 1234 XYZ (Mampir jam 14:00)"
                          value={formData.vehiclePlate}
                          onChange={(e) => setFormData({ ...formData, vehiclePlate: e.target.value })}
                          className="w-full px-3 py-2 text-xs rounded-lg bg-slate-900 border border-emerald-950 text-white focus:outline-none focus:border-emerald-500"
                        />
                      </div>
                    ) : (
                      <div>
                        <label className="block text-[11px] font-semibold text-slate-300 mb-1">
                          Alamat Pengiriman Lengkap:
                        </label>
                        <textarea
                          rows={2}
                          placeholder="Jalan, No Rumah, Kelurahan, Kecamatan, Kota/Kabupaten, Kode Pos"
                          value={formData.shippingAddress}
                          onChange={(e) => setFormData({ ...formData, shippingAddress: e.target.value })}
                          className="w-full px-3 py-2 text-xs rounded-lg bg-slate-900 border border-emerald-950 text-white focus:outline-none focus:border-emerald-500"
                        />
                      </div>
                    )}

                    <div>
                      <label className="block text-[11px] font-semibold text-slate-300 mb-1">
                        Catatan Khusus (Opsional):
                      </label>
                      <input
                        type="text"
                        placeholder="Contoh: Minta yang kemasan rapat untuk perjalanan jauh"
                        value={formData.notes}
                        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                        className="w-full px-3 py-2 text-xs rounded-lg bg-slate-900 border border-emerald-950 text-white focus:outline-none focus:border-emerald-500"
                      />
                    </div>
                  </div>

                  {/* Submit to WhatsApp */}
                  <div className="pt-2 space-y-2">
                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition-colors shadow-lg shadow-emerald-500/25 cursor-pointer"
                    >
                      <MessageCircle className="w-4 h-4 fill-slate-950" />
                      Kirim Pesanan ke WA ({OFFICIAL_WHATSAPP_NUMBER})
                    </button>

                    <button
                      type="button"
                      onClick={handleCopyOrder}
                      className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-lg text-xs font-semibold text-slate-300 hover:text-white bg-slate-900 border border-slate-800 transition-colors cursor-pointer"
                    >
                      {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                      {copied ? 'Teks Pesanan Tersalin!' : 'Salin Format Pesanan'}
                    </button>
                  </div>
                </form>

              </div>
            )}

          </div>

          {/* Drawer Footer */}
          {items.length > 0 && (
            <div className="p-4 border-t border-emerald-950/80 bg-[#05140d] flex items-center justify-between text-xs text-slate-400">
              <button
                onClick={onClearCart}
                className="text-xs text-rose-400 hover:underline cursor-pointer"
              >
                Kosongkan Keranjang
              </button>
              <span>Langsung terhubung ke WA Admin</span>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
