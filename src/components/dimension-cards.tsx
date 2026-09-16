"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

// 3D Metallic Cobalt/Cyan Precision Gear & Core
function Gear3DIcon() {
  return (
    <svg
      viewBox="0 0 120 120"
      className="size-20 drop-shadow-[0_12px_24px_rgba(14,165,233,0.35)] transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="gearBase" x1="20" y1="20" x2="100" y2="100" gradientUnits="userSpaceOnUse">
          <stop stopColor="#38bdf8" />
          <stop offset="0.4" stopColor="#0284c7" />
          <stop offset="0.85" stopColor="#0369a1" />
          <stop offset="1" stopColor="#0c4a6e" />
        </linearGradient>
        <linearGradient id="gearRim" x1="60" y1="15" x2="60" y2="105" gradientUnits="userSpaceOnUse">
          <stop stopColor="#bae6fd" stopOpacity="0.8" />
          <stop offset="0.5" stopColor="#0284c7" stopOpacity="0.2" />
          <stop offset="1" stopColor="#082f49" />
        </linearGradient>
        <linearGradient id="coreGlow" x1="45" y1="45" x2="75" y2="75" gradientUnits="userSpaceOnUse">
          <stop stopColor="#e0f2fe" />
          <stop offset="0.5" stopColor="#38bdf8" />
          <stop offset="1" stopColor="#0369a1" />
        </linearGradient>
        <radialGradient id="specularGear" cx="45" cy="40" r="35" gradientUnits="userSpaceOnUse">
          <stop stopColor="#ffffff" stopOpacity="0.75" />
          <stop offset="0.4" stopColor="#38bdf8" stopOpacity="0.2" />
          <stop offset="1" stopColor="#0284c7" stopOpacity="0" />
        </radialGradient>
        <filter id="gearShadow" x="10" y="10" width="100" height="100" filterUnits="userSpaceOnUse">
          <feDropShadow dx="0" dy="8" stdDeviation="6" floodColor="#0284c7" floodOpacity="0.45" />
        </filter>
      </defs>

      {/* Outer 3D Extrusion Shadow */}
      <path
        d="M52 14h16l3 10 10 4 8-7 12 10-5 11 6 8 11 2v16l-11 2-6 8 5 11-12 10-8-7-10 4-3 10H52l-3-10-10-4-8 7-12-10 5-11-6-8-11-2V58l11-2 6-8-5-11 12-10 8 7 10-4 3-10z"
        fill="#082f49"
        transform="translate(0, 5)"
        opacity="0.7"
      />

      {/* Main 3D Beveled Body */}
      <path
        d="M52 14h16l3 10 10 4 8-7 12 10-5 11 6 8 11 2v16l-11 2-6 8 5 11-12 10-8-7-10 4-3 10H52l-3-10-10-4-8 7-12-10 5-11-6-8-11-2V58l11-2 6-8-5-11 12-10 8 7 10-4 3-10z"
        fill="url(#gearBase)"
        stroke="url(#gearRim)"
        strokeWidth="2"
      />

      {/* Specular Highlight Overlay */}
      <path
        d="M52 14h16l3 10 10 4 8-7 12 10-5 11 6 8 11 2v16l-11 2-6 8 5 11-12 10-8-7-10 4-3 10H52l-3-10-10-4-8 7-12-10 5-11-6-8-11-2V58l11-2 6-8-5-11 12-10 8 7 10-4 3-10z"
        fill="url(#specularGear)"
      />

      {/* Inner Central Cylinder */}
      <circle cx="60" cy="60" r="24" fill="#0c4a6e" stroke="#38bdf8" strokeWidth="2.5" />
      <circle cx="60" cy="60" r="15" fill="url(#coreGlow)" />
      <circle cx="56" cy="55" r="5" fill="#ffffff" opacity="0.8" />
    </svg>
  );
}

// 3D Glossy Magenta/Crimson Sphere & Studio Prism
function Sphere3DIcon() {
  return (
    <svg
      viewBox="0 0 120 120"
      className="size-20 drop-shadow-[0_12px_24px_rgba(225,29,72,0.35)] transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient id="sphereGrad" cx="42" cy="40" r="45" gradientUnits="userSpaceOnUse">
          <stop stopColor="#fda4af" />
          <stop offset="0.25" stopColor="#f43f5e" />
          <stop offset="0.65" stopColor="#be123c" />
          <stop offset="0.95" stopColor="#4c0519" />
        </radialGradient>
        <linearGradient id="orbitalRing" x1="15" y1="55" x2="105" y2="65" gradientUnits="userSpaceOnUse">
          <stop stopColor="#f43f5e" stopOpacity="0.1" />
          <stop offset="0.5" stopColor="#fecdd3" stopOpacity="0.95" />
          <stop offset="1" stopColor="#be123c" stopOpacity="0.2" />
        </linearGradient>
        <radialGradient id="lensSpecular" cx="42" cy="38" r="18" gradientUnits="userSpaceOnUse">
          <stop stopColor="#ffffff" stopOpacity="0.95" />
          <stop offset="0.45" stopColor="#fecdd3" stopOpacity="0.4" />
          <stop offset="1" stopColor="#f43f5e" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Ambient Drop Shadow */}
      <ellipse cx="60" cy="98" rx="34" ry="10" fill="#4c0519" opacity="0.6" filter="blur(4px)" />

      {/* 3D Orb Sphere Body */}
      <circle cx="60" cy="58" r="36" fill="url(#sphereGrad)" />

      {/* Orbiting Glass Halo Ring */}
      <ellipse
        cx="60"
        cy="60"
        rx="48"
        ry="18"
        transform="rotate(-24 60 60)"
        stroke="url(#orbitalRing)"
        strokeWidth="3.5"
        strokeLinecap="round"
      />

      {/* Camera / Stylus Lens Accent */}
      <circle cx="60" cy="58" r="20" fill="none" stroke="#ffe4e6" strokeWidth="1.5" opacity="0.5" />
      <circle cx="60" cy="58" r="10" fill="#4c0519" opacity="0.4" />

      {/* Glossy Specular Light Reflection */}
      <ellipse cx="46" cy="44" rx="14" ry="8" transform="rotate(-30 46 44)" fill="url(#lensSpecular)" />
      <circle cx="42" cy="38" r="3.5" fill="#ffffff" />
    </svg>
  );
}

// 3D Luminous Amethyst/Violet Lightbulb & Neural Prism
function Lightbulb3DIcon() {
  return (
    <svg
      viewBox="0 0 120 120"
      className="size-20 drop-shadow-[0_12px_24px_rgba(168,85,247,0.35)] transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient id="bulbGlass" cx="60" cy="42" r="35" gradientUnits="userSpaceOnUse">
          <stop stopColor="#f3e8ff" />
          <stop offset="0.3" stopColor="#c084fc" stopOpacity="0.9" />
          <stop offset="0.75" stopColor="#7e22ce" stopOpacity="0.8" />
          <stop offset="1" stopColor="#3b0764" />
        </radialGradient>
        <linearGradient id="filamentGlow" x1="60" y1="28" x2="60" y2="58" gradientUnits="userSpaceOnUse">
          <stop stopColor="#ffffff" />
          <stop offset="0.5" stopColor="#e9d5ff" />
          <stop offset="1" stopColor="#a855f7" />
        </linearGradient>
        <linearGradient id="baseMetal" x1="48" y1="78" x2="72" y2="98" gradientUnits="userSpaceOnUse">
          <stop stopColor="#6b21a8" />
          <stop offset="0.5" stopColor="#d8b4fe" />
          <stop offset="1" stopColor="#3b0764" />
        </linearGradient>
      </defs>

      {/* Outer Radiance Glow */}
      <circle cx="60" cy="48" r="42" fill="#a855f7" opacity="0.15" filter="blur(10px)" />

      {/* Main Glass Bulb 3D Contour */}
      <path
        d="M60 16C42 16 32 30 32 46c0 14 8 22 14 30h28c6-8 14-16 14-30 0-16-10-30-28-30z"
        fill="url(#bulbGlass)"
        stroke="#e9d5ff"
        strokeWidth="1.5"
      />

      {/* Glowing Filament Neural Node */}
      <path
        d="M50 56V42c0-5.5 4.5-10 10-10s10 4.5 10 10v14M54 44h12"
        stroke="url(#filamentGlow)"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <circle cx="60" cy="32" r="4" fill="#ffffff" />

      {/* Screw Thread Base */}
      <rect x="46" y="78" width="28" height="5" rx="2.5" fill="url(#baseMetal)" />
      <rect x="48" y="85" width="24" height="5" rx="2.5" fill="url(#baseMetal)" />
      <path d="M52 92h16c0 4-3.5 7-8 7s-8-3-8-7z" fill="#2e1065" />

      {/* Specular Rim Light */}
      <path
        d="M40 32c4-10 12-13 20-13"
        stroke="#ffffff"
        strokeWidth="2.5"
        strokeLinecap="round"
        opacity="0.85"
      />
    </svg>
  );
}

// 3D Illuminated Royal Golden Open Book & Manuscript
function Book3DIcon() {
  return (
    <svg
      viewBox="0 0 120 120"
      className="size-20 drop-shadow-[0_12px_24px_rgba(245,158,11,0.35)] transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="bookCover" x1="20" y1="40" x2="100" y2="85" gradientUnits="userSpaceOnUse">
          <stop stopColor="#fef3c7" />
          <stop offset="0.3" stopColor="#f59e0b" />
          <stop offset="0.7" stopColor="#b45309" />
          <stop offset="1" stopColor="#78350f" />
        </linearGradient>
        <linearGradient id="pageGradLeft" x1="30" y1="35" x2="58" y2="75" gradientUnits="userSpaceOnUse">
          <stop stopColor="#fffbeb" />
          <stop offset="0.8" stopColor="#fef3c7" />
          <stop offset="1" stopColor="#fde68a" />
        </linearGradient>
        <linearGradient id="pageGradRight" x1="90" y1="35" x2="62" y2="75" gradientUnits="userSpaceOnUse">
          <stop stopColor="#fffbeb" />
          <stop offset="0.8" stopColor="#fef3c7" />
          <stop offset="1" stopColor="#fde68a" />
        </linearGradient>
        <radialGradient id="spineShadow" cx="60" cy="65" r="25" gradientUnits="userSpaceOnUse">
          <stop stopColor="#78350f" stopOpacity="0.8" />
          <stop offset="1" stopColor="#b45309" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* 3D Drop Shadow */}
      <ellipse cx="60" cy="94" rx="42" ry="8" fill="#78350f" opacity="0.45" filter="blur(5px)" />

      {/* Leather Spine & Cover Backing */}
      <path
        d="M20 74c15-4 35-1 40 8 5-9 25-12 40-8v-38c-15-4-35-1-40 8-5-9-25-12-40-8v38z"
        fill="url(#bookCover)"
        stroke="#b45309"
        strokeWidth="2"
      />

      {/* Left Page Leaf */}
      <path
        d="M24 70c14-4 32-1 36 7V39c-4-8-22-11-36-7v38z"
        fill="url(#pageGradLeft)"
        stroke="#fde68a"
        strokeWidth="1.2"
      />
      {/* Calligraphy Lines on Left Page */}
      <path d="M30 46h18M30 52h22M30 58h16M30 64h20" stroke="#b45309" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />

      {/* Right Page Leaf */}
      <path
        d="M96 70c-14-4-32-1-36 7V39c4-8 22-11 36-7v38z"
        fill="url(#pageGradRight)"
        stroke="#fde68a"
        strokeWidth="1.2"
      />
      {/* Calligraphy Lines on Right Page */}
      <path d="M72 46h18M68 52h22M74 58h16M70 64h20" stroke="#b45309" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />

      {/* Book Central Spine Shadow & Gold Ribbon */}
      <path d="M60 40v37" stroke="url(#spineShadow)" strokeWidth="3" />
      <path d="M60 38c0 12 3 24 6 36l-6-3-6 3c3-12 6-24 6-36z" fill="#f59e0b" stroke="#78350f" strokeWidth="0.8" />
      <circle cx="60" cy="38" r="2.5" fill="#fef08a" />
    </svg>
  );
}

interface DimensionCardProps {
  title: string;
  subtitle: string;
  href: string;
  accentColor: "sky" | "rose" | "purple" | "amber";
  icon: React.ReactNode;
  delay?: number;
}

function DimensionCard3D({
  title,
  subtitle,
  href,
  accentColor,
  icon,
  delay = 0,
}: DimensionCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 300 };
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [12, -12]), springConfig);
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-12, 12]), springConfig);

  const colorStyles = {
    sky: {
      border: "hover:border-sky-500/40",
      glow: "from-sky-500/15 via-sky-500/5 to-transparent",
      badge: "text-sky-400 bg-sky-500/10 border-sky-500/20",
      ambient: "group-hover:shadow-[0_20px_50px_rgba(14,165,233,0.18)]",
    },
    rose: {
      border: "hover:border-rose-500/40",
      glow: "from-rose-500/15 via-rose-500/5 to-transparent",
      badge: "text-rose-400 bg-rose-500/10 border-rose-500/20",
      ambient: "group-hover:shadow-[0_20px_50px_rgba(244,63,94,0.18)]",
    },
    purple: {
      border: "hover:border-purple-500/40",
      glow: "from-purple-500/15 via-purple-500/5 to-transparent",
      badge: "text-purple-400 bg-purple-500/10 border-purple-500/20",
      ambient: "group-hover:shadow-[0_20px_50px_rgba(168,85,247,0.18)]",
    },
    amber: {
      border: "hover:border-amber-500/40",
      glow: "from-amber-500/15 via-amber-500/5 to-transparent",
      badge: "text-amber-400 bg-amber-500/10 border-amber-500/20",
      ambient: "group-hover:shadow-[0_20px_50px_rgba(245,158,11,0.18)]",
    },
  }[accentColor];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const clientX = e.clientX - rect.left;
    const clientY = e.clientY - rect.top;

    const normalizedX = clientX / rect.width - 0.5;
    const normalizedY = clientY / rect.height - 0.5;

    x.set(normalizedX);
    y.set(normalizedY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="perspective-[1000px] w-full"
    >
      <Link href={href}>
        <motion.div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            rotateX,
            rotateY,
            transformStyle: "preserve-3d",
          }}
          whileHover={{ scale: 1.03 }}
          transition={{ type: "spring", stiffness: 350, damping: 25 }}
          className={cn(
            "group relative flex flex-col justify-between h-full p-4 sm:p-5 rounded-2xl",
            "bg-card/70 dark:bg-[#111319]/80 backdrop-blur-xl border border-border/80 dark:border-white/[0.08]",
            "transition-all duration-300 cursor-pointer overflow-hidden",
            colorStyles.border,
            colorStyles.ambient
          )}
        >
          {/* Subtle Ambient Radial Glow on Hover */}
          <div
            className={cn(
              "absolute inset-0 bg-gradient-to-b opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none",
              colorStyles.glow
            )}
          />

          {/* Top 3D Floating Icon with Z-depth */}
          <div
            style={{ transform: "translateZ(30px)" }}
            className="flex items-center justify-center pt-2 pb-3 w-full"
          >
            {icon}
          </div>

          {/* Card Info Content */}
          <div
            style={{ transform: "translateZ(20px)" }}
            className="flex flex-col gap-2 relative z-10"
          >
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-base sm:text-lg text-foreground tracking-tight group-hover:text-primary transition-colors flex items-center gap-1.5">
                {title}
              </h3>
              <ArrowUpRight className="size-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>

            <p className="text-xs sm:text-[13px] text-muted-foreground leading-relaxed line-clamp-3 text-pretty">
              {subtitle}
            </p>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
}

export default function DimensionCards() {
  const cards: DimensionCardProps[] = [
    {
      title: "Engineering",
      subtitle:
        "Senior Full-Stack & Systems Engineer building high-throughput microservices, distributed architectures, and fault-tolerant APIs.",
      href: "#engineering",
      accentColor: "sky",
      icon: <Gear3DIcon />,
      delay: 0.1,
    },
    {
      title: "Creative",
      subtitle:
        "3D game development across Unreal & Unity, motion graphics with 500+ commercial projects, and cinematic color grading.",
      href: "#creative",
      accentColor: "rose",
      icon: <Sphere3DIcon />,
      delay: 0.2,
    },
    {
      title: "Intellectual",
      subtitle:
        "Academic & scientific research consulting, high-velocity productivity tooling, and public intellectual contributions.",
      href: "#intellectual",
      accentColor: "purple",
      icon: <Lightbulb3DIcon />,
      delay: 0.3,
    },
    {
      title: "Literature",
      subtitle:
        "1,300-verse Arabic epic poem, psychological novels (صدى العدم), classical Mu'allaqat commentaries, and comprehensive Diwan.",
      href: "#literature",
      accentColor: "amber",
      icon: <Book3DIcon />,
      delay: 0.4,
    },
  ];

  return (
    <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 my-4">
      {cards.map((card) => (
        <DimensionCard3D key={card.title} {...card} />
      ))}
    </div>
  );
}

