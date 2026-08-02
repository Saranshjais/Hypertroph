"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Leaf, Dumbbell, ClipboardList, Scale, Settings } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  // Admin configurable states
  const [images, setImages] = useState([
    "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  ]);
  const [intervalTime, setIntervalTime] = useState(5000);
  const [currentIdx, setCurrentIdx] = useState(0);

  // Admin portal UI state
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [tempInterval, setTempInterval] = useState(intervalTime);
  const [tempImages, setTempImages] = useState(images.join("\n"));

  // Carousel logic
  useEffect(() => {
    if (images.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % images.length);
    }, intervalTime);
    return () => clearInterval(timer);
  }, [images, intervalTime]);

  const handleAdminSave = () => {
    setIntervalTime(tempInterval);
    const newImages = tempImages.split("\n").filter(url => url.trim() !== "");
    if (newImages.length > 0) {
      setImages(newImages);
      setCurrentIdx(0);
    }
    setIsAdminOpen(false);
  };

  return (
    <section className="font-sans bg-[#fbfbfa] w-full relative overflow-hidden">
      
      {/* Hero Section */}
      <div className="relative w-full pt-28 md:pt-40 pb-16 lg:pb-32 min-h-[100svh] lg:min-h-[90vh] flex items-center">
        
        {/* Organic Background Blobs */}
        {/* These replace the rigid split-screen background and sit behind the image */}
        <div 
          className="absolute right-[-10%] lg:right-[5%] top-[10%] lg:top-[10%] w-[90vw] lg:w-[50vw] max-w-[800px] aspect-square bg-[#e2e8df] opacity-80 z-0 transition-all duration-700 ease-in-out" 
          style={{ borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' }}
        ></div>
        <div 
          className="absolute right-[5%] lg:right-[15%] top-[30%] lg:top-[25%] w-[70vw] lg:w-[40vw] max-w-[600px] aspect-square bg-[#d4dfc8] opacity-50 z-0 blur-2xl transition-all duration-700 ease-in-out" 
          style={{ borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%' }}
        ></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
            
            {/* Left Column: Content */}
            <div className="w-full lg:w-[45%] flex flex-col items-center lg:items-start text-center lg:text-left z-20 order-2 lg:order-1 mt-8 lg:mt-0">
              <span className="text-[#5e7141] font-bold text-xs sm:text-sm uppercase tracking-widest mb-4 flex items-center gap-2">
                <Leaf size={16} />
                Lifestyle & Wellness Coach
              </span>
              
              <h1 className="text-5xl sm:text-6xl md:text-7xl xl:text-[5.5rem] font-serif text-[#1e2a22] leading-[1.05] mb-6 tracking-tight">
                Healthy Body <br className="hidden sm:block" />
                Happy Life
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl text-[#536357] leading-relaxed mb-8 sm:mb-10 max-w-md mx-auto lg:mx-0">
                Holistic coaching to help you feel your best physically, mentally and emotionally.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center lg:justify-start">
                <Link href="/apply" className="w-full sm:w-auto">
                  <button className="px-6 sm:px-8 py-3.5 sm:py-4 bg-[#5e7141] text-white font-semibold text-base sm:text-lg rounded-full shadow-[0_8px_20px_rgba(94,113,65,0.3)] hover:bg-[#4a5a33] hover:shadow-[0_10px_25px_rgba(94,113,65,0.4)] transition-all w-full transform hover:-translate-y-1">
                    Work With Me
                  </button>
                </Link>
                <button className="px-6 sm:px-8 py-3.5 sm:py-4 bg-white text-[#5e7141] font-semibold text-base sm:text-lg rounded-full border border-[#5e7141] shadow-sm hover:bg-[#f0f4ec] transition-all w-full sm:w-auto">
                  Free Wellness Guide
                </button>
              </div>
            </div>

            {/* Right Column: Carousel Image */}
            <div className="w-full lg:w-[50%] flex justify-center lg:justify-end items-center z-20 order-1 lg:order-2">
              <div className="relative w-[280px] sm:w-[380px] md:w-[450px] lg:w-[480px] xl:w-[580px] aspect-square rounded-full overflow-hidden border-[4px] sm:border-[8px] border-white shadow-[0_20px_50px_rgba(0,0,0,0.15)] bg-white">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentIdx}
                    src={images[currentIdx]}
                    alt="Wellness Coach"
                    className="w-full h-full object-cover"
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                  />
                </AnimatePresence>
              </div>
              
              {/* Carousel indicators */}
              <div className="absolute bottom-[-30px] lg:bottom-10 left-1/2 -translate-x-1/2 flex gap-3 lg:left-auto lg:right-[15%] lg:translate-x-0 z-30">
                {images.map((_, idx) => (
                  <button 
                    key={idx}
                    onClick={() => setCurrentIdx(idx)}
                    className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 shadow-sm ${idx === currentIdx ? 'bg-[#5e7141] scale-125' : 'bg-white border border-gray-300 hover:bg-gray-100'}`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white relative z-20 shadow-[0_-10px_40px_rgba(0,0,0,0.02)] border-t border-gray-100 overflow-hidden py-8 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            
            {[
              { icon: Leaf, title: "Mindset Coaching", desc: "Build a positive and resilient mindset." },
              { icon: Dumbbell, title: "Fitness Guidance", desc: "Effective workouts for your lifestyle." },
              { icon: ClipboardList, title: "Nutrition Plans", desc: "Eat well, feel well, live well." },
              { icon: Scale, title: "Lifestyle Balance", desc: "Create harmony and long term habits." }
            ].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-20px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="flex flex-col items-center text-center p-6 md:p-8 rounded-3xl bg-white border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(94,113,65,0.1)] transition-all duration-300 group cursor-pointer relative overflow-hidden"
                >
                  {/* Subtle Background Glow on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-b from-[#f0f4ec]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10 w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#f0f4ec] flex items-center justify-center text-[#5e7141] mb-4 shadow-inner group-hover:bg-[#5e7141] group-hover:text-white transition-colors duration-500">
                    <Icon className="w-6 h-6 md:w-8 md:h-8 transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500" />
                  </div>
                  
                  <h3 className="relative z-10 font-bold text-[#1e2a22] text-sm md:text-base leading-tight mb-2 group-hover:text-[#5e7141] transition-colors duration-300">
                    {feature.title}
                  </h3>
                  
                  <p className="relative z-10 text-xs md:text-sm text-[#536357] leading-relaxed opacity-90">
                    {feature.desc}
                  </p>
                </motion.div>
              );
            })}
            
          </div>
        </div>
      </div>

      {/* Admin Control Demo Toggle */}
      <button 
        onClick={() => setIsAdminOpen(true)}
        className="fixed bottom-4 left-4 z-[60] bg-[#1e2a22] text-white p-3 sm:p-4 rounded-full shadow-lg hover:bg-black transition-colors"
        title="Admin Settings Demo"
      >
        <Settings size={24} className="sm:w-7 sm:h-7" />
      </button>

      {/* Admin Panel Modal */}
      <AnimatePresence>
        {isAdminOpen && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-[100] flex items-center justify-center p-4 backdrop-blur-sm"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white rounded-2xl p-6 w-full max-w-md shadow-2xl"
            >
              <h2 className="text-2xl font-bold mb-4 text-[#1e2a22]">Admin Portal Demo</h2>
              <p className="text-sm text-gray-500 mb-6">Manage hero section images and transition interval.</p>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Image URLs (one per line)
                  </label>
                  <textarea 
                    value={tempImages}
                    onChange={(e) => setTempImages(e.target.value)}
                    rows={4}
                    className="w-full border border-gray-300 rounded-lg p-3 text-sm focus:ring-2 focus:ring-[#5e7141] focus:outline-none"
                    placeholder="https://..."
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Transition Interval (ms)
                  </label>
                  <input 
                    type="number"
                    value={tempInterval}
                    onChange={(e) => setTempInterval(parseInt(e.target.value) || 0)}
                    className="w-full border border-gray-300 rounded-lg p-3 text-sm focus:ring-2 focus:ring-[#5e7141] focus:outline-none"
                  />
                  <p className="text-xs text-gray-500 mt-1">Example: 5000 = 5 seconds</p>
                </div>
              </div>
              
              <div className="mt-8 flex justify-end gap-3">
                <button 
                  onClick={() => setIsAdminOpen(false)}
                  className="px-5 py-2.5 text-gray-600 font-medium hover:bg-gray-100 rounded-lg transition-colors"
                >
                  Cancel
                </button>
                <button 
                  onClick={handleAdminSave}
                  className="px-5 py-2.5 bg-[#5e7141] text-white font-medium rounded-lg hover:bg-[#4a5a33] transition-colors"
                >
                  Save Changes
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
