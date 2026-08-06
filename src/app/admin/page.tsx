"use client";

import { useContext } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, AreaChart, Area } from 'recharts';
import { Users, CreditCard, Activity, ArrowUpRight, ArrowDownRight, Smartphone, ShieldCheck, Send, CheckCircle2, AlertTriangle, ChevronRight, Clock, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { AdminThemeContext } from "./layout";

const revenueData = [
  { name: 'Jan', revenue: 24000, clients: 120 },
  { name: 'Feb', revenue: 28000, clients: 145 },
  { name: 'Mar', revenue: 32000, clients: 170 },
  { name: 'Apr', revenue: 36000, clients: 190 },
  { name: 'May', revenue: 41000, clients: 215 },
  { name: 'Jun', revenue: 45231, clients: 240 },
];

const acquisitionData = [
  { name: 'Instagram', users: 450 },
  { name: 'YouTube', users: 320 },
  { name: 'Organic SEO', users: 210 },
  { name: 'Client Referrals', users: 180 },
];

export default function AdminDashboardOverview() {
  const { theme } = useContext(AdminThemeContext);
  const isLight = theme === "light";

  return (
    <div className={`flex flex-col gap-8 font-sans transition-colors duration-300 ${
      isLight ? "text-slate-900" : "text-zinc-100"
    }`}>
      
      {/* Top Banner / Welcome Bar */}
      <div className={`flex flex-wrap items-center justify-between gap-4 p-6 rounded-2xl border transition-all ${
        isLight 
          ? "bg-white border-slate-200/90 shadow-sm" 
          : "bg-[#111827] border-slate-800"
      }`}>
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className={`px-2.5 py-0.5 rounded-full text-xs font-black uppercase tracking-wider ${
              isLight 
                ? "bg-blue-50 text-[#005580] border border-blue-200" 
                : "bg-[#1a73e8]/20 text-[#1a73e8] border border-[#1a73e8]/30"
            }`}>
              Executive View
            </span>
            <span className={`text-xs font-medium ${isLight ? "text-slate-500" : "text-zinc-400"}`}>Real-Time Operational Metrics</span>
          </div>
          <h1 className={`text-2xl md:text-3xl font-black uppercase tracking-tight ${
            isLight ? "text-slate-900" : "text-white"
          }`}>
            Command Center
          </h1>
          <p className={`text-sm mt-1 ${isLight ? "text-slate-500" : "text-zinc-400"}`}>
            Monitor overall revenue growth, client retention, and WhatsApp diet automation performance.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Link href="/admin/whatsapp-automation" passHref>
            <button className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs shadow-md transition-all ${
              isLight 
                ? "bg-[#005580] hover:bg-[#004060] text-white" 
                : "bg-[#1a73e8] hover:bg-blue-600 text-white"
            }`}>
              <Smartphone className="w-4 h-4" />
              Open WhatsApp Automation Hub
            </button>
          </Link>
        </div>
      </div>

      {/* 4 Core Executive Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        
        {/* Metric 1: Monthly Revenue */}
        <div className={`rounded-2xl p-5 border transition-all ${
          isLight 
            ? "bg-white border-slate-200/90 shadow-sm hover:shadow-md" 
            : "bg-[#111827] border-slate-800 hover:border-slate-700"
        }`}>
          <div className="flex items-center justify-between mb-3">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center border ${
              isLight 
                ? "bg-blue-50 border-blue-200 text-[#005580]" 
                : "bg-[#1a73e8]/10 border-[#1a73e8]/20 text-[#1a73e8]"
            }`}>
              <CreditCard className="w-5 h-5" />
            </div>
            <span className="flex items-center gap-1 text-xs font-black text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
              <ArrowUpRight className="w-3 h-3" /> +12.5%
            </span>
          </div>
          <div className={`text-xs font-bold uppercase tracking-wider mb-1 ${isLight ? "text-slate-400" : "text-zinc-400"}`}>Monthly Revenue</div>
          <div className={`text-3xl font-black ${isLight ? "text-slate-900" : "text-white"}`}>$45,231.89</div>
          <div className={`text-[11px] mt-2 font-medium ${isLight ? "text-slate-400" : "text-zinc-500"}`}>vs $40,200 last month</div>
        </div>

        {/* Metric 2: Active Clients */}
        <div className={`rounded-2xl p-5 border transition-all ${
          isLight 
            ? "bg-white border-slate-200/90 shadow-sm hover:shadow-md" 
            : "bg-[#111827] border-slate-800 hover:border-slate-700"
        }`}>
          <div className="flex items-center justify-between mb-3">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center border ${
              isLight 
                ? "bg-amber-50 border-amber-200 text-amber-600" 
                : "bg-[#ffb800]/10 border-[#ffb800]/20 text-[#ffb800]"
            }`}>
              <Users className="w-5 h-5" />
            </div>
            <span className="flex items-center gap-1 text-xs font-black text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
              <ArrowUpRight className="w-3 h-3" /> +18.2%
            </span>
          </div>
          <div className={`text-xs font-bold uppercase tracking-wider mb-1 ${isLight ? "text-slate-400" : "text-zinc-400"}`}>Active Clients</div>
          <div className={`text-3xl font-black ${isLight ? "text-slate-900" : "text-white"}`}>2,350</div>
          <div className={`text-[11px] mt-2 font-medium ${isLight ? "text-slate-400" : "text-zinc-500"}`}>Active coaching profiles</div>
        </div>

        {/* Metric 3: Diet Cards Dispatched */}
        <div className={`rounded-2xl p-5 border transition-all ${
          isLight 
            ? "bg-white border-slate-200/90 shadow-sm hover:shadow-md" 
            : "bg-[#111827] border-slate-800 hover:border-slate-700"
        }`}>
          <div className="flex items-center justify-between mb-3">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center border ${
              isLight 
                ? "bg-emerald-50 border-emerald-200 text-emerald-600" 
                : "bg-emerald-500/10 border-emerald-500/20 text-emerald-400"
            }`}>
              <Send className="w-5 h-5" />
            </div>
            <span className="flex items-center gap-1 text-xs font-black text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
              <CheckCircle2 className="w-3 h-3" /> 100% Sent
            </span>
          </div>
          <div className={`text-xs font-bold uppercase tracking-wider mb-1 ${isLight ? "text-slate-400" : "text-zinc-400"}`}>WhatsApp Cards Sent</div>
          <div className={`text-3xl font-black ${isLight ? "text-slate-900" : "text-white"}`}>184 Today</div>
          <div className={`text-[11px] mt-2 font-medium ${isLight ? "text-slate-400" : "text-zinc-500"}`}>07:00 AM dispatch cycle</div>
        </div>

        {/* Metric 4: Retention Rate */}
        <div className={`rounded-2xl p-5 border transition-all ${
          isLight 
            ? "bg-white border-slate-200/90 shadow-sm hover:shadow-md" 
            : "bg-[#111827] border-slate-800 hover:border-slate-700"
        }`}>
          <div className="flex items-center justify-between mb-3">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center border ${
              isLight 
                ? "bg-purple-50 border-purple-200 text-purple-600" 
                : "bg-purple-500/10 border-purple-500/20 text-purple-400"
            }`}>
              <Activity className="w-5 h-5" />
            </div>
            <span className="flex items-center gap-1 text-xs font-black text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
              98.8%
            </span>
          </div>
          <div className={`text-xs font-bold uppercase tracking-wider mb-1 ${isLight ? "text-slate-400" : "text-zinc-400"}`}>Client Retention</div>
          <div className={`text-3xl font-black ${isLight ? "text-slate-900" : "text-white"}`}>98.8%</div>
          <div className={`text-[11px] mt-2 font-medium ${isLight ? "text-slate-400" : "text-zinc-500"}`}>1.2% monthly churn rate</div>
        </div>

      </div>

      {/* Live System Health Widget & Quick Queue Bar */}
      <div className={`rounded-2xl p-6 border flex flex-wrap items-center justify-between gap-6 transition-all ${
        isLight 
          ? "bg-white border-slate-200/90 shadow-sm" 
          : "bg-[#111827] border-slate-800"
      }`}>
        <div className="flex items-center gap-4">
          <div className={`w-12 h-12 rounded-xl flex items-center justify-center border shrink-0 ${
            isLight 
              ? "bg-amber-50 border-amber-200 text-amber-600" 
              : "bg-[#ffb800]/10 border-[#ffb800]/30 text-[#ffb800]"
          }`}>
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className={`text-base font-black ${isLight ? "text-slate-900" : "text-white"}`}>
                WhatsApp Automation Safety Status
              </h3>
              <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase border ${
                isLight 
                  ? "bg-amber-100 text-amber-800 border-amber-300" 
                  : "bg-amber-500/20 text-amber-300 border-amber-500/30"
              }`}>
                3 Pending Review
              </span>
            </div>
            <p className={`text-xs mt-0.5 ${isLight ? "text-slate-500" : "text-zinc-400"}`}>
              1 plan flagged red due to calorie floor warning (1100 kcal). Requires coach review before dispatch.
            </p>
          </div>
        </div>

        <Link href="/admin/whatsapp-automation" passHref>
          <button className={`px-4 py-2 rounded-xl text-xs font-bold transition-all border flex items-center gap-2 ${
            isLight 
              ? "bg-slate-100 hover:bg-slate-200 text-slate-800 border-slate-200" 
              : "bg-white/10 hover:bg-white/20 text-white border-white/10"
          }`}>
            Review Pending Plans <ChevronRight className="w-4 h-4" />
          </button>
        </Link>
      </div>

      {/* Analytics Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Main Revenue Growth Area Chart */}
        <div className={`lg:col-span-2 rounded-2xl p-6 border transition-all ${
          isLight 
            ? "bg-white border-slate-200/90 shadow-sm" 
            : "bg-[#111827] border-slate-800"
        }`}>
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className={`text-sm font-black uppercase tracking-wider ${isLight ? "text-slate-900" : "text-white"}`}>
                Revenue & Client Growth
              </h3>
              <p className={`text-xs ${isLight ? "text-slate-400" : "text-zinc-400"}`}>Monthly recurring coaching revenue trajectory</p>
            </div>
            <span className={`text-xs font-bold px-3 py-1 rounded-lg border ${
              isLight 
                ? "bg-slate-100 text-slate-600 border-slate-200" 
                : "bg-white/5 text-zinc-400 border-white/10"
            }`}>
              YTD 2026
            </span>
          </div>

          <div className="h-[280px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={revenueData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="revenueGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor={isLight ? "#005580" : "#1a73e8"} stopOpacity={0.4}/>
                    <stop offset="95%" stopColor={isLight ? "#005580" : "#1a73e8"} stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke={isLight ? "#e2e8f0" : "#ffffff10"} vertical={false} />
                <XAxis dataKey="name" stroke={isLight ? "#64748b" : "#71717a"} fontSize={11} tickLine={false} axisLine={false} />
                <YAxis stroke={isLight ? "#64748b" : "#71717a"} fontSize={11} tickLine={false} axisLine={false} tickFormatter={(val) => `$${val / 1000}k`} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: isLight ? '#ffffff' : '#09090b', 
                    borderColor: isLight ? '#cbd5e1' : '#ffffff20', 
                    borderRadius: '12px',
                    color: isLight ? '#0f172a' : '#ffffff'
                  }}
                  itemStyle={{ fontSize: '12px', fontWeight: 'bold' }}
                />
                <Area type="monotone" dataKey="revenue" stroke={isLight ? "#005580" : "#1a73e8"} strokeWidth={3} fillOpacity={1} fill="url(#revenueGrad)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Client Acquisition Sources Bar Chart */}
        <div className={`rounded-2xl p-6 border transition-all ${
          isLight 
            ? "bg-white border-slate-200/90 shadow-sm" 
            : "bg-[#111827] border-slate-800"
        }`}>
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className={`text-sm font-black uppercase tracking-wider ${isLight ? "text-slate-900" : "text-white"}`}>
                Acquisition Channels
              </h3>
              <p className={`text-xs ${isLight ? "text-slate-400" : "text-zinc-400"}`}>New client signups by channel</p>
            </div>
          </div>

          <div className="h-[280px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={acquisitionData} margin={{ top: 10, right: 0, left: -30, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke={isLight ? "#e2e8f0" : "#ffffff10"} vertical={false} />
                <XAxis dataKey="name" stroke={isLight ? "#64748b" : "#71717a"} fontSize={10} tickLine={false} axisLine={false} />
                <YAxis stroke={isLight ? "#64748b" : "#71717a"} fontSize={11} tickLine={false} axisLine={false} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: isLight ? '#ffffff' : '#09090b', 
                    borderColor: isLight ? '#cbd5e1' : '#ffffff20', 
                    borderRadius: '12px',
                    color: isLight ? '#d97706' : '#ffb800'
                  }}
                  itemStyle={{ fontSize: '12px', fontWeight: 'bold' }}
                />
                <Bar dataKey="users" fill={isLight ? "#d97706" : "#ffb800"} radius={[6, 6, 0, 0]} barSize={36} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

      </div>

      {/* Live Operational Activity Stream */}
      <div className={`rounded-2xl p-6 border transition-all ${
        isLight 
          ? "bg-white border-slate-200/90 shadow-sm" 
          : "bg-[#111827] border-slate-800"
      }`}>
        <h3 className={`text-sm font-black uppercase tracking-wider mb-4 ${isLight ? "text-slate-900" : "text-white"}`}>
          Real-Time Operations Stream
        </h3>

        <div className={`divide-y ${isLight ? "divide-slate-100" : "divide-white/5"}`}>
          <div className="py-3 flex items-center justify-between text-xs">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 font-bold">
                ✓
              </div>
              <div>
                <span className={`font-bold ${isLight ? "text-slate-900" : "text-white"}`}>Rahul Sharma</span>
                <span className={isLight ? "text-slate-500" : "text-zinc-400"}> — Meal 2 photo verified by AI Vision (672 kcal, 65g Protein)</span>
              </div>
            </div>
            <span className={`text-[11px] font-mono ${isLight ? "text-slate-400" : "text-zinc-500"}`}>2 mins ago</span>
          </div>

          <div className="py-3 flex items-center justify-between text-xs">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center text-[#005580] font-bold">
                💬
              </div>
              <div>
                <span className={`font-bold ${isLight ? "text-slate-900" : "text-white"}`}>Priya Patel</span>
                <span className={isLight ? "text-slate-500" : "text-zinc-400"}> — Daily diet card dispatched to WhatsApp (+919812345678)</span>
              </div>
            </div>
            <span className={`text-[11px] font-mono ${isLight ? "text-slate-400" : "text-zinc-500"}`}>14 mins ago</span>
          </div>

          <div className="py-3 flex items-center justify-between text-xs">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600 font-bold">
                ⚡
              </div>
              <div>
                <span className={`font-bold ${isLight ? "text-slate-900" : "text-white"}`}>Vikram Malhotra</span>
                <span className={isLight ? "text-slate-500" : "text-zinc-400"}> — Applied +150 kcal lean bulk calorie adjustment</span>
              </div>
            </div>
            <span className={`text-[11px] font-mono ${isLight ? "text-slate-400" : "text-zinc-500"}`}>1 hour ago</span>
          </div>
        </div>
      </div>

    </div>
  );
}
