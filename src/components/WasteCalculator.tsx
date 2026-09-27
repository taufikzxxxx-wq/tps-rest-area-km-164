import React, { useState } from 'react';
import { Calculator, Sparkles, TrendingUp, DollarSign, Sprout, Fish, MessageCircle } from 'lucide-react';
import { OFFICIAL_WHATSAPP_NUMBER, OFFICIAL_WHATSAPP_LINK } from '../data/products';

export const WasteCalculator: React.FC = () => {
  const [dailyWasteKg, setDailyWasteKg] = useState<number>(25);

  // Conversion math based on real BSF bioconversion data:
  // 100 kg organic waste converts to ~15-20 kg fresh maggot, ~5 kg dry maggot, ~30 kg kasgot, ~15 L POC
  const monthlyWasteKg = dailyWasteKg * 30;
  const monthlyFreshMaggotKg = Math.round(monthlyWasteKg * 0.18);
  const monthlyDryMaggotKg = Math.round(monthlyFreshMaggotKg * 0.3);
  const monthlyKasgotKg = Math.round(monthlyWasteKg * 0.32);
  const monthlyPocLiters = Math.round(monthlyWasteKg * 0.15);

  // Financial savings:
  // Average pellet feed cost ~ Rp 15.000/kg. Maggot can replace 40% commercial feed.
  const feedCostSavings = Math.round(monthlyDryMaggotKg * 25000);
  // Waste haul retribution savings ~ Rp 300 - 500 per kg waste
  const retributionSavings = Math.round(monthlyWasteKg * 450);
  const totalMonthlySavings = feedCostSavings + retributionSavings;

  // CO2 equivalent avoided: ~0.5 kg CO2e per kg food waste diverted from landfill
  const co2AvoidedKg = Math.round(monthlyWasteKg * 0.52);

  const handleShareCalculation = () => {
    const text = encodeURIComponent(
      `Halo Tim TPS Rest Area KM 164B Tol Cipali! 🌿\n\n` +
      `Saya menghitung potensi limbah organik saya: *${dailyWasteKg} kg/hari* (${monthlyWasteKg.toLocaleString('id-ID')} kg/bulan).\n\n` +
      `Estimasi output potensial:\n` +
      `- Maggot Kering 45%+ Protein: ${monthlyDryMaggotKg} kg/bln\n` +
      `- Pupuk Kasgot Organik: ${monthlyKasgotKg} kg/bln\n` +
      `- Pupuk Cair POC: ${monthlyPocLiters} Liter/bln\n` +
      `- Estimasi Penghematan: Rp ${totalMonthlySavings.toLocaleString('id-ID')}/bulan\n\n` +
      `Saya ingin berkonsultasi mengenai produk atau pasokan maggot/pupuk dari KM 164B!`
    );
    window.open(`${OFFICIAL_WHATSAPP_LINK}?text=${text}`, '_blank');
  };

  return (
    <section id="kalkulator" className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="rounded-3xl bg-gradient-to-br from-[#061c12] via-[#04120a] to-[#06180f] border-2 border-emerald-800/80 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
        
        {/* Glow backdrop */}
        <div className="absolute -top-24 -right-24 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Interactive Controls */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950 border border-emerald-800 text-xs font-semibold text-emerald-400">
                <Calculator className="w-3.5 h-3.5 text-amber-400" />
                SIMULASI BIOKONVERSI MANDIRI
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Kalkulator Dampak Sampah & Penghematan
              </h2>
              <p className="text-xs sm:text-sm text-slate-300">
                Punya sisa makanan dapur rumah, warung makan, atau tenant kuliner? Geser slider untuk melihat berapa kilogram pupuk, pakan maggot, dan rupiah yang bisa dihasilkan!
              </p>
            </div>

            {/* Slider Input */}
            <div className="p-5 rounded-2xl bg-slate-900/90 border border-emerald-900/80 space-y-4">
              <div className="flex items-center justify-between">
                <label htmlFor="waste-slider" className="text-xs font-bold text-slate-300">
                  Estimasi Sisa Makanan Organik / Hari:
                </label>
                <span className="text-xl font-extrabold text-amber-400 tabular-nums">
                  {dailyWasteKg} Kg / Hari
                </span>
              </div>

              <input
                id="waste-slider"
                type="range"
                min="5"
                max="250"
                step="5"
                value={dailyWasteKg}
                onChange={(e) => setDailyWasteKg(Number(e.target.value))}
                className="w-full h-3 bg-emerald-950 rounded-lg appearance-none cursor-pointer accent-emerald-400"
              />

              <div className="flex justify-between text-[11px] text-slate-400">
                <span>5 Kg (Rumah / Cafe kecil)</span>
                <span>50 Kg (Restoran)</span>
                <span>250 Kg (Rest Area Tol)</span>
              </div>

              <div className="p-2.5 rounded-lg bg-emerald-950/60 border border-emerald-800/40 text-center text-xs text-emerald-300 font-semibold">
                Total Sampah Terurai: <span className="text-white font-extrabold tabular-nums">{monthlyWasteKg.toLocaleString('id-ID')} Kg / Bulan</span>
              </div>
            </div>

            {/* Action CTA */}
            <button
              onClick={handleShareCalculation}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition-colors shadow-lg shadow-emerald-500/20 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-slate-950" />
              Konsultasi Hasil Simulasi ke WhatsApp
            </button>
          </div>

          {/* Right Column: Calculated Outputs */}
          <div className="lg:col-span-7 space-y-4">
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              Potensi Hasil Konversi Bulanan:
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-2 gap-3.5">
              
              {/* Output 1: Maggot Kering */}
              <div className="p-4 rounded-xl bg-[#06180f] border border-emerald-800/60 space-y-1">
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span>Maggot Kering 45%+</span>
                  <Fish className="w-4 h-4 text-emerald-400" />
                </div>
                <div className="text-2xl font-black text-white tabular-nums">
                  {monthlyDryMaggotKg} <span className="text-sm font-normal text-emerald-400">Kg/bln</span>
                </div>
                <div className="text-[11px] text-slate-400">
                  Substitusi pelet lele & pakan burung
                </div>
              </div>

              {/* Output 2: Kasgot Organik */}
              <div className="p-4 rounded-xl bg-[#06180f] border border-emerald-800/60 space-y-1">
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span>Pupuk Kasgot BSF</span>
                  <Sprout className="w-4 h-4 text-amber-400" />
                </div>
                <div className="text-2xl font-black text-amber-400 tabular-nums">
                  {monthlyKasgotKg} <span className="text-sm font-normal text-slate-300">Kg/bln</span>
                </div>
                <div className="text-[11px] text-slate-400">
                  Pupuk padat super kaya hara N-P-K
                </div>
              </div>

              {/* Output 3: Pupuk Cair POC */}
              <div className="p-4 rounded-xl bg-[#06180f] border border-emerald-800/60 space-y-1">
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span>Pupuk Cair POC</span>
                  <Sparkles className="w-4 h-4 text-emerald-400" />
                </div>
                <div className="text-2xl font-black text-white tabular-nums">
                  {monthlyPocLiters} <span className="text-sm font-normal text-emerald-400">Liter/bln</span>
                </div>
                <div className="text-[11px] text-slate-400">
                  Penyubur daun & hormon perakaran
                </div>
              </div>

              {/* Output 4: CO2 Avoided */}
              <div className="p-4 rounded-xl bg-[#06180f] border border-emerald-800/60 space-y-1">
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span>Karbon / Metana Dicegah</span>
                  <TrendingUp className="w-4 h-4 text-teal-400" />
                </div>
                <div className="text-2xl font-black text-teal-400 tabular-nums">
                  {co2AvoidedKg} <span className="text-sm font-normal text-slate-300">Kg CO₂e</span>
                </div>
                <div className="text-[11px] text-slate-400">
                  Beban TPA & gas rumah kaca berkurang
                </div>
              </div>

            </div>

            {/* Total Financial Savings Banner */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-emerald-950/80 to-amber-950/60 border border-amber-500/40 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-amber-400 text-slate-950 flex items-center justify-center font-black shrink-0">
                  <DollarSign className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-slate-300">Potensi Nilai Manfaat & Penghematan:</div>
                  <div className="text-xl sm:text-2xl font-black text-amber-300 tabular-nums">
                    Rp {totalMonthlySavings.toLocaleString('id-ID')} <span className="text-xs font-normal text-slate-300">/ bulan</span>
                  </div>
                </div>
              </div>
              <div className="text-[11px] text-slate-300 text-right sm:max-w-xs">
                Termasuk efisiensi pakan ternak lele dan pemangkasan retribusi armada sampah TPA.
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
