"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, PenTool, LayoutTemplate, MessageSquare, DollarSign, Settings, LogOut, Search, Bell, Users } from "lucide-react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname();

  const navigation = [
    { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
    { name: "Hero Section", href: "/admin/content/hero", icon: LayoutTemplate },
    { name: "Methodology", href: "/admin/content/method", icon: PenTool },
    { name: "Testimonials", href: "/admin/content/testimonials", icon: Users },
    { name: "Pricing Plans", href: "/admin/content/pricing", icon: DollarSign },
    { name: "FAQs", href: "/admin/content/faq", icon: MessageSquare },
    { name: "Settings", href: "/admin/settings", icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-50 flex font-sans selection:bg-[#1a73e8] selection:text-white">
      
      {/* Sidebar */}
      <aside className="w-64 border-r border-white/10 bg-[#09090b] flex flex-col hidden md:flex sticky top-0 h-screen">
        <div className="p-6 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2 text-[#ffb800] font-black text-xl tracking-tighter uppercase">
            <span className="w-6 h-6 rounded bg-[#ffb800] text-black flex items-center justify-center text-sm">H</span>
            Admin
          </div>
        </div>
        
        <div className="flex-1 overflow-y-auto py-6 px-4 flex flex-col gap-1">
          <div className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-2 px-3">Overview</div>
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link 
                key={item.name} 
                href={item.href}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200 text-sm font-medium ${
                  isActive 
                  ? "bg-white/10 text-white shadow-sm" 
                  : "text-zinc-400 hover:bg-white/5 hover:text-zinc-200"
                }`}
              >
                <item.icon className={`w-4 h-4 ${isActive ? "text-[#1a73e8]" : "text-zinc-500"}`} />
                {item.name}
              </Link>
            )
          })}
        </div>

        <div className="p-4 border-t border-white/10">
          <button className="flex items-center gap-3 px-3 py-2 w-full rounded-lg text-sm font-medium text-red-400 hover:bg-red-500/10 hover:text-red-300 transition-colors">
            <LogOut className="w-4 h-4" />
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0">
        
        {/* Top Header */}
        <header className="h-16 border-b border-white/10 bg-[#09090b]/80 backdrop-blur flex items-center justify-between px-6 sticky top-0 z-50">
          <div className="flex items-center gap-4 flex-1">
            <div className="relative w-full max-w-md hidden sm:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
              <input 
                type="text" 
                placeholder="Search..." 
                className="w-full bg-white/5 border border-white/10 rounded-full pl-10 pr-4 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a73e8] text-white placeholder:text-zinc-600 transition-shadow"
              />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="relative p-2 text-zinc-400 hover:text-white transition-colors">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[#ffb800] rounded-full"></span>
            </button>
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#1a73e8] to-[#ffb800] border-2 border-white/10 cursor-pointer"></div>
          </div>
        </header>

        {/* Page Content */}
        <div className="p-6 md:p-8 flex-1 overflow-x-hidden">
          {children}
        </div>
      </main>

    </div>
  )
}
