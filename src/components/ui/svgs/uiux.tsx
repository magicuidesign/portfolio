import type { SVGProps } from "react";

const UIUX = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {/* Window */}
    <rect x="3" y="5" width="14" height="14" rx="3" />

    {/* Header line */}
    <path d="M3 9h14" />

    {/* Window controls */}
    <circle cx="6" cy="7" r="0.5" />
    <circle cx="8" cy="7" r="0.5" />

    {/* Text lines */}
    <path d="M6 13h5" />
    <path d="M6 16h3" />

    {/* Cursor */}
    <path d="M15 12l5 3-2 1 1.5 3-1 .5-1.5-3-2 1z" />
  </svg>
);

export { UIUX };