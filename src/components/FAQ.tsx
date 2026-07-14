"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, MessageSquare } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "What does AUTOMIQ AGENCY actually do?",
      a: "We analyze, build, and deploy custom artificial intelligence systems. This includes autonomous voice receptionists that call and book appointments, customer support chatbots trained on company manuals, and complete n8n/Make automation workflows that sync your data between spreadsheets, CRMs, and payment gateways without manual staff labor."
    },
    {
      q: "How does the AI voice agent receptionist work?",
      a: "Our voice agents utilize low-latency speech pipelines. When a caller dials your number, the voice pipeline translates audio to text, queries your custom-trained LLM for context-appropriate responses, and synthesizes natural-sounding speech back to the caller in under 1 second. It has direct webhook access to your Calendly or booking system to modify schedules live."
    },
    {
      q: "Can you integrate with my existing CRM (Salesforce, HubSpot, ClickUp)?",
      a: "Yes. We specialize in custom API integrations. Using n8n or Make.com, we configure secure OAuth pipelines that automatically sync lead metadata, qualify calls, record transcripts, create project cards, and generate invoices in QuickBooks or Stripe based on client actions."
    },
    {
      q: "How long does a custom AI automation project take to build?",
      a: "A standard automation flow or chatbot integration takes 2 to 3 weeks. A comprehensive startup MVP subscription web application or large-scale enterprise custom voice desk system typically takes 4 to 6 weeks from initial architecture mapping to production deployment."
    },
    {
      q: "What are the monthly running costs of the AI models?",
      a: "Monthly running costs are usage-based. Because we build with direct API endpoints rather than expensive third-party reselling platforms, you pay wholesale pricing. A typical voice assistant call costs around $0.05 to $0.15 per minute in API tokens, and GPT chatbot qualifying queries cost a fraction of a cent per conversation."
    },
    {
      q: "Do you provide support after the automation is deployed?",
      a: "Absolutely. Every custom system includes 30 days of complimentary support. We also provide ongoing monthly Service Level Agreements (SLAs) that cover performance tuning, prompt alignment audits, prompt inject protection monitoring, and priority troubleshooting support."
    }
  ];

  return (
    <section id="faq" className="relative py-32 bg-[#F8FAFC] overflow-hidden border-b border-black/5">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-4 mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#7C5CFC]/20 bg-[#7C5CFC]/5">
            <MessageSquare size={12} className="text-[#7C5CFC]" />
            <span className="font-btn text-[10px] font-semibold uppercase tracking-wider text-[#7C5CFC]">
              Common Doubts
            </span>
          </div>
          <h3 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl tracking-tight text-slate-900">
            Frequently Asked Questions<span className="text-[#0284C7]">.</span>
          </h3>
        </div>

        {/* Accordions */}
        <div className="flex flex-col gap-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="glass-card rounded-2xl border border-white/8 bg-[#09090B] overflow-hidden shadow-2xl"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full text-left p-6 flex justify-between items-center gap-4 cursor-pointer"
              >
                <span className="font-btn text-sm md:text-base font-bold text-white tracking-tight">
                  {faq.q}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === idx ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-[#0284C7] shrink-0"
                >
                  <ChevronDown size={18} />
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === idx && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 pt-1 border-t border-white/10 text-xs md:text-sm text-slate-400 leading-relaxed font-sans font-light">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
