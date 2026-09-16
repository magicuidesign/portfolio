"use client";

import { DATA } from "@/data/resume";
import { motion } from "motion/react";
import { ShieldCheck, ArrowUpRight, Terminal, Lock, MapPin, Calendar, Sparkles } from "lucide-react";
import Link from "next/link";

export default function SecuritySection() {
  const items = DATA.securityAndResearch;

  return (
    <motion.section
      id="security"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="space-y-10"
    >
      {/* Luxury Section Header */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-rose-500/30 bg-rose-500/10 text-rose-500 text-xs font-semibold backdrop-blur-sm">
          <Terminal className="size-3.5 text-rose-500" />
          <span>Security & Research Dimension</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tighter bg-gradient-to-r from-foreground via-foreground to-rose-500/80 bg-clip-text text-transparent">
          Security & Vulnerability Research
        </h2>
        <p className="text-muted-foreground max-w-[700px] text-sm sm:text-base leading-relaxed">
          Independent security assessments, exploit analysis, cloud audits, and responsible vulnerability disclosure across distributed enterprise systems.
        </p>
      </div>

      {/* Luxury Cyber Cards List */}
      <div className="space-y-5">
        {items.map((item, index) => {
          const isOngoing = item.dates.includes("Present");
          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="group relative overflow-hidden rounded-2xl border border-rose-500/20 bg-gradient-to-br from-rose-500/[0.04] via-card to-card/90 p-6 sm:p-7 shadow-sm hover:border-rose-500/50 hover:shadow-[0_0_30px_-5px_rgba(244,63,94,0.18)] transition-all duration-300"
            >
              {/* Subtle ambient light corner glow */}
              <div className="absolute -top-12 -right-12 size-36 rounded-full bg-rose-500/[0.08] blur-2xl pointer-events-none group-hover:bg-rose-500/[0.15] transition-all" />

              <div className="relative z-10 space-y-4">
                {/* Top Row: Icon + Title on Left, Location & Dates on Right */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-rose-500/10 text-rose-500 border border-rose-500/20 shrink-0 group-hover:scale-105 transition-transform">
                      {index % 2 === 0 ? (
                        <ShieldCheck className="size-5" />
                      ) : (
                        <Lock className="size-5" />
                      )}
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-foreground group-hover:text-rose-500 transition-colors">
                        {item.title}
                      </h3>
                      {item.location && (
                        <div className="flex items-center gap-1.5 text-xs text-muted-foreground mt-0.5">
                          <MapPin className="size-3 text-rose-500/70" />
                          <span>{item.location}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Dates & Status Badge */}
                  <div className="flex items-center gap-2 self-start sm:self-center">
                    {isOngoing && (
                      <span className="flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30">
                        <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        Active
                      </span>
                    )}
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-secondary text-secondary-foreground border border-border/60 tabular-nums">
                      {item.dates}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed pl-0 sm:pl-1">
                  {item.description}
                </p>

                {/* Links */}
                {item.links && item.links.length > 0 && (
                  <div className="flex flex-wrap gap-2 pt-2 border-t border-border/40">
                    {item.links.map((link, lIdx) => (
                      <Link
                        key={lIdx}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-500/30 hover:bg-rose-500 hover:text-white transition-all shadow-xs group/link"
                      >
                        {link.icon && <link.icon className="size-3.5" />}
                        <span>{link.title}</span>
                        <ArrowUpRight className="size-3.5 opacity-70 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
}
