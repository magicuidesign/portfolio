"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface DimensionItem {
  id: string;
  label: string;
  dotColor: string;
  activeColor: string;
}

const DIMENSIONS: DimensionItem[] = [
  { id: "engineering", label: "Engineering", dotColor: "bg-sky-500", activeColor: "text-sky-600 dark:text-sky-400" },
  { id: "security", label: "Security", dotColor: "bg-rose-500", activeColor: "text-rose-600 dark:text-rose-400" },
  { id: "creative", label: "Creative", dotColor: "bg-violet-500", activeColor: "text-violet-600 dark:text-violet-400" },
  { id: "intellectual", label: "Intellectual", dotColor: "bg-emerald-500", activeColor: "text-emerald-600 dark:text-emerald-400" },
  { id: "literature", label: "Literature", dotColor: "bg-amber-500", activeColor: "text-amber-600 dark:text-amber-400" },
];

export default function DimensionNav() {
  const [activeId, setActiveId] = useState<string>("engineering");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (let i = DIMENSIONS.length - 1; i >= 0; i--) {
        const item = DIMENSIONS[i];
        const element = document.getElementById(item.id);
        if (element) {
          const top = element.offsetTop;
          if (scrollPosition >= top) {
            setActiveId(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToDimension = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setActiveId(id);
    }
  };

  return (
    <div className="w-full flex items-center justify-center py-2 sticky top-4 z-20 pointer-events-none">
      <nav
        aria-label="Portfolio Dimensions Navigation"
        className="pointer-events-auto inline-flex flex-wrap items-center justify-center gap-1 p-1.5 rounded-full border border-border/80 bg-background/80 dark:bg-card/80 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.3)] transition-all"
      >
        {DIMENSIONS.map((item) => {
          const isActive = activeId === item.id;
          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => scrollToDimension(item.id, e)}
              className={cn(
                "relative group flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium transition-colors duration-200 select-none",
                isActive
                  ? "text-foreground font-semibold"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {/* Sliding Active Pill (Spring Physics) */}
              {isActive && (
                <motion.div
                  layoutId="activeDimensionPill"
                  className="absolute inset-0 rounded-full bg-secondary/80 dark:bg-muted/80 border border-border shadow-xs"
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 30,
                  }}
                />
              )}

              {/* Dot & Label */}
              <span className="relative z-10 flex items-center gap-2">
                <span
                  className={cn(
                    "size-1.5 rounded-full transition-all duration-300",
                    item.dotColor,
                    isActive ? "scale-125 shadow-xs" : "opacity-60 group-hover:opacity-100"
                  )}
                />
                <span className={cn(isActive && item.activeColor)}>
                  {item.label}
                </span>
              </span>
            </a>
          );
        })}
      </nav>
    </div>
  );
}

