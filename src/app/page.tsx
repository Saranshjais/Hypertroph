"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Header from "@/components/Header";

import Method from "@/components/Method";
import ContactCTA from "@/components/ContactCTA";
import Transformations from "@/components/Transformations";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-[#f2f9fd] text-gray-900 font-sans antialiased overflow-x-hidden selection:bg-[#ffb800] selection:text-black">
      <Header />
      
      {/* 
        Clean, Proper Hero Section
        Using standard grid without absolute positioned overlapping shapes 
        to ensure perfect visibility and no text collisions.
      */}
      <section className="min-h-[100svh] pt-24 pb-16 md:pt-32 md:pb-24 flex items-center relative z-10 bg-gradient-to-b md:bg-gradient-to-r from-[#f2f9fd] md:from-[#f2f9fd] md:via-[#f2f9fd] md:to-[#005580] to-[#f2f9fd]">
        
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Typography */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left z-20">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="w-full max-w-xl"
            >
              <div className="inline-block px-4 py-1.5 rounded-full bg-blue-100 border border-blue-200 mb-6">
                <span className="text-xs font-bold text-[#005580] uppercase tracking-widest">Transform Your Body</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter text-gray-900 leading-[1.1] mb-6">
                Lose Weight
                <br />
                <span className="text-[#ffb800] italic">Permanently</span>
              </h1>
              
              <p className="text-lg sm:text-xl md:text-2xl font-medium text-gray-700 leading-relaxed mb-10">
                90 Days can fix your 90 Years.
                <br className="hidden sm:block"/>
                Start your body transformation today.
              </p>
              
              <Link href="/apply">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-4 bg-[#005580] text-white font-bold uppercase tracking-widest text-sm md:text-base rounded-full shadow-[0_10px_20px_rgba(0,85,128,0.3)] hover:bg-[#003d5c] transition-colors w-full sm:w-auto"
                >
                  Enroll Now
                </motion.button>
              </Link>
            </motion.div>
          </div>

          {/* Right Column: Premium Split Screen Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="relative w-full flex justify-center lg:justify-end z-20"
          >
            {/* The Before/After Container */}
            <div className="w-full max-w-[500px] h-[400px] sm:h-[500px] md:h-[600px] flex shadow-2xl rounded-2xl overflow-hidden border-4 border-white">
              
              <div className="w-1/2 h-full bg-neutral-800 flex items-center justify-center text-white/40 text-xl md:text-2xl font-black relative">
                 BEFORE
                 <div className="absolute inset-0 bg-gradient-to-br from-black/40 to-transparent"></div>
              </div>
              
              <div className="w-1/2 h-full bg-neutral-900 flex items-center justify-center text-white/40 text-xl md:text-2xl font-black relative border-l-2 border-white/10">
                 AFTER
              </div>
              
              {/* Center Draggable Slider Handle UI */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-10">
                <div className="w-1 h-16 md:h-24 bg-white/50 rounded-full mb-1"></div>
                <div className="w-12 h-12 md:w-16 md:h-16 bg-[#ffb800] rounded-full shadow-[0_0_20px_rgba(255,184,0,0.5)] border-4 border-white flex items-center justify-center text-[#005580]">
                  <svg className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 18l6-6-6-6"/>
                  </svg>
                </div>
                <div className="w-1 h-16 md:h-24 bg-white/50 rounded-full mt-1"></div>
              </div>

            </div>
          </motion.div>
        </div>
      </section>

      {/* Proper Clean Section for Contact Banner */}
      <ContactCTA />

      <Transformations />

      {/* Other Sections */}
      <Method />
      <Pricing />
      <FAQ />

      <Footer />
    </main>
  );
}
