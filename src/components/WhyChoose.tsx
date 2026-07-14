"use client";
import { Sparkles, Code, Cpu, Zap, ShieldCheck, HeartHandshake } from "lucide-react";

export default function WhyChoose() {
  return (
    <section id="why-choose" className="relative py-32 bg-[#F8FAFC] overflow-hidden border-b border-black/5">
      {/* Background blobs */}
      <div className="absolute top-[40%] left-[-10%] h-[400px] w-[400px] rounded-full bg-[#7C5CFC]/3 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] h-[400px] w-[400px] rounded-full bg-[#0284C7]/2 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-4 mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#7C5CFC]/20 bg-[#7C5CFC]/5">
            <Sparkles size={12} className="text-[#7C5CFC]" />
            <span className="font-btn text-[10px] font-semibold uppercase tracking-wider text-[#7C5CFC]">
              Core Advantages
            </span>
          </div>
          <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl tracking-tight text-slate-900">
            Why Teams Partner with Us<span className="text-[#0284C7]">.</span>
          </h2>
          <p className="font-satoshi text-slate-500 text-sm md:text-base max-w-xl">
            We deliver handcrafted custom digital products with award-winning design standards and enterprise security levels.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-12 gap-6 md:gap-8">
          
          {/* Card 1: AI Specialists */}
          <div className="col-span-12 md:col-span-8 glass-card rounded-3xl p-8 border border-white/8 bg-[#09090B] flex flex-col justify-between gap-12 group hover:border-[#7C5CFC]/30 transition-all duration-300 shadow-2xl">
            <div className="flex items-center justify-between">
              <div className="h-10 w-10 rounded-xl bg-[#7C5CFC]/10 flex items-center justify-center border border-[#7C5CFC]/20 text-[#7C5CFC]">
                <Cpu size={20} />
              </div>
              <span className="text-[10px] font-mono text-slate-500 font-semibold tracking-wider uppercase">01 / CAPABILITY</span>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="font-display font-bold text-2xl text-white tracking-tight">
                AI & Large Language Model Specialists
              </h3>
              <p className="font-satoshi text-sm text-slate-400 leading-relaxed font-light">
                We design and implement custom LLM integrations, retrieval-augmented generation (RAG) databases, and natural speech agents. We don't just paste API keys — we configure robust context trees, guardrails, and automated fallback logic.
              </p>
            </div>
          </div>

          {/* Card 2: Premium UI Design */}
          <div className="col-span-12 md:col-span-4 glass-card rounded-3xl p-8 border border-white/8 bg-[#09090B] flex flex-col justify-between gap-12 group hover:border-[#0284C7]/30 transition-all duration-300 shadow-2xl">
            <div className="flex items-center justify-between">
              <div className="h-10 w-10 rounded-xl bg-[#0284C7]/10 flex items-center justify-center border border-[#0284C7]/20 text-[#0284C7]">
                <Sparkles size={20} />
              </div>
              <span className="text-[10px] font-mono text-slate-500 font-semibold tracking-wider uppercase">02 / AESTHETICS</span>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="font-display font-bold text-2xl text-white tracking-tight">
                Stripe & Apple Grade UI/UX Design
              </h3>
              <p className="font-satoshi text-sm text-slate-400 leading-relaxed font-light">
                Beautiful glassmorphism layouts, custom SVG illustrations, responsive bento flows, and micro-interactions that will wow your clients and increase conversion rates.
              </p>
            </div>
          </div>

          {/* Card 3: Speed of Delivery */}
          <div className="col-span-12 md:col-span-4 glass-card rounded-3xl p-8 border border-white/8 bg-[#09090B] flex flex-col justify-between gap-12 group hover:border-[#0284C7]/30 transition-all duration-300 shadow-2xl">
            <div className="flex items-center justify-between">
              <div className="h-10 w-10 rounded-xl bg-amber-500/10 flex items-center justify-center border border-amber-500/20 text-amber-500">
                <Zap size={20} />
              </div>
              <span className="text-[10px] font-mono text-slate-500 font-semibold tracking-wider uppercase">03 / VELOCITY</span>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="font-display font-bold text-2xl text-white tracking-tight">
                Rapid MVP Development
              </h3>
              <p className="font-satoshi text-sm text-slate-400 leading-relaxed font-light">
                We deliver robust, functional startup MVPs in 6 weeks or less. We maintain intense momentum, helping you launch digital products and collect user feedback faster.
              </p>
            </div>
          </div>

          {/* Card 4: Clean Custom Code */}
          <div className="col-span-12 md:col-span-8 glass-card rounded-3xl p-8 border border-white/8 bg-[#09090B] flex flex-col justify-between gap-12 group hover:border-[#7C5CFC]/30 transition-all duration-300 shadow-2xl">
            <div className="flex items-center justify-between">
              <div className="h-10 w-10 rounded-xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 text-emerald-600">
                <Code size={20} />
              </div>
              <span className="text-[10px] font-mono text-slate-500 font-semibold tracking-wider uppercase">04 / QUALITY</span>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="font-display font-bold text-2xl text-white tracking-tight">
                No-Template Code Standards (React 19 & Next.js 15)
              </h3>
              <p className="font-satoshi text-sm text-slate-400 leading-relaxed font-light">
                We build every system from scratch using robust Next.js server components, type-safe APIs, and structured database architectures. You get clean, fully-documented codebases that are easy to maintain and scale.
              </p>
            </div>
          </div>

          {/* Card 5: Ongoing support & SLA */}
          <div className="col-span-12 glass-card rounded-3xl p-8 border border-white/8 bg-[#09090B] flex flex-col md:flex-row items-start md:items-center justify-between gap-12 group hover:border-[#7C5CFC]/30 transition-all duration-300 shadow-2xl">
            <div className="flex flex-col gap-6 md:max-w-2xl">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-[#7C5CFC]/10 flex items-center justify-center border border-[#7C5CFC]/20 text-[#7C5CFC] shrink-0">
                  <HeartHandshake size={20} />
                </div>
                <h3 className="font-display font-bold text-2xl text-white tracking-tight">
                  Business-Focused Partnership & SLA
                </h3>
              </div>
              <p className="font-satoshi text-sm text-slate-400 leading-relaxed font-light font-sans">
                We don't just deploy code and disappear. We coordinate ongoing performance monitoring, monthly optimization audits, security reviews, and dedicated Service Level Agreements (SLAs) to guarantee 99.9% uptime for your AI voice agents and web platforms.
              </p>
            </div>
            
            {/* Quick check details */}
            <div className="flex flex-wrap gap-3 md:max-w-xs justify-start md:justify-end">
              <div className="flex items-center gap-1.5 text-xs text-slate-300 border border-white/5 bg-white/5 py-2 px-4 rounded-full font-btn font-semibold">
                <ShieldCheck size={12} className="text-[#0284C7]" />
                <span>SEO Optimized</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-slate-300 border border-white/5 bg-white/5 py-2 px-4 rounded-full font-btn font-semibold">
                <ShieldCheck size={12} className="text-[#7C5CFC]" />
                <span>Security First</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-slate-300 border border-white/5 bg-white/5 py-2 px-4 rounded-full font-btn font-semibold">
                <ShieldCheck size={12} className="text-emerald-600" />
                <span>Future Ready</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
