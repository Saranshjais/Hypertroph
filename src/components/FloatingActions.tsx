"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, X, MessageSquare, Sparkles } from "lucide-react";

export default function FloatingActions() {
  const [isAiOpen, setIsAiOpen] = useState(false);

  return (
    <>
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8 z-50 flex flex-col gap-3 md:gap-4 items-end pointer-events-none">
        
        {/* Hypertroph AI Assistant Button */}
        <div className="pointer-events-auto">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsAiOpen(!isAiOpen)}
            className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-[#005580] to-[#003d5c] rounded-full shadow-[0_10px_25px_rgba(0,85,128,0.4)] flex items-center justify-center text-white border border-[#006699] relative group focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#020b14] focus-visible:ring-[#005580]"
          >
            {isAiOpen ? <X className="w-6 h-6" /> : <Bot className="w-6 h-6" />}
            
            {/* Tooltip */}
            <div className="absolute right-[calc(100%+16px)] top-1/2 -translate-y-1/2 px-4 py-2 bg-white text-gray-900 text-sm font-bold rounded-xl shadow-lg opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-300 whitespace-nowrap pointer-events-none border border-gray-100 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#005580]" />
              Ask AI Assistant
            </div>
            
            {/* Pulsing effect when closed */}
            {!isAiOpen && (
              <div className="absolute inset-0 rounded-full border-2 border-[#005580] animate-ping opacity-20"></div>
            )}
          </motion.button>
        </div>

        {/* WhatsApp Button */}
        <div className="pointer-events-auto">
          <motion.a 
            href="https://wa.me/918618097692" // Contact number
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-12 h-12 md:w-14 md:h-14 bg-[#25D366] rounded-full shadow-[0_10px_25px_rgba(37,211,102,0.4)] flex items-center justify-center text-white relative group focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#020b14] focus-visible:ring-[#25D366]"
          >
            <svg className="w-7 h-7 ml-[2px] mt-[2px]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
            </svg>
            
            {/* Tooltip */}
            <div className="absolute right-[calc(100%+16px)] top-1/2 -translate-y-1/2 px-4 py-2 bg-white text-gray-900 text-sm font-bold rounded-xl shadow-lg opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-300 whitespace-nowrap pointer-events-none border border-gray-100 flex items-center gap-2">
              Chat on WhatsApp
            </div>
          </motion.a>
        </div>
      </div>

      {/* Temporary AI Chat Interface Mockup */}
      <AnimatePresence>
        {isAiOpen && (
          <div className="fixed bottom-[130px] right-4 sm:bottom-[140px] sm:right-6 md:bottom-[150px] md:right-8 z-50 pointer-events-auto max-w-[calc(100vw-32px)]">
            <motion.div 
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="w-[320px] md:w-[380px] h-[450px] bg-white rounded-3xl shadow-[0_15px_40px_rgba(0,0,0,0.15)] border border-gray-100 flex flex-col overflow-hidden"
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-[#005580] to-[#003d5c] p-4 flex items-center justify-between text-white shadow-md z-10 relative">
                 <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <Sparkles className="w-5 h-5 text-[#ffb800]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-sm tracking-wide">Hypertroph AI</h3>
                      <p className="text-xs text-blue-200">Online & ready to help</p>
                    </div>
                 </div>
                 <button onClick={() => setIsAiOpen(false)} className="p-2 hover:bg-white/20 rounded-full transition-colors">
                    <X className="w-5 h-5" />
                 </button>
              </div>

              {/* Chat Area */}
              <div className="flex-1 bg-[#f8fbfe] p-4 flex flex-col gap-4 overflow-y-auto">
                 <div className="flex justify-start">
                    <div className="bg-white p-3 rounded-2xl rounded-tl-sm shadow-sm border border-gray-100 text-sm text-gray-700 max-w-[85%]">
                      Hey there! 👋 I'm the Hypertroph AI assistant. I can help you understand our methodology, pricing, or guide you through the enrollment process. What's on your mind?
                    </div>
                 </div>
              </div>

              {/* Input Area */}
              <div className="p-4 bg-white border-t border-gray-100 flex items-center gap-2">
                 <input 
                   type="text" 
                   placeholder="Ask me anything..." 
                   className="flex-1 bg-gray-50 border border-gray-200 rounded-full px-4 py-2.5 text-sm outline-none focus:border-[#005580] focus:ring-2 focus:ring-[#005580]/20 transition-all"
                 />
                 <button className="w-10 h-10 bg-[#005580] rounded-full flex items-center justify-center text-white hover:bg-[#003d5c] transition-colors shadow-md shrink-0">
                    <svg className="w-4 h-4 ml-[-2px] mt-[1px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                 </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
