"use client";

import { useState } from "react";
import { Save, Image as ImageIcon, Link as LinkIcon, RotateCcw, Plus, Trash2, GripVertical } from "lucide-react";

const defaultImages = [
  { id: 1, url: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" },
  { id: 2, url: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" },
  { id: 3, url: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" },
];

export default function HeroEditor() {
  const [isSaving, setIsSaving] = useState(false);
  const [images, setImages] = useState(defaultImages);

  const handleSave = () => {
    setIsSaving(true);
    setTimeout(() => setIsSaving(false), 1000);
  };

  const removeImage = (id: number) => {
    setImages(images.filter(i => i.id !== id));
  };

  return (
    <div className="max-w-4xl">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-black tracking-tighter uppercase text-white mb-1">Hero Section</h1>
          <p className="text-zinc-400 text-sm">Update the main landing area of your website.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-4 py-2 text-sm font-medium text-zinc-300 hover:text-white transition-colors flex items-center gap-2">
            <RotateCcw className="w-4 h-4" /> Reset
          </button>
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
      </div>

      <div className="bg-[#141414] border border-white/10 rounded-2xl p-6 md:p-8 space-y-8 relative">
        {/* Form Group */}
        <div className="space-y-3">
          <label className="text-sm font-bold text-white uppercase tracking-wider">Pre-Headline Badge</label>
          <input 
            type="text" 
            defaultValue="THE ELITE TRANSFORMATION PROGRAM"
            className="w-full bg-[#09090b] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#1a73e8] focus:border-transparent transition-shadow"
          />
        </div>

        {/* Form Group */}
        <div className="space-y-3">
          <label className="text-sm font-bold text-white uppercase tracking-wider">Main Headline</label>
          <textarea 
            rows={3}
            defaultValue="BUILD A PHYSIQUE\nYOU ARE PROUD OF"
            className="w-full bg-[#09090b] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#1a73e8] focus:border-transparent transition-shadow resize-none"
          />
          <p className="text-xs text-zinc-500">Use \n for line breaks to format the headline perfectly.</p>
        </div>

        {/* Form Group */}
        <div className="space-y-3">
          <label className="text-sm font-bold text-white uppercase tracking-wider">Subheadline</label>
          <textarea 
            rows={2}
            defaultValue="Stop wasting time on generic plans. Get a science-backed, custom-tailored system designed specifically for your body and goals."
            className="w-full bg-[#09090b] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#1a73e8] focus:border-transparent transition-shadow resize-none"
          />
        </div>

        <hr className="border-white/5" />

        {/* Media Group */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <label className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
              <LinkIcon className="w-4 h-4 text-zinc-400" /> Primary Button Link
            </label>
            <input 
              type="text" 
              defaultValue="#apply"
              className="w-full bg-[#09090b] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#1a73e8] transition-shadow"
            />
          </div>
          <div className="space-y-3">
            <label className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
              <ImageIcon className="w-4 h-4 text-zinc-400" /> Background Video URL
            </label>
            <input 
              type="text" 
              defaultValue="/assets/hero-bg.mp4"
              className="w-full bg-[#09090b] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#1a73e8] transition-shadow"
            />
          </div>
        </div>

        <hr className="border-white/5" />

        {/* Carousel Images Group */}
        <div className="space-y-4">
          <label className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2 mb-2">
            <ImageIcon className="w-4 h-4 text-zinc-400" /> Carousel Images
          </label>
          <div className="space-y-3">
            {images.map((image) => (
              <div key={image.id} className="flex items-center gap-3">
                <div className="cursor-grab text-zinc-600 hover:text-white transition-colors">
                  <GripVertical className="w-5 h-5" />
                </div>
                <input 
                  type="text" 
                  defaultValue={image.url}
                  className="flex-1 bg-[#09090b] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#1a73e8] transition-shadow"
                />
                <button onClick={() => removeImage(image.id)} className="p-2 text-zinc-600 hover:text-red-400 transition-colors">
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            ))}
            <button className="w-full py-3 mt-2 border-2 border-dashed border-white/10 hover:border-[#1a73e8]/50 rounded-xl flex items-center justify-center gap-2 text-sm font-bold text-zinc-400 hover:text-[#1a73e8] transition-colors bg-[#141414]/50 hover:bg-[#141414]">
              <Plus className="w-4 h-4" /> Add Carousel Image
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
