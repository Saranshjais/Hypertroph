import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PricingContactBanner from "@/components/PricingContactBanner";
import { Mail, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#f8fafc] text-gray-900 font-sans selection:bg-[#1a73e8] selection:text-white flex flex-col">
      <Header />
      
      <main className="flex-grow pt-32 md:pt-40 pb-20">
        
        {/* Contact Hero Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
          <h4 className="text-[#1a73e8] font-bold text-sm tracking-widest uppercase mb-4 flex items-center justify-center gap-3">
            <span className="w-8 h-[2px] bg-[#1a73e8]"></span>
            Reach Out
            <span className="w-8 h-[2px] bg-[#1a73e8]"></span>
          </h4>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tight text-gray-900 mb-6">
            Let's <span className="text-[#1a73e8]">Talk.</span>
          </h1>
          <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Whether you have questions about our coaching programs, need help deciding which plan is right for you, or just want to say hello—we're here for you.
          </p>
        </div>

        {/* Primary Contact Methods (WhatsApp & Call) */}
        <div className="mb-16">
          <PricingContactBanner 
            title="Have general queries?" 
            subtitle="Send us a WhatsApp message, we reply under 24 hours."
          />
        </div>

        {/* Secondary Contact Methods (Email & Location) */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div className="bg-white rounded-3xl p-8 flex items-start gap-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                <Mail className="w-6 h-6 text-[#1a73e8]" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Email Us</h3>
                <p className="text-gray-500 mb-4 text-sm leading-relaxed">
                  Prefer to write it out? Send us an email and our team will get back to you within 24-48 hours.
                </p>
                <a href="mailto:hypertroph.business@gmail.com" className="text-[#1a73e8] font-bold hover:underline">
                  hypertroph.business@gmail.com
                </a>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 flex items-start gap-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6 text-[#1a73e8]" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Headquarters</h3>
                <p className="text-gray-500 mb-4 text-sm leading-relaxed">
                  While we coach clients globally online, our roots and headquarters are based here.
                </p>
                <p className="text-gray-900 font-bold">
                  Bangalore, Karnataka, India
                </p>
              </div>
            </div>

          </div>
        </div>

      </main>

      <Footer />
    </div>
  );
}
