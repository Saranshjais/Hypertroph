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
          
          {gallery.map((item, index) => {
            const beforeImages = [
              "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=600&q=80",
              "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=600&q=80",
              "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=600&q=80",
              "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?auto=format&fit=crop&w=600&q=80"
            ];
            const afterImages = [
              "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=600&q=80",
              "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=600&q=80",
              "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=600&q=80",
              "https://images.unsplash.com/photo-1534367507873-d2d7e24c797f?auto=format&fit=crop&w=600&q=80"
            ];
            const beforeImg = beforeImages[index % beforeImages.length];
            const afterImg = afterImages[index % afterImages.length];

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: (index % 4) * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-lg border-4 border-white bg-slate-900 flex">
                  
                  {/* Left Half: BEFORE */}
                  <div className="w-1/2 h-full relative overflow-hidden border-r border-white/20">
                    <img 
                      src={beforeImg} 
                      alt={`${item.name} Before`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-95"
                    />
                    <div className="absolute top-3 left-3 z-10 bg-black/75 backdrop-blur-md text-white text-[9px] font-black uppercase px-2 py-0.5 rounded-full border border-white/20">
                      BEFORE
                    </div>
                  </div>

                  {/* Right Half: AFTER */}
                  <div className="w-1/2 h-full relative overflow-hidden">
                    <img 
                      src={afterImg} 
                      alt={`${item.name} After`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-105"
                    />
                    <div className="absolute top-3 right-3 z-10 bg-[#005580] backdrop-blur-md text-white text-[9px] font-black uppercase px-2 py-0.5 rounded-full border border-cyan-400/30">
                      AFTER
                    </div>
                  </div>

                  {/* Split Divider */}
                  <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-[2px] bg-gradient-to-b from-transparent via-[#ffb800] to-transparent z-20 pointer-events-none shadow-[0_0_8px_#ffb800]"></div>

                  {/* Always visible stat tag at top center */}
                  <div className="absolute top-3 left-1/2 -translate-x-1/2 z-20 pointer-events-none">
                     <div className="px-2.5 py-0.5 bg-[#0a1128]/90 text-[#ffb800] border border-[#ffb800]/50 text-[10px] font-black uppercase tracking-wider rounded-full shadow-md">
                       {item.stat}
                     </div>
                  </div>
                  
                  {/* Hover Reveal Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#002b40]/95 via-[#002b40]/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6 z-30 translate-y-3 group-hover:translate-y-0">
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
            );
          })}

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
