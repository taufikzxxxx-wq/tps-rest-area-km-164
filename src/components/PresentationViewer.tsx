import React, { useState } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Layers, 
  Leaf, 
  Repeat, 
  Cpu, 
  TrendingUp, 
  AlertTriangle, 
  DollarSign, 
  Apple, 
  Package, 
  Users, 
  Zap, 
  ShieldCheck, 
  Fish, 
  Sprout, 
  Scissors, 
  Utensils, 
  CheckCircle, 
  BarChart2, 
  Shield, 
  TrendingDown, 
  LogIn, 
  Filter, 
  RefreshCw, 
  Truck, 
  Globe, 
  Coins, 
  HeartHandshake, 
  FileText,
  Play,
  Pause,
  Download,
  Check
} from 'lucide-react';
import { SLIDES_DATA } from '../data/slides';
import { SlideItem } from '../types';

export const PresentationViewer: React.FC = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [copiedSummary, setCopiedSummary] = useState(false);

  const activeSlide: SlideItem = SLIDES_DATA[currentSlideIndex];

  // Helper to map icon names
  const renderIcon = (name: string, className = "w-5 h-5") => {
    switch (name) {
      case 'Leaf': return <Leaf className={className} />;
      case 'Repeat': return <Repeat className={className} />;
      case 'Cpu': return <Cpu className={className} />;
      case 'TrendingUp': return <TrendingUp className={className} />;
      case 'AlertTriangle': return <AlertTriangle className={className} />;
      case 'DollarSign': return <DollarSign className={className} />;
      case 'Apple': return <Apple className={className} />;
      case 'Package': return <Package className={className} />;
      case 'Users': return <Users className={className} />;
      case 'Zap': return <Zap className={className} />;
      case 'ShieldCheck': return <ShieldCheck className={className} />;
      case 'Fish': return <Fish className={className} />;
      case 'Sprout': return <Sprout className={className} />;
      case 'Scissors': return <Scissors className={className} />;
      case 'Utensils': return <Utensils className={className} />;
      case 'CheckCircle': return <CheckCircle className={className} />;
      case 'BarChart2': return <BarChart2 className={className} />;
      case 'Shield': return <Shield className={className} />;
      case 'TrendingDown': return <TrendingDown className={className} />;
      case 'LogIn': return <LogIn className={className} />;
      case 'Filter': return <Filter className={className} />;
      case 'RefreshCw': return <RefreshCw className={className} />;
      case 'Layers': return <Layers className={className} />;
      case 'Truck': return <Truck className={className} />;
      case 'Globe': return <Globe className={className} />;
      case 'Coins': return <Coins className={className} />;
      case 'HeartHandshake': return <HeartHandshake className={className} />;
      default: return <Leaf className={className} />;
    }
  };

  const handleNext = () => {
    setCurrentSlideIndex((prev) => (prev + 1) % SLIDES_DATA.length);
  };

  const handlePrev = () => {
    setCurrentSlideIndex((prev) => (prev - 1 + SLIDES_DATA.length) % SLIDES_DATA.length);
  };

  // Autoplay toggle
  React.useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(timer);
  }, [isPlaying, currentSlideIndex]);

  const handleCopySummary = () => {
    const text = SLIDES_DATA.map((s) => `[Slide ${s.id}] ${s.title}: ${s.subtitle}\n${s.summary}\n`).join('\n');
    navigator.clipboard.writeText(text);
    setCopiedSummary(true);
    setTimeout(() => setCopiedSummary(false), 2500);
  };

  return (
    <section id="presentasi" className="py-16 sm:py-20 bg-[#05110a] border-y border-emerald-950/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header & Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 mb-2">
              <FileText className="w-4 h-4" />
              DOKUMEN RESMI PRESENTASI TPS REST AREA KM 164B
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              Ekosistem Zero Waste: Smart Waste Management
            </h2>
            <p className="text-sm text-slate-300 mt-1 max-w-2xl">
              Paparan 8 slide komprehensif konsep, tantangan, bioteknologi maggot BSF, dan peta sirkular Rest Area KM 164B Tol Cipali.
            </p>
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-2.5">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-lg bg-slate-900 border border-emerald-900 text-slate-300 hover:text-white transition-colors cursor-pointer"
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5 text-amber-400" /> : <Play className="w-3.5 h-3.5 text-emerald-400" />}
              {isPlaying ? 'Jeda Putar' : 'Putar Otomatis'}
            </button>

            <button
              onClick={handleCopySummary}
              className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-lg bg-emerald-950/70 border border-emerald-800 text-emerald-300 hover:bg-emerald-900 transition-colors cursor-pointer"
            >
              {copiedSummary ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Download className="w-3.5 h-3.5" />}
              {copiedSummary ? 'Tersalin!' : 'Salin Ringkasan Dokumen'}
            </button>
          </div>
        </div>

        {/* Slide Thumbnail Navigation Pills */}
        <div className="grid grid-cols-4 sm:grid-cols-8 gap-2 mb-6">
          {SLIDES_DATA.map((slide, index) => (
            <button
              key={slide.id}
              onClick={() => {
                setCurrentSlideIndex(index);
                setIsPlaying(false);
              }}
              className={`p-2 rounded-xl text-left border transition-all cursor-pointer ${
                currentSlideIndex === index
                  ? 'bg-emerald-900/60 border-amber-400 text-white shadow-lg shadow-emerald-500/20'
                  : 'bg-[#06140e] border-emerald-950 text-slate-400 hover:text-slate-200 hover:border-emerald-800'
              }`}
            >
              <div className="text-[10px] font-extrabold uppercase text-amber-400">Slide 0{slide.id}</div>
              <div className="text-xs font-semibold truncate text-slate-200">{slide.title.replace('EKOSISTEM ', '')}</div>
            </button>
          ))}
        </div>

        {/* Main Interactive Slide Stage (Styled after the PDF's iconic presentation design) */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-b from-[#0a1e14] to-[#040f09] border-2 border-emerald-800/80 shadow-2xl p-6 sm:p-10 lg:p-12 min-h-[520px] flex flex-col justify-between">
          
          {/* Top Bar of the Slide */}
          <div className="flex items-center justify-between pb-6 border-b border-emerald-900/60">
            {/* Iconic KM 164 Highway Sign */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-amber-400 border border-amber-300 flex flex-col items-center justify-center text-slate-950 font-black shadow-md">
                <span className="text-[9px] uppercase tracking-wider font-extrabold leading-none">KM</span>
                <span className="text-base font-black leading-none">164</span>
              </div>
              <div>
                <span className="text-xs uppercase font-extrabold tracking-wider text-amber-400">
                  {activeSlide.badge}
                </span>
                <div className="text-xs text-slate-400">Tol Cipali (Arah Jakarta)</div>
              </div>
            </div>

            {/* Slide Counter */}
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-emerald-400 bg-emerald-950 px-3 py-1 rounded-full border border-emerald-800/80">
                0{activeSlide.id} / 0{SLIDES_DATA.length}
              </span>
            </div>
          </div>

          {/* Slide Body */}
          <div className="py-8 space-y-6 flex-1 flex flex-col justify-center">
            
            {/* Slide Title & Subtitle */}
            <div className="space-y-2">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                {activeSlide.title}
              </h3>
              <p className="text-base sm:text-lg text-emerald-300 font-medium">
                {activeSlide.subtitle}
              </p>
              <p className="text-sm text-slate-300 max-w-3xl leading-relaxed">
                {activeSlide.summary}
              </p>
            </div>

            {/* Special Slide Visualizations based on slide number */}
            {activeSlide.id === 2 && (
              /* Slide 2: Donut Chart / Composition Breakdown */
              <div className="my-4 p-5 rounded-2xl bg-[#06140e] border border-emerald-900/80 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                <div className="md:col-span-4 flex flex-col items-center justify-center p-4 bg-emerald-950/40 rounded-xl border border-emerald-800/50">
                  <div className="text-3xl font-black text-amber-400">65%</div>
                  <div className="text-xs font-bold text-white text-center mt-1">Sampah Organik</div>
                  <div className="text-[11px] text-slate-400 text-center">Sisa makanan, kulit buah & dapur</div>
                </div>
                <div className="md:col-span-8 space-y-3">
                  <div className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                    Estimasi Komposisi Sampah Rest Area KM 164B:
                  </div>
                  {/* Progress bars */}
                  <div className="space-y-2">
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-emerald-400 font-semibold">Organik (Sisa Makanan Tenant)</span>
                        <span className="font-bold text-white">65%</span>
                      </div>
                      <div className="w-full h-3 rounded-full bg-slate-800 overflow-hidden">
                        <div className="h-full bg-emerald-500 rounded-full" style={{ width: '65%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-amber-400 font-semibold">Anorganik (Plastik, Botol, Kardus)</span>
                        <span className="font-bold text-white">25%</span>
                      </div>
                      <div className="w-full h-3 rounded-full bg-slate-800 overflow-hidden">
                        <div className="h-full bg-amber-400 rounded-full" style={{ width: '25%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-slate-400 font-semibold">Residu Akhir ke TPA</span>
                        <span className="font-bold text-white">10%</span>
                      </div>
                      <div className="w-full h-3 rounded-full bg-slate-800 overflow-hidden">
                        <div className="h-full bg-slate-500 rounded-full" style={{ width: '10%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Key Points Grid */}
            <div className={`grid grid-cols-1 ${activeSlide.keyPoints.length === 4 ? 'sm:grid-cols-2 lg:grid-cols-4' : activeSlide.keyPoints.length === 5 ? 'sm:grid-cols-3 lg:grid-cols-5' : 'sm:grid-cols-3'} gap-4 pt-2`}>
              {activeSlide.keyPoints.map((point, idx) => (
                <div 
                  key={idx}
                  className="p-4 rounded-xl bg-[#06180f]/90 border border-emerald-900/60 hover:border-emerald-700/80 transition-all space-y-2.5"
                >
                  <div className="flex items-center justify-between">
                    <div className="w-8 h-8 rounded-lg bg-emerald-950 border border-emerald-800/80 flex items-center justify-center text-emerald-400">
                      {renderIcon(point.icon)}
                    </div>
                    {point.highlight && (
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-400/20 text-amber-300 border border-amber-400/30">
                        {point.highlight}
                      </span>
                    )}
                  </div>
                  <h4 className="text-sm font-bold text-white leading-snug">
                    {point.title}
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {point.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Metrics Callout Strip */}
            {activeSlide.metrics && activeSlide.metrics.length > 0 && (
              <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-emerald-950/80">
                {activeSlide.metrics.map((metric, i) => (
                  <div key={i} className="flex items-baseline gap-2 bg-emerald-950/40 px-3.5 py-1.5 rounded-lg border border-emerald-800/40">
                    <span className="text-lg font-black text-amber-400 tabular-nums">{metric.value}</span>
                    <span className="text-xs font-semibold text-slate-200">{metric.label}</span>
                    {metric.note && <span className="text-[11px] text-slate-400">({metric.note})</span>}
                  </div>
                ))}
              </div>
            )}

            {/* Slide Quote */}
            {activeSlide.quote && (
              <div className="p-3.5 rounded-xl bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs italic font-medium">
                "{activeSlide.quote}"
              </div>
            )}

          </div>

          {/* Bottom Navigation of the Slide */}
          <div className="flex items-center justify-between pt-6 border-t border-emerald-900/60">
            <button
              onClick={handlePrev}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-800 text-xs font-semibold transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
              Slide Sebelumnya
            </button>

            {/* Slide bullets indicator */}
            <div className="hidden sm:flex items-center gap-1.5">
              {SLIDES_DATA.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentSlideIndex(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${
                    currentSlideIndex === i ? 'w-8 bg-amber-400' : 'bg-emerald-950 hover:bg-emerald-800'
                  }`}
                  aria-label={`Pindah ke slide ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs transition-colors cursor-pointer shadow-md shadow-emerald-500/20"
            >
              Slide Selanjutnya
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
