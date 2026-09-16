/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { DATA } from "@/data/resume";
import { ChevronDown, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";

function LogoImage({ src, alt }: { src: string; alt: string }) {
  const [imageError, setImageError] = useState(false);

  if (!src || imageError) {
    return (
      <div className="size-9 md:size-11 p-1 border rounded-full shadow-xs ring-2 ring-border/50 bg-muted/50 flex-none" />
    );
  }

  return (
    <div className="relative group/logo flex-none">
      <div className="absolute -inset-1 rounded-full bg-primary/20 blur-sm opacity-0 group-hover/logo:opacity-100 transition-opacity duration-300 pointer-events-none" />
      <motion.img
        whileHover={{ scale: 1.18, rotate: 6 }}
        transition={{ type: "spring", stiffness: 400, damping: 20 }}
        src={src}
        alt={alt}
        className="size-9 md:size-11 p-0.5 border border-border/80 dark:border-white/15 rounded-full shadow-md overflow-hidden object-contain flex-none transition-all duration-300 group-hover/logo:ring-2 group-hover/logo:ring-primary/50 group-hover/logo:shadow-[0_0_20px_rgba(56,189,248,0.35)] bg-card dark:bg-[#12141c]"
        onError={() => setImageError(true)}
      />
    </div>
  );
}

export default function WorkSection() {
  return (
    <Accordion type="single" collapsible className="w-full grid gap-5">
      {DATA.work.map((work, idx) => (
        <motion.div
          key={work.company}
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: idx * 0.05 }}
        >
          <AccordionItem
            value={work.company}
            className="w-full border-b-0 rounded-xl p-2 transition-colors hover:bg-muted/30"
          >
            <AccordionTrigger className="hover:no-underline p-0 cursor-pointer transition-colors rounded-none group [&>svg]:hidden">
              <div className="flex items-center gap-x-3 justify-between w-full text-left">
                <div className="flex items-center gap-x-3 flex-1 min-w-0">
                  <LogoImage src={work.logoUrl} alt={work.company} />
                  <div className="flex-1 min-w-0 gap-0.5 flex flex-col">
                    <div className="font-semibold leading-none flex items-center gap-2 text-foreground group-hover:text-primary transition-colors">
                      {work.company}
                      <span className="relative inline-flex items-center w-3.5 h-3.5">
                        <ChevronRight
                          className={cn(
                            "absolute h-3.5 w-3.5 shrink-0 text-muted-foreground stroke-2 transition-all duration-300 ease-out",
                            "translate-x-0 opacity-0",
                            "group-hover:translate-x-1 group-hover:opacity-100",
                            "group-data-[state=open]:opacity-0 group-data-[state=open]:translate-x-0"
                          )}
                        />
                        <ChevronDown
                          className={cn(
                            "absolute h-3.5 w-3.5 shrink-0 text-muted-foreground stroke-2 transition-all duration-200",
                            "opacity-0 rotate-0",
                            "group-data-[state=open]:opacity-100 group-data-[state=open]:rotate-180"
                          )}
                        />
                      </span>
                    </div>
                    <div className="font-sans text-sm text-muted-foreground">
                      {work.title}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-xs tabular-nums text-muted-foreground text-right flex-none font-mono">
                  <span>
                    {work.start} - {work.end ?? "Present"}
                  </span>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="p-0 ml-11 md:ml-13 mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
              {work.description}
            </AccordionContent>
          </AccordionItem>
        </motion.div>
      ))}
    </Accordion>
  );
}
