import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Refund Policy | Hypertroph",
  description: "Read our refund and cancellation policy.",
};

export default function RefundPolicyPage() {
  return (
    <div className="min-h-screen bg-[#f8fafc] text-gray-900 font-sans selection:bg-[#1a73e8] selection:text-white flex flex-col">
      <Header />
      
      <main className="flex-grow pt-32 md:pt-40 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100">
          
          <div className="mb-10 pb-10 border-b border-gray-100 text-center">
            <h4 className="text-[#ffb800] font-bold text-sm tracking-widest uppercase mb-4">Legal</h4>
            <h1 className="text-4xl md:text-5xl font-black tracking-tight text-gray-900">
              Refund Policy
            </h1>
          </div>

          <div className="prose prose-blue max-w-none text-gray-600 space-y-6">
            <p className="font-medium text-lg text-gray-900">
              Thank you for trusting HYPERTROPH with your fitness journey.
            </p>

            <p>
              Please read this policy carefully. This is the Refund Policy of Hypertroph. By enrolling in our coaching programs, purchasing our digital products, or using our services, you agree to the terms outlined below.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Coaching Programs</h3>
            <p>
              Due to the highly personalized nature of our 1-on-1 coaching, the time investment required to build your initial customized protocols, and the immediate access to our proprietary systems, <strong>all coaching sales are generally final.</strong>
            </p>
            <p>
              However, we do offer a conditional <strong>30-Day Moneyback Guarantee</strong> on specific programs where explicitly advertised. To qualify for this guarantee, you must demonstrate that you have strictly followed the provided diet and training protocols for the full 30 days without achieving the agreed-upon measurable progress. Failure to submit required weekly check-ins or deviations from the provided plan void this guarantee.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Digital Products & Courses</h3>
            <p>
              We issue refunds for digital products (such as the FitnessOS standalone course) within <strong>7 days</strong> of the original purchase of the product, provided that less than 20% of the course material has been viewed or downloaded. Once significant progress is made in the course or resources are downloaded, the refund period is voided.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Priority Calls</h3>
            <p>
              Payments made for priority callback requests are non-refundable once the call has been successfully scheduled and completed. If our team fails to reach out to you within the promised time frame due to an error on our end, a full refund will be issued to your original payment method.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">How to Request a Refund</h3>
            <p>
              If you believe you qualify for a refund under the terms stated above, please contact our support team immediately at:
            </p>
            <ul className="list-disc pl-5 space-y-2 mt-4 font-medium text-gray-800">
              <li><strong>Email:</strong> hypertroph.business@gmail.com</li>
              <li><strong>WhatsApp:</strong> +91 86180 97692</li>
            </ul>
            <p className="mt-4">
              Please include your full name, email address used for purchase, and the reason for your refund request. Our team will review your request and respond within 24-48 business hours.
            </p>

            <div className="mt-12 p-6 bg-blue-50 rounded-xl border border-blue-100">
              <p className="text-sm text-gray-600 m-0 text-center">
                For more information regarding your rights and responsibilities, please review our <Link href="/terms" className="text-[#1a73e8] font-bold hover:underline">Terms & Conditions</Link>.
              </p>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
