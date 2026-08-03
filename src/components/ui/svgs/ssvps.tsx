import React from "react";

export const SSVPSLogo = (props: React.SVGProps<SVGSVGElement>) => {
  // Base parameters for isometric projection
  // Cx = Center X, Cy_top = Top Pillar Roof, Cy_mid = Middle Plane, Cy_bot = Bottom Plane
  // d = base radius (d*2 width)
  // R = extension radius of horizontal planes
  const p = (X: number, Y: number, Cy: number) =>
    `${100 + 2 * (X + Y)},${Cy + X - Y}`;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="16 18 168 252"
      preserveAspectRatio="xMidYMid meet"
      {...props}
    >
      <style>
        {`
          .ssvps-black { fill: currentColor; stroke: currentColor; stroke-linejoin: round; }
          .ssvps-white { fill: hsl(var(--background)); stroke: currentColor; stroke-linejoin: round; }
          .ssvps-line { fill: none; stroke: currentColor; stroke-linejoin: round; stroke-linecap: round; }
          .ssvps-text { fill: currentColor; font-family: sans-serif; font-weight: 600; }
        `}
      </style>

      {/* =========== BOTTOM PILLAR & BOTTOM PLANE =========== */}
      
      {/* 1. Bottom Plane Left Lines */}
      {/* Starting from X \in [-4..4], Y = -5 going -Y (Down-Left) to Yc, then -X (Up-Left) to X=-14 */}
      {[-4, -2, 0, 2, 4].map((Xj) => {
        const Yc = -25 - Xj;
        return (
          <polyline
            key={`bot-l-${Xj}`}
            points={`${p(Xj, -5, 190)} ${p(Xj, Yc, 190)} ${p(-14, Yc, 190)}`}
            className="ssvps-line"
            strokeWidth="1.5"
          />
        );
      })}

      {/* 2. Bottom Pillar Right Face Background */}
      <polygon
        points={`${p(5, -5, 110)} ${p(5, 5, 110)} ${p(5, 5, 190)} ${p(5, -5, 190)}`}
        className="ssvps-white"
        strokeWidth="1.5"
      />
      
      {/* 3. Bottom Pillar Left Face Background */}
      <polygon
        points={`${p(5, -5, 110)} ${p(-5, -5, 110)} ${p(-5, -5, 190)} ${p(5, -5, 190)}`}
        className="ssvps-white"
        strokeWidth="1.5"
      />

      {/* 4. Bottom Plane Right Lines + Bottom Pillar Vertical Lines */}
      {/* Starting at Cy=110 going down Right face to Cy=190, then +X (Down-Right) to Xc, then +Y (Up-Right) to Y=14 */}
      {[-4, -2, 0, 2, 4].map((Yi) => {
        const Xc = 25 - Yi;
        return (
          <polyline
            key={`bot-r-${Yi}`}
            points={`${p(5, Yi, 110)} ${p(5, Yi, 190)} ${p(Xc, Yi, 190)} ${p(Xc, 14, 190)}`}
            className="ssvps-line"
            strokeWidth="1.5"
          />
        );
      })}

      {/* 5. Bottom Pillar Top Face (Solid Black Diamond in the Middle) */}
      <polygon
        points={`${p(5, -5, 110)} ${p(5, 5, 110)} ${p(-5, 5, 110)} ${p(-5, -5, 110)}`}
        className="ssvps-black"
        strokeWidth="1.5"
      />

      {/* =========== TOP PILLAR & MIDDLE PLANE =========== */}

      {/* 6. Middle Plane Left Lines */}
      {[-4, -2, 0, 2, 4].map((Xj) => {
        const Yc = -25 - Xj;
        return (
          <polyline
            key={`mid-l-${Xj}`}
            points={`${p(Xj, -5, 110)} ${p(Xj, Yc, 110)} ${p(-14, Yc, 110)}`}
            className="ssvps-line"
            strokeWidth="1.5"
          />
        );
      })}

      {/* 7. Top Pillar Right Face Background */}
      <polygon
        points={`${p(5, -5, 30)} ${p(5, 5, 30)} ${p(5, 5, 110)} ${p(5, -5, 110)}`}
        className="ssvps-white"
        strokeWidth="1.5"
      />
      
      {/* 8. Top Pillar Left Face Background */}
      <polygon
        points={`${p(5, -5, 30)} ${p(-5, -5, 30)} ${p(-5, -5, 110)} ${p(5, -5, 110)}`}
        className="ssvps-white"
        strokeWidth="1.5"
      />

      {/* 9. Middle Plane Right Lines + Top Pillar Vertical Lines */}
      {[-4, -2, 0, 2, 4].map((Yi) => {
        const Xc = 25 - Yi;
        return (
          <polyline
            key={`mid-r-${Yi}`}
            points={`${p(5, Yi, 30)} ${p(5, Yi, 110)} ${p(Xc, Yi, 110)} ${p(Xc, 14, 110)}`}
            className="ssvps-line"
            strokeWidth="1.5"
          />
        );
      })}

      {/* 10. Top Pillar Top Face (Solid Black Diamond) */}
      <polygon
        points={`${p(5, -5, 30)} ${p(5, 5, 30)} ${p(-5, 5, 30)} ${p(-5, -5, 30)}`}
        className="ssvps-black"
        strokeWidth="1.5"
      />

      {/* =========== TEXT & YEAR =========== */}
      <path
        id="arcPath"
        d="M 20 230 A 80 25 0 0 0 180 230"
        fill="transparent"
      />
      <text
        className="ssvps-text"
        fontSize="11"
        letterSpacing="1"
        textAnchor="middle"
      >
        <textPath href="#arcPath" startOffset="50%">
          S.S.V.P.S. ENGG &amp; POLY, DHULE
        </textPath>
      </text>

      <text
        x="100"
        y="265"
        className="ssvps-text"
        fontSize="14"
        textAnchor="middle"
        letterSpacing="1.5"
      >
        1983
      </text>
    </svg>
  );
};
