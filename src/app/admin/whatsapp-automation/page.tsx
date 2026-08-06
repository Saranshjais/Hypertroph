"use client";

import { useState, useContext } from "react";
import { 
  CheckCircle2, AlertTriangle, XCircle, Send, RefreshCw, 
  UserPlus, Settings, FileText, ExternalLink, ShieldCheck, 
  Plus, Edit3, Trash2, ChevronRight, MessageSquare, Flame, 
  Activity, Clock, User, Filter, AlertCircle, Sparkles, Sliders,
  Camera, Brain, Image as ImageIcon, MessageCircleCheck, HelpCircle
} from "lucide-react";
import { generateDailyDietPlan, ClientProfile, GeneratedDietPlan } from "@/lib/diet-generator";
import { evaluateProgressAndRecommend, AdjustmentRecommendation } from "@/lib/adjustment-engine";
import { formatWhatsAppDietMessage, buildWhatsAppWebUrl } from "@/lib/whatsapp";
import { analyzeMealPhoto, processPhysiqueUpdate, resolveClientDoubt, MealPhotoAnalysisResult, PhysiqueCheckInResult, ClientDoubtResponse } from "@/lib/whatsapp-vision-ai";
import { AdminThemeContext } from "../layout";

export default function WhatsAppAutomationHub() {
  const { theme } = useContext(AdminThemeContext);
  const isLight = theme === "light";

  const [activeTab, setActiveTab] = useState<'queue' | 'inbound_feed' | 'clients' | 'adjustments' | 'dispatch' | 'settings'>('queue');
  const [autoApproveClean, setAutoApproveClean] = useState(true);
  const [femaleCalorieFloor, setFemaleCalorieFloor] = useState(1200);
  const [maleCalorieFloor, setMaleCalorieFloor] = useState(1500);

  // Initial Mock Client Database (v2 Safety Profiles)
  const [clients, setClients] = useState<ClientProfile[]>([
    {
      id: "c1",
      name: "Rahul Sharma",
      phone: "+919876543210",
      gender: "male",
      goal: "Fat Loss",
      targetCalories: 1800,
      targetProtein: 160,
      targetCarbs: 160,
      targetFats: 50,
      dietType: "non-veg",
      allergies: ["peanuts"],
      medicalFlags: ["none"],
      notes: "Focusing on 90 day cut. Prefers chicken breast and eggs.",
      consentOptIn: true,
    },
    {
      id: "c2",
      name: "Priya Patel",
      phone: "+919812345678",
      gender: "female",
      goal: "Recomp",
      targetCalories: 1450,
      targetProtein: 120,
      targetCarbs: 140,
      targetFats: 45,
      dietType: "veg",
      allergies: ["lactose"],
      medicalFlags: ["diabetes"],
      notes: "Diabetic profile — requires low GI carbs only. Avoid white rice.",
      consentOptIn: true,
    },
    {
      id: "c3",
      name: "Vikram Malhotra",
      phone: "+919988776655",
      gender: "male",
      goal: "Lean Bulk",
      targetCalories: 2600,
      targetProtein: 180,
      targetCarbs: 310,
      targetFats: 70,
      dietType: "eggetarian",
      allergies: [],
      medicalFlags: ["none"],
      notes: "Hard gainer. Consumes eggs and oats regularly.",
      consentOptIn: true,
    },
    {
      id: "c4",
      name: "Ananya Iyer",
      phone: "+919765432109",
      gender: "female",
      goal: "Fat Loss",
      targetCalories: 1100, // Intentional safety warning (below 1200 floor)
      targetProtein: 110,
      targetCarbs: 90,
      targetFats: 35,
      dietType: "veg",
      allergies: ["soy"],
      medicalFlags: ["PCOS"],
      notes: "Requested aggressive deficit - flagged for coach review.",
      consentOptIn: true,
    }
  ]);

  // Generate initial diet plans for review queue
  const [plans, setPlans] = useState<GeneratedDietPlan[]>(() => {
    return clients.map((c, i) => generateDailyDietPlan(c, new Date().toISOString().split('T')[0], i));
  });

  // Mock Inbound AI Vision Verified Meals
  const [verifiedMealFeed, setVerifiedMealFeed] = useState<Array<{
    clientName: string;
    analysis: MealPhotoAnalysisResult;
  }>>([
    {
      clientName: "Rahul Sharma",
      analysis: analyzeMealPhoto(
        "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80",
        generateDailyDietPlan(clients[0]),
        1
      )
    },
    {
      clientName: "Priya Patel",
      analysis: analyzeMealPhoto(
        "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=80",
        generateDailyDietPlan(clients[1]),
        0
      )
    }
  ]);

  // Mock Inbound Physique Progress Logs
  const [physiqueLogs, setPhysiqueLogs] = useState<Array<{
    clientName: string;
    log: PhysiqueCheckInResult;
  }>>([
    {
      clientName: "Rahul Sharma",
      log: processPhysiqueUpdate(
        "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=600&q=80",
        84.2,
        "Week 4 check-in. Abdominal fat decreasing significantly."
      )
    }
  ]);

  // Mock Incoming WhatsApp Client Doubts
  const [clientDoubts, setClientDoubts] = useState<Array<{
    clientName: string;
    doubt: ClientDoubtResponse;
  }>>([
    {
      clientName: "Rahul Sharma",
      doubt: resolveClientDoubt("Can I replace chicken breast with paneer for dinner tonight?", "Rahul Sharma", "Fat Loss", [])
    },
    {
      clientName: "Ananya Iyer",
      doubt: resolveClientDoubt("Felt dizzy during my heavy squats workout today.", "Ananya Iyer", "Fat Loss", ["PCOS"])
    }
  ]);

  // Mock Adjustment Recommendations
  const [recommendations, setRecommendations] = useState<AdjustmentRecommendation[]>([
    {
      id: "adj_1",
      clientId: "c1",
      clientName: "Rahul Sharma",
      date: new Date().toISOString().split('T')[0],
      goal: "Fat Loss",
      reason: "Fat loss plateau detected (Weight static at 84.5kg across past 3 weigh-ins).",
      suggestedCalorieDelta: -150,
      newTargetCalories: 1650,
      newTargetProtein: 160,
      newTargetCarbs: 130,
      newTargetFats: 45,
      status: "pending"
    }
  ]);

  // Selected plan for detailed inspection modal
  const [inspectPlan, setInspectPlan] = useState<GeneratedDietPlan | null>(null);

  // Dispatch log history
  const [dispatchLogs, setDispatchLogs] = useState<Array<{
    id: string;
    clientName: string;
    phone: string;
    time: string;
    status: 'delivered' | 'failed' | 'pending';
    opened: boolean;
  }>>([
    { id: "log_1", clientName: "Rahul Sharma", phone: "+919876543210", time: "Today, 07:01 AM", status: "delivered", opened: true },
    { id: "log_2", clientName: "Priya Patel", phone: "+919812345678", time: "Yesterday, 07:00 AM", status: "delivered", opened: false },
  ]);

  // Actions for Review Queue
  const handleApproveSingle = (planId: string) => {
    setPlans(prev => prev.map(p => p.id === planId ? { ...p, status: 'approved' } : p));
  };

  const handleRejectAndRegenerate = (planId: string) => {
    const plan = plans.find(p => p.id === planId);
    if (!plan) return;
    const client = clients.find(c => c.id === plan.clientId);
    if (!client) return;

    const freshPlan = generateDailyDietPlan(client, plan.date, Math.floor(Math.random() * 5) + 1);
    setPlans(prev => prev.map(p => p.id === planId ? freshPlan : p));
  };

  const handleApproveAllClean = () => {
    setPlans(prev => prev.map(p => {
      if (p.isAutoApproveEligible && p.status === 'pending_review') {
        return { ...p, status: 'approved' };
      }
      return p;
    }));
  };

  const handleApplyAdjustment = (recId: string) => {
    const rec = recommendations.find(r => r.id === recId);
    if (!rec) return;

    setClients(prev => prev.map(c => {
      if (c.id === rec.clientId) {
        return {
          ...c,
          targetCalories: rec.newTargetCalories,
          targetProtein: rec.newTargetProtein,
          targetCarbs: rec.newTargetCarbs,
          targetFats: rec.newTargetFats,
        };
      }
      return c;
    }));

    setRecommendations(prev => prev.map(r => r.id === recId ? { ...r, status: 'applied' } : r));
  };

  const handleDismissAdjustment = (recId: string) => {
    setRecommendations(prev => prev.map(r => r.id === recId ? { ...r, status: 'dismissed' } : r));
  };

  // Dispatch Simulator
  const handleTriggerDispatch = async (plan: GeneratedDietPlan) => {
    const client = clients.find(c => c.id === plan.clientId);
    if (!client) return;

    if (plan.status !== 'approved') {
      alert(`SAFETY BLOCK: Cannot dispatch plan for ${client.name} because status is '${plan.status}'. Coach approval is required first!`);
      return;
    }

    try {
      const res = await fetch('/api/whatsapp/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          planId: plan.id,
          clientId: client.id,
          clientName: client.name,
          phone: client.phone,
          planStatus: plan.status,
          messageText: formatWhatsAppDietMessage(client.name, plan),
        }),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setPlans(prev => prev.map(p => p.id === plan.id ? { ...p, status: 'dispatched' } : p));
        setDispatchLogs(prev => [
          {
            id: `log_${Date.now()}`,
            clientName: client.name,
            phone: client.phone,
            time: "Just Now",
            status: "delivered",
            opened: false,
          },
          ...prev
        ]);
        alert(`WhatsApp Diet Card successfully dispatched to ${client.name}!`);
      } else {
        alert(`Dispatch failed: ${data.error}`);
      }
    } catch (e) {
      alert("Error sending WhatsApp message.");
    }
  };

  // Simulator for Inbound WhatsApp Meal Photo Verification
  const handleSimulateInboundMealPhoto = () => {
    const client = clients[0];
    const plan = generateDailyDietPlan(client);
    const result = analyzeMealPhoto(
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80",
      plan,
      1
    );
    setVerifiedMealFeed(prev => [{ clientName: client.name, analysis: result }, ...prev]);
    alert(`Incoming WhatsApp Meal Photo Verified for ${client.name}!\nResult: ${result.complianceStatus} (${result.totalDetectedCalories} kcal detected)`);
  };

  const pendingCount = plans.filter(p => p.status === 'pending_review').length;
  const flaggedCount = plans.filter(p => !p.isAutoApproveEligible && p.status === 'pending_review').length;

  return (
    <div className={`flex flex-col gap-8 font-sans transition-colors duration-300 ${
      isLight ? "text-slate-900" : "text-zinc-100"
    }`}>
      
      {/* Header Banner */}
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
              Safety-First Engine v2
            </span>
            <span className={`text-xs font-medium ${isLight ? "text-slate-500" : "text-zinc-400"}`}>Coach Control + Vision AI Active</span>
          </div>
          <h1 className={`text-2xl md:text-3xl font-black uppercase tracking-tight flex items-center gap-3 ${
            isLight ? "text-slate-900" : "text-white"
          }`}>
            <MessageSquare className="w-7 h-7 text-[#ffb800]" />
            WhatsApp Diet & Vision AI Hub
          </h1>
          <p className={`text-sm mt-1 ${isLight ? "text-slate-500" : "text-zinc-400"}`}>
            Portion generator, coach review queue, AI meal verifier, physique logger, and WhatsApp doubt assistant.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <button 
            onClick={handleSimulateInboundMealPhoto}
            className="flex items-center gap-2 px-3.5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-bold transition-all shadow-md"
          >
            <Camera className="w-4 h-4" />
            Simulate Inbound Meal Photo
          </button>
          <button 
            onClick={() => {
              setPlans(clients.map((c, i) => generateDailyDietPlan(c, new Date().toISOString().split('T')[0], i + 1)));
            }}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border text-xs font-bold transition-all ${
              isLight 
                ? "bg-slate-100 hover:bg-slate-200 text-slate-800 border-slate-200" 
                : "bg-white/5 hover:bg-white/10 text-white border-white/10"
            }`}
          >
            <RefreshCw className="w-4 h-4 text-[#ffb800]" />
            Pre-Generate Next Day
          </button>
        </div>
      </div>

      {/* Top 4 Executive KPI Banner Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
        <div className={`rounded-2xl p-4 border transition-all ${
          isLight 
            ? "bg-white border-slate-200/90 shadow-sm" 
            : "bg-[#111827] border-slate-800"
        }`}>
          <div className={`text-xs font-bold uppercase tracking-wider mb-1 ${isLight ? "text-slate-400" : "text-zinc-400"}`}>Active Profiles</div>
          <div className={`text-2xl font-black ${isLight ? "text-slate-900" : "text-white"}`}>{clients.length} Clients</div>
          <span className="text-[11px] text-emerald-600 font-semibold mt-1 inline-block">100% WhatsApp Opted-In</span>
        </div>

        <div className={`rounded-2xl p-4 border transition-all ${
          isLight 
            ? "bg-white border-slate-200/90 shadow-sm" 
            : "bg-[#111827] border-slate-800"
        }`}>
          <div className={`text-xs font-bold uppercase tracking-wider mb-1 ${isLight ? "text-slate-400" : "text-zinc-400"}`}>Pending Coach Review</div>
          <div className="text-2xl font-black text-amber-600">{pendingCount} Plans</div>
          <span className={`text-[11px] font-medium mt-1 inline-block ${isLight ? "text-slate-400" : "text-zinc-400"}`}>Review before dispatch</span>
        </div>

        <div className={`rounded-2xl p-4 border transition-all ${
          isLight 
            ? "bg-white border-slate-200/90 shadow-sm" 
            : "bg-[#111827] border-slate-800"
        }`}>
          <div className={`text-xs font-bold uppercase tracking-wider mb-1 ${isLight ? "text-slate-400" : "text-zinc-400"}`}>Safety Flags Detected</div>
          <div className="text-2xl font-black text-rose-500">{flaggedCount} Alert</div>
          <span className="text-[11px] text-rose-500 font-semibold mt-1 inline-block">1 floor warning (&lt;1200 kcal)</span>
        </div>

        <div className={`rounded-2xl p-4 border transition-all ${
          isLight 
            ? "bg-white border-slate-200/90 shadow-sm" 
            : "bg-[#111827] border-slate-800"
        }`}>
          <div className={`text-xs font-bold uppercase tracking-wider mb-1 ${isLight ? "text-slate-400" : "text-zinc-400"}`}>Dispatched Today</div>
          <div className="text-2xl font-black text-emerald-600">184 Dispatched</div>
          <span className="text-[11px] text-emerald-600 font-semibold mt-1 inline-block">07:00 AM broadcast success</span>
        </div>

      </div>

      {/* Segmented Control Navigation Bar */}
      <div className={`p-1.5 rounded-2xl border flex items-center gap-2 overflow-x-auto ${
        isLight 
          ? "bg-white border-slate-200/90 shadow-sm" 
          : "bg-[#111827] border-slate-800"
      }`}>
        <button
          onClick={() => setActiveTab('queue')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
            activeTab === 'queue'
              ? isLight ? "bg-[#005580] text-white shadow-md" : "bg-[#1a73e8] text-white shadow-md"
              : isLight ? "text-slate-600 hover:bg-slate-100" : "text-zinc-400 hover:bg-white/5 hover:text-white"
          }`}
        >
          <ShieldCheck className="w-4 h-4" />
          Review Queue
          {pendingCount > 0 && (
            <span className={`px-2 py-0.5 text-[10px] font-black rounded-full ${
              flaggedCount > 0 ? 'bg-rose-500 text-white' : 'bg-amber-400 text-black'
            }`}>
              {pendingCount}
            </span>
          )}
        </button>

        <button
          onClick={() => setActiveTab('inbound_feed')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
            activeTab === 'inbound_feed'
              ? isLight ? "bg-[#005580] text-white shadow-md" : "bg-[#1a73e8] text-white shadow-md"
              : isLight ? "text-slate-600 hover:bg-slate-100" : "text-zinc-400 hover:bg-white/5 hover:text-white"
          }`}
        >
          <Camera className="w-4 h-4 text-emerald-500" />
          Inbound AI Vision & Doubts
          <span className="px-2 py-0.5 text-[10px] font-black rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300">
            {verifiedMealFeed.length + clientDoubts.length}
          </span>
        </button>

        <button
          onClick={() => setActiveTab('clients')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
            activeTab === 'clients'
              ? isLight ? "bg-[#005580] text-white shadow-md" : "bg-[#1a73e8] text-white shadow-md"
              : isLight ? "text-slate-600 hover:bg-slate-100" : "text-zinc-400 hover:bg-white/5 hover:text-white"
          }`}
        >
          <User className="w-4 h-4" />
          Client Directory ({clients.length})
        </button>

        <button
          onClick={() => setActiveTab('adjustments')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
            activeTab === 'adjustments'
              ? isLight ? "bg-[#005580] text-white shadow-md" : "bg-[#1a73e8] text-white shadow-md"
              : isLight ? "text-slate-600 hover:bg-slate-100" : "text-zinc-400 hover:bg-white/5 hover:text-white"
          }`}
        >
          <Activity className="w-4 h-4" />
          Weekly Adjustments
          {recommendations.filter(r => r.status === 'pending').length > 0 && (
            <span className="px-2 py-0.5 text-[10px] font-black rounded-full bg-amber-400 text-black">
              {recommendations.filter(r => r.status === 'pending').length}
            </span>
          )}
        </button>

        <button
          onClick={() => setActiveTab('dispatch')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
            activeTab === 'dispatch'
              ? isLight ? "bg-[#005580] text-white shadow-md" : "bg-[#1a73e8] text-white shadow-md"
              : isLight ? "text-slate-600 hover:bg-slate-100" : "text-zinc-400 hover:bg-white/5 hover:text-white"
          }`}
        >
          <Send className="w-4 h-4" />
          WhatsApp Dispatch
        </button>

        <button
          onClick={() => setActiveTab('settings')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
            activeTab === 'settings'
              ? isLight ? "bg-[#005580] text-white shadow-md" : "bg-[#1a73e8] text-white shadow-md"
              : isLight ? "text-slate-600 hover:bg-slate-100" : "text-zinc-400 hover:bg-white/5 hover:text-white"
          }`}
        >
          <Settings className="w-4 h-4" />
          Safety Settings
        </button>
      </div>

      {/* --- TAB 1: PENDING REVIEW QUEUE --- */}
      {activeTab === 'queue' && (
        <div className="flex flex-col gap-6">
          <div className={`flex flex-wrap items-center justify-between gap-4 p-4 rounded-xl border ${
            isLight ? "bg-white border-slate-200/90 shadow-sm" : "bg-[#111827] border-slate-800"
          }`}>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                <span className={`text-xs font-bold ${isLight ? "text-slate-700" : "text-zinc-300"}`}>Clean Plans: {plans.filter(p => p.isAutoApproveEligible && p.status === 'pending_review').length}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500"></span>
                <span className={`text-xs font-bold ${isLight ? "text-slate-700" : "text-zinc-300"}`}>Flagged Red: {flaggedCount}</span>
              </div>
            </div>

            <button
              onClick={handleApproveAllClean}
              disabled={plans.filter(p => p.isAutoApproveEligible && p.status === 'pending_review').length === 0}
              className="px-4 py-2 bg-emerald-500 hover:bg-emerald-600 disabled:opacity-40 text-black text-xs font-black uppercase tracking-wider rounded-xl transition-all flex items-center gap-2 shadow-md"
            >
              <CheckCircle2 className="w-4 h-4" />
              Approve All Clean Plans ({plans.filter(p => p.isAutoApproveEligible && p.status === 'pending_review').length})
            </button>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {plans.map((plan) => {
              const client = clients.find(c => c.id === plan.clientId);
              const isClean = plan.isAutoApproveEligible;

              return (
                <div 
                  key={plan.id}
                  className={`border rounded-2xl p-5 transition-all relative overflow-hidden ${
                    isLight
                      ? plan.status === 'approved' 
                        ? 'border-emerald-300 bg-emerald-50/50 shadow-sm' 
                        : plan.status === 'dispatched'
                        ? 'border-cyan-300 bg-cyan-50/50 shadow-sm'
                        : !isClean 
                        ? 'border-rose-300 bg-rose-50/50 shadow-sm' 
                        : 'bg-white border-slate-200/90 shadow-sm hover:shadow-md'
                      : plan.status === 'approved' 
                        ? 'border-emerald-500/40 bg-emerald-950/10' 
                        : plan.status === 'dispatched'
                        ? 'border-cyan-500/40 bg-cyan-950/10'
                        : !isClean 
                        ? 'border-rose-500/40 bg-rose-950/10' 
                        : 'bg-[#111827] border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className={`text-lg font-black ${isLight ? "text-slate-900" : "text-white"}`}>{plan.clientName}</h3>
                        <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full ${
                          isLight ? "bg-slate-100 text-slate-700 border border-slate-200" : "bg-white/10 text-zinc-300"
                        }`}>
                          {client?.goal} ({client?.dietType})
                        </span>
                        
                        {plan.status === 'approved' && (
                          <span className="px-2.5 py-0.5 rounded-full text-xs font-black bg-emerald-500/20 text-emerald-600 border border-emerald-300 flex items-center gap-1">
                            <CheckCircle2 className="w-3.5 h-3.5" /> Approved
                          </span>
                        )}
                        {plan.status === 'dispatched' && (
                          <span className="px-2.5 py-0.5 rounded-full text-xs font-black bg-cyan-500/20 text-cyan-700 border border-cyan-300 flex items-center gap-1">
                            <Send className="w-3.5 h-3.5" /> Dispatched
                          </span>
                        )}
                        {plan.status === 'pending_review' && !isClean && (
                          <span className="px-2.5 py-0.5 rounded-full text-xs font-black bg-rose-500/20 text-rose-600 border border-rose-300 flex items-center gap-1">
                            <AlertTriangle className="w-3.5 h-3.5" /> Flagged Red
                          </span>
                        )}
                        {plan.status === 'pending_review' && isClean && (
                          <span className="px-2.5 py-0.5 rounded-full text-xs font-black bg-amber-100 text-amber-800 border border-amber-300 flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5" /> Pending Review
                          </span>
                        )}
                      </div>

                      <div className={`text-xs flex flex-wrap items-center gap-4 mt-2 ${
                        isLight ? "text-slate-600" : "text-zinc-400"
                      }`}>
                        <span>Target: <strong className={isLight ? "text-slate-900" : "text-white"}>{client?.targetCalories} kcal</strong></span>
                        <span>Generated: <strong className={isLight ? "text-slate-900" : "text-white"}>{plan.totalCalories} kcal</strong></span>
                        <span>Protein: <strong className={isLight ? "text-slate-900" : "text-white"}>{plan.totalProtein}g</strong></span>
                        <span>Carbs: <strong className={isLight ? "text-slate-900" : "text-white"}>{plan.totalCarbs}g</strong></span>
                        <span>Fats: <strong className={isLight ? "text-slate-900" : "text-white"}>{plan.totalFats}g</strong></span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setInspectPlan(plan)}
                        className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all border ${
                          isLight 
                            ? "bg-slate-100 hover:bg-slate-200 text-slate-800 border-slate-200" 
                            : "bg-white/10 hover:bg-white/20 text-white border-white/10"
                        }`}
                      >
                        Inspect Meals
                      </button>

                      {plan.status === 'pending_review' && (
                        <>
                          <button
                            onClick={() => handleApproveSingle(plan.id)}
                            className="px-4 py-1.5 bg-emerald-500 hover:bg-emerald-600 text-black text-xs font-black rounded-xl transition-all flex items-center gap-1 shadow-md"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5" /> Approve
                          </button>
                          <button
                            onClick={() => handleRejectAndRegenerate(plan.id)}
                            className="px-3.5 py-1.5 bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-200 text-xs font-bold rounded-xl transition-all"
                          >
                            Regenerate
                          </button>
                        </>
                      )}

                      {plan.status === 'approved' && (
                        <button
                          onClick={() => handleTriggerDispatch(plan)}
                          className={`px-4 py-1.5 text-white text-xs font-black rounded-xl transition-all flex items-center gap-1 shadow-md ${
                            isLight ? "bg-[#005580] hover:bg-[#004060]" : "bg-[#1a73e8] hover:bg-blue-600"
                          }`}
                        >
                          <Send className="w-3.5 h-3.5" /> Dispatch
                        </button>
                      )}
                    </div>
                  </div>

                  {plan.validation.issues.length > 0 && (
                    <div className={`mt-3 p-3 rounded-xl border flex flex-col gap-1.5 text-xs ${
                      isLight ? "bg-slate-50 border-slate-200" : "bg-black/50 border-white/10"
                    }`}>
                      {plan.validation.issues.map((issue, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          {issue.severity === 'error' ? (
                            <XCircle className="w-4 h-4 text-rose-500 shrink-0" />
                          ) : (
                            <AlertTriangle className="w-4 h-4 text-amber-500 shrink-0" />
                          )}
                          <span className={issue.severity === 'error' ? 'text-rose-600 font-semibold' : 'text-amber-700 font-medium'}>
                            {issue.message}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}

                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* --- TAB 2: INBOUND AI VISION & DOUBT FEED --- */}
      {activeTab === 'inbound_feed' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          <div className="lg:col-span-2 flex flex-col gap-6">
            <div className={`rounded-2xl p-6 border transition-all ${
              isLight ? "bg-white border-slate-200/90 shadow-sm" : "bg-[#111827] border-slate-800"
            }`}>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Camera className="w-5 h-5 text-emerald-500" />
                  <h2 className={`text-lg font-black uppercase tracking-tight ${isLight ? "text-slate-900" : "text-white"}`}>
                    AI Vision Meal Verifications
                  </h2>
                </div>
                <span className={`text-xs font-mono px-2.5 py-1 rounded-full border ${
                  isLight ? "bg-slate-100 text-slate-600 border-slate-200" : "bg-black/40 text-zinc-400 border-white/10"
                }`}>
                  Computer Vision Active
                </span>
              </div>

              <div className="flex flex-col gap-4">
                {verifiedMealFeed.map((item, idx) => (
                  <div key={idx} className={`p-4 rounded-xl border flex flex-col sm:flex-row gap-4 ${
                    isLight ? "bg-slate-50 border-slate-200" : "bg-[#09090b] border-white/10"
                  }`}>
                    <img 
                      src={item.analysis.photoUrl} 
                      alt="Meal photo verification" 
                      className="w-full sm:w-36 h-36 object-cover rounded-xl border border-slate-300 shrink-0"
                    />

                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <h3 className={`text-base font-black ${isLight ? "text-slate-900" : "text-white"}`}>{item.clientName}</h3>
                          <span className={`text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full border ${
                            item.analysis.complianceStatus === 'VERIFIED_MATCH'
                              ? 'bg-emerald-100 text-emerald-800 border-emerald-300'
                              : item.analysis.complianceStatus === 'PORTION_SURPLUS'
                              ? 'bg-amber-100 text-amber-800 border-amber-300'
                              : 'bg-rose-100 text-rose-800 border-rose-300'
                          }`}>
                            {item.analysis.complianceStatus.replace('_', ' ')}
                          </span>
                        </div>
                        <span className="text-xs text-amber-600 font-bold">Meal: {item.analysis.prescribedMealName}</span>
                        
                        <div className={`mt-2 text-xs font-mono flex flex-wrap items-center gap-3 ${
                          isLight ? "text-slate-700" : "text-zinc-300"
                        }`}>
                          <span>Detected: <strong>{item.analysis.totalDetectedCalories} kcal</strong></span>
                          <span>P: <strong>{item.analysis.totalDetectedProtein}g</strong></span>
                          <span>C: <strong>{item.analysis.totalDetectedCarbs}g</strong></span>
                          <span>F: <strong>{item.analysis.totalDetectedFats}g</strong></span>
                        </div>
                      </div>

                      <div className={`mt-3 p-2.5 rounded-lg border text-xs font-medium ${
                        isLight ? "bg-emerald-50 text-emerald-800 border-emerald-200" : "bg-black/40 text-emerald-300 border-white/10"
                      }`}>
                        🤖 <strong>WhatsApp AI Feedback Sent:</strong> "{item.analysis.feedbackMessage}"
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className={`rounded-2xl p-6 border transition-all ${
              isLight ? "bg-white border-slate-200/90 shadow-sm" : "bg-[#111827] border-slate-800"
            }`}>
              <div className="flex items-center gap-2 mb-4">
                <ImageIcon className="w-5 h-5 text-cyan-600" />
                <h2 className={`text-lg font-black uppercase tracking-tight ${isLight ? "text-slate-900" : "text-white"}`}>
                  Physique Check-in Gallery
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {physiqueLogs.map((item, idx) => (
                  <div key={idx} className={`p-4 rounded-xl border ${
                    isLight ? "bg-slate-50 border-slate-200" : "bg-[#09090b] border-white/10"
                  }`}>
                    <img 
                      src={item.log.photoUrl} 
                      alt="Physique update" 
                      className="w-full h-44 object-cover rounded-lg mb-3 border border-slate-200"
                    />
                    <div className="flex items-center justify-between text-xs font-bold mb-1">
                      <span className={isLight ? "text-slate-900" : "text-white"}>{item.clientName}</span>
                      <span className="text-amber-600 font-mono">{item.log.weightKg} kg</span>
                    </div>
                    <p className={`text-xs mb-2 ${isLight ? "text-slate-500" : "text-zinc-400"}`}>{item.log.notes}</p>
                    <div className="flex flex-wrap gap-1">
                      {item.log.aiBodyConditionTags.map((tag, i) => (
                        <span key={i} className="text-[10px] bg-cyan-100 text-cyan-800 px-2 py-0.5 rounded-full border border-cyan-200 font-semibold">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className={`rounded-2xl p-6 border transition-all ${
            isLight ? "bg-white border-slate-200/90 shadow-sm" : "bg-[#111827] border-slate-800"
          }`}>
            <div className="flex items-center gap-2 mb-4">
              <Brain className="w-5 h-5 text-amber-500" />
              <h2 className={`text-lg font-black uppercase tracking-tight ${isLight ? "text-slate-900" : "text-white"}`}>
                WhatsApp AI Doubt Assistant
              </h2>
            </div>

            <div className="flex flex-col gap-4">
              {clientDoubts.map((item, idx) => (
                <div 
                  key={idx} 
                  className={`p-4 rounded-xl border flex flex-col gap-2 transition-all ${
                    item.doubt.isHighPriorityAlert 
                      ? 'bg-rose-50 border-rose-200' 
                      : isLight ? 'bg-slate-50 border-slate-200' : 'bg-[#09090b] border-white/10'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className={`text-xs font-bold ${isLight ? "text-slate-900" : "text-white"}`}>{item.clientName}</span>
                    {item.doubt.isHighPriorityAlert && (
                      <span className="px-2 py-0.5 text-[10px] font-black uppercase bg-rose-500 text-white rounded-full flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> High Priority Alert
                      </span>
                    )}
                  </div>

                  <div className={`p-2.5 rounded-lg border text-xs ${
                    isLight ? "bg-white text-slate-800 border-slate-200" : "bg-black/50 text-zinc-200 border-white/5"
                  }`}>
                    <strong>Client Question:</strong> "{item.doubt.question}"
                  </div>

                  <div className={`p-2.5 rounded-lg border text-xs ${
                    isLight ? "bg-blue-50 text-[#005580] border-blue-200" : "bg-[#1a73e8]/10 text-[#1a73e8] border border-[#1a73e8]/20"
                  }`}>
                    <strong>AI Generated Reply:</strong> "{item.doubt.aiAnswer}"
                  </div>

                  <div className={`flex justify-between items-center text-[11px] mt-1 ${isLight ? "text-slate-500" : "text-zinc-400"}`}>
                    <span>Action: {item.doubt.suggestedAction}</span>
                    <button className={`px-2.5 py-1 rounded font-bold border ${
                      isLight ? "bg-white hover:bg-slate-100 text-slate-800 border-slate-200" : "bg-white/10 hover:bg-white/20 text-white border-white/10"
                    }`}>
                      Override / Reply
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      )}

      {/* --- TAB 3: CLIENT DIRECTORY --- */}
      {activeTab === 'clients' && (
        <div className={`rounded-2xl p-6 border transition-all ${
          isLight ? "bg-white border-slate-200/90 shadow-sm" : "bg-[#111827] border-slate-800"
        }`}>
          <div className="flex items-center justify-between mb-6">
            <h2 className={`text-lg font-black uppercase tracking-tight ${isLight ? "text-slate-900" : "text-white"}`}>Active Client Health Profiles</h2>
            <button className={`px-4 py-2 text-white text-xs font-black uppercase rounded-xl flex items-center gap-2 shadow-md ${
              isLight ? "bg-[#005580] hover:bg-[#004060]" : "bg-[#1a73e8] hover:bg-blue-600"
            }`}>
              <UserPlus className="w-4 h-4" /> Add New Client
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className={`w-full text-left text-xs border-collapse ${isLight ? "text-slate-700" : "text-zinc-300"}`}>
              <thead>
                <tr className={`border-b font-bold uppercase tracking-wider ${isLight ? "border-slate-200 text-slate-400" : "border-white/10 text-zinc-500"}`}>
                  <th className="pb-3">Client Name</th>
                  <th className="pb-3">WhatsApp Number</th>
                  <th className="pb-3">Goal</th>
                  <th className="pb-3">Target Calories</th>
                  <th className="pb-3">Diet Type</th>
                  <th className="pb-3">Allergies</th>
                  <th className="pb-3">Medical Flags</th>
                  <th className="pb-3 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className={`divide-y ${isLight ? "divide-slate-100" : "divide-white/5"}`}>
                {clients.map(client => (
                  <tr key={client.id} className={isLight ? "hover:bg-slate-50" : "hover:bg-white/5"}>
                    <td className={`py-4 font-bold flex items-center gap-2 ${isLight ? "text-slate-900" : "text-white"}`}>
                      {client.name}
                      {client.consentOptIn && (
                        <span className="text-[10px] bg-emerald-100 text-emerald-800 px-1.5 py-0.5 rounded border border-emerald-300">
                          Opted-In
                        </span>
                      )}
                    </td>
                    <td className="py-4 font-mono">{client.phone}</td>
                    <td className="py-4 font-semibold text-amber-600">{client.goal}</td>
                    <td className={`py-4 font-bold ${isLight ? "text-slate-900" : "text-white"}`}>{client.targetCalories} kcal</td>
                    <td className="py-4 capitalize">{client.dietType}</td>
                    <td className="py-4">
                      {client.allergies.length > 0 ? (
                        <span className="px-2 py-0.5 bg-rose-100 text-rose-800 rounded font-semibold border border-rose-200">
                          {client.allergies.join(', ')}
                        </span>
                      ) : (
                        <span className="text-slate-400">None</span>
                      )}
                    </td>
                    <td className="py-4">
                      {client.medicalFlags.includes('none') ? (
                        <span className="text-slate-400">None</span>
                      ) : (
                        <span className="px-2 py-0.5 bg-amber-100 text-amber-800 rounded font-semibold uppercase border border-amber-300">
                          {client.medicalFlags.join(', ')}
                        </span>
                      )}
                    </td>
                    <td className="py-4 text-right">
                      <button className={`px-3 py-1 rounded-lg text-xs font-semibold border ${
                        isLight ? "bg-slate-100 hover:bg-slate-200 text-slate-800 border-slate-200" : "bg-white/10 hover:bg-white/20 text-white border-white/10"
                      }`}>
                        Edit Profile
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* --- TAB 4: WEEKLY ADJUSTMENT RECOMMENDATIONS --- */}
      {activeTab === 'adjustments' && (
        <div className="flex flex-col gap-4">
          <div className={`rounded-2xl p-6 border transition-all ${
            isLight ? "bg-white border-slate-200/90 shadow-sm" : "bg-[#111827] border-slate-800"
          }`}>
            <h2 className={`text-lg font-black uppercase tracking-tight mb-2 ${isLight ? "text-slate-900" : "text-white"}`}>
              Automated Progress & Calorie Adjustment Cards
            </h2>
            <p className={`text-sm mb-6 ${isLight ? "text-slate-500" : "text-zinc-400"}`}>
              The engine compares 2+ weeks of weight logs vs goal trends and recommends adjustments for your review. No change is applied automatically.
            </p>

            <div className="grid grid-cols-1 gap-4">
              {recommendations.map(rec => (
                <div key={rec.id} className={`rounded-xl p-5 border flex flex-wrap items-center justify-between gap-4 ${
                  isLight ? "bg-slate-50 border-slate-200" : "bg-[#09090b] border-white/10"
                }`}>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-amber-100 border border-amber-300 flex items-center justify-center text-amber-600 shrink-0">
                      <Flame className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className={`text-base font-black ${isLight ? "text-slate-900" : "text-white"}`}>{rec.clientName}</h3>
                        <span className={`text-xs px-2 py-0.5 rounded font-bold ${
                          isLight ? "bg-slate-200 text-slate-800" : "bg-white/10 text-zinc-300"
                        }`}>{rec.goal}</span>
                      </div>
                      <p className="text-xs text-amber-600 mt-1 font-medium">{rec.reason}</p>
                      
                      <div className="mt-3 flex items-center gap-4 text-xs font-mono">
                        <span className={isLight ? "text-slate-500" : "text-zinc-400"}>Suggested Change: <strong className="text-rose-600">{rec.suggestedCalorieDelta} kcal</strong></span>
                        <span className={isLight ? "text-slate-500" : "text-zinc-400"}>New Target: <strong className="text-emerald-600">{rec.newTargetCalories} kcal</strong></span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    {rec.status === 'pending' ? (
                      <>
                        <button 
                          onClick={() => handleApplyAdjustment(rec.id)}
                          className="px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-black text-xs font-black rounded-xl transition-all shadow-md"
                        >
                          Apply Adjustment
                        </button>
                        <button 
                          onClick={() => handleDismissAdjustment(rec.id)}
                          className={`px-3 py-2 rounded-xl text-xs font-bold border ${
                            isLight ? "bg-white hover:bg-slate-100 text-slate-700 border-slate-200" : "bg-white/10 hover:bg-white/20 text-zinc-400 border-white/10"
                          }`}
                        >
                          Dismiss
                        </button>
                      </>
                    ) : (
                      <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300">
                        {rec.status.toUpperCase()}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* --- TAB 5: WHATSAPP DISPATCH & COMPLIANCE --- */}
      {activeTab === 'dispatch' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className={`lg:col-span-2 rounded-2xl p-6 border transition-all ${
            isLight ? "bg-white border-slate-200/90 shadow-sm" : "bg-[#121215] border-white/10"
          }`}>
            <h2 className={`text-lg font-black uppercase tracking-tight mb-4 ${isLight ? "text-slate-900" : "text-white"}`}>
              WhatsApp Broadcast Controller
            </h2>

            <div className={`p-4 rounded-xl border mb-6 flex items-center justify-between ${
              isLight ? "bg-slate-50 border-slate-200" : "bg-black/40 border-white/10"
            }`}>
              <div>
                <span className={`text-xs font-bold uppercase tracking-wider ${isLight ? "text-slate-500" : "text-zinc-400"}`}>Automated Daily Dispatch Scheduler</span>
                <p className={`text-sm font-black ${isLight ? "text-slate-900" : "text-white"}`}>Scheduled for 07:00 AM Daily</p>
              </div>
              <button 
                onClick={async () => {
                  const res = await fetch('/api/whatsapp/auto-update', { method: 'POST' });
                  const data = await res.json();
                  alert(data.message);
                }}
                className={`px-4 py-2 text-white text-xs font-bold rounded-xl ${
                  isLight ? "bg-[#005580] hover:bg-[#004060]" : "bg-[#1a73e8] hover:bg-blue-600"
                }`}
              >
                Run Scheduled Cycle Now
              </button>
            </div>

            <h3 className={`text-xs font-black uppercase tracking-wider mb-3 ${isLight ? "text-slate-400" : "text-zinc-500"}`}>Approved Plans Ready to Send</h3>
            <div className="flex flex-col gap-3">
              {plans.map(plan => {
                const client = clients.find(c => c.id === plan.clientId);
                if (!client) return null;
                const formattedMsg = formatWhatsAppDietMessage(client.name, plan);
                const waUrl = buildWhatsAppWebUrl(client.phone, formattedMsg);

                return (
                  <div key={plan.id} className={`p-4 rounded-xl border flex items-center justify-between ${
                    isLight ? "bg-slate-50 border-slate-200" : "bg-[#09090b] border-white/10"
                  }`}>
                    <div>
                      <h4 className={`text-sm font-bold ${isLight ? "text-slate-900" : "text-white"}`}>{client.name}</h4>
                      <p className={`text-xs font-mono ${isLight ? "text-slate-500" : "text-zinc-400"}`}>{client.phone} • {plan.totalCalories} kcal</p>
                    </div>

                    <div className="flex items-center gap-2">
                      <a
                        href={waUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-xl flex items-center gap-1.5 transition-all shadow-md"
                      >
                        <ExternalLink className="w-3.5 h-3.5" /> 1-Click wa.me
                      </a>

                      <button
                        onClick={() => handleTriggerDispatch(plan)}
                        disabled={plan.status !== 'approved'}
                        className={`px-3 py-1.5 disabled:opacity-40 text-white text-xs font-bold rounded-xl flex items-center gap-1.5 transition-all shadow-md ${
                          isLight ? "bg-[#005580] hover:bg-[#004060]" : "bg-[#1a73e8] hover:bg-blue-600"
                        }`}
                      >
                        <Send className="w-3.5 h-3.5" /> API Send
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className={`rounded-2xl p-6 border transition-all ${
            isLight ? "bg-white border-slate-200/90 shadow-sm" : "bg-[#121215] border-white/10"
          }`}>
            <h3 className={`text-sm font-black uppercase tracking-wider mb-4 ${isLight ? "text-slate-400" : "text-zinc-400"}`}>
              Dispatch Logs & Compliance
            </h3>

            <div className="flex flex-col gap-3">
              {dispatchLogs.map(log => (
                <div key={log.id} className={`p-3 rounded-xl border text-xs ${
                  isLight ? "bg-slate-50 border-slate-200" : "bg-[#09090b] border-white/10"
                }`}>
                  <div className={`flex items-center justify-between font-bold mb-1 ${isLight ? "text-slate-900" : "text-white"}`}>
                    <span>{log.clientName}</span>
                    <span className="text-[10px] text-emerald-700 bg-emerald-100 border border-emerald-300 px-2 py-0.5 rounded font-mono">
                      {log.status.toUpperCase()}
                    </span>
                  </div>
                  <div className={`font-mono flex items-center justify-between text-[11px] ${isLight ? "text-slate-400" : "text-zinc-500"}`}>
                    <span>{log.time}</span>
                    <span>{log.opened ? "Read by client" : "Unread"}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* --- TAB 6: SAFETY SETTINGS --- */}
      {activeTab === 'settings' && (
        <div className={`max-w-3xl rounded-2xl p-6 border flex flex-col gap-6 transition-all ${
          isLight ? "bg-white border-slate-200/90 shadow-sm" : "bg-[#121215] border-white/10"
        }`}>
          <h2 className={`text-lg font-black uppercase tracking-tight ${isLight ? "text-slate-900" : "text-white"}`}>Safety & Engine Settings</h2>

          <div className={`flex items-center justify-between p-4 rounded-xl border ${
            isLight ? "bg-slate-50 border-slate-200" : "bg-[#09090b] border-white/10"
          }`}>
            <div>
              <h3 className={`text-sm font-bold ${isLight ? "text-slate-900" : "text-white"}`}>Auto-Approve 100% Clean Plans</h3>
              <p className={`text-xs mt-0.5 ${isLight ? "text-slate-500" : "text-zinc-400"}`}>
                Automatically mark plans with zero warnings as Approved. Plans with warnings will always require a human click.
              </p>
            </div>
            <button
              onClick={() => setAutoApproveClean(!autoApproveClean)}
              className={`w-12 h-6 rounded-full p-1 transition-colors ${
                autoApproveClean ? 'bg-emerald-500' : 'bg-slate-300'
              }`}
            >
              <div className={`w-4 h-4 rounded-full bg-white transition-transform ${
                autoApproveClean ? 'translate-x-6' : 'translate-x-0'
              }`} />
            </button>
          </div>

          <div className={`p-4 rounded-xl border flex flex-col gap-4 ${
            isLight ? "bg-slate-50 border-slate-200" : "bg-[#09090b] border-white/10"
          }`}>
            <h3 className={`text-sm font-bold ${isLight ? "text-slate-900" : "text-white"}`}>Minimum Calorie Safety Floor</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className={`text-xs block mb-1 ${isLight ? "text-slate-600" : "text-zinc-400"}`}>Female Calorie Floor (kcal)</label>
                <input 
                  type="number"
                  value={femaleCalorieFloor}
                  onChange={(e) => setFemaleCalorieFloor(Number(e.target.value))}
                  className={`w-full border rounded-lg px-3 py-2 text-sm ${
                    isLight ? "bg-white border-slate-300 text-slate-900" : "bg-black border-white/10 text-white"
                  }`}
                />
              </div>
              <div>
                <label className={`text-xs block mb-1 ${isLight ? "text-slate-600" : "text-zinc-400"}`}>Male Calorie Floor (kcal)</label>
                <input 
                  type="number"
                  value={maleCalorieFloor}
                  onChange={(e) => setMaleCalorieFloor(Number(e.target.value))}
                  className={`w-full border rounded-lg px-3 py-2 text-sm ${
                    isLight ? "bg-white border-slate-300 text-slate-900" : "bg-black border-white/10 text-white"
                  }`}
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* --- MEAL INSPECTION MODAL --- */}
      {inspectPlan && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-center justify-center p-4">
          <div className={`border rounded-3xl max-w-2xl w-full p-6 max-h-[90vh] overflow-y-auto shadow-2xl ${
            isLight ? "bg-white border-slate-200 text-slate-900" : "bg-[#0c0c0e] border-white/20 text-white"
          }`}>
            <div className="flex items-center justify-between border-b border-slate-200 pb-4 mb-4">
              <div>
                <span className="text-xs font-black uppercase text-amber-600">Meal Card Inspector</span>
                <h3 className={`text-2xl font-black ${isLight ? "text-slate-900" : "text-white"}`}>{inspectPlan.clientName}</h3>
              </div>
              <button 
                onClick={() => setInspectPlan(null)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold border ${
                  isLight ? "bg-slate-100 hover:bg-slate-200 text-slate-800 border-slate-200" : "bg-white/10 text-white border-white/10"
                }`}
              >
                Close
              </button>
            </div>

            <div className="flex flex-col gap-4">
              {inspectPlan.meals.map((meal) => (
                <div key={meal.id} className={`p-4 rounded-xl border ${
                  isLight ? "bg-slate-50 border-slate-200" : "bg-black/50 border-white/10"
                }`}>
                  <div className={`flex items-center justify-between text-xs font-bold mb-2 ${
                    isLight ? "text-slate-900" : "text-white"
                  }`}>
                    <span>{meal.name} ({meal.time})</span>
                    <span className="text-amber-600">{meal.totalCalories} kcal | {meal.totalProtein}g P</span>
                  </div>
                  <div className={`flex flex-col gap-1 text-xs ${isLight ? "text-slate-700" : "text-zinc-300"}`}>
                    {meal.items.map((item, i) => (
                      <div key={i} className={`flex justify-between border-b py-1 ${isLight ? "border-slate-200" : "border-white/5"}`}>
                        <span>{item.foodName} (Portion: <strong>{item.portionGrams}g</strong>)</span>
                        <span className={`font-mono ${isLight ? "text-slate-500" : "text-zinc-400"}`}>{item.calories} cal | P: {item.protein}g | C: {item.carbs}g | F: {item.fats}g</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
