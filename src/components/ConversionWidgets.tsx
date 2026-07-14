"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Calendar, Mail, AlertTriangle, ShieldCheck, ArrowRight, X } from "lucide-react";
import confetti from "canvas-confetti";

export default function ConversionWidgets() {
  const [showExitPopup, setShowExitPopup] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    // Show exit intent popup when cursor leaves window top
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY < 20) {
        // Retrieve session storage key so we only show it once per session
        const popupDismissed = sessionStorage.getItem("automiq_exit_popup_dismissed");
        if (!popupDismissed) {
          setShowExitPopup(true);
        }
      }
    };
    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, []);

  const handleDismissPopup = () => {
    setShowExitPopup(false);
    sessionStorage.setItem("automiq_exit_popup_dismissed", "true");
  };

  const handlePopupSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsSubmitted(true);
    confetti({
      particleCount: 100,
      spread: 60,
      origin: { y: 0.5 },
      colors: ["#7C5CFC", "#0284C7", "#ffffff"],
    });
    setEmail("");
    setTimeout(() => {
      handleDismissPopup();
    }, 3000);
  };

  return (
    <>
      {/* Mobile Sticky bottom CTA bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-black/90 backdrop-blur-md border-t border-white/10 p-3 flex md:hidden items-center justify-between gap-3 shadow-2xl">
        <a
          href="tel:+919970451490"
          className="flex-1 py-3 border border-white/10 bg-[#09090B] text-slate-200 font-btn text-xs font-bold rounded-full flex items-center justify-center gap-2"
        >
          <Phone size={14} className="text-[#0284C7]" />
          <span>Call Hotline</span>
        </a>
        <a
          href="#contact"
          className="flex-1 py-3 bg-[#7C5CFC] text-white font-btn text-xs font-bold rounded-full flex items-center justify-center gap-2 shadow-md shadow-[#7C5CFC]/15"
        >
          <Calendar size={14} />
          <span>Book Call</span>
        </a>
      </div>

      {/* Floating WhatsApp trigger button */}
      <a
        href="https://wa.me/919970451490"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-40 h-14 w-14 rounded-full bg-[#25D366] hover:bg-[#20BA5A] text-white flex items-center justify-center shadow-lg transition-transform duration-300 hover:scale-105 cursor-pointer group"
      >
        <svg 
          viewBox="0 0 24 24" 
          width="28" 
          height="28" 
          fill="currentColor"
          className="transform transition-transform duration-500 group-hover:rotate-[360deg]"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.5-5.739-1.45L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.965C16.59 1.978 14.12 1.05 11.5 1.05c-5.448 0-9.886 4.376-9.89 9.805 0 1.634.459 3.23 1.328 4.678L1.93 20.6l5.22-1.353c1.476.8 3.013 1.22 4.561 1.22-.001 0-.001 0 0 0z" />
        </svg>
      </a>

      {/* Exit Intent Popup Modal */}
      <AnimatePresence>
        {showExitPopup && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/50 backdrop-blur-sm">
            
            {/* Backdrop click dismisses */}
            <div className="absolute inset-0 cursor-default" onClick={handleDismissPopup} />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="w-full max-w-md bg-black border border-white/10 rounded-3xl p-6 md:p-8 shadow-2xl relative z-10 overflow-hidden"
            >
              {/* Close Button */}
              <button
                onClick={handleDismissPopup}
                aria-label="Close dialog"
                className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors duration-300 cursor-pointer"
              >
                <X size={18} />
              </button>

              {!isSubmitted ? (
                <div className="flex flex-col gap-6">
                  {/* Warning Badge */}
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/25 bg-amber-950/50 text-amber-400 w-fit">
                    <AlertTriangle size={12} />
                    <span className="font-btn text-[9px] font-bold uppercase tracking-wider">Wait! Before You Leave</span>
                  </div>

                  {/* Copy */}
                  <div className="flex flex-col gap-2">
                    <h3 className="font-display font-bold text-2xl text-white tracking-tight leading-tight">
                      Get a Free AI Audit Checklist
                    </h3>
                    <p className="font-sans text-xs text-slate-400 leading-relaxed font-light">
                      Enter your email to receive our custom operational questionnaire. Discover exactly where your business is wasting hours on manual tasks.
                    </p>
                  </div>

                  {/* Form */}
                  <form onSubmit={handlePopupSubmit} className="flex flex-col gap-3">
                    <div className="relative">
                      <Mail size={14} className="absolute left-3.5 top-[15px] text-slate-400" />
                      <input
                        type="email"
                        placeholder="enter your email..."
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-[#09090B] border border-white/10 hover:border-white/20 focus:border-[#7C5CFC] rounded-xl py-3 pl-10 pr-4 text-xs text-white focus:outline-none"
                        required
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full font-btn font-bold text-xs bg-gradient-to-r from-[#7C5CFC] to-[#0284C7] text-white py-3.5 px-6 rounded-xl shadow-lg shadow-[#7C5CFC]/10 flex items-center justify-center gap-2 cursor-pointer hover:scale-[1.01] transition-transform duration-300"
                    >
                      <span>Send My Free Audit Checklist</span>
                      <ArrowRight size={12} />
                    </button>
                  </form>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center text-center gap-4 py-6">
                  <div className="h-12 w-12 rounded-xl bg-emerald-950/40 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                    <ShieldCheck size={24} className="animate-bounce" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="font-display font-bold text-xl text-white">Audit Sent!</h3>
                    <p className="text-xs text-slate-400 font-sans font-light">Check your mailbox in 2 minutes for the PDF blueprint.</p>
                  </div>
                </div>
              )}
            </motion.div>

          </div>
        )}
      </AnimatePresence>
    </>
  );
}
