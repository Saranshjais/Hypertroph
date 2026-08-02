"use client";
import { Dumbbell, LineChart, Flame, Utensils, Sliders, MessageCircle } from "lucide-react";
import { motion, useScroll } from "framer-motion";
import { useRef } from "react";

export default function Method() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const pillars = [
    {
      num: "01",
      icon: <Dumbbell className="w-5 h-5 text-[#ffb800]" strokeWidth={2} />,
      title: "PERSONAL TRAINING",
      desc: "Burn Fat rapidly using science based workouts. Stop wasting hours in the gym on useless exercises. Daily 1-on-1 Exercise Feedback so you learn to train safely, effectively & efficiently! Fully Customised plan according to your body & gym."
    },
    {
      num: "02",
      icon: <Utensils className="w-5 h-5 text-[#ffb800]" strokeWidth={2} />,
      title: "DIET PLAN",
      desc: "Regular Indian Diet - No fancy foods. Multiple options in each meal. Calories, Protein all done for you. Nothing left to guesswork. Every vitamin covered. Learn how to eat for life based on foods you prefer and enjoy. Goal is to forget diet plans & Become a skillful eater."
    },
    {
      num: "03",
      icon: <Sliders className="w-5 h-5 text-[#ffb800]" strokeWidth={2} />,
      title: "PLAN CHANGES",
      desc: "Changes to your training & diet plan are made as and when required, we constantly monitor your training and progress."
    },
    {
      num: "04",
      icon: <LineChart className="w-5 h-5 text-[#ffb800]" strokeWidth={2} />,
      title: "PROGRESS TRACKING",
      desc: "Daily progress tracking, we don't miss anything. Regular progress assessment & check-in system, so you continue to make rapid progress and course adjust as & when needed."
    },
    {
      num: "05",
      icon: <MessageCircle className="w-5 h-5 text-[#ffb800]" strokeWidth={2} />,
      title: "DAILY COACHING SUPPORT",
      desc: "Daily coaching support at your finger tips. Exercise correction, meal feedback, mindset priming. Any challenge you face, any query you face anytime, we are there to resolve it. Organised communication, everything at one place on our telegram chat."
    },
    {
      num: "06",
      icon: <Flame className="w-5 h-5 text-[#ffb800]" strokeWidth={2} />,
      title: "MOTIVATION & ACCOUNTABILITY",
      desc: "We are just one text away anytime you face inner resistance. Monthly check-In calls to make sure your journey is going smooth."
    }
  ];

  return (
    <section ref={containerRef} id="method" className="relative bg-[#020b14] text-white selection:bg-[#ffb800] selection:text-black">
      
      {/* Background ambient glow */}
      <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-[#005580]/20 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row relative">
        
        {/* Left Side: Sticky Title */}
        <div className="w-full lg:w-[45%] lg:sticky lg:top-0 h-auto lg:h-[100svh] flex flex-col justify-center pt-24 pb-12 lg:py-0 relative z-20 pr-0 lg:pr-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm font-bold uppercase text-[#ffb800] tracking-[0.3em] mb-4 flex items-center">
              <span className="w-8 h-0.5 bg-[#ffb800] mr-4 inline-block"></span>
              The Architecture
            </h2>
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black uppercase text-white tracking-tighter leading-[1.05]">
              How Coaching <br className="hidden lg:block"/> Works
            </h3>
            <p className="mt-4 sm:mt-6 text-gray-400 text-base sm:text-lg md:text-xl font-medium leading-relaxed max-w-md">
              A meticulously engineered system designed to guarantee your physical transformation without the guesswork.
            </p>
          </motion.div>
        </div>

        {/* Right Side: Interactive Scrolling Journey - Height Reduced */}
        <div className="w-full lg:w-[55%] pb-12 lg:py-12 relative z-10 flex flex-col gap-6 lg:gap-6 mt-12 lg:mt-0">
           
           {/* The glowing progress line connecting the dots */}
           {/* Perfectly aligned to left-4 on sm, left-8 on lg */}
           <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-0.5 bg-white/10 hidden sm:block">
              <motion.div 
                style={{ scaleY: scrollYProgress, transformOrigin: 'top' }} 
                className="w-full h-full bg-gradient-to-b from-[#ffb800] via-[#00aaff] to-transparent shadow-[0_0_15px_rgba(255,184,0,0.8)]" 
              />
           </div>

           {pillars.map((pillar, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0.2, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ margin: "-20% 0px -20% 0px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative pl-0 sm:pl-20 lg:pl-24 group"
              >
                {/* Node Dot - Perfectly aligned over the line */}
                <div className="absolute left-4 sm:left-8 top-8 -translate-x-1/2 w-4 h-4 rounded-full bg-[#020b14] border-[3px] border-[#1a2e40] group-hover:border-[#ffb800] transition-colors duration-500 z-20 hidden sm:flex items-center justify-center shadow-[0_0_10px_rgba(0,0,0,0.5)]">
                   <div className="w-1.5 h-1.5 bg-[#ffb800] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-[0_0_10px_rgba(255,184,0,1)]"></div>
                </div>

                {/* Content Card */}
                <div className="bg-gradient-to-br from-[#0c1a29] to-[#06101a] border border-white/5 rounded-3xl p-5 sm:p-6 shadow-2xl relative overflow-hidden group-hover:border-white/10 transition-colors duration-500">
                  
                  {/* Subtle hover gradient */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#005580]/0 to-[#005580]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0"></div>

                  {/* Massive Number Watermark moved inside the card to prevent layout collisions */}
                  <div className="absolute -top-2 -right-2 text-[4rem] sm:text-[6rem] font-black opacity-[0.03] pointer-events-none z-0 select-none text-white leading-none">
                    {pillar.num}
                  </div>

                  <div className="w-10 h-10 rounded-xl bg-[#005580]/20 flex items-center justify-center mb-3 relative z-10 border border-[#005580]/30 group-hover:bg-[#005580]/40 transition-colors duration-500 shadow-inner">
                    {pillar.icon}
                  </div>
                  
                  <h4 className="text-base sm:text-lg font-black text-white mb-1.5 uppercase tracking-wide relative z-10">
                    {pillar.title}
                  </h4>
                  
                  <p className="text-gray-400 leading-relaxed text-xs sm:text-sm relative z-10 font-medium">
                    {pillar.desc}
                  </p>
                </div>
              </motion.div>
           ))}
        </div>

      </div>
    </section>
  );
}
