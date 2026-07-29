"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQ() {
  const faqs = [
    { q: "What is the Hypertroph 3-by-5 method?", a: "It is the ultimate training method that is flexible, adaptable, and scalable in all life scenarios. Designed to integrate fitness seamlessly into your lifestyle without taking over your entire schedule." },
    { q: "Do I need a gym membership?", a: "Not necessarily! Most of our successful clients have trained only at home. If you have a heavy enough pair of adjustable dumbbells at home, it will get the job done." },
    { q: "What if I eat out a lot or don't cook?", a: "The program caters especially to those with busy lives. The core skill you'll learn is 'how to eat'. We guide you on portion control and making the right food choices anywhere on earth, even at restaurants." },
    { q: "How fast will I see results?", a: "This depends on your starting point, but you will begin feeling better, more energetic, and seeing initial physical changes within the first 14 days of consistency." },
    { q: "How does the daily check-in work?", a: "You'll have a custom progress tracker to update every day (Weight, Calories, Protein). We stay connected directly on Telegram for daily chat/voice support, motivation, and exercise form correction." }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="w-full bg-[#02050a] text-white py-16 md:py-20 px-4 md:px-8 lg:px-12 relative overflow-hidden font-sans selection:bg-[#1a73e8] selection:text-white">
      
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-16 relative">
        
        {/* Left Side: Editorial Sticky Header */}
        <div className="w-full lg:w-[35%] shrink-0">
          <div className="sticky top-28 flex flex-col">
            <h4 className="text-[#1a73e8] font-bold text-xs tracking-[0.3em] uppercase mb-4 flex items-center gap-3">
              <span className="w-8 h-[2px] bg-[#1a73e8]"></span>
              Information
            </h4>
            
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[0.9] tracking-tighter uppercase">
              F.A.Q
            </h2>
            
            <p className="mt-6 text-gray-400 text-base md:text-lg font-medium max-w-sm leading-relaxed">
              Everything you need to know about starting your transformation journey. No fluff, just facts.
            </p>
          </div>
        </div>
        
        {/* Right Side: Brutalist Accordion List */}
        <div className="w-full lg:w-[65%] flex flex-col border-t border-white/10 mt-10 lg:mt-0">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className="border-b border-white/10 group"
              >
                <button 
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full py-6 md:py-8 flex items-start md:items-center justify-between text-left focus:outline-none overflow-hidden relative"
                >
                  {/* Subtle hover background block */}
                  <div className="absolute inset-0 bg-white/[0.02] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-0"></div>

                  <div className="flex items-start md:items-center gap-4 md:gap-8 relative z-10 w-full pr-6">
                     {/* Index Number */}
                     <span className={`text-xs md:text-sm font-bold font-mono transition-colors duration-500 shrink-0 ${isOpen ? "text-[#1a73e8]" : "text-gray-600"}`}>
                       0{index + 1}
                     </span>
                     
                     {/* Question Text */}
                     <span className={`text-lg sm:text-xl md:text-2xl lg:text-3xl font-black uppercase tracking-tight transition-all duration-500 ease-out ${
                        isOpen ? "text-[#1a73e8] translate-x-3 md:translate-x-6" : "text-white group-hover:translate-x-3 md:group-hover:translate-x-6"
                     }`}>
                       {faq.q}
                     </span>
                  </div>
                  
                  {/* Plus / Minus Brutalist Icon */}
                  <div className="relative z-10 shrink-0 ml-2">
                    <div className="relative w-6 h-6 flex items-center justify-center">
                      <span className={`absolute w-full h-[2px] bg-white transition-transform duration-500 ${isOpen ? "rotate-180 bg-[#1a73e8]" : "rotate-0 group-hover:bg-[#1a73e8]"}`}></span>
                      <span className={`absolute h-full w-[2px] bg-white transition-transform duration-500 ${isOpen ? "rotate-90 bg-[#1a73e8]" : "rotate-0 group-hover:bg-[#1a73e8]"}`}></span>
                    </div>
                  </div>
                </button>
                
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pb-8 md:pb-10 pl-10 md:pl-16 pr-6 md:pr-12 relative z-10">
                        <p className="text-gray-300 text-base md:text-lg leading-relaxed font-medium">
                          {faq.a}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
        
      </div>
    </section>
  );
}
