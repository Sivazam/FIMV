"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const EASE = [0.76, 0, 0.24, 1] as const;

export function Preloader() {
  const [done, setDone] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const start = performance.now();
    const DURATION = 1400;
    let raf: number;
    const tick = (now: number) => {
      const p = Math.min((now - start) / DURATION, 1);
      // ease the counter
      setCount(Math.round(p * 100));
      if (p < 1) raf = requestAnimationFrame(tick);
      else setTimeout(() => setDone(true), 250);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[100] bg-navy-950 flex flex-col items-center justify-center noise"
          exit={{ y: "-100%" }}
          transition={{ duration: 0.9, ease: EASE }}
        >
          <div className="overflow-hidden">
            <motion.div
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
              className="flex items-center gap-4"
            >
              { }
              <img
                src="/fim/logo.jpg"
                alt="Fact In Media logo"
                className="w-14 h-14 md:w-16 md:h-16 object-cover rounded-sm"
              />
              <div className="leading-none">
                <p className="font-display font-black text-cream text-2xl md:text-4xl tracking-tight">
                  FACT IN MEDIA
                </p>
                <p className="font-data text-[10px] md:text-xs tracking-[0.3em] text-kesari mt-2">
                  POLITICAL CAMPAIGN &amp; NEW-MEDIA AGENCY
                </p>
              </div>
            </motion.div>
          </div>
          <div className="absolute bottom-8 md:bottom-12 left-0 right-0 px-6 md:px-12 flex items-end justify-between">
            <div className="h-px bg-cream/15 flex-1 mr-6 relative overflow-hidden">
              <motion.div
                className="absolute inset-y-0 left-0 bg-kesari"
                style={{ width: `${count}%` }}
              />
            </div>
            <span className="font-data text-cream/70 text-sm tabular-nums">
              {String(count).padStart(3, "0")}%
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
