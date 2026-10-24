"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Reveal, Eyebrow, Magnetic } from "./motion";
import { CONTACT, SERVICE_CATEGORIES } from "@/lib/fim-data";
import { Phone, Mail, Globe, ArrowUpRight, Loader2, CheckCircle2, Download } from "lucide-react";
import { WhatsAppIcon } from "./whatsapp";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

const inputCls =
  "w-full bg-white/70 border border-navy-900/15 rounded-md px-4 py-3.5 text-sm text-navy-900 placeholder:text-navy-900/35 focus:outline-none focus:border-kesari focus:ring-2 focus:ring-kesari/25 transition-all duration-300 font-sans";

export function Contact() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    organization: "",
    interest: "",
    message: "",
  });

  const set = (key: keyof typeof form) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm((f) => ({ ...f, [key]: e.target.value }));

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong");
      setSent(true);
      toast({
        title: "Brief received. Let's win together.",
        description: "The war room will reach out within 24 hours.",
      });
      setForm({ name: "", phone: "", email: "", organization: "", interest: "", message: "" });
    } catch (err) {
      toast({
        title: "Transmission failed",
        description: err instanceof Error ? err.message : "Please try again or call us directly.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <section
      id="contact"
      className="relative scroll-mt-24 bg-cream text-navy-900 py-24 md:py-36 overflow-hidden noise"
    >
      <div className="absolute inset-0 grid-blueprint-cream" aria-hidden />
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="absolute -top-8 right-0 font-display font-black text-[18vw] leading-none text-navy-900/[0.045] select-none pointer-events-none tracking-tighter"
      >
        CONTACT
      </motion.div>

      <div className="relative z-10 mx-auto max-w-[1440px] px-5 md:px-10">
        <Eyebrow index="07" label="Open a Channel" dark={false} />

        <div className="mt-10 md:mt-14 grid lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Info column */}
          <div className="lg:col-span-5">
            <h2 className="font-display font-black tracking-tight leading-[0.98] text-[11vw] md:text-[5.6vw] lg:text-[4.2vw]">
              <Reveal y={44}>BRIEF THE</Reveal>
              <Reveal y={44} delay={0.08}>
                <span className="font-editorial italic font-normal text-kesari-deep">
                  war room.
                </span>
              </Reveal>
            </h2>
            <Reveal delay={0.18} className="mt-7">
              <p className="text-navy-900/65 leading-relaxed text-sm md:text-base max-w-md">
                One constituency or an entire state — the first conversation costs
                nothing but thirty minutes. Reach out and the founder&apos;s office
                responds within 24 hours.
              </p>
            </Reveal>

            <div className="mt-10 space-y-1">
              <Reveal delay={0.22}>
                <p className="font-data text-[10px] tracking-[0.25em] uppercase text-navy-900/45 mb-3">
                  Direct Lines
                </p>
                {CONTACT.phones.map((phone) => (
                  <a
                    key={phone}
                    href={`tel:+91${phone.replace(/\s/g, "")}`}
                    className="group flex items-center gap-4 py-3 border-b border-navy-900/10 hover:border-kesari/50 transition-colors"
                  >
                    <span className="w-10 h-10 rounded-full border border-navy-900/15 grid place-items-center group-hover:bg-navy-950 group-hover:border-navy-950 group-hover:text-kesari transition-all duration-300">
                      <Phone className="w-4 h-4" strokeWidth={1.75} />
                    </span>
                    <span className="font-display font-bold text-lg md:text-xl tracking-tight group-hover:translate-x-1.5 transition-transform duration-300">
                      {phone}
                    </span>
                  </a>
                ))}
              </Reveal>

              <Reveal delay={0.28}>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="group flex items-center gap-4 py-3 border-b border-navy-900/10 hover:border-kesari/50 transition-colors"
                >
                  <span className="w-10 h-10 rounded-full border border-navy-900/15 grid place-items-center group-hover:bg-navy-950 group-hover:border-navy-950 group-hover:text-kesari transition-all duration-300">
                    <Mail className="w-4 h-4" strokeWidth={1.75} />
                  </span>
                  <span className="font-display font-bold text-base md:text-lg tracking-tight break-all group-hover:translate-x-1.5 transition-transform duration-300">
                    {CONTACT.email}
                  </span>
                </a>
                <a
                  href="https://www.factinmedia.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 py-3 border-b border-navy-900/10 hover:border-kesari/50 transition-colors"
                >
                  <span className="w-10 h-10 rounded-full border border-navy-900/15 grid place-items-center group-hover:bg-navy-950 group-hover:border-navy-950 group-hover:text-kesari transition-all duration-300">
                    <Globe className="w-4 h-4" strokeWidth={1.75} />
                  </span>
                  <span className="font-display font-bold text-lg tracking-tight group-hover:translate-x-1.5 transition-transform duration-300">
                    {CONTACT.website}
                  </span>
                  <ArrowUpRight className="w-4 h-4 ml-auto text-navy-900/30 group-hover:text-kesari transition-colors" />
                </a>
              </Reveal>
            </div>

            {/* WhatsApp direct chat panel */}
            <Reveal delay={0.34} className="mt-10">
              <div className="relative rounded-xl overflow-hidden bg-navy-950 p-6 md:p-7">
                <div className="absolute inset-0 diag-stripes opacity-30" aria-hidden />
                <div
                  aria-hidden
                  className="absolute -top-16 -right-16 w-48 h-48 rounded-full opacity-25 blur-[70px]"
                  style={{ background: "radial-gradient(circle, #25D366 0%, transparent 65%)" }}
                />
                <div className="relative">
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <p className="font-data text-[10px] tracking-[0.25em] uppercase text-[#25D366] flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
                      Fastest Channel
                    </p>
                    <WhatsAppIcon className="w-6 h-6 text-[#25D366]/40" />
                  </div>
                  <p className="font-display font-extrabold text-xl md:text-2xl text-cream tracking-tight leading-tight">
                    Skip the form. <span className="font-editorial italic font-normal text-[#25D366]">WhatsApp us.</span>
                  </p>
                  <p className="text-cream/55 text-sm leading-relaxed mt-2.5 max-w-sm">
                    The war room is online — message either number and a strategist replies, usually within minutes.
                  </p>
                  <div className="grid sm:grid-cols-2 gap-3 mt-6">
                    {CONTACT.phones.map((phone, i) => (
                      <a
                        key={phone}
                        href={i === 0 ? CONTACT.whatsapp.primary : CONTACT.whatsapp.secondary}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-3 rounded-lg border border-[#25D366]/30 bg-[#25D366]/10 hover:bg-[#25D366] px-4 py-3.5 transition-all duration-300 hover:shadow-[0_8px_25px_rgba(37,211,102,0.3)]"
                      >
                        <WhatsAppIcon className="w-5 h-5 text-[#25D366] group-hover:text-navy-950 transition-colors shrink-0" />
                        <span className="min-w-0">
                          <span className="block font-display font-bold text-cream text-sm tracking-tight group-hover:text-navy-950 transition-colors">
                            {phone}
                          </span>
                          <span className="block font-data text-[9px] tracking-[0.15em] uppercase text-cream/40 group-hover:text-navy-950/60 transition-colors mt-0.5">
                            {i === 0 ? "Primary line" : "Second line"}
                          </span>
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Profile deck download */}
            <Reveal delay={0.4} className="mt-5">
              <a
                href={CONTACT.profileDeck}
                download="FACT_IN_MEDIA_Profile.pdf"
                className="group flex items-center justify-between gap-4 rounded-xl border border-navy-900/15 hover:border-kesari/60 bg-white/50 px-5 py-4 transition-all duration-300"
              >
                <span className="flex items-center gap-4 min-w-0">
                  <span className="w-10 h-10 rounded-full border border-navy-900/15 grid place-items-center group-hover:bg-kesari group-hover:border-kesari group-hover:text-white transition-all duration-300 shrink-0">
                    <Download className="w-4 h-4" strokeWidth={1.75} />
                  </span>
                  <span className="min-w-0">
                    <span className="block font-display font-bold text-sm tracking-tight group-hover:translate-x-1 transition-transform duration-300">
                      Company Profile Deck
                    </span>
                    <span className="block font-data text-[9px] tracking-[0.15em] uppercase text-navy-900/40 mt-0.5">
                      PDF — everything about FIM in 8 pages
                    </span>
                  </span>
                </span>
                <ArrowUpRight className="w-4 h-4 text-navy-900/30 group-hover:text-kesari group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
              </a>
            </Reveal>
          </div>

          {/* Form column */}
          <div className="lg:col-span-7">
            <Reveal delay={0.15}>
              <form
                onSubmit={submit}
                className="relative bg-navy-950 text-cream rounded-xl p-6 md:p-10 overflow-hidden"
              >
                <div className="absolute inset-0 diag-stripes opacity-25" aria-hidden />
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-kesari via-pillar-analysis to-pillar-transparency" aria-hidden />

                <div className="relative">
                  <div className="flex items-center justify-between gap-4 mb-8">
                    <p className="font-display font-extrabold text-xl md:text-2xl tracking-tight">
                      Campaign Brief — <span className="font-editorial italic font-normal text-kesari">confidential</span>
                    </p>
                    <span className="hidden md:inline-flex items-center gap-2 font-data text-[10px] tracking-[0.18em] uppercase text-cream/40">
                      <span className="w-1.5 h-1.5 rounded-full bg-pillar-faith animate-pulse" />
                      Secure Channel
                    </span>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="font-data text-[10px] tracking-[0.2em] uppercase text-cream/50 block mb-2">
                        Your Name *
                      </label>
                      <input
                        id="name"
                        required
                        value={form.name}
                        onChange={set("name")}
                        placeholder="e.g. Srinivas Reddy"
                        className={cn(inputCls, "bg-white/5 border-cream/15 text-cream placeholder:text-cream/30 focus:border-kesari focus:ring-kesari/25")}
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="font-data text-[10px] tracking-[0.2em] uppercase text-cream/50 block mb-2">
                        Phone *
                      </label>
                      <input
                        id="phone"
                        required
                        type="tel"
                        value={form.phone}
                        onChange={set("phone")}
                        placeholder="+91 ..."
                        className={cn(inputCls, "bg-white/5 border-cream/15 text-cream placeholder:text-cream/30 focus:border-kesari focus:ring-kesari/25")}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="font-data text-[10px] tracking-[0.2em] uppercase text-cream/50 block mb-2">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        value={form.email}
                        onChange={set("email")}
                        placeholder="you@party.in"
                        className={cn(inputCls, "bg-white/5 border-cream/15 text-cream placeholder:text-cream/30 focus:border-kesari focus:ring-kesari/25")}
                      />
                    </div>
                    <div>
                      <label htmlFor="organization" className="font-data text-[10px] tracking-[0.2em] uppercase text-cream/50 block mb-2">
                        Party / Organisation
                      </label>
                      <input
                        id="organization"
                        value={form.organization}
                        onChange={set("organization")}
                        placeholder="e.g. Constituency in-charge"
                        className={cn(inputCls, "bg-white/5 border-cream/15 text-cream placeholder:text-cream/30 focus:border-kesari focus:ring-kesari/25")}
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label htmlFor="interest" className="font-data text-[10px] tracking-[0.2em] uppercase text-cream/50 block mb-2">
                        Area of Interest
                      </label>
                      <select
                        id="interest"
                        value={form.interest}
                        onChange={set("interest")}
                        className={cn(inputCls, "bg-white/5 border-cream/15 text-cream focus:border-kesari focus:ring-kesari/25 appearance-none cursor-pointer")}
                      >
                        <option value="" className="bg-navy-950">Select a battlefront…</option>
                        {SERVICE_CATEGORIES.map((cat) => (
                          <option key={cat.id} value={cat.title} className="bg-navy-950">
                            {cat.title}
                          </option>
                        ))}
                        <option value="Full Election War" className="bg-navy-950">
                          Full Election War — End to End
                        </option>
                      </select>
                    </div>
                    <div className="sm:col-span-2">
                      <label htmlFor="message" className="font-data text-[10px] tracking-[0.2em] uppercase text-cream/50 block mb-2">
                        The Mission *
                      </label>
                      <textarea
                        id="message"
                        required
                        rows={4}
                        value={form.message}
                        onChange={set("message")}
                        placeholder="Tell us about the constituency, the challenge, and the goal…"
                        className={cn(inputCls, "bg-white/5 border-cream/15 text-cream placeholder:text-cream/30 focus:border-kesari focus:ring-kesari/25 resize-none")}
                      />
                    </div>
                  </div>

                  <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
                    <p className="font-data text-[10px] tracking-[0.15em] uppercase text-cream/35 leading-relaxed">
                      Your details stay confidential. Always.
                    </p>
                    <Magnetic>
                      <button
                        type="submit"
                        disabled={loading || sent}
                        className={cn(
                          "group inline-flex items-center gap-3 font-data text-xs tracking-[0.15em] uppercase pl-7 pr-2.5 py-2.5 rounded-full transition-all duration-300",
                          sent
                            ? "bg-pillar-faith text-navy-950"
                            : "bg-kesari text-white hover:bg-kesari-deep"
                        )}
                      >
                        {loading ? (
                          <>
                            Transmitting
                            <span className="w-10 h-10 rounded-full bg-white/15 grid place-items-center">
                              <Loader2 className="w-4 h-4 animate-spin" />
                            </span>
                          </>
                        ) : sent ? (
                          <>
                            Brief Received
                            <span className="w-10 h-10 rounded-full bg-navy-950/15 grid place-items-center">
                              <CheckCircle2 className="w-4 h-4" />
                            </span>
                          </>
                        ) : (
                          <>
                            Send the Brief
                            <span className="w-10 h-10 rounded-full bg-white/15 grid place-items-center group-hover:bg-white/25 transition-colors">
                              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                            </span>
                          </>
                        )}
                      </button>
                    </Magnetic>
                  </div>
                </div>
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
