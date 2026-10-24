"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Reveal, Eyebrow } from "./motion";
import { FOUNDER_TIMELINE } from "@/lib/fim-data";
import { Medal, Landmark, Rocket, Crown } from "lucide-react";

const TIMELINE_ICONS = [Medal, Landmark, Rocket, Crown];

export function Founder() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section
      id="founder"
      ref={ref}
      className="relative scroll-mt-24 bg-navy-950 text-cream py-24 md:py-36 overflow-hidden noise"
    >
      <div className="absolute inset-0 diag-stripes opacity-30" aria-hidden />
      <div
        className="absolute -top-40 left-1/3 w-[560px] h-[560px] rounded-full opacity-15 blur-[140px]"
        style={{ background: "radial-gradient(circle, #ff5a1f 0%, transparent 65%)" }}
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-[1440px] px-5 md:px-10">
        <Eyebrow index="04" label="The Strategist" />

        <div className="mt-10 md:mt-14 grid lg:grid-cols-12 gap-12 lg:gap-10">
          {/* Portrait column */}
          <div className="lg:col-span-4">
            <Reveal>
              <div className="relative group max-w-sm">
                <motion.div style={{ y: imgY }} className="relative">
                  <div className="absolute -inset-3 border border-kesari/40 rounded-lg rotate-[-2.5deg] group-hover:rotate-0 transition-transform duration-700" />
                  <div className="relative rounded-lg overflow-hidden ring-1 ring-cream/20">
                    { }
                    <img
                      src="/fim/founder.jpg"
                      alt="Chennamsetti Karthik — Founder & Political Strategist, Fact In Media"
                      className="w-full aspect-[7/8] object-cover object-top group-hover:scale-105 transition-transform duration-[1.2s] ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <p className="font-display font-black text-xl md:text-2xl tracking-tight leading-tight">
                        Chennamsetti Karthik
                      </p>
                      <p className="font-data text-[10px] md:text-[11px] tracking-[0.22em] uppercase text-kesari mt-1.5">
                        Founder &amp; Political Strategist
                      </p>
                    </div>
                  </div>
                </motion.div>
                {/* Floating badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.6, rotate: 8 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 3 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.7, ease: [0.34, 1.56, 0.64, 1] }}
                  className="absolute -top-5 -right-4 md:-right-8 bg-kesari text-white font-data text-[10px] tracking-[0.18em] uppercase px-4 py-2.5 rounded-full shadow-lg shadow-kesari/30"
                >
                  Ex-IAF Select ★
                </motion.div>
              </div>
            </Reveal>
          </div>

          {/* Bio + timeline */}
          <div className="lg:col-span-8">
            <h2 className="font-display font-black tracking-tight leading-[1.0] text-[9.5vw] md:text-[5vw] lg:text-[3.8vw]">
              <Reveal y={44}>DISCIPLINE.</Reveal>
              <Reveal y={44} delay={0.08}>
                <span className="font-editorial italic font-normal text-kesari">ground truth.</span>
              </Reveal>
              <Reveal y={44} delay={0.16}>
                <span className="text-outline">STRATEGY.</span>
              </Reveal>
            </h2>

            <Reveal delay={0.2} className="mt-7 max-w-2xl">
              <p className="text-cream/65 leading-relaxed text-sm md:text-base">
                A focused, forward-looking political strategist with a passion for
                public affairs since early life — Karthik pairs the discipline of
                the forces with the instincts of a street-level politician. His
                philosophy: read the ground first, then move the narrative.
              </p>
            </Reveal>

            {/* Timeline */}
            <div className="mt-10 md:mt-12 relative">
              <div className="absolute left-[19px] md:left-[23px] top-2 bottom-2 w-px bg-cream/15" aria-hidden />
              <ol className="space-y-8 md:space-y-10">
                {FOUNDER_TIMELINE.map((item, i) => {
                  const Icon = TIMELINE_ICONS[i];
                  return (
                    <motion.li
                      key={item.title}
                      initial={{ opacity: 0, x: 40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-40px" }}
                      transition={{ duration: 0.7, delay: i * 0.08, ease: [0.76, 0, 0.24, 1] }}
                      className="relative flex gap-5 md:gap-7 group"
                    >
                      <div className="relative z-10 shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full bg-navy-900 border border-cream/15 grid place-items-center group-hover:border-kesari/60 group-hover:bg-navy-800 transition-colors duration-500">
                        <Icon className="w-4 h-4 md:w-5 md:h-5 text-kesari" strokeWidth={1.75} />
                      </div>
                      <div className="flex-1 pb-1">
                        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                          <span className="font-data text-[10px] md:text-[11px] tracking-[0.22em] text-kesari uppercase">
                            {item.year}
                          </span>
                          <span className="font-data text-[9px] md:text-[10px] tracking-[0.22em] text-cream/35 uppercase">
                            — {item.era}
                          </span>
                        </div>
                        <h3 className="font-display font-bold text-lg md:text-xl tracking-tight mt-1.5 group-hover:text-kesari transition-colors duration-300">
                          {item.title}
                        </h3>
                        <p className="text-cream/55 text-sm leading-relaxed mt-1.5 max-w-xl">
                          {item.description}
                        </p>
                      </div>
                    </motion.li>
                  );
                })}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
