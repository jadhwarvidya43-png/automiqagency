"use client";
import { useState, useRef, MouseEvent } from "react";
import { Bot, PhoneCall, Zap, Code, ShieldCheck, Sparkles, Smartphone, BarChart3, ArrowUpRight, Cpu } from "lucide-react";

// Custom 3D Tilt Card Wrapper Component
function TiltCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [spotlightStyle, setSpotlightStyle] = useState({ left: "0px", top: "0px", opacity: 0 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    const box = card.getBoundingClientRect();
    const x = e.clientX - box.left;
    const y = e.clientY - box.top;
    
    const centerX = box.width / 2;
    const centerY = box.height / 2;
    
    // Rotate max 7 degrees
    const rX = ((y - centerY) / centerY) * -7;
    const rY = ((x - centerX) / centerX) * 7;
    
    setRotateX(rX);
    setRotateY(rY);
    setSpotlightStyle({
      left: `${x}px`,
      top: `${y}px`,
      opacity: 1
    });
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setSpotlightStyle((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`glass-card rounded-3xl p-8 relative overflow-hidden group select-none ${className}`}
      style={{
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        transformStyle: "preserve-3d",
      }}
    >
      {/* Mouse spotlight effect */}
      <div 
        className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 rounded-full h-80 w-80 bg-[radial-gradient(circle,_rgba(124,92,252,0.12)_0%,_rgba(2,132,199,0.06)_50%,_transparent_100%)] transition-opacity duration-300 pointer-events-none z-0"
        style={{
          left: spotlightStyle.left,
          top: spotlightStyle.top,
          opacity: spotlightStyle.opacity
        }}
      />
      <div className="relative z-10 h-full flex flex-col justify-between">
        {children}
      </div>
    </div>
  );
}

export default function Services() {
  const servicesList = [
    {
      title: "AI Chatbots",
      icon: <Bot size={24} className="text-[#0284C7]" />,
      desc: "GPT-powered conversational interfaces trained directly on your business documents.",
      details: ["Website GPT Chatbots", "WhatsApp & Telegram AI Automation", "Instagram & Messenger Auto-Sales", "Customer Support & Lead Capture"],
      cta: "Integrate Chatbot",
      gridSpan: "col-span-12 md:col-span-6 lg:col-span-4",
    },
    {
      title: "AI Voice Agents",
      icon: <PhoneCall size={24} className="text-[#7C5CFC]" />,
      desc: "Real-time human-like voice receptionists conducting inbound/outbound calls and booking meetings.",
      details: ["24/7 AI Receptionist Desk", "Automated Booking Schedules", "Lead Qualification Campaigns", "Customer Call Desk Support"],
      cta: "Deploy Voice Agent",
      gridSpan: "col-span-12 md:col-span-6 lg:col-span-8",
      highlight: true,
    },
    {
      title: "AI Automation",
      icon: <Zap size={24} className="text-amber-500" />,
      desc: "Connect your tech stack using n8n, Make, and Zapier to automate repetitive operations.",
      details: ["n8n & Make Workflow Pipelines", "CRM Data Synchronizations", "Automated Email & Intake Workflows", "Task & Report Automations"],
      cta: "Build Automation",
      gridSpan: "col-span-12 md:col-span-6 lg:col-span-8",
      highlight: true,
    },
    {
      title: "Website Development",
      icon: <Code size={24} className="text-emerald-500" />,
      desc: "High-speed corporate sites, portfolios, and marketing landing pages engineered for conversion.",
      details: ["High-Converting Landing Pages", "Corporate Portfolios", "Next.js Core Engineering", "SEO & Performance-First Layouts"],
      cta: "Request Landing Page",
      gridSpan: "col-span-12 md:col-span-6 lg:col-span-4",
    },
    {
      title: "SaaS Development",
      icon: <Sparkles size={24} className="text-fuchsia-500" />,
      desc: "Full-scale multi-tenant subscription products including admin panels and billing models.",
      details: ["Admin Panels & Dashboards", "Clerk/Auth Integration", "Stripe Subscription Billing", "Multi-Tenant Cloud Structures"],
      cta: "Build SaaS App",
      gridSpan: "col-span-12 md:col-span-6 lg:col-span-4",
    },
    {
      title: "Mobile Apps",
      icon: <Smartphone size={24} className="text-blue-500" />,
      desc: "Premium cross-platform mobile apps for iOS and Android powered by React Native and Flutter.",
      details: ["React Native & Flutter Apps", "Custom UI App Layouts", "Cloud DB Integrations", "AI Core Feature Embeds"],
      cta: "Develop Mobile App",
      gridSpan: "col-span-12 md:col-span-6 lg:col-span-4",
    },
    {
      title: "AI Startup Development",
      icon: <Cpu size={24} className="text-pink-500" />,
      desc: "Accelerate your AI idea from structural validation to functional MVP launch in weeks.",
      details: ["Fast MVP Scaffolding", "Idea Market Validation", "Custom LLM Integrations", "Consulting & Scale Strategies"],
      cta: "Validate Startup Idea",
      gridSpan: "col-span-12 md:col-span-6 lg:col-span-4",
    },
    {
      title: "Custom Software Solutions",
      icon: <BarChart3 size={24} className="text-[#0284C7]" />,
      desc: "Tailor-made internal business management tooling, CRMs, and customized database operations.",
      details: ["Enterprise ERP & CRM Tooling", "Database Architecture Design", "API & Platform Integrations", "Internal Booking Operations"],
      cta: "Discuss Enterprise Tooling",
      gridSpan: "col-span-12 lg:col-span-12",
    },
  ];

  return (
    <section id="services" className="relative py-32 bg-[#F8FAFC] overflow-hidden border-b border-black/5">
      {/* Background blobs */}
      <div className="absolute top-[30%] right-[-10%] h-[500px] w-[500px] rounded-full bg-[#7C5CFC]/2 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-10%] h-[500px] w-[500px] rounded-full bg-[#0284C7]/2 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-4 mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#0284C7]/20 bg-[#0284C7]/5">
            <Zap size={12} className="text-[#0284C7]" />
            <span className="font-btn text-[10px] font-semibold uppercase tracking-wider text-[#0284C7]">
              Comprehensive Offerings
            </span>
          </div>
          <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl tracking-tight text-slate-900">
            Our Elite Services Grid<span className="text-[#7C5CFC]">.</span>
          </h2>
          <p className="font-satoshi text-slate-500 text-sm md:text-base max-w-xl">
            We deliver high-end AI voice interfaces, automation pipelines, custom SaaS environments, and modern web architectures.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-12 gap-6 md:gap-8">
          {servicesList.map((service, idx) => (
            <TiltCard 
              key={idx} 
              className={`${service.gridSpan} ${
                service.highlight 
                  ? "border-[#7C5CFC]/30 bg-black shadow-2xl" 
                  : "border-white/5 bg-[#09090B] shadow-xl hover:border-white/12"
              }`}
            >
              <div className="flex flex-col gap-6">
                {/* Icon Badge */}
                <div className={`h-12 w-12 rounded-2xl flex items-center justify-center border shadow-inner ${
                  service.highlight 
                    ? "bg-[#7C5CFC]/15 border-[#7C5CFC]/30 text-[#7C5CFC]" 
                    : "bg-white/5 border-white/10 text-slate-300"
                }`}>
                  {service.icon}
                </div>

                {/* Content */}
                <div className="flex flex-col gap-2">
                  <h3 className="font-display font-bold text-xl md:text-2xl text-white tracking-tight flex items-center gap-2">
                    {service.title}
                  </h3>
                  <p className="font-satoshi text-xs md:text-sm text-slate-400 leading-relaxed font-light">
                    {service.desc}
                  </p>
                </div>

                {/* Details list */}
                <ul className="flex flex-col gap-2 border-t border-white/5 pt-4">
                  {service.details.map((detail, dIdx) => (
                    <li key={dIdx} className="flex items-center gap-2 text-xs text-slate-300 font-sans">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#7C5CFC]" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between group-hover:border-[#7C5CFC]/40 transition-colors duration-300">
                <a 
                  href="#contact" 
                  className="font-btn text-xs font-semibold text-slate-400 group-hover:text-[#7C5CFC] transition-colors duration-300 flex items-center gap-1.5 cursor-pointer"
                >
                  <span>{service.cta}</span>
                  <ArrowUpRight size={14} className="transform transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </TiltCard>
          ))}
        </div>

      </div>
    </section>
  );
}
