import React, { useState } from 'react';
import { X, Copy, Check, MessageCircle, Share2, Sparkles, QrCode, Heart, Award } from 'lucide-react';
import { OFFICIAL_WHATSAPP_NUMBER } from '../data/products';

interface ViralShareModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ViralShareModal: React.FC<ViralShareModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'wa' | 'tiktok' | 'social'>('wa');
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  if (!isOpen) return null;

  const currentUrl = window.location.href;

  const templates = [
    {
      type: 'wa',
      title: 'Status / Grup WhatsApp (Petani, Pemancing & Teman)',
      text: `🌿 *Keren Banget! Rest Area KM 164B Tol Cipali Punya TPS Zero Waste Sendiri!* 🚛\n\nSisa makanan dari tenant tol sekarang diolah jadi pupuk & pakan super:\n1. Pupuk Cair Organik (POC) - Rp 15rb\n2. Pupuk Padat Organik - Rp 15rb\n3. Kasgot Maggot BSF - Rp 10rb\n4. Maggot Kering 45%+ Protein - Rp 13rb\n\nBisa dipesan online dan diambil langsung pas singgah di rest area atau dikirim via ekspedisi. Hubungi WA admin: 081266515635!\n\nCek websitenya di sini:\n${currentUrl}\n\n#ZeroWasteTolCipali #RestAreaKM164B #TolCipali #MaggotBSF`
    },
    {
      type: 'tiktok',
      title: 'Caption TikTok / Instagram Reels Viral',
      text: `Gak nyangka di Tol Cipali ada yang sekeren ini! 😱🌱\n\nDi Rest Area KM 164B (arah Jakarta), semua sampah makanan disulap pake Maggot BSF jadi pupuk subur dan pakan lele berprotein 45%! Harganya mulai Rp 10.000 aja.\n\nYang sering mudik atau lewat Cipali wajib mampir dan cobain produknya. Bisa order via WA 081266515635.\n\n#fyp #serunyabelajar #zerowaste #tolcipali #restarea164 #maggotbsf #pupukorganik #lelebioflok #inovasianakbangsa`
    },
    {
      type: 'social',
      title: 'Postingan Edukasi Lingkungan (Facebook / X / LinkedIn)',
      text: `Inovasi sirkular konkret di infrastruktur jalan tol: TPS Rest Area KM 164B Tol Cipali.\n\nMampu mereduksi lebih dari 60% beban sampah ke TPA dengan teknologi biokonversi Maggot BSF. Menghasilkan Pupuk Organik Cair, Pupuk Padat, Kasgot, dan Pakan Berprotein Tinggi yang mandiri secara ekonomi.\n\nMari dukung gerakan sirkular berkelanjutan ini! Pemesanan produk: WA 081266515635.\n\nKunjungi: ${currentUrl}`
    }
  ];

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const handleShareWA = (text: string) => {
    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto bg-[#071910] border-2 border-emerald-700/80 rounded-3xl shadow-2xl p-6 sm:p-8 text-slate-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-lg hover:bg-emerald-950 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-2 mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-bold">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            VIRALKAN GERAKAN ZERO WASTE TOL CIPALI
          </div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-white">
            Bantu Sebarkan Inspirasi KM 164B!
          </h2>
          <p className="text-xs text-slate-300">
            Satu klik share dari Anda sangat berarti untuk mendukung keberlanjutan lingkungan dan kemandirian pekerja sirkular TPS Rest Area KM 164B Tol Cipali.
          </p>
        </div>

        {/* Tab Selection */}
        <div className="flex gap-2 p-1 bg-slate-900 rounded-xl mb-6">
          <button
            onClick={() => setActiveTab('wa')}
            className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer ${
              activeTab === 'wa' ? 'bg-emerald-400 text-slate-950 shadow-md' : 'text-slate-400 hover:text-white'
            }`}
          >
            WhatsApp Status
          </button>
          <button
            onClick={() => setActiveTab('tiktok')}
            className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer ${
              activeTab === 'tiktok' ? 'bg-emerald-400 text-slate-950 shadow-md' : 'text-slate-400 hover:text-white'
            }`}
          >
            TikTok / Reels
          </button>
          <button
            onClick={() => setActiveTab('social')}
            className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer ${
              activeTab === 'social' ? 'bg-emerald-400 text-slate-950 shadow-md' : 'text-slate-400 hover:text-white'
            }`}
          >
            Medsos / Edukasi
          </button>
        </div>

        {/* Templates Display */}
        <div className="space-y-4">
          {templates
            .filter((t) => t.type === activeTab)
            .map((template, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-slate-900/90 border border-emerald-900 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-emerald-400">{template.title}</span>
                  <span className="text-[10px] text-slate-400">Siap Copy-Paste</span>
                </div>

                <div className="p-3 rounded-xl bg-black/60 border border-slate-800 text-xs text-slate-300 whitespace-pre-line font-mono max-h-48 overflow-y-auto leading-relaxed">
                  {template.text}
                </div>

                <div className="flex items-center gap-2 pt-1">
                  <button
                    onClick={() => handleCopy(template.text, idx)}
                    className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-bold text-slate-200 bg-emerald-950 hover:bg-emerald-900 border border-emerald-700/80 transition-colors cursor-pointer"
                  >
                    {copiedIndex === idx ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    {copiedIndex === idx ? 'Tersalin ke Clipboard!' : 'Salin Teks'}
                  </button>

                  <button
                    onClick={() => handleShareWA(template.text)}
                    className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition-colors cursor-pointer shadow-md"
                  >
                    <MessageCircle className="w-3.5 h-3.5 fill-slate-950" />
                    Share ke WhatsApp
                  </button>
                </div>
              </div>
            ))}
        </div>

        {/* Digital Supporter Badge */}
        <div className="mt-6 p-4 rounded-2xl bg-emerald-950/40 border border-emerald-800/50 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-amber-400/20 border border-amber-400/40 flex items-center justify-center text-amber-400 shrink-0">
            <Award className="w-5 h-5" />
          </div>
          <div className="text-xs text-slate-300">
            <span className="font-bold text-white">Duta Zero Waste Tol Cipali:</span> Terima kasih telah menjadi bagian dari gerakan lingkungan rest area ramah bumi!
          </div>
        </div>

      </div>
    </div>
  );
};
