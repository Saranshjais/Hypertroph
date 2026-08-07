"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircleQuestion, Plus, Minus, MessageSquareText } from "lucide-react";
import Link from "next/link";


export default function FAQ() {
  const faqs = [
    { q: "What is the Hypertroph 3-by-5 method?", a: "It is the ultimate training method that is flexible, adaptable, and scalable in all life scenarios. Designed to integrate fitness seamlessly into your lifestyle without taking over your entire schedule." },
    { q: "Do I need a gym membership?", a: "Not necessarily! Most of our successful clients have trained only at home. If you have a heavy enough pair of adjustable dumbbells at home, it will get the job done." },
    { q: "What if I eat out a lot or don't cook?", a: "The program caters especially to those with busy lives. The core skill you'll learn is 'how to eat'. We guide you on portion control and making the right food choices anywhere on earth, even at restaurants." },
    { q: "How fast will I see results?", a: "This depends on your starting point, but you will begin feeling better, more energetic, and seeing initial physical changes within the first 14 days of consistency." },
    { q: "How does the daily check-in work?", a: "You'll have a custom progress tracker to update every day (Weight, Calories, Protein). We stay connected directly on Telegram for daily chat/voice support, motivation, and exercise form correction." },
    { q: "Is the diet plan restrictive?", a: "Not at all. We believe in macro-based flexible dieting. You can eat your favorite foods as long as they fit within your daily caloric and macronutrient goals." }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="w-full bg-[#f8fafc] text-gray-900 py-16 md:py-24 px-4 md:px-8 lg:px-12 font-sans selection:bg-[#1a73e8] selection:text-white overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col relative">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-8 relative z-10">
          <div className="w-full md:w-3/5">
            <h4 className="text-[#1a73e8] font-bold text-sm tracking-widest uppercase mb-3">
              FAQ
            </h4>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-gray-900 mb-4">
              Frequently <span className="text-[#1a73e8]">Asked Questions</span>
            </h2>
            <p className="text-gray-500 text-base md:text-lg max-w-lg">
              Everything you need to know about starting your transformation journey.
            </p>
          </div>
          
          <div className="w-full md:w-2/5 flex justify-end relative h-[200px] md:h-[250px]">
             {/* Decorative Background Blob similar to reference */}
             <div className="absolute top-1/2 -translate-y-1/2 right-0 w-[150%] h-[150%] bg-[#f0f7ff] rounded-l-full -z-10 translate-x-12"></div>
             
             {/* Shaker & Dumbbell Image */}
             <img 
               src="/faq_equipment.png" 
               alt="Fitness Equipment" 
               className="h-full object-contain drop-shadow-2xl z-10 scale-110 md:scale-125 origin-right transition-all duration-700 hover:scale-[1.15] md:hover:scale-[1.35] hover:-translate-y-2 cursor-pointer" 
             />
          </div>
        </div>

        {/* 2-Column Layout */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-6 relative z-20">
          
          {/* Left Column */}
          <div className="flex-1 flex flex-col gap-4 md:gap-6">
            {faqs.filter((_, i) => i % 2 === 0).map((faq, idx) => {
              const index = idx * 2;
              const isOpen = openIndex === index;
              return (
                <div 
                  key={index} 
                  className={`bg-white rounded-2xl border transition-all duration-300 hover:shadow-md hover:-translate-y-1 ${isOpen ? 'border-[#1a73e8]/30 shadow-md ring-4 ring-[#1a73e8]/5' : 'border-gray-100 shadow-sm hover:border-gray-300'}`}
                >
                  <button 
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full p-5 md:p-6 flex items-start md:items-center justify-between text-left focus:outline-none"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-colors ${isOpen ? 'bg-[#1a73e8] text-white' : 'bg-[#f0f7ff] text-[#1a73e8]'}`}>
                        <MessageCircleQuestion className="w-5 h-5" />
                      </div>
                      <span className="text-sm md:text-base font-bold text-gray-800 pr-4">
                        {faq.q}
                      </span>
                    </div>
                    
                    <div className={`shrink-0 transition-transform duration-300 ${isOpen ? 'text-[#1a73e8]' : 'text-[#1a73e8]'}`}>
                      {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                    </div>
                  </button>
                  
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="pb-6 px-5 md:px-6 md:pl-[4.5rem]">
                          <p className="text-gray-500 text-sm leading-relaxed">
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

          {/* Right Column */}
          <div className="flex-1 flex flex-col gap-4 md:gap-6">
            {faqs.filter((_, i) => i % 2 === 1).map((faq, idx) => {
              const index = idx * 2 + 1;
              const isOpen = openIndex === index;
              return (
                <div 
                  key={index} 
                  className={`bg-white rounded-2xl border transition-all duration-300 hover:shadow-md hover:-translate-y-1 ${isOpen ? 'border-[#1a73e8]/30 shadow-md ring-4 ring-[#1a73e8]/5' : 'border-gray-100 shadow-sm hover:border-gray-300'}`}
                >
                  <button 
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full p-5 md:p-6 flex items-start md:items-center justify-between text-left focus:outline-none"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-colors ${isOpen ? 'bg-[#1a73e8] text-white' : 'bg-[#f0f7ff] text-[#1a73e8]'}`}>
                        <MessageCircleQuestion className="w-5 h-5" />
                      </div>
                      <span className="text-sm md:text-base font-bold text-gray-800 pr-4">
                        {faq.q}
                      </span>
                    </div>
                    
                    <div className={`shrink-0 transition-transform duration-300 ${isOpen ? 'text-[#1a73e8]' : 'text-[#1a73e8]'}`}>
                      {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                    </div>
                  </button>
                  
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="pb-6 px-5 md:px-6 md:pl-[4.5rem]">
                          <p className="text-gray-500 text-sm leading-relaxed">
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
      </div>
      

    </section>
  );
}
