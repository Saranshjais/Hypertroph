"use client";
import Link from "next/link";
import { Handshake } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactCTA() {
  return (
    <section className="w-full bg-[#f2f9fd] py-16 px-4 flex justify-center overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
        className="w-full max-w-5xl bg-gradient-to-r from-[#fcd45c] to-[#fad973] rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-[#e8c046] py-5 px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-6 hover:shadow-[0_12px_30px_rgba(252,212,92,0.4)] hover:-translate-y-1 transition-all duration-500 relative group overflow-hidden"
      >
        
        {/* Animated Shine Effect on Background on Hover */}
        <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:animate-[shimmer_1.5s_infinite] z-0 pointer-events-none"></div>

        {/* Left Side: Icon & Text */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 sm:gap-5 relative z-10 w-full sm:w-auto">
          {/* Animated Handshake Icon */}
          <div className="relative shrink-0">
             {/* Pulsing ring behind icon */}
             <div className="absolute inset-0 bg-white/40 rounded-lg animate-ping opacity-75"></div>
             
             <div className="relative bg-white/30 p-2.5 rounded-lg border border-white/50 shadow-sm transform transition-transform group-hover:scale-110 group-hover:rotate-3 duration-300">
               <Handshake className="w-9 h-9 text-[#1a1c20]" strokeWidth={2} />
             </div>
          </div>
          
          {/* Text Content */}
          <div className="flex flex-col">
            <h3 className="text-[20px] md:text-[22px] font-bold text-[#1a1c20] leading-tight tracking-tight mb-1">
              Have queries about coaching process?
            </h3>
            <p className="text-[14px] md:text-[15px] text-[#1a1c20] font-medium opacity-90 group/link inline-block">
              <Link href="/apply" className="relative inline-block">
                Fill this Contact Form, we reply under 24 hours.
                {/* Animated Underline */}
                <span className="absolute left-0 bottom-0 w-full h-[1.5px] bg-[#1a1c20] origin-left scale-x-100 opacity-40 transition-transform duration-300 group-hover/link:scale-x-100 group-hover/link:opacity-100 group-hover/link:h-[2px]"></span>
              </Link>
            </p>
          </div>
        </div>

        {/* Right Side: Button */}
        <div className="shrink-0 w-full md:w-auto mt-2 md:mt-0 relative z-10 flex justify-center md:block">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full md:w-auto"
          >
            <Link 
              href="/apply"
              className="relative overflow-hidden w-full md:w-auto inline-block bg-[#044c7b] hover:bg-[#033b60] transition-all text-white font-black text-sm px-9 py-3.5 rounded-lg shadow-[0_4px_10px_rgba(4,76,123,0.3)] hover:shadow-[0_8px_25px_rgba(4,76,123,0.5)] tracking-wider group/btn border border-[#044c7b]/50 text-center"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                CONTACT FORM
                <span className="opacity-0 -translate-x-2 group-hover/btn:opacity-100 group-hover/btn:translate-x-0 transition-all duration-300 hidden md:inline-block">→</span>
              </span>
              
              {/* Button internal shimmer */}
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover/btn:animate-[shimmer_1s_infinite] z-0 pointer-events-none"></div>
            </Link>
          </motion.div>
        </div>

      </motion.div>
    </section>
  );
}
