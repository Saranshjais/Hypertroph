"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, Check, Sparkles } from "lucide-react";
import Link from "next/link";

type QuestionType = "intro" | "text" | "email" | "tel" | "number" | "select" | "multi-select" | "textarea" | "checkbox_group";

type Question = {
  id: string;
  title: string;
  subtitle?: string;
  type: QuestionType;
  options?: string[];
  required?: boolean;
};

const questions: Question[] = [
  { 
    id: "intro", 
    title: "Engineer your dream physique.", 
    subtitle: "Let's see if you qualify for the Hypertroph Transformation Program. This takes less than 2 minutes.", 
    type: "intro" 
  },
  { id: "name", title: "First, what's your name?", type: "text", required: true },
  { id: "email", title: "What's your best email address?", type: "email", required: true },
  { id: "whatsapp", title: "Your WhatsApp Number", subtitle: "Please add your country code as well (e.g., +91, +44, +1)", type: "tel", required: true },
  { id: "gender", title: "Your Gender", subtitle: "Fitness is for everyone, but men and women need slightly different approaches.", type: "select", options: ["Male", "Female", "Other"] },
  { id: "age", title: "How old are you?", subtitle: "Fitness is for all ages, but everyone needs a tailored strategy.", type: "number", required: true },
  { id: "location", title: "Where do you currently live?", subtitle: "City and Country.", type: "text", required: true },
  { id: "occupation", title: "What do you do?", subtitle: "Your current occupation or profession.", type: "text", required: true },
  { id: "primary_goal", title: "What is your primary fitness goal right now?", type: "select", options: ["Fat Loss", "Muscle Gain", "Six Pack", "Lifestyle Reset", "Improve Health / Blood Markers", "Running / Marathon Performance"] },
  { id: "weight", title: "What's your current & goal body weight?", type: "text", required: true },
  { id: "goal_details", title: "Describe your fitness goal in detail.", subtitle: "Exactly what would you like to achieve in the next 6 months? Imagine being in your ideal body - what comes in your vision?", type: "textarea", required: true },
  { id: "health_issues", title: "Are you dealing with any health issues?", type: "multi-select", options: ["Thyroid", "PCOS / PCOD", "Diabetes (T2D)", "None", "Other"] },
  { id: "blockers", title: "What big blockers have you always faced?", type: "multi-select", options: ["Lack of diet knowledge", "Lack of exercise knowledge", "Lack of time", "Lack of self-control", "Lack of motivation", "Other"] },
  { id: "program", title: "Which Transformation Program are you interested in?", type: "select", options: ["3 Month Package (INR 30,000/-)", "6 Month Package (INR 42,000/-) [TOTAL BODY TRANSFORMATION]", "This is currently outside my budget"] },
  { id: "agreements", title: "Commitment Check", subtitle: "Please confirm all points before proceeding.", type: "checkbox_group", options: [
      "I am fully open to making every necessary change to my diet.",
      "I am mentally prepared to commit to a complete lifestyle reset over the next 6 months.",
      "I am committed to dedicating 6–8 focused hours per week to structured training.",
      "I understand that Hypertroph works only with a limited number of individuals."
  ]},
  { id: "start_date", title: "From when are you available to start?", type: "select", options: ["Ready to Begin (ASAP)", "Next Month", "Later Someday (Not Sure When)"] },
  { id: "contact_pref", title: "If qualified, how would you like to be contacted?", type: "select", options: ["Call me", "Text me first"] },
  { id: "source", title: "Where did you hear about Hypertroph?", type: "select", options: ["Instagram", "Youtube", "Friend / Relative", "Other"] },
  { id: "priority_call", title: "Do you want to book a PRIORITY CALL?", subtitle: "Call guaranteed under 24 hours. The ₹99 fee is completely adjusted if you join.", type: "select", options: ["Yes, Paid ₹99", "No, I can wait"] },
  { id: "queries", title: "Any message or queries for Coach Siddharth?", type: "textarea", required: false }
];

// Elegant staggering animation for options
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -10 },
  show: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
};

export default function QuizForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, any>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [currentStep]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const q = questions[currentStep];
      
      if (e.key === "Enter" && !e.shiftKey) {
        if (document.activeElement?.tagName === 'TEXTAREA') return; 
        e.preventDefault();
        handleNext();
      }

      if ((q.type === 'select' || q.type === 'multi-select' || q.type === 'checkbox_group') && q.options) {
        const key = e.key.toUpperCase();
        const index = key.charCodeAt(0) - 65; 
        if (index >= 0 && index < q.options.length) {
          e.preventDefault();
          const opt = q.options[index];
          if (q.type === 'select') {
            handleAnswer(opt);
            setTimeout(() => {
              if (currentStep < questions.length - 1) setCurrentStep(c => c + 1);
              else submitForm();
            }, 400);
          } else {
             const selectedArr = answers[q.id] || [];
             if (selectedArr.includes(opt)) {
                handleAnswer(selectedArr.filter((item: string) => item !== opt));
             } else {
                handleAnswer([...selectedArr, opt]);
             }
          }
        }
      }
    };
    
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentStep, answers]);

  const q = questions[currentStep];

  const handleAnswer = (val: any) => {
    setAnswers({ ...answers, [q.id]: val });
  };

  const handleNext = () => {
    if (q.required && !answers[q.id] && q.type !== 'intro') return;
    
    if ((q.type === 'multi-select' || q.type === 'checkbox_group') && (!answers[q.id] || answers[q.id].length === 0)) {
      if (q.required !== false) return;
    }

    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      submitForm();
    }
  };

  const handleBack = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
  };

  const submitForm = async () => {
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log("Form Submitted Payload:", answers);
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  if (isSuccess) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, type: "spring" }}
        className="flex flex-col items-center justify-center text-center w-full max-w-lg mx-auto bg-white/5 backdrop-blur-2xl p-12 rounded-[2rem] shadow-2xl border border-white/10 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-[#1a73e8]/20 to-transparent opacity-50 z-0 pointer-events-none"></div>
        <div className="w-20 h-20 bg-gradient-to-tr from-green-400 to-emerald-500 rounded-full flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(52,211,153,0.3)] relative z-10">
          <Check className="w-10 h-10 text-white stroke-[3]" />
        </div>
        <h2 className="text-3xl font-black text-white mb-4 tracking-tight relative z-10">
          Application Received
        </h2>
        <p className="text-gray-300 text-base leading-relaxed relative z-10">
          Thank you for stepping up. Coach Siddharth will review your application and our team will reach out to you shortly.
        </p>
        <Link href="/" className="mt-10 bg-white/10 hover:bg-white/20 border border-white/10 text-white font-bold tracking-wide text-sm px-6 py-3 rounded-full transition-all flex items-center gap-2 relative z-10">
          <ArrowLeft className="w-4 h-4" /> Return Home
        </Link>
      </motion.div>
    );
  }

  const renderInput = () => {
    switch (q.type) {
      case "intro":
        return (
          <div className="mt-10 flex justify-center md:justify-start">
            <button 
              onClick={handleNext}
              className="relative overflow-hidden bg-white text-black hover:text-white transition-colors duration-300 font-bold px-8 py-4 rounded-2xl flex items-center gap-3 text-lg shadow-[0_0_40px_rgba(255,255,255,0.15)] group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#1a73e8] to-[#00f2fe] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-0"></div>
              <span className="relative z-10 flex items-center gap-3">
                 <Sparkles className="w-5 h-5" />
                 Start Application
                 <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            <span className="hidden md:flex items-center text-xs text-gray-400 font-medium ml-6">
              press <strong className="text-gray-300 bg-white/10 border border-white/10 px-2 py-1 rounded ml-2">Enter ↵</strong>
            </span>
          </div>
        );

      case "text":
      case "email":
      case "tel":
      case "number":
        return (
          <div className="mt-10">
            <input
              ref={inputRef as any}
              type={q.type}
              value={answers[q.id] || ""}
              onChange={(e) => handleAnswer(e.target.value)}
              placeholder="Type your answer here..."
              className="w-full bg-transparent border-b border-white/20 focus:border-[#00f2fe] text-2xl md:text-3xl font-medium text-white pb-3 outline-none transition-colors placeholder:text-white/20"
            />
          </div>
        );
        
      case "textarea":
        return (
          <div className="mt-8">
            <textarea
              ref={inputRef as any}
              value={answers[q.id] || ""}
              onChange={(e) => handleAnswer(e.target.value)}
              placeholder="Type your answer here..."
              rows={4}
              className="w-full bg-white/5 border border-white/10 focus:border-[#00f2fe] rounded-2xl p-6 text-lg text-white outline-none transition-all duration-300 placeholder:text-white/20 resize-none shadow-inner backdrop-blur-md"
            />
          </div>
        );

      case "select":
        return (
          <motion.div 
            variants={containerVariants} 
            initial="hidden" 
            animate="show" 
            className="mt-8 flex flex-col gap-3"
          >
            {q.options?.map((opt, i) => {
              const isSelected = answers[q.id] === opt;
              const letter = String.fromCharCode(65 + i);
              return (
                <motion.button
                  key={i}
                  variants={itemVariants}
                  onClick={() => {
                    handleAnswer(opt);
                    setTimeout(handleNext, 350); 
                  }}
                  className={`relative overflow-hidden text-left px-5 py-4 rounded-2xl border transition-all duration-300 text-base md:text-lg font-medium flex items-center justify-between group ${
                    isSelected 
                      ? "bg-[#1a73e8]/20 border-[#1a73e8] text-white shadow-[0_0_20px_rgba(26,115,232,0.2)]" 
                      : "bg-white/5 border-white/10 text-gray-300 hover:border-white/30 hover:bg-white/10"
                  }`}
                >
                  <span className="relative z-10 flex items-center gap-4">
                    <span className={`w-7 h-7 rounded flex items-center justify-center text-xs font-bold transition-all duration-300 ${isSelected ? 'bg-[#1a73e8] text-white shadow-[0_0_10px_rgba(26,115,232,0.5)]' : 'bg-white/10 text-gray-400 group-hover:bg-white/20 group-hover:text-white'}`}>
                      {letter}
                    </span>
                    {opt}
                  </span>
                  {isSelected && <Check className="w-5 h-5 text-[#00f2fe] relative z-10" />}
                </motion.button>
              );
            })}
          </motion.div>
        );

      case "multi-select":
      case "checkbox_group":
        const selectedArr = answers[q.id] || [];
        const isCheckbox = q.type === "checkbox_group";
        
        return (
          <motion.div 
            variants={containerVariants} 
            initial="hidden" 
            animate="show" 
            className="mt-8 flex flex-col gap-3"
          >
            {q.options?.map((opt, i) => {
              const isSelected = selectedArr.includes(opt);
              const letter = String.fromCharCode(65 + i);
              return (
                <motion.button
                  key={i}
                  variants={itemVariants}
                  onClick={() => {
                    if (isSelected) {
                      handleAnswer(selectedArr.filter((item: string) => item !== opt));
                    } else {
                      handleAnswer([...selectedArr, opt]);
                    }
                  }}
                  className={`text-left px-5 py-4 rounded-2xl border transition-all duration-300 text-base md:text-lg font-medium flex items-center justify-between group ${
                    isSelected 
                      ? "bg-[#1a73e8]/20 border-[#1a73e8] text-white shadow-[0_0_20px_rgba(26,115,232,0.2)]" 
                      : "bg-white/5 border-white/10 text-gray-300 hover:border-white/30 hover:bg-white/10"
                  }`}
                >
                  <span className="flex items-center gap-4 pr-4 relative z-10">
                    <div className="flex items-center gap-3">
                       {!isCheckbox && (
                          <span className={`w-7 h-7 shrink-0 rounded flex items-center justify-center text-xs font-bold transition-colors ${isSelected ? 'bg-transparent text-[#00f2fe]' : 'bg-white/10 text-gray-400 group-hover:bg-white/20'}`}>
                            {letter}
                          </span>
                       )}
                       <div className={`w-5 h-5 rounded flex items-center justify-center shrink-0 border-2 transition-all duration-300 ${isSelected ? 'border-[#1a73e8] bg-[#1a73e8] shadow-[0_0_10px_rgba(26,115,232,0.5)]' : 'border-white/30 group-hover:border-white/50'}`}>
                         {isSelected && <Check className="w-3.5 h-3.5 text-white stroke-[3]" />}
                       </div>
                    </div>
                    <span className={isCheckbox ? "text-base leading-relaxed" : ""}>{opt}</span>
                  </span>
                </motion.button>
              );
            })}
          </motion.div>
        );
    }
  };

  const progress = ((currentStep) / (questions.length - 1)) * 100;
  
  let canProceed = true;
  if (q.type !== 'intro') {
     if (q.required && !answers[q.id]) canProceed = false;
     if ((q.type === 'multi-select' || q.type === 'checkbox_group') && (!answers[q.id] || answers[q.id].length === 0) && q.required !== false) canProceed = false;
  }

  return (
    <div className="w-full flex flex-col min-h-max max-w-2xl mx-auto">
      
      {/* Sleek Top Progress Bar */}
      {currentStep > 0 && (
        <div className="absolute top-0 left-0 w-full h-1 bg-white/5 z-50">
          <motion.div 
            className="h-full bg-gradient-to-r from-[#1a73e8] to-[#00f2fe] shadow-[0_0_15px_rgba(0,242,254,0.5)]"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />
        </div>
      )}

      {/* Main Glassmorphism Card */}
      <div className="bg-white/[0.02] backdrop-blur-3xl border border-white/10 rounded-[2.5rem] p-6 md:p-12 shadow-2xl relative overflow-hidden">
        
        {/* Subtle internal glowing corner */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white/[0.03] to-transparent pointer-events-none"></div>

        <div className="flex-1 flex flex-col justify-center relative z-10 w-full mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20, filter: "blur(5px)" }}
              animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, x: -20, filter: "blur(5px)" }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              {q.type !== 'intro' && (
                <div className="text-[#00f2fe] font-bold text-xs mb-5 flex items-center gap-2 tracking-widest uppercase">
                  <span>Step {currentStep} <span className="text-white/30 font-normal mx-0.5">/</span> {questions.length - 1}</span> 
                </div>
              )}
              
              <h2 className={`font-black text-white leading-tight tracking-tight ${q.type === 'intro' ? 'text-4xl md:text-5xl text-center md:text-left' : 'text-2xl md:text-3xl'}`}>
                {q.title}
                {q.required === false && <span className="text-gray-500 text-lg ml-3 font-medium tracking-normal">(Optional)</span>}
              </h2>
              
              {q.subtitle && (
                <p className={`mt-3 text-gray-400 text-base md:text-lg font-medium leading-relaxed ${q.type === 'intro' ? 'text-center md:text-left' : ''}`}>
                  {q.subtitle}
                </p>
              )}

              {renderInput()}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Action Footer */}
        {currentStep > 0 && (
          <div className="mt-12 flex items-center justify-between border-t border-white/10 pt-6 relative z-10 w-full mx-auto">
            <div>
              <button 
                onClick={handleBack}
                className="px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white font-medium flex items-center justify-center gap-2 transition-colors border border-white/5 text-sm backdrop-blur-md"
              >
                <ArrowLeft className="w-4 h-4" /> Back
              </button>
            </div>
            
            <div className="flex items-center gap-4">
              {canProceed && q.type !== 'select' && (
                <span className="hidden md:flex items-center text-xs text-gray-500 font-medium mr-1">
                  press <strong className="text-gray-300 bg-white/10 border border-white/10 px-2 py-1 rounded ml-2">Enter ↵</strong>
                </span>
              )}

              {q.type !== 'select' && (
                <button 
                  onClick={handleNext}
                  disabled={!canProceed || isSubmitting}
                  className={`relative overflow-hidden px-6 py-2.5 rounded-xl font-bold flex items-center justify-center gap-2 transition-all duration-300 text-sm ${
                    canProceed 
                      ? "bg-gradient-to-r from-[#1a73e8] to-[#00f2fe] text-white shadow-[0_0_15px_rgba(0,242,254,0.3)] hover:shadow-[0_0_25px_rgba(0,242,254,0.5)] hover:-translate-y-0.5" 
                      : "bg-white/5 text-gray-500 cursor-not-allowed border border-white/5"
                  }`}
                >
                  {isSubmitting ? (
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  ) : currentStep === questions.length - 1 ? (
                    <span>Submit</span>
                  ) : (
                    <>
                      <span>OK</span>
                      <Check className="w-4 h-4" />
                    </>
                  )}
                </button>
              )}
            </div>
          </div>
        )}
      </div>

    </div>
  );
}
