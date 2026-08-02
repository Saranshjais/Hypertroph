"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
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
      {/* Blog Hero */}
      <section className="pt-32 pb-16 lg:pt-48 lg:pb-20 bg-[#f9f8f6] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#1a73e8]/5 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#ffb800]/5 rounded-full blur-[100px]" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1200px] relative z-10 text-center">
           <motion.h1 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6 }}
             className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter text-gray-900 mb-6 uppercase"
           >
             The Fitness <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1a73e8] to-[#1557b0]">Journal</span>
           </motion.h1>
           <motion.p 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6, delay: 0.1 }}
             className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed font-medium"
           >
             Actionable insights, raw advice, and science-backed strategies to optimise your health and build your ultimate physique.
           </motion.p>
        </div>
      </section>

      {/* Blog Grid Section */}
      <section className="pb-24 bg-[#f9f8f6]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1200px]">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
                className="group flex flex-col h-full bg-white rounded-3xl overflow-hidden shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-2 border border-gray-100/50"
              >
                {/* Image */}
                <Link href={post.slug} className="block relative w-full aspect-[16/11] overflow-hidden bg-gray-100">
                  <Image 
                    src={post.image} 
                    alt={post.title} 
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  {/* Category Pill Overlaid */}
                  <div className="absolute top-4 left-4 z-10 px-4 py-1.5 bg-white/95 backdrop-blur-md rounded-full shadow-sm">
                     <span className="text-[11px] font-black text-gray-900 uppercase tracking-widest">{post.category}</span>
                  </div>
                </Link>
                
                {/* Content */}
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#1a73e8]" />
                    <span className="text-sm font-bold text-gray-400 uppercase tracking-wider">{post.date}</span>
                  </div>
                  
                  <Link href={post.slug} className="group-hover:text-[#1a73e8] transition-colors">
                    <h3 className="text-xl font-black text-gray-900 leading-snug mb-4 line-clamp-3">
                      {post.title}
                    </h3>
                  </Link>

                  <div className="mt-auto pt-6 flex items-center justify-between">
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
