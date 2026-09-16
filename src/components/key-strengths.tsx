"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { Zap, ShieldCheck, Video, BookOpen, Terminal, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

export default function KeyStrengths() {
  const cardRef = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 300 };
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), springConfig);
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const clientX = e.clientX - rect.left;
    const clientY = e.clientY - rect.top;

    x.set(clientX / rect.width - 0.5);
    y.set(clientY / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const metrics = [
    {
      title: "API Performance",
      value: "10x Scaling",
      detail: "Achieved via zero-copy buffering & caching",
      icon: Zap,
      color: "text-sky-400 bg-sky-500/10 border-sky-500/20",
    },
    {
      title: "Scalability",
      value: "-40% Latency",
      detail: "Distributed microservices optimization",
      icon: ShieldCheck,
      color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    },
    {
      title: "Motion Design",
      value: "500+ Projects",
      detail: "High-end commercial 3D & 2D deliveries",
      icon: Video,
      color: "text-purple-400 bg-purple-500/10 border-purple-500/20",
    },
    {
      title: "Classical Linguistics",
      value: "1,300 Verses",
      detail: "Epic poem on the Basit poetic meter",
      icon: BookOpen,
      color: "text-amber-400 bg-amber-500/10 border-amber-500/20",
    },
  ];

  return (
    <div className="perspective-[1000px] w-full mb-6">
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        whileHover={{ scale: 1.01 }}
        transition={{ type: "spring", stiffness: 350, damping: 25 }}
        className={cn(
          "relative overflow-hidden rounded-2xl p-5 sm:p-6",
          "bg-card/75 dark:bg-[#0e1017]/90 backdrop-blur-2xl border border-border/80 dark:border-white/[0.09]",
          "shadow-xl dark:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.7)]"
        )}
      >
        {/* Ambient Top Glow Line */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-5 border-b border-border/60 dark:border-white/[0.06]">
          <div className="flex items-center gap-3">
            <div className="size-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shadow-inner">
              <Sparkles className="size-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-semibold text-base sm:text-lg text-foreground tracking-tight">
                  Autonomous Engineering Consultant
                </h3>
                <span className="hidden sm:inline-block px-2 py-0.5 text-[11px] font-medium rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                  Active
                </span>
              </div>
              <p className="text-xs text-muted-foreground">
                Lead System Architect & Senior Full-Stack Distributed Systems Engineer
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground bg-muted/40 dark:bg-white/[0.04] px-3 py-1.5 rounded-lg border border-border/50">
            <Terminal className="size-3.5 text-primary" />
            <span>2023 — Present</span>
          </div>
        </div>

        {/* 4 Metric Badges Grid (Matching Image 4) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-5">
          {metrics.map((m) => {
            const Icon = m.icon;
            return (
              <div
                key={m.title}
                className={cn(
                  "flex flex-col p-3 rounded-xl border transition-all duration-300",
                  "bg-muted/20 dark:bg-white/[0.02] hover:bg-muted/40 dark:hover:bg-white/[0.05]",
                  "border-border/50 dark:border-white/[0.06] hover:border-border"
                )}
              >
                <div className="flex items-center gap-2 mb-1.5">
                  <div className={cn("p-1 rounded-md border", m.color)}>
                    <Icon className="size-3.5" />
                  </div>
                  <span className="text-xs font-medium text-muted-foreground truncate">
                    {m.title}
                  </span>
                </div>
                <span className="text-sm sm:text-base font-bold text-foreground tracking-tight">
                  {m.value}
                </span>
                <span className="text-[11px] text-muted-foreground/80 mt-0.5 line-clamp-1">
                  {m.detail}
                </span>
              </div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}

