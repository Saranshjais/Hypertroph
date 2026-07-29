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
              <a href="https://wa.me/918618097692?text=Hi%20Coach,%20I%20have%20a%20query%20about%20the%20coaching%20program." target="_blank" rel="noopener noreferrer" className="relative inline-block">
                Send a WhatsApp message, we reply under 24 hours.
                {/* Animated Underline */}
                <span className="absolute left-0 bottom-0 w-full h-[1.5px] bg-[#1a1c20] origin-left scale-x-100 opacity-40 transition-transform duration-300 group-hover/link:scale-x-100 group-hover/link:opacity-100 group-hover/link:h-[2px]"></span>
              </a>
            </p>
          </div>
        </div>

        {/* Right Side: Button */}
        <div className="shrink-0 w-full md:w-auto mt-2 md:mt-0 relative z-10 flex justify-center md:block">
          <motion.a 
            href="https://wa.me/918618097692?text=Hi%20Coach,%20I%20have%20a%20query%20about%20the%20coaching%20program."
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative overflow-hidden w-full md:w-auto inline-block bg-[#044c7b] hover:bg-[#033b60] transition-all text-white font-black text-sm px-9 py-3.5 rounded-lg shadow-[0_4px_10px_rgba(4,76,123,0.3)] hover:shadow-[0_8px_25px_rgba(4,76,123,0.5)] tracking-wider group/btn border border-[#044c7b]/50 cursor-pointer"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              <svg className="w-5 h-5 mb-[1px]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
              </svg>
              MESSAGE ON WHATSAPP
            </span>
            
            {/* Button internal shimmer */}
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover/btn:animate-[shimmer_1s_infinite] z-0 pointer-events-none"></div>
          </motion.a>
        </div>

      </motion.div>
    </section>
  );
}
