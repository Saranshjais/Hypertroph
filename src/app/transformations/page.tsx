"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function TransformationsPage() {
  // Generate 12 mock transformations for the gallery
  const gallery = Array.from({ length: 12 }).map((_, i) => ({
    id: i,
    name: `Client ${i + 1}`,
    stat: i % 2 === 0 ? "-12kg Fat" : "+5kg Muscle",
    desc: "90 Day Protocol"
  }));

  return (
    <main className="min-h-screen bg-[#f8fbfe] font-sans pt-24 md:pt-32">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-[#005580]/10 border border-[#005580]/20 mb-6">
              <span className="text-xs font-bold text-[#005580] uppercase tracking-widest">The Evidence</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black uppercase text-[#0a1128] tracking-tighter leading-[1.1] mb-6">
              We Don't Sell <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#005580] to-[#ffb800] italic pr-2">Promises.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-medium">
              We sell mathematically guaranteed results. Scroll down to see the real people who used the Hypertroph operating system to engineer their dream physiques.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Massive Gallery Grid */}
      <section className="py-12 md:py-24 px-4 sm:px-6 lg:px-8 max-w-[90rem] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          
          {gallery.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (index % 4) * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-lg border-4 border-white">
                
                {/* Image Placeholder */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300">
                  <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-400 font-bold">
                    <span className="text-5xl opacity-20 mb-2">{index + 1}</span>
                    <span className="tracking-widest uppercase text-xs">Before & After</span>
                  </div>
                </div>

                {/* Always visible stat tag at top */}
                <div className="absolute top-4 left-4 z-10">
                   <div className="px-3 py-1.5 bg-white/90 backdrop-blur-sm text-[#005580] text-xs font-black uppercase tracking-widest rounded-full shadow-md">
                     {item.stat}
                   </div>
                </div>
                
                {/* Hover Reveal Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#002b40]/90 via-[#002b40]/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6 translate-y-4 group-hover:translate-y-0">
                  <h3 className="text-2xl font-black text-white mb-1">{item.name}</h3>
                  <p className="text-gray-300 font-medium text-sm mb-4">{item.desc}</p>
                  
                  <div className="flex items-center gap-2 text-[#ffb800] text-xs font-bold uppercase tracking-widest">
                    <span>View Story</span>
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}

        </div>
        
        {/* Load More Button */}
        <div className="mt-20 flex justify-center">
           <button className="px-10 py-4 bg-white text-[#005580] font-bold uppercase tracking-widest text-sm rounded-full shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all">
             Load More Proof
           </button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
