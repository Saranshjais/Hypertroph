"use client";
import { motion } from "framer-motion";

export default function CoachStory() {
  return (
    <section id="story" className="py-12 md:py-16 bg-white relative overflow-hidden border-b border-slate-100">
      
      {/* Decorative Blur */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-50/80 rounded-full blur-[80px] mix-blend-multiply"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1100px] relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-4 order-2 lg:order-1 flex-1 w-full"
          >
            <div>
              <h3 className="text-2xl md:text-3xl font-black uppercase text-slate-900 tracking-tighter leading-[1.05] drop-shadow-sm transition-colors duration-300 hover:text-blue-900">
                "This changed <br/><span className="text-blue-600 hover:text-blue-500 transition-colors duration-300">my life.</span>"
              </h3>
            </div>
            
            <div className="space-y-3 text-slate-600 text-xs md:text-sm leading-relaxed font-medium">
              <p className="hover:text-slate-800 transition-colors duration-300">During my time at IIT, I was in the worst shape of my life. Skinny fat, unhealthy, and completely disconnected from my own body.</p>
              
              <div className="group border-l-[2px] border-blue-600 pl-4 py-3 bg-slate-50 hover:bg-blue-50/50 rounded-r-lg shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_15px_rgba(37,99,235,0.05)] transform hover:-translate-y-1 transition-all duration-300 cursor-default">
                <p className="text-slate-900 group-hover:text-blue-900 font-black text-base md:text-lg italic tracking-tight transition-colors duration-300">
                  "Your body is the only place you have to live."
                </p>
              </div>

              <p className="hover:text-slate-800 transition-colors duration-300">The day I realised this, was the day my life changed.</p>
              <p className="hover:text-slate-800 transition-colors duration-300">That realization forced me to take responsibility - not just to "get fit," but to understand how the human body actually works. I spent the next several years decoding the science of hypertrophy and fat loss.</p>
              <p className="text-slate-900 font-bold hover:text-blue-700 transition-colors duration-300">Now, my goal is to help you build your FitnessOS so you can become fat-free for life.</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative order-1 lg:order-2 w-full max-w-[280px] shrink-0"
          >
            {/* Premium Visual Placeholder for Coach Image */}
            <div className="aspect-[4/5] rounded-[1.5rem] bg-slate-100 overflow-hidden relative shadow-[0_15px_40px_rgb(0,0,0,0.08)] hover:shadow-[0_25px_50px_rgba(37,99,235,0.15)] border border-slate-200/60 hover:border-blue-300/50 group transition-all duration-500 transform hover:-translate-y-2 cursor-pointer">
              <img 
                src="/siddharth.png" 
                alt="Coach Siddharth" 
                className="w-full h-full object-cover object-top opacity-95 group-hover:scale-110 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/10 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="absolute bottom-5 left-5 right-5 flex flex-col justify-end transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <span className="text-xl md:text-2xl font-black uppercase mb-1 text-white drop-shadow-sm group-hover:text-blue-100 transition-colors duration-300">Coach Siddharth</span>
                <span className="font-bold uppercase tracking-widest text-[8px] md:text-[9px] text-blue-400 bg-slate-900/60 group-hover:bg-blue-600 group-hover:text-white backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10 group-hover:border-blue-400 inline-block w-fit shadow-sm transition-all duration-300">
                  IIT Alumnus & Head Coach
                </span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
