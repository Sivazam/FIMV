"use client";

import { useRef, type ReactNode } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Reveal, Magnetic } from "./motion";
import { ArrowUpRight, Phone } from "lucide-react";
import { WhatsAppIcon } from "./whatsapp";
import { CONTACT } from "@/lib/fim-data";

const EASE = [0.76, 0, 0.24, 1] as const;

/*
 * Line reveal that always fires.
 *
 * The IntersectionObserver must watch the overflow-hidden CONTAINER (a normal
 * in-flow box that is never clipped out of the viewport). The inner span then
 * animates via inherited variant labels. Watching the clipped inner span
 * directly breaks whenever the text wraps tall enough to be fully clipped —
 * intersectionRatio hits 0, whileInView never fires, and the line stays
 * invisible forever (the "missing text" bug in this section).
 */
function HeadlineLine({
  index,
  children,
}: {
  index: number;
  children: ReactNode;
}) {
  return (
    <motion.span
      className="block overflow-hidden pb-[0.08em] -mb-[0.08em]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-8% 0px" }}
    >
      <motion.span
        className="block will-change-transform"
        custom={index}
        variants={{
          hidden: { y: "112%" },
          visible: (i: number) => ({
            y: 0,
            transition: { duration: 1, delay: 0.14 * i, ease: EASE },
          }),
        }}
      >
        {children}
      </motion.span>
    </motion.span>
  );
}

export function Cta() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-3, 3]);

  return (
    <section
      ref={ref}
      className="relative bg-navy-950 text-cream overflow-hidden noise border-t border-cream/10"
    >
      {/* Kesari horizon */}
      <div
        className="absolute inset-x-0 bottom-0 h-1/2 opacity-20"
        style={{
          background:
            "linear-gradient(to top, rgba(255,90,31,0.5) 0%, transparent 80%)",
        }}
        aria-hidden
      />
      <div className="absolute inset-0 diag-stripes opacity-40" aria-hidden />

      <div className="relative z-10 mx-auto max-w-[1440px] px-5 md:px-10 py-20 md:py-28">
        <Reveal>
          <p className="font-data text-[11px] tracking-[0.25em] uppercase text-kesari mb-6 md:mb-8">
            The Ballot Awaits
          </p>
        </Reveal>

        {/*
         * Full-width headline. "YOUR ELECTION." measures ~10.42em in Archivo
         * Black, so it is sized to stay on ONE line from md up (and capped on
         * ultra-wide screens). On phones it wraps into a clean word stack —
         * "YOUR" / "ELECTION." / "our mission." — which the reveal above
         * handles safely. z-10 keeps the type above the arched portrait that
         * is pulled up beside line 2 on lg.
         */}
        <h2 className="relative z-10 font-display font-black tracking-tight leading-[0.92] text-[12vw] md:text-[min(8.2vw,124px)]">
          <HeadlineLine index={0}>YOUR ELECTION.</HeadlineLine>
          <HeadlineLine index={1}>
            <span className="font-editorial italic font-normal text-kesari tracking-normal">
              our mission
            </span>
            <span className="text-kesari">.</span>
          </HeadlineLine>
        </h2>

        {/*
         * Compact follow-through: the portrait is pulled UP on lg (lg:-mt-28)
         * so its arch rises beside the short "our mission." line instead of
         * creating a tall dead zone under the headline. On mobile the portrait
         * comes first (order-first) so the section ends tight on the CTAs.
         */}
        <div className="mt-8 md:mt-10 grid lg:grid-cols-12 gap-10 lg:gap-12 items-end">
          <div className="lg:col-span-7 flex flex-col gap-6">
            <Reveal delay={0.1}>
              <p className="text-cream/70 text-base md:text-lg leading-relaxed max-w-xl">
                From the first rally to the final round of counting — one war
                room runs your{" "}
                <span className="text-cream font-semibold">strategy</span>, your{" "}
                <span className="text-cream font-semibold">content</span> and
                your{" "}
                <span className="text-cream font-semibold">ground game</span>,
                so every ward moves together on polling day.
              </p>
            </Reveal>

            <Reveal
              delay={0.2}
              className="flex flex-col sm:flex-row flex-wrap gap-4"
            >
              <Magnetic>
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-3 bg-kesari text-white pl-7 pr-2.5 py-2.5 rounded-full font-data text-xs tracking-[0.15em] uppercase hover:bg-kesari-deep transition-colors duration-300"
                >
                  Brief the War Room
                  <span className="w-10 h-10 rounded-full bg-white/15 grid place-items-center group-hover:bg-white/25 transition-colors">
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </span>
                </a>
              </Magnetic>
              <Magnetic>
                <a
                  href={CONTACT.whatsapp.primary}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 bg-[#25D366] text-navy-950 pl-7 pr-2.5 py-2.5 rounded-full font-data text-xs tracking-[0.15em] uppercase hover:bg-[#1fb857] hover:shadow-[0_8px_30px_rgba(37,211,102,0.35)] transition-all duration-300"
                >
                  WhatsApp Now
                  <span className="w-10 h-10 rounded-full bg-navy-950/10 grid place-items-center group-hover:bg-navy-950/20 group-hover:scale-105 transition-all">
                    <WhatsAppIcon className="w-4 h-4" />
                  </span>
                </a>
              </Magnetic>
              <a
                href={`tel:+91${CONTACT.rawPhones[0]}`}
                className="group inline-flex items-center gap-3 border border-cream/25 text-cream px-6 h-[60px] rounded-full font-data text-xs tracking-[0.15em] uppercase hover:border-kesari hover:text-kesari transition-colors duration-300"
              >
                <Phone className="w-4 h-4" />
                {CONTACT.phones[0]}
              </a>
            </Reveal>

            {/* Trust strip — fills the column so nothing floats in dead space */}
            <Reveal
              delay={0.3}
              className="flex flex-wrap items-center gap-x-5 gap-y-2 pt-1"
            >
              <span className="inline-flex items-center gap-2 font-data text-[10px] tracking-[0.18em] uppercase text-cream/50">
                <span className="relative flex w-1.5 h-1.5">
                  <span className="absolute inline-flex w-full h-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                  <span className="relative inline-flex w-1.5 h-1.5 rounded-full bg-emerald-400" />
                </span>
                War room online — 24×7
              </span>
              <span className="hidden sm:block h-3 w-px bg-cream/15" aria-hidden />
              <span className="font-data text-[10px] tracking-[0.18em] uppercase text-cream/50">
                Replies within minutes
              </span>
              <span className="hidden sm:block h-3 w-px bg-cream/15" aria-hidden />
              <span className="font-data text-[10px] tracking-[0.18em] uppercase text-cream/50">
                Est. 2022 — AP &amp; TG
              </span>
            </Reveal>
          </div>

          <div className="order-first lg:order-none lg:col-span-5 lg:-mt-28 flex justify-center lg:justify-end">
            <motion.div style={{ y, rotate }} className="relative w-[230px] md:w-[300px]">
              <div className="absolute -inset-8 bg-kesari/15 rounded-full blur-3xl" aria-hidden />
              <div className="absolute -inset-3 border border-kesari/25 rounded-t-[999px] rounded-b-2xl rotate-[2.5deg]" aria-hidden />
              <div className="relative overflow-hidden rounded-t-[999px] rounded-b-2xl ring-1 ring-cream/25">
                <img
                  src="/fim/leader.png"
                  alt="A people's leader at the podium, fist raised"
                  className="w-full aspect-[5/7] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent" aria-hidden />
              </div>
              <p className="mt-4 text-center font-data text-[9px] md:text-[10px] tracking-[0.28em] uppercase text-cream/45">
                The people&apos;s platform — every mandate earned
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
