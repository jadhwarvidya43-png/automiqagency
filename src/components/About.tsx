"use client";
import { motion } from "framer-motion";
import { Phone, ArrowRight, ShieldCheck, Cpu, Database, Network } from "lucide-react";

export default function About() {
  const stats = [
    { label: "Agency Experience", value: "2+ Years" },
    { label: "Systems Automated", value: "90%+" },
    { label: "Bookings Generated", value: "+170%" },
    { label: "Tokens Processed", value: "50M+" },
  ];

  return (
    <section id="about" className="relative py-32 bg-[#F8FAFC] overflow-hidden border-b border-black/5">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Title & Description */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#7C5CFC]/20 bg-[#7C5CFC]/5 w-fit">
              <Cpu size={12} className="text-[#7C5CFC]" />
              <span className="font-btn text-[10px] font-semibold uppercase tracking-wider text-[#7C5CFC]">
                Core Competence
              </span>
            </div>

            <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl tracking-tight text-slate-900 leading-tight">
              We Build Businesses <br />
              <span className="bg-gradient-to-r from-[#7C5CFC] to-[#0284C7] bg-clip-text text-transparent">
                Powered by AI.
              </span>
            </h2>

            <p className="font-satoshi text-base md:text-lg text-slate-600 leading-relaxed font-light">
              AUTOMIQ AGENCY helps startups and enterprise businesses automate operations, generate more qualified leads, reduce support overhead, and launch next-generation SaaS products.
            </p>
            <p className="font-satoshi text-sm md:text-base text-slate-500 leading-relaxed">
              From responsive voice assistants to n8n/Make automation networks, we engineer high-performing AI infrastructures that grow businesses faster while slashing operating budgets.
            </p>

            {/* Direct Line Badge */}
            <div className="flex flex-wrap gap-4 items-center mt-4">
              <a
                href="tel:+919970451490"
                className="flex items-center gap-3 px-5 py-3 rounded-2xl border border-black/6 bg-white/70 hover:border-[#0284C7]/30 transition-colors duration-300 font-btn text-sm font-semibold text-slate-800 shadow-sm"
              >
                <Phone size={14} className="text-[#0284C7]" />
                <span>Call Director: +91 9970451490</span>
              </a>
              <a
                href="#contact"
                className="flex items-center gap-1 font-btn text-sm font-semibold text-[#7C5CFC] hover:text-slate-800 transition-colors duration-300 group py-2"
              >
                <span>Read Case Studies</span>
                <ArrowRight size={14} className="transform transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8 pt-8 border-t border-black/5">
              {stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col gap-1">
                  <span className="font-display font-extrabold text-2xl md:text-3xl text-slate-900 tracking-tight">
                    {stat.value}
                  </span>
                  <span className="font-btn text-[10px] md:text-xs text-slate-400 font-semibold uppercase tracking-wider">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Interactive Tech Sandbox / Mockup */}
          <div className="lg:col-span-5 relative flex justify-center">
            {/* Glow backing */}
            <div className="absolute inset-0 bg-[#7C5CFC]/3 blur-[80px] pointer-events-none rounded-full" />

            {/* Interactive Automation Node Sandbox */}
            <div className="w-full max-w-sm glass-card rounded-3xl p-6 flex flex-col gap-6 relative overflow-hidden border border-white/10 shadow-2xl">
              <div className="flex items-center justify-between border-b border-white/5 pb-4">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="font-btn text-xs font-semibold text-slate-400 tracking-wider">AUTOMIQ CORE_v1.0</span>
                </div>
                <div className="flex gap-1.5">
                  <div className="h-1.5 w-1.5 rounded-full bg-slate-700" />
                  <span className="h-1.5 w-1.5 rounded-full bg-slate-700" />
                </div>
              </div>

              {/* Connected Visual Nodes */}
              <div className="flex flex-col gap-8 relative py-4">
                {/* Connector line path */}
                <div className="absolute left-[34px] top-6 bottom-6 w-[2px] bg-gradient-to-b from-[#7C5CFC] via-[#0284C7] to-emerald-500 z-0 opacity-60" />

                {/* Node 1: Input Trigger */}
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className="flex items-center gap-4 relative z-10 bg-black border border-white/10 p-3 rounded-2xl shadow-lg"
                >
                  <div className="h-10 w-10 rounded-xl bg-[#7C5CFC]/10 flex items-center justify-center border border-[#7C5CFC]/20 text-[#7C5CFC]">
                    <Phone size={18} />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-btn text-xs font-bold text-white">Call Triggered</span>
                    <span className="text-[10px] text-slate-400">AI Voice Assistant Receptionist</span>
                  </div>
                  <div className="ml-auto text-[10px] text-emerald-400 font-bold bg-emerald-950/50 px-2 py-0.5 rounded-full">ACTIVE</div>
                </motion.div>

                {/* Node 2: Processing Engine */}
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className="flex items-center gap-4 relative z-10 bg-black border border-white/10 p-3 rounded-2xl shadow-lg"
                >
                  <div className="h-10 w-10 rounded-xl bg-[#0284C7]/10 flex items-center justify-center border border-[#0284C7]/20 text-[#0284C7]">
                    <Network size={18} />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-btn text-xs font-bold text-white">n8n Automation Engine</span>
                    <span className="text-[10px] text-slate-400">Context routing & payload query</span>
                  </div>
                  <div className="ml-auto text-[10px] text-amber-400 font-bold bg-amber-950/50 px-2 py-0.5 rounded-full">ROUTING</div>
                </motion.div>

                {/* Node 3: Output CRM Sync */}
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className="flex items-center gap-4 relative z-10 bg-black border border-white/10 p-3 rounded-2xl shadow-lg"
                >
                  <div className="h-10 w-10 rounded-xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 text-emerald-400">
                    <Database size={18} />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-btn text-xs font-bold text-white">CRM & Calendly Sync</span>
                    <span className="text-[10px] text-slate-400">Booking finalized automatically</span>
                  </div>
                  <div className="ml-auto text-[10px] text-[#0284C7] font-bold bg-[#0284C7]/10 px-2 py-0.5 rounded-full">UPDATED</div>
                </motion.div>
              </div>

              {/* Footer readout */}
              <div className="text-[10px] text-slate-500 font-mono text-center pt-2 border-t border-white/10">
                EXECUTION COMPLETED IN 42ms
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
