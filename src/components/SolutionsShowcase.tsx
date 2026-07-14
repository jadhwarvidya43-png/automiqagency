"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AlertCircle, CheckCircle2, Clock, Zap, UserX, Cpu, Server } from "lucide-react";

export default function SolutionsShowcase() {
  const [activeTab, setActiveTab] = useState<"manual" | "automiq">("automiq");

  const manualSteps = [
    { title: "Customer Call Rings", time: "2 minutes", status: "Missed / Delayed", desc: "No receptionist available. Caller leaves a voicemail or drops off.", icon: <UserX size={16} className="text-red-500" /> },
    { title: "Manual Lead Form Intake", time: "4 hours", status: "Slow Response", desc: "Sales team manually checks mailbox and qualifies data.", icon: <Clock size={16} className="text-red-500" /> },
    { title: "Manual Booking Callbacks", time: "24 hours", status: "High Friction", desc: "Back-and-forth emails to align schedules with sales directors.", icon: <AlertCircle size={16} className="text-red-500" /> },
    { title: "Manual CRM Logging", time: "15 minutes", status: "Typo Prone", desc: "Typing contact info, call logs, and tasks into Salesforce.", icon: <Clock size={16} className="text-red-500" /> },
  ];

  const automiqSteps = [
    { title: "24/7 AI Voice Agent Responds", time: "0.8 seconds", status: "Instant Answer", desc: "AI receptionist answers call in native language, qualifies intent.", icon: <Cpu size={16} className="text-[#0284C7]" /> },
    { title: "GPT Chatbot Intake", time: "0.2 seconds", status: "Instant Qualify", desc: "GPT qualifies customer needs and captures variables on site.", icon: <Zap size={16} className="text-[#0284C7]" /> },
    { title: "Direct Booking Schedule Sync", time: "1.2 seconds", status: "Auto-Confirmed", desc: "Intake synched directly into Google Calendar via webhooks.", icon: <CheckCircle2 size={16} className="text-emerald-600" /> },
    { title: "Automated CRM Synchronization", time: "0.5 seconds", status: "Error-Free Log", desc: "n8n flow automatically logs lead variables, logs calls, alerts sales.", icon: <Server size={16} className="text-[#7C5CFC]" /> },
  ];

  return (
    <section id="showcase" className="relative py-32 bg-white/40 overflow-hidden border-b border-black/5">
      {/* Grid backing */}
      <div className="absolute inset-0 tech-grid opacity-10 z-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#7C5CFC]/20 bg-[#7C5CFC]/5">
            <Zap size={12} className="text-[#7C5CFC]" />
            <span className="font-btn text-[10px] font-semibold uppercase tracking-wider text-[#7C5CFC]">
              Before & After AI
            </span>
          </div>
          <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl tracking-tight text-slate-900">
            Interactive Workflow Engine<span className="text-[#0284C7]">.</span>
          </h2>
          <p className="font-satoshi text-slate-500 text-sm md:text-base max-w-xl">
            Toggle below to compare traditional operations against our autonomous AI agent networks.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-black border border-white/10 rounded-full p-1.5 shadow-2xl relative">
            <button
              onClick={() => setActiveTab("manual")}
              className={`font-btn text-xs md:text-sm font-semibold uppercase tracking-wider px-6 py-2.5 rounded-full transition-all duration-300 relative z-10 cursor-pointer ${
                activeTab === "manual" ? "text-slate-900" : "text-slate-400 hover:text-white"
              }`}
            >
              Manual Operations (Old)
            </button>
            <button
              onClick={() => setActiveTab("automiq")}
              className={`font-btn text-xs md:text-sm font-semibold uppercase tracking-wider px-6 py-2.5 rounded-full transition-all duration-300 relative z-10 cursor-pointer ${
                activeTab === "automiq" ? "text-slate-900" : "text-slate-400 hover:text-white"
              }`}
            >
              AUTOMIQ AI Engine (New)
            </button>

            {/* Slider pill background */}
            <motion.div
              layoutId="activeTabSlider"
              className="absolute top-1.5 bottom-1.5 rounded-full bg-white z-0 shadow-sm"
              animate={{
                left: activeTab === "manual" ? "6px" : "185px",
                width: activeTab === "manual" ? "180px" : "195px",
              }}
              transition={{ type: "spring", stiffness: 380, damping: 30 }}
            />
          </div>
        </div>

        {/* Dynamic Sandbox Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch mt-8">
          {/* Steps list */}
          <div className="lg:col-span-6 flex flex-col gap-4">
            <AnimatePresence mode="wait">
              {activeTab === "manual" ? (
                <motion.div
                  key="manual"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col gap-4 h-full"
                >
                  {manualSteps.map((step, idx) => (
                    <div
                      key={idx}
                      className="glass-card rounded-2xl p-5 border border-red-500/15 bg-black hover:border-red-500/30 flex gap-4 items-start shadow-xl"
                    >
                      <div className="h-8 w-8 rounded-lg bg-red-950/40 flex items-center justify-center shrink-0 border border-red-500/10">
                        {step.icon}
                      </div>
                      <div className="flex flex-col gap-1 w-full">
                        <div className="flex items-center justify-between">
                          <h4 className="font-btn text-sm font-bold text-white">{step.title}</h4>
                          <span className="text-[10px] text-red-400 font-mono font-semibold bg-red-950/50 border border-red-500/20 px-2 py-0.5 rounded-full">
                            {step.time}
                          </span>
                        </div>
                        <p className="text-xs text-slate-400 leading-relaxed font-sans font-light">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </motion.div>
              ) : (
                <motion.div
                  key="automiq"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col gap-4 h-full"
                >
                  {automiqSteps.map((step, idx) => (
                    <div
                      key={idx}
                      className="glass-card rounded-2xl p-5 border border-emerald-500/15 bg-black hover:border-[#0284C7]/30 flex gap-4 items-start shadow-xl"
                    >
                      <div className="h-8 w-8 rounded-lg bg-emerald-950/40 flex items-center justify-center shrink-0 border border-emerald-500/10">
                        {step.icon}
                      </div>
                      <div className="flex flex-col gap-1 w-full">
                        <div className="flex items-center justify-between">
                          <h4 className="font-btn text-sm font-bold text-white">{step.title}</h4>
                          <span className="text-[10px] text-emerald-400 font-mono font-semibold bg-emerald-950/50 border border-emerald-500/20 px-2 py-0.5 rounded-full">
                            {step.time}
                          </span>
                        </div>
                        <p className="text-xs text-slate-400 leading-relaxed font-sans font-light">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Interactive workflow visual dashboard */}
          <div className="lg:col-span-6 flex items-center justify-center">
            <div className="w-full glass-card rounded-3xl p-6 border border-white/10 shadow-2xl relative overflow-hidden bg-black flex flex-col justify-between h-[450px]">
              
              {/* Top Bar */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <span className="font-btn text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                  Live Operations Simulation
                </span>
                <span className="flex items-center gap-1.5 text-[10px] font-mono text-[#0284C7] bg-[#0284C7]/10 px-2 py-0.5 rounded-full font-bold border border-[#0284C7]/20">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#0284C7] animate-ping" />
                  <span>{activeTab === "manual" ? "CONGESTED" : "SYSTEM OPTIMAL"}</span>
                </span>
              </div>

              {/* Central canvas visualizer */}
              <div className="flex-1 flex flex-col items-center justify-center relative py-6">
                
                {/* Manual Visual View */}
                {activeTab === "manual" ? (
                  <div className="flex flex-col items-center gap-6 w-full max-w-xs text-center">
                    <div className="h-16 w-16 rounded-2xl bg-red-950/50 border border-red-500/20 flex items-center justify-center text-red-500 relative shadow-sm">
                      <AlertCircle size={32} className="animate-bounce" />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <h4 className="font-btn text-base font-bold text-white">Manual Bottleneck</h4>
                      <p className="text-xs text-slate-400 leading-relaxed font-sans font-light">
                        Data flows slowly through spreadsheets, manual callbacks, and delayed messages. Average lead conversion rate drops by <span className="text-red-500 font-bold">60%</span> after 1 hour of delay.
                      </p>
                    </div>
                    <div className="flex items-center gap-2 border border-white/10 bg-white/5 rounded-full py-1.5 px-4 text-[10px] text-slate-400 font-semibold">
                      <span>AVG RUNTIME: 24h 15m</span>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col items-center gap-6 w-full max-w-xs text-center">
                    {/* Pulsing server rings */}
                    <div className="h-20 w-20 rounded-full bg-[#7C5CFC]/5 border border-[#7C5CFC]/20 flex items-center justify-center text-[#0284C7] relative shadow-[0_0_30px_rgba(124,92,252,0.05)]">
                      <div className="absolute inset-0 rounded-full border border-[#0284C7]/10 animate-ping opacity-60" />
                      <Cpu size={32} className="animate-pulse" />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <h4 className="font-btn text-base font-bold text-white">AUTOMIQ AI Engine</h4>
                      <p className="text-xs text-slate-400 leading-relaxed font-sans font-light">
                        Leads qualified and registered under <span className="text-emerald-400 font-bold">2 seconds</span>. Voice receptionists, GPT bots, and n8n pipelines sync data instantly without human delay.
                      </p>
                    </div>
                    <div className="flex items-center gap-2 border border-[#7C5CFC]/20 bg-[#7C5CFC]/10 rounded-full py-1.5 px-4 text-[10px] text-[#0284C7] font-semibold font-mono shadow-sm">
                      <span>AVG RUNTIME: 2.7s (Instant)</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom Telemetry readouts */}
              <div className="grid grid-cols-3 gap-2 border-t border-white/10 pt-4">
                <div className="flex flex-col gap-0.5">
                  <span className="text-[10px] text-slate-400 font-semibold uppercase font-btn">Throughput</span>
                  <span className="text-xs font-bold text-white font-mono">{activeTab === "manual" ? "12%" : "100%"}</span>
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="text-[10px] text-slate-400 font-semibold uppercase font-btn">Error Rate</span>
                  <span className={`text-xs font-bold font-mono ${activeTab === "manual" ? "text-red-400" : "text-emerald-400"}`}>
                    {activeTab === "manual" ? "14.2%" : "0.01%"}
                  </span>
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="text-[10px] text-slate-400 font-semibold uppercase font-btn">Resource Cost</span>
                  <span className="text-xs font-bold text-white font-mono">{activeTab === "manual" ? "High ($$$)" : "Minimal ($)"}</span>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
