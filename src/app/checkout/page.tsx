import Link from "next/link";
import { Check, ShieldCheck, ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Checkout | Hypertroph",
  description: "Secure payment for Hypertroph Transformation Program.",
};

export default function CheckoutPage() {
  return (
    <main className="min-h-screen bg-[#f9f8f6] text-gray-900 font-sans selection:bg-[#005580] selection:text-white flex flex-col relative overflow-hidden">
      
      {/* Sleek Header */}
      <div className="w-full p-6 flex justify-center items-center bg-white border-b border-gray-100 shadow-sm relative z-50">
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="w-8 h-8 relative flex-shrink-0 flex items-center justify-center">
             <img src="/logo.png" alt="Hypertroph Logo" className="w-full h-full object-contain drop-shadow-sm" />
          </div>
          <span className="text-lg font-black tracking-tighter text-gray-900 uppercase group-hover:text-[#005580] transition-colors">
            Hypertroph
          </span>
        </Link>
      </div>

      <div className="flex-1 w-full max-w-5xl mx-auto px-4 py-12 md:py-20 flex flex-col lg:flex-row gap-8 lg:gap-12 relative z-10">
        
        {/* Left Side: Order Summary */}
        <div className="flex-1 space-y-8">
          <div>
             <Link href="/apply" className="inline-flex items-center text-sm font-bold text-gray-500 hover:text-[#005580] transition-colors mb-6 uppercase tracking-widest">
               <ArrowLeft className="w-4 h-4 mr-2" /> Back
             </Link>
             <h1 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight mb-2">Complete Your Payment</h1>
             <p className="text-gray-500 font-medium">You are one step away from starting your transformation.</p>
          </div>

          <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-gray-100">
             <h3 className="text-lg font-bold text-gray-900 mb-6 border-b border-gray-100 pb-4">Order Summary</h3>
             
             <div className="flex justify-between items-start mb-6">
                <div>
                   <h4 className="font-bold text-gray-900 text-lg">Hypertroph Transformation Program</h4>
                   <p className="text-sm text-gray-500 mt-1">Full coaching, custom diet, and workout plan.</p>
                </div>
             </div>
             
             <div className="space-y-3 mb-6">
               {[
                 "Custom Diet & Training Plan",
                 "Weekly Progress Check-ins",
                 "Direct WhatsApp Support",
                 "Form & Technique Review"
               ].map((feat, i) => (
                 <div key={i} className="flex items-center text-gray-600 text-sm font-medium">
                   <div className="w-5 h-5 rounded-full bg-[#005580]/10 flex items-center justify-center mr-3">
                     <Check className="w-3 h-3 text-[#005580]" strokeWidth={3} />
                   </div>
                   {feat}
                 </div>
               ))}
             </div>

             <div className="border-t border-gray-100 pt-6 mt-6">
                <div className="flex justify-between items-center mb-2">
                   <span className="text-gray-500 font-medium">Subtotal</span>
                   <span className="text-gray-900 font-bold">₹30,000</span>
                </div>
                <div className="flex justify-between items-center mb-4">
                   <span className="text-gray-500 font-medium">Taxes (GST)</span>
                   <span className="text-gray-500 font-medium">Included</span>
                </div>
                <div className="flex justify-between items-center text-xl">
                   <span className="font-black text-gray-900">Total Due</span>
                   <span className="font-black text-[#005580]">₹30,000</span>
                </div>
             </div>
          </div>
        </div>

        {/* Right Side: Payment Placeholder */}
        <div className="lg:w-[450px]">
           <div className="bg-white rounded-3xl p-6 md:p-8 shadow-xl shadow-[#005580]/5 border border-gray-100 sticky top-10">
              <div className="flex items-center justify-center mb-6">
                 <ShieldCheck className="w-12 h-12 text-[#005580]" />
              </div>
              <h3 className="text-xl font-black text-center text-gray-900 mb-2">Secure Checkout</h3>
              <p className="text-center text-gray-500 text-sm mb-8">
                 Your payment is securely processed. We do not store your card details.
              </p>

              {/* Placeholder Button for Payment Gateway */}
              <button className="w-full py-4 rounded-xl font-bold text-white bg-gradient-to-r from-[#005580] to-[#003d5c] hover:from-[#004466] hover:to-[#002b40] transition-colors uppercase tracking-widest text-sm shadow-[0_10px_20px_rgba(0,85,128,0.2)] mb-4">
                 Pay ₹30,000 via Razorpay
              </button>
              
              <button className="w-full py-4 rounded-xl font-bold text-[#005580] bg-blue-50 hover:bg-blue-100 transition-colors uppercase tracking-widest text-sm border border-blue-100">
                 Pay via UPI / GPay
              </button>

              <div className="mt-8 flex items-center justify-center gap-4 opacity-50 grayscale">
                 <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png" alt="Visa" className="h-4" />
                 <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png" alt="Mastercard" className="h-5" />
                 <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/UPI-Logo.png/1200px-UPI-Logo.png" alt="UPI" className="h-5" />
              </div>
           </div>
        </div>
      </div>
    </main>
  );
}
