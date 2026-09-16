"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import {
  Cpu,
  Layers,
  FlaskConical,
  Scroll,
  ArrowUpRight,
  Sparkles,
  ShieldCheck,
  Flame,
  Award,
} from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function AboutDossier() {
  const cardRef = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 300 };
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [6, -6]), springConfig);
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-6, 6]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const pillars = [
    {
      title: "Distributed Systems & Cloud",
      highlight: "10x Throughput Scaling",
      description:
        "Architecting fault-tolerant microservices, zero-copy high-throughput APIs, and asynchronous message-driven backends with Node.js and TypeScript.",
      icon: Cpu,
      color: "text-sky-400 bg-sky-500/10 border-sky-500/20",
      glow: "group-hover/p:border-sky-500/40",
      href: "#engineering",
    },
    {
      title: "Interactive 3D & Motion",
      highlight: "500+ Commercial Projects",
      description:
        "Professional real-time computing in Unreal Engine 5 and Unity, technical cinematography, high-fidelity motion graphics, and cinematic color grading.",
      icon: Layers,
      color: "text-rose-400 bg-rose-500/10 border-rose-500/20",
      glow: "group-hover/p:border-rose-500/40",
      href: "#creative",
    },
    {
      title: "Chemical Sciences & Pathology",
      highlight: "M.Sc. Organic Chemistry",
      description:
        "Postgraduate organic synthesis research (Kufa), B.Sc. in Chemistry (Karbala), expert clinical pathology analysis (Al-Kafeel), and emergency medicine honors.",
      icon: FlaskConical,
      color: "text-purple-400 bg-purple-500/10 border-purple-500/20",
      glow: "group-hover/p:border-purple-500/40",
      href: "#education",
    },
    {
      title: "Classical Arabic Epics",
      highlight: "1,300-Verse Grand Epic",
      description:
        "Author of monumental Arabic verse on Bahr al-Basit, published psychological novels (صدى العدم), and comprehensive classical poetry commentaries.",
      icon: Scroll,
      color: "text-amber-400 bg-amber-500/10 border-amber-500/20",
      glow: "group-hover/p:border-amber-500/40",
      href: "#literature",
    },
  ];

  return (
    <div className="perspective-[1000px] w-full">
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        whileHover={{ scale: 1.008 }}
        transition={{ type: "spring", stiffness: 350, damping: 25 }}
        className={cn(
          "relative overflow-hidden rounded-3xl p-6 sm:p-8",
          "bg-card/80 dark:bg-[#0e1017]/90 backdrop-blur-2xl border border-border/80 dark:border-white/[0.09]",
          "shadow-2xl dark:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.7)]"
        )}
      >
        {/* Ambient Top Radiant Line */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-500/50 via-purple-500/50 to-transparent" />

        {/* Section Header with Verified Authority Badge */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-border/60 dark:border-white/[0.06]">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-primary/10 border border-primary/20 text-primary">
              <Sparkles className="size-4" />
            </div>
            <div>
              <h2 className="text-xl font-bold tracking-tight text-foreground">
                Executive Profile & Polymath Dossier
              </h2>
              <p className="text-xs text-muted-foreground font-mono">
                Multidisciplinary Architecture • Systems Engineering • Sciences • Letters
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 w-fit">
            <ShieldCheck className="size-3.5" />
            <span>Verified Track Record</span>
          </div>
        </div>

        {/* The Polymath Manifesto */}
        <div className="py-5">
          <p className="text-sm sm:text-base leading-relaxed text-foreground/90 font-sans text-pretty">
            Operating at the rare convergence of <span className="text-sky-400 font-semibold">high-concurrency distributed engineering</span>, <span className="text-rose-400 font-semibold">interactive 3D graphics</span>, <span className="text-purple-400 font-semibold">laboratory chemical sciences</span>, and <span className="text-amber-400 font-semibold">classical Arabic literature</span>. With deep expertise architecting resilient microservices that scale under extreme load, conducting advanced organic synthesis research, and publishing monumental literary epics, my work bridges rigorous scientific method with executive technical execution.
          </p>
        </div>

        {/* 4 Dimension Power Pillars Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
          {pillars.map((p) => {
            const Icon = p.icon;
            return (
              <Link
                key={p.title}
                href={p.href}
                className={cn(
                  "group/p relative flex flex-col justify-between p-4 rounded-2xl border transition-all duration-300",
                  "bg-muted/20 dark:bg-white/[0.02] hover:bg-muted/40 dark:hover:bg-white/[0.05]",
                  "border-border/50 dark:border-white/[0.06]",
                  p.glow
                )}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2">
                      <div className={cn("p-1.5 rounded-lg border", p.color)}>
                        <Icon className="size-4" />
                      </div>
                      <h3 className="text-sm font-semibold text-foreground tracking-tight group-hover/p:text-primary transition-colors">
                        {p.title}
                      </h3>
                    </div>
                    <ArrowUpRight className="size-3.5 text-muted-foreground opacity-0 group-hover/p:opacity-100 transition-opacity" />
                  </div>

                  <span className="inline-block text-[11px] font-mono px-2 py-0.5 rounded-md bg-muted dark:bg-white/[0.04] text-primary border border-border/40 mb-2">
                    {p.highlight}
                  </span>

                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {p.description}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Bottom Key Stat Counters */}
        <div className="mt-5 pt-4 border-t border-border/60 dark:border-white/[0.06] grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
          <div className="flex flex-col items-center p-2 rounded-xl bg-muted/20 dark:bg-white/[0.02]">
            <span className="text-lg sm:text-xl font-extrabold text-foreground font-mono tracking-tight">
              10x
            </span>
            <span className="text-[11px] text-muted-foreground">Throughput Scaling</span>
          </div>
          <div className="flex flex-col items-center p-2 rounded-xl bg-muted/20 dark:bg-white/[0.02]">
            <span className="text-lg sm:text-xl font-extrabold text-foreground font-mono tracking-tight">
              500+
            </span>
            <span className="text-[11px] text-muted-foreground">Commercial Deliveries</span>
          </div>
          <div className="flex flex-col items-center p-2 rounded-xl bg-muted/20 dark:bg-white/[0.02]">
            <span className="text-lg sm:text-xl font-extrabold text-foreground font-mono tracking-tight">
              1,300
            </span>
            <span className="text-[11px] text-muted-foreground">Poetic Verses Authored</span>
          </div>
          <div className="flex flex-col items-center p-2 rounded-xl bg-muted/20 dark:bg-white/[0.02]">
            <span className="text-lg sm:text-xl font-extrabold text-foreground font-mono tracking-tight">
              8+
            </span>
            <span className="text-[11px] text-muted-foreground">Specialized Credentials</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

