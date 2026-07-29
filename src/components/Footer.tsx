import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 flex justify-center">
      <div className="w-full max-w-[1300px]">
        {/* Main Footer Container */}
        <div className="bg-white rounded-[24px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-200 overflow-hidden">
          
          {/* Top Section */}
          <div className="p-8 lg:p-10 flex flex-col lg:flex-row gap-8 justify-between relative">
            
            {/* Column 1: Brand & Subscribe */}
            <div className="flex-1 lg:max-w-[280px]">
              <Link href="/" className="inline-flex items-center space-x-3 mb-6">
                <div className="w-9 h-9 bg-[#1a73e8] text-white font-black text-xl flex items-center justify-center rounded-lg shadow-sm shrink-0">
                   H
                </div>
                <span className="text-xl font-black tracking-tight text-gray-900">
                  HYPERTROPH
                </span>
              </Link>
              
              <p className="text-[12px] text-gray-500 leading-relaxed font-medium mb-6">
                90 Days can fix your 90 Years. We build mathematically guaranteed systems for natural hypertrophy and fat loss.
              </p>

              <div className="flex bg-white border border-gray-200 rounded-lg p-1 focus-within:border-[#1a73e8] transition-colors shadow-sm">
                 <input 
                   type="email" 
                   placeholder="Enter your email" 
                   className="w-full bg-transparent px-3 py-1.5 text-[12px] text-gray-900 placeholder:text-gray-400 outline-none min-w-[120px]"
                 />
                 <button className="bg-[#1a73e8] hover:bg-[#1557b0] transition-colors text-white text-[10px] font-bold uppercase tracking-wider px-4 py-2 rounded-md whitespace-nowrap">
                   SUBSCRIBE
                 </button>
              </div>
            </div>

            {/* Vertical Divider */}
            <div className="hidden lg:block w-px bg-gray-100 shrink-0 mx-2"></div>

            {/* Column 2: Navigation */}
            <div className="flex-1 lg:max-w-[140px]">
              <h4 className="text-[#1a73e8] font-bold mb-5 text-[10px] flex items-center gap-2 uppercase tracking-widest">
                <span className="w-1.5 h-1.5 bg-[#1a73e8]"></span>
                NAVIGATION
              </h4>
              <ul className="space-y-3 text-[12px] text-gray-500 font-medium">
                <li><Link href="/" className="hover:text-[#1a73e8] transition-colors">Home</Link></li>
                <li><Link href="/about" className="hover:text-[#1a73e8] transition-colors">About Us</Link></li>
                <li><Link href="/transformations" className="hover:text-[#1a73e8] transition-colors">Transformations</Link></li>
                <li><Link href="/#method" className="hover:text-[#1a73e8] transition-colors">The Method</Link></li>
                <li><Link href="/programs" className="hover:text-[#1a73e8] transition-colors">Programs</Link></li>
                <li><Link href="/blog" className="hover:text-[#1a73e8] transition-colors">Blog</Link></li>
                <li><Link href="/contact" className="hover:text-[#1a73e8] transition-colors">Contact Us</Link></li>
              </ul>
            </div>

            {/* Vertical Divider */}
            <div className="hidden lg:block w-px bg-gray-100 shrink-0 mx-2"></div>

            {/* Column 3: Legal */}
            <div className="flex-1 lg:max-w-[140px]">
              <h4 className="text-[#ffb800] font-bold mb-5 text-[10px] flex items-center gap-2 uppercase tracking-widest">
                <span className="w-1.5 h-1.5 bg-[#ffb800]"></span>
                LEGAL
              </h4>
              <ul className="space-y-3 text-[12px] text-gray-500 font-medium">
                <li><Link href="/terms" className="hover:text-[#ffb800] transition-colors">Terms & Conditions</Link></li>
                <li><Link href="/privacy" className="hover:text-[#ffb800] transition-colors">Privacy Policy</Link></li>
                <li><Link href="/refund" className="hover:text-[#ffb800] transition-colors">Refund Policy</Link></li>
                <li><Link href="/cookie" className="hover:text-[#ffb800] transition-colors">Cookie Policy</Link></li>
                <li><Link href="/admin" className="hover:text-[#ffb800] transition-colors mt-1.5 block">Coach Login</Link></li>
              </ul>
            </div>

            {/* Vertical Divider */}
            <div className="hidden lg:block w-px bg-gray-100 shrink-0 mx-2"></div>

            {/* Column 4: Connect With Us */}
            <div className="flex-[1.2] lg:max-w-[220px]">
              <h4 className="text-[#1a73e8] font-bold mb-5 text-[10px] flex items-center gap-2 uppercase tracking-widest">
                <span className="w-1.5 h-1.5 bg-[#1a73e8]"></span>
                CONNECT WITH US
              </h4>
              <ul className="space-y-4 text-[12px] text-gray-500 font-medium">
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#f0f7ff] flex items-center justify-center text-[#1a73e8] shrink-0 border border-[#e8f0fe]">
                    <Mail className="w-3.5 h-3.5" />
                  </div>
                  <span className="truncate">support@hypertroph.com</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#f0f7ff] flex items-center justify-center text-[#1a73e8] shrink-0 border border-[#e8f0fe]">
                    <Phone className="w-3.5 h-3.5" />
                  </div>
                  <span>+1 (555) 123-4567</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#f0f7ff] flex items-center justify-center text-[#1a73e8] shrink-0 border border-[#e8f0fe]">
                    <MapPin className="w-3.5 h-3.5" />
                  </div>
                  <span>Seattle, WA, USA</span>
                </li>
              </ul>
            </div>

            {/* Column 5: Graphic */}
            <div className="hidden lg:flex flex-[1.5] relative items-center justify-center min-h-[180px]">
               {/* Elegant SVG Background Swooshes */}
               <svg className="absolute inset-0 w-full h-full text-[#cce0ff] opacity-80 pointer-events-none" viewBox="0 0 300 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Subtle dashed orbit */}
                  <path d="M-20,160 Q120,40 320,100" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
                  {/* Solid smooth swoosh */}
                  <path d="M0,120 Q150,220 300,80" stroke="currentColor" strokeWidth="1" />
                  {/* Sparkles / Stars */}
                  <path d="M50,40 L53,47 L60,50 L53,53 L50,60 L47,53 L40,50 L47,47 Z" fill="#4d94ff" />
                  <path d="M260,30 L262,35 L267,37 L262,39 L260,44 L258,39 L253,37 L258,35 Z" fill="#4d94ff" />
                  <path d="M230,160 L231.5,163.5 L235,165 L231.5,166.5 L230,170 L228.5,166.5 L225,165 L228.5,163.5 Z" fill="#4d94ff" />
               </svg>
               
               {/* Tighter Floating Icons */}
               <div className="relative z-10 flex items-center justify-center w-full h-full mt-4">
                  {/* Email */}
                  <div className="absolute left-[15%] z-10 w-14 h-14 bg-white rounded-xl shadow-[0_8px_20px_rgba(0,0,0,0.06)] border border-gray-100 flex items-center justify-center rotate-[-12deg] transform transition-transform hover:scale-110">
                     <svg className="w-6 h-6 text-[#0f172a]" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
                  </div>
                  {/* LinkedIn */}
                  <div className="absolute z-20 w-[76px] h-[76px] bg-white rounded-[22px] shadow-[0_12px_28px_rgba(26,115,232,0.15)] border border-gray-50 flex items-center justify-center rotate-[6deg] transform transition-transform hover:scale-110">
                     <span className="text-[#0a66c2] font-black text-[32px] tracking-tighter">in</span>
                  </div>
                  {/* Github */}
                  <div className="absolute right-[15%] z-10 w-14 h-14 bg-white rounded-xl shadow-[0_8px_20px_rgba(0,0,0,0.06)] border border-gray-100 flex items-center justify-center rotate-[15deg] transform transition-transform hover:scale-110">
                     <svg className="w-7 h-7 text-black" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57C20.565 21.795 24 17.31 24 12c0-6.63-5.37-12-12-12z"/></svg>
                  </div>
               </div>
            </div>

          </div>

          {/* Bottom Bar */}
          <div className="px-10 py-5 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-6 bg-[#fafafa]">
            <p className="text-[11px] text-gray-400 font-medium order-3 md:order-1">
              © 2026 Hypertroph. All rights reserved.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center space-x-4 order-1 md:order-2">
              <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:text-[#1a73e8] hover:border-[#1a73e8] hover:bg-white transition-all shadow-sm">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" /></svg>
              </a>
              <a href="https://youtube.com/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:text-[#1a73e8] hover:border-[#1a73e8] hover:bg-white transition-all shadow-sm">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" /></svg>
              </a>
              <a href="https://x.com/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:text-[#1a73e8] hover:border-[#1a73e8] hover:bg-white transition-all shadow-sm">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 22.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="https://wa.me/918618097692" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:text-[#25D366] hover:border-[#25D366] hover:bg-white transition-all shadow-sm">
                <svg className="w-4 h-4 ml-[1px] mt-[1px]" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
              </a>
            </div>

            {/* Madhurima AI Voice Chat Badge (Pushed left to avoid floating buttons) */}
            <div className="flex items-center gap-3 bg-white px-3 py-2 rounded-[14px] shadow-sm border border-gray-100 order-2 md:order-3 mr-0 md:mr-16 lg:mr-24 hover:shadow-md transition-shadow cursor-pointer">
              <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden shrink-0 border border-gray-100">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://i.pravatar.cc/150?img=32" alt="Madhurima" className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col pr-2">
                 <div className="flex items-center justify-between gap-4">
                   <span className="text-[11px] font-bold text-gray-900 leading-none">Madhurima</span>
                   <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                 </div>
                 <div className="flex items-center gap-1.5 mt-1">
                   <svg width="22" height="6" viewBox="0 0 24 8" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#1a73e8]">
                      <rect y="2" width="2" height="4" rx="1" fill="currentColor"/>
                      <rect x="3" y="1" width="2" height="6" rx="1" fill="currentColor"/>
                      <rect x="6" width="2" height="8" rx="1" fill="currentColor"/>
                      <rect x="9" y="1" width="2" height="6" rx="1" fill="currentColor"/>
                      <rect x="12" y="2" width="2" height="4" rx="1" fill="currentColor"/>
                      <rect x="15" width="2" height="8" rx="1" fill="currentColor"/>
                      <rect x="18" y="1" width="2" height="6" rx="1" fill="currentColor"/>
                      <rect x="21" y="2" width="2" height="4" rx="1" fill="currentColor"/>
                   </svg>
                   <span className="text-[9px] text-gray-500 font-medium tracking-wide">
                     AI voice chat
                   </span>
                 </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
}
