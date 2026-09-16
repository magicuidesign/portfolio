"use client";

import React from "react";
import { motion } from "motion/react";
import { Sparkles, CheckCircle2 } from "lucide-react";
import { DATA } from "@/data/resume";
import Link from "next/link";

export default function HeroTitle() {
  return (
    <div className="flex flex-col gap-4 max-w-[620px]">
      {/* Top Polymath Status Badge */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-fit"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-muted/60 dark:bg-white/[0.04] border border-border/80 dark:border-white/[0.08] backdrop-blur-md shadow-xs group hover:border-primary/40 transition-colors">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span className="text-muted-foreground font-mono text-[11px] sm:text-xs">
            Multi-Disciplinary Systems Architect & Polymath
          </span>
        </div>
      </motion.div>

      {/* Main Dynamic Glowing Name */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="relative"
      >
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground flex flex-wrap items-center gap-x-3 gap-y-1">
          <span>Hi, I&apos;m</span>
          <span className="relative inline-block select-none group">
            {/* Multi-Spectrum Ambient Breathing Bloom Aura behind the Name */}
            <span className="absolute -inset-2 rounded-2xl bg-gradient-to-r from-sky-500/40 via-purple-500/35 via-rose-500/30 to-amber-500/40 blur-2xl opacity-75 dark:opacity-90 animate-pulse-glow -z-10 pointer-events-none" />

            {/* Glowing Flowing Aurora Text */}
            <span className="relative bg-gradient-to-r from-sky-400 via-purple-400 via-rose-400 to-amber-400 dark:from-sky-300 dark:via-purple-300 dark:via-rose-300 dark:to-amber-300 bg-clip-text text-transparent font-extrabold animate-aurora-text drop-shadow-[0_2px_15px_rgba(56,189,248,0.35)]">
              {DATA.name}
            </span>

            {/* Verified Polymath Badge */}
            <span className="inline-flex items-center ml-2 align-middle">
              <CheckCircle2 className="size-5 sm:size-6 text-sky-400 fill-sky-500/20 drop-shadow-[0_0_8px_rgba(56,189,248,0.5)] inline" />
            </span>
          </span>
        </h1>

        {/* Legal Name Subtitle Badge (The Smart Executive Fusion) */}
        <div className="flex items-center gap-2 mt-2">
          <span className="text-xs sm:text-sm font-mono text-muted-foreground/90 tracking-wide font-medium">
            {DATA.legalName}
          </span>
          <span className="text-muted-foreground/40">•</span>
          <span className="text-[11px] font-mono text-muted-foreground/70">
            Legal & Academic Identity
          </span>
        </div>
      </motion.div>

      {/* Dynamic Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-muted-foreground text-base sm:text-lg lg:text-xl leading-relaxed text-pretty font-sans"
      >
        Senior Distributed Systems & Full-Stack Architect — Engineering high-concurrency microservices, interactive 3D virtual worlds, and mission-critical cloud backends.
      </motion.p>

      {/* 4 Interactive Dimension Quick Chips */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex flex-wrap items-center gap-2 pt-1"
      >
        <Link
          href="#engineering"
          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-mono bg-sky-500/10 border border-sky-500/20 text-sky-400 hover:bg-sky-500/20 hover:border-sky-500/40 transition-all hover:scale-105"
        >
          <span className="size-1.5 rounded-full bg-sky-400" />
          <span>Distributed Systems</span>
        </Link>
        <Link
          href="#creative"
          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-mono bg-rose-500/10 border border-rose-500/20 text-rose-400 hover:bg-rose-500/20 hover:border-rose-500/40 transition-all hover:scale-105"
        >
          <span className="size-1.5 rounded-full bg-rose-400" />
          <span>3D & Unreal</span>
        </Link>
        <Link
          href="#education"
          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-mono bg-purple-500/10 border border-purple-500/20 text-purple-400 hover:bg-purple-500/20 hover:border-purple-500/40 transition-all hover:scale-105"
        >
          <span className="size-1.5 rounded-full bg-purple-400" />
          <span>Chemical Sciences</span>
        </Link>
        <Link
          href="#literature"
          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-mono bg-amber-500/10 border border-amber-500/20 text-amber-400 hover:bg-amber-500/20 hover:border-amber-500/40 transition-all hover:scale-105"
        >
          <span className="size-1.5 rounded-full bg-amber-400" />
          <span>Classical Epic</span>
        </Link>
      </motion.div>
    </div>
  );
}

