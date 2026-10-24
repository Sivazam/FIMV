"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal, Eyebrow } from "./motion";
import { SERVICE_CATEGORIES } from "@/lib/fim-data";
import { ArrowRight, Plus, Check, LayoutGrid, List } from "lucide-react";
import { cn } from "@/lib/utils";

const EASE = [0.76, 0, 0.24, 1] as const;
const TOTAL_SERVICES = SERVICE_CATEGORIES.reduce((n, c) => n + c.services.length, 0);

export function Services() {
  const [active, setActive] = useState(0);
  const [view, setView] = useState<"grid" | "index">("grid");
  const category = SERVICE_CATEGORIES[active];

  return (
    <section
      id="services"
      className="relative scroll-mt-24 bg-cream text-navy-900 py-24 md:py-36 overflow-hidden noise"
    >
      <div className="absolute inset-0 grid-blueprint-cream" aria-hidden />

      <div className="relative z-10 mx-auto max-w-[1440px] px-5 md:px-10">
        <Eyebrow index="03" label={`The Arsenal — ${TOTAL_SERVICES} Services, 5 Battlefronts`} dark={false} />

        <div className="mt-10 md:mt-14 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <h2 className="font-display font-black tracking-tight leading-[0.98] text-[10.5vw] md:text-[5.8vw] lg:text-[4.8vw]">
            {TOTAL_SERVICES} WEAPONS.
            <br />
            ONE{" "}
            <span className="font-editorial italic font-normal text-kesari-deep">
              outcome
            </span>
            <span className="text-kesari-deep">.</span>
          </h2>
          <Reveal delay={0.15} className="max-w-sm">
            <p className="text-navy-900/65 leading-relaxed text-sm md:text-base">
              Everything we run converges on a single number —{" "}
              <span className="text-navy-900 font-semibold">
                the margin on counting day.
              </span>{" "}
              Pick a battlefront, or open the full index and see what each
              service wins for you.
            </p>
          </Reveal>
        </div>

        {/* Category selector */}
        <div className="mt-12 md:mt-16 border-t border-navy-900/15">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 border-x border-b border-navy-900/15 lg:border-x-0 rounded-b-lg overflow-hidden">
            {SERVICE_CATEGORIES.map((cat, i) => (
              <button
                key={cat.id}
                onClick={() => {
                  setActive(i);
                  setView("grid");
                }}
                className={cn(
                  "relative group text-left px-4 md:px-5 py-4 md:py-5 border-navy-900/15 transition-colors duration-300",
                  i !== SERVICE_CATEGORIES.length - 1 && "border-r",
                  i < 4 && "border-b lg:border-b-0",
                  i === 4 && "border-b lg:border-b-0",
                  active === i && view === "grid" ? "bg-navy-950 text-cream" : "hover:bg-navy-900/5"
                )}
              >
                <span className="flex items-center justify-between gap-2">
                  <span
                    className="font-data text-[10px] tracking-[0.2em]"
                    style={{ color: active === i && view === "grid" ? cat.accent : undefined }}
                  >
                    {cat.index}
                  </span>
                  <span
                    className={cn(
                      "font-data text-[9px] tracking-[0.1em] rounded-full px-1.5 py-0.5 border transition-colors",
                      active === i && view === "grid"
                        ? "border-cream/25 text-cream/60"
                        : "border-navy-900/20 text-navy-900/45"
                    )}
                  >
                    {cat.services.length}
                  </span>
                </span>
                <span className="font-display font-extrabold text-xs md:text-sm tracking-tight leading-tight mt-1 block">
                  {cat.title.toUpperCase()}
                </span>
                {active === i && view === "grid" && (
                  <motion.span
                    layoutId="cat-underline"
                    className="absolute bottom-0 left-0 right-0 h-[3px]"
                    style={{ background: cat.accent }}
                  />
                )}
              </button>
            ))}
            <a
              href="#contact"
              className="hidden lg:flex items-center justify-center gap-2 bg-kesari text-white font-data text-[11px] tracking-[0.15em] uppercase hover:bg-kesari-deep transition-colors group"
            >
              Deploy Us
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* Grid view */}
        {view === "grid" && (
          <AnimatePresence mode="wait">
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -18 }}
              transition={{ duration: 0.5, ease: EASE }}
            >
              {/* Category header — tagline + view toggle */}
              <div className="flex flex-wrap items-center gap-x-4 gap-y-3 pt-6 md:pt-8 pb-3">
                <span
                  className="w-3 h-3 rounded-full shrink-0"
                  style={{ background: category.accent }}
                />
                <p className="font-editorial italic text-xl md:text-3xl text-navy-900">
                  {category.tagline}
                </p>
                <span className="h-px flex-1 min-w-6 bg-navy-900/15" />
                <span className="font-data text-[10px] md:text-[11px] tracking-[0.2em] text-navy-900/50 uppercase shrink-0">
                  {category.services.length} services
                </span>
                <div className="flex items-center rounded-full border border-navy-900/15 overflow-hidden font-data text-[9px] tracking-[0.16em] uppercase shrink-0">
                  <button
                    onClick={() => setView("grid")}
                    aria-label="Grid view"
                    aria-pressed={view === "grid"}
                    className={cn(
                      "px-3 py-1.5 flex items-center gap-1.5 transition-colors",
                      view === "grid" ? "bg-navy-950 text-cream" : "text-navy-900/60 hover:bg-navy-900/5"
                    )}
                  >
                    <LayoutGrid className="w-3 h-3" /> Grid
                  </button>
                  <button
                    onClick={() => setView("index")}
                    aria-label="Full index view"
                    aria-pressed={view === "index"}
                    className={cn(
                      "px-3 py-1.5 flex items-center gap-1.5 transition-colors border-l border-navy-900/15",
                      view === "index" ? "bg-navy-950 text-cream" : "text-navy-900/60 hover:bg-navy-900/5"
                    )}
                  >
                    <List className="w-3 h-3" /> Full Index
                  </button>
                </div>
              </div>

              {/* What you gain strip */}
              <div className="flex flex-wrap items-center gap-x-3 gap-y-2 pb-6">
                <span className="font-data text-[9px] md:text-[10px] tracking-[0.22em] uppercase text-navy-900/45">
                  What you gain →
                </span>
                {category.gains.map((gain) => (
                  <span
                    key={gain}
                    className="inline-flex items-center gap-1.5 rounded-full border border-navy-900/15 bg-white/60 px-3 py-1.5 font-data text-[9px] md:text-[10px] tracking-[0.12em] uppercase text-navy-900/70"
                  >
                    <Check className="w-3 h-3" style={{ color: category.accent }} strokeWidth={3} />
                    {gain}
                  </span>
                ))}
              </div>

              {/* Benefit-led service cards */}
              <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-3 md:gap-4">
                {category.services.map((service, i) => (
                  <motion.article
                    key={service.name}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55, delay: 0.05 + i * 0.045, ease: EASE }}
                    className="group relative bg-white/70 border border-navy-900/12 rounded-lg p-5 md:p-6 hover:bg-navy-950 hover:text-cream hover:-translate-y-1 transition-all duration-500 overflow-hidden cursor-default"
                  >
                    <div
                      className="absolute top-0 left-0 h-[3px] w-0 group-hover:w-full transition-all duration-600"
                      style={{ background: category.accent }}
                    />
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="font-display font-bold text-base md:text-lg leading-snug tracking-tight">
                        {service.name}
                      </h3>
                      <Plus
                        className="w-4 h-4 shrink-0 mt-1 text-navy-900/30 group-hover:text-cream/50 group-hover:rotate-90 transition-all duration-500"
                        strokeWidth={2}
                      />
                    </div>
                    <p className="font-editorial italic text-[15px] md:text-base leading-snug text-navy-900/75 group-hover:text-cream/90 transition-colors duration-500 mt-2.5">
                      {service.benefit}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mt-4">
                      {service.chips.map((chip) => (
                        <span
                          key={chip}
                          className="font-data text-[8.5px] md:text-[9px] tracking-[0.1em] uppercase border border-navy-900/15 rounded-full px-2.5 py-1 text-navy-900/55 group-hover:border-cream/20 group-hover:text-cream/60 transition-colors duration-500"
                        >
                          {chip}
                        </span>
                      ))}
                    </div>
                    <span
                      className="absolute bottom-3 right-4 font-data text-[10px] tracking-[0.2em] text-navy-900/35 group-hover:text-cream/40 transition-colors duration-500"
                    >
                      {category.id.toUpperCase()}-{String(i + 1).padStart(2, "0")}
                    </span>
                  </motion.article>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        )}

        {/* Full index view — every service, one glance */}
        {view === "index" && (
          <AnimatePresence mode="wait">
            <motion.div
              key="index"
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -18 }}
              transition={{ duration: 0.5, ease: EASE }}
            >
              <div className="flex flex-wrap items-center gap-x-4 gap-y-3 pt-6 md:pt-8 pb-4">
                <p className="font-editorial italic text-xl md:text-3xl text-navy-900">
                  The complete arsenal, at a glance.
                </p>
                <span className="h-px flex-1 min-w-6 bg-navy-900/15" />
                <span className="font-data text-[10px] md:text-[11px] tracking-[0.2em] text-navy-900/50 uppercase shrink-0">
                  {TOTAL_SERVICES} services
                </span>
                <div className="flex items-center rounded-full border border-navy-900/15 overflow-hidden font-data text-[9px] tracking-[0.16em] uppercase shrink-0">
                  <button
                    onClick={() => setView("grid")}
                    aria-label="Grid view"
                    aria-pressed={view === "grid"}
                    className={cn(
                      "px-3 py-1.5 flex items-center gap-1.5 transition-colors",
                      view === "grid" ? "bg-navy-950 text-cream" : "text-navy-900/60 hover:bg-navy-900/5"
                    )}
                  >
                    <LayoutGrid className="w-3 h-3" /> Grid
                  </button>
                  <button
                    onClick={() => setView("index")}
                    aria-label="Full index view"
                    aria-pressed={view === "index"}
                    className={cn(
                      "px-3 py-1.5 flex items-center gap-1.5 transition-colors border-l border-navy-900/15",
                      view === "index" ? "bg-navy-950 text-cream" : "text-navy-900/60 hover:bg-navy-900/5"
                    )}
                  >
                    <List className="w-3 h-3" /> Full Index
                  </button>
                </div>
              </div>

              <div className="space-y-8">
                {SERVICE_CATEGORIES.map((cat) => (
                  <div key={cat.id}>
                    <button
                      onClick={() => {
                        setActive(SERVICE_CATEGORIES.indexOf(cat));
                        setView("grid");
                      }}
                      className="group flex flex-wrap items-center gap-x-4 gap-y-2 w-full text-left border-b-2 pb-2.5 mb-1 transition-colors hover:border-kesari/50"
                      style={{ borderColor: cat.accent }}
                    >
                      <span className="font-data text-[10px] tracking-[0.2em]" style={{ color: cat.accent }}>
                        {cat.index}
                      </span>
                      <span className="font-display font-extrabold text-sm md:text-base tracking-tight uppercase group-hover:translate-x-1 transition-transform duration-300">
                        {cat.title}
                      </span>
                      <span className="font-editorial italic text-sm md:text-base text-navy-900/55">
                        {cat.tagline}
                      </span>
                      <span className="ml-auto font-data text-[9px] tracking-[0.15em] uppercase text-navy-900/40 shrink-0 inline-flex items-center gap-1.5 group-hover:text-kesari-deep transition-colors">
                        {cat.services.length} services
                        <ArrowRight className="w-3 h-3" />
                      </span>
                    </button>
                    <div className="grid md:grid-cols-2 gap-x-8">
                      {cat.services.map((service, j) => (
                        <button
                          key={service.name}
                          onClick={() => {
                            setActive(SERVICE_CATEGORIES.indexOf(cat));
                            setView("grid");
                          }}
                          className="group w-full text-left grid md:grid-cols-[minmax(0,320px)_1fr] gap-x-6 gap-y-0.5 items-baseline py-2.5 border-b border-navy-900/10 hover:bg-navy-900/[0.04] px-3 -mx-3 rounded transition-colors"
                        >
                          <span className="font-display font-bold text-[13px] md:text-[15px] tracking-tight leading-snug group-hover:text-kesari-deep transition-colors flex items-baseline gap-3">
                            <span className="font-data text-[9px] text-navy-900/35 shrink-0">
                              {String(j + 1).padStart(2, "0")}
                            </span>
                            {service.name}
                          </span>
                          <span className="font-editorial italic text-[13px] md:text-sm text-navy-900/60 leading-snug">
                            {service.benefit}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        )}
      </div>
    </section>
  );
}
