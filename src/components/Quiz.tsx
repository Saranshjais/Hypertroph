"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Check, Flame } from "lucide-react";

export default function Quiz() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [goal, setGoal] = useState("");
  const [struggle, setStruggle] = useState("");
  const [phone, setPhone] = useState("");

  const handleNext = () => setStep(step + 1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(4);
  };

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="px-8 md:px-12 py-4 md:py-5 bg-orange-600 text-white font-black uppercase tracking-widest hover:bg-orange-500 transition-colors rounded-lg text-sm md:text-base w-full sm:w-auto shadow-[0_0_30px_rgba(234,88,12,0.3)]"
      >
        Start Assessment
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "100%" }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[100] bg-neutral-950 text-white flex flex-col h-[100svh] overflow-y-auto"
          >
            {/* Modal Header */}
            <div className="flex justify-between items-center p-4 md:p-8 border-b border-white/10 shrink-0 bg-black">
              <span className="text-lg md:text-xl font-black tracking-tighter text-white">HYPERTROPH<span className="text-orange-600">.</span></span>
              <button onClick={() => setIsOpen(false)} className="text-xs md:text-sm font-bold uppercase tracking-widest text-neutral-500 hover:text-white transition-colors p-2">Close</button>
            </div>

            {/* Quiz Container */}
            <div className="flex-1 flex flex-col justify-center p-4 md:p-8 min-h-0 relative">
              <div className="w-full max-w-2xl mx-auto h-full flex items-center">
                <AnimatePresence mode="wait">
                  
                  {step === 1 && (
                    <motion.div 
                      key="step1"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-6 md:space-y-8 w-full"
                    >
                      <h3 className="text-2xl sm:text-3xl md:text-5xl font-black uppercase mb-6 md:mb-12 leading-tight text-white">1. What is your primary physical goal?</h3>
                      <div className="space-y-3 md:space-y-4">
                        {["Lose Fat rapidly", "Build Muscle & Size", "Total Body Recomposition"].map((option) => (
                          <button
                            key={option}
                            onClick={() => { setGoal(option); handleNext(); }}
                            className="w-full p-4 md:p-6 text-left border-2 border-white/10 rounded-xl hover:border-orange-500 hover:bg-orange-500/10 transition-all duration-300 text-lg md:text-xl font-bold group flex justify-between items-center"
                          >
                            {option}
                            <ArrowRight className="text-orange-500 opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity w-5 h-5" />
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {step === 2 && (
                    <motion.div 
                      key="step2"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-6 md:space-y-8 w-full"
                    >
                      <h3 className="text-2xl sm:text-3xl md:text-5xl font-black uppercase mb-6 md:mb-12 leading-tight text-white">2. What is your biggest barrier?</h3>
                      <div className="space-y-3 md:space-y-4">
                        {["Diet Consistency & Cravings", "Don't know what to do at the gym", "No time to cook/meal prep"].map((option) => (
                          <button
                            key={option}
                            onClick={() => { setStruggle(option); handleNext(); }}
                            className="w-full p-4 md:p-6 text-left border-2 border-white/10 rounded-xl hover:border-orange-500 hover:bg-orange-500/10 transition-all duration-300 text-lg md:text-xl font-bold group flex justify-between items-center"
                          >
                            <span className="pr-4">{option}</span>
                            <ArrowRight className="text-orange-500 opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity w-5 h-5 shrink-0" />
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {step === 3 && (
                    <motion.div 
                      key="step3"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-6 md:space-y-8 w-full"
                    >
                      <h3 className="text-2xl sm:text-3xl md:text-5xl font-black uppercase mb-2 md:mb-4 leading-tight text-white">3. Assessment Complete.</h3>
                      <p className="text-base md:text-xl text-neutral-400 mb-8 md:mb-12 font-medium">Enter your WhatsApp number to receive your coaching consultation.</p>
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <input
                          type="tel"
                          placeholder="+91 Phone Number"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="w-full p-4 md:p-6 bg-black/50 border-2 border-white/10 rounded-xl text-xl md:text-3xl text-white placeholder-neutral-700 focus:outline-none focus:border-orange-500 transition-colors font-bold"
                        />
                        <button
                          type="submit"
                          className="w-full p-4 md:p-6 bg-orange-600 text-white font-black uppercase tracking-widest text-sm md:text-xl hover:bg-orange-500 transition-colors rounded-xl"
                        >
                          Send My Results
                        </button>
                      </form>
                    </motion.div>
                  )}

                  {step === 4 && (
                    <motion.div 
                      key="step4"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center space-y-6 md:space-y-8 w-full"
                    >
                      <div className="w-16 h-16 md:w-24 md:h-24 bg-orange-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 md:mb-8">
                        <Check className="w-8 h-8 md:w-12 md:h-12" strokeWidth={3} />
                      </div>
                      <h3 className="text-3xl md:text-6xl font-black uppercase tracking-tighter">Received.</h3>
                      <p className="text-base md:text-xl text-neutral-400 font-medium">Coach Siddharth's team is reviewing your inputs. We will reach out on WhatsApp shortly.</p>
                      <button onClick={() => setIsOpen(false)} className="mt-8 md:mt-12 px-6 md:px-8 py-3 md:py-4 border-2 border-white/20 rounded-xl text-white font-bold uppercase tracking-widest hover:bg-white/10 transition-colors text-xs md:text-base">
                        Return to Site
                      </button>
                    </motion.div>
                  )}

                </AnimatePresence>
              </div>
            </div>

            {/* Progress Footer */}
            {step < 4 && (
              <div className="p-4 md:p-8 flex gap-2 shrink-0 max-w-2xl mx-auto w-full">
                {[1, 2, 3].map((i) => (
                  <div key={i} className={`h-1.5 rounded-full flex-1 transition-colors duration-500 ${i <= step ? "bg-orange-600" : "bg-white/10"}`} />
                ))}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
