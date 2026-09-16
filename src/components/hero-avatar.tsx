"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DATA } from "@/data/resume";

export default function HeroAvatar() {
  const containerRef = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 18, stiffness: 260 };
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [14, -14]), springConfig);
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-14, 14]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const clientX = e.clientX - rect.left;
    const clientY = e.clientY - rect.top;

    const normalizedX = (clientX / rect.width) - 0.5;
    const normalizedY = (clientY / rect.height) - 0.5;

    x.set(normalizedX);
    y.set(normalizedY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative flex items-center justify-center p-2 cursor-pointer perspective-[1000px] select-none"
    >
      {/* Ambient Breathing Neon Halo Aura (Matching Image 4) */}
      <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-emerald-500/30 via-teal-500/25 to-cyan-500/30 blur-xl pointer-events-none animate-pulse opacity-90" />

      {/* 3D Tilting Avatar */}
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        whileHover={{ scale: 1.06 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
        className="relative"
      >
        {/* Neon Emerald Halo Ring (Image 4 Aesthetic) */}
        <div className="p-[2.5px] rounded-full bg-gradient-to-tr from-emerald-500 via-teal-400 to-emerald-300 shadow-[0_0_28px_rgba(16,185,129,0.5)]">
          <div className="p-1 rounded-full bg-background dark:bg-[#0b0c10]">
            <Avatar className="size-24 md:size-32 rounded-full shadow-2xl overflow-hidden">
              <AvatarImage
                alt={DATA.name}
                src={DATA.avatarUrl}
                className="object-cover size-full transition-transform duration-700 hover:scale-110"
              />
              <AvatarFallback>{DATA.initials}</AvatarFallback>
            </Avatar>
          </div>
        </div>

        {/* Floating Active Pulse Indicator */}
        <div className="absolute bottom-1 right-1 flex items-center justify-center size-5 rounded-full bg-background border-2 border-background shadow-[0_0_10px_rgba(16,185,129,0.6)]">
          <span className="size-3 rounded-full bg-emerald-500 animate-pulse" />
        </div>
      </motion.div>
    </div>
  );
}

