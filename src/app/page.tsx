"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

import Method from "@/components/Method";
import Transformations from "@/components/Transformations";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-[#f9f8f6] text-gray-900 font-sans antialiased overflow-x-hidden selection:bg-[#5e7141] selection:text-white">
      <Header />
      
      <Hero />

      <Transformations />

      {/* Other Sections */}
      <Method />
      <Testimonials />
      <FAQ />

      <Footer />
    </main>
  );
}
