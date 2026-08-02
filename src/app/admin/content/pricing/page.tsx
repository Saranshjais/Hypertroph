"use client";

import { useState } from "react";
import { Save, Plus, Trash2 } from "lucide-react";

const defaultPlans = [
  { id: 1, name: "12 WEEKS PLAN", originalPrice: "₹ 11,999", discountedPrice: "₹ 8,999", recommended: false },
  { id: 2, name: "24 WEEKS PLAN", originalPrice: "₹ 19,999", discountedPrice: "₹ 15,999", recommended: true },
];

export default function PricingEditor() {
  const [plans, setPlans] = useState(defaultPlans);
  const [isSaving, setIsSaving] = useState(false);

  const handleSave = () => {
    setIsSaving(true);
    setTimeout(() => setIsSaving(false), 1000);
  };

  const removePlan = (id: number) => {
    setPlans(plans.filter(p => p.id !== id));
  };

  return (
    <div className="max-w-5xl">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-black tracking-tighter uppercase text-white mb-1">Pricing Editor</h1>
          <p className="text-zinc-400 text-sm">Manage your membership tiers and pricing.</p>
        </div>
        <button 
          onClick={handleSave}
          disabled={isSaving}
          className="bg-[#1a73e8] hover:bg-[#1a73e8]/90 text-white px-5 py-2 rounded-lg text-sm font-bold transition-all flex items-center gap-2 disabled:opacity-50"
        >
          {isSaving ? (
            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
          ) : (
            <Save className="w-4 h-4" />
          )}
          {isSaving ? "Saving..." : "Save Changes"}
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {plans.map((plan) => (
          <div key={plan.id} className={`bg-[#141414] border ${plan.recommended ? 'border-[#ffb800]' : 'border-white/10'} rounded-3xl p-6 relative group`}>
            
            <div className="flex justify-between items-start mb-6">
              <div className="w-full">
                <label className="text-xs font-bold text-zinc-500 uppercase block mb-1">Plan Name</label>
                <input 
                  type="text" 
                  defaultValue={plan.name}
                  className="w-full bg-[#09090b] border border-white/10 rounded-lg px-3 py-2 text-white text-lg focus:outline-none focus:border-[#1a73e8] transition-colors font-black uppercase"
                />
              </div>
              <button onClick={() => removePlan(plan.id)} className="ml-4 p-2 text-zinc-600 hover:text-red-400 transition-colors opacity-0 group-hover:opacity-100">
                <Trash2 className="w-5 h-5" />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <label className="text-xs font-bold text-zinc-500 uppercase block mb-1">Original Price</label>
                <input 
                  type="text" 
                  defaultValue={plan.originalPrice}
                  className="w-full bg-[#09090b] border border-white/10 rounded-lg px-3 py-2 text-zinc-400 text-sm focus:outline-none focus:border-[#1a73e8] line-through decoration-red-500"
                />
              </div>
              <div>
                <label className="text-xs font-bold text-zinc-500 uppercase block mb-1">Discounted Price</label>
                <input 
                  type="text" 
                  defaultValue={plan.discountedPrice}
                  className="w-full bg-[#09090b] border border-white/10 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-[#1a73e8] font-bold"
                />
              </div>
            </div>

            <label className="flex items-center gap-3 cursor-pointer p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-colors">
              <input 
                type="checkbox" 
                defaultChecked={plan.recommended}
                className="w-4 h-4 rounded border-white/20 text-[#ffb800] focus:ring-[#ffb800] focus:ring-offset-0 bg-[#09090b]"
              />
              <span className="text-sm font-bold text-white uppercase tracking-wider">Highlight as Recommended Plan</span>
            </label>

          </div>
        ))}

        <button className="h-full min-h-[300px] border-2 border-dashed border-white/10 hover:border-[#1a73e8]/50 rounded-3xl flex flex-col items-center justify-center gap-3 text-sm font-bold text-zinc-400 hover:text-[#1a73e8] transition-colors bg-[#141414]/50 hover:bg-[#141414]">
          <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-2">
            <Plus className="w-6 h-6" /> 
          </div>
          Add New Pricing Tier
        </button>
      </div>
    </div>
  )
}
