import type { SVGProps } from "react";

const Framer = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" preserveAspectRatio="xMidYMid">
    <g fill="currentColor">
      <path fillOpacity="0.5" d="M12 21V9H6v6z" />
      <path d="M18 9V3H6l6 6H6v6h12l-6-6z" />
    </g>
  </svg>
);

export { Framer };
