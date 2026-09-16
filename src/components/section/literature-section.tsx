"use client";

import { DATA } from "@/data/resume";
import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  BookOpen,
  Feather,
  Sparkles,
  Scroll,
  Layers,
  ArrowUpRight,
  BookmarkCheck,
  Flame,
} from "lucide-react";
import Link from "next/link";

export default function LiteratureSection() {
  const literature = DATA.literature;
  if (!literature) return null;

  return (
    <motion.section
      id="literature"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="space-y-10"
    >
      {/* Luxury Section Header */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/40 bg-amber-500/10 text-amber-500 text-xs font-semibold backdrop-blur-sm">
          <Feather className="size-3.5 text-amber-500" />
          <span>Literature & Classical Poetry Dimension</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tighter bg-gradient-to-r from-foreground via-foreground to-amber-500/80 bg-clip-text text-transparent">
          الأعمال الأدبية والشعر الكلاسيكي
        </h2>
        <p className="text-muted-foreground max-w-[700px] text-sm sm:text-base leading-relaxed">
          ملحمة شعرية كبرى، روايات وجودية ممتدة، معلقات فصيحة، ودواوين فكرية كلاسيكية تجسد البلاغة والعمق الفلسفي.
        </p>
      </div>

      <div className="space-y-6">
        {/* Featured Epic Poem Card (Imperial Gold Presentation) */}
        {literature.epicPoem && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="group relative overflow-hidden rounded-2xl border-2 border-amber-500/40 bg-gradient-to-br from-amber-500/15 via-card to-amber-950/20 p-6 sm:p-8 shadow-sm hover:shadow-[0_0_45px_-5px_rgba(245,158,11,0.25)] transition-all duration-300 backdrop-blur-sm"
          >
            {/* Ambient Golden Glow */}
            <div className="absolute -top-16 -right-16 size-48 rounded-full bg-amber-500/20 blur-3xl pointer-events-none group-hover:bg-amber-500/30 transition-all" />

            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="space-y-3 max-w-xl text-right w-full" dir="rtl">
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-500/20 px-3 py-1 text-xs font-semibold text-amber-600 dark:text-amber-400 border border-amber-500/30">
                    <Flame className="size-3.5 text-amber-500" />
                    العمل الملحمي المميز • Grand Epic Poem
                  </span>
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30">
                    <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    {literature.epicPoem.status}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold font-serif tracking-tight text-foreground">
                  {literature.epicPoem.titleArabic}
                </h3>
                <p className="text-sm font-sans text-muted-foreground" dir="ltr">
                  {literature.epicPoem.titleEnglish}
                </p>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {literature.epicPoem.description}
                </p>

                <div className="pt-1 text-xs text-amber-700 dark:text-amber-300 font-medium">
                  {literature.epicPoem.focus}
                </div>
              </div>

              {/* Verses Counter Highlight (Radiant Gold) */}
              <div className="flex flex-col items-center justify-center p-6 rounded-2xl border border-amber-500/35 bg-background/90 dark:bg-card/90 shadow-md min-w-[210px] self-stretch md:self-auto text-center">
                <span className="text-4xl sm:text-5xl font-black bg-gradient-to-r from-amber-400 via-yellow-200 to-amber-500 bg-clip-text text-transparent tracking-tight">
                  {literature.epicPoem.verses.toLocaleString()}+
                </span>
                <span className="text-base font-bold text-foreground mt-1 font-serif">
                  {literature.epicPoem.versesArabic}
                </span>
                <span className="text-xs uppercase tracking-wider text-muted-foreground mt-1">
                  Verses • بيت شعري
                </span>
                <div className="mt-3 text-[11px] px-3 py-1 rounded-full bg-amber-500/15 text-amber-700 dark:text-amber-300 font-semibold border border-amber-500/25">
                  بحر الطويل / البسيط
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Novels Section */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <BookOpen className="size-5 text-amber-500" />
            <h3 className="font-bold text-xl">المشاريع الروائية • Novels</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {literature.novels.map((novel, index) => (
              <motion.div
                key={novel.titleEnglish}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl border border-amber-500/20 bg-gradient-to-br from-amber-500/[0.04] via-card to-card/90 p-6 shadow-sm hover:border-amber-500/50 hover:shadow-[0_0_25px_-5px_rgba(245,158,11,0.18)] transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-secondary text-secondary-foreground border border-border/60">
                      {novel.period}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-500/15 text-amber-700 dark:text-amber-300 border border-amber-500/30">
                      {novel.status}
                    </span>
                  </div>

                  <div className="space-y-1">
                    <div className="flex items-center justify-between" dir="rtl">
                      <h4 className="text-xl font-bold font-serif text-foreground group-hover:text-amber-500 transition-colors">
                        {novel.titleArabic}
                      </h4>
                      <span className="text-xs text-muted-foreground font-mono">
                        #{index + 1}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground">{novel.titleEnglish}</p>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {novel.description}
                  </p>
                </div>

                {/* Novel Architecture Display */}
                {"structure" in novel && novel.structure && (
                  <div className="mt-4 rounded-xl bg-secondary/40 p-3.5 text-xs border border-amber-500/20 space-y-2">
                    <div className="flex items-center gap-1.5 font-semibold text-amber-700 dark:text-amber-300">
                      <Layers className="size-3.5" />
                      <span>الهيكلية المعمارية للرواية (Architecture):</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-center pt-1" dir="rtl">
                      <div className="p-2 rounded-lg bg-background border border-amber-500/20">
                        <div className="font-bold text-foreground text-sm">
                          {novel.structure.volumes}
                        </div>
                        <div className="text-[10px] text-muted-foreground">مجلدات (Volumes)</div>
                      </div>
                      <div className="p-2 rounded-lg bg-background border border-amber-500/20">
                        <div className="font-bold text-foreground text-sm">
                          {novel.structure.partsPerVolume}
                        </div>
                        <div className="text-[10px] text-muted-foreground">أجزاء/مجلد (Parts)</div>
                      </div>
                      <div className="p-2 rounded-lg bg-background border border-amber-500/20">
                        <div className="font-bold text-foreground text-sm">
                          {novel.structure.sectionsPerPart}
                        </div>
                        <div className="text-[10px] text-muted-foreground">فصول/جزء (Sections)</div>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Poetry Collections & Mu'allaqat */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="group relative overflow-hidden rounded-2xl border border-amber-500/20 bg-gradient-to-br from-amber-500/[0.04] via-card to-card/90 p-6 sm:p-7 shadow-sm hover:border-amber-500/50 hover:shadow-[0_0_30px_-5px_rgba(245,158,11,0.18)] transition-all duration-300"
        >
          <div className="relative z-10 space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-500 border border-amber-500/20">
                <Scroll className="size-5" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-foreground group-hover:text-amber-500 transition-colors">
                  المجموعات الشعرية والمعلقات • Poetry Collections
                </h3>
                <p className="text-xs text-muted-foreground font-mono mt-0.5">
                  Classical Heritage & Diwans
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
              {/* Diwan */}
              {literature.poetry.map((p) => (
                <div
                  key={p.titleEnglish}
                  className="p-4 rounded-xl bg-secondary/40 border border-amber-500/25 flex flex-col justify-between space-y-2 hover:border-amber-500/40 transition-colors"
                >
                  <div className="flex items-center justify-between" dir="rtl">
                    <span className="font-serif font-bold text-lg text-foreground">
                      {p.titleArabic}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-amber-500/15 text-amber-700 dark:text-amber-300 border border-amber-500/30">
                      {p.type}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground">{p.titleEnglish}</p>
                </div>
              ))}

              {/* Muallaqat Collection */}
              <div className="p-4 rounded-xl bg-secondary/40 border border-amber-500/25 flex flex-col justify-between space-y-2 hover:border-amber-500/40 transition-colors">
                <div className="flex items-center justify-between" dir="rtl">
                  <span className="font-serif font-bold text-lg text-foreground">
                    المعلقات العشر والمجموعات الكبرى
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-amber-500/15 text-amber-700 dark:text-amber-300 border border-amber-500/30">
                    Classical Collection
                  </span>
                </div>
                <p className="text-xs text-muted-foreground">
                  {literature.poetryCollections.muallaqat}
                </p>
                <p className="text-[11px] text-muted-foreground/80">
                  {literature.poetryCollections.additional}
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Literary Social Channels */}
        {literature.social && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-4 pt-2"
          >
            {literature.social.map((channel) => (
              <Link
                key={channel.platform}
                href={channel.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-amber-500/30 bg-amber-500/[0.06] hover:bg-amber-500/15 hover:border-amber-500/50 text-amber-700 dark:text-amber-300 transition-all text-xs sm:text-sm font-semibold shadow-xs"
              >
                <Feather className="size-4 text-amber-500" />
                <span>
                  {channel.platform}: {channel.handle}
                </span>
                <ArrowUpRight className="size-3.5 opacity-70" />
              </Link>
            ))}
          </motion.div>
        )}
      </div>
    </motion.section>
  );
}
