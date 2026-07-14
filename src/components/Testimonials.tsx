"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ArrowLeft, ArrowRight, UserCheck } from "lucide-react";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      quote: "AUTOMIQ built our custom dental clinic AI receptionist in under 3 weeks. It answers calls instantly, books appointments directly in our dental software, and saves our front desk 15 hours of manual phone work every single week. Simply outstanding.",
      author: "Dr. Sarah Jenkins",
      role: "Founder, Jenkins Dental Group",
      rating: 5,
      impact: "170% More Bookings"
    },
    {
      quote: "Our n8n automation pipelines built by AUTOMIQ synchronized our ClickUp project files, HubSpot CRM, and QuickBooks invoices automatically. They eliminated 30 hours of weekly spreadsheets. Highly recommended for any growing business.",
      author: "Marc Miller",
      role: "Operations Director, CoreBuild Group",
      rating: 5,
      impact: "30 Hours Saved Weekly"
    },
    {
      quote: "The Next.js SaaS platform MVP they engineered was completed in just 6 weeks. It is incredibly fast, looks premium, and Stripe integration was ready out of the box. Our seed investors were highly impressed.",
      author: "Alissa R.",
      role: "CTO, ContentKit AI",
      rating: 5,
      impact: "6-Week Full MVP Build"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="relative py-32 bg-[#F8FAFC] overflow-hidden border-b border-black/5">
      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        
        {/* Section Header */}
        <div className="flex flex-col items-center gap-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#7C5CFC]/20 bg-[#7C5CFC]/5">
            <UserCheck size={12} className="text-[#7C5CFC]" />
            <span className="font-btn text-[10px] font-semibold uppercase tracking-wider text-[#7C5CFC]">
              Client Reviews
            </span>
          </div>
          <h3 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl tracking-tight text-slate-900">
            What Our Partners Say<span className="text-[#0284C7]">.</span>
          </h3>
        </div>

        {/* Carousel Card */}
        <div className="glass-card rounded-3xl p-8 md:p-12 border border-white/8 bg-[#09090B] min-h-[300px] flex flex-col justify-between relative shadow-2xl">
          {/* Quote mark decoration */}
          <div className="absolute top-6 left-6 text-white/[0.015] pointer-events-none">
            <Quote size={80} />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col gap-6"
            >
              {/* Star Rating */}
              <div className="flex justify-center gap-1">
                {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                  <Star key={i} size={16} className="text-amber-400 fill-amber-400" />
                ))}
              </div>

              {/* Quote Text */}
              <p className="font-satoshi text-base md:text-lg lg:text-xl text-slate-300 leading-relaxed font-light italic">
                "{testimonials[activeIndex].quote}"
              </p>

              {/* Author Info */}
              <div className="flex flex-col gap-1">
                <span className="font-btn text-sm font-bold text-white">{testimonials[activeIndex].author}</span>
                <span className="font-btn text-xs text-slate-500 font-semibold uppercase tracking-wider">{testimonials[activeIndex].role}</span>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Action buttons */}
          <div className="flex items-center justify-between border-t border-white/10 pt-6 mt-8">
            <div className="inline-flex gap-2">
              <button
                onClick={handlePrev}
                aria-label="Previous testimonial"
                className="p-2.5 rounded-full border border-white/5 bg-white/5 hover:border-[#7C5CFC]/30 text-slate-400 hover:text-white transition-colors duration-300 cursor-pointer shadow-md"
              >
                <ArrowLeft size={14} />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next testimonial"
                className="p-2.5 rounded-full border border-white/5 bg-white/5 hover:border-[#7C5CFC]/30 text-slate-400 hover:text-white transition-colors duration-300 cursor-pointer shadow-md"
              >
                <ArrowRight size={14} />
              </button>
            </div>

            {/* Impact Metric badge */}
            <div className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-950/50 text-emerald-400 font-semibold">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-ping" />
              <span className="font-btn text-[10px] font-bold uppercase tracking-wider">
                {testimonials[activeIndex].impact}
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
