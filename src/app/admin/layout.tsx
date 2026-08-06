"use client";

import { useState, useEffect, createContext, useContext } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, PenTool, LayoutTemplate, MessageSquare, 
  DollarSign, Settings, LogOut, Search, Bell, Users, 
  Smartphone, ShieldCheck, Activity, ChevronRight, Sun, Moon, Sparkles
} from "lucide-react";

// Admin Theme Context
type Theme = "light" | "dark";
interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}
export const AdminThemeContext = createContext<ThemeContextType>({
  theme: "light",
  toggleTheme: () => {},
});

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname();
  const [theme, setTheme] = useState<Theme>("light");

  // Load saved theme preference
  useEffect(() => {
    const savedTheme = localStorage.getItem("hypertroph_admin_theme") as Theme;
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    localStorage.setItem("hypertroph_admin_theme", nextTheme);
  };

  const navigationSections = [
    {
      title: "MAIN OVERVIEW",
      items: [
        { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
      ]
    },
    {
      title: "AUTOMATION & AI",
      items: [
        { name: "WhatsApp Automation", href: "/admin/whatsapp-automation", icon: Smartphone, badge: "3" },
      ]
    },
    {
      title: "CONTENT MANAGEMENT",
      items: [
        { name: "Hero Section", href: "/admin/content/hero", icon: LayoutTemplate },
        { name: "Methodology", href: "/admin/content/method", icon: PenTool },
        { name: "Testimonials", href: "/admin/content/testimonials", icon: Users },
        { name: "Pricing Plans", href: "/admin/content/pricing", icon: DollarSign },
        { name: "FAQs", href: "/admin/content/faq", icon: MessageSquare },
      ]
    },
    {
      title: "SYSTEM",
      items: [
        { name: "Settings", href: "/admin/settings", icon: Settings },
      ]
    }
  ];

  const getPageTitle = () => {
    if (pathname === '/admin') return 'Executive Dashboard Overview';
    if (pathname === '/admin/whatsapp-automation') return 'WhatsApp Diet & Vision AI Hub';
    if (pathname.includes('/content/hero')) return 'Hero Section Management';
    if (pathname.includes('/content/method')) return 'Methodology CMS';
    if (pathname.includes('/content/testimonials')) return 'Client Testimonials CMS';
    if (pathname.includes('/content/pricing')) return 'Pricing Plans CMS';
    if (pathname.includes('/content/faq')) return 'FAQ Management';
    if (pathname.includes('/settings')) return 'System Settings';
    return 'Admin Control Center';
  };

  const isLight = theme === "light";

  return (
    <AdminThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={`min-h-screen flex font-sans transition-colors duration-300 ${
        isLight ? "bg-[#f8fafc] text-slate-900 selection:bg-[#005580] selection:text-white" : "bg-[#0a0f1d] text-zinc-50 selection:bg-[#1a73e8] selection:text-white"
      }`}>
        
        {/* Sidebar Navigation */}
        <aside className={`w-64 flex flex-col hidden md:flex sticky top-0 h-screen shrink-0 transition-colors duration-300 ${
          isLight ? "bg-white border-r border-slate-200/80 shadow-sm" : "bg-[#0f172a] border-r border-slate-800"
        }`}>
          
          {/* Brand Header */}
          <div className={`p-6 border-b flex items-center justify-between ${
            isLight ? "border-slate-200/80" : "border-slate-800"
          }`}>
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#005580] to-[#ffb800] text-white font-black flex items-center justify-center text-base shadow-md">
                H
              </div>
              <div>
                <div className={`font-black text-base tracking-tighter uppercase leading-tight ${
                  isLight ? "text-slate-900" : "text-white"
                }`}>
                  Hypertroph<span className="text-[#ffb800] italic">OS</span>
                </div>
                <span className="text-[10px] font-bold text-slate-400 tracking-widest uppercase">Admin Engine</span>
              </div>
            </div>
          </div>
          
          {/* Nav Items */}
          <div className="flex-1 overflow-y-auto py-6 px-4 flex flex-col gap-6">
            {navigationSections.map((section, idx) => (
              <div key={idx} className="flex flex-col gap-1.5">
                <div className={`text-[10px] font-black uppercase tracking-widest px-3 mb-1 ${
                  isLight ? "text-slate-400" : "text-slate-500"
                }`}>
                  {section.title}
                </div>
                {section.items.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link 
                      key={item.name} 
                      href={item.href}
                      className={`flex items-center justify-between px-3 py-2.5 rounded-xl transition-all duration-200 text-xs font-bold ${
                        isActive 
                        ? isLight
                          ? "bg-slate-100 text-[#005580] border border-slate-200 shadow-sm"
                          : "bg-white/10 text-white shadow-sm border border-white/10"
                        : isLight
                          ? "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                          : "text-zinc-400 hover:bg-white/5 hover:text-zinc-200"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <item.icon className={`w-4 h-4 ${
                          isActive 
                            ? isLight ? "text-[#005580]" : "text-[#1a73e8]"
                            : isLight ? "text-slate-400" : "text-zinc-500"
                        }`} />
                        <span>{item.name}</span>
                      </div>
                      {item.badge && (
                        <span className={`px-2 py-0.5 text-[10px] font-black rounded-full border ${
                          isLight
                            ? "bg-amber-100 text-amber-800 border-amber-300"
                            : "bg-amber-500/20 text-amber-400 border-amber-500/30"
                        }`}>
                          {item.badge}
                        </span>
                      )}
                    </Link>
                  );
                })}
              </div>
            ))}
          </div>

          {/* User Profile & Sign Out Footer */}
          <div className={`p-4 border-t ${
            isLight ? "border-slate-200/80 bg-slate-50/50" : "border-slate-800 bg-[#09090b]"
          }`}>
            <div className="flex items-center gap-3 mb-3 px-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#005580] to-[#ffb800] border border-slate-300"></div>
              <div className="truncate">
                <div className={`text-xs font-bold truncate ${isLight ? "text-slate-900" : "text-white"}`}>Head Coach Admin</div>
                <div className="text-[10px] text-slate-400 truncate">admin@hypertroph.os</div>
              </div>
            </div>
            <button className="flex items-center justify-center gap-2 px-3 py-2 w-full rounded-xl text-xs font-bold text-rose-500 bg-rose-50 hover:bg-rose-100 transition-colors border border-rose-200">
              <LogOut className="w-3.5 h-3.5" />
              Sign Out
            </button>
          </div>
        </aside>

        {/* Main Content Workspace */}
        <main className="flex-1 flex flex-col min-w-0">
          
          {/* Top Header Bar */}
          <header className={`h-16 border-b flex items-center justify-between px-6 sticky top-0 z-50 transition-colors duration-300 ${
            isLight ? "bg-white/80 border-slate-200/80 backdrop-blur-md" : "bg-[#0f172a]/80 border-slate-800 backdrop-blur-md"
          }`}>
            
            {/* Breadcrumbs */}
            <div className="flex items-center gap-2 text-xs">
              <span className={isLight ? "text-slate-400 font-semibold" : "text-zinc-500 font-semibold"}>Admin</span>
              <ChevronRight className={`w-3.5 h-3.5 ${isLight ? "text-slate-300" : "text-zinc-600"}`} />
              <span className={`font-bold tracking-wide ${isLight ? "text-slate-900" : "text-white"}`}>{getPageTitle()}</span>
            </div>

            {/* Right: Theme Switcher & Actions */}
            <div className="flex items-center gap-4">
              
              {/* Sun / Moon Theme Toggle */}
              <button
                onClick={toggleTheme}
                aria-label="Toggle light/dark theme"
                className={`p-2 rounded-xl border flex items-center gap-2 text-xs font-bold transition-all shadow-sm ${
                  isLight 
                    ? "bg-slate-100 hover:bg-slate-200 border-slate-200 text-slate-800" 
                    : "bg-slate-800 hover:bg-slate-700 border-slate-700 text-slate-200"
                }`}
              >
                {isLight ? (
                  <>
                    <Moon className="w-4 h-4 text-slate-700" />
                    <span className="hidden sm:inline">Dark Mode</span>
                  </>
                ) : (
                  <>
                    <Sun className="w-4 h-4 text-amber-400" />
                    <span className="hidden sm:inline">Light Mode</span>
                  </>
                )}
              </button>

              {/* Live Gateway Pill */}
              <div className={`hidden sm:flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold border ${
                isLight 
                  ? "bg-emerald-50 text-emerald-700 border-emerald-200" 
                  : "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
              }`}>
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>WhatsApp AI Online</span>
              </div>

              {/* Quick Search */}
              <div className="relative hidden md:block w-44">
                <Search className={`absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 ${isLight ? "text-slate-400" : "text-zinc-500"}`} />
                <input 
                  type="text" 
                  placeholder="Search..." 
                  className={`w-full border rounded-full pl-9 pr-7 py-1 text-xs focus:outline-none focus:ring-2 focus:ring-[#005580] transition-colors ${
                    isLight 
                      ? "bg-slate-100 border-slate-200 text-slate-800 placeholder:text-slate-400" 
                      : "bg-white/5 border-white/10 text-white placeholder:text-zinc-600"
                  }`}
                />
              </div>

              {/* Notification Bell */}
              <button className={`relative p-2 rounded-xl border transition-colors ${
                isLight 
                  ? "bg-slate-100 hover:bg-slate-200 border-slate-200 text-slate-700" 
                  : "bg-white/5 hover:bg-white/10 border-white/10 text-zinc-400"
              }`}>
                <Bell className="w-4 h-4" />
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[#ffb800] rounded-full"></span>
              </button>
            </div>
          </header>

          {/* Main Canvas */}
          <div className="p-6 md:p-8 flex-1 overflow-x-hidden">
            {children}
          </div>
        </main>

      </div>
    </AdminThemeContext.Provider>
  );
}
