"use client";
import { useState } from "react";
import { Calculator, ArrowRight, TrendingUp } from "lucide-react";

export default function PricingCalculator() {
  const [tickets, setTickets] = useState(500);
  const [hours, setHours] = useState(15);

  // Financial constants
  const COST_PER_TICKET_MANUAL = 3.5; // Average manual response cost
  const COST_PER_TICKET_AI = 0.4; // AI token response cost
  const HOURLY_STAFF_RATE = 28; // Standard staff rate

  const savingsTickets = tickets * (COST_PER_TICKET_MANUAL - COST_PER_TICKET_AI);
  const savingsHours = hours * 4.33 * HOURLY_STAFF_RATE; // 4.33 weeks per month
  const totalMonthlySavings = Math.round(savingsTickets + savingsHours);
  const totalYearlySavings = Math.round(totalMonthlySavings * 12);

  // Dynamic project tier calculation
  let projectTier = "Starter Automation Flow";
  let estimatedCost = "$2,500 - $4,500";
  let timeToDeploy = "2-3 Weeks";

  if (totalMonthlySavings > 8000) {
    projectTier = "Enterprise AI Integration";
    estimatedCost = "$12,000 - $25,000";
    timeToDeploy = "6-8 Weeks";
  } else if (totalMonthlySavings > 2500) {
    projectTier = "Growth System Stack";
    estimatedCost = "$5,000 - $10,000";
    timeToDeploy = "4-5 Weeks";
  }

  return (
    <section className="relative py-32 bg-[#F8FAFC] overflow-hidden border-b border-black/5">
      {/* Background blobs */}
      <div className="absolute top-[20%] right-[-10%] h-[450px] w-[450px] rounded-full bg-[#0284C7]/2 blur-[130px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-4 mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#0284C7]/20 bg-[#0284C7]/5">
            <Calculator size={12} className="text-[#0284C7]" />
            <span className="font-btn text-[10px] font-semibold uppercase tracking-wider text-[#0284C7]">
              ROI Calculator
            </span>
          </div>
          <h3 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl tracking-tight text-slate-900">
            Calculate Your AI Savings<span className="text-[#7C5CFC]">.</span>
          </h3>
          <p className="font-satoshi text-slate-500 text-sm md:text-base max-w-xl">
            Slide the metrics below to estimate your operational savings and find the ideal AUTOMIQ project blueprint.
          </p>
        </div>

        {/* Calculator layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Sliders Input */}
          <div className="lg:col-span-7 glass-card rounded-3xl p-8 border border-white/8 bg-[#09090B] flex flex-col gap-10 shadow-2xl">
            <h4 className="font-btn text-base font-bold text-white border-b border-white/10 pb-4">
              Enter Operational Scope
            </h4>

            {/* Slider 1: Support Tickets */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <span className="font-btn text-sm font-semibold text-slate-200">
                  Monthly Support Tickets / Chats
                </span>
                <span className="font-mono text-base font-bold text-[#0284C7] bg-[#0284C7]/10 px-3 py-1 rounded-lg">
                  {tickets.toLocaleString()}
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="5000"
                step="100"
                value={tickets}
                onChange={(e) => setTickets(parseInt(e.target.value))}
                className="w-full accent-[#7C5CFC] h-1.5 bg-white/10 rounded-lg cursor-pointer"
              />
              <span className="text-[10px] text-slate-400 font-sans">
                Includes phone inquiries, email support tickets, and direct WhatsApp messages.
              </span>
            </div>

            {/* Slider 2: Labor Hours */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <span className="font-btn text-sm font-semibold text-slate-200">
                  Weekly Manual Staff Hours Saved
                </span>
                <span className="font-mono text-base font-bold text-[#7C5CFC] bg-[#7C5CFC]/10 px-3 py-1 rounded-lg">
                  {hours} Hours
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="80"
                step="1"
                value={hours}
                onChange={(e) => setHours(parseInt(e.target.value))}
                className="w-full accent-[#7C5CFC] h-1.5 bg-white/10 rounded-lg cursor-pointer"
              />
              <span className="text-[10px] text-slate-400 font-sans">
                Includes manual scheduling, lead data entries, reporting, and email callbacks.
              </span>
            </div>
          </div>

          {/* Results Display */}
          <div className="lg:col-span-5 glass-card rounded-3xl p-8 border border-white/10 bg-black flex flex-col justify-between gap-8 text-center relative overflow-hidden shadow-2xl">
            
            {/* Spotlight decoration */}
            <div className="absolute top-0 right-0 h-40 w-40 rounded-full bg-[#7C5CFC]/5 blur-[60px] pointer-events-none" />

            <div className="flex flex-col gap-2">
              <span className="font-btn text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                Estimated Monthly Savings
              </span>
              <span className="font-display font-extrabold text-5xl md:text-6xl text-white tracking-tighter leading-none text-glow-blue">
                ${totalMonthlySavings.toLocaleString()}
              </span>
              <span className="text-xs text-emerald-400 font-mono font-semibold flex items-center justify-center gap-1 mt-1">
                <TrendingUp size={12} />
                <span>${totalYearlySavings.toLocaleString()} Saved / Year</span>
              </span>
            </div>

            {/* Integration blueprint estimate */}
            <div className="border-t border-white/10 pt-6 flex flex-col gap-4 text-left">
              <span className="font-btn text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                Recommended Blueprint
              </span>
              <div className="bg-white/2 border border-white/5 rounded-2xl p-4 flex flex-col gap-2 shadow-inner">
                <div className="flex items-center justify-between text-sm font-bold text-white">
                  <span>{projectTier}</span>
                  <span className="text-[#0284C7]">{estimatedCost}</span>
                </div>
                <div className="flex items-center justify-between text-[11px] text-slate-400">
                  <span>Deployment Pipeline</span>
                  <span>{timeToDeploy}</span>
                </div>
              </div>
            </div>

            {/* CTA action */}
            <a
              href="#contact"
              className="w-full font-btn font-bold text-sm bg-gradient-to-r from-[#7C5CFC] to-[#0284C7] text-white py-4 px-6 rounded-full shadow-lg shadow-[#7C5CFC]/10 hover:shadow-[#7C5CFC]/20 transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer"
            >
              <span>Secure Your AI Audit</span>
              <ArrowRight size={14} className="transform transition-transform duration-300 group-hover:translate-x-1" />
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}
