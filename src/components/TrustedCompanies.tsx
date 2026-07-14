"use client";
import { motion } from "framer-motion";

export default function TrustedCompanies() {
  const companies = [
    { name: "OpenAI", logo: "OPENAI" },
    { name: "Stripe", logo: "STRIPE" },
    { name: "Vercel", logo: "VERCEL" },
    { name: "Linear", logo: "LINEAR" },
    { name: "Framer", logo: "FRAMER" },
    { name: "Apple", logo: "APPLE" },
    { name: "Perplexity", logo: "PERPLEXITY" },
    { name: "Tesla", logo: "TESLA" },
  ];

  return (
    <section className="relative py-16 bg-[#F8FAFC] overflow-hidden border-y border-black/5">
      <div className="max-w-7xl mx-auto px-6 mb-8 text-center">
        <p className="font-btn text-[10px] md:text-xs font-semibold uppercase tracking-widest text-slate-400">
          Trusted by Innovative Teams Worldwide
        </p>
      </div>

      {/* Infinite slider */}
      <div className="flex overflow-x-hidden relative w-full mask-gradient">
        {/* We double the array to ensure smooth seamless loop */}
        <div className="flex gap-16 md:gap-24 animate-infinite-marquee whitespace-nowrap min-w-full items-center">
          {[...companies, ...companies, ...companies].map((company, index) => (
            <div
              key={index}
              className="inline-flex items-center justify-center font-display font-bold text-lg md:text-xl tracking-widest text-slate-400 hover:text-slate-800 transition-colors duration-300 select-none cursor-default"
            >
              {company.logo}
              <span className="text-[#7C5CFC] ml-0.5 opacity-55">/</span>
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-33.33%);
          }
        }
        .animate-infinite-marquee {
          animation: marquee 30s linear infinite;
        }
        .mask-gradient {
          mask-image: linear-gradient(to right, transparent, white 20%, white 80%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, white 20%, white 80%, transparent);
        }
      `}</style>
    </section>
  );
}
