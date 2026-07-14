"use client";
import { Cpu, Terminal, Layers, Database, CreditCard, Sparkles, Network } from "lucide-react";

export default function TechStack() {
  const techs = [
    {
      name: "Next.js 15 & React 19",
      role: "Frontend Framework",
      icon: <Layers size={18} className="text-[#0284C7]" />,
      use: "Server-side rendered (SSR) web applications, dynamic admin interfaces, and premium responsive landing pages."
    },
    {
      name: "Python & FastAPI",
      role: "Backend & AI Engines",
      icon: <Terminal size={18} className="text-[#7C5CFC]" />,
      use: "Custom LLM agents, data scraping pipelines, vector search scripts, and fast type-safe API routers."
    },
    {
      name: "n8n.io & Make.com",
      role: "Workflow Orchestrators",
      icon: <Network size={18} className="text-amber-500" />,
      use: "Connecting core applications, triggers, webhooks, lead distribution channels, and data synchronization without code lag."
    },
    {
      name: "OpenAI & Anthropic API",
      role: "Cognitive Intelligence",
      icon: <Sparkles size={18} className="text-fuchsia-500" />,
      use: "Advanced text classification, customer query routing, automated data extraction, and human-like voice agents."
    },
    {
      name: "PostgreSQL & Supabase",
      role: "Database & Vector Storage",
      icon: <Database size={18} className="text-emerald-600" />,
      use: "Secure transactional databases, user profile records, and vector embeddings (pgvector) for semantic retrieval."
    },
    {
      name: "Stripe & Clerk",
      role: "Billing & Security",
      icon: <CreditCard size={18} className="text-blue-500" />,
      use: "PCI-compliant subscription structures, custom usage-based billing models, and type-safe Clerk authentication."
    }
  ];

  return (
    <section className="relative py-32 bg-[#F8FAFC] overflow-hidden border-b border-black/5">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-4 mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-black/5 bg-black/2">
            <Cpu size={12} className="text-slate-500" />
            <span className="font-btn text-[10px] font-semibold uppercase tracking-wider text-slate-500">
              Integrations Hub
            </span>
          </div>
          <h3 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl tracking-tight text-slate-900">
            Our Core Technology Stack<span className="text-[#7C5CFC]">.</span>
          </h3>
          <p className="font-satoshi text-slate-500 text-sm md:text-base max-w-xl">
            We build with premium, industry-leading developer tools to ensure fast performance and infinite scalability.
          </p>
        </div>

        {/* Tech Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {techs.map((tech, idx) => (
            <div
              key={idx}
              className="glass-card rounded-3xl p-6 border border-white/8 bg-[#09090B] hover:border-[#7C5CFC]/30 transition-all duration-300 flex flex-col justify-between gap-6 shadow-2xl"
            >
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-xl bg-white/5 flex items-center justify-center border border-white/10">
                  {tech.icon}
                </div>
                <div className="flex flex-col">
                  <h4 className="font-btn text-sm font-bold text-white tracking-tight">{tech.name}</h4>
                  <span className="text-[10px] text-[#7C5CFC] font-semibold uppercase tracking-wider font-btn">{tech.role}</span>
                </div>
              </div>
              
              <p className="font-sans text-xs text-slate-400 leading-relaxed font-light">
                {tech.use}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
