"use client";
import { Check } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 md:py-32 bg-[#f8fbfe] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase text-gray-900 tracking-tighter mb-2 md:mb-4">
            Build Your FitnessOS.
          </h2>
          <h3 className="text-xl sm:text-2xl text-[#005580] font-bold tracking-tight">
            Become Fat Free for Life.
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* V1.5 Starter Card: Deep Rich Dark Background */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-gradient-to-b from-[#121212] to-[#1a1a1a] rounded-3xl md:rounded-[2rem] p-8 md:p-10 flex flex-col shadow-[0_20px_50px_rgba(0,0,0,0.2)] relative overflow-hidden border border-white/5"
          >
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#ffcc33] to-[#ffb800]"></div>
            <h3 className="text-2xl md:text-3xl font-black uppercase text-white mb-2 tracking-tight">3 Months</h3>
            <p className="text-gray-400 mb-8 md:mb-10 font-medium text-base md:text-lg">Standard foundation protocol.</p>
            
            <div className="text-5xl md:text-6xl font-black text-white mb-8 md:mb-10 flex items-baseline">
              ₹12,000 <span className="text-lg md:text-xl text-gray-500 font-bold ml-2">/ block</span>
            </div>
            
            <ul className="space-y-4 md:space-y-5 mb-8 md:mb-10 flex-1">
              {["Custom Diet & Training Plan", "Weekly Check-ins", "Exercise Form Review"].map((f, i) => (
                <li key={i} className="flex items-center text-gray-300 font-medium text-sm md:text-base">
                  <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-[#ffb800]/20 flex items-center justify-center mr-3 md:mr-4 shrink-0">
                     <Check className="text-[#ffb800] w-3 h-3 md:w-4 md:h-4" strokeWidth={3} /> 
                  </div>
                  {f}
                </li>
              ))}
            </ul>
            
            <Link href="/apply" className="w-full mt-auto">
              <button className="w-full py-4 md:py-5 rounded-xl font-bold text-white bg-white/5 border border-white/10 hover:bg-white hover:text-black transition-colors uppercase tracking-widest text-xs md:text-sm">
                Enroll Now
              </button>
            </Link>
          </motion.div>

          {/* V1.5 Pro Card: Premium White/Glass */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-white rounded-3xl md:rounded-[2rem] p-8 md:p-10 flex flex-col shadow-[0_20px_40px_-10px_rgba(0,85,128,0.15)] relative overflow-hidden border border-[#005580]/10 transform md:-translate-y-6"
          >
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#005580] to-[#00aaff]"></div>
            
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3 sm:gap-0 mb-2">
              <h3 className="text-2xl md:text-3xl font-black uppercase text-[#005580] tracking-tight">6 Months</h3>
              <span className="bg-gradient-to-r from-[#ffcc33] to-[#ffb800] text-black text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full shadow-md self-start sm:self-auto">
                Most Popular
              </span>
            </div>
            
            <p className="text-gray-500 mb-8 md:mb-10 font-medium text-base md:text-lg">The complete transformation system.</p>
            
            <div className="text-5xl md:text-6xl font-black text-gray-900 mb-8 md:mb-10 flex items-baseline">
              ₹19,000 <span className="text-lg md:text-xl text-gray-400 font-bold ml-2">/ block</span>
            </div>
            
            <ul className="space-y-4 md:space-y-5 mb-8 md:mb-10 flex-1">
              {["Everything in 3 Months", "Daily 1-on-1 Coaching Chat", "Priority Voice Note Support", "Lifetime FitnessOS Access"].map((f, i) => (
                <li key={i} className="flex items-center text-gray-700 font-bold text-sm md:text-base">
                  <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-[#005580]/10 flex items-center justify-center mr-3 md:mr-4 shrink-0">
                     <Check className="text-[#005580] w-3 h-3 md:w-4 md:h-4" strokeWidth={3} /> 
                  </div>
                  {f}
                </li>
              ))}
            </ul>
            
            <Link href="/apply" className="w-full mt-auto">
              <button className="w-full py-4 md:py-5 rounded-xl font-bold text-white bg-gradient-to-r from-[#005580] to-[#003d5c] hover:from-[#004466] hover:to-[#002b40] transition-colors uppercase tracking-widest text-xs md:text-sm shadow-[0_10px_20px_rgba(0,85,128,0.2)]">
                Enroll Now
              </button>
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
