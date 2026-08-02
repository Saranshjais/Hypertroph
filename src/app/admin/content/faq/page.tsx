"use client";

import { useState } from "react";
import { Save, Plus, GripVertical, Trash2 } from "lucide-react";

const defaultFaqs = [
  { id: 1, q: "Do I need to go to a gym?", a: "No, you can workout at home or in a gym. The plan will be fully customised according to your availability and equipment." },
  { id: 2, q: "Is the diet plan strictly vegetarian or non-vegetarian?", a: "We accommodate all dietary preferences including vegetarian, vegan, eggetarian, and non-vegetarian." },
];

export default function FAQEditor() {
  const [faqs, setFaqs] = useState(defaultFaqs);
  const [isSaving, setIsSaving] = useState(false);

  const handleSave = () => {
    setIsSaving(true);
    setTimeout(() => setIsSaving(false), 1000);
  };

  const removeFaq = (id: number) => {
    setFaqs(faqs.filter(f => f.id !== id));
  };

  return (
    <div className="max-w-4xl">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-black tracking-tighter uppercase text-white mb-1">FAQ Editor</h1>
          <p className="text-zinc-400 text-sm">Manage your Frequently Asked Questions.</p>
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
        {faqs.map((faq) => (
          <div key={faq.id} className="bg-[#141414] border border-white/10 rounded-2xl p-6 flex gap-4 group relative hover:border-white/20 transition-colors">
            
            <div className="pt-2 cursor-grab text-zinc-600 hover:text-white transition-colors">
              <GripVertical className="w-5 h-5" />
            </div>
            
            <div className="flex-1 space-y-4">
              <div>
                <label className="text-xs font-bold text-zinc-500 uppercase block mb-1">Question</label>
                <input 
                  type="text" 
                  defaultValue={faq.q}
                  className="w-full bg-[#09090b] border border-white/10 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-[#1a73e8] transition-colors font-bold"
                />
              </div>
              <div>
                <label className="text-xs font-bold text-zinc-500 uppercase block mb-1">Answer</label>
                <textarea 
                  rows={2}
                  defaultValue={faq.a}
                  className="w-full bg-[#09090b] border border-white/10 rounded-lg px-3 py-2 text-zinc-300 text-sm focus:outline-none focus:border-[#1a73e8] transition-colors resize-none"
                />
              </div>
            </div>

            <button onClick={() => removeFaq(faq.id)} className="absolute top-6 right-6 text-zinc-600 hover:text-red-400 transition-colors opacity-0 group-hover:opacity-100">
              <Trash2 className="w-5 h-5" />
            </button>
          </div>
        ))}

        <button className="w-full py-4 border-2 border-dashed border-white/10 hover:border-[#1a73e8]/50 rounded-2xl flex items-center justify-center gap-2 text-sm font-bold text-zinc-400 hover:text-[#1a73e8] transition-colors bg-[#141414]/50 hover:bg-[#141414]">
          <Plus className="w-4 h-4" /> Add New Question
        </button>
      </div>
    </div>
  )
}
