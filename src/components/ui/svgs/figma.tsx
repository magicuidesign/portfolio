import type { SVGProps } from "react";

const Figma = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 32 32" preserveAspectRatio="xMidYMid">
    <path fill="#F4511E" d="M12 4h4v8h-4a4 4 0 0 1-4-4a4 4 0 0 1 4-4" />
    <path fill="#FF8A65" d="M20 12h-4V4h4a4 4 0 0 1 4 4a4 4 0 0 1-4 4" />
    <rect width="8" height="8" x="16" y="12" fill="#29B6F6" rx="4" transform="rotate(180 20 16)" />
    <path fill="#7C4DFF" d="M12 12h4v8h-4a4 4 0 0 1-4-4a4 4 0 0 1 4-4" />
    <path fill="#00E676" d="M12 20h4v4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4" />
  </svg>
);

export { Figma };
