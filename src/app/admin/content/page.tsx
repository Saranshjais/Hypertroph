import Link from "next/link";
import { LayoutTemplate, PenTool, MessageSquare, DollarSign, ArrowRight, Users } from "lucide-react";

export default function ContentManagerOverview() {
  const sections = [
    {
      title: "Hero Section",
      description: "Manage the main headline, subheadline, and background media.",
      icon: LayoutTemplate,
      href: "/admin/content/hero",
      color: "text-blue-400",
      bg: "bg-blue-400/10",
      border: "border-blue-400/20"
    },
    {
      title: "Methodology",
      description: "Edit the 6 core pillars, their descriptions, and icons.",
      icon: PenTool,
      href: "/admin/content/method",
      color: "text-amber-400",
      bg: "bg-amber-400/10",
      border: "border-amber-400/20"
    },
    {
      title: "Testimonials",
      description: "Manage client reviews, quotes, and images.",
      icon: Users,
      href: "/admin/content/testimonials",
      color: "text-rose-400",
      bg: "bg-rose-400/10",
      border: "border-rose-400/20"
    },
    {
      title: "Pricing Plans",
      description: "Update prices, features, and plan tiers.",
      icon: DollarSign,
      href: "/admin/content/pricing",
      color: "text-emerald-400",
      bg: "bg-emerald-400/10",
      border: "border-emerald-400/20"
    },
    {
      title: "FAQs",
      description: "Manage the frequently asked questions and answers.",
      icon: MessageSquare,
      href: "/admin/content/faq",
      color: "text-purple-400",
      bg: "bg-purple-400/10",
      border: "border-purple-400/20"
    }
  ];

  return (
    <div className="max-w-5xl">
      <div className="mb-8">
        <h1 className="text-3xl font-black tracking-tighter uppercase text-white mb-2">Content Manager</h1>
        <p className="text-zinc-400 text-sm">Select a section below to update the website content in real-time.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {sections.map((section) => (
          <Link 
            key={section.title} 
            href={section.href}
            className="group bg-[#141414] border border-white/10 hover:border-white/20 rounded-2xl p-6 transition-all duration-300 relative overflow-hidden flex flex-col"
          >
            <div className="absolute right-0 top-0 w-32 h-32 bg-white/5 rounded-bl-[100px] -z-10 group-hover:scale-110 transition-transform"></div>
            
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 border ${section.bg} ${section.color} ${section.border}`}>
              <section.icon className="w-6 h-6" />
            </div>
            
            <h2 className="text-xl font-bold text-white mb-2">{section.title}</h2>
            <p className="text-zinc-400 text-sm flex-1">{section.description}</p>
            
            <div className="mt-6 flex items-center text-sm font-semibold text-white group-hover:text-[#ffb800] transition-colors">
              Edit Section <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
