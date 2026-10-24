"use client";

import { motion, useScroll, useMotionValueEvent, useSpring, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { NAV_LINKS, CONTACT } from "@/lib/fim-data";
import { WhatsAppIcon } from "./whatsapp";
import { cn } from "@/lib/utils";

export function Navbar() {
  const { scrollY, scrollYProgress } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 28, mass: 0.4 });

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 40);
  });

  return (
    <>
      {/* Scroll progress — kesari reading line */}
      <motion.div
        aria-hidden
        style={{ scaleX: progress }}
        className="fixed top-0 left-0 right-0 h-[3px] z-[70] origin-left bg-gradient-to-r from-kesari via-kesari to-pillar-analysis"
      />
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-navy-950/85 backdrop-blur-md border-b border-cream/10 py-3"
            : "bg-transparent py-5"
        )}
      >
        <div className="mx-auto max-w-[1440px] px-5 md:px-10 flex items-center justify-between gap-4">
          <a href="#top" className="flex items-center gap-3 group shrink-0">
            { }
            <img
              src="/fim/logo.jpg"
              alt="Fact In Media logo"
              className="w-10 h-10 md:w-11 md:h-11 object-cover rounded-[4px] ring-1 ring-cream/20 group-hover:ring-kesari/60 transition-all duration-300"
            />
            <div className="hidden sm:block leading-none">
              <p className="font-display font-extrabold text-cream text-lg tracking-tight">
                FACT IN MEDIA
              </p>
              <p className="font-data text-[9px] tracking-[0.28em] text-cream/50 mt-1">
                EST. 2022 — AP &amp; TG
              </p>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-8" aria-label="Primary">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="link-sweep font-data text-[11px] tracking-[0.2em] uppercase text-cream/70 hover:text-cream transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={CONTACT.whatsapp.primary}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with us on WhatsApp"
              title="Chat on WhatsApp"
              className="group relative w-11 h-11 grid place-items-center rounded-full border border-[#25D366]/50 text-[#25D366] hover:bg-[#25D366] hover:text-navy-950 hover:border-[#25D366] transition-all duration-300"
            >
              <span
                aria-hidden
                className="absolute inset-0 rounded-full animate-pulse-ring opacity-0 group-hover:opacity-100"
                style={{ boxShadow: "0 0 0 0 rgba(37,211,102,0.5)" }}
              />
              <WhatsAppIcon className="w-5 h-5" />
            </a>
            <a
              href="#contact"
              className="hidden md:inline-flex items-center gap-2 bg-kesari text-white font-data text-[11px] tracking-[0.15em] uppercase px-5 py-3 rounded-full hover:bg-kesari-deep transition-colors duration-300 group"
            >
              Start a Campaign
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className="lg:hidden text-cream p-2 -mr-2"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-navy-950/98 backdrop-blur-xl flex flex-col"
          >
            <div className="flex items-center justify-between px-5 py-5 border-b border-cream/10">
              <div className="flex items-center gap-3">
                { }
                <img src="/fim/logo.jpg" alt="Fact In Media" className="w-10 h-10 object-cover rounded-[4px]" />
                <p className="font-display font-extrabold text-cream">FACT IN MEDIA</p>
              </div>
              <button onClick={() => setOpen(false)} aria-label="Close menu" className="text-cream p-2">
                <X className="w-6 h-6" />
              </button>
            </div>
            <nav className="flex-1 flex flex-col justify-center px-8 gap-2" aria-label="Mobile">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 * i, duration: 0.5 }}
                  className="group flex items-baseline gap-4 py-3 border-b border-cream/8"
                >
                  <span className="font-data text-xs text-kesari">0{i + 1}</span>
                  <span className="font-display font-bold text-3xl text-cream group-hover:text-kesari transition-colors">
                    {link.label}
                  </span>
                </motion.a>
              ))}
            </nav>
            <div className="px-8 pb-10 space-y-4">
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-2 bg-kesari text-white font-data text-xs tracking-[0.15em] uppercase px-5 py-4 rounded-full"
              >
                Start a Campaign <ArrowUpRight className="w-4 h-4" />
              </a>
              <a
                href={CONTACT.whatsapp.primary}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-2.5 bg-[#25D366] text-navy-950 font-data text-xs tracking-[0.15em] uppercase px-5 py-4 rounded-full"
              >
                <WhatsAppIcon className="w-4 h-4" /> WhatsApp Us Now
              </a>
              <p className="font-data text-[10px] text-cream/40 mt-4 tracking-wider text-center">
                {CONTACT.email}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
