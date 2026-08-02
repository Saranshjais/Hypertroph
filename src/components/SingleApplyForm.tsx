"use client";

import { useState } from "react";
import { Check, ArrowRight, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function SingleApplyForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate network request
    await new Promise(resolve => setTimeout(resolve, 1500));
    // Redirect to checkout page
    window.location.href = "/checkout";
  };

  return (
    <div className="w-full max-w-4xl mx-auto bg-white/[0.02] backdrop-blur-3xl border border-white/10 rounded-[2rem] p-6 md:p-12 shadow-2xl relative overflow-hidden">
      
      {/* Subtle internal glowing corner */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white/[0.03] to-transparent pointer-events-none"></div>

      <div className="relative z-10 w-full">
        <h2 className="text-2xl md:text-4xl font-black text-white mb-3 tracking-tight">
          Apply for Coaching
        </h2>
        <p className="text-gray-400 mb-8 text-sm md:text-base">
          Fill out this single-page form to see if you qualify for the Hypertroph Transformation Program.
        </p>

        <form onSubmit={handleSubmit} className="space-y-8">
          
          {/* Section 1: Basic Info */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-[#00f2fe] border-b border-white/10 pb-2">Personal Details</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold tracking-wider uppercase text-gray-400">Full Name *</label>
                <input required type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:border-[#00f2fe] outline-none transition-colors" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold tracking-wider uppercase text-gray-400">Email Address *</label>
                <input required type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:border-[#00f2fe] outline-none transition-colors" placeholder="john@example.com" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold tracking-wider uppercase text-gray-400">WhatsApp Number *</label>
                <input required type="tel" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:border-[#00f2fe] outline-none transition-colors" placeholder="+91 98765 43210" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold tracking-wider uppercase text-gray-400">Age & Gender *</label>
                <div className="flex gap-3">
                  <input required type="number" min="16" max="99" className="w-20 shrink-0 bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:border-[#00f2fe] outline-none transition-colors [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" placeholder="Age" />
                  <div className="flex w-full gap-2">
                    <label className="flex-1 cursor-pointer">
                      <input type="radio" name="gender" value="male" className="peer sr-only" required />
                      <div className="w-full text-center py-2.5 text-sm rounded-xl border border-white/10 text-gray-400 peer-checked:bg-[#00f2fe]/20 peer-checked:text-[#00f2fe] peer-checked:border-[#00f2fe]/50 hover:bg-white/5 transition-colors font-medium">Male</div>
                    </label>
                    <label className="flex-1 cursor-pointer">
                      <input type="radio" name="gender" value="female" className="peer sr-only" required />
                      <div className="w-full text-center py-2.5 text-sm rounded-xl border border-white/10 text-gray-400 peer-checked:bg-[#00f2fe]/20 peer-checked:text-[#00f2fe] peer-checked:border-[#00f2fe]/50 hover:bg-white/5 transition-colors font-medium">Female</div>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 2: Goals */}
          <div className="space-y-6 pt-6">
            <h3 className="text-lg font-bold text-[#00f2fe] border-b border-white/10 pb-2">Fitness Goals</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold tracking-wider uppercase text-gray-400">Primary Goal *</label>
                <div className="grid grid-cols-2 gap-2">
                  <label className="cursor-pointer">
                    <input type="radio" name="primary_goal" value="fat_loss" className="peer sr-only" required />
                    <div className="w-full text-center px-2 py-2.5 text-sm rounded-xl border border-white/10 text-gray-400 peer-checked:bg-[#00f2fe]/20 peer-checked:text-[#00f2fe] peer-checked:border-[#00f2fe]/50 hover:bg-white/5 transition-colors font-medium">Fat Loss</div>
                  </label>
                  <label className="cursor-pointer">
                    <input type="radio" name="primary_goal" value="muscle_gain" className="peer sr-only" required />
                    <div className="w-full text-center px-2 py-2.5 text-sm rounded-xl border border-white/10 text-gray-400 peer-checked:bg-[#00f2fe]/20 peer-checked:text-[#00f2fe] peer-checked:border-[#00f2fe]/50 hover:bg-white/5 transition-colors font-medium">Muscle Gain</div>
                  </label>
                  <label className="cursor-pointer col-span-2">
                    <input type="radio" name="primary_goal" value="lifestyle" className="peer sr-only" required />
                    <div className="w-full text-center px-2 py-2.5 text-sm rounded-xl border border-white/10 text-gray-400 peer-checked:bg-[#00f2fe]/20 peer-checked:text-[#00f2fe] peer-checked:border-[#00f2fe]/50 hover:bg-white/5 transition-colors font-medium">Lifestyle Reset</div>
                  </label>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold tracking-wider uppercase text-gray-400">Current & Goal Weight *</label>
                <input required type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:border-[#00f2fe] outline-none transition-colors" placeholder="e.g. Current: 85kg, Goal: 75kg" />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-xs font-bold tracking-wider uppercase text-gray-400">Goal Details *</label>
              <textarea required rows={3} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:border-[#00f2fe] outline-none transition-colors resize-none" placeholder="Describe exactly what you want to achieve in the next 6 months..." />
            </div>
          </div>

          {/* Section 3: Program */}
          <div className="space-y-6 pt-6">
            <h3 className="text-lg font-bold text-[#00f2fe] border-b border-white/10 pb-2">Program Selection</h3>
            
            <div className="space-y-4">
              <label className="flex items-start gap-4 p-4 border border-white/10 rounded-xl hover:bg-white/5 transition-colors cursor-pointer group">
                <input type="radio" name="program" value="3_month" required className="mt-1 w-5 h-5 accent-[#1a73e8]" />
                <div>
                  <h4 className="font-bold text-white text-base">3 Month Package (₹30,000)</h4>
                  <p className="text-gray-400 text-xs mt-1">Standard foundation protocol with custom diet, training, and weekly check-ins.</p>
                </div>
              </label>

              <label className="flex items-start gap-4 p-4 border border-[#1a73e8]/50 bg-[#1a73e8]/10 rounded-xl hover:bg-[#1a73e8]/20 transition-colors cursor-pointer group">
                <input type="radio" name="program" value="6_month" required className="mt-1 w-5 h-5 accent-[#1a73e8]" />
                <div>
                  <div className="flex items-center gap-3">
                    <h4 className="font-bold text-white text-base">6 Month Package (₹42,000)</h4>
                    <span className="bg-[#1a73e8] text-xs font-bold px-2 py-0.5 rounded text-white uppercase tracking-wider">Most Popular</span>
                  </div>
                  <p className="text-blue-200 text-xs mt-1">Complete body transformation with daily 1-on-1 coaching and priority support.</p>
                </div>
              </label>
            </div>
          </div>

          <div className="pt-8">
            <button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full md:w-auto relative overflow-hidden px-10 py-4 rounded-xl font-bold flex items-center justify-center gap-3 transition-all duration-300 text-base md:text-lg bg-gradient-to-r from-[#1a73e8] to-[#00f2fe] text-white shadow-[0_0_20px_rgba(0,242,254,0.3)] hover:shadow-[0_0_30px_rgba(0,242,254,0.5)] hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  Submitting Application...
                </div>
              ) : (
                <>
                  Submit Application
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </button>
            <p className="text-center md:text-left text-gray-500 text-xs mt-4">
              By submitting this form, you agree to our terms and conditions.
            </p>
          </div>

        </form>
      </div>
    </div>
  );
}
