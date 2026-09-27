import React, { useState } from 'react';
import { 
  LogIn, 
  Filter, 
  RefreshCw, 
  Layers, 
  Truck, 
  Scissors, 
  Utensils, 
  TrendingUp, 
  CheckCircle,
  Sparkles,
  ArrowRight
} from 'lucide-react';

export const CircularProcess: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'sirkular' | 'maggot'>('sirkular');

  const sirkularSteps = [
    {
      step: '01',
      title: 'INPUT',
      subtitle: 'Pengumpulan Limbah',
      desc: 'Limbah organik basah dari 40+ tenant restoran & pujasera, serta sampah kemasan anorganik dari ribuan kendaraan pengunjung Rest Area KM 164B.',
      icon: <LogIn className="w-5 h-5 text-emerald-400" />,
      color: 'border-emerald-500/40 text-emerald-400',
      badge: 'Hulu'
    },
    {
      step: '02',
      title: 'PILAH',
      subtitle: 'Pemisahan Presisi',
      desc: 'Pemisahan teliti di fasilitas TPS KM 164B. Sampah organik dipisahkan dari kontaminan plastik, tusuk gigi, dan staples demi keamanan pakan larva.',
      icon: <Filter className="w-5 h-5 text-amber-400" />,
      color: 'border-amber-500/40 text-amber-400',
      badge: '90%+ Akurasi'
    },
    {
      step: '03',
      title: 'RECOVERY',
      subtitle: 'Monetisasi Anorganik',
      desc: 'Plastik PET, kardus packaging, kaleng aluminium & botol kaca dipilah dan dijual ke industri daur ulang untuk operasional mandiri para petugas.',
      icon: <RefreshCw className="w-5 h-5 text-blue-400" />,
      color: 'border-blue-500/40 text-blue-400',
      badge: 'Sirkular Finansial'
    },
    {
      step: '04',
      title: 'PROCESS',
      subtitle: 'Integrasi Multi-Teknologi',
      desc: 'Biokonversi Maggot BSF super rakus, lubang resapan biopori tanah, komposter kompos matang, dan perendaman bio-fermentasi Eco-Enzyme serbaguna.',
      icon: <Layers className="w-5 h-5 text-emerald-400" />,
      color: 'border-emerald-500/40 text-emerald-400',
      badge: 'Inti Bio-Konversi'
    },
    {
      step: '05',
      title: 'RESIDU',
      subtitle: 'Minim Residu Akhir',
      desc: 'Hanya menyisakan kurang dari 10% residu akhir yang benar-benar tidak dapat diolah, diangkut secara bersih dan terjadwal oleh DLH Kabupaten.',
      icon: <Truck className="w-5 h-5 text-slate-400" />,
      color: 'border-slate-500/40 text-slate-400',
      badge: 'Reduksi > 60%'
    }
  ];

  const maggotSteps = [
    {
      step: '01',
      title: 'PREPARASI',
      subtitle: 'Pencacahan Bio-Waste',
      desc: 'Sisa makanan dan sayuran dicacah halus dengan mesin perajang agar ukuran partikel optimal dan cepat diserap oleh koloni larva BSF.',
      icon: <Scissors className="w-5 h-5 text-emerald-400" />
    },
    {
      step: '02',
      title: 'FEEDING',
      subtitle: 'Pemberian Pakan Terkontrol',
      desc: 'Bubur sampah organik diberikan secara berkala ke biopond larva umur 5 hari dengan pengaturan suhu, kelembaban, dan ketebalan pakan ideal.',
      icon: <Utensils className="w-5 h-5 text-amber-400" />
    },
    {
      step: '03',
      title: 'GROWTH',
      subtitle: 'Pertumbuhan Masif 3x Lipat',
      desc: 'Larva mengonsumsi sampah hingga ratusan kilogram setiap hari. Bobot larva melesat pesat dalam 10-14 hari tanpa menimbulkan bau busuk.',
      icon: <TrendingUp className="w-5 h-5 text-emerald-400" />
    },
    {
      step: '04',
      title: 'HARVEST',
      subtitle: 'Panen Bersih & Pemisahan',
      desc: 'Larva dewasa dipisahkan secara mekanis: maggot dioven jadi pakan lele berprotein 45%+, sisa media menjadi pupuk kasgot super hara.',
      icon: <CheckCircle className="w-5 h-5 text-amber-400" />
    }
  ];

  return (
    <section id="alur-sirkular" className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Title */}
      <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950 border border-emerald-800 text-xs font-semibold text-emerald-400">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          ARSITEKTUR ZERO WASTE REST AREA KM 164B
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
          Bagaimana Sisa Makanan Berubah Menjadi Berkah?
        </h2>
        <p className="text-sm text-slate-300">
          Rest Area KM 164B Tol Cipali membuktikan bahwa limbah kawasan tol tidak harus berakhir menumpuk di TPA. Lihat dua peta alur kerja di bawah ini:
        </p>

        {/* Tab switch */}
        <div className="inline-flex p-1 bg-slate-900 border border-emerald-900 rounded-xl mt-2">
          <button
            onClick={() => setActiveTab('sirkular')}
            className={`px-4 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer ${
              activeTab === 'sirkular'
                ? 'bg-emerald-400 text-slate-950 shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            5 Tahap Ekosistem Sirkular Tol
          </button>
          <button
            onClick={() => setActiveTab('maggot')}
            className={`px-4 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer ${
              activeTab === 'maggot'
                ? 'bg-emerald-400 text-slate-950 shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            4 Tahap Siklus Maggot BSF
          </button>
        </div>
      </div>

      {/* Sirkular Workflow View */}
      {activeTab === 'sirkular' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {sirkularSteps.map((item, idx) => (
              <div
                key={idx}
                className="relative flex flex-col justify-between p-5 rounded-2xl bg-[#071a11] border border-emerald-900/60 hover:border-emerald-600 transition-all duration-300 shadow-lg group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black font-mono px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-800">
                      {item.step}
                    </span>
                    <span className="text-[10px] font-bold text-amber-300 px-2 py-0.5 rounded bg-amber-950/60 border border-amber-800/40">
                      {item.badge}
                    </span>
                  </div>

                  <div className="w-10 h-10 rounded-xl bg-slate-900/80 border border-emerald-800/60 flex items-center justify-center">
                    {item.icon}
                  </div>

                  <div>
                    <h3 className="font-extrabold text-base text-white group-hover:text-emerald-300 transition-colors">
                      {item.title}
                    </h3>
                    <div className="text-xs font-semibold text-emerald-400/90 mb-1">
                      {item.subtitle}
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>

                {/* Arrow connector on desktop */}
                {idx < sirkularSteps.length - 1 && (
                  <div className="hidden md:flex justify-end pt-3">
                    <ArrowRight className="w-4 h-4 text-emerald-700/60" />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-800/60 text-center text-xs text-slate-300">
            💡 <strong>Hasil Nyata:</strong> Dari 100% timbunan sampah awal, <span className="text-emerald-400 font-bold">90%+ berhasil diolah mandiri</span> menjadi pupuk kasgot, kompos, POC, pakan lele, dan bahan daur ulang.
          </div>
        </div>
      )}

      {/* Maggot Workflow View */}
      {activeTab === 'maggot' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {maggotSteps.map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col justify-between p-6 rounded-2xl bg-[#071a11] border border-emerald-900/60 hover:border-amber-400/60 transition-all shadow-lg group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black font-mono px-2.5 py-1 rounded bg-amber-400/10 text-amber-400 border border-amber-400/30">
                      TAHAP {item.step}
                    </span>
                    <div className="w-9 h-9 rounded-xl bg-slate-900 border border-emerald-800/60 flex items-center justify-center">
                      {item.icon}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-extrabold text-white group-hover:text-amber-300 transition-colors">
                      {item.title}
                    </h3>
                    <div className="text-xs font-semibold text-emerald-400 mb-2">
                      {item.subtitle}
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-emerald-950 text-[11px] text-slate-400 font-medium">
                  {idx === 0 && '⚡ Optimalisasi nafsu makan larva'}
                  {idx === 1 && '🌡 Biopond higienis bebas bau busuk'}
                  {idx === 2 && '📈 Pertumbuhan eksponensial 14 hari'}
                  {idx === 3 && '💰 Menghasilkan 4 produk komersil siap pakai'}
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-xl bg-amber-400/10 border border-amber-400/30 text-center text-xs text-amber-300">
            🔬 <strong>Fakta Biologis Maggot BSF:</strong> Larva Black Soldier Fly tidak memiliki mulut saat menjadi lalat dewasa, sehingga <em>tidak menggigit, tidak menyebarkan penyakit, dan tidak tertarik pada makanan manusia</em>. 100% aman dan bersahabat bagi lingkungan rest area.
          </div>
        </div>
      )}

    </section>
  );
};
