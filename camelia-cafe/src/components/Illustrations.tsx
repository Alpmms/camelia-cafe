import { useId } from "react";

/*
 * Original line illustrations drawn for this site, in the same monoline style
 * as the Camelia logo. Colors come from the theme: cream lines, with rose,
 * pistachio, honey and sky accents taken from the real products.
 */

const C = {
  cream: "#f2ece2",
  rose: "#f2a3bc",
  pistachio: "#b9d98a",
  honey: "#e9b872",
  coffee: "#c89b6d",
  sky: "#8fb7ff",
};

type P = { className?: string; title?: string };

function Svg({ viewBox, className, title, children }: P & { viewBox: string; children: React.ReactNode }) {
  return (
    <svg
      viewBox={viewBox}
      className={className}
      fill="none"
      stroke={C.cream}
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
      aria-label={title}
    >
      {children}
    </svg>
  );
}

/** Small camellia emblem used on cups (echoes the logo). */
function Emblem({ x, y, color }: { x: number; y: number; color: string }) {
  return (
    <g transform={`translate(${x} ${y})`} stroke={color}>
      <circle r="18" />
      <path
        d="M0 8 C-7 3 -7 -6 -3.5 -10 L0 -6.5 L3.5 -10 C7 -6 7 3 0 8 Z M0 8 V14 M0 12 C-4 10 -7 11.5 -9 13.5 M0 12 C4 10 7 11.5 9 13.5"
        strokeWidth={1.3}
      />
    </g>
  );
}

function Strawberry({ transform }: { transform: string }) {
  return (
    <g transform={transform}>
      <path d="M0 0 C-13 -2 -17 15 0 28 C17 15 13 -2 0 0 Z" stroke={C.rose} />
      <path d="M-6 -2 L0 -8 L6 -2" stroke={C.pistachio} />
      <g stroke={C.rose} strokeWidth={1.1}>
        <path d="M-5 8 v2" />
        <path d="M4 10 v2" />
        <path d="M0 17 v2" />
        <path d="M-6 16 v1.6" />
        <path d="M6 17 v1.6" />
      </g>
    </g>
  );
}

export function IcedDrink(props: P) {
  const id = useId();
  const cup = "M54 74 L146 74 L135 236 Q134 243 127 243 L73 243 Q66 243 65 236 Z";
  return (
    <Svg viewBox="0 0 200 260" {...props}>
      <defs>
        <clipPath id={`${id}c`}>
          <path d={cup} />
        </clipPath>
        <linearGradient id={`${id}g`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={C.rose} stopOpacity=".3" />
          <stop offset=".45" stopColor={C.rose} stopOpacity=".14" />
          <stop offset=".55" stopColor={C.pistachio} stopOpacity=".14" />
          <stop offset="1" stopColor={C.pistachio} stopOpacity=".32" />
        </linearGradient>
      </defs>
      <g clipPath={`url(#${id}c)`}>
        <rect x="40" y="84" width="120" height="170" fill={`url(#${id}g)`} stroke="none" />
        <path d="M40 150 C66 138 92 162 118 150 S150 140 170 148" stroke={C.rose} strokeWidth={1.8} />
        <path d="M40 156 C66 144 92 168 118 156 S150 146 170 154" stroke={C.pistachio} strokeWidth={1.2} opacity=".8" />
        <path d="M40 86 L160 86" opacity=".5" />
      </g>
      <g opacity=".7" strokeWidth={1.2}>
        <rect x="72" y="96" width="22" height="20" rx="4" transform="rotate(-12 83 106)" />
        <rect x="104" y="104" width="20" height="18" rx="4" transform="rotate(14 114 113)" />
        <rect x="86" y="122" width="18" height="16" rx="3.5" transform="rotate(6 95 130)" />
      </g>
      <path d={cup} />
      <rect x="46" y="66" width="108" height="8" rx="4" />
      <path d="M52 66 Q100 28 148 66" />
      <path d="M107 56 L123 6 M114 58 L130 8 M123 6 L130 8" />
      <Emblem x={100} y={196} color={C.rose} />
      <g strokeWidth={1.1} opacity=".5">
        <path d="M128 168 v4" />
        <path d="M124 182 v3" />
        <path d="M73 160 v4" />
        <path d="M76 222 v3" />
      </g>
    </Svg>
  );
}

export function MiniCake(props: P) {
  return (
    <Svg viewBox="0 0 220 200" {...props}>
      <ellipse cx="110" cy="166" rx="96" ry="17" />
      <ellipse cx="110" cy="166" rx="76" ry="11.5" opacity=".4" />
      <path d="M48 70 L48 150 A62 14 0 0 0 172 150 L172 70" fill={C.pistachio} fillOpacity=".08" />
      <path d="M48 118 A62 14 0 0 0 172 118" stroke={C.pistachio} />
      <path d="M48 124 A62 14 0 0 0 172 124" opacity=".45" />
      <g opacity=".35" strokeWidth={1.1}>
        {[60, 74, 90, 106, 122, 138, 154].map((x, i) => (
          <path key={x} d={`M${x} ${128 + [0, 3, 5, 6, 6, 4, 2][i]} v22`} />
        ))}
      </g>
      <ellipse cx="110" cy="70" rx="62" ry="14" />
      <g stroke={C.pistachio} strokeWidth={1.3}>
        <circle cx="86" cy="67" r="2.6" />
        <circle cx="99" cy="74" r="2" />
        <circle cx="113" cy="64" r="2.8" />
        <circle cx="127" cy="72" r="2.2" />
        <circle cx="139" cy="66" r="2" />
        <circle cx="75" cy="72" r="1.8" />
        <circle cx="149" cy="72" r="1.6" />
        <circle cx="92" cy="79" r="1.4" />
        <circle cx="133" cy="79" r="1.5" />
      </g>
      <path d="M112 60 C106 48 113 40 123 41 C123 51 118 57 112 60 Z" stroke={C.pistachio} />
      <path d="M112 60 C115 54 119 48 122 43" stroke={C.pistachio} strokeWidth={1.1} />
    </Svg>
  );
}

export function Crepe(props: P) {
  return (
    <Svg viewBox="0 0 240 200" {...props}>
      <ellipse cx="120" cy="160" rx="106" ry="22" />
      <ellipse cx="120" cy="160" rx="86" ry="15" opacity=".4" />
      <path d="M48 150 L192.0 150.0 L192.9 149.1 L193.6 148.2 L194.0 147.3 L193.9 146.4 L193.4 145.5 L192.5 144.7 L191.5 144.0 L190.4 143.3 L189.6 142.5 L189.1 141.8 L189.0 140.9 L189.3 140.0 L190.0 139.1 L190.8 138.1 L191.5 137.0 L192.1 136.1 L192.2 135.1 L192.0 134.3 L191.3 133.6 L190.2 133.0 L189.1 132.4 L187.9 131.8 L187.0 131.2 L186.5 130.6 L186.4 129.7 L186.6 128.8 L187.2 127.7 L187.8 126.6 L188.4 125.5 L188.7 124.4 L188.7 123.5 L188.2 122.8 L187.3 122.2 L186.2 121.8 L185.0 121.4 L183.8 121.0 L182.8 120.5 L182.3 119.9 L182.1 119.1 L182.2 118.1 L182.6 116.9 L183.1 115.7 L183.5 114.5 L183.6 113.5 L183.3 112.6 L182.7 111.9 L181.7 111.5 L180.5 111.2 L179.2 111.1 L178.0 110.8 L177.0 110.4 L176.4 109.9 L176.1 109.0 L176.2 107.9 L176.4 106.7 L176.7 105.4 L176.9 104.2 L176.8 103.2 L176.3 102.4 L175.6 101.8 L174.5 101.6 L173.2 101.5 L171.9 101.5 L170.7 101.4 L169.7 101.1 L169.0 100.5 L168.6 99.6 L168.6 98.5 L168.6 97.2 L168.7 95.9 L168.6 94.7 L168.3 93.7 L167.7 92.9 L166.8 92.6 L165.7 92.5 L164.3 92.5 L163.0 92.7 L161.8 92.7 L160.8 92.4 L160.1 91.9 L159.6 91.0 L159.4 89.9 L159.3 88.5 L159.1 87.2 L158.9 86.0 L158.4 85.0 L157.6 84.4 L156.6 84.2 L155.3 84.3 L154.0 84.5 L152.7 84.7 L151.4 84.8 L150.4 84.7 L149.6 84.1 L149.1 83.2 L148.7 82.0 L148.4 80.7 L148.0 79.4 L147.6 78.2 L146.9 77.4 L146.0 76.9 L144.9 76.8 L143.6 77.0 L142.2 77.4 L140.9 77.8 L139.7 78.0 L138.6 77.8 L137.8 77.3 L137.1 76.4 L136.6 75.2 L136.0 73.8 L135.5 72.6 L134.8 71.5 L134.0 70.8 L133.0 70.4 L131.8 70.5 L130.5 70.9 L129.1 71.4 L127.8 71.8 L126.6 72.1 L125.5 72.0 L124.5 71.4 L123.7 70.5 L123.0 69.3 L122.3 68.0 L121.6 66.8 L120.7 65.8 L119.8 65.3 L118.6 65.1 L117.4 65.3 L116.0 65.8 L114.7 66.4 L113.4 67.0 L112.1 67.3 L111.0 67.2 L109.9 66.7 L109.0 65.8 L108.1 64.6 L107.3 63.4 L106.3 62.2 L105.3 61.4 L104.2 60.9 L103.0 60.9 L101.7 61.3 L100.4 62.0 L99.0 62.7 L97.7 63.3 L96.4 63.6 L95.2 63.6 L94.1 63.1 L93.0 62.2 L92.0 61.1 L90.9 59.9 L89.8 58.9 L88.7 58.2 L87.5 57.9 L86.2 58.1 L84.8 58.6 L83.5 59.4 L82.1 60.2 L80.8 60.9 L79.5 61.3 L78.2 61.2 L77.0 60.7 L75.8 59.9 L74.6 58.9 L73.3 57.8 L72.1 56.9 L70.8 56.3 L69.5 56.2 L68.2 56.5 L66.8 57.2 L65.4 58.1 L64.1 59.0 L62.7 59.8 L61.4 60.2 L60.0 60.2 L58.7 59.7 L57.4 59.0 L56.0 58.0 Z" fill={C.honey} fillOpacity=".1" strokeWidth={1.4} />
      <path d="M48 150 C98 128 134 106 176 98" opacity=".5" />
      <path d="M56 58 C66 76 62 114 48 150" opacity=".5" />
      <path d="M68 66 C72 90 68 120 58 146" opacity=".25" />
      <path d="M80 80 L148 77 L94 98 L170 102 L102 121 L182 129" stroke={C.coffee} strokeWidth={2} />
      <Strawberry transform="translate(186 142) rotate(18)" />
      <Strawberry transform="translate(208 124) rotate(-14) scale(.8)" />
    </Svg>
  );
}

export function IceCream(props: P) {
  const id = useId();
  return (
    <Svg viewBox="0 0 200 240" {...props}>
      <defs>
        <clipPath id={`${id}s`}>
          <rect x="0" y="0" width="200" height="121" />
        </clipPath>
      </defs>
      <path d="M134 110 L160 44 M139 112 L165 46" stroke={C.sky} />
      <ellipse cx="166" cy="32" rx="8" ry="13" transform="rotate(22 166 32)" stroke={C.sky} />
      <g clipPath={`url(#${id}s)`}>
        <circle cx="78" cy="104" r="34" fill={C.sky} fillOpacity=".1" stroke={C.sky} />
        <circle cx="122" cy="96" r="36" fill={C.pistachio} fillOpacity=".1" stroke={C.pistachio} />
      </g>
      <path d="M96 70 C104 64 112 64 118 68" opacity=".6" />
      <path d="M58 92 C60 84 66 78 72 76" opacity=".6" />
      <Strawberry transform="translate(110 54) rotate(-10) scale(.9)" />
      <rect x="42" y="118" width="116" height="9" rx="4.5" />
      <path d="M47 127 L60 222 Q61 230 69 230 L131 230 Q139 230 140 222 L153 127" />
      <Emblem x={100} y={178} color={C.sky} />
    </Svg>
  );
}

export function CoffeeCup(props: P) {
  return (
    <Svg viewBox="0 0 220 200" {...props}>
      <g opacity=".5">
        <path d="M92 58 C84 46 100 40 92 26" />
        <path d="M110 54 C102 40 120 34 110 18" />
        <path d="M128 58 C120 46 136 40 128 26" />
      </g>
      <ellipse cx="110" cy="164" rx="92" ry="17" />
      <ellipse cx="110" cy="164" rx="42" ry="7.5" opacity=".4" />
      <path d="M170 96 C200 94 202 134 164 136" />
      <path d="M170 104 C190 104 190 126 166 128" opacity=".4" />
      <path d="M50 80 C50 138 70 160 110 160 C150 160 170 138 170 80" />
      <ellipse cx="110" cy="80" rx="60" ry="13" />
      <ellipse cx="110" cy="80" rx="52" ry="10" stroke={C.coffee} fill={C.coffee} fillOpacity=".12" />
      <path
        d="M110 89 C98 85 96 77 102 74 C106 72.5 109 75 110 78 C111 75 114 72.5 118 74 C124 77 122 85 110 89 Z M110 89 L110 74"
        strokeWidth={1.3}
      />
    </Svg>
  );
}

export const illustrationFor = {
  coffee: IcedDrink,
  cakes: MiniCake,
  "crepes-waffles": Crepe,
  "ice-cream": IceCream,
} as const;
