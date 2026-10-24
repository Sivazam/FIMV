"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowDown, ArrowUpRight, Play } from "lucide-react";
import { Magnetic } from "./motion";
import { STATS } from "@/lib/fim-data";
import { Counter } from "./motion";

const EASE = [0.76, 0, 0.24, 1] as const;
const D = 1.85; // delay base after preloader

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const yText = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const yBadge = useTransform(scrollYProgress, [0, 1], [0, -90]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative scroll-mt-24 min-h-screen bg-navy-950 overflow-hidden noise flex flex-col"
    >
      {/* Blueprint grid + brand diagonal stripes */}
      <div className="absolute inset-0 grid-blueprint" aria-hidden />
      <div className="absolute inset-0 diag-stripes opacity-70" aria-hidden />
      {/* Kesari corner glow */}
      <div
        className="absolute -top-40 -right-40 w-[560px] h-[560px] rounded-full opacity-25 blur-[130px]"
        style={{ background: "radial-gradient(circle, #ff5a1f 0%, transparent 65%)" }}
        aria-hidden
      />
      <div
        className="absolute -bottom-52 -left-40 w-[620px] h-[620px] rounded-full opacity-20 blur-[140px]"
        style={{ background: "radial-gradient(circle, #17497e 0%, transparent 65%)" }}
        aria-hidden
      />

      {/* Giant watermark */}
      <motion.p
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: D + 0.6, duration: 1.4 }}
        className="absolute -bottom-6 left-1/2 -translate-x-1/2 font-display font-black text-[26vw] leading-none text-navy-800/25 select-none pointer-events-none tracking-tighter whitespace-nowrap"
      >
        FIM
      </motion.p>

      <div className="relative z-10 flex-1 flex flex-col justify-center mx-auto w-full max-w-[1440px] px-5 md:px-10 pt-32 md:pt-36 pb-10">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: D, duration: 0.8, ease: EASE }}
          className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-8 md:mb-12"
        >
          <span className="inline-flex items-center gap-2 font-data text-[10px] md:text-[11px] tracking-[0.28em] text-cream/70 uppercase">
            <span className="w-2 h-2 rounded-full bg-kesari animate-pulse-ring" />
            Political Campaign &amp; New-Media Agency
          </span>
          <span className="hidden md:inline h-px w-16 bg-cream/20" />
          <span className="font-data text-[10px] md:text-[11px] tracking-[0.28em] text-cream/40 uppercase">
            Est. 2022 — Andhra Pradesh &amp; Telangana
          </span>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_auto] gap-10 lg:gap-6 items-center">
          {/* Headline */}
          <motion.h1
            style={{ y: yText, opacity }}
            className="font-display font-black leading-[0.9] tracking-tight text-cream"
          >
            <span className="block overflow-hidden pb-[0.06em] -mb-[0.06em]">
              <motion.span
                className="block text-[15.5vw] md:text-[11vw] xl:text-[9.5vw]"
                initial={{ y: "112%" }}
                animate={{ y: 0 }}
                transition={{ delay: D + 0.1, duration: 1, ease: EASE }}
              >
                LET&apos;S WIN
              </motion.span>
            </span>
            <span className="block overflow-hidden pb-[0.1em] -mb-[0.06em]">
              <motion.span
                className="block text-[15.5vw] md:text-[11vw] xl:text-[9.5vw]"
                initial={{ y: "112%" }}
                animate={{ y: 0 }}
                transition={{ delay: D + 0.22, duration: 1, ease: EASE }}
              >
                <span className="text-outline">TOGE</span>
                <span className="font-editorial italic font-normal text-kesari tracking-normal">
                  ther
                </span>
                <span className="text-kesari">.</span>
              </motion.span>
            </span>
          </motion.h1>

          {/* Rotating badge — FIM monogram inside the tagline ring */}
          <motion.div
            style={{ y: yBadge }}
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: D + 0.55, duration: 0.9, ease: EASE }}
            className="relative hidden lg:flex items-center justify-center w-[240px] h-[240px] shrink-0"
          >
            <svg viewBox="0 0 240 240" className="absolute inset-0 w-full h-full animate-spin-slow">
              <defs>
                <path id="circlePath" d="M 120,120 m -92,0 a 92,92 0 1,1 184,0 a 92,92 0 1,1 -184,0" />
              </defs>
              <text className="fill-cream/80 font-data uppercase" style={{ fontSize: "13.5px", letterSpacing: "5.5px" }}>
                <textPath href="#circlePath">
                  Your Election • Our Mission • Let&apos;s Win Together •
                </textPath>
              </text>
            </svg>
            {/* Kesari tick marks ring */}
            <svg viewBox="0 0 240 240" className="absolute inset-0 w-full h-full" aria-hidden>
              {Array.from({ length: 36 }).map((_, i) => {
                const angle = (i * 10 * Math.PI) / 180;
                const r1 = 104, r2 = i % 9 === 0 ? 96 : 100;
                const cx = 120, cy = 120;
                // round to 2dp so server & client serialize identical attributes (no hydration mismatch)
                const pt = (r: number) => [
                  Math.round((cx + r * Math.cos(angle)) * 100) / 100,
                  Math.round((cy + r * Math.sin(angle)) * 100) / 100,
                ];
                const [x1, y1] = pt(r1);
                const [x2, y2] = pt(r2);
                return (
                  <line
                    key={i}
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                    stroke={i % 9 === 0 ? "#ff5a1f" : "rgba(245,240,228,0.25)"}
                    strokeWidth={i % 9 === 0 ? 1.6 : 1}
                  />
                );
              })}
            </svg>
            <div className="relative w-[136px] h-[136px] rounded-full overflow-hidden ring-2 ring-kesari/60 p-1 bg-navy-800">
              <img
                src="/fim/logo-mark.jpg"
                alt="Fact In Media monogram — the FIM mark"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </motion.div>
        </div>

        {/* Sub row */}
        <div className="mt-10 md:mt-14 grid md:grid-cols-2 gap-8 md:gap-16 items-end">
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: D + 0.65, duration: 0.9, ease: EASE }}
            className="text-cream/70 text-base md:text-lg leading-relaxed max-w-xl"
          >
            <span className="text-cream font-semibold">Fact In Media</span> is the war
            room behind some of the boldest campaigns in the two Telugu states —
            engineering narratives, commanding digital airspace and running
            booth-level ground games that turn constituencies into{" "}
            <span className="font-editorial italic text-kesari">victories</span>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: D + 0.78, duration: 0.9, ease: EASE }}
            className="flex flex-wrap items-center gap-4 md:justify-end"
          >
            <Magnetic>
              <a
                href="#contact"
                className="group inline-flex items-center gap-3 bg-kesari text-white pl-7 pr-2.5 py-2.5 rounded-full font-data text-xs tracking-[0.15em] uppercase hover:bg-kesari-deep transition-colors duration-300"
              >
                Start Your Campaign
                <span className="w-10 h-10 rounded-full bg-white/15 grid place-items-center group-hover:bg-white/25 transition-colors">
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </span>
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href="#services"
                className="group inline-flex items-center gap-3 border border-cream/25 text-cream pl-7 pr-2.5 py-2.5 rounded-full font-data text-xs tracking-[0.15em] uppercase hover:border-kesari hover:text-kesari transition-colors duration-300"
              >
                Explore the Arsenal
                <span className="w-10 h-10 rounded-full bg-cream/10 grid place-items-center group-hover:bg-kesari/15 transition-colors">
                  <Play className="w-3.5 h-3.5 fill-current" />
                </span>
              </a>
            </Magnetic>
          </motion.div>
        </div>
      </div>

      {/* Stats strip */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: D + 0.95, duration: 1, ease: EASE }}
        className="relative z-10 border-t border-cream/10 bg-navy-950/60 backdrop-blur-sm"
      >
        <div className="mx-auto max-w-[1440px] px-5 md:px-10 grid grid-cols-2 md:grid-cols-4">
          {STATS.slice(1).map((stat, i) => (
            <div
              key={stat.label}
              className={`py-5 md:py-6 pr-4 ${i !== 0 ? "md:border-l md:border-cream/10 md:pl-6 md:pl-8" : ""} ${i % 2 !== 0 ? "border-l border-cream/10 pl-4 md:pl-8" : ""}`}
            >
              <p className="font-display font-black text-3xl md:text-4xl text-cream tabular-nums">
                <Counter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="font-data text-[9px] md:text-[10px] tracking-[0.18em] uppercase text-cream/45 mt-1.5 leading-relaxed">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
        <div className="absolute -top-16 right-6 md:right-12 hidden md:flex flex-col items-center gap-2 text-cream/40">
          <span className="font-data text-[9px] tracking-[0.3em] uppercase writing-vertical">
            Scroll
          </span>
          <motion.span
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          >
            <ArrowDown className="w-4 h-4" />
          </motion.span>
        </div>
      </motion.div>
    </section>
  );
}
