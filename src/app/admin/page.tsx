"use client";

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { Users, CreditCard, Activity, ArrowUpRight, ArrowDownRight } from 'lucide-react';

const revenueData = [
  { name: 'Jan', revenue: 4000 },
  { name: 'Feb', revenue: 3000 },
  { name: 'Mar', revenue: 5000 },
  { name: 'Apr', revenue: 4500 },
  { name: 'May', revenue: 6000 },
  { name: 'Jun', revenue: 5500 },
  { name: 'Jul', revenue: 7000 },
  { name: 'Aug', revenue: 8500 },
  { name: 'Sep', revenue: 8000 },
  { name: 'Oct', revenue: 9500 },
  { name: 'Nov', revenue: 10000 },
  { name: 'Dec', revenue: 12000 },
];

const sourceData = [
  { name: 'IG', users: 400 },
  { name: 'YT', users: 300 },
  { name: 'SEO', users: 200 },
  { name: 'Ref', users: 100 },
];

export default function AdminDashboard() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-black tracking-tighter uppercase text-white">Dashboard Overview</h1>
        <div className="text-sm font-medium text-zinc-400 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
          Last 30 Days
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Metric Card 1 */}
        <div className="bg-[#141414] border border-white/10 rounded-2xl p-6 relative overflow-hidden group hover:border-[#1a73e8]/30 transition-colors">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1a73e8]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div className="flex items-center justify-between mb-4">
            <div className="w-10 h-10 rounded-xl bg-[#1a73e8]/10 flex items-center justify-center border border-[#1a73e8]/20 text-[#1a73e8]">
              <CreditCard className="w-5 h-5" />
            </div>
            <span className="flex items-center gap-1 text-xs font-semibold text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded-full">
              <ArrowUpRight className="w-3 h-3" /> +12.5%
            </span>
          </div>
          <div className="text-zinc-400 text-sm font-medium mb-1 uppercase tracking-wider">Total Revenue</div>
          <div className="text-3xl font-black text-white">$45,231.89</div>
        </div>

        {/* Metric Card 2 */}
        <div className="bg-[#141414] border border-white/10 rounded-2xl p-6 relative overflow-hidden group hover:border-[#ffb800]/30 transition-colors">
          <div className="absolute inset-0 bg-gradient-to-br from-[#ffb800]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div className="flex items-center justify-between mb-4">
            <div className="w-10 h-10 rounded-xl bg-[#ffb800]/10 flex items-center justify-center border border-[#ffb800]/20 text-[#ffb800]">
              <Users className="w-5 h-5" />
            </div>
            <span className="flex items-center gap-1 text-xs font-semibold text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded-full">
              <ArrowUpRight className="w-3 h-3" /> +18.2%
            </span>
          </div>
          <div className="text-zinc-400 text-sm font-medium mb-1 uppercase tracking-wider">Active Clients</div>
          <div className="text-3xl font-black text-white">+2,350</div>
        </div>

        {/* Metric Card 3 */}
        <div className="bg-[#141414] border border-white/10 rounded-2xl p-6 relative overflow-hidden group hover:border-purple-500/30 transition-colors">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div className="flex items-center justify-between mb-4">
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center border border-purple-500/20 text-purple-400">
              <Activity className="w-5 h-5" />
            </div>
            <span className="flex items-center gap-1 text-xs font-semibold text-rose-400 bg-rose-400/10 px-2 py-1 rounded-full">
              <ArrowDownRight className="w-3 h-3" /> -2.4%
            </span>
          </div>
          <div className="text-zinc-400 text-sm font-medium mb-1 uppercase tracking-wider">Churn Rate</div>
          <div className="text-3xl font-black text-white">1.2%</div>
        </div>
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Main Chart */}
        <div className="lg:col-span-2 bg-[#141414] border border-white/10 rounded-2xl p-6">
          <h3 className="text-sm font-semibold text-zinc-400 mb-6 uppercase tracking-wider">Revenue Overview</h3>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={revenueData} margin={{ top: 5, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" vertical={false} />
                <XAxis 
                  dataKey="name" 
                  stroke="#71717a" 
                  fontSize={12} 
                  tickLine={false} 
                  axisLine={false} 
                  dy={10} 
                />
                <YAxis 
                  stroke="#71717a" 
                  fontSize={12} 
                  tickLine={false} 
                  axisLine={false} 
                  tickFormatter={(value) => `$${value}`} 
                  dx={-10}
                />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#09090b', borderColor: '#ffffff10', borderRadius: '8px' }}
                  itemStyle={{ color: '#fff' }}
                />
                <Line 
                  type="monotone" 
                  dataKey="revenue" 
                  stroke="#1a73e8" 
                  strokeWidth={3}
                  dot={{ fill: '#09090b', stroke: '#1a73e8', strokeWidth: 2, r: 4 }}
                  activeDot={{ r: 6, strokeWidth: 0, fill: '#ffb800' }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Secondary Chart */}
        <div className="bg-[#141414] border border-white/10 rounded-2xl p-6">
          <h3 className="text-sm font-semibold text-zinc-400 mb-6 uppercase tracking-wider">Acquisition Sources</h3>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={sourceData} margin={{ top: 5, right: 0, left: -30, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" vertical={false} />
                <XAxis 
                  dataKey="name" 
                  stroke="#71717a" 
                  fontSize={12} 
                  tickLine={false} 
                  axisLine={false} 
                  dy={10} 
                />
                <YAxis 
                  stroke="#71717a" 
                  fontSize={12} 
                  tickLine={false} 
                  axisLine={false} 
                />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#09090b', borderColor: '#ffffff10', borderRadius: '8px' }}
                  itemStyle={{ color: '#ffb800' }}
                  cursor={{ fill: '#ffffff05' }}
                />
                <Bar 
                  dataKey="users" 
                  fill="#ffb800" 
                  radius={[4, 4, 0, 0]} 
                  barSize={40}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

      </div>
    </div>
  )
}
