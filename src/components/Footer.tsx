import React from 'react';
import { MessageCircle, Heart, Phone, MapPin, Sparkles } from 'lucide-react';
import { OFFICIAL_WHATSAPP_NUMBER, OFFICIAL_WHATSAPP_LINK } from '../data/products';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#030c07] border-t border-emerald-950/80 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* Brand & Mission */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-amber-400 text-slate-950 font-black flex flex-col items-center justify-center shadow-md">
                <span className="text-[8px] uppercase tracking-wider font-extrabold leading-none">KM</span>
                <span className="text-sm font-black leading-none">164</span>
              </div>
              <div>
                <span className="text-base font-bold text-white tracking-tight">
                  TPS Rest Area KM 164B Tol Cipali
                </span>
                <div className="text-[11px] text-emerald-400 font-medium">
                  Smart Waste Management & Ekosistem Sirkular Mandiri
                </div>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-md">
              Pusat pengelolaan dan biokonversi sisa makanan kawasan rest area Tol Cipali KM 164B (Jalur B - Arah Jakarta). Menghasilkan Pupuk Organik Cair (Rp 15rb), Pupuk Padat (Rp 15rb), Kasgot BSF (Rp 10rb), dan Maggot Kering 45%+ Protein (Rp 13rb).
            </p>

            <div className="flex items-center gap-3 text-xs text-slate-300">
              <a
                href={`${OFFICIAL_WHATSAPP_LINK}?text=Halo%20Admin%20TPS%20Rest%20Area%20KM%20164B`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-950/80 border border-emerald-800 text-emerald-400 hover:text-white transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                WhatsApp: {OFFICIAL_WHATSAPP_NUMBER}
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Navigasi Halaman
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#toko-online" className="hover:text-emerald-400 transition-colors">
                  Toko Online Pupuk & Maggot
                </a>
              </li>
              <li>
                <a href="#presentasi" className="hover:text-emerald-400 transition-colors">
                  Dokumen Presentasi (8 Slide)
                </a>
              </li>
              <li>
                <a href="#alur-sirkular" className="hover:text-emerald-400 transition-colors">
                  Alur Ekosistem 5 Tahap
                </a>
              </li>
              <li>
                <a href="#kalkulator" className="hover:text-emerald-400 transition-colors">
                  Kalkulator Dampak Sampah
                </a>
              </li>
              <li>
                <a href="#lokasi" className="hover:text-emerald-400 transition-colors">
                  Lokasi & Panduan Singgah
                </a>
              </li>
            </ul>
          </div>

          {/* Product List */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Daftar Produk Resmi
            </h4>
            <ul className="space-y-2 text-xs">
              <li className="flex justify-between">
                <span>Pupuk Cair Organik (POC)</span>
                <span className="text-emerald-400 font-semibold tabular-nums">Rp 15.000</span>
              </li>
              <li className="flex justify-between">
                <span>Pupuk Padat Organik (3 Kg)</span>
                <span className="text-emerald-400 font-semibold tabular-nums">Rp 15.000</span>
              </li>
              <li className="flex justify-between">
                <span>Pupuk Kasgot BSF (1 Kg)</span>
                <span className="text-amber-400 font-semibold tabular-nums">Rp 10.000</span>
              </li>
              <li className="flex justify-between">
                <span>Maggot Kering Oven (100g)</span>
                <span className="text-emerald-400 font-semibold tabular-nums">Rp 13.000</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-emerald-950 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} TPS Rest Area KM 164B Tol Cipali. Hak Cipta Dilindungi.
          </div>
          <div className="flex items-center gap-1 text-slate-400">
            <span>Dikelola dengan Semangat Zero Waste & Sirkular Berkelanjutan</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
