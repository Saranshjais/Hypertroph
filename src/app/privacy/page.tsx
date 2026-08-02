import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Privacy Policy | Hypertroph",
  description: "Read our privacy policy regarding the collection and use of your information.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[#f8fafc] text-gray-900 font-sans selection:bg-[#1a73e8] selection:text-white flex flex-col">
      <Header />
      
      <main className="flex-grow pt-32 md:pt-40 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100">
          
          <div className="mb-10 pb-10 border-b border-gray-100 text-center">
            <h4 className="text-[#1a73e8] font-bold text-sm tracking-widest uppercase mb-4">Legal</h4>
            <h1 className="text-4xl md:text-5xl font-black tracking-tight text-gray-900">
              Privacy Policy
            </h1>
          </div>

          <div className="prose prose-blue max-w-none text-gray-600 space-y-6">
            <p className="font-medium">
              <strong>HYPERTROPH</strong> (hereinafter referred to as Hypertroph/ We / Us) are committed to protecting the privacy and security of your personal information. Your privacy is important to us and maintaining your trust is paramount.
            </p>

            <p>
              This Privacy Policy explains how we collect, use, process and disclose information about you. By using our website/app and affiliated services, you consent to the terms of our privacy policy (“Privacy Policy”) in addition to our Terms of Use. We encourage you to read this Privacy Policy regarding the collection, use and disclosure of your information from time to time to keep yourself updated with the changes & updated that we make to this Policy.
            </p>

            <p>
              This Privacy Policy describes our privacy practices for all websites, products and services that are linked to it. However, this policy does not apply to those affiliates and partners that have their own privacy policy. In such situations, we recommend that you read the privacy policy on the applicable site. Any capitalised terms not defined hereunder shall hold the same definition as provided under the Terms of Use.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">User Information</h3>
            <p>
              We ask you to provide certain information as part of the registration process, and in the course of your interface with Hypertroph. We will collect this information through various means and in various places through the App Services, including account registration forms, contact us forms, or when you otherwise interact with us including at customer support.
            </p>

            <p>
              We collect information relating to your use of our website/app through the use of various technologies. This includes transaction details related to your use of our services including the type of services you requested, the payment method and amount and other related transactional and financial information. We do not collect information from third parties.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Sharing & Disclosure with Third Parties</h3>
            <p>
              As required by law, at times we might be required to disclose your personal information including transactional and financial information to relevant authorities. In some cases, when we believe that such disclosure is necessary to protect our rights, or the rights of others, or to comply with a judicial proceeding, court order, or legal process served on our website/app we would share such information pursuant to a lawful request from law enforcement agencies. We may disclose information that identifies you at an individual level and which we have collected on our website/app, to other affiliate entities and partners that are not acting as our suppliers or business partners.
            </p>

            <p>
              Except as described in this Privacy Policy, we will only do so with your prior consent. For the sake of clarity, we do not sell or lease such information. Subject to your express permission to use the information as described herein, the information we have about you, may be used by us for marketing purposes. This consent is purely voluntary and you may at any time choose not to receive marketing materials from us by following the unsubscribe instructions included in each e-mail you may receive, by indicating so when we call you, or by contacting us directly.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Cookies</h3>
            <p>
              We use data collection devices such as “cookies”, etc. on certain parts of the website, user interaction with the App and promote trust and safety. For the sake of clarity, “cookies” are small files placed on your device hard-drive/storage that assist us in providing the App Services. Please be informed that we offer certain features via the App that are only available through the use of a “cookie”.
            </p>

            <p>
              You are always free to decline our cookies if your device permits, although in that case you may not be able to use certain features.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Changes to this Policy</h3>
            <p>
              We reserve all rights to change this policy from time to time. Any changes shall be effective immediately upon the posting of the revised Privacy Policy. We encourage you to periodically review this page for latest information on our privacy practices.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
