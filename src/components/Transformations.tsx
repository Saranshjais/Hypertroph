"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import Link from "next/link";

export default function Transformations() {
  const [currentIndex, setCurrentIndex] = useState(1);

  // Creative mock data for the slider
  const transformations = [
    { name: "Arjun K.", stat: "+5kg Muscle", desc: "16 Week Recomp" },
    { name: "Rahul S.", stat: "-12kg Fat", desc: "90 Day Cut" },
    { name: "Priya M.", stat: "Total Recomp", desc: "6 Month Protocol" },
    { name: "Vikram T.", stat: "-8kg Fat", desc: "12 Week Shred" }
  ];

  const next = () => setCurrentIndex((prev) => (prev + 1) % transformations.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + transformations.length) % transformations.length);

  // Auto-scroll every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % transformations.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [transformations.length]);

  return (
    <section id="transformations" className="py-20 md:py-28 relative overflow-hidden bg-[#f8fbfe]">
      
      {/* Decorative Background Mesh */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-30 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#005580]/10 via-transparent to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex flex-col items-center"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase text-[#0a1128] tracking-tighter leading-tight relative">
              Real People, <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#005580] to-[#ffb800] italic pr-2">Real Results</span>
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-[#005580] to-[#ffb800] mt-6 rounded-full"></div>
          </motion.div>
        </div>

        {/* Creative 3D Coverflow Slider */}
        <div className="relative max-w-6xl mx-auto flex items-center justify-center min-h-[400px] md:min-h-[550px]">
          
          <button 
            onClick={prev} 
            className="absolute left-0 md:left-4 z-30 w-12 h-12 md:w-14 md:h-14 bg-white/80 backdrop-blur-md border border-gray-200 shadow-xl rounded-full flex items-center justify-center text-[#005580] hover:bg-[#005580] hover:text-white transition-all duration-300 transform -translate-x-4 md:translate-x-0"
          >
            <ChevronLeft className="w-6 h-6 md:w-7 md:h-7 ml-[-2px]" strokeWidth={2.5} />
          </button>

          <div className="flex w-full justify-center items-center relative h-[350px] md:h-[500px]">
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
                    key={i}
                    layout
                    initial={{ opacity: 0, scale: 0.8, x: offset > 0 ? 200 : -200 }}
                    animate={{ 
                      opacity: isActive ? 1 : 0.4, 
                      scale: isActive ? 1 : 0.85,
                      x: offset * (typeof window !== 'undefined' && window.innerWidth < 768 ? 150 : 300),
                      zIndex: isActive ? 20 : 10,
                      rotateY: offset * -15 // Subtle 3D tilt
                    }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
                    className="absolute w-[80%] max-w-[320px] md:max-w-[400px] aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl group cursor-pointer perspective-[1000px]"
                    onClick={() => { if (!isActive) setCurrentIndex(i); }}
                  >
                    {/* The Image Placeholder Container */}
                    <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 relative">
                       {/* Subtle Grain overlay for premium texture */}
                       <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
                       
                       <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-500 font-bold">
                          <span className="text-4xl opacity-20 mb-2">{i + 1}</span>
                          <span className="tracking-widest uppercase text-sm">{isActive ? 'Before & After' : 'Click to View'}</span>
                       </div>

                       {/* Interactive Hover Reveal overlay (Only on active) */}
                       {isActive && (
                         <div className="absolute inset-0 bg-gradient-to-t from-[#002b40]/90 via-[#002b40]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                            <motion.div 
                              initial={{ y: 20 }}
                              whileInView={{ y: 0 }}
                              className="text-white"
                            >
                              <div className="inline-block px-3 py-1 bg-[#ffb800] text-[#002b40] text-xs font-black uppercase tracking-widest rounded-full mb-3 shadow-[0_0_15px_rgba(255,184,0,0.4)]">
                                {t.stat}
                              </div>
                              <h3 className="text-2xl font-black mb-1">{t.name}</h3>
                              <p className="text-gray-300 font-medium text-sm">{t.desc}</p>
                              
                              <button className="mt-6 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white hover:text-[#002b40] transition-colors">
                                <Maximize2 className="w-5 h-5" />
                              </button>
                            </motion.div>
                         </div>
                       )}
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          <button 
            onClick={next} 
            className="absolute right-0 md:right-4 z-30 w-12 h-12 md:w-14 md:h-14 bg-white/80 backdrop-blur-md border border-gray-200 shadow-xl rounded-full flex items-center justify-center text-[#005580] hover:bg-[#005580] hover:text-white transition-all duration-300 transform translate-x-4 md:translate-x-0"
          >
            <ChevronRight className="w-6 h-6 md:w-7 md:h-7 mr-[-2px]" strokeWidth={2.5} />
          </button>
        </div>

        {/* Custom Dot Pagination */}
        <div className="flex justify-center items-center gap-3 mt-10">
          {transformations.map((_, i) => (
            <button 
              key={i} 
              onClick={() => setCurrentIndex(i)}
              className={`transition-all duration-300 rounded-full ${
                currentIndex === i 
                  ? 'w-8 h-2.5 bg-gradient-to-r from-[#005580] to-[#ffb800] shadow-[0_0_10px_rgba(255,184,0,0.5)]' 
                  : 'w-2.5 h-2.5 bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        {/* Sleek See All Button */}
        <div className="flex justify-center mt-12">
          <Link href="/transformations" passHref>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-4 bg-transparent border-2 border-[#005580] rounded-full overflow-hidden cursor-pointer inline-block"
            >
              <div className="absolute inset-0 bg-[#005580] translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-500 ease-out"></div>
              <span className="relative z-10 text-[#005580] group-hover:text-white font-bold uppercase tracking-widest text-sm transition-colors duration-500">
                See All Transformations
              </span>
            </motion.div>
          </Link>
        </div>

      </div>
    </section>
  );
}
