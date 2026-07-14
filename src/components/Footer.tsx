"use client";
import { useState } from "react";
import { Mail, Phone, MapPin, ArrowRight, ShieldCheck, Zap, Sparkles } from "lucide-react";
import confetti from "canvas-confetti";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.8 },
      colors: ["#7C5CFC", "#0284C7", "#ffffff"],
    });
    setEmail("");
  };

  return (
    <footer className="relative border-t border-black/5 bg-[#F1F5F9] pt-24 pb-12 overflow-hidden">
      {/* Soft Glow blobs */}
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#7C5CFC]/3 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-[#0284C7]/3 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Column 1: Info & Newsletter */}
          <div className="lg:col-span-1 flex flex-col gap-6">
            <a href="#" className="font-display font-bold text-2xl tracking-tight text-slate-900">
              AUTOMIQ<span className="text-[#0284C7]">.</span>
            </a>
            <p className="text-sm text-slate-600 leading-relaxed font-sans">
              Building next-generation AI Voice Agents, Chatbots, and custom automation workflows for high-growth enterprises.
            </p>
            
            {/* Newsletter input */}
            <form onSubmit={handleSubscribe} className="flex flex-col gap-2 mt-2">
              <label htmlFor="newsletter-email" className="font-btn text-xs text-slate-500 font-semibold uppercase tracking-wider">
                Subscribe to AI Insights
              </label>
              <div className="relative flex items-center">
                <input
                  id="newsletter-email"
                  type="email"
                  placeholder="enter your email..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={subscribed}
                  className="w-full bg-white border border-black/8 hover:border-black/15 focus:border-[#7C5CFC] rounded-full py-2.5 pl-4 pr-12 text-sm text-slate-900 focus:outline-none focus:ring-1 focus:ring-[#7C5CFC] font-sans placeholder-slate-400 disabled:opacity-50"
                  required
                />
                <button
                  type="submit"
                  disabled={subscribed}
                  aria-label="Subscribe"
                  className="absolute right-1 p-2 rounded-full bg-[#7C5CFC] hover:bg-[#7C5CFC]/90 text-white transition-colors duration-300 disabled:bg-emerald-600"
                >
                  {subscribed ? <ShieldCheck size={14} /> : <ArrowRight size={14} />}
                </button>
              </div>
              {subscribed && (
                <p className="text-xs text-emerald-600 font-sans mt-1">✓ Thank you for subscribing!</p>
              )}
            </form>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="flex flex-col gap-4">
            <h4 className="font-btn text-xs font-semibold text-slate-800 uppercase tracking-widest">
              Solutions
            </h4>
            <ul className="flex flex-col gap-2.5 text-sm text-slate-600">
              <li><a href="#services" className="hover:text-[#0284C7] transition-colors duration-300">AI Voice Agents</a></li>
              <li><a href="#services" className="hover:text-[#0284C7] transition-colors duration-300">GPT Support Chatbots</a></li>
              <li><a href="#services" className="hover:text-[#0284C7] transition-colors duration-300">WhatsApp Automation</a></li>
              <li><a href="#services" className="hover:text-[#0284C7] transition-colors duration-300">n8n / Make Workflows</a></li>
              <li><a href="#services" className="hover:text-[#0284C7] transition-colors duration-300">SaaS MVPs & Web Apps</a></li>
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div className="flex flex-col gap-4">
            <h4 className="font-btn text-xs font-semibold text-slate-800 uppercase tracking-widest">
              Company
            </h4>
            <ul className="flex flex-col gap-2.5 text-sm text-slate-600">
              <li><a href="#about" className="hover:text-[#7C5CFC] transition-colors duration-300">About Us</a></li>
              <li><a href="#portfolio" className="hover:text-[#7C5CFC] transition-colors duration-300">Portfolio & Case Studies</a></li>
              <li><a href="#process" className="hover:text-[#7C5CFC] transition-colors duration-300">Our Development Process</a></li>
              <li><a href="#why-choose" className="hover:text-[#7C5CFC] transition-colors duration-300">Why Choose Us</a></li>
              <li><a href="#contact" className="hover:text-[#7C5CFC] transition-colors duration-300">Book Free Audit</a></li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className="flex flex-col gap-4">
            <h4 className="font-btn text-xs font-semibold text-slate-800 uppercase tracking-widest">
              Direct Contact
            </h4>
            <ul className="flex flex-col gap-3 text-sm text-slate-600">
              <li className="flex items-center gap-3">
                <Phone size={14} className="text-[#0284C7] shrink-0" />
                <a href="tel:+919970451490" className="hover:text-slate-900 transition-colors duration-300 font-sans">+91 9970451490</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={14} className="text-[#7C5CFC] shrink-0" />
                <a href="mailto:hello@automiqagency.com" className="hover:text-slate-900 transition-colors duration-300 font-sans">hello@automiqagency.com</a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin size={14} className="text-[#0284C7] shrink-0" />
                <span className="font-sans">Pune, Maharashtra, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Brand Big Background Text (Luxury Feel) */}
        <div className="hidden lg:block select-none text-[12vw] font-display font-extrabold text-center text-black/[0.015] tracking-tighter leading-none my-8">
          AUTOMIQ
        </div>

        {/* Divider & Sub-Footer */}
        <div className="border-t border-black/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-xs text-slate-500 font-sans">
            © {new Date().getFullYear()} AUTOMIQ AGENCY. All rights reserved.
          </p>

          {/* Trust Badges */}
          <div className="flex flex-wrap gap-4 items-center justify-center">
            <div className="flex items-center gap-1 text-[10px] text-slate-500 border border-black/5 bg-black/2 rounded-full py-1 px-3">
              <Sparkles size={10} className="text-[#0284C7]" />
              <span>Stitch Design System</span>
            </div>
            <div className="flex items-center gap-1 text-[10px] text-slate-500 border border-black/5 bg-black/2 rounded-full py-1 px-3">
              <Zap size={10} className="text-[#7C5CFC]" />
              <span>n8n Partner Certified</span>
            </div>
            <div className="flex items-center gap-1 text-[10px] text-slate-500 border border-black/5 bg-black/2 rounded-full py-1 px-3">
              <ShieldCheck size={10} className="text-emerald-600" />
              <span>ISO 27001 Secured</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
