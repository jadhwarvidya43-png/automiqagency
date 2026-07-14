"use client";
import { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Phone, ArrowRight, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  // Page scroll progress bar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Showcase", href: "#showcase" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Process", href: "#process" },
    { name: "Why AUTOMIQ", href: "#why-choose" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#7C5CFC] to-[#0284C7] z-[9999] origin-left"
        style={{ scaleX }}
      />

      <header
        className={`fixed top-4 left-1/2 -translate-x-1/2 w-[92%] max-w-7xl z-50 transition-all duration-500 rounded-full ${
          isScrolled
            ? "bg-white/80 backdrop-blur-md border border-black/8 shadow-[0_8px_32px_0_rgba(124,92,252,0.03)] py-3 px-6"
            : "bg-transparent py-5 px-4"
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0284C7] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#7C5CFC]"></span>
            </span>
            <span className="font-display font-bold text-xl md:text-2xl tracking-tight text-slate-900 group-hover:text-glow">
              AUTOMIQ<span className="text-[#0284C7]">.</span>
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-btn text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors duration-300 relative group py-2"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[#7C5CFC] to-[#0284C7] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Quick Contact & Action CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:+919970451490"
              className="flex items-center gap-2 font-btn text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors duration-300 border border-black/5 bg-black/2 py-2 px-3 rounded-full hover:border-[#0284C7]/20"
            >
              <Phone size={12} className="text-[#0284C7]" />
              <span>+91 9970451490</span>
            </a>
            
            <a
              href="#contact"
              className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-xs font-bold text-white rounded-full group bg-gradient-to-br from-[#7C5CFC] to-[#0284C7] hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-[#7C5CFC]/20"
            >
              <span className="relative px-4 py-2 transition-all ease-in duration-75 bg-[#F8FAFC] text-slate-900 rounded-full group-hover:bg-opacity-0 group-hover:text-white">
                Book Free Consultation
              </span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-slate-600 hover:text-slate-900 focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 mt-2 bg-white/95 backdrop-blur-xl border border-black/8 rounded-3xl p-6 shadow-2xl flex flex-col gap-4 lg:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-btn text-base font-semibold text-slate-800 hover:text-[#0284C7] py-2 border-b border-black/5"
              >
                {link.name}
              </a>
            ))}
            <div className="flex flex-col gap-3 pt-4">
              <a
                href="tel:+919970451490"
                className="flex items-center justify-center gap-2 font-btn text-sm font-semibold text-slate-900 border border-black/8 bg-black/2 py-3 rounded-full"
              >
                <Phone size={14} className="text-[#0284C7]" />
                <span>+91 9970451490</span>
              </a>
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 font-btn text-sm font-bold text-white bg-[#7C5CFC] hover:bg-[#7C5CFC]/90 py-3 rounded-full shadow-lg shadow-[#7C5CFC]/20"
              >
                <span>Book Free Consultation</span>
                <ArrowRight size={14} />
              </a>
            </div>
          </motion.div>
        )}
      </header>
    </>
  );
}
