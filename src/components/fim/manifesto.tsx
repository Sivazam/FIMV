"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Reveal, Eyebrow, WordReveal } from "./motion";
import { Crosshair, MapPin, ShieldCheck, Zap } from "lucide-react";

const HIGHLIGHTS = [
  {
    icon: Crosshair,
    title: "Election-Native",
    text: "Not a generic agency doing politics on the side — campaigns are our core business since day one.",
  },
  {
    icon: MapPin,
    title: "Two-State Command",
    text: "Deep ground intelligence across Andhra Pradesh & Telangana — mandals, booths and caste equations.",
  },
  {
    icon: ShieldCheck,
    title: "Across Party Lines",
    text: "Trusted by MLAs, MPs and Ministers from six major parties. Strategy has no colour.",
  },
  {
    icon: Zap,
    title: "New-Generation Speed",
    text: "AI video suites, meme warfare, real-time dashboards — modern strategy at machine speed.",
  },
];

export function Manifesto() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const stripesY = useTransform(scrollYProgress, [0, 1], [-60, 60]);

  return (
    <section
      id="firm"
      ref={ref}
      className="relative scroll-mt-24 bg-cream text-navy-900 py-24 md:py-36 overflow-hidden noise"
    >
      <div className="absolute inset-0 grid-blueprint-cream" aria-hidden />
      <motion.div
        style={{ y: stripesY }}
        className="absolute top-0 bottom-0 right-0 w-[38%] diag-stripes-cream border-l border-navy-900/10"
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-[1440px] px-5 md:px-10">
        <Eyebrow index="01" label="The Firm" dark={false} />

        <div className="mt-10 md:mt-14 grid lg:grid-cols-12 gap-12 lg:gap-8">
          <div className="lg:col-span-8">
            <h2 className="font-display font-black tracking-tight leading-[1.02] text-[8.4vw] md:text-[5.2vw] lg:text-[4.4vw]">
              <WordReveal text="A recommended & premier platform for" />{" "}
              <span className="font-editorial italic font-normal text-kesari-deep">
                <WordReveal text="enthusiastic entrepreneurs," delay={0.3} />
              </span>{" "}
              <WordReveal text="emerging political figures and many others." delay={0.45} />
            </h2>

            <Reveal delay={0.2} className="mt-8 md:mt-10 max-w-2xl">
              <p className="text-navy-900/70 text-base md:text-lg leading-relaxed">
                Founded in <strong className="font-semibold">2022</strong> as a
                political campaign and branding agency, Fact In Media rose fast on
                the back of strategy, digital dominance and a laser Telangana–Andhra
                focus. Today we stand among the most sought-after digital consultants
                in the two states — a new-generation consultancy that pairs{" "}
                <em className="font-editorial">ground realities</em> with{" "}
                <em className="font-editorial">modern strategy</em>.
              </p>
            </Reveal>

            <Reveal delay={0.3} className="mt-6 md:mt-8 flex items-center gap-6">
              <div className="h-px flex-1 bg-navy-900/15" />
              <p className="font-data text-[10px] md:text-[11px] tracking-[0.25em] uppercase text-navy-900/50">
                The Rise of Fact In Media — 2022 → Now
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-4 flex flex-col gap-3 md:gap-4">
            {HIGHLIGHTS.map((h, i) => (
              <Reveal key={h.title} delay={0.1 + i * 0.08}>
                <div className="group bg-navy-950 text-cream p-5 md:p-6 rounded-lg hover:bg-navy-900 transition-colors duration-500 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-1 h-full bg-kesari scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-500" />
                  <div className="flex items-start gap-4">
                    <h.icon className="w-5 h-5 text-kesari shrink-0 mt-0.5" strokeWidth={1.75} />
                    <div>
                      <p className="font-display font-bold text-base md:text-lg leading-tight">
                        {h.title}
                      </p>
                      <p className="text-cream/60 text-sm leading-relaxed mt-1.5">
                        {h.text}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
