"use client";

/**
 * Top navigation bar.
 * Marked "use client" because it uses usePathname to highlight the active route.
 *
 * Links are driven by an array — adding a new section is one line in `links`.
 * Active state: if the current path starts with the link's href, it's highlighted.
 */

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./theme-toggle";

const links = [
  { href: "/blog", label: "Blog" },
  { href: "/dev", label: "Dev" },
];

export function Nav() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md">
      <nav className="mx-auto max-w-2xl px-6 py-6 flex items-center justify-between">
        <Link href="/" className="text-sm font-semibold text-foreground">
          Sam Gutentag
        </Link>

        <div className="flex items-center gap-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm transition-colors ${
                pathname.startsWith(link.href)
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
