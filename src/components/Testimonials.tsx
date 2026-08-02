"use client";

import { Quote } from "lucide-react";
import { motion } from "framer-motion";

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Nitish Rajput",
      role: "Youtuber",
      image: "/nitish.jpg",
      quote: "After working with Hypertroph, fitness feels effortless.\n\nEvery thing I learned is so logical, so simple, that now it doesn't make sense to live life any other way.",
    },
    {
      id: 2,
      name: "Harman",
      role: "IG - @hustlewithharman",
      image: "/harman.avif",
      quote: "I never got visible results in gym, despite many attempts.\n\nThen I discovered Hypertroph, and he simplified the whole game of fitness and diet for me. Hypertroph changed my life.",
    }
  ];

  return (
    <section className="w-full bg-[#f8fafc] py-16 md:py-24 px-4 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto flex flex-col xl:flex-row gap-6 md:gap-8 justify-center items-stretch">
        {testimonials.map((t, index) => (
          <motion.div 
            key={t.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white shadow-[0_4px_25px_rgba(0,0,0,0.03)] rounded-3xl flex flex-col sm:flex-row overflow-hidden border border-gray-100 flex-1 max-w-2xl mx-auto w-full"
          >
            <div className="w-full sm:w-2/5 shrink-0 h-64 sm:h-auto relative">
              <img 
                src={t.image} 
                alt={t.name} 
                className="w-full h-full object-cover absolute inset-0"
              />
            </div>
            <div className="p-6 md:p-8 flex flex-col justify-between flex-1 relative">
              <div>
                <Quote className="w-10 h-10 text-blue-50 absolute top-4 left-4 -z-0 rotate-180" />
                <p className="text-gray-700 text-sm md:text-base leading-relaxed relative z-10 whitespace-pre-wrap">
                  {t.quote}
                </p>
              </div>
              <div className="mt-8 text-right relative z-10">
                <h4 className="font-bold text-gray-900 text-sm md:text-base">{t.name}</h4>
                <p className="text-gray-400 text-xs md:text-sm mt-0.5">{t.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
