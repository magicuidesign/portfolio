/* eslint-disable @next/next/no-img-element */
"use client";
import type { StaticImageData } from "next/image";
import Image from "next/image";
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

function LogoImage({ src, alt }: { src: string | StaticImageData; alt: string }) {
  const [imageError, setImageError] = useState(false);

  if (!src || imageError) {
    return (
      <div className="size-8 md:size-10 p-1 border rounded-full shadow ring-2 ring-border bg-muted flex-none" />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={40}
      height={40}
      className="size-8 md:size-10 p-1 border rounded-full shadow ring-2 ring-border object-contain flex-none"
      onError={() => setImageError(true)}
    />
  );
}

export default function InternshipSection() {
  return (
    <Accordion type="single" collapsible className="w-full grid gap-6">
      {DATA.internships.map((internship) => (
        <AccordionItem
          key={internship.company}
          value={internship.company}
          className="w-full border-b-0 grid gap-2"
        >
          <AccordionTrigger className="hover:no-underline p-0 cursor-pointer transition-colors rounded-none group [&>svg]:hidden">
            <div className="flex w-full flex-col gap-3 text-left sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-x-3 flex-1 min-w-0">
                <LogoImage src={internship.logoUrl} alt={internship.company} />
                <div className="flex-1 min-w-0 gap-0.5 flex flex-col">
                  <div className="font-semibold leading-none flex items-center gap-2">
                    {internship.company}
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
                    {internship.title}
                  </div>
                </div>
              </div>
              <div className="pl-11 text-xs tabular-nums text-muted-foreground sm:pl-0 sm:text-right">
                <span>
                  {internship.start} - {internship.end ?? "Present"}
                </span>
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent className="p-0 pl-11 text-xs text-muted-foreground sm:pl-13 sm:text-sm">
            {internship.description}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
