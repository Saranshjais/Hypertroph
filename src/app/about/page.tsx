"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CoachStory from "@/components/CoachStory";
import { motion } from "framer-motion";
import { Target, Shield, Zap } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-50 font-sans pt-24 md:pt-32">
      <Header />
      
      {/* About Hero - Perfect Professional Layout */}
      <section className="relative pt-8 pb-10 md:pt-10 md:pb-12 bg-[#f8fbfe] overflow-hidden border-b border-slate-200">
        
        {/* Background Image (Faded on left, visible on right) */}
        <div className="absolute inset-0 z-0 flex justify-end pointer-events-none">
          <div className="w-full lg:w-[60%] h-full relative">
            <img 
              src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
              alt="Gym Equipment" 
              className="w-full h-full object-cover grayscale opacity-25"
            />
            {/* Fade from solid background to transparent */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#f8fbfe] via-[#f8fbfe]/90 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#f8fbfe] via-transparent to-[#f8fbfe]" />
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1100px] relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            
            {/* Left Column: Text & Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="pr-0 lg:pr-8 flex flex-col items-center lg:items-start text-center lg:text-left"
            >
              <h1 className="text-4xl md:text-5xl font-black uppercase text-slate-900 tracking-tighter leading-[0.95] mb-4">
                Our <span className="text-blue-600">Story</span>
              </h1>
              
              <p className="text-[13px] md:text-sm text-slate-600 leading-relaxed font-medium mb-6 max-w-[340px] mx-auto lg:mx-0">
                We built Hypertroph because we were tired of the fitness industry focusing on quick fixes. No magic pills, no shortcuts. Just science, dedication and real transformation.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mt-2 w-full sm:w-auto">
                {/* Primary Button */}
                <button className="group relative overflow-hidden w-full sm:w-auto px-6 py-3 bg-blue-600 text-white font-bold text-[10px] uppercase tracking-widest rounded-lg shadow-[0_8px_20px_rgba(37,99,235,0.3)] transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(37,99,235,0.45)] active:scale-95">
                  <span className="relative z-10">Our Mission</span>
                  {/* Diagonal Shine Effect */}
                  <div className="absolute top-0 left-0 w-[150%] h-full bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-45 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out z-0"></div>
                </button>

                {/* Secondary Play Button */}
                <button className="group relative overflow-hidden w-full sm:w-auto px-6 py-3 bg-white border border-slate-200 text-slate-800 font-bold text-[10px] uppercase tracking-widest rounded-lg transition-all duration-300 flex items-center justify-center gap-2 transform hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(0,0,0,0.06)] hover:border-blue-200 active:scale-95">
                  {/* Subtle Blue Slide-Up Background */}
                  <div className="absolute inset-0 bg-blue-50/50 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0"></div>
                  
                  <span className="relative z-10 flex items-center gap-3 group-hover:text-blue-700 transition-colors duration-300">
                    {/* Animated Play Icon */}
                    <div className="w-4 h-4 rounded-full border-[1.5px] border-slate-800 group-hover:border-blue-600 group-hover:bg-blue-600 flex items-center justify-center pl-[1.5px] transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(37,99,235,0.4)]">
                      <div className="w-0 h-0 border-t-[2.5px] border-t-transparent border-l-[3.5px] border-l-slate-800 group-hover:border-l-white border-b-[2.5px] border-b-transparent transition-colors duration-300"></div>
                    </div>
                    Watch Video
                  </span>
                </button>
              </div>
            </motion.div>

            {/* Right Column: Cards */}
            <motion.div 
              initial={{ opacity: 0, x: 15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="flex flex-col justify-center items-center lg:items-start gap-4 lg:pl-16 py-6"
            >
              {/* Card 1 */}
              <div className="group w-full max-w-[280px] bg-white/95 backdrop-blur-xl border border-white hover:border-blue-100 p-3.5 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_15px_40px_rgba(37,99,235,0.1)] flex items-center gap-4 transform lg:translate-x-6 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                <div className="w-9 h-9 rounded-lg bg-blue-50 group-hover:bg-blue-600 flex items-center justify-center text-blue-600 group-hover:text-white border border-blue-100 group-hover:border-blue-600 flex-shrink-0 transition-all duration-300 group-hover:rotate-6 group-hover:scale-110">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                </div>
                <div>
                  <div className="font-black text-lg md:text-xl text-slate-900 leading-tight group-hover:text-blue-600 transition-colors duration-300">2018</div>
                  <div className="text-[9px] font-bold text-slate-500 uppercase tracking-[0.15em] mt-0.5 group-hover:text-blue-500 transition-colors duration-300">Founded</div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="group w-full max-w-[280px] bg-white/95 backdrop-blur-xl border border-white hover:border-blue-100 p-3.5 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_15px_40px_rgba(37,99,235,0.1)] flex items-center gap-4 transform lg:-translate-x-2 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                <div className="w-9 h-9 rounded-lg bg-blue-50 group-hover:bg-blue-600 flex items-center justify-center text-blue-600 group-hover:text-white border border-blue-100 group-hover:border-blue-600 flex-shrink-0 transition-all duration-300 group-hover:-rotate-6 group-hover:scale-110">
                  <Target className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-black text-lg md:text-xl text-slate-900 leading-tight group-hover:text-blue-600 transition-colors duration-300">50K+</div>
                  <div className="text-[9px] font-bold text-slate-500 uppercase tracking-[0.15em] mt-0.5 group-hover:text-blue-500 transition-colors duration-300">Clients Helped</div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="group w-full max-w-[280px] bg-white/95 backdrop-blur-xl border border-white hover:border-blue-100 p-3.5 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_15px_40px_rgba(37,99,235,0.1)] flex items-center gap-4 transform lg:translate-x-4 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                <div className="w-9 h-9 rounded-lg bg-blue-50 group-hover:bg-blue-600 flex items-center justify-center text-blue-600 group-hover:text-white border border-blue-100 group-hover:border-blue-600 flex-shrink-0 transition-all duration-300 group-hover:rotate-6 group-hover:scale-110">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-black text-lg md:text-xl text-slate-900 leading-tight group-hover:text-blue-600 transition-colors duration-300">100%</div>
                  <div className="text-[9px] font-bold text-slate-500 uppercase tracking-[0.15em] mt-0.5 group-hover:text-blue-500 transition-colors duration-300">Science Backed</div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* The Coach / Mission */}
      <CoachStory />

      {/* Core Values - Creative Showcase */}
      <section className="py-16 md:py-24 bg-slate-50 text-slate-900 relative overflow-hidden">
        {/* Subtle background pattern/glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-50/50 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1100px] relative z-10">
          
          <div className="mb-16 flex flex-col items-center text-center">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-slate-900 mb-4">
              Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">Values</span>
            </h2>
            <p className="max-w-md text-slate-500 font-bold text-xs leading-relaxed uppercase tracking-widest">
              The foundational principles that dictate every protocol we build.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            
            {/* Value 01 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              className="group relative bg-white border border-slate-100 p-8 flex flex-col rounded-[2rem] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(37,99,235,0.08)] transition-all duration-500 hover:-translate-y-2 h-full"
            >
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-blue-50/80 rounded-full blur-[40px] group-hover:bg-blue-100 transition-colors duration-500 pointer-events-none"></div>
              
              <div className="flex justify-between items-start mb-10 relative z-10">
                <div className="text-6xl font-black text-slate-100 group-hover:text-blue-100 transition-colors duration-500 tracking-tighter leading-none">
                  01
                </div>
                <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:bg-blue-600 group-hover:border-blue-600 group-hover:text-white transition-all duration-500 group-hover:scale-110 shadow-sm text-slate-400 group-hover:rotate-6">
                   <Shield className="w-5 h-5" />
                </div>
              </div>

              <div className="relative z-10 flex-1 flex flex-col">
                <h4 className="text-xl font-black uppercase tracking-tighter mb-3 text-slate-900 group-hover:text-blue-600 transition-colors duration-500">
                  No B.S. Science
                </h4>
                <p className="text-slate-500 text-xs leading-relaxed font-medium">
                  We do not use fads, detoxes, or influencer trends. Every single protocol, macro split, and training block we give you is backed by peer-reviewed research and raw empirical data.
                </p>
              </div>

              {/* Animated Bottom Bar */}
              <div className="absolute bottom-0 left-0 w-0 h-1.5 bg-gradient-to-r from-blue-600 to-blue-400 group-hover:w-full transition-all duration-700 ease-out"></div>
            </motion.div>

            {/* Value 02 (Staggered) */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: 0.1 }}
              className="group relative bg-white border border-slate-100 p-8 flex flex-col rounded-[2rem] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(37,99,235,0.08)] transition-all duration-500 hover:-translate-y-2 h-full md:mt-10"
            >
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-blue-50/80 rounded-full blur-[40px] group-hover:bg-blue-100 transition-colors duration-500 pointer-events-none"></div>
              
              <div className="flex justify-between items-start mb-10 relative z-10">
                <div className="text-6xl font-black text-slate-100 group-hover:text-blue-100 transition-colors duration-500 tracking-tighter leading-none">
                  02
                </div>
                <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:bg-blue-600 group-hover:border-blue-600 group-hover:text-white transition-all duration-500 group-hover:scale-110 shadow-sm text-slate-400 group-hover:-rotate-6">
                   <Target className="w-5 h-5" />
                </div>
              </div>

              <div className="relative z-10 flex-1 flex flex-col">
                <h4 className="text-xl font-black uppercase tracking-tighter mb-3 text-slate-900 group-hover:text-blue-600 transition-colors duration-500">
                  Extreme Accountability
                </h4>
                <p className="text-slate-500 text-xs leading-relaxed font-medium">
                  We check in with you daily. Your success is our success, and we refuse to let you slip through the cracks. We remove the burden of thinking so you only have to execute.
                </p>
              </div>

              {/* Animated Bottom Bar */}
              <div className="absolute bottom-0 left-0 w-0 h-1.5 bg-gradient-to-r from-blue-600 to-blue-400 group-hover:w-full transition-all duration-700 ease-out"></div>
            </motion.div>

            {/* Value 03 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: 0.2 }}
              className="group relative bg-white border border-slate-100 p-8 flex flex-col rounded-[2rem] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(37,99,235,0.08)] transition-all duration-500 hover:-translate-y-2 h-full"
            >
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-blue-50/80 rounded-full blur-[40px] group-hover:bg-blue-100 transition-colors duration-500 pointer-events-none"></div>
              
              <div className="flex justify-between items-start mb-10 relative z-10">
                <div className="text-6xl font-black text-slate-100 group-hover:text-blue-100 transition-colors duration-500 tracking-tighter leading-none">
                  03
                </div>
                <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:bg-blue-600 group-hover:border-blue-600 group-hover:text-white transition-all duration-500 group-hover:scale-110 shadow-sm text-slate-400 group-hover:rotate-6">
                   <Zap className="w-5 h-5" />
                </div>
              </div>

              <div className="relative z-10 flex-1 flex flex-col">
                <h4 className="text-xl font-black uppercase tracking-tighter mb-3 text-slate-900 group-hover:text-blue-600 transition-colors duration-500">
                  Sustainability
                </h4>
                <p className="text-slate-500 text-xs leading-relaxed font-medium">
                  If you can't do it forever, it's not a real solution. We build flexible diets and realistic training structures that fit seamlessly into your corporate life and travel schedule.
                </p>
              </div>

              {/* Animated Bottom Bar */}
              <div className="absolute bottom-0 left-0 w-0 h-1.5 bg-gradient-to-r from-blue-600 to-blue-400 group-hover:w-full transition-all duration-700 ease-out"></div>
            </motion.div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
