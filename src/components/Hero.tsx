"use client";
import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight, Bot, PhoneCall, Zap, Code, ShieldCheck, Sparkles, Smartphone, BarChart3 } from "lucide-react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Parallax tracking for the floating elements
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springX = useSpring(mouseX, { stiffness: 60, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 60, damping: 20 });
  
  // Create coordinates mapping for subtle parallax offsets
  const x1 = useTransform(springX, [-500, 500], [-30, 30]);
  const y1 = useTransform(springY, [-500, 500], [-30, 30]);
  
  const x2 = useTransform(springX, [-500, 500], [20, -20]);
  const y2 = useTransform(springY, [-500, 500], [20, -20]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      mouseX.set(e.clientX - centerX);
      mouseY.set(e.clientY - centerY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // Tag list for floating feature cards
  const tags = [
    { icon: <Bot size={14} className="text-[#0284C7]" />, text: "AI Chatbots" },
    { icon: <PhoneCall size={14} className="text-[#7C5CFC]" />, text: "AI Voice Agents" },
    { icon: <Zap size={14} className="text-amber-500" />, text: "AI Automation" },
    { icon: <Code size={14} className="text-emerald-500" />, text: "Custom Websites" },
    { icon: <Sparkles size={14} className="text-fuchsia-500" />, text: "SaaS Products" },
    { icon: <Smartphone size={14} className="text-blue-500" />, text: "Mobile Apps" },
    { icon: <BarChart3 size={14} className="text-purple-500" />, text: "AI Workflows" },
    { icon: <ShieldCheck size={14} className="text-[#0284C7]" />, text: "CRM Integration" },
  ];

  return (
    <section 
      ref={containerRef}
      className="relative min-h-[92vh] flex items-center justify-center pt-32 pb-24 overflow-hidden bg-[#F8FAFC]"
    >
      {/* Animated grid overlays */}
      <div className="absolute inset-0 tech-grid opacity-30 z-0 pointer-events-none" />
      <div className="absolute inset-0 tech-grid-dots opacity-40 z-0 pointer-events-none" />

      {/* Soft Pastel Aurora glow blobs */}
      <div className="absolute top-[20%] left-[10%] h-[400px] w-[400px] rounded-full bg-[#7C5CFC]/4 blur-[130px] animate-aurora-slow pointer-events-none" />
      <div className="absolute bottom-[10%] right-[10%] h-[450px] w-[450px] rounded-full bg-[#0284C7]/3 blur-[140px] animate-aurora-reverse pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full flex flex-col items-center text-center">
        {/* Subtle top badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-black/5 bg-white/60 backdrop-blur-md mb-8 hover:border-[#7C5CFC]/20 transition-colors duration-300"
        >
          <span className="h-2 w-2 rounded-full bg-gradient-to-r from-[#7C5CFC] to-[#0284C7] animate-pulse" />
          <span className="font-btn text-[10px] md:text-xs font-semibold uppercase tracking-wider text-slate-600">
            Next-Gen AI Engineering Partner
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-display font-extrabold text-5xl md:text-7xl lg:text-8xl tracking-tight text-slate-900 leading-[1.05] max-w-5xl mb-6"
        >
          Build Smarter <br />
          <span className="bg-gradient-to-r from-[#7C5CFC] via-[#818cf8] to-[#0284C7] bg-clip-text text-transparent text-glow">
            Businesses with AI.
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-satoshi text-base md:text-lg lg:text-xl text-slate-600 leading-relaxed max-w-3xl mb-12 font-light"
        >
          We create AI Chatbots, AI Voice Agents, Business Automation, SaaS Platforms, Mobile Apps, and High-Converting Websites that help businesses grow faster while reducing costs.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center gap-4 mb-16 relative z-30"
        >
          <a
            href="#contact"
            className="w-full sm:w-auto font-btn font-bold text-sm bg-gradient-to-r from-[#7C5CFC] to-[#5b3dfc] hover:from-[#7C5CFC] hover:to-[#0284C7] text-white py-4 px-8 rounded-full shadow-lg shadow-[#7C5CFC]/15 transition-all duration-500 hover:scale-[1.02] flex items-center justify-center gap-2 group cursor-pointer"
          >
            <span>Book Free Consultation</span>
            <ArrowRight size={16} className="transform transition-transform duration-300 group-hover:translate-x-1" />
          </a>
          <a
            href="#portfolio"
            className="w-full sm:w-auto font-btn font-bold text-sm border border-black/8 bg-white/70 hover:bg-white/90 hover:border-black/15 text-slate-800 py-4 px-8 rounded-full transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2 cursor-pointer shadow-sm"
          >
            <span>See Our Work</span>
          </a>
        </motion.div>

        {/* Parallax Floating Tags */}
        <motion.div
          style={{ x: x1, y: y1 }}
          className="hidden md:flex flex-wrap justify-center gap-4 max-w-4xl"
        >
          {tags.slice(0, 4).map((tag, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2.5 px-5 py-3 rounded-2xl border border-white/10 bg-[#09090B] hover:border-[#7C5CFC]/40 hover:bg-black transition-all duration-300 hover:scale-[1.03] shadow-lg"
            >
              {tag.icon}
              <span className="font-btn text-sm font-semibold text-white">{tag.text}</span>
            </div>
          ))}
        </motion.div>
        
        <motion.div
          style={{ x: x2, y: y2 }}
          className="hidden md:flex flex-wrap justify-center gap-4 max-w-4xl mt-4"
        >
          {tags.slice(4).map((tag, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2.5 px-5 py-3 rounded-2xl border border-white/10 bg-[#09090B] hover:border-[#0284C7]/40 hover:bg-black transition-all duration-300 hover:scale-[1.03] shadow-lg"
            >
              {tag.icon}
              <span className="font-btn text-sm font-semibold text-white">{tag.text}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Floating Particle Dots */}
      <div className="absolute top-[40%] right-[15%] h-1 w-1 bg-[#0284C7] rounded-full blur-[1px] animate-pulse pointer-events-none hidden lg:block" />
      <div className="absolute bottom-[35%] left-[12%] h-1.5 w-1.5 bg-[#7C5CFC] rounded-full blur-[1px] animate-pulse pointer-events-none hidden lg:block" />
      <div className="absolute bottom-[20%] right-[30%] h-1 w-1 bg-[#7C5CFC] rounded-full blur-[1px] pointer-events-none hidden lg:block" />
    </section>
  );
}
