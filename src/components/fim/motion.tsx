"use client";

import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

const EASE = [0.76, 0, 0.24, 1] as const;

/* Fade + rise reveal on scroll */
export function Reveal({
  children,
  delay = 0,
  y = 36,
  className,
  once = true,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  once?: boolean;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-80px" }}
      transition={{ duration: 0.9, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

/* Word-by-word editorial text reveal */
export function WordReveal({
  text,
  className,
  wordClassName,
  delay = 0,
  once = true,
}: {
  text: string;
  className?: string;
  wordClassName?: (word: string, i: number) => string | undefined;
  delay?: number;
  once?: boolean;
}) {
  const words = text.split(" ");
  return (
    <span className={cn("inline", className)}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden pb-[0.08em] -mb-[0.08em] align-bottom">
          <motion.span
            className={cn("inline-block will-change-transform", wordClassName?.(word, i))}
            initial={{ y: "110%", rotate: 4 }}
            whileInView={{ y: 0, rotate: 0 }}
            viewport={{ once, margin: "-60px" }}
            transition={{ duration: 0.75, delay: delay + i * 0.045, ease: EASE }}
          >
            {word}
            {i < words.length - 1 ? "\u00A0" : ""}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

/* Animated number counter */
export function Counter({
  value,
  suffix = "",
  className,
}: {
  value: number;
  suffix?: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const mv = useMotionValue(0);
  const spring = useSpring(mv, { duration: 1.8, bounce: 0 });

  useEffect(() => {
    if (inView) mv.set(value);
  }, [inView, value, mv]);

  useEffect(() => {
    const unsub = spring.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = String(Math.round(latest));
      }
    });
    return unsub;
  }, [spring]);

  return (
    <span className={className}>
      <span ref={ref}>0</span>
      {suffix}
    </span>
  );
}

/* Section eyebrow label — mono with rule */
export function Eyebrow({
  index,
  label,
  dark = true,
  className,
}: {
  index?: string;
  label: string;
  dark?: boolean;
  className?: string;
}) {
  return (
    <Reveal className={cn("flex items-center gap-3", className)} y={16}>
      <span className="font-data text-[11px] tracking-[0.25em] uppercase text-kesari">
        {index ? `${index} / ` : ""}
      </span>
      <span
        className={cn(
          "font-data text-[11px] tracking-[0.25em] uppercase",
          dark ? "text-cream/60" : "text-navy-900/60"
        )}
      >
        {label}
      </span>
      <span
        className={cn(
          "h-px flex-1",
          dark ? "bg-cream/15" : "bg-navy-900/15"
        )}
      />
    </Reveal>
  );
}

/* Magnetic hover wrapper for CTAs */
export function Magnetic({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 180, damping: 14 });
  const sy = useSpring(y, { stiffness: 180, damping: 14 });

  return (
    <motion.div
      ref={ref}
      style={{ x: sx, y: sy }}
      onMouseMove={(e) => {
        const rect = ref.current?.getBoundingClientRect();
        if (!rect) return;
        x.set((e.clientX - rect.left - rect.width / 2) * 0.25);
        y.set((e.clientY - rect.top - rect.height / 2) * 0.35);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      className="inline-block"
    >
      {children}
    </motion.div>
  );
}
