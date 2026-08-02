"use client";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState("Home");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Transformations", href: "/transformations" },
    { name: "Pricing", href: "/pricing" },
    { name: "Blog", href: "/blog" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" }
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 sm:px-6 md:px-8 pt-4 md:pt-6 pointer-events-none">
      <motion.header 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100, damping: 20 }}
        className={`w-full max-w-7xl pointer-events-auto transition-all duration-500 rounded-2xl md:rounded-full px-4 md:px-8 ${
          scrolled 
            ? "bg-white/80 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,85,128,0.1)] border border-white/50 py-3" 
            : "bg-white/95 shadow-xl border border-gray-100 py-4 md:py-5"
        }`}
      >
        <div className="flex items-center justify-between">
          
          <div className="flex items-center">
            {/* Premium Logo */}
            <Link href="/" onClick={() => setActiveItem("Home")}>
              <motion.div 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-3 cursor-pointer group"
              >
                <div className="w-10 h-10 md:w-11 md:h-11 relative flex-shrink-0 flex items-center justify-center">
                   <img src="/logo.png" alt="Hypertroph Logo" className="w-full h-full object-contain drop-shadow-sm" />
                </div>
                <span className="font-black text-lg md:text-xl tracking-tight text-gray-900 group-hover:text-[#005580] transition-colors">
                  HYPERTROPH
                </span>
              </motion.div>
            </Link>
          </div>
          
          <div className="hidden lg:flex items-center space-x-2">
            {navItems.map((item) => (
              <Link key={item.name} href={item.href} passHref>
                <motion.div 
                  onClick={() => setActiveItem(item.name)}
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(0, 85, 128, 0.05)" }}
                  className={`relative px-4 py-2 rounded-full font-bold text-xs xl:text-sm uppercase tracking-widest transition-colors cursor-pointer inline-block ${
                    activeItem === item.name ? "text-[#005580]" : "text-gray-500 hover:text-[#005580]"
                  }`}
                >
                  {item.name}
                  {activeItem === item.name && (
                    <motion.div 
                      layoutId="underline" 
                      className="absolute bottom-1 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-[#005580] rounded-full"
                    />
                  )}
                </motion.div>
              </Link>
            ))}
            
            <div className="pl-4">
              <Link href="/apply">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3.5 bg-gradient-to-r from-[#005580] to-[#003d5c] text-white font-bold text-xs uppercase tracking-widest rounded-full shadow-[0_8px_20px_rgba(0,85,128,0.3)] hover:shadow-[0_8px_25px_rgba(0,85,128,0.4)] border border-[#006699] transition-shadow relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out"></div>
                  <span className="relative z-10">Enroll Now</span>
                </motion.button>
              </Link>
            </div>
          </div>
          
          <div className="lg:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-[#005580] p-2 hover:bg-blue-50 rounded-full transition-colors">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
        
        {/* Premium Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden mt-4 pt-4 border-t border-gray-100 overflow-hidden"
            >
              <div className="flex flex-col space-y-2 pb-4">
                {navItems.map((item) => (
                  <Link 
                    key={item.name} 
                    href={item.href}
                    onClick={() => {
                      setActiveItem(item.name);
                      setIsOpen(false);
                    }}
                    className={`block px-4 py-3 text-sm font-bold uppercase tracking-widest rounded-xl transition-colors ${
                      activeItem === item.name 
                        ? "text-[#005580] bg-blue-50 font-black" 
                        : "text-gray-500 hover:text-[#005580] hover:bg-gray-50"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                
                <Link href="/apply" className="w-full mt-4">
                  <button className="w-full px-6 py-4 bg-gradient-to-r from-[#005580] to-[#003d5c] text-white font-bold text-sm uppercase tracking-widest rounded-xl shadow-lg shadow-[#005580]/20 relative overflow-hidden">
                    Enroll Now
                  </button>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </div>
  );
}
