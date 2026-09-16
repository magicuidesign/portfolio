"use client";

import { DATA } from "@/data/resume";
import { motion } from "motion/react";
import { Gamepad2, Palette, Film, Camera, Sliders, Sparkles, Layers, Award } from "lucide-react";

export default function CreativeSection() {
  return (
    <motion.section
      id="creative"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="space-y-10"
    >
      {/* Luxury Section Header */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-500 text-xs font-semibold backdrop-blur-sm">
          <Sparkles className="size-3.5 text-purple-500" />
          <span>Creative & Cinematic Dimension</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tighter bg-gradient-to-r from-foreground via-foreground to-purple-500/80 bg-clip-text text-transparent">
          Creative & Visual Production
        </h2>
        <p className="text-muted-foreground max-w-[700px] text-sm sm:text-base leading-relaxed">
          Professional creative and technical production across 3D game engines, motion graphics, high-end cinematography, and cinematic color grading.
        </p>
      </div>

      <div className="space-y-6">
        {/* 1. Motion Graphics (500+ Projects Featured Card) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="group relative overflow-hidden rounded-2xl border border-purple-500/30 bg-gradient-to-br from-purple-500/10 via-card to-pink-500/5 p-6 sm:p-8 shadow-sm hover:border-purple-500/60 hover:shadow-[0_0_35px_-5px_rgba(168,85,247,0.25)] transition-all duration-300"
        >
          <div className="absolute -top-16 -right-16 size-44 rounded-full bg-purple-500/15 blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3.5">
                <div className="p-3 rounded-xl bg-purple-500/15 text-purple-500 border border-purple-500/30">
                  <Film className="size-6" />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-foreground group-hover:text-purple-500 transition-colors">
                    {DATA.creative.motionGraphics.title}
                  </h3>
                  <p className="text-xs text-muted-foreground font-mono mt-0.5">
                    {DATA.creative.motionGraphics.period}
                  </p>
                </div>
              </div>

              {/* Glowing 500+ Projects Stat Badge */}
              <div className="flex items-center gap-3 px-4 py-2 rounded-xl bg-purple-500/10 border border-purple-500/25 self-start sm:self-center">
                <Award className="size-5 text-purple-500" />
                <div>
                  <div className="text-2xl sm:text-3xl font-black bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                    {DATA.creative.motionGraphics.projectCount}+
                  </div>
                  <div className="text-[10px] uppercase font-bold tracking-wider text-purple-600 dark:text-purple-300">
                    Finished Projects
                  </div>
                </div>
              </div>
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed">
              {DATA.creative.motionGraphics.description}
            </p>

            {/* Software Suite */}
            <div className="space-y-2.5">
              <p className="text-xs font-bold text-purple-600 dark:text-purple-400 uppercase tracking-wider">
                Production Software
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {DATA.creative.motionGraphics.software.map((soft) => (
                  <div
                    key={soft.name}
                    className="p-3 rounded-xl bg-secondary/50 border border-purple-500/20 hover:border-purple-500/40 transition-colors"
                  >
                    <p className="font-semibold text-xs text-foreground">{soft.name}</p>
                    <p className="text-[11px] text-muted-foreground mt-0.5">{soft.specialization}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Capabilities */}
            <div className="space-y-2">
              <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
                Capabilities
              </p>
              <div className="flex flex-wrap gap-2">
                {DATA.creative.motionGraphics.capabilities.map((cap) => (
                  <span
                    key={cap}
                    className="text-xs font-medium bg-purple-500/10 text-purple-700 dark:text-purple-300 border border-purple-500/20 px-3 py-1 rounded-full"
                  >
                    {cap}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* 2. Game Development & 3D */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="group relative overflow-hidden rounded-2xl border border-purple-500/20 bg-gradient-to-br from-purple-500/[0.04] via-card to-card/90 p-6 sm:p-7 shadow-sm hover:border-purple-500/50 hover:shadow-[0_0_30px_-5px_rgba(168,85,247,0.18)] transition-all duration-300"
        >
          <div className="relative z-10 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-500 border border-purple-500/20">
                  <Gamepad2 className="size-5" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-foreground group-hover:text-purple-500 transition-colors">
                    {DATA.creative.gameDevelopment.title}
                  </h3>
                  <p className="text-xs text-muted-foreground font-mono mt-0.5">
                    {DATA.creative.gameDevelopment.period}
                  </p>
                </div>
              </div>
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed">
              {DATA.creative.gameDevelopment.description}
            </p>

            {/* Engines */}
            <div className="space-y-2.5">
              <p className="text-xs font-bold text-purple-600 dark:text-purple-400 uppercase tracking-wider">
                Industry Engines
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {DATA.creative.gameDevelopment.engines.map((engine) => (
                  <div
                    key={engine.name}
                    className="p-3.5 rounded-xl bg-secondary/40 border border-purple-500/20 hover:border-purple-500/40 transition-colors"
                  >
                    <p className="font-bold text-sm text-foreground">{engine.name}</p>
                    <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                      {engine.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Capabilities */}
            <div className="space-y-2 pt-1">
              <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
                Technical Capabilities
              </p>
              <div className="flex flex-wrap gap-2">
                {DATA.creative.gameDevelopment.capabilities.map((cap) => (
                  <span
                    key={cap}
                    className="text-xs font-medium bg-purple-500/10 text-purple-700 dark:text-purple-300 border border-purple-500/20 px-3 py-1 rounded-full"
                  >
                    {cap}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* 3. Cinematography & Color Grading (2 Column Grid for perfect visual balance) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Cinematography */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="group relative overflow-hidden rounded-2xl border border-purple-500/20 bg-gradient-to-br from-purple-500/[0.04] via-card to-card/90 p-6 shadow-sm hover:border-purple-500/50 hover:shadow-[0_0_25px_-5px_rgba(168,85,247,0.18)] transition-all duration-300 flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-500 border border-purple-500/20">
                  <Camera className="size-5" />
                </div>
                <div>
                  <h3 className="font-bold text-base text-foreground group-hover:text-purple-500 transition-colors">
                    {DATA.creative.cinematography.title}
                  </h3>
                  <p className="text-xs text-muted-foreground font-mono mt-0.5">
                    {DATA.creative.cinematography.period}
                  </p>
                </div>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed">
                {DATA.creative.cinematography.description}
              </p>
            </div>

            <div className="space-y-2 pt-4 border-t border-border/40">
              <div className="flex flex-wrap gap-1.5">
                {DATA.creative.cinematography.capabilities.map((cap) => (
                  <span
                    key={cap}
                    className="text-[11px] font-medium bg-purple-500/10 text-purple-700 dark:text-purple-300 border border-purple-500/20 px-2.5 py-0.5 rounded-full"
                  >
                    {cap}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Color Grading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.35 }}
            className="group relative overflow-hidden rounded-2xl border border-purple-500/20 bg-gradient-to-br from-purple-500/[0.04] via-card to-card/90 p-6 shadow-sm hover:border-purple-500/50 hover:shadow-[0_0_25px_-5px_rgba(168,85,247,0.18)] transition-all duration-300 flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-500 border border-purple-500/20">
                    <Sliders className="size-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-foreground group-hover:text-purple-500 transition-colors">
                      {DATA.creative.colorGrading.title}
                    </h3>
                    <p className="text-xs text-muted-foreground font-mono mt-0.5">
                      {DATA.creative.colorGrading.period}
                    </p>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-purple-500/15 text-purple-600 dark:text-purple-400 border border-purple-500/30">
                  {DATA.creative.colorGrading.software}
                </span>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed">
                {DATA.creative.colorGrading.description}
              </p>
            </div>

            <div className="space-y-2 pt-4 border-t border-border/40">
              <div className="flex flex-wrap gap-1.5">
                {DATA.creative.colorGrading.capabilities.map((cap) => (
                  <span
                    key={cap}
                    className="text-[11px] font-medium bg-purple-500/10 text-purple-700 dark:text-purple-300 border border-purple-500/20 px-2.5 py-0.5 rounded-full"
                  >
                    {cap}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* 4. Graphic Design */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="group relative overflow-hidden rounded-2xl border border-purple-500/20 bg-gradient-to-br from-purple-500/[0.04] via-card to-card/90 p-6 sm:p-7 shadow-sm hover:border-purple-500/50 hover:shadow-[0_0_30px_-5px_rgba(168,85,247,0.18)] transition-all duration-300"
        >
          <div className="relative z-10 space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-500 border border-purple-500/20">
                <Palette className="size-5" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-foreground group-hover:text-purple-500 transition-colors">
                  {DATA.creative.graphicDesign.title}
                </h3>
                <p className="text-xs text-muted-foreground font-mono mt-0.5">
                  {DATA.creative.graphicDesign.period}
                </p>
              </div>
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed">
              {DATA.creative.graphicDesign.description}
            </p>

            <div className="space-y-2 pt-1">
              <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
                Expertise & Design Disciplines
              </p>
              <div className="flex flex-wrap gap-2">
                {DATA.creative.graphicDesign.capabilities.map((cap) => (
                  <span
                    key={cap}
                    className="text-xs font-medium bg-purple-500/10 text-purple-700 dark:text-purple-300 border border-purple-500/20 px-3 py-1 rounded-full"
                  >
                    {cap}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
