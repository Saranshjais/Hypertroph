"use client";

import { useState } from "react";
import { Save, Plus, GripVertical, Trash2 } from "lucide-react";

const defaultPillars = [
  { id: 1, title: "PERSONAL TRAINING", desc: "Burn Fat rapidly using science based workouts. Stop wasting hours in the gym on useless exercises.", icon: "Dumbbell" },
  { id: 2, title: "DIET PLAN", desc: "Regular Indian Diet - No fancy foods. Multiple options in each meal. Calories, Protein all done for you.", icon: "Utensils" },
  { id: 3, title: "PLAN CHANGES", desc: "Changes to your training & diet plan are made as and when required.", icon: "Sliders" },
];

export default function MethodEditor() {
  const [pillars, setPillars] = useState(defaultPillars);
  const [isSaving, setIsSaving] = useState(false);

  const handleSave = () => {
    setIsSaving(true);
    setTimeout(() => setIsSaving(false), 1000);
  };

  const removePillar = (id: number) => {
    setPillars(pillars.filter(p => p.id !== id));
  };

  return (
    <div className="max-w-4xl">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-black tracking-tighter uppercase text-white mb-1">Methodology Editor</h1>
          <p className="text-zinc-400 text-sm">Manage the steps in "How Coaching Works".</p>
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

      <div className="space-y-4">
        {pillars.map((pillar, index) => (
          <div key={pillar.id} className="bg-[#141414] border border-white/10 rounded-2xl p-6 flex gap-4 group relative hover:border-white/20 transition-colors">
            
            {/* Drag Handle */}
            <div className="pt-2 cursor-grab text-zinc-600 hover:text-white transition-colors">
              <GripVertical className="w-5 h-5" />
            </div>
            
            <div className="flex-1 space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-16">
                  <label className="text-xs font-bold text-zinc-500 uppercase block mb-1">Step</label>
                  <div className="w-12 h-12 bg-white/5 rounded-xl border border-white/10 flex items-center justify-center font-black text-white text-xl">
                    0{index + 1}
                  </div>
                </div>
                
                <div className="flex-1 space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold text-zinc-500 uppercase block mb-1">Title</label>
                      <input 
                        type="text" 
                        defaultValue={pillar.title}
                        className="w-full bg-[#09090b] border border-white/10 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-[#ffb800] transition-colors font-bold"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold text-zinc-500 uppercase block mb-1">Icon Name</label>
                      <select className="w-full bg-[#09090b] border border-white/10 rounded-lg px-3 py-2 text-zinc-300 text-sm focus:outline-none focus:border-[#ffb800] transition-colors appearance-none">
                        <option value="Dumbbell" selected={pillar.icon === 'Dumbbell'}>Dumbbell</option>
                        <option value="Utensils" selected={pillar.icon === 'Utensils'}>Utensils</option>
                        <option value="Sliders" selected={pillar.icon === 'Sliders'}>Sliders</option>
                        <option value="LineChart" selected={pillar.icon === 'LineChart'}>LineChart</option>
                        <option value="Flame" selected={pillar.icon === 'Flame'}>Flame</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-bold text-zinc-500 uppercase block mb-1">Description</label>
                    <textarea 
                      rows={2}
                      defaultValue={pillar.desc}
                      className="w-full bg-[#09090b] border border-white/10 rounded-lg px-3 py-2 text-zinc-300 text-sm focus:outline-none focus:border-[#ffb800] transition-colors resize-none"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Delete Button */}
            <button onClick={() => removePillar(pillar.id)} className="absolute top-6 right-6 text-zinc-600 hover:text-red-400 transition-colors opacity-0 group-hover:opacity-100">
              <Trash2 className="w-5 h-5" />
            </button>
          </div>
        ))}

        <button className="w-full py-4 border-2 border-dashed border-white/10 hover:border-[#ffb800]/50 rounded-2xl flex items-center justify-center gap-2 text-sm font-bold text-zinc-400 hover:text-[#ffb800] transition-colors bg-[#141414]/50 hover:bg-[#141414]">
          <Plus className="w-4 h-4" /> Add New Step
        </button>
      </div>
    </div>
  )
}
