import SingleApplyForm from "@/components/SingleApplyForm";
import Link from "next/link";

export const metadata = {
  title: "Apply for Transformation | Hypertroph",
  description: "Apply for the Hypertroph Transformation Program.",
};

export default function ApplyPage() {
  return (
    <main className="min-h-screen bg-[#030712] text-white flex flex-col relative overflow-hidden font-sans selection:bg-[#1a73e8] selection:text-white">
      
      {/* Minimalist Fitness Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 transition-opacity duration-1000"
          style={{ backgroundImage: "url('/bg-fitness.png')" }}
        ></div>
        {/* Deep dark gradient overlay to ensure text/form readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#030712]/80 via-[#030712]/60 to-[#030712]/95 mix-blend-multiply"></div>
        {/* Subtle noise overlay for texture */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay"></div>
      </div>
      
      {/* Minimalist Top Bar */}
      <div className="absolute top-0 left-0 w-full p-6 flex justify-between items-center z-50">
         <Link href="/" className="flex items-center space-x-3 group w-max opacity-80 hover:opacity-100 transition-opacity">
           <div className="w-10 h-10 relative flex-shrink-0 flex items-center justify-center">
              <img src="/logo.png" alt="Hypertroph Logo" className="w-full h-full object-contain drop-shadow-md" />
           </div>
           <span className="text-xl font-black tracking-tighter text-white uppercase group-hover:text-[#1a73e8] transition-colors">
             Hypertroph
           </span>
         </Link>
         
         {/* Sleek Exit Button */}
         <Link href="/">
           <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-bold text-gray-300 hover:text-white transition-all backdrop-blur-md">
             Exit <span className="text-[10px]">✕</span>
           </button>
         </Link>
      </div>
      
      {/* Centered Quiz Area */}
      <div className="flex-1 w-full h-screen overflow-y-auto custom-scrollbar flex flex-col px-4 md:px-8 py-24 md:py-0 relative z-10">
         <div className="flex-1 flex flex-col justify-center max-w-4xl mx-auto w-full min-h-max py-10 md:py-16">
            <SingleApplyForm />
         </div>
      </div>
      
    </main>
  );
}
