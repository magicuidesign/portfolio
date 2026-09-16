"use client";

import { DATA } from "@/data/resume";
import { motion } from "motion/react";
import { Brain, GraduationCap, Wrench, Globe, ArrowUpRight, CheckCircle2, Youtube, Sparkles } from "lucide-react";
import { Icons } from "@/components/icons";

export default function IntellectualSection() {
  return (
    <motion.section
      id="intellectual"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="space-y-10"
    >
      {/* Luxury Section Header */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-500 text-xs font-semibold backdrop-blur-sm">
          <Brain className="size-3.5 text-emerald-500" />
          <span>Scientific & Intellectual Dimension</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tighter bg-gradient-to-r from-foreground via-foreground to-emerald-500/80 bg-clip-text text-transparent">
          Intellectual & Academic Research
        </h2>
        <p className="text-muted-foreground max-w-[700px] text-sm sm:text-base leading-relaxed">
          Advanced research consulting, doctoral-level academic workflows, scientific report design, and public intellectual writing.
        </p>
      </div>

      <div className="space-y-6">
        {/* 1. Scientific & Academic Research Consulting */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="group relative overflow-hidden rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/[0.04] via-card to-card/90 p-6 sm:p-7 shadow-sm hover:border-emerald-500/50 hover:shadow-[0_0_30px_-5px_rgba(16,185,129,0.18)] transition-all duration-300"
        >
          <div className="absolute -top-16 -right-16 size-40 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                  <GraduationCap className="size-5" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-foreground group-hover:text-emerald-500 transition-colors">
                    {DATA.intellectual.research.title}
                  </h3>
                  <p className="text-xs text-muted-foreground font-mono mt-0.5">
                    {DATA.intellectual.research.period}
                  </p>
                </div>
              </div>
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed">
              {DATA.intellectual.research.description}
            </p>

            {/* Academic Expertise Areas */}
            <div className="space-y-2 pt-1">
              <p className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
                Expertise & Academic Levels
              </p>
              <div className="flex flex-wrap gap-2">
                {DATA.intellectual.research.expertise.map((exp) => (
                  <span
                    key={exp}
                    className="text-xs font-medium bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20 px-3 py-1 rounded-full"
                  >
                    {exp}
                  </span>
                ))}
              </div>
            </div>

            {/* Academic Note */}
            <div className="p-3.5 rounded-xl bg-emerald-500/[0.06] border-l-4 border-emerald-500 text-xs text-muted-foreground leading-relaxed">
              {DATA.intellectual.research.note}
            </div>
          </div>
        </motion.div>

        {/* 2. Public Intellectual Work (Quora & YouTube) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="group relative overflow-hidden rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/[0.04] via-card to-card/90 p-6 sm:p-7 shadow-sm hover:border-emerald-500/50 hover:shadow-[0_0_30px_-5px_rgba(16,185,129,0.18)] transition-all duration-300"
        >
          <div className="relative z-10 space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                <Globe className="size-5" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-foreground group-hover:text-emerald-500 transition-colors">
                  {DATA.intellectual.publicIntellectual.title}
                </h3>
                <p className="text-xs text-muted-foreground font-mono mt-0.5">
                  Public Thought & Philosophical Platforms
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
              {DATA.intellectual.publicIntellectual.platforms.map((platform) => (
                <motion.a
                  key={platform.name}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  className="p-4 rounded-xl border border-emerald-500/25 bg-secondary/30 hover:border-emerald-500/50 hover:bg-secondary/60 transition-all flex flex-col justify-between space-y-3 group/item"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-base text-foreground group-hover/item:text-emerald-500 transition-colors">
                        {platform.name}
                      </span>
                      <ArrowUpRight className="size-4 text-muted-foreground group-hover/item:text-emerald-500 group-hover/item:translate-x-0.5 group-hover/item:-translate-y-0.5 transition-all" />
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {platform.description}
                    </p>
                  </div>
                  <div className="pt-2 border-t border-border/40">
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20">
                      {platform.language}
                    </span>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* 3. Productivity & Academic Workflows */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="group relative overflow-hidden rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/[0.04] via-card to-card/90 p-6 sm:p-7 shadow-sm hover:border-emerald-500/50 hover:shadow-[0_0_30px_-5px_rgba(16,185,129,0.18)] transition-all duration-300"
        >
          <div className="relative z-10 space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                <Wrench className="size-5" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-foreground group-hover:text-emerald-500 transition-colors">
                  {DATA.intellectual.productivity.title}
                </h3>
                <p className="text-xs text-muted-foreground font-mono mt-0.5">
                  Institutional Documentation & Presentation Suites
                </p>
              </div>
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed">
              {DATA.intellectual.productivity.description}
            </p>

            <div className="space-y-2 pt-1">
              <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
                Tools & Document Engineering
              </p>
              <div className="flex flex-wrap gap-2">
                {DATA.intellectual.productivity.tools.map((tool) => (
                  <span
                    key={tool}
                    className="text-xs font-medium bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20 px-3 py-1 rounded-full"
                  >
                    {tool}
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
