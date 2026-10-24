"use client";

import { motion } from "framer-motion";
import { Reveal, Eyebrow } from "./motion";
import { PILLARS } from "@/lib/fim-data";
import { ShieldCheck, Headset, BarChart3, Eye } from "lucide-react";

const ICONS = [ShieldCheck, Headset, BarChart3, Eye];

export function Pillars() {
  return (
    <section
      id="pillars"
      className="relative scroll-mt-24 bg-navy-950 text-cream py-24 md:py-36 overflow-hidden noise"
    >
      <div className="absolute inset-0 diag-stripes opacity-40" aria-hidden />
      <div
        className="absolute top-1/3 -left-52 w-[520px] h-[520px] rounded-full opacity-15 blur-[130px]"
        style={{ background: "radial-gradient(circle, #133a65 0%, transparent 65%)" }}
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-[1440px] px-5 md:px-10">
        <Eyebrow index="02" label="The Four Pillars" />

        <div className="mt-10 md:mt-14 grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <h2 className="font-display font-black tracking-tight leading-[0.98] text-[10vw] md:text-[5.5vw] lg:text-[4.6vw]">
              <Reveal y={50}>THE</Reveal>
              <Reveal y={50} delay={0.08}>
                <span className="text-outline">FOUR</span>{" "}
                <span className="font-editorial italic font-normal text-kesari">
                  pillars
                </span>
              </Reveal>
              <Reveal y={50} delay={0.16}>
                OF FIM.
              </Reveal>
            </h2>
            <Reveal delay={0.25} className="mt-8 max-w-md">
              <p className="text-cream/65 leading-relaxed">
                We work under the guidelines of our customers&apos;{" "}
                <span className="text-pillar-faith font-medium">Faith</span>, conduct{" "}
                <span className="text-pillar-analysis font-medium">Analysis</span>,
                ensure satisfaction through{" "}
                <span className="text-pillar-service font-medium">Customer Service</span>,
                and maintain{" "}
                <span className="text-pillar-transparency font-medium">Transparency</span>{" "}
                in everything we deliver. These four pillars are the foundation of
                the company.
              </p>
            </Reveal>
            <Reveal delay={0.32} className="mt-10">
              <div className="inline-flex items-center gap-4 border border-cream/15 rounded-full pl-4 pr-6 py-3">
                <span className="flex -space-x-1.5">
                  {PILLARS.map((p) => (
                    <span
                      key={p.id}
                      className="w-3.5 h-3.5 rounded-full ring-2 ring-navy-950"
                      style={{ background: p.color }}
                    />
                  ))}
                </span>
                <span className="font-data text-[10px] tracking-[0.22em] uppercase text-cream/50">
                  Foundation of the company
                </span>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7 flex flex-col gap-4 md:gap-5">
            {PILLARS.map((pillar, i) => {
              const Icon = ICONS[i];
              return (
                <motion.div
                  key={pillar.id}
                  initial={{ opacity: 0, x: 60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.8, delay: i * 0.1, ease: [0.76, 0, 0.24, 1] }}
                  className="group relative border border-cream/12 rounded-lg overflow-hidden bg-navy-900/60 backdrop-blur-sm"
                >
                  {/* color wash on hover */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-[0.13] transition-opacity duration-700"
                    style={{ background: pillar.color }}
                    aria-hidden
                  />
                  <div className="relative flex items-center gap-5 md:gap-8 p-5 md:p-7">
                    <span
                      className="font-display font-black text-4xl md:text-6xl tabular-nums shrink-0 w-16 md:w-24"
                      style={{ WebkitTextStroke: `1.5px ${pillar.color}90`, color: "transparent" }}
                    >
                      {pillar.index}
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3">
                        <Icon className="w-5 h-5 shrink-0" style={{ color: pillar.color }} strokeWidth={1.75} />
                        <h3 className="font-display font-extrabold text-xl md:text-3xl tracking-tight">
                          {pillar.name.toUpperCase()}
                        </h3>
                      </div>
                      <p className="text-cream/55 text-sm md:text-base leading-relaxed mt-2 max-w-lg">
                        {pillar.description}
                      </p>
                    </div>
                    <span
                      className="hidden md:block w-2.5 h-2.5 rounded-full shrink-0 group-hover:scale-[1.8] transition-transform duration-500"
                      style={{ background: pillar.color, boxShadow: `0 0 24px ${pillar.color}` }}
                    />
                  </div>
                  <div
                    className="h-[3px] w-0 group-hover:w-full transition-all duration-700 ease-out"
                    style={{ background: pillar.color }}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
