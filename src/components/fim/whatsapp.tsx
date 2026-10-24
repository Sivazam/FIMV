"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { CONTACT } from "@/lib/fim-data";
import { cn } from "@/lib/utils";

/* Official WhatsApp glyph (Simple Icons path) */
export function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

/* Floating WhatsApp quick-contact button — bottom right, always reachable */
export function WhatsAppFab() {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5, y: 24 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 2.4, duration: 0.7, ease: [0.34, 1.56, 0.64, 1] }}
      className="fixed bottom-5 right-5 md:bottom-7 md:right-7 z-40 flex items-center"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Expanding label (desktop) */}
      <a
        href={CONTACT.whatsapp.primary}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Fact In Media on WhatsApp"
        className="group flex items-center"
      >
        <motion.span
          animate={{ width: hovered ? "auto" : 0, opacity: hovered ? 1 : 0, x: hovered ? 0 : 8 }}
          initial={{ width: 0, opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.76, 0, 0.24, 1] }}
          className="hidden md:block overflow-hidden whitespace-nowrap bg-navy-950 text-cream font-data text-[11px] tracking-[0.15em] uppercase rounded-full px-5 py-2.5 mr-3 border border-cream/15 shadow-2xl"
        >
          Chat on WhatsApp — we reply <span className="text-[#25D366]">fast</span>
        </motion.span>

        <span className="relative grid place-items-center w-14 h-14 md:w-[60px] md:h-[60px] rounded-full bg-[#25D366] text-white shadow-[0_10px_35px_rgba(37,211,102,0.45)] transition-transform duration-300 group-hover:scale-105 group-active:scale-95">
          {/* Double pulse rings */}
          <span
            aria-hidden
            className="absolute inset-0 rounded-full animate-pulse-ring"
            style={{ boxShadow: "0 0 0 0 rgba(37,211,102,0.55)" }}
          />
          <span
            aria-hidden
            className="absolute inset-0 rounded-full animate-pulse-ring"
            style={{ boxShadow: "0 0 0 0 rgba(37,211,102,0.4)", animationDelay: "1.2s" }}
          />
          <WhatsAppIcon className="relative w-7 h-7 md:w-8 md:h-8" />
          {/* Online dot */}
          <span
            aria-hidden
            className="absolute top-0.5 right-0.5 w-3.5 h-3.5 rounded-full bg-[#25D366] border-[2.5px] border-navy-950"
          >
            <span className="absolute inset-0 rounded-full bg-white/80 animate-ping" />
          </span>
        </span>
      </a>
    </motion.div>
  );
}

/* Inline WhatsApp CTA button — used inside sections */
export function WhatsAppButton({
  href = CONTACT.whatsapp.primary,
  label = "WhatsApp Us",
  variant = "solid",
  className,
  showNumber = false,
  number,
}: {
  href?: string;
  label?: string;
  variant?: "solid" | "outline" | "dark";
  className?: string;
  showNumber?: boolean;
  number?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group inline-flex items-center gap-3 rounded-full font-data text-xs tracking-[0.15em] uppercase transition-all duration-300",
        variant === "solid" &&
          "bg-[#25D366] text-navy-950 pl-6 pr-2.5 py-2.5 hover:bg-[#1fb857] hover:shadow-[0_8px_30px_rgba(37,211,102,0.35)]",
        variant === "outline" &&
          "border border-[#25D366]/60 text-[#25D366] px-6 py-3 hover:bg-[#25D366]/10",
        variant === "dark" &&
          "border border-cream/25 text-cream pl-6 pr-2.5 py-2.5 hover:border-[#25D366] hover:text-[#25D366]",
        className
      )}
    >
      <WhatsAppIcon className="w-4 h-4 shrink-0 group-hover:scale-110 transition-transform" />
      <span className="flex flex-col items-start leading-none">
        <span>{label}</span>
        {showNumber && number && (
          <span className="text-[9px] tracking-[0.12em] opacity-60 mt-1">{number}</span>
        )}
      </span>
      {variant !== "outline" && (
        <span
          className={cn(
            "w-9 h-9 rounded-full grid place-items-center transition-colors",
            variant === "solid" ? "bg-navy-950/10 group-hover:bg-navy-950/20" : "bg-white/10 group-hover:bg-[#25D366]/15"
          )}
        >
          <span className="font-bold text-sm leading-none group-hover:translate-x-0.5 transition-transform">→</span>
        </span>
      )}
    </a>
  );
}
