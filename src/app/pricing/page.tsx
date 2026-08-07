import Header from "@/components/Header";
import Pricing from "@/components/Pricing";

import Footer from "@/components/Footer";

export const metadata = {
  title: "Pricing | Hypertroph",
  description: "View our coaching plans and pricing.",
};

export default function PricingPage() {
  return (
    <main className="bg-[#f9f8f6] text-gray-900 font-sans antialiased overflow-x-hidden selection:bg-[#5e7141] selection:text-white min-h-screen flex flex-col">
      <Header />
      
      {/* Wrapper to push the pricing section down past the fixed header */}
      <div className="flex-grow pt-16 md:pt-24 bg-[#f8fbfe]">
        <Pricing />

      </div>

      <Footer />
    </main>
  );
}
