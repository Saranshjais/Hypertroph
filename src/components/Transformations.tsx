"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Maximize2, X, Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";

interface TransformationItem {
  id: number;
  name: string;
  stat: string;
  desc: string;
  beforeImg: string;
  afterImg: string;
  timeframe: string;
}

export default function Transformations() {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const [activeModalItem, setActiveModalItem] = useState<TransformationItem | null>(null);

  // Creative data for Before & After transformations with 2 high quality images
  const transformations: TransformationItem[] = [
    {
      id: 1,
      name: "Arjun K.",
      stat: "+5kg Muscle",
      desc: "Lean Muscle Hypertrophy",
      timeframe: "16 Weeks",
      beforeImg: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=800&q=80",
      afterImg: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      name: "Rahul S.",
      stat: "-12kg Fat",
      desc: "Aggressive Fat Loss Cut",
      timeframe: "90 Days",
      beforeImg: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80",
      afterImg: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      name: "Priya M.",
      stat: "Total Recomp",
      desc: "Body Recomposition Protocol",
      timeframe: "6 Months",
      beforeImg: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80",
      afterImg: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
      name: "Vikram T.",
      stat: "-8kg Fat",
      desc: "12 Week Shred & Tone",
      timeframe: "12 Weeks",
      beforeImg: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?auto=format&fit=crop&w=800&q=80",
      afterImg: "https://images.unsplash.com/photo-1534367507873-d2d7e24c797f?auto=format&fit=crop&w=800&q=80"
    }
  ];

  const next = () => setCurrentIndex((prev) => (prev + 1) % transformations.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + transformations.length) % transformations.length);

  // Auto-scroll every 4 seconds (4000ms) as requested
  useEffect(() => {
    if (isPaused || activeModalItem) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % transformations.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [transformations.length, isPaused, activeModalItem]);

  return (
    <section id="transformations" className="py-20 md:py-28 relative overflow-hidden bg-[#f8fbfe]">
      
      {/* Decorative Background Mesh */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-30 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#005580]/10 via-transparent to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-14">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex flex-col items-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#005580]/10 border border-[#005580]/20 mb-4">
              <Sparkles className="w-4 h-4 text-[#005580]" />
              <span className="text-xs font-bold text-[#005580] uppercase tracking-widest">Proven Client Results</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase text-[#0a1128] tracking-tighter leading-tight relative">
              Real People, <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#005580] to-[#ffb800] italic pr-2">Real Results</span>
            </h2>
            <p className="text-gray-500 max-w-xl text-center text-sm md:text-base mt-3 font-medium">
              Side-by-side physical transformations engineered using science-backed protocols. Auto-updating every 4 seconds.
            </p>
            <div className="w-24 h-1.5 bg-gradient-to-r from-[#005580] to-[#ffb800] mt-6 rounded-full"></div>
          </motion.div>
        </div>

        {/* Creative 3D Coverflow Slider */}
        <div 
          className="relative max-w-6xl mx-auto flex items-center justify-center min-h-[420px] md:min-h-[560px]"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          
          {/* Previous Button */}
          <button 
            onClick={prev} 
            aria-label="Previous Transformation"
            className="absolute left-0 md:left-4 z-30 w-12 h-12 md:w-14 md:h-14 bg-white/90 backdrop-blur-md border border-gray-200 shadow-xl rounded-full flex items-center justify-center text-[#005580] hover:bg-[#005580] hover:text-white transition-all duration-300 transform -translate-x-4 md:translate-x-0"
          >
            <ChevronLeft className="w-6 h-6 md:w-7 md:h-7 ml-[-2px]" strokeWidth={2.5} />
          </button>

          {/* Slider Container */}
          <div className="flex w-full justify-center items-center relative h-[380px] md:h-[520px]">
            <AnimatePresence mode="popLayout">
              {transformations.map((t, i) => {
                
                // Calculate position relative to current index
                let offset = i - currentIndex;
                if (offset < -1) offset += transformations.length;
                if (offset > 1) offset -= transformations.length;

                // Only render items close to the center
                if (Math.abs(offset) > 1) return null;

                const isActive = offset === 0;
                
                return (
                  <motion.div 
                    key={t.id}
                    layout
                    initial={{ opacity: 0, scale: 0.8, x: offset > 0 ? 200 : -200 }}
                    animate={{ 
                      opacity: isActive ? 1 : 0.45, 
                      scale: isActive ? 1 : 0.84,
                      x: offset * (typeof window !== 'undefined' && window.innerWidth < 768 ? 160 : 320),
                      zIndex: isActive ? 20 : 10,
                      rotateY: offset * -15 // Subtle 3D tilt
                    }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
                    className="absolute w-[88%] max-w-[340px] md:max-w-[440px] aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl group cursor-pointer border-2 border-white/80 bg-slate-900"
                    onClick={() => { if (!isActive) setCurrentIndex(i); }}
                  >
                    {/* Before & After 2-Image Container */}
                    <div className="w-full h-full relative flex overflow-hidden">
                      
                      {/* Left Half: BEFORE Image */}
                      <div className="w-1/2 h-full relative overflow-hidden group/before border-r border-white/20">
                        <img 
                          src={t.beforeImg} 
                          alt={`${t.name} Before Transformation`}
                          className="w-full h-full object-cover group-hover/before:scale-105 transition-transform duration-700 filter brightness-95 contrast-[1.05]"
                        />
                        {/* BEFORE Badge */}
                        <div className="absolute top-3 left-3 z-10 bg-black/70 backdrop-blur-md border border-white/20 text-gray-200 text-[10px] sm:text-xs font-black uppercase px-2.5 py-1 rounded-full tracking-wider shadow-md">
                          BEFORE
                        </div>
                      </div>

                      {/* Right Half: AFTER Image */}
                      <div className="w-1/2 h-full relative overflow-hidden group/after">
                        <img 
                          src={t.afterImg} 
                          alt={`${t.name} After Transformation`}
                          className="w-full h-full object-cover group-hover/after:scale-105 transition-transform duration-700 filter brightness-105"
                        />
                        {/* AFTER Badge */}
                        <div className="absolute top-3 right-3 z-10 bg-[#005580] backdrop-blur-md border border-cyan-400/30 text-white text-[10px] sm:text-xs font-black uppercase px-2.5 py-1 rounded-full tracking-wider shadow-md">
                          AFTER
                        </div>
                      </div>

                      {/* Glowing Split Center Divider */}
                      <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-[2px] bg-gradient-to-b from-transparent via-[#ffb800] to-transparent z-20 pointer-events-none shadow-[0_0_10px_#ffb800]"></div>
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 bg-[#0a1128] border border-[#ffb800]/50 text-[#ffb800] text-[9px] font-black tracking-widest px-2 py-0.5 rounded-full shadow-lg pointer-events-none uppercase">
                        VS
                      </div>

                      {/* Client Info Overlay (Bottom) */}
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0a1128] via-[#0a1128]/85 to-transparent pt-14 pb-5 px-5 z-20 flex flex-col justify-end text-white">
                        <div className="flex items-center justify-between gap-2 mb-1.5">
                          <div className="inline-block px-3 py-1 bg-gradient-to-r from-[#ffb800] to-[#ff9900] text-[#0a1128] text-xs font-black uppercase tracking-wider rounded-full shadow-[0_0_12px_rgba(255,184,0,0.4)]">
                            {t.stat}
                          </div>
                          <span className="text-xs font-bold text-gray-300 bg-white/10 px-2.5 py-0.5 rounded-full backdrop-blur-sm">
                            {t.timeframe}
                          </span>
                        </div>

                        <div className="flex items-end justify-between mt-1">
                          <div>
                            <h3 className="text-xl md:text-2xl font-black tracking-tight">{t.name}</h3>
                            <p className="text-gray-300 font-medium text-xs md:text-sm">{t.desc}</p>
                          </div>

                          {isActive && (
                            <button 
                              onClick={(e) => {
                                e.stopPropagation();
                                setActiveModalItem(t);
                              }}
                              aria-label="View full size comparison"
                              className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white hover:bg-white hover:text-[#005580] transition-colors shadow-lg"
                            >
                              <Maximize2 className="w-4 h-4" />
                            </button>
                          )}
                        </div>
                      </div>

                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* Next Button */}
          <button 
            onClick={next} 
            aria-label="Next Transformation"
            className="absolute right-0 md:right-4 z-30 w-12 h-12 md:w-14 md:h-14 bg-white/90 backdrop-blur-md border border-gray-200 shadow-xl rounded-full flex items-center justify-center text-[#005580] hover:bg-[#005580] hover:text-white transition-all duration-300 transform translate-x-4 md:translate-x-0"
          >
            <ChevronRight className="w-6 h-6 md:w-7 md:h-7 mr-[-2px]" strokeWidth={2.5} />
          </button>
        </div>

        {/* Custom Dot Pagination & Speed Indicator */}
        <div className="flex flex-col items-center gap-3 mt-10">
          <div className="flex justify-center items-center gap-3">
            {transformations.map((_, i) => (
              <button 
                key={i} 
                onClick={() => setCurrentIndex(i)}
                className={`transition-all duration-300 rounded-full ${
                  currentIndex === i 
                    ? 'w-9 h-2.5 bg-gradient-to-r from-[#005580] to-[#ffb800] shadow-[0_0_12px_rgba(255,184,0,0.5)]' 
                    : 'w-2.5 h-2.5 bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
          <span className="text-[11px] font-semibold text-gray-400 tracking-wider uppercase">
            Auto-cycling every 4s • Hover to pause
          </span>
        </div>

        {/* Sleek See All Button */}
        <div className="flex justify-center mt-10">
          <Link href="/transformations" passHref>
            <motion.div 
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="group relative px-8 py-4 bg-transparent border-2 border-[#005580] rounded-full overflow-hidden cursor-pointer inline-flex items-center gap-2"
            >
              <div className="absolute inset-0 bg-[#005580] translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-500 ease-out"></div>
              <span className="relative z-10 text-[#005580] group-hover:text-white font-bold uppercase tracking-widest text-sm transition-colors duration-500">
                See All Transformations
              </span>
              <ArrowRight className="relative z-10 w-4 h-4 text-[#005580] group-hover:text-white transition-all group-hover:translate-x-1 duration-500" />
            </motion.div>
          </Link>
        </div>

      </div>

      {/* Lightbox / Modal for Full Size Comparison View */}
      <AnimatePresence>
        {activeModalItem && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-lg flex items-center justify-center p-4 sm:p-6"
            onClick={() => setActiveModalItem(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl w-full bg-[#0a1128] border border-white/20 rounded-3xl p-6 md:p-8 overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setActiveModalItem(null)}
                className="absolute top-4 right-4 z-30 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                aria-label="Close details modal"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-black uppercase text-[#ffb800] tracking-widest">{activeModalItem.timeframe} Transformation</span>
                  <h3 className="text-3xl font-black text-white">{activeModalItem.name}</h3>
                </div>
                <div className="px-4 py-2 bg-gradient-to-r from-[#005580] to-[#ffb800] text-white text-sm font-black uppercase rounded-full shadow-lg">
                  {activeModalItem.stat}
                </div>
              </div>

              {/* High Def Side by Side Comparison Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-[350px] sm:h-[420px] md:h-[480px]">
                {/* BEFORE Panel */}
                <div className="relative rounded-2xl overflow-hidden border border-white/10 group">
                  <img 
                    src={activeModalItem.beforeImg} 
                    alt="Before transformation full" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md text-white font-black text-xs uppercase px-4 py-1.5 rounded-full border border-white/20">
                    BEFORE
                  </div>
                </div>

                {/* AFTER Panel */}
                <div className="relative rounded-2xl overflow-hidden border border-[#005580]/50 group">
                  <img 
                    src={activeModalItem.afterImg} 
                    alt="After transformation full" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-[#005580] backdrop-blur-md text-white font-black text-xs uppercase px-4 py-1.5 rounded-full border border-cyan-400/30">
                    AFTER
                  </div>
                </div>
              </div>

              <div className="mt-6 flex justify-between items-center text-sm text-gray-400">
                <p>{activeModalItem.desc}</p>
                <span className="text-xs text-[#ffb800]">Hypertroph OS Certified Result</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}

