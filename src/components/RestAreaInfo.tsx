import React from 'react';
import { MapPin, Navigation, Clock, Phone, Sparkles, CheckCircle2, Star, Quote } from 'lucide-react';
import { OFFICIAL_WHATSAPP_NUMBER, OFFICIAL_WHATSAPP_LINK, TESTIMONIALS } from '../data/products';

export const RestAreaInfo: React.FC = () => {
  return (
    <section id="lokasi" className="py-16 sm:py-20 bg-[#05130b] border-t border-emerald-950/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Location & Guide Card */}
        <div className="rounded-3xl bg-gradient-to-br from-[#071c11] to-[#041009] border border-emerald-800/70 p-6 sm:p-10 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Info */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-xs font-bold text-amber-300">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                PANDUAN SINGGAH PENGENDARA TOL CIPALI
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Lokasi TPS Rest Area KM 164B Tol Cipali
              </h2>

              <p className="text-sm text-slate-300 leading-relaxed">
                Terletak strategis di <strong>Rest Area KM 164 Jalur B Tol Cikopo - Palimanan (Cipali)</strong>, arah perjalanan dari Cirebon / Jawa Tengah menuju Jakarta. Sangat ideal untuk istirahat sejenak sambil berbelanja pupuk organik berkualitas tinggi dan pakan ternak super protein langsung dari sumbernya.
              </p>

              {/* Facility Highlights Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-xs">
                <div className="p-3 rounded-xl bg-slate-900/80 border border-emerald-950 space-y-1">
                  <div className="font-bold text-white flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Layanan WA 24 Jam</span>
                  </div>
                  <div className="text-[11px] text-slate-400">Pemesanan online non-stop</div>
                </div>

                <div className="p-3 rounded-xl bg-slate-900/80 border border-emerald-950 space-y-1">
                  <div className="font-bold text-white flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Ambil di Tempat</span>
                  </div>
                  <div className="text-[11px] text-slate-400">Gratis ongkir tanpa antri</div>
                </div>

                <div className="p-3 rounded-xl bg-slate-900/80 border border-emerald-950 space-y-1">
                  <div className="font-bold text-white flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Fasilitas Lengkap</span>
                  </div>
                  <div className="text-[11px] text-slate-400">SPBU, Masjid, Pujasera, Toilet</div>
                </div>
              </div>

              {/* Direct Route Action */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=Rest+Area+KM+164+B+Tol+Cipali`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition-colors shadow-md"
                >
                  <Navigation className="w-4 h-4 fill-slate-950" />
                  Buka Peta Google Maps
                </a>

                <a
                  href={`${OFFICIAL_WHATSAPP_LINK}?text=Halo%20Admin%20TPS%20KM%20164B,%20saya%20mau%20tanya%20patokan%20lokasi%20TPS%20di%20dalam%20rest%20area`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-bold text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-700 transition-colors"
                >
                  <Phone className="w-4 h-4 text-emerald-400" />
                  Hubungi WA: {OFFICIAL_WHATSAPP_NUMBER}
                </a>
              </div>
            </div>

            {/* Right Card: Rest Area Visual Graphic & Highway Coordinates */}
            <div className="lg:col-span-5 p-6 rounded-2xl bg-slate-950/90 border border-emerald-900/80 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-emerald-950">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-amber-400 text-slate-950 font-black flex items-center justify-center text-xs">
                    164
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">KM 164 Jalur B</div>
                    <div className="text-[10px] text-slate-400">Ruas Tol Cikopo - Palimanan</div>
                  </div>
                </div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-800">
                  Kab. Majalengka, Jawa Barat
                </span>
              </div>

              <div className="space-y-2 text-xs text-slate-300">
                <div className="flex items-start gap-2">
                  <Clock className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">Jam Operasional TPS:</strong><br />
                    Layanan Fisik TPS: Setiap Hari 07.00 - 18.00 WIB<br />
                    Pemesanan WhatsApp & Kurir: 24 Jam Non-Stop
                  </div>
                </div>
                <div className="flex items-start gap-2 pt-1">
                  <Phone className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">Kontak Resmi Pengelola:</strong><br />
                    WhatsApp: <strong>081266515635</strong>
                  </div>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-emerald-950/40 border border-emerald-800/40 text-[11px] text-slate-300">
                📍 <strong>Patokan di Rest Area:</strong> Area TPS 3R terletak di bagian belakang kawasan sentra kuliner Rest Area KM 164B. Petugas kami siap menyambut dan mengantarkan pesanan langsung ke kendaraan Anda!
              </div>
            </div>

          </div>
        </div>

        {/* Customer Testimonials Section */}
        <div className="space-y-6">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
              TESTIMONI PENGGUNA PRODUK
            </div>
            <h3 className="text-2xl font-extrabold text-white">
              Dipercaya Petani, Pembudidaya Lele & Mitra Tenant
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((testi) => (
              <div
                key={testi.id}
                className="p-6 rounded-2xl bg-[#071a10] border border-emerald-900/60 flex flex-col justify-between space-y-4 shadow-lg hover:border-emerald-700 transition-colors"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex text-amber-400 gap-1">
                      {[...Array(testi.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400" />
                      ))}
                    </div>
                    <span className="text-[10px] font-semibold text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-800">
                      {testi.productBought}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 italic leading-relaxed">
                    "{testi.text}"
                  </p>
                </div>

                <div className="pt-3 border-t border-emerald-950/80">
                  <div className="font-bold text-white text-xs">{testi.author}</div>
                  <div className="text-[11px] text-slate-400">{testi.role} · {testi.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
