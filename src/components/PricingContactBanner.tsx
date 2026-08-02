"use client";
import { MessageCircle, PhoneCall, Handshake, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface PricingContactBannerProps {
  title?: string;
  subtitle?: string;
}

export default function PricingContactBanner({ 
  title = "Have queries about pricing or plans?",
  subtitle = "Send a WhatsApp message, we reply under 24 hours."
}: PricingContactBannerProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");

  const handlePaymentRedirect = (e: React.FormEvent) => {
    e.preventDefault();
    if (phoneNumber.length < 10) {
      alert("Please enter a valid phone number.");
      return;
    }
    // Simulate redirection to payment gateway
    alert(`Redirecting to payment gateway to charge ₹99 for phone number: ${phoneNumber}`);
    setIsModalOpen(false);
    setPhoneNumber("");
  };
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
      <div className="flex flex-col lg:flex-row gap-6">
        
        {/* WhatsApp Banner - Modeled after screenshot */}
        <motion.div 
          whileHover={{ y: -5, scale: 1.01 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="flex-1 bg-[#fcdc73] rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm hover:shadow-xl hover:shadow-[#f5d053]/40 border border-[#f5d053] group cursor-pointer"
        >
          <div className="flex items-center gap-5 md:gap-6 w-full md:w-auto">
            <motion.div 
              className="w-14 h-14 md:w-16 md:h-16 bg-white/60 backdrop-blur-sm rounded-xl flex items-center justify-center shrink-0 border border-white/40 shadow-sm transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110"
            >
              <Handshake className="w-7 h-7 md:w-8 md:h-8 text-[#9c7a00]" />
            </motion.div>
            <div>
              <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-1 tracking-tight">{title}</h3>
              <p className="text-[#8a6c00] font-medium text-sm md:text-base border-b border-[#d4aa22] inline-block pb-0.5">
                {subtitle}
              </p>
            </div>
          </div>
          <a 
            href="https://wa.me/919876543210?text=Hi!%20I%20have%20a%20query%20about%20your%20pricing%20plans." 
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto shrink-0 bg-[#004e7c] hover:bg-[#003d63] text-white font-bold px-6 py-3.5 md:py-4 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 uppercase tracking-widest text-xs md:text-sm shadow-md group-hover:shadow-[0_10px_25px_rgba(0,78,124,0.4)] group-hover:-translate-y-1"
          >
            <MessageCircle size={18} className="group-hover:animate-bounce" />
            Message on WhatsApp
          </a>
        </motion.div>

        {/* Priority Call Banner */}
        <motion.div 
          whileHover={{ y: -5, scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="lg:w-[400px] bg-white rounded-2xl p-6 md:p-8 flex flex-col justify-center shadow-lg hover:shadow-2xl border border-gray-100 relative overflow-hidden group cursor-pointer"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full translate-x-16 -translate-y-16 group-hover:scale-[2] transition-transform duration-700 ease-out"></div>
          
          <div className="flex items-center gap-3 mb-3 relative z-10">
            <div className="w-8 h-8 rounded-full bg-[#005580]/10 flex items-center justify-center text-[#005580] transition-colors duration-300 group-hover:bg-[#005580] group-hover:text-white">
              <PhoneCall size={16} className="group-hover:animate-pulse" />
            </div>
            <h3 className="text-lg font-black text-gray-900 tracking-tight">Need urgent help?</h3>
          </div>
          
          <p className="text-gray-500 text-sm mb-5 relative z-10">
            Get a guaranteed priority callback from our assistant within 4 hours.
          </p>
          
          <button 
            onClick={() => setIsModalOpen(true)}
            className="w-full bg-white border-2 border-[#005580] hover:bg-[#005580] text-[#005580] hover:text-white font-bold px-6 py-3.5 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 uppercase tracking-widest text-xs shadow-sm relative z-10 group-hover:shadow-[0_8px_20px_rgba(0,85,128,0.25)]"
          >
            Request Priority Call - ₹99
          </button>
        </motion.div>

      </div>

      {/* Priority Call Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 z-[100] flex items-center justify-center p-4 backdrop-blur-sm"
          >
            <motion.div 
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="bg-white rounded-[2rem] p-8 w-full max-w-md shadow-2xl relative overflow-hidden"
            >
              {/* Close Button */}
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-6 right-6 text-gray-400 hover:text-gray-900 bg-gray-100 hover:bg-gray-200 p-2 rounded-full transition-colors"
              >
                <X size={20} />
              </button>

              <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-[#005580] mb-6">
                <PhoneCall size={24} />
              </div>
              
              <h2 className="text-2xl font-black text-gray-900 mb-2 tracking-tight">Priority Callback</h2>
              <p className="text-gray-500 mb-8 text-sm">
                Enter your phone number below. You will be redirected to pay a ₹99 fee to guarantee a callback within 4 hours.
              </p>
              
              <form onSubmit={handlePaymentRedirect} className="space-y-5">
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-widest mb-2">
                    Your Phone Number
                  </label>
                  <div className="flex relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-bold">+91</span>
                    <input 
                      type="tel"
                      required
                      placeholder="98765 43210"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, ''))}
                      className="w-full border-2 border-gray-200 rounded-xl py-3.5 pl-14 pr-4 text-gray-900 font-medium focus:border-[#005580] focus:ring-0 outline-none transition-colors"
                    />
                  </div>
                </div>
                
                <button 
                  type="submit"
                  className="w-full py-4 rounded-xl font-bold text-white bg-gradient-to-r from-[#005580] to-[#003d5c] hover:from-[#004466] hover:to-[#002b40] transition-colors uppercase tracking-widest text-sm shadow-[0_10px_20px_rgba(0,85,128,0.2)] flex items-center justify-center gap-2 mt-4"
                >
                  Proceed to Payment - ₹99
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
