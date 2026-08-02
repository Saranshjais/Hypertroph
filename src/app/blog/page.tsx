"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, Mail } from "lucide-react";

const posts = [
  {
    title: "The Subtle Art of Natural Fitness. (To look good naked till 90!)",
    date: "December 20, 2023",
    category: "Lifestyle Design",
    image: "https://cdn.prod.website-files.com/62567ad9c137080b9868b17b/658278f4a27d41a4a6b21f44_pexels-the-lazy-artist-gallery-999309.jpg",
    slug: "#"
  },
  {
    title: "How to Automate Fitness in Life (For next 75 years!)",
    date: "December 6, 2023",
    category: "Lifestyle Design",
    image: "https://cdn.prod.website-files.com/62567ad9c137080b9868b17b/657006eb16cbe2631a0366d1_pexels-victor-freitas-703012.jpg",
    slug: "#"
  },
  {
    title: "95% Indians will never have a Fit Body. (Until this 1 Attitude Change)",
    date: "November 22, 2023",
    category: "Lifestyle Design",
    image: "https://cdn.prod.website-files.com/62567ad9c137080b9868b17b/655d6e495d0ff20a79d65854_pexels-victor-freitas-2261483.jpg",
    slug: "#"
  },
  {
    title: "The Best Fat Burner Cardio",
    date: "April 6, 2023",
    category: "Fat Loss",
    image: "https://cdn.prod.website-files.com/62567ad9c137080b9868b17b/642e5b55dc5ff6a70bbe6c22_pexels-andrea-piacquadio-3836831.jpg",
    slug: "#"
  },
  {
    title: "The diet plan for your Non-Workout days",
    date: "March 29, 2023",
    category: "Nutrition",
    image: "https://cdn.prod.website-files.com/62567ad9c137080b9868b17b/6423ca5798e25f3e6132e945_pexels-karolina-grabowska-4378331%20(2).jpg",
    slug: "#"
  },
  {
    title: "Top 10 Diet Rules to Look Good Naked",
    date: "March 19, 2023",
    category: "Nutrition",
    image: "https://cdn.prod.website-files.com/62567ad9c137080b9868b17b/641693b2f4c83fa685fdccfc_pexels-krishnajith-4137772-min.jpg",
    slug: "#"
  },
  {
    title: "The secret that makes \"discipline\" effortless",
    date: "March 16, 2023",
    category: "Lifestyle Design",
    image: "https://cdn.prod.website-files.com/62567ad9c137080b9868b17b/6412bec642451d11e18aa941_pexels-lukas-296282.jpg",
    slug: "#"
  },
  {
    title: "The only \"correct way\" to gain muscle as a natural lifter | Lean Bulking VS Dirty Bulking",
    date: "March 7, 2023",
    category: "Bulking",
    image: "https://cdn.prod.website-files.com/62567ad9c137080b9868b17b/64072a272ae32f6f6fec92b4_pexels-pixabay-50597.jpg",
    slug: "#"
  },
  {
    title: "3 Reasons why you should limit Cardio during Fat-loss",
    date: "May 21, 2022",
    category: "Fat Loss",
    image: "https://cdn.prod.website-files.com/62567ad9c137080b9868b17b/62887516136f61a05a96fe60_cardio12.jpeg",
    slug: "#"
  },
  {
    title: "A Great Workout program depends on these 3 variables : Volume, Frequency & Intensity",
    date: "May 21, 2022",
    category: "Training",
    image: "https://cdn.prod.website-files.com/62567ad9c137080b9868b17b/62887207a920a98694abaa85_bench.jpeg",
    slug: "#"
  },
  {
    title: "Protein 101: How much protein a day do you really need?",
    date: "April 14, 2022",
    category: "Nutrition",
    image: "https://cdn.prod.website-files.com/62567ad9c137080b9868b17b/6257c7e94e9d3cbcba4051d6_diet-695723_1920.jpg",
    slug: "#"
  }
];

export default function BlogPage() {
  return (
    <main className="bg-[#f9f8f6] text-gray-900 font-sans min-h-screen selection:bg-[#5e7141] selection:text-white">
      <Header />
      
      {/* Newsletter Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-white">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-[20%] -left-[10%] w-[60%] h-[80%] rounded-full bg-gradient-to-br from-[#f0f7ff] to-transparent blur-[120px] opacity-70" />
          <div className="absolute -bottom-[20%] -right-[10%] w-[60%] h-[80%] rounded-full bg-gradient-to-tl from-[#fdfbf7] to-transparent blur-[120px] opacity-70" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1200px] relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            
            {/* Left Content */}
            <div className="flex-1 text-center lg:text-left">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#f0f7ff] border border-[#e8f0fe] mb-8"
              >
                <Mail className="w-4 h-4 text-[#1a73e8]" />
                <span className="text-sm font-bold text-[#1a73e8] tracking-wide uppercase">Hypertroph Insider</span>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-gray-900 mb-6 leading-[1.1]"
              >
                JOIN 11,000+ members <br className="hidden md:block" />
                <span className="text-[#1a73e8]">GET 2 FREE GUIDES!</span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed"
              >
                Get powerful ideas to optimise your health, organise your routines & build your FitnessOS. Expect more raw & unfiltered content straight from my pen to your inbox. No algorithms, no spam, no ads.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="w-full max-w-md mx-auto lg:mx-0 bg-white border border-gray-200 rounded-2xl p-2 flex flex-col sm:flex-row gap-2 shadow-[0_8px_30px_rgb(0,0,0,0.04)] focus-within:border-[#1a73e8] focus-within:ring-4 focus-within:ring-[#1a73e8]/10 transition-all"
              >
                <div className="flex-1 flex items-center px-4">
                  <input 
                    type="text" 
                    placeholder="First Name" 
                    className="w-full bg-transparent text-gray-900 placeholder:text-gray-400 outline-none text-base h-12 sm:h-auto border-b sm:border-b-0 sm:border-r border-gray-100 sm:pr-4 mr-4 focus:border-[#1a73e8]"
                  />
                  <input 
                    type="email" 
                    placeholder="Email Address" 
                    className="w-full bg-transparent text-gray-900 placeholder:text-gray-400 outline-none text-base h-12 sm:h-auto"
                  />
                </div>
                <button className="bg-[#1a73e8] hover:bg-[#1557b0] transition-colors text-white font-bold uppercase tracking-wider px-8 py-4 sm:py-3 rounded-xl flex items-center justify-center gap-2 group whitespace-nowrap">
                  Subscribe
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            </div>

            {/* Right Content / Image mockup */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex-[0.8] relative"
            >
              <div className="relative w-full aspect-[4/3] rounded-3xl bg-gradient-to-tr from-[#f0f7ff] to-white border border-gray-100 shadow-xl overflow-hidden flex items-center justify-center p-8">
                 {/* eslint-disable-next-line @next/next/no-img-element */}
                 <img 
                   src="https://cdn.prod.website-files.com/6239ab5cb7abfd53c936ae7a/647b4b4dc76f1361848b4d6a_guidebooks.png" 
                   alt="Free Guides Mockup" 
                   className="w-full h-full object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-700 ease-out"
                 />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Blog Grid Section */}
      <section className="py-24 bg-[#f9f8f6]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1200px]">
          
          <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-gray-200 pb-8">
            <div>
               <h2 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight mb-3">PAST ISSUES</h2>
               <p className="text-gray-500 font-medium text-lg">Browse our archive of actionable fitness insights.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {posts.map((post, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group flex flex-col h-full bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1"
              >
                {/* Image */}
                <Link href={post.slug} className="block relative w-full aspect-[16/10] overflow-hidden bg-gray-100">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  {/* Category Pill Overlaid */}
                  <div className="absolute top-4 left-4 z-10 px-3 py-1.5 bg-white/90 backdrop-blur-md rounded-full shadow-sm">
                     <span className="text-[11px] font-bold text-gray-900 uppercase tracking-widest">{post.category}</span>
                  </div>
                </Link>
                
                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#1a73e8]" />
                    <span className="text-sm font-semibold text-gray-500">{post.date}</span>
                  </div>
                  
                  <Link href={post.slug} className="group-hover:text-[#1a73e8] transition-colors">
                    <h3 className="text-xl font-bold text-gray-900 leading-snug mb-4 line-clamp-3">
                      {post.title}
                    </h3>
                  </Link>

                  <div className="mt-auto pt-6 border-t border-gray-100 flex items-center justify-between">
                    <Link href={post.slug} className="text-[#1a73e8] font-bold text-sm uppercase tracking-wider flex items-center gap-2 group-hover:gap-3 transition-all">
                      Read Article
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
