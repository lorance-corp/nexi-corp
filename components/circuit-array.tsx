/**
 * The hero visual: a directed three-compartment circuit on a microelectrode
 * array, drawn rather than generated.
 *
 * It is deliberately literal. The floor is a regular electrode grid, the three
 * wells are somatic compartments, the bundles between them are microchannels
 * carrying axons in one direction, and the panel at lower left is a single-unit
 * trace from the electrode the leader line points at. Signal runs A to B to C
 * and back into A, because the founding studies model closed loops.
 *
 * No brain, no particle mesh, no lens flare, no text inside the artwork. It
 * weighs about 9 KB instead of 1.5 MB and stays crisp at any size.
 */

type Compartment = { id: string; cx: number; cy: number; w: number; h: number }

const COMPARTMENTS: Compartment[] = [
  { id: "a", cx: 178, cy: 158, w: 236, h: 158 },
  { id: "b", cx: 716, cy: 176, w: 236, h: 158 },
  { id: "c", cx: 460, cy: 420, w: 236, h: 158 },
]

/**
 * Channel bundles. Each path stops short of the destination well so the
 * arrowhead lands in open substrate and stays legible.
 */
const CHANNELS = [
  { id: "ab", d: "M 300 150 C 400 108, 500 108, 586 150", dur: "3.2s", delay: "0s" },
  { id: "bc", d: "M 726 258 C 712 344, 654 394, 586 410", dur: "3.6s", delay: "1.1s" },
  { id: "ca", d: "M 344 398 C 254 364, 196 300, 180 242", dur: "3.4s", delay: "2.2s" },
]

/** Cell bodies with a few processes, scattered deterministically inside a well. */
function Neurons({ cx, cy, w, h, seed }: Compartment & { seed: number }) {
  let s = seed
  const rand = () => ((s = (s * 1103515245 + 12345) % 2147483648) / 2147483648)
  const pts = Array.from({ length: 11 }, () => ({
    x: cx - w / 2 + 24 + rand() * (w - 48),
    y: cy - h / 2 + 22 + rand() * (h - 44),
    r: 3.2 + rand() * 2.4,
    a: rand() * Math.PI * 2,
  }))
  return (
    <g>
      {pts.map((p, i) => (
        <g key={i}>
          {[0, 2.1, 4.2].map((turn, k) => {
            const ang = p.a + turn
            const len = 17 + ((i * 7 + k * 11) % 13)
            return (
              <line
                key={k}
                x1={p.x}
                y1={p.y}
                x2={p.x + Math.cos(ang) * len}
                y2={p.y + Math.sin(ang) * len}
                stroke="oklch(0.82 0.14 197)"
                strokeOpacity="0.38"
                strokeWidth="1"
                strokeLinecap="round"
              />
            )
          })}
          <circle cx={p.x} cy={p.y} r={p.r} fill="oklch(0.88 0.13 197)" fillOpacity="0.85" />
        </g>
      ))}
    </g>
  )
}

export function CircuitArray({ className }: { className?: string }) {
  const electrodes: { x: number; y: number }[] = []
  for (let y = 26; y <= 578; y += 29) {
    for (let x = 24; x <= 880; x += 29) electrodes.push({ x, y })
  }
  // Electrodes under a well read as live recording sites.
  const isLive = (x: number, y: number) =>
    COMPARTMENTS.some(
      (c) => Math.abs(x - c.cx) < c.w / 2 - 10 && Math.abs(y - c.cy) < c.h / 2 - 10,
    )

  return (
    <svg
      viewBox="0 0 900 600"
      className={className}
      role="img"
      aria-label="A three-compartment neural circuit on a microelectrode array: cell bodies in three wells, microchannels carrying signal in one direction around a closed loop, and a single-unit voltage trace read from one electrode."
    >
      <defs>
        <radialGradient id="nexi-bloom" cx="50%" cy="38%" r="66%">
          <stop offset="0%" stopColor="oklch(0.82 0.14 197)" stopOpacity="0.16" />
          <stop offset="100%" stopColor="oklch(0.82 0.14 197)" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="nexi-well" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="oklch(0.34 0.05 215)" stopOpacity="0.5" />
          <stop offset="100%" stopColor="oklch(0.2 0.03 240)" stopOpacity="0.2" />
        </linearGradient>
        <radialGradient id="nexi-vignette" cx="50%" cy="50%" r="72%">
          <stop offset="55%" stopColor="oklch(0.16 0.02 250)" stopOpacity="0" />
          <stop offset="100%" stopColor="oklch(0.16 0.02 250)" stopOpacity="0.85" />
        </radialGradient>
        <filter id="nexi-glow" x="-120%" y="-120%" width="340%" height="340%">
          <feGaussianBlur stdDeviation="3.5" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <marker
          id="nexi-arrow"
          viewBox="0 0 12 12"
          refX="9"
          refY="6"
          markerWidth="7"
          markerHeight="7"
          orient="auto-start-reverse"
        >
          <path d="M 1 1.5 L 10.5 6 L 1 10.5 Z" fill="oklch(0.88 0.14 197)" fillOpacity="0.9" />
        </marker>
      </defs>

      <rect x="0" y="0" width="900" height="600" fill="url(#nexi-bloom)" />

      {/* Array floor */}
      <g>
        {electrodes.map((e, i) => {
          const live = isLive(e.x, e.y)
          return (
            <circle
              key={i}
              cx={e.x}
              cy={e.y}
              r={live ? 2.3 : 1.7}
              fill="oklch(0.82 0.14 197)"
              fillOpacity={live ? 0.55 : 0.2}
            />
          )
        })}
      </g>

      {/* Microchannel bundles */}
      {CHANNELS.map((ch) => (
        <g key={ch.id}>
          {[-8, 8].map((off) => (
            <path
              key={off}
              d={ch.d}
              fill="none"
              stroke="oklch(0.82 0.14 197)"
              strokeOpacity="0.2"
              strokeWidth="1"
              transform={`translate(0 ${off})`}
            />
          ))}
          <path
            d={ch.d}
            fill="none"
            stroke="oklch(0.82 0.14 197)"
            strokeOpacity="0.4"
            strokeWidth="1.4"
            markerEnd="url(#nexi-arrow)"
          />
          {/* The travelling signal: a short dash chasing the channel. */}
          <path
            className="nexi-pulse"
            d={ch.d}
            pathLength={100}
            fill="none"
            stroke="oklch(0.92 0.15 197)"
            strokeWidth="2.6"
            strokeLinecap="round"
            filter="url(#nexi-glow)"
            style={{ animationDuration: ch.dur, animationDelay: ch.delay } as React.CSSProperties}
          />
        </g>
      ))}

      {/* Somatic compartments */}
      {COMPARTMENTS.map((c, i) => (
        <g key={c.id}>
          <rect
            x={c.cx - c.w / 2}
            y={c.cy - c.h / 2}
            width={c.w}
            height={c.h}
            rx="18"
            fill="url(#nexi-well)"
            stroke="oklch(0.82 0.14 197)"
            strokeOpacity="0.5"
            strokeWidth="1.3"
          />
          <Neurons {...c} seed={7 + i * 31} />
        </g>
      ))}

      {/* Leader line from one recording site down to the trace panel */}
      <path
        d="M 366 470 L 286 508"
        stroke="oklch(0.82 0.14 197)"
        strokeOpacity="0.45"
        strokeWidth="1"
        strokeDasharray="3 4"
        fill="none"
      />
      <circle cx="366" cy="470" r="3.6" fill="oklch(0.92 0.15 197)" filter="url(#nexi-glow)" />

      {/* Single-unit trace */}
      <g>
        <rect
          x="34"
          y="486"
          width="252"
          height="80"
          rx="12"
          fill="oklch(0.2 0.025 248)"
          fillOpacity="0.85"
          stroke="oklch(0.82 0.14 197)"
          strokeOpacity="0.35"
        />
        <path
          d="M 48 534 L 80 534 L 84 518 L 88 552 L 92 527 L 96 534 L 138 534 L 142 516 L 146 555 L 150 525 L 154 534 L 206 534 L 210 519 L 214 551 L 218 526 L 222 534 L 272 534"
          fill="none"
          stroke="oklch(0.88 0.14 197)"
          strokeOpacity="0.9"
          strokeWidth="1.7"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
      </g>

      <rect x="0" y="0" width="900" height="600" fill="url(#nexi-vignette)" pointerEvents="none" />
    </svg>
  )
}
