"use client";

import { BrandLogo } from "@/components/brand-logo";
import { MenuIcon } from "@/components/menu";
import { ModeToggle } from "@/components/mode-toggle";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";



export default function Navbar() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  
  const socialLinks = Object.entries(DATA.contact.social)
    .filter(([_, social]) => social.navbar);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 h-14 w-full border-b border-border/40 bg-background/60 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-full max-w-5xl items-center justify-between px-6 sm:px-8">
        <div className="flex items-center gap-6">
          <Link
            href="/"
            className="flex items-center gap-2.5 transition-opacity hover:opacity-80"
          >
            <BrandLogo className="size-5" />
          </Link>

          
        </div>

        <div className="flex items-center gap-2">
          <div className="mx-2 hidden h-4 w-px bg-border/40 md:block" />

          <div className="hidden items-center gap-1 sm:flex">
            {socialLinks.map(([name, social]) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex size-8 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                  aria-label={name}
                >
                  <IconComponent className="size-4" />
                </a>
              );
            })}
          </div>

          <ModeToggle className="inline-flex size-8 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-accent hover:text-foreground" />

          <button
            type="button"
            className="inline-flex size-8 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-accent hover:text-foreground md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? <X className="size-4" /> : <MenuIcon className="size-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="border-b border-border/40 bg-background/95 px-6 py-6 backdrop-blur-xl md:hidden">
          <nav className="flex flex-col gap-6">
            <div className="space-y-3">
              <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Navigation
              </p>
              <div className="flex flex-col gap-2">
                {DATA.navbar.filter((item) => item.href !== "/blog").map((item) => {
                  const isActive =
                    item.href === "/"
                      ? pathname === "/"
                      : pathname.startsWith(item.href);
                  const IconComponent = item.icon;

                  return (
                    <Link
                      key={`mobile-${item.href}`}
                      href={item.href}
                      className={cn(
                        "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                        isActive
                          ? "bg-accent/50 text-foreground"
                          : "text-muted-foreground hover:bg-accent/30 hover:text-foreground"
                      )}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <IconComponent className="size-4" />
                      {item.label}
                    </Link>
                  );
                })}
              </div>
            </div>

            {isHomePage && (
              <div className="space-y-3">
                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Sections
                </p>
               
              </div>
            )}

            <div className="space-y-3">
              <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Socials
              </p>
              <div className="flex items-center gap-2 px-1">
                {Object.entries(DATA.contact.social)
                  .filter(([_, social]) => social.navbar)
                  .map(([name, social]) => {
                    const IconComponent = social.icon;
                    return (
                      <a
                        key={`mobile-social-${name}`}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex size-10 items-center justify-center rounded-md border border-border/40 bg-background transition-colors hover:bg-accent hover:text-foreground"
                        aria-label={name}
                      >
                        <IconComponent className="size-[1.125rem]" />
                      </a>
                    );
                  })}
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
