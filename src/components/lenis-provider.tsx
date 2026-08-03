"use client";

import Lenis from "lenis";
import { useEffect, type ReactNode } from "react";

type LenisProviderProps = {
  children: ReactNode;
};

const HEADER_OFFSET = 120;

export default function LenisProvider({ children }: LenisProviderProps) {
  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (reducedMotion.matches) {
      return;
    }

    const lenis = new Lenis({
      autoRaf: true,
      smoothWheel: true,
      syncTouch: true,
      anchors: {
        offset: -HEADER_OFFSET,
      },
    });

    return () => {
      lenis.destroy();
    };
  }, []);

  return children;
}
