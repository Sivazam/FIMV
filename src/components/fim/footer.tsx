"use client";

import { Reveal } from "./motion";
import { CONTACT, NAV_LINKS } from "@/lib/fim-data";
import { ArrowUp, Download, Heart } from "lucide-react";
import { WhatsAppIcon } from "./whatsapp";

export function Footer() {
  return (
    <footer className="relative bg-navy-950 text-cream noise overflow-hidden border-t border-cream/10 mt-auto">
      <div className="absolute inset-0 diag-stripes opacity-20" aria-hidden />
      {/* Giant wordmark */}
      <div className="relative border-b border-cream/10 overflow-hidden">
        <Reveal y={60} className="mx-auto max-w-[1440px] px-5 md:px-10 py-8 md:py-12">
          <p
            aria-hidden
            className="font-display font-black tracking-tighter leading-[0.85] text-center text-[16.5vw] bg-gradient-to-b from-cream/25 to-cream/[0.04] bg-clip-text text-transparent select-none"
          >
            FACT IN MEDIA
          </p>
        </Reveal>
      </div>

      <div className="relative mx-auto max-w-[1440px] px-5 md:px-10 py-12 md:py-16 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-4">
          <div className="flex items-center gap-3">
            { }
            <img src="/fim/logo.jpg" alt="Fact In Media" className="w-12 h-12 object-cover rounded-[4px] ring-1 ring-cream/15" />
            <div className="leading-none">
              <p className="font-display font-extrabold text-lg tracking-tight">FACT IN MEDIA</p>
              <p className="font-data text-[9px] tracking-[0.28em] text-cream/40 mt-1.5 uppercase">
                Est. 2022 — India
              </p>
            </div>
          </div>
          <p className="text-cream/55 text-sm leading-relaxed mt-5 max-w-xs">
            A premier political campaign &amp; new-media agency. Engineering
            narratives, commanding digital airspace and winning ground games
            across Andhra Pradesh &amp; Telangana.
          </p>
        </div>

        <nav className="md:col-span-2" aria-label="Footer">
          <p className="font-data text-[10px] tracking-[0.25em] uppercase text-kesari mb-5">
            Navigate
          </p>
          <ul className="space-y-3">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="link-sweep text-cream/65 hover:text-cream text-sm transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:col-span-3">
          <p className="font-data text-[10px] tracking-[0.25em] uppercase text-kesari mb-5">
            Find Us
          </p>
          <ul className="space-y-3 text-sm">
            {CONTACT.phones.map((p) => (
              <li key={p}>
                <a href={`tel:+91${p.replace(/\s/g, "")}`} className="text-cream/65 hover:text-cream transition-colors">
                  {p}
                </a>
              </li>
            ))}
            <li>
              <a
                href={CONTACT.whatsapp.primary}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 text-[#25D366]/85 hover:text-[#25D366] transition-colors"
              >
                <WhatsAppIcon className="w-4 h-4" />
                WhatsApp us directly
                <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
              </a>
            </li>
            <li>
              <a href={`mailto:${CONTACT.email}`} className="text-cream/65 hover:text-cream transition-colors break-all">
                {CONTACT.email}
              </a>
            </li>
            <li>
              <a
                href="https://www.factinmedia.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream/65 hover:text-cream transition-colors"
              >
                {CONTACT.website}
              </a>
            </li>
            <li>
              <a
                href={CONTACT.profileDeck}
                download="FACT_IN_MEDIA_Profile.pdf"
                className="group inline-flex items-center gap-2.5 text-cream/65 hover:text-kesari transition-colors"
              >
                <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                Company Profile Deck (PDF)
              </a>
            </li>
          </ul>
        </div>

        <div className="md:col-span-3">
          <p className="font-data text-[10px] tracking-[0.25em] uppercase text-kesari mb-5">
            Follow the Signal
          </p>
          <ul className="space-y-3">
            {CONTACT.socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between border border-cream/12 rounded-md px-4 py-3 hover:border-kesari/60 hover:bg-kesari/5 transition-all duration-300"
                >
                  <span className="text-sm text-cream/65 group-hover:text-cream transition-colors">
                    {s.label}
                  </span>
                  <span className="font-data text-[10px] tracking-[0.12em] text-cream/35 group-hover:text-kesari transition-colors">
                    {s.handle}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="relative border-t border-cream/10">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-data text-[10px] tracking-[0.18em] uppercase text-cream/40">
            © {new Date().getFullYear()} Fact In Media — Let&apos;s Win Together
          </p>
          <p className="font-data text-[11px] tracking-[0.15em] uppercase text-cream/60 flex items-center gap-1.5">
            Built with{" "}
            <Heart className="w-3.5 h-3.5 text-kesari fill-kesari inline-block animate-pulse" aria-hidden />{" "}
            by{" "}
            <a
              href={`https://wa.me/919014882779?text=${encodeURIComponent("Hi, I have a software requirement")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cream hover:text-kesari underline underline-offset-4 decoration-kesari/50 hover:decoration-kesari transition-colors font-medium tracking-[0.18em]"
            >
              Shiv
            </a>
          </p>
          <div className="flex items-center gap-4">
            <p className="font-data text-[10px] tracking-[0.18em] uppercase text-cream/40 hidden md:block">
              Your Election, Our Mission
            </p>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              aria-label="Back to top"
              className="w-10 h-10 rounded-full border border-cream/15 grid place-items-center text-cream/60 hover:text-kesari hover:border-kesari transition-colors"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
