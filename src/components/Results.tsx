"use client";
import { useEffect, useRef, useState } from "react";
import { useInView, motion } from "framer-motion";
import { Building2, Stethoscope, Megaphone, ShoppingBag, ArrowRight } from "lucide-react";

interface CounterProps {
  value: number;
  suffix?: string;
  duration?: number;
}

// Animate numbers when they scroll into view
function AnimatedCounter({ value, suffix = "", duration = 1.5 }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const end = value;
    const totalSteps = Math.min(60 * duration, 120);
    const increment = end / totalSteps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      start += increment;
      if (step >= totalSteps) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);

    return () => clearInterval(timer);
  }, [isInView, value, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function Results() {
  const resultsData = [
    {
      company: "Real Estate Company",
      icon: <Building2 className="text-[#0284C7]" size={20} />,
      metrics: [
        { label: "More Qualified Leads", value: 320, suffix: "%" },
        { label: "Less Manual Operations", value: 65, suffix: "%" },
      ],
      tagline: "24/7 Autopilot Lead Response",
      bgGradient: "from-[#0284C7]/5 to-transparent",
      borderColor: "hover:border-[#0284C7]/30",
    },
    {
      company: "Premium Dental Clinic",
      icon: <Stethoscope className="text-[#7C5CFC]" size={20} />,
      metrics: [
        { label: "Increase in Bookings", value: 170, suffix: "%" },
        { label: "Fewer Missed Phone Calls", value: 90, suffix: "%" },
      ],
      tagline: "40 Hours Staff Labor Saved Weekly",
      bgGradient: "from-[#7C5CFC]/5 to-transparent",
      borderColor: "hover:border-[#7C5CFC]/30",
    },
    {
      company: "Scale Marketing Agency",
      icon: <Megaphone className="text-amber-500" size={20} />,
      metrics: [
        { label: "Faster Lead Verification", value: 4, suffix: "x" },
        { label: "Client Ad Spend ROI", value: 210, suffix: "%" },
      ],
      tagline: "Instant Automated Call Responses",
      bgGradient: "from-amber-500/5 to-transparent",
      borderColor: "hover:border-amber-500/30",
    },
    {
      company: "Ecommerce Brand",
      icon: <ShoppingBag className="text-emerald-500" size={20} />,
      metrics: [
        { label: "Increase in Conversions", value: 35, suffix: "%" },
        { label: "Better Customer Support", value: 50, suffix: "%" },
      ],
      tagline: "80% Automated Customer Support",
      bgGradient: "from-emerald-500/5 to-transparent",
      borderColor: "hover:border-emerald-500/30",
    },
  ];

  return (
    <section className="relative py-32 bg-[#F8FAFC] overflow-hidden border-b border-black/5">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-[#7C5CFC]/3 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-4 mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#7C5CFC]/20 bg-[#7C5CFC]/5">
            <Megaphone size={12} className="text-[#7C5CFC]" />
            <span className="font-btn text-[10px] font-semibold uppercase tracking-wider text-[#7C5CFC]">
              Proven Efficiency
            </span>
          </div>
          <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl tracking-tight text-slate-900">
            Client Results on Autopilot<span className="text-[#7C5CFC]">.</span>
          </h2>
          <p className="font-satoshi text-slate-500 text-sm md:text-base max-w-xl">
            Real enterprise case studies proving the scalability and cost reductions of AUTOMIQ AI system integrations.
          </p>
        </div>

        {/* Results Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {resultsData.map((result, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={`glass-card rounded-3xl p-8 border border-white/8 bg-[#09090B] bg-gradient-to-br ${result.bgGradient} ${result.borderColor} flex flex-col justify-between gap-8 group shadow-2xl`}
            >
              <div className="flex items-center justify-between border-b border-white/5 pb-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-white/20 transition-all duration-300">
                    {result.icon}
                  </div>
                  <span className="font-btn text-base font-bold text-white tracking-tight">
                    {result.company}
                  </span>
                </div>
                <span className="text-[10px] text-slate-400 font-semibold uppercase tracking-widest font-btn">
                  Verified Case
                </span>
              </div>

              {/* Metrics Display */}
              <div className="grid grid-cols-2 gap-8 my-4">
                {result.metrics.map((metric, mIdx) => (
                  <div key={mIdx} className="flex flex-col">
                    <span className="font-display font-extrabold text-4xl md:text-5xl lg:text-6xl text-white tracking-tighter leading-none mb-2">
                      <AnimatedCounter value={metric.value} suffix={metric.suffix} />
                    </span>
                    <span className="font-btn text-[10px] md:text-xs text-slate-400 font-semibold uppercase tracking-wider leading-relaxed">
                      {metric.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Tagline Footer */}
              <div className="border-t border-white/5 pt-4 flex items-center justify-between">
                <span className="font-satoshi text-sm text-slate-300 font-light">{result.tagline}</span>
                <a href="#contact" className="text-slate-400 hover:text-white transition-colors duration-300">
                  <ArrowRight size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
