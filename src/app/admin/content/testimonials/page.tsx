"use client";

import { useState } from "react";
import { Save, Plus, GripVertical, Trash2, Image as ImageIcon } from "lucide-react";

const defaultTestimonials = [
  {
    id: 1,
    name: "Nitish Rajput",
    role: "Youtuber",
    image: "/nitish.jpg",
    quote: "After working with Hypertroph, fitness feels effortless.\n\nEvery thing I learned is so logical, so simple, that now it doesn't make sense to live life any other way.",
  },
  {
    id: 2,
    name: "Harman",
    role: "IG - @hustlewithharman",
    image: "/harman.avif",
    quote: "I never got visible results in gym, despite many attempts.\n\nThen I discovered Hypertroph, and he simplified the whole game of fitness and diet for me. Hypertroph changed my life.",
  }
];

export default function TestimonialEditor() {
  const [testimonials, setTestimonials] = useState(defaultTestimonials);
  const [isSaving, setIsSaving] = useState(false);

  const handleSave = () => {
    setIsSaving(true);
    setTimeout(() => setIsSaving(false), 1000);
  };

  const removeTestimonial = (id: number) => {
    setTestimonials(testimonials.filter(t => t.id !== id));
  };

  return (
    <div className="max-w-4xl">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-black tracking-tighter uppercase text-white mb-1">Testimonials Editor</h1>
          <p className="text-zinc-400 text-sm">Manage the client testimonials shown on your homepage.</p>
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
        {testimonials.map((t) => (
          <div key={t.id} className="bg-[#141414] border border-white/10 rounded-2xl p-6 flex gap-4 group relative hover:border-white/20 transition-colors">
            
            <div className="pt-2 cursor-grab text-zinc-600 hover:text-white transition-colors">
              <GripVertical className="w-5 h-5" />
            </div>
            
            <div className="flex-1 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-zinc-500 uppercase block mb-1">Client Name</label>
                  <input 
                    type="text" 
                    defaultValue={t.name}
                    className="w-full bg-[#09090b] border border-white/10 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-[#1a73e8] transition-colors font-bold"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-zinc-500 uppercase block mb-1">Role / Handle</label>
                  <input 
                    type="text" 
                    defaultValue={t.role}
                    className="w-full bg-[#09090b] border border-white/10 rounded-lg px-3 py-2 text-zinc-300 text-sm focus:outline-none focus:border-[#1a73e8] transition-colors"
                  />
                </div>
              </div>
              
              <div>
                <label className="text-xs font-bold text-zinc-500 uppercase block mb-1 flex items-center gap-2">
                  <ImageIcon className="w-3 h-3" /> Image URL
                </label>
                <input 
                  type="text" 
                  defaultValue={t.image}
                  className="w-full bg-[#09090b] border border-white/10 rounded-lg px-3 py-2 text-zinc-300 text-sm focus:outline-none focus:border-[#1a73e8] transition-colors"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-zinc-500 uppercase block mb-1">Quote</label>
                <textarea 
                  rows={4}
                  defaultValue={t.quote}
                  className="w-full bg-[#09090b] border border-white/10 rounded-lg px-3 py-2 text-zinc-300 text-sm focus:outline-none focus:border-[#1a73e8] transition-colors resize-none"
                />
              </div>
            </div>

            <button onClick={() => removeTestimonial(t.id)} className="absolute top-6 right-6 text-zinc-600 hover:text-red-400 transition-colors opacity-0 group-hover:opacity-100">
              <Trash2 className="w-5 h-5" />
            </button>
          </div>
        ))}

        <button className="w-full py-4 border-2 border-dashed border-white/10 hover:border-[#1a73e8]/50 rounded-2xl flex items-center justify-center gap-2 text-sm font-bold text-zinc-400 hover:text-[#1a73e8] transition-colors bg-[#141414]/50 hover:bg-[#141414]">
          <Plus className="w-4 h-4" /> Add New Testimonial
        </button>
      </div>
    </div>
  )
}
