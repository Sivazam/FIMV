"use client";

import { Sparkle } from "lucide-react";
import { cn } from "@/lib/utils";

const ITEMS = [
  "LET'S WIN TOGETHER",
  "YOUR ELECTION, OUR MISSION",
  "WAR ROOM 24×7",
  "BOOTH-LEVEL PRECISION",
  "NARRATIVES THAT WIN",
  "GROUND + DIGITAL",
  "AP & TELANGANA",
];

export function Ticker({
  className,
  variant = "kesari",
  slow = false,
}: {
  className?: string;
  variant?: "kesari" | "navy" | "cream";
  slow?: boolean;
}) {
  const row = (
    <>
      {ITEMS.map((item, i) => (
        <span key={i} className="flex items-center gap-6 md:gap-10 shrink-0">
          <span className="font-display font-extrabold text-lg md:text-2xl tracking-tight whitespace-nowrap">
            {item}
          </span>
          <Sparkle
            className={cn(
              "w-4 h-4 md:w-5 md:h-5 shrink-0",
              variant === "cream" ? "text-kesari" : "text-current opacity-70"
            )}
            fill="currentColor"
          />
        </span>
      ))}
    </>
  );

  return (
    <div className={variant === "kesari" ? "overflow-x-clip" : undefined}>
      <div
        aria-hidden
        className={cn(
          "relative overflow-hidden py-4 md:py-5 border-y select-none",
          variant === "kesari" &&
            "bg-kesari text-white border-kesari-deep/40 -rotate-[0.6deg]",
          variant === "navy" && "bg-navy-800 text-cream border-cream/10",
          variant === "cream" && "bg-cream text-navy-900 border-navy-900/10",
          className
        )}
      >
        <div
          className={cn(
            "marquee-track gap-6 md:gap-10",
            slow ? "animate-marquee-slow" : "animate-marquee"
          )}
        >
          {row}
          {row}
        </div>
      </div>
    </div>
  );
}
