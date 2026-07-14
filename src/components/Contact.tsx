"use client";
import { useState } from "react";
import { Mail, Phone, Calendar as CalendarIcon, Clock, ArrowRight, ShieldCheck, Sparkles, Building2, User } from "lucide-react";
import confetti from "canvas-confetti";

export default function Contact() {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedTime, setSelectedTime] = useState<string>("");
  
  // Form fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [budget, setBudget] = useState("Under $5,000");
  const [details, setDetails] = useState("");

  const dates = [
    { day: "Mon", date: "17", full: "Monday, July 17" },
    { day: "Tue", date: "18", full: "Tuesday, July 18" },
    { day: "Wed", date: "19", full: "Wednesday, July 19" },
    { day: "Thu", date: "20", full: "Thursday, July 20" },
    { day: "Fri", date: "21", full: "Friday, July 21" },
  ];

  const timeSlots = ["09:00 AM", "11:00 AM", "01:30 PM", "03:30 PM", "05:00 PM"];

  const handleNextStep = () => {
    if (!selectedDate || !selectedTime) return;
    setStep(2);
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;
    
    setStep(3);
    confetti({
      particleCount: 150,
      spread: 80,
      origin: { y: 0.6 },
      colors: ["#7C5CFC", "#0284C7", "#ffffff"],
    });
  };

  return (
    <section id="contact" className="relative py-32 bg-[#F8FAFC] overflow-hidden border-b border-black/5">
      {/* Background spotlights */}
      <div className="absolute top-[20%] left-[-10%] h-[500px] w-[500px] rounded-full bg-[#7C5CFC]/3 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] h-[500px] w-[500px] rounded-full bg-[#0284C7]/2 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Copywriting & Contacts */}
          <div className="lg:col-span-6 flex flex-col gap-6 lg:sticky lg:top-28">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#7C5CFC]/20 bg-[#7C5CFC]/5 w-fit">
              <CalendarIcon size={12} className="text-[#7C5CFC]" />
              <span className="font-btn text-[10px] font-semibold uppercase tracking-wider text-[#7C5CFC]">
                Consultation Desk
              </span>
            </div>

            <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl tracking-tight text-slate-900 leading-tight">
              Let's Build Something <br />
              <span className="bg-gradient-to-r from-[#7C5CFC] to-[#0284C7] bg-clip-text text-transparent">
                Incredible with AI.
              </span>
            </h2>

            <p className="font-satoshi text-base md:text-lg text-slate-600 leading-relaxed font-light">
              Book your FREE automation audit and 30-minute consultation call. We will review your bottlenecks, map out your custom pipeline, and provide a transparent project estimate.
            </p>

            {/* Direct Contacts List */}
            <div className="flex flex-col gap-4 mt-4">
              <div className="flex items-center gap-4 border border-white/10 bg-black p-4 rounded-2xl shadow-xl">
                <div className="h-10 w-10 rounded-xl bg-[#7C5CFC]/10 border border-[#7C5CFC]/20 flex items-center justify-center text-[#7C5CFC]">
                  <Mail size={16} />
                </div>
                <div className="flex flex-col">
                  <span className="font-btn text-xs text-slate-500 font-semibold uppercase tracking-wider">Email Inquiry</span>
                  <a href="mailto:hello@automiqagency.com" className="font-btn text-sm font-bold text-white hover:text-[#0284C7] transition-colors duration-300">
                    hello@automiqagency.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 border border-white/10 bg-black p-4 rounded-2xl shadow-xl">
                <div className="h-10 w-10 rounded-xl bg-[#0284C7]/10 border border-[#0284C7]/20 flex items-center justify-center text-[#0284C7]">
                  <Phone size={16} />
                </div>
                <div className="flex flex-col">
                  <span className="font-btn text-xs text-slate-500 font-semibold uppercase tracking-wider">Direct Hotline</span>
                  <a href="tel:+919970451490" className="font-btn text-sm font-bold text-white hover:text-[#7C5CFC] transition-colors duration-300 font-sans">
                    +91 9970451490
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Consultation Funnel */}
          <div className="lg:col-span-6">
            <div className="w-full glass-card rounded-3xl p-6 md:p-8 border border-white/10 shadow-2xl bg-black relative overflow-hidden min-h-[460px] flex flex-col justify-between">
              
              {step === 1 && (
                <div className="flex flex-col gap-6">
                  {/* Header */}
                  <div className="border-b border-white/10 pb-4">
                    <h3 className="font-btn text-base font-bold text-white tracking-tight">Step 1: Pick Date & Time</h3>
                    <p className="text-xs text-slate-400 font-sans mt-1">Select your preferred slot for the 30-minute Zoom call.</p>
                  </div>

                  {/* Date Grid */}
                  <div className="flex flex-col gap-3">
                    <span className="font-btn text-[10px] text-slate-400 font-bold uppercase tracking-wider">Select Date (July 2026)</span>
                    <div className="grid grid-cols-5 gap-2">
                      {dates.map((d, index) => (
                        <button
                          key={index}
                          onClick={() => {
                            setSelectedDate(d.full);
                            setSelectedTime(""); // reset time on date change
                          }}
                          className={`flex flex-col items-center p-3 rounded-2xl border transition-all duration-300 cursor-pointer ${
                            selectedDate === d.full
                              ? "bg-[#7C5CFC] border-[#7C5CFC] text-white shadow-lg shadow-[#7C5CFC]/25"
                              : "bg-white/5 border-white/5 hover:border-white/15 text-slate-200 shadow-md"
                          }`}
                        >
                          <span className="text-[10px] font-semibold tracking-wider font-btn uppercase leading-none mb-1">{d.day}</span>
                          <span className="text-sm font-extrabold font-display leading-none">{d.date}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Time list */}
                  {selectedDate && (
                    <div className="flex flex-col gap-3 animate-fadeIn">
                      <span className="font-btn text-[10px] text-slate-400 font-bold uppercase tracking-wider">Select Available Slot</span>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                        {timeSlots.map((time, index) => (
                          <button
                            key={index}
                            onClick={() => setSelectedTime(time)}
                            className={`py-2.5 px-4 rounded-xl border text-xs font-semibold font-btn transition-all duration-300 cursor-pointer ${
                              selectedTime === time
                                ? "bg-[#0284C7] border-[#0284C7] text-white shadow-lg shadow-[#0284C7]/25"
                                : "bg-white/5 border-white/5 hover:border-white/15 text-slate-200 shadow-md"
                            }`}
                          >
                            <div className="flex items-center justify-center gap-1.5">
                              <Clock size={12} />
                              <span>{time}</span>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Navigation Action */}
                  <button
                    onClick={handleNextStep}
                    disabled={!selectedDate || !selectedTime}
                    className="w-full font-btn font-bold text-sm bg-white text-slate-950 hover:bg-slate-200 py-3.5 px-6 rounded-full transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed mt-4 flex items-center justify-center gap-2 cursor-pointer shadow-lg"
                  >
                    <span>Next: Intakes</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              )}

              {step === 2 && (
                <form onSubmit={handleBookingSubmit} className="flex flex-col gap-5">
                  {/* Header */}
                  <div className="border-b border-white/10 pb-4 flex items-center justify-between">
                    <div>
                      <h3 className="font-btn text-base font-bold text-white tracking-tight">Step 2: Meeting Intakes</h3>
                      <p className="text-xs text-slate-400 font-sans mt-1">Provide background information before the call.</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="text-xs font-btn text-slate-400 hover:text-white transition-colors duration-300 cursor-pointer"
                    >
                      Back
                    </button>
                  </div>

                  {/* Form fields */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="col-span-2 sm:col-span-1 flex flex-col gap-1.5">
                      <label className="text-[10px] text-slate-400 font-bold uppercase tracking-wider font-btn">Your Name *</label>
                      <div className="relative">
                        <User size={12} className="absolute left-3.5 top-[13px] text-slate-400" />
                        <input
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Dr. Sarah"
                          className="w-full bg-black border border-white/10 hover:border-white/20 focus:border-[#7C5CFC] rounded-xl py-2 pl-9 pr-4 text-xs text-white focus:outline-none focus:ring-1 focus:ring-[#7C5CFC]"
                          required
                        />
                      </div>
                    </div>

                    <div className="col-span-2 sm:col-span-1 flex flex-col gap-1.5">
                      <label className="text-[10px] text-slate-400 font-bold uppercase tracking-wider font-btn">Work Email *</label>
                      <div className="relative">
                        <Mail size={12} className="absolute left-3.5 top-[13px] text-slate-400" />
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="sarah@dentalclinic.com"
                          className="w-full bg-black border border-white/10 hover:border-white/20 focus:border-[#7C5CFC] rounded-xl py-2 pl-9 pr-4 text-xs text-white focus:outline-none focus:ring-1 focus:ring-[#7C5CFC]"
                          required
                        />
                      </div>
                    </div>

                    <div className="col-span-2 sm:col-span-1 flex flex-col gap-1.5">
                      <label className="text-[10px] text-slate-400 font-bold uppercase tracking-wider font-btn">Company Name</label>
                      <div className="relative">
                        <Building2 size={12} className="absolute left-3.5 top-[13px] text-slate-400" />
                        <input
                          type="text"
                          value={company}
                          onChange={(e) => setCompany(e.target.value)}
                          placeholder="Jenkins Dental Group"
                          className="w-full bg-black border border-white/10 hover:border-white/20 focus:border-[#7C5CFC] rounded-xl py-2 pl-9 pr-4 text-xs text-white focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="col-span-2 sm:col-span-1 flex flex-col gap-1.5">
                      <label className="text-[10px] text-slate-400 font-bold uppercase tracking-wider font-btn">Estimate Budget</label>
                      <select
                        value={budget}
                        onChange={(e) => setBudget(e.target.value)}
                        className="w-full bg-black border border-white/10 hover:border-white/20 focus:border-[#7C5CFC] rounded-xl py-2 px-4 text-xs text-slate-300 focus:outline-none"
                      >
                        <option value="Under $5,000">Under $5,000</option>
                        <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                        <option value="$10,000 - $25,000">$10,000 - $25,000</option>
                        <option value="$25,000+">$25,000+</option>
                      </select>
                    </div>

                    <div className="col-span-2 flex flex-col gap-1.5">
                      <label className="text-[10px] text-slate-400 font-bold uppercase tracking-wider font-btn">Briefly describe your project</label>
                      <textarea
                        value={details}
                        onChange={(e) => setDetails(e.target.value)}
                        placeholder="Need an AI Voice assistant to answer missed calls and book appointments..."
                        className="w-full bg-black border border-white/10 hover:border-white/20 focus:border-[#7C5CFC] rounded-xl py-2 px-4 text-xs text-white h-20 focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Confirmed details header */}
                  <div className="text-[10px] text-[#0284C7] font-semibold bg-[#0284C7]/10 border border-[#0284C7]/20 rounded-xl p-2 flex items-center justify-center gap-1 font-mono">
                    <Clock size={12} />
                    <span>Booking Call for: {selectedDate} at {selectedTime}</span>
                  </div>

                  <button
                    type="submit"
                    className="w-full font-btn font-bold text-sm bg-[#7C5CFC] text-white hover:bg-[#7C5CFC]/90 py-3.5 px-6 rounded-full transition-all duration-300 shadow-lg shadow-[#7C5CFC]/20 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Confirm Consultation Call</span>
                    <ShieldCheck size={14} />
                  </button>
                </form>
              )}

              {step === 3 && (
                <div className="flex flex-col items-center justify-center text-center gap-6 h-full py-8">
                  {/* Icon */}
                  <div className="h-16 w-16 rounded-2xl bg-emerald-950/40 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shadow-[0_0_30px_rgba(16,185,129,0.05)]">
                    <ShieldCheck size={32} className="animate-pulse" />
                  </div>

                  {/* Content */}
                  <div className="flex flex-col gap-2">
                    <h3 className="font-display font-bold text-2xl text-white tracking-tight">Booking Confirmed!</h3>
                    <p className="text-xs text-slate-400 leading-relaxed font-sans max-w-sm font-light">
                      Your 30-minute Zoom call is scheduled for <br />
                      <strong className="text-white font-mono">{selectedDate}</strong> at <strong className="text-white font-mono">{selectedTime}</strong>.
                    </p>
                  </div>

                  {/* Info block */}
                  <div className="bg-white/2 border border-white/5 rounded-2xl p-4 text-left max-w-sm w-full flex flex-col gap-2 shadow-inner">
                    <span className="font-btn text-[10px] text-slate-500 font-bold uppercase tracking-wider">Audit Checklist</span>
                    <ul className="flex flex-col gap-1 text-[11px] text-slate-300 font-sans font-light">
                      <li className="flex items-center gap-1.5">
                        <Sparkles size={10} className="text-[#0284C7]" />
                        <span>Zoom meeting link sent to email</span>
                      </li>
                      <li className="flex items-center gap-1.5">
                        <Sparkles size={10} className="text-[#7C5CFC]" />
                        <span>AI engineers will study your domain</span>
                      </li>
                    </ul>
                  </div>

                  <button
                    onClick={() => {
                      setStep(1);
                      setSelectedDate("");
                      setSelectedTime("");
                      setName("");
                      setEmail("");
                      setCompany("");
                      setDetails("");
                    }}
                    className="font-btn text-xs font-semibold text-slate-400 hover:text-white transition-colors duration-300 border border-white/10 bg-white/5 rounded-full py-2 px-6 cursor-pointer"
                  >
                    Schedule Another call
                  </button>
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
