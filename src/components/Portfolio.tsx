"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Stethoscope, Building2, Utensils, Hammer, Rocket, BarChart3, Clock, Cpu, Server } from "lucide-react";

export default function Portfolio() {
  const [activeProject, setActiveProject] = useState<number>(0);

  const projects = [
    {
      title: "AI Voice Agent for Dental Clinic",
      icon: <Stethoscope size={18} className="text-[#7C5CFC]" />,
      description: "An autonomous AI telephone receptionist that handles 24/7 inbound calls, answers dental FAQ questions, qualifies patient urgency, and updates booking schedules.",
      stats: [
        { label: "Calls Answered Automatically", value: "95%" },
        { label: "Increase in Bookings", value: "+170%" },
        { label: "Missed Calls Logged", value: "0%" }
      ],
      dashboardType: "dental",
      tech: ["Twilio Voice API", "OpenAI Realtime API", "Vapi", "n8n"]
    },
    {
      title: "AI Chatbot for Real Estate",
      icon: <Building2 size={18} className="text-[#0284C7]" />,
      description: "A custom trained GPT conversational assistant that qualifies incoming buyer leads, schedules home showings, and answers complex property inquiries.",
      stats: [
        { label: "More Qualified Leads", value: "+320%" },
        { label: "Average Response Time", value: "0.2s" },
        { label: "Conversations Held", value: "4,200+" }
      ],
      dashboardType: "realestate",
      tech: ["Next.js", "OpenAI Assistant API", "Pinecone Vector DB", "Make.com"]
    },
    {
      title: "Restaurant WhatsApp Bot",
      icon: <Utensils size={18} className="text-emerald-500" />,
      description: "A complete conversational commerce WhatsApp interface letting customers read the digital menu, place food orders, process billing, and verify delivery status.",
      stats: [
        { label: "Order Placements Automated", value: "100%" },
        { label: "Support Availablity", value: "24/7" },
        { label: "Average Check Size", value: "+18%" }
      ],
      dashboardType: "restaurant",
      tech: ["WhatsApp Cloud API", "Stripe Checkout", "Node.js", "Express"]
    },
    {
      title: "Construction CRM Automation",
      icon: <Hammer size={18} className="text-amber-500" />,
      description: "A robust n8n-powered backend pipeline connecting job intakes, automated quote calculations, customer notification SMS, and QuickBooks invoicing.",
      stats: [
        { label: "Saved Labor Weekly", value: "30 Hours" },
        { label: "Invoice Processing Time", value: "-90%" },
        { label: "Human Data Errors", value: "0%" }
      ],
      dashboardType: "construction",
      tech: ["n8n.io", "QuickBooks API", "ClickUp API", "Twilio SMS"]
    },
    {
      title: "Startup SaaS Platform MVP",
      icon: <Rocket size={18} className="text-fuchsia-500" />,
      description: "A premium subscription web application built from validation to deployment, featuring user authentication, analytics dashboard, and automated Stripe billing.",
      stats: [
        { label: "Build to Launch Time", value: "6 Weeks" },
        { label: "Active Subscriptions", value: "1,250" },
        { label: "System Uptime Uptime", value: "99.9%" }
      ],
      dashboardType: "saas",
      tech: ["Next.js 15", "Supabase", "Stripe Billing", "Framer Motion"]
    }
  ];

  return (
    <section id="portfolio" className="relative py-32 bg-[#F8FAFC] overflow-hidden border-b border-black/5">
      {/* Background spotlights */}
      <div className="absolute top-[20%] left-[-10%] h-[500px] w-[500px] rounded-full bg-[#7C5CFC]/3 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] h-[500px] w-[500px] rounded-full bg-[#0284C7]/2 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-4 mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#7C5CFC]/20 bg-[#7C5CFC]/5">
            <BarChart3 size={12} className="text-[#7C5CFC]" />
            <span className="font-btn text-[10px] font-semibold uppercase tracking-wider text-[#7C5CFC]">
              Featured Work
            </span>
          </div>
          <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl tracking-tight text-slate-900">
            Premium Project Showcase<span className="text-[#0284C7]">.</span>
          </h2>
          <p className="font-satoshi text-slate-500 text-sm md:text-base max-w-xl">
            Explore live dashboard simulations of the bespoke AI voice and software platforms we construct.
          </p>
        </div>

        {/* Dynamic Project Selector & Dashboard Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Projects Selector Tabs */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {projects.map((project, idx) => (
              <button
                key={idx}
                onClick={() => setActiveProject(idx)}
                className={`w-full text-left p-6 rounded-3xl border transition-all duration-500 flex gap-4 items-start cursor-pointer ${
                  activeProject === idx
                    ? "bg-black border-[#7C5CFC]/30 shadow-2xl shadow-[#7C5CFC]/10"
                    : "bg-[#09090B] border-white/5 hover:border-white/10 shadow-md"
                }`}
              >
                <div className={`h-9 w-9 rounded-xl flex items-center justify-center shrink-0 border ${
                  activeProject === idx
                    ? "bg-[#7C5CFC]/10 border-[#7C5CFC]/20 text-white"
                    : "bg-white/5 border-white/10 text-slate-400"
                }`}>
                  {project.icon}
                </div>
                <div className="flex flex-col gap-1">
                  <h4 className={`font-btn text-sm font-bold tracking-tight ${activeProject === idx ? "text-white" : "text-slate-200"}`}>
                    {project.title}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed font-sans line-clamp-2 font-light">
                    {project.description}
                  </p>
                </div>
              </button>
            ))}
          </div>

          {/* Right Column: High Fidelity Dashboard Mockups */}
          <div className="lg:col-span-7 flex items-center justify-center">
            <div className="w-full glass-card rounded-3xl p-6 border border-white/10 shadow-2xl relative overflow-hidden bg-black h-[480px] flex flex-col justify-between">
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeProject}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="h-full flex flex-col justify-between"
                >
                  {/* Dashboard header */}
                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="font-btn text-[10px] font-bold text-slate-300 tracking-widest uppercase">
                        {projects[activeProject].title.split("for")[0].trim() || "AI DASHBOARD"} — ACTIVE
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      {projects[activeProject].tech.map((t, index) => (
                        <span key={index} className="text-[9px] font-mono text-slate-300 bg-white/5 border border-white/5 px-2 py-0.5 rounded-full">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Dynamic Dashboard Layouts */}
                  <div className="flex-1 py-6 flex flex-col justify-center">
                    {projects[activeProject].dashboardType === "dental" && (
                      <div className="grid grid-cols-3 gap-4">
                        <div className="col-span-3 bg-white/2 border border-white/5 rounded-2xl p-4 flex flex-col gap-2 shadow-inner">
                          <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider font-btn">Real-time Call Queue</span>
                          <div className="flex flex-col gap-2">
                            <div className="flex items-center justify-between text-xs border-b border-white/5 pb-1">
                              <span className="text-slate-300 font-sans">Patient: Dr. Sarah (Root Canal query)</span>
                              <span className="text-emerald-400 font-mono font-semibold">Booked / 1.4m</span>
                            </div>
                            <div className="flex items-center justify-between text-xs border-b border-white/5 pb-1">
                              <span className="text-slate-300 font-sans">Patient: James K. (Emergency pain)</span>
                              <span className="text-amber-400 font-mono font-semibold">Urgent Routed</span>
                            </div>
                          </div>
                        </div>
                        <div className="col-span-1 bg-white/2 border border-white/5 rounded-2xl p-4 flex flex-col justify-between h-28 shadow-inner">
                          <span className="text-[9px] text-slate-400 font-bold uppercase tracking-wider font-btn leading-tight">Missed Call Protection</span>
                          <span className="text-2xl font-extrabold text-[#7C5CFC] font-display">100%</span>
                        </div>
                        <div className="col-span-1 bg-white/2 border border-white/5 rounded-2xl p-4 flex flex-col justify-between h-28 shadow-inner">
                          <span className="text-[9px] text-slate-400 font-bold uppercase tracking-wider font-btn leading-tight">Total Phone Hours Saved</span>
                          <span className="text-2xl font-extrabold text-white font-display">42h</span>
                        </div>
                        <div className="col-span-1 bg-white/2 border border-white/5 rounded-2xl p-4 flex flex-col justify-between h-28 shadow-inner">
                          <span className="text-[9px] text-slate-400 font-bold uppercase tracking-wider font-btn leading-tight">AI Booking Rate</span>
                          <span className="text-2xl font-extrabold text-[#0284C7] font-display">95.4%</span>
                        </div>
                      </div>
                    )}

                    {projects[activeProject].dashboardType === "Saas" || projects[activeProject].dashboardType === "saas" && (
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-white/2 border border-white/5 rounded-2xl p-4 flex flex-col justify-between h-36 shadow-inner">
                          <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider font-btn">User analytics</span>
                          <span className="text-3xl font-extrabold text-white font-display">12.4k</span>
                          <span className="text-[10px] text-emerald-400 font-semibold font-mono">▲ +24% MAU Growth</span>
                        </div>
                        <div className="bg-white/2 border border-white/5 rounded-2xl p-4 flex flex-col justify-between h-36 shadow-inner">
                          <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider font-btn">MRR Status (Stripe Hub)</span>
                          <span className="text-3xl font-extrabold text-fuchsia-500 font-display">$42,912</span>
                          <span className="text-[10px] text-slate-400 font-mono">SaaS MVP v1.0</span>
                        </div>
                      </div>
                    )}

                    {projects[activeProject].dashboardType === "realestate" && (
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-white/2 border border-white/5 rounded-2xl p-4 flex flex-col gap-2 h-44 shadow-inner">
                          <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider font-btn">Qualified Leads Pipeline</span>
                          <div className="flex flex-col gap-1.5 mt-1">
                            <div className="flex items-center justify-between text-[11px] font-sans border-b border-white/5 pb-1">
                              <span className="text-white font-semibold">Marc Miller (Budget: $1.2M)</span>
                              <span className="text-[#0284C7] font-bold">95% Match</span>
                            </div>
                            <div className="flex items-center justify-between text-[11px] font-sans pb-1">
                              <span className="text-white font-semibold">Alissa R. (Budget: $850k)</span>
                              <span className="text-amber-400 font-bold">82% Match</span>
                            </div>
                          </div>
                        </div>
                        <div className="bg-white/2 border border-white/5 rounded-2xl p-4 flex flex-col justify-between h-44 shadow-inner">
                          <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider font-btn">Inquiries qualified</span>
                          <div className="h-20 w-full flex items-end gap-2 px-2">
                            <div className="w-full bg-[#7C5CFC]/20 rounded-t h-8" />
                            <div className="w-full bg-[#7C5CFC]/40 rounded-t h-12" />
                            <div className="w-full bg-[#0284C7]/20 rounded-t h-16" />
                            <div className="w-full bg-[#0284C7] rounded-t h-24" />
                          </div>
                          <span className="text-right text-[9px] font-mono text-slate-500">UPDATED 2m ago</span>
                        </div>
                      </div>
                    )}

                    {projects[activeProject].dashboardType === "restaurant" && (
                      <div className="grid grid-cols-3 gap-4">
                        <div className="col-span-2 bg-white/2 border border-white/5 rounded-2xl p-4 flex flex-col gap-2 shadow-inner">
                          <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider font-btn">Order Queue (WhatsApp API)</span>
                          <div className="flex flex-col gap-2">
                            <div className="flex items-center justify-between text-xs">
                              <span className="text-white font-sans">#1024 - 1x Deluxe Cheese Pizza</span>
                              <span className="text-emerald-400 font-bold font-mono">Paid / WhatsApp</span>
                            </div>
                            <div className="flex items-center justify-between text-xs">
                              <span className="text-white font-sans">#1025 - 2x Truffle Pasta + Drink</span>
                              <span className="text-[#0284C7] font-bold font-mono">Dispatched</span>
                            </div>
                          </div>
                        </div>
                        <div className="bg-white/2 border border-white/5 rounded-2xl p-4 flex flex-col justify-between h-36 shadow-inner">
                          <span className="text-[9px] text-slate-400 font-bold uppercase tracking-wider font-btn">Auto Checkout Conversion</span>
                          <span className="text-2xl font-extrabold text-emerald-400 font-display">89.2%</span>
                        </div>
                      </div>
                    )}

                    {projects[activeProject].dashboardType === "construction" && (
                      <div className="grid grid-cols-1 gap-4">
                        <div className="bg-white/2 border border-white/5 rounded-2xl p-4 flex flex-col gap-2 shadow-inner">
                          <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider font-btn">n8n Execution Output Logs</span>
                          <div className="font-mono text-[10px] bg-black/40 p-3 rounded-lg flex flex-col gap-1 border border-white/5 text-slate-300">
                            <p className="text-slate-500">[12:04:12] Webhook intake trigger: Success (200)</p>
                            <p className="text-[#0284C7]">[12:04:13] QuickBooks: Customer found, invoice #INV-492 created</p>
                            <p className="text-emerald-400">[12:04:14] SMS Pipeline: Confirmation dispatched to client</p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Project Metrics Grid */}
                  <div className="grid grid-cols-3 gap-2 border-t border-white/10 pt-4">
                    {projects[activeProject].stats.map((stat, sIdx) => (
                      <div key={sIdx} className="flex flex-col">
                        <span className="text-[9px] text-slate-500 font-semibold uppercase font-btn leading-tight">
                          {stat.label}
                        </span>
                        <span className="text-sm md:text-base font-extrabold text-white font-display mt-0.5">
                          {stat.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
