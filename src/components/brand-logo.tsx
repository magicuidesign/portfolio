import { cn } from "@/lib/utils";

type BrandLogoProps = {
  className?: string;
  title?: string;
};

/**
 * UA — Geometric Lettermark  ·  Uday Ahire
 *
 * Grid    : 48 × 48
 * Stroke  : 5.5px (consistent across both glyphs)
 * Baseline: y = 38.5
 *
 * U — built from three rects (left bar · right bar · base bridge)
 * A — built from two polygon legs + one crossbar rect
 * Both share a common baseline for visual unity.
 */
export function BrandLogo({
  className,
  title = "Uday Ahire",
}: BrandLogoProps) {
  const sw = 5.5;  // stroke width
  const r  = 2;    // corner radius

  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      role="img"
      aria-label={title}
      className={cn("size-8", className)}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* ── U ─────────────────────────────────────────────
           Left bar  : x1=1    → x2=6.5   | y=6→38.5
           Right bar : x1=15.5 → x2=21    | y=6→38.5
           Base span : x1=1    → x2=21    | y=33→38.5
           (base overlaps bottom of both bars → unified arch)
      ──────────────────────────────────────────────────── */}
      {/* U left bar */}
      <rect x="1" y="6" width={sw} height="32.5" rx={r} fill="currentColor" />
      {/* U right bar */}
      <rect x="15.5" y="6" width={sw} height="32.5" rx={r} fill="currentColor" />
      {/* U base bridge */}
      <rect x="1" y="33" width="20" height={sw} rx={r} fill="currentColor" />

      {/* ── A ─────────────────────────────────────────────
           Apex  : (34.5, 6)
           Left foot  : (26, 38.5)  right foot: (43, 38.5)
           Leg width mirrors U stroke weight optically
           Crossbar at y=22 → 27.5 (golden proportion on A height)
      ──────────────────────────────────────────────────── */}
      {/* A left leg */}
      <polygon
        points="26,38.5 31.5,38.5 37,6 31.5,6"
        fill="currentColor"
      />
      {/* A right leg */}
      <polygon
        points="38,6 43,38.5 37.5,38.5 32,6"
        fill="currentColor"
      />
      {/* A crossbar */}
      <rect x="28.5" y="22.5" width="12" height={sw} rx={r} fill="currentColor" />
    </svg>
  );
}
