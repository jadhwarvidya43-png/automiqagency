"use client";
import { Search, Compass, Cpu, Zap, LineChart } from "lucide-react";

export default function Process() {
  const steps = [
    {
      num: "01",
      title: "Discovery & Analysis",
      icon: <Search size={18} className="text-[#0284C7]" />,
      desc: "We analyze your existing workflows, identify manual bottlenecks, document operations staff hours, and map out exactly where AI integrations will yield the highest ROI.",
    },
    {
      num: "02",
      title: "Strategic Blueprint",
      icon: <Compass size={18} className="text-[#7C5CFC]" />,
      desc: "Our engineers design a comprehensive blueprint specifying targeted LLMs, prompt context guardrails, database models, and server webhook networks.",
    },
    {
      num: "03",
      title: "Premium Engineering",
      icon: <Cpu size={18} className="text-fuchsia-500" />,
      desc: "We construct your bespoke system, building custom voice agents (Twilio/Vapi), responsive web apps (Next.js), or database engines with modular code.",
    },
    {
      num: "04",
      title: "Workflow Automation",
      icon: <Zap size={18} className="text-amber-500" />,
      desc: "Using n8n or Make, we stitch your tools together (CRMs, payment processors, spreadsheets, calendars) to ensure seamless automated synchronization.",
    },
    {
      num: "05",
      title: "Scalability & Handover",
      icon: <LineChart size={18} className="text-emerald-500" />,
      desc: "We deploy the systems, run automated stress-testing, train your team on analytics dashboards, and provide ongoing optimization SLA contracts.",
    },
  ];

  return (
    <section id="process" className="relative py-32 bg-[#F8FAFC] overflow-hidden border-b border-black/5">
      {/* Background backing grid */}
      <div className="absolute inset-0 tech-grid opacity-10 z-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-4 mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#7C5CFC]/20 bg-[#7C5CFC]/5">
            <Compass size={12} className="text-[#7C5CFC]" />
            <span className="font-btn text-[10px] font-semibold uppercase tracking-wider text-[#7C5CFC]">
              How We Work
            </span>
          </div>
          <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl tracking-tight text-slate-900">
            Our Five-Step Integration Path<span className="text-[#7C5CFC]">.</span>
          </h2>
          <p className="font-satoshi text-slate-500 text-sm md:text-base max-w-xl">
            A precise, structured engineering process that ensures seamless delivery of custom enterprise AI software.
          </p>
        </div>

        {/* Steps Timeline Layout */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
          
          {/* Connector line on desktop */}
          <div className="hidden md:block absolute top-[52px] left-[5%] right-[5%] h-[1px] bg-gradient-to-r from-[#0284C7]/20 via-[#7C5CFC]/30 to-emerald-500/20 z-0" />

          {steps.map((step, idx) => (
            <div
              key={idx}
              className="flex flex-col gap-6 relative z-10 group"
            >
              {/* Step number badge & Icon */}
              <div className="flex items-center justify-between md:flex-col md:items-start md:justify-start gap-4">
                <div className="h-10 w-10 rounded-xl bg-[#09090B] border border-white/8 group-hover:border-[#7C5CFC]/40 flex items-center justify-center text-white transition-all duration-300 relative z-10 shadow-lg">
                  {step.icon}
                </div>
                <span className="font-display font-extrabold text-3xl text-slate-300 group-hover:text-[#7C5CFC] transition-colors duration-300">
                  {step.num}
                </span>
              </div>

              {/* Title & Description */}
              <div className="flex flex-col gap-2">
                <h4 className="font-btn text-sm font-bold text-slate-900 tracking-tight font-sans">
                  {step.title}
                </h4>
                <p className="font-sans text-xs text-slate-500 leading-relaxed font-light">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
