"use client";
import { motion } from "framer-motion";

export default function CoachStory() {
  return (
    <section id="story" className="py-32 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-[#003d5c] via-[#005580] to-[#002b40] relative overflow-hidden">
      
      {/* Decorative Blur */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#ffb800]/5 rounded-full blur-[100px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8 order-2 lg:order-1"
          >
            <div>
              <h2 className="text-sm font-bold uppercase text-[#ffb800] tracking-widest mb-4">The Origin</h2>
              <h3 className="text-5xl md:text-6xl font-black uppercase text-white tracking-tighter leading-tight drop-shadow-lg">
                "This changed my life."
              </h3>
            </div>
            
            <div className="space-y-6 text-blue-100/90 text-lg md:text-xl leading-relaxed font-medium">
              <p>During my time at IIT, I was in the worst shape of my life. Skinny fat, unhealthy, and completely disconnected from my own body.</p>
              
              <div className="border-l-4 border-[#ffb800] pl-8 py-4 bg-white/5 rounded-r-2xl backdrop-blur-sm shadow-inner">
                <p className="text-white font-black text-2xl italic tracking-tight drop-shadow-md">
                  "Your body is the only place you have to live."
                </p>
              </div>

              <p>The day I realised this, was the day my life changed.</p>
              <p>That realization forced me to take responsibility - not just to "get fit," but to understand how the human body actually works. I spent the next several years decoding the science of hypertrophy and fat loss.</p>
              <p className="text-white font-bold">Now, my goal is to help you build your FitnessOS so you can become fat-free for life.</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative order-1 lg:order-2"
          >
            {/* Premium Visual Placeholder for Coach Image */}
            <div className="aspect-[4/5] rounded-[2.5rem] bg-gradient-to-br from-white/10 to-transparent overflow-hidden relative shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] border border-white/20 backdrop-blur-md group">
              <div className="w-full h-full flex items-center justify-center flex-col p-8 text-center">
                <span className="text-4xl font-black uppercase mb-4 text-white drop-shadow-lg group-hover:scale-105 transition-transform duration-500">Coach Siddharth</span>
                <span className="font-bold uppercase tracking-widest text-sm text-[#ffb800] bg-black/20 px-4 py-2 rounded-full backdrop-blur-md border border-[#ffb800]/30">Image Placeholder</span>
              </div>
              
              <div className="absolute bottom-8 left-8 right-8">
                 <div className="bg-gradient-to-r from-[#ffcc33] to-[#ffb800] text-[#003d5c] p-5 rounded-2xl font-black uppercase tracking-widest text-sm shadow-[0_10px_20px_rgba(255,184,0,0.3)] text-center border border-white/50 backdrop-blur-lg">
                    IIT Alumnus & Head Coach
                 </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
