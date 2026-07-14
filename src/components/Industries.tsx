"use client";
import { Building2, Stethoscope, UtensilsCrossed, Hotel, Dumbbell, Scale, GraduationCap, Coins, ShieldAlert, Hammer, Factory, ShoppingCart, Users, Rocket, Store, Palette, MessageSquare } from "lucide-react";

export default function Industries() {
  const row1 = [
    { name: "Real Estate", icon: <Building2 size={12} /> },
    { name: "Healthcare", icon: <Stethoscope size={12} /> },
    { name: "Restaurants", icon: <UtensilsCrossed size={12} /> },
    { name: "Hotels", icon: <Hotel size={12} /> },
    { name: "Gyms", icon: <Dumbbell size={12} /> },
    { name: "Law Firms", icon: <Scale size={12} /> },
    { name: "Education", icon: <GraduationCap size={12} /> },
    { name: "Finance", icon: <Coins size={12} /> },
    { name: "Insurance", icon: <ShieldAlert size={12} /> },
  ];

  const row2 = [
    { name: "Construction", icon: <Hammer size={12} /> },
    { name: "Manufacturing", icon: <Factory size={12} /> },
    { name: "Retail", icon: <ShoppingCart size={12} /> },
    { name: "Agencies", icon: <Users size={12} /> },
    { name: "Startups", icon: <Rocket size={12} /> },
    { name: "Small Businesses", icon: <Store size={12} /> },
    { name: "Creators", icon: <Palette size={12} /> },
    { name: "Consultants", icon: <MessageSquare size={12} /> },
  ];

  return (
    <section className="relative py-24 bg-[#F8FAFC] overflow-hidden border-b border-black/5">
      <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-black/5 bg-black/2 mb-4">
          <span className="font-btn text-[10px] font-semibold uppercase tracking-wider text-slate-500">
            Broad Coverage
          </span>
        </div>
        <h3 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl tracking-tight text-slate-900">
          Industries We Transform<span className="text-[#0284C7]">.</span>
        </h3>
      </div>

      {/* Row 1 Scrolling Left */}
      <div className="flex overflow-x-hidden relative w-full mask-gradient-side mb-4 py-1">
        <div className="flex gap-4 animate-marquee-left whitespace-nowrap min-w-full items-center">
          {[...row1, ...row1, ...row1].map((industry, index) => (
            <div
              key={index}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-black/5 bg-white/70 text-xs md:text-sm font-semibold font-btn text-slate-700 hover:border-[#7C5CFC]/20 hover:bg-[#7C5CFC]/3 transition-all duration-300 select-none cursor-default shadow-sm hover:scale-[1.02]"
            >
              <span className="text-[#0284C7]">{industry.icon}</span>
              <span>{industry.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Row 2 Scrolling Right */}
      <div className="flex overflow-x-hidden relative w-full mask-gradient-side py-1">
        <div className="flex gap-4 animate-marquee-right whitespace-nowrap min-w-full items-center">
          {[...row2, ...row2, ...row2].map((industry, index) => (
            <div
              key={index}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-black/5 bg-white/70 text-xs md:text-sm font-semibold font-btn text-slate-700 hover:border-[#0284C7]/20 hover:bg-[#0284C7]/3 transition-all duration-300 select-none cursor-default shadow-sm hover:scale-[1.02]"
            >
              <span className="text-[#7C5CFC]">{industry.icon}</span>
              <span>{industry.name}</span>
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes marquee-l {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-33.33%);
          }
        }
        @keyframes marquee-r {
          0% {
            transform: translateX(-33.33%);
          }
          100% {
            transform: translateX(0%);
          }
        }
        .animate-marquee-left {
          animation: marquee-l 25s linear infinite;
        }
        .animate-marquee-right {
          animation: marquee-r 25s linear infinite;
        }
        .mask-gradient-side {
          mask-image: linear-gradient(to right, transparent, white 15%, white 85%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, white 15%, white 85%, transparent);
        }
      `}</style>
    </section>
  );
}
