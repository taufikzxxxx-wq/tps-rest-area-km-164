import React from 'react';
import { ArrowDown, MessageCircle, Sparkles, ShieldCheck, Recycle, TrendingUp } from 'lucide-react';
import { OFFICIAL_WHATSAPP_NUMBER, OFFICIAL_WHATSAPP_LINK } from '../data/products';

interface HeroProps {
  onExploreProducts: () => void;
  onExplorePresentation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreProducts, onExplorePresentation }) => {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-16 lg:pb-24 border-b border-emerald-950/60">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-emerald-500/10 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute top-40 right-10 w-72 h-72 bg-amber-500/10 blur-[100px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Highway Rest Area Kicker */}
        <div className="flex flex-wrap items-center gap-2 mb-6 text-xs font-semibold tracking-wider text-emerald-400">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-950/80 border border-emerald-800/80 text-emerald-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            REST AREA KM 164B TOL CIPALI
          </div>
          <span className="text-slate-500">·</span>
          <span className="text-slate-400">JALUR B (ARAH JAKARTA)</span>
          <span className="text-slate-500">·</span>
          <span className="text-amber-400 font-bold">SMART WASTE MANAGEMENT</span>
        </div>

        {/* Main Grid: Headline & Visual Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Headline and Call-to-actions */}
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15] text-balance">
              Ekosistem <span className="text-emerald-400 underline decoration-amber-400/80 decoration-wavy decoration-2">Zero Waste</span> Pertama di Tol Cipali KM 164B
            </h1>

            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl">
              Kami mentransformasi puluhan ton sisa makanan dan limbah organik tenant Rest Area KM 164B menjadi komoditas bernilai tinggi: <strong className="text-white font-semibold">Pupuk Organik Cair (POC)</strong>, <strong className="text-white font-semibold">Pupuk Padat</strong>, <strong className="text-white font-semibold">Kasgot BSF</strong>, dan <strong className="text-white font-semibold">Maggot Kering Berprotein 45%+</strong>.
            </p>

            {/* Quick Price Matrix */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-2">
              <div className="p-2.5 rounded-lg bg-emerald-950/40 border border-emerald-900/60 text-center">
                <div className="text-[11px] text-slate-400">Pupuk Cair (POC)</div>
                <div className="text-base font-extrabold text-emerald-400 tabular-nums">Rp 15.000</div>
                <div className="text-[10px] text-slate-400">500 ml</div>
              </div>
              <div className="p-2.5 rounded-lg bg-emerald-950/40 border border-emerald-900/60 text-center">
                <div className="text-[11px] text-slate-400">Pupuk Padat</div>
                <div className="text-base font-extrabold text-emerald-400 tabular-nums">Rp 15.000</div>
                <div className="text-[10px] text-slate-400">3 Kg</div>
              </div>
              <div className="p-2.5 rounded-lg bg-emerald-950/40 border border-emerald-900/60 text-center">
                <div className="text-[11px] text-slate-400">Kasgot (Frass)</div>
                <div className="text-base font-extrabold text-amber-400 tabular-nums">Rp 10.000</div>
                <div className="text-[10px] text-slate-400">1 Kg</div>
              </div>
              <div className="p-2.5 rounded-lg bg-emerald-950/40 border border-emerald-900/60 text-center">
                <div className="text-[11px] text-slate-400">Maggot Kering</div>
                <div className="text-base font-extrabold text-emerald-400 tabular-nums">Rp 13.000</div>
                <div className="text-[10px] text-slate-400">100 Gram</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <button
                onClick={onExploreProducts}
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 shadow-lg shadow-emerald-500/25 transition-all text-sm cursor-pointer whitespace-nowrap"
              >
                <Sparkles className="w-4 h-4 fill-slate-950" />
                Belanja di Toko Online
              </button>

              <a
                href={`${OFFICIAL_WHATSAPP_LINK}?text=Halo%20Admin%20TPS%20Rest%20Area%20KM%20164B%20Tol%20Cipali,%20saya%20tertarik%20membeli%20produk%20pupuk%20dan%20maggot.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-white bg-emerald-900/80 hover:bg-emerald-800/80 border border-emerald-700/60 transition-all text-sm whitespace-nowrap"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                WhatsApp: {OFFICIAL_WHATSAPP_NUMBER}
              </a>

              <button
                onClick={onExplorePresentation}
                className="flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-medium text-slate-300 hover:text-white bg-slate-900/70 hover:bg-slate-800/80 border border-slate-800 transition-all text-sm cursor-pointer whitespace-nowrap"
              >
                Pelajari 8 Slide Presentasi
              </button>
            </div>

            {/* 3 Pillars from Slide 1 */}
            <div className="pt-4 border-t border-emerald-950/60 flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <Recycle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Pengolahan Alami BSF</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Sirkular Ekonomi 60% Savings</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-teal-400 shrink-0" />
                <span>Sanitasi Higienis Tanpa Bau</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Graphic / Facility Visual */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-emerald-800/60 shadow-2xl bg-emerald-950/30 group">
              <img
                src="/src/assets/images/tps_rest_area_km164_banner_1790505100944.jpg"
                alt="Fasilitas TPS Smart Waste Management Rest Area KM 164B Tol Cipali"
                className="w-full h-80 sm:h-96 object-cover object-center group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#06120c] via-[#06120c]/40 to-transparent" />

              {/* Floating Highway Badge on Image */}
              <div className="absolute top-4 left-4 flex items-center gap-2 bg-[#06120c]/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-amber-400/40">
                <div className="w-7 h-7 rounded bg-amber-400 text-slate-950 font-black text-xs flex items-center justify-center">
                  164
                </div>
                <div className="text-[11px] font-bold text-white leading-tight">
                  Rest Area KM 164B<br />
                  <span className="text-[10px] text-amber-300 font-normal">Tol Cipali (Arah Jakarta)</span>
                </div>
              </div>

              {/* Impact Card inside image */}
              <div className="absolute bottom-4 inset-x-4 p-4 rounded-xl bg-[#06120c]/90 backdrop-blur-md border border-emerald-800/60">
                <div className="flex items-center justify-between text-xs text-slate-300 mb-2">
                  <span className="font-semibold text-white">Status Ekosistem TPS KM 164B:</span>
                  <span className="text-emerald-400 font-bold flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    Aktif Berproduksi
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-2 text-center pt-1 border-t border-emerald-950">
                  <div>
                    <div className="text-base font-extrabold text-white tabular-nums">45%+</div>
                    <div className="text-[10px] text-slate-400">Protein Maggot</div>
                  </div>
                  <div>
                    <div className="text-base font-extrabold text-emerald-400 tabular-nums">60%</div>
                    <div className="text-[10px] text-slate-400">Hemat Biaya</div>
                  </div>
                  <div>
                    <div className="text-base font-extrabold text-amber-400 tabular-nums">1.2 T</div>
                    <div className="text-[10px] text-slate-400">Sampah/Bulan</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
