"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal, Eyebrow } from "./motion";
import { PROCESS_STEPS, PARTIES } from "@/lib/fim-data";
import { Check, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const EASE = [0.76, 0, 0.24, 1] as const;

export function Process() {
  const [open, setOpen] = useState(0);

  return (
    <section
      id="playbook"
      className="relative scroll-mt-24 bg-cream text-navy-900 py-24 md:py-36 overflow-hidden noise"
    >
      <div className="absolute inset-0 grid-blueprint-cream" aria-hidden />
      <div
        className="absolute -bottom-40 -right-40 w-[520px] h-[520px] rounded-full opacity-[0.12] blur-[130px]"
        style={{ background: "radial-gradient(circle, #133a65 0%, transparent 65%)" }}
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-[1440px] px-5 md:px-10">
        <Eyebrow index="05" label="The Playbook" dark={false} />

        <div className="mt-10 md:mt-14 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <h2 className="font-display font-black tracking-tight leading-[0.98] text-[10.5vw] md:text-[5.6vw] lg:text-[4.4vw]">
              <Reveal y={44}>HOW</Reveal>
              <Reveal y={44} delay={0.08}>
                <span className="font-editorial italic font-normal text-kesari-deep">
                  campaigns
                </span>
              </Reveal>
              <Reveal y={44} delay={0.16}>
                <span className="text-outline-navy">ARE WON.</span>
              </Reveal>
            </h2>
            <Reveal delay={0.24} className="mt-8">
              <p className="text-navy-900/65 leading-relaxed text-sm md:text-base max-w-sm">
                The end-to-end electioneering system — planning, execution and
                monitoring under one command. Click through the five phases of a
                Fact In Media campaign.
              </p>
            </Reveal>
            <Reveal delay={0.3} className="mt-10 hidden lg:block">
              <div className="border border-navy-900/15 rounded-lg overflow-hidden">
                <div className="bg-navy-950 text-cream px-5 py-4 flex items-center justify-between">
                  <span className="font-data text-[10px] tracking-[0.22em] uppercase text-cream/60">
                    War Room Status
                  </span>
                  <span className="flex items-center gap-2 font-data text-[10px] tracking-[0.18em] uppercase text-pillar-faith">
                    <span className="w-1.5 h-1.5 rounded-full bg-pillar-faith animate-pulse" />
                    Live 24×7
                  </span>
                </div>
                <div className="bg-white/70 px-5 py-4 space-y-2.5">
                  {["Constituency dashboards", "Rapid response squads", "Fake-news firewall"].map(
                    (item) => (
                      <p key={item} className="flex items-center gap-2.5 text-sm text-navy-900/70">
                        <Check className="w-3.5 h-3.5 text-kesari-deep" strokeWidth={2.5} />
                        {item}
                      </p>
                    )
                  )}
                </div>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-8">
            <div className="border-t border-navy-900/15">
              {PROCESS_STEPS.map((step, i) => {
                const isOpen = open === i;
                return (
                  <div key={step.index} className="border-b border-navy-900/15">
                    <button
                      onClick={() => setOpen(isOpen ? -1 : i)}
                      className={cn(
                        "w-full flex items-center gap-5 md:gap-8 py-6 md:py-8 text-left group rounded-lg px-2 md:px-4 -mx-2 md:-mx-4 transition-colors duration-400",
                        isOpen && "bg-navy-950/[0.045]"
                      )}
                      aria-expanded={isOpen}
                    >
                      <span
                        className={cn(
                          "font-display font-black text-3xl md:text-5xl tabular-nums tracking-tight shrink-0 w-12 md:w-20 transition-colors duration-400",
                          isOpen ? "text-kesari-deep" : "text-navy-900/20 group-hover:text-navy-900/45"
                        )}
                      >
                        {step.index}
                      </span>
                      <span className="flex-1 font-display font-extrabold text-xl md:text-3xl tracking-tight group-hover:translate-x-2 transition-transform duration-400">
                        {step.title}
                      </span>
                      <motion.span
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.4, ease: EASE }}
                        className={cn(
                          "w-9 h-9 md:w-11 md:h-11 rounded-full border grid place-items-center shrink-0 transition-colors duration-400",
                          isOpen
                            ? "bg-kesari border-kesari text-white"
                            : "border-navy-900/25 text-navy-900/50 group-hover:border-navy-900/50"
                        )}
                      >
                        <ChevronDown className="w-4 h-4" strokeWidth={2} />
                      </motion.span>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.5, ease: EASE }}
                          className="overflow-hidden"
                        >
                          <div className="pb-8 md:pb-10 pl-[60px] md:pl-[112px] pr-2 grid md:grid-cols-2 gap-6">
                            <p className="text-navy-900/65 text-sm md:text-base leading-relaxed">
                              {step.description}
                            </p>
                            <ul className="space-y-2">
                              {step.deliverables.map((d) => (
                                <li
                                  key={d}
                                  className="flex items-center gap-2.5 font-data text-[11px] md:text-xs tracking-[0.08em] text-navy-900/70 uppercase"
                                >
                                  <span className="w-4 h-4 rounded-sm bg-navy-950 text-cream grid place-items-center shrink-0">
                                    <Check className="w-2.5 h-2.5" strokeWidth={3} />
                                  </span>
                                  {d}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Parties() {
  return (
    <section className="relative bg-navy-950 text-cream py-20 md:py-28 overflow-hidden noise">
      <div className="absolute inset-0 diag-stripes opacity-30" aria-hidden />
      <div className="relative z-10 mx-auto max-w-[1440px] px-5 md:px-10">
        <Reveal className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16">
          <div>
            <p className="font-data text-[11px] tracking-[0.25em] uppercase text-kesari mb-4">
              06 / Across Party Lines
            </p>
            <h2 className="font-display font-black tracking-tight leading-[1.0] text-[9.5vw] md:text-[4.6vw]">
              STRATEGY HAS
              <br />
              <span className="text-outline">NO COLOUR.</span>
            </h2>
          </div>
          <p className="max-w-xs text-cream/55 text-sm leading-relaxed">
            We&apos;ve partnered with candidates from six major parties — MLAs,
            MPs and Ministers. Every mandate taught us something new.
          </p>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-3 md:gap-4">
          {PARTIES.map((party, i) => (
            <motion.div
              key={party.name}
              initial={{ opacity: 0, y: 30, rotate: i % 2 === 0 ? -2 : 2 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.07, ease: [0.34, 1.4, 0.64, 1] }}
              className="group relative border border-cream/12 rounded-lg bg-navy-900/50 p-5 md:p-6 text-center hover:bg-cream hover:border-cream transition-colors duration-500 overflow-hidden"
            >
              <p className="font-display font-black text-xl md:text-2xl tracking-tight text-cream group-hover:text-navy-950 transition-colors duration-500">
                {party.name}
              </p>
              <p className="font-data text-[9px] md:text-[10px] tracking-[0.12em] uppercase text-cream/35 group-hover:text-navy-900/55 mt-2 leading-relaxed transition-colors duration-500">
                {party.full}
              </p>
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[3px] w-0 group-hover:w-full bg-kesari transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
