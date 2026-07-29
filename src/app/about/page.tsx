"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CoachStory from "@/components/CoachStory";
import { motion } from "framer-motion";
import { Target, Shield, Zap } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#f8fbfe] font-sans pt-24 md:pt-32">
      <Header />
      
      {/* About Hero */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black uppercase text-[#0a1128] tracking-tighter leading-tight mb-6">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#005580] to-[#ffb800] italic pr-2">Story</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-medium">
              We built Hypertroph because we were tired of the fitness industry lying to people. No more generic diets, no more copy-paste workouts, just pure, scientific transformation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* The Coach / Mission */}
      <CoachStory />

      {/* Core Values - Bespoke Editorial Layout */}
      <section className="py-20 md:py-32 bg-[#020b14] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-8 gap-6">
            <div>
              <h2 className="text-5xl sm:text-6xl md:text-7xl font-black uppercase tracking-tighter text-white">
                Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#005580] to-[#ffb800] italic pr-2">Values</span>
              </h2>
            </div>
            <p className="max-w-xs text-gray-400 font-medium text-sm leading-relaxed uppercase tracking-widest">
              The foundational principles that dictate every protocol we build.
            </p>
          </div>
          
          <div className="flex flex-col">
            
            {/* Value 01 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="group relative border-b border-white/5 py-12 md:py-16 flex flex-col lg:flex-row lg:items-center gap-8 md:gap-12 hover:bg-white/[0.02] transition-colors duration-500 px-4 md:px-8 -mx-4 md:-mx-8 rounded-3xl"
            >
              <div className="text-7xl md:text-8xl lg:text-9xl font-black text-white/5 group-hover:text-[#ffb800]/20 transition-colors duration-500 leading-none">
                01
              </div>
              <div className="flex-1">
                <h4 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-4 group-hover:text-[#ffb800] transition-colors duration-500">
                  No B.S. Science
                </h4>
                <div className="w-0 group-hover:w-24 h-1 bg-[#ffb800] transition-all duration-500 rounded-full mb-6"></div>
                <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl group-hover:text-gray-200 transition-colors duration-500">
                  We do not use fads, detoxes, or influencer trends. Every single protocol, macro split, and training block we give you is backed by peer-reviewed research and raw empirical data.
                </p>
              </div>
              <div className="hidden lg:flex w-24 h-24 rounded-full border border-white/10 items-center justify-center group-hover:border-[#ffb800]/50 group-hover:rotate-12 transition-all duration-500 text-white/30 group-hover:text-[#ffb800]">
                 <Shield className="w-10 h-10" />
              </div>
            </motion.div>

            {/* Value 02 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="group relative border-b border-white/5 py-12 md:py-16 flex flex-col lg:flex-row lg:items-center gap-8 md:gap-12 hover:bg-white/[0.02] transition-colors duration-500 px-4 md:px-8 -mx-4 md:-mx-8 rounded-3xl"
            >
              <div className="text-7xl md:text-8xl lg:text-9xl font-black text-white/5 group-hover:text-[#ffb800]/20 transition-colors duration-500 leading-none">
                02
              </div>
              <div className="flex-1">
                <h4 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-4 group-hover:text-[#ffb800] transition-colors duration-500">
                  Extreme Accountability
                </h4>
                <div className="w-0 group-hover:w-24 h-1 bg-[#ffb800] transition-all duration-500 rounded-full mb-6"></div>
                <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl group-hover:text-gray-200 transition-colors duration-500">
                  We check in with you daily. Your success is our success, and we refuse to let you slip through the cracks. We remove the burden of thinking so you only have to execute.
                </p>
              </div>
              <div className="hidden lg:flex w-24 h-24 rounded-full border border-white/10 items-center justify-center group-hover:border-[#ffb800]/50 group-hover:rotate-12 transition-all duration-500 text-white/30 group-hover:text-[#ffb800]">
                 <Target className="w-10 h-10" />
              </div>
            </motion.div>

            {/* Value 03 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="group relative py-12 md:py-16 flex flex-col lg:flex-row lg:items-center gap-8 md:gap-12 hover:bg-white/[0.02] transition-colors duration-500 px-4 md:px-8 -mx-4 md:-mx-8 rounded-3xl"
            >
              <div className="text-7xl md:text-8xl lg:text-9xl font-black text-white/5 group-hover:text-[#ffb800]/20 transition-colors duration-500 leading-none">
                03
              </div>
              <div className="flex-1">
                <h4 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-4 group-hover:text-[#ffb800] transition-colors duration-500">
                  Sustainability
                </h4>
                <div className="w-0 group-hover:w-24 h-1 bg-[#ffb800] transition-all duration-500 rounded-full mb-6"></div>
                <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl group-hover:text-gray-200 transition-colors duration-500">
                  If you can't do it forever, it's not a real solution. We build flexible diets and realistic training structures that fit seamlessly into your corporate life and travel schedule.
                </p>
              </div>
              <div className="hidden lg:flex w-24 h-24 rounded-full border border-white/10 items-center justify-center group-hover:border-[#ffb800]/50 group-hover:rotate-12 transition-all duration-500 text-white/30 group-hover:text-[#ffb800]">
                 <Zap className="w-10 h-10" />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
