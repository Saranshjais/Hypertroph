import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-[#f8fafc] text-gray-900 font-sans selection:bg-[#1a73e8] selection:text-white">
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 md:px-8 pt-32 pb-24">
        
        {/* Page Header */}
        <div className="mb-12">
          <h4 className="text-[#1a73e8] font-bold text-sm tracking-widest uppercase mb-3 flex items-center gap-3">
            <span className="w-8 h-[2px] bg-[#1a73e8]"></span>
            Legal
          </h4>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-gray-900 mb-6">
            Terms and <span className="text-[#1a73e8]">Conditions</span>
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl">
            Please read these terms carefully as they govern your use of our fitness program and affect your rights and liabilities under the law.
          </p>
        </div>

        {/* Content Body */}
        <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-sm border border-gray-100 space-y-8 text-gray-600 leading-relaxed text-base">
          
          <section>
            <p className="mb-4">
              These Terms and Conditions govern your use of our fitness program and your relationship with HYPERTROPH (“we”, “us” or “Hypertroph”). Please read these terms carefully as they affect your rights and liabilities under the law.
            </p>
            <p className="mb-4 font-semibold text-gray-800">
              Hypertroph, its employees, agents or representatives is not engaged in rendering medical advice. Hypertroph, its employees, agents or representatives do not hold themselves out as qualified to do so.
            </p>
            <p className="mb-4 text-red-600 font-bold bg-red-50 p-4 rounded-xl">
              We strongly recommend that you seek professional medical advice before embarking on any diet or exercise program.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">1. Introduction</h2>
            <ul className="list-[upper-alpha] pl-5 space-y-3">
              <li>This Training Program provides an online personal training service through which you can purchase fitness e-books, online video courses and tailored fitness and diet programs.</li>
              <li>These terms will apply to all users (“you”) of the Training Program and all purchasers of Products.</li>
              <li>By using the Training Program or by purchasing any Products from us, you agree to be bound by these Terms and Conditions.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">2. Amendments</h2>
            <p className="bg-blue-50 p-4 rounded-xl text-blue-900 font-medium">
              Please note that these Terms and Conditions may be amended from time to time. In continuing to use the Training Program you confirm that you accept the new Terms and Conditions in full at the time you use the Program. In case you have paused your coaching, you will resume with the new terms & conditions.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">3. Our Products</h2>
            <p className="mb-3">A. We will offer through Hypertroph the following products:</p>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>e-books</li>
              <li>videos</li>
              <li>training guides</li>
              <li>online coaching</li>
              <li>meal plans</li>
              <li>individually tailored personal plans (each a “Personal Plan”).</li>
            </ul>
            <p>B. We will only communicate through text (WhatsApp/Telegram) or email, we do not promise or offer any voice/video calls during the course of coaching. As promised on the coaching page, all your queries will be answered systematically once you share them in atomic form on text (bullet points) or voice text (if needed).</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">4. Fees & Refund Policy</h2>
            <ol className="list-decimal pl-5 space-y-3">
              <li>The fees payable in respect of the products and services will be clearly communicated to you prior to the commencement of the Training Program.</li>
              <li className="font-bold text-gray-900">There will be no refunds on any of the subscription plans under any circumstances.</li>
            </ol>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">5. How to contact us</h2>
            <p>
              <strong>Email:</strong> <a href="mailto:hypertroph.business@gmail.com" className="text-[#1a73e8] hover:underline">hypertroph.business@gmail.com</a>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">6. Registration</h2>
            <ol className="list-decimal pl-5 space-y-3">
              <li>When you register as a member we will ask that you provide certain personal information including but not limited to your name, email address, postal address, and your payment details. Any personal information you provide to us will be handled in accordance with our Privacy and Data Protection Policy which can be shared with you upon request.</li>
              <li>You agree that all personal information that you supply to us will be accurate, complete and kept up to date at all times. We may use the information provided to us to contact you.</li>
            </ol>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">7. Licence</h2>
            <p className="mb-3">1. On your purchase of the relevant Product, we will grant to you, for your own personal use only, a limited, non-exclusive, non-transferable license to access our training program and (as the case may be):</p>
            <ul className="list-disc pl-5 space-y-1 mb-4">
              <li>access video on a streaming only basis;</li>
              <li>access and download e-books;</li>
              <li>access and download personalised fitness plans;</li>
            </ul>
            <p className="mb-3">2. You are not permitted to share any of the content licensed under these terms with any other individuals.</p>
            <p>3. Except for the foregoing limited license, no right, title or interest shall be transferred to you.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">8. Availability</h2>
            <p>
              Although we aim to offer you the best service possible, we make no promise that the Training Program will meet your requirements. We cannot guarantee that the Training Program will be fault-free.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">9. Our Liability</h2>
            <ol className="list-decimal pl-5 space-y-3 mb-4">
              <li>Hypertroph will have no liability for any personal injury which is caused to you as a result of your use of the Training Program.</li>
              <li>Hypertroph, its employees, agents or representatives is not engaged in rendering medical advice. Hypertroph, its employees, agents or representatives do not hold itself as qualified to do so.</li>
              <li>We strongly recommend that you seek professional medical advice before embarking on any diet or exercise program.</li>
              <li>Any exercise program, even in healthy individuals, carries risk. You have a responsibility to exercise your own personal judgment, as well as any other considerations, before acting on any of the content provided by us.</li>
              <li>The information that is provided by Hypertroph for the nutrition program/fitness program may not be accurate in terms of nutritional values which includes calories, macronutrients and micronutrients and the customer will not hold Hypertroph responsible for any personal injury caused as a result of such information.</li>
              <li>Where we provide you with a Training Program, the information contained therein should not be regarded as or relied upon as being a comprehensive health or exercise program. Accordingly any actions that you take in relation to a personal plan should not be pursued regardless or to the exclusion of other information, opinions or judgments that are available to you.</li>
              <li>Any Training Program will have been prepared on the basis of information provided by you. You are responsible for the accuracy of any information that you provide to us. You are responsible for informing us of any health issues or medical conditions when asking us to prepare a Training Program.</li>
              <li>Before taking any action in relation to a Training Program, you must take into account any other factors apart from the Training Program of which you are or ought to be aware.</li>
            </ol>
            <div className="bg-gray-50 border-l-4 border-gray-300 p-4 rounded-r-xl">
              <p className="italic text-gray-500">
                For example, we always recommend that you seek professional medical advice before embarking on any exercise program. Your decisions to engage in any exercise program should take into account any medical or other professional advice that is available to you as well as using your own personal judgment as to what activity is safe for you to engage in.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">10. Contexts and Appropriateness</h2>
            <p className="mb-4 font-semibold text-gray-800">
              The information set out in any Training Program may relate to certain contexts and may not be suitable in other contexts. It is your responsibility to ensure that you do not use the information we provide in the wrong context.
            </p>
            <p className="mb-4">
              <em>For example, where a program was tailored for a woman who was not pregnant, this would not be appropriate for her to use after becoming pregnant.</em>
            </p>
            <ol className="list-decimal pl-5 space-y-3">
              <li>You are responsible for informing us of any health issues and pre-existing medical conditions when you ask us to prepare a Training Program.</li>
              <li>Any information that we provide that does not form part of the Personal Training Program, whether obtained through our website, e-book, video course, social media (such as Facebook, Instagram or Twitter) or otherwise, is provided for the purposes of general information only.</li>
            </ol>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">11. Expected Results</h2>
            <p className="mb-3">
              While we believe that for most people, following our programs and methods will lead to desired results, all exercise programs depend on the individual. Results will be affected by the effort and commitment of the individual, however in some circumstances even where an individual follows our program may not achieve the desired results. We therefore provide no warranties of any kind, express or implied, as to:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>the effectiveness of any techniques, diets or programs that we deliver;</li>
              <li>the results that you may achieve as a result of following our programs.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">12. Data Protection Policy</h2>
            <ol className="list-decimal pl-5 space-y-3">
              <li>We request that all personal information that you provide is accurate, current and complete.</li>
              <li>All notices sent to you will be sent to the email address provided with your registration details (as updated by you). By accepting these terms you give your consent to receive communications from us by email and you agree that all agreements, notices, disclosures and other communications that we provide to you by email satisfy any legal requirement that such communications be in writing.</li>
              <li>Any personal information that you provide to us will be handled in accordance with our Privacy and Data Protection Policy which can be provided to you upon request.</li>
            </ol>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">13. Intellectual Property</h2>
            <ol className="list-decimal pl-5 space-y-3">
              <li>The format and content our Training Programs and Products are protected by The Indian Copyright Act and we reserve all rights in relation to our copyright whether owned or licensed to us and all rights are reserved to any of our registered and unregistered trademarks (whether owned or licensed to us) which appear on any of our Training Programs or Products.</li>
              <li>This contents of any of our Training Programs or Products may not be reproduced, duplicated, copied, sold, resold, visited, or otherwise exploited for any commercial purpose without our express written consent. You may not systematically extract and/or re-utilise parts of the contents of the Training Programs or Products without our express written consent. In particular, you may not utilise any data mining, robots, or similar data gathering and extraction tools to extract (whether once or many times) for re-utilisation of any substantial parts of the Training Programs or Products without our express written consent.</li>
            </ol>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">14. International Use</h2>
            <p>
              You shall comply with all foreign and local laws and regulations which apply to your use of our Training Programs or Products in whatever country you are physically located, including without limitation, consumer law, export control laws and regulations.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">15. General</h2>
            <ol className="list-decimal pl-5 space-y-3">
              <li>These conditions are governed by and construed in accordance with the laws of the Union of India and the State of Karnataka. You agree, as we do, to submit to the jurisdiction of the courts in Bangalore, India.</li>
              <li>If you breach these Terms and Conditions and we decide to take no action or neglect to do so, then we will still be entitled to take action and enforce our rights and remedies for any other breach.</li>
              <li>We will not be responsible for any breach of these Terms and Conditions caused by circumstances beyond our reasonable control.</li>
              <li>We may make changes to the format of the Training Program or Products at any time without notice.</li>
              <li>The pictures of your physique updates sent by you to Hypertroph with respect to the progress that you have made after signing up for the program, should be taken in the same outfit/clothing. If the picture sent by is a picture that is taken of your reflection in the mirror, then every picture taken should be of the same distance from the mirror.</li>
              <li>If you are a minor, then a No-Objection Certificate (“NOC”) should be issued by your parents/guardian giving consent for using the programs provided by Hypertroph. A minor can enroll in a program provided by Hypertroph only once the NOC is provided. All the above-mentioned clauses which are mentioned in the above mentioned “Terms and Conditions” will apply for the minor too in entirety.</li>
            </ol>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">16. Updates and Follow-Up</h2>
            <p>
              It is your duty to send in daily meal and weight updates and weekly physique updates to Hypertroph. Hypertroph will follow up with you regarding the same, but will not be held liable for any failure on your part to provide the daily meal and weight updates and weekly physique updates.
            </p>
          </section>
          
        </div>
      </main>

      <Footer />
    </div>
  );
}
