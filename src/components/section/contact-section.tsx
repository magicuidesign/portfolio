"use client";

import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import Link from "next/link";
import { DATA } from "@/data/resume";
import { Mail, ArrowUpRight, Copy, Check, Sparkles } from "lucide-react";
import { Icons } from "@/components/icons";
import { cn } from "@/lib/utils";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";

export default function ContactSection() {
  const cardRef = useRef<HTMLDivElement>(null);
  const [copied, setCopied] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 22, stiffness: 280 };
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

  const copyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(DATA.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const channels = [
    {
      title: "Send Email",
      subtitle: DATA.contact.email,
      href: `mailto:${DATA.contact.email}`,
      icon: <Mail className="size-4 text-rose-400" />,
      color: "hover:border-rose-500/40 hover:shadow-[0_8px_30px_rgba(244,63,94,0.18)]",
      badgeColor: "bg-rose-500/10 border-rose-500/20 text-rose-400",
      glowBg: "from-rose-500/10 to-transparent",
      action: (
        <button
          onClick={copyEmail}
          title="Copy email address"
          className="p-1 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
        >
          {copied ? <Check className="size-3.5 text-emerald-400" /> : <Copy className="size-3.5" />}
        </button>
      ),
    },
    {
      title: "LinkedIn",
      subtitle: "Professional Network & Experience",
      href: DATA.contact.social.LinkedIn.url,
      icon: <Icons.linkedin className="size-4 fill-sky-400 text-sky-400" />,
      color: "hover:border-sky-500/40 hover:shadow-[0_8px_30px_rgba(14,165,233,0.18)]",
      badgeColor: "bg-sky-500/10 border-sky-500/20 text-sky-400",
      glowBg: "from-sky-500/10 to-transparent",
    },
    {
      title: "Direct Message",
      subtitle: "Real-time conversation on X",
      href: DATA.contact.social.X.url,
      icon: <Icons.x className="size-3.5 fill-foreground" />,
      color: "hover:border-white/30 hover:shadow-[0_8px_30px_rgba(255,255,255,0.12)]",
      badgeColor: "bg-white/10 border-white/20 text-foreground",
      glowBg: "from-white/10 to-transparent",
    },
    {
      title: "WhatsApp",
      subtitle: "Direct encrypted chat",
      href: DATA.contact.tel
        ? `https://wa.me/${DATA.contact.tel.replace(/[^0-9]/g, "")}`
        : "#",
      icon: <Icons.whatsapp className="size-4" />,
      color: "hover:border-emerald-500/40 hover:shadow-[0_8px_30px_rgba(16,185,129,0.18)]",
      badgeColor: "bg-emerald-500/10 border-emerald-500/20 text-emerald-400",
      glowBg: "from-emerald-500/10 to-transparent",
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
        whileHover={{ scale: 1.01 }}
        transition={{ type: "spring", stiffness: 350, damping: 25 }}
        className={cn(
          "relative overflow-hidden rounded-3xl p-6 sm:p-10",
          "bg-card/75 dark:bg-[#0e1017]/90 backdrop-blur-2xl border border-border/80 dark:border-white/[0.09]",
          "shadow-2xl dark:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)]"
        )}
      >
        {/* Subtle Ambient Flickering Grid Header */}
        <div className="absolute inset-0 top-0 left-0 right-0 h-40 rounded-3xl overflow-hidden pointer-events-none opacity-25">
          <FlickeringGrid
            className="h-full w-full"
            squareSize={2}
            gridGap={2}
            style={{
              maskImage: "linear-gradient(to bottom, black, transparent)",
              WebkitMaskImage: "linear-gradient(to bottom, black, transparent)",
            }}
          />
        </div>

        {/* Ambient Top Light Beam */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent" />
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-48 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center gap-5 text-center">
          {/* Executive Availability Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-medium bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 backdrop-blur-md shadow-xs">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span>Available for Strategic Projects & Consulting</span>
          </div>

          {/* Heading & Subtitle */}
          <div className="flex flex-col gap-2 max-w-xl">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight bg-gradient-to-b from-foreground via-foreground to-foreground/75 bg-clip-text text-transparent">
              Get in Touch
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed text-pretty">
              Have an engineering inquiry, distributed systems architecture consultation, creative production, or literary collaboration? Feel free to reach out directly through any of the channels below.
            </p>
          </div>

          {/* 4 Interactive 3D Channel Cards */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-4">
            {channels.map((ch, idx) => {
              const isExternal = ch.href.startsWith("http");
              return (
                <motion.div
                  key={ch.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: idx * 0.06 }}
                >
                  <Link
                    href={ch.href}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                    className={cn(
                      "group relative flex items-center justify-between p-4 rounded-2xl border transition-all duration-300",
                      "bg-muted/25 dark:bg-white/[0.03] hover:bg-muted/50 dark:hover:bg-white/[0.06]",
                      "border-border/60 dark:border-white/[0.07] overflow-hidden",
                      ch.color
                    )}
                  >
                    {/* Hover Ambient Gradient Flare */}
                    <div
                      className={cn(
                        "absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none",
                        ch.glowBg
                      )}
                    />

                    <div className="flex items-center gap-3.5 min-w-0 relative z-10">
                      <div
                        className={cn(
                          "size-10 rounded-xl border flex items-center justify-center flex-none transition-transform duration-300 group-hover:scale-110",
                          ch.badgeColor
                        )}
                      >
                        {ch.icon}
                      </div>
                      <div className="flex flex-col text-left min-w-0">
                        <span className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors tracking-tight">
                          {ch.title}
                        </span>
                        <span className="text-xs text-muted-foreground truncate max-w-[180px] sm:max-w-[190px]">
                          {ch.subtitle}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 relative z-10 pl-2">
                      {ch.action}
                      <ArrowUpRight className="size-4 text-muted-foreground opacity-60 group-hover:opacity-100 group-hover:text-foreground transition-all duration-300 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
