import Link from "next/link";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";

const hoverStyles: Record<string, string> = {
  GitHub: "hover:bg-neutral-900 hover:text-white dark:hover:bg-white dark:hover:text-black hover:border-neutral-900 dark:hover:border-white",
  LinkedIn: "hover:bg-[#0077b5] hover:text-white hover:border-[#0077b5]",
  X: "hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black hover:border-black dark:hover:border-white",
  Monkeytype: "hover:bg-[#e2b714]/15 hover:text-[#e2b714] hover:border-[#e2b714]",
  "Send Email": "hover:bg-primary hover:text-background hover:border-primary",
};

export default function ContactSection() {
  return (
    <div className="relative rounded-xl border p-6 sm:p-10">
      <div className="absolute -top-4 border bg-primary z-10 rounded-xl px-4 py-1 left-1/2 -translate-x-1/2">
        <span className="text-background text-sm font-medium">Contact</span>
      </div>
      <div className="absolute inset-0 top-0 left-0 right-0 h-1/2 rounded-xl overflow-hidden">
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
      <div className="relative flex flex-col items-center gap-6 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
          Let&apos;s Connect
        </h2>
        <p className="mx-auto max-w-xl text-muted-foreground text-lg sm:text-xl text-balance leading-relaxed">
          I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          Whether you have a specific question or just want to say hi, my inbox is always open.
        </p>

        <div className="flex items-center gap-4 mt-2">
          {Object.entries(DATA.contact.social).map(([name, social]) => {
            const hoverStyle = hoverStyles[social.name] || "hover:bg-primary hover:text-background hover:border-primary";
            return (
              <Link
                key={name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "group relative p-3 rounded-full border bg-background transition-all duration-300 ease-in-out shadow-sm hover:shadow-md hover:-translate-y-1",
                  hoverStyle
                )}
                aria-label={social.name}
              >
                <social.icon className="size-6 transition-transform duration-300 group-hover:scale-110" />
                <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 bg-foreground text-background text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-20 shadow-sm">
                  {social.name === "Send Email" ? "Email" : social.name}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
