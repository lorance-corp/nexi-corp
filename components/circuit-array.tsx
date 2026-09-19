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
  { id: "a", cx: 196, cy: 168, w: 264, h: 168 },
  { id: "b", cx: 700, cy: 182, w: 264, h: 168 },
  { id: "c", cx: 452, cy: 424, w: 264, h: 168 },
]

/**
 * Channel bundles. Each path stops short of the destination well so the
 * arrowhead lands in open substrate and stays legible.
 */
const CHANNELS = [
  { id: "ab", d: "M 334 152 C 430 110, 510 110, 558 150", dur: "3.2s", delay: "0s" },
  { id: "bc", d: "M 716 272 C 706 350, 652 392, 596 408", dur: "3.6s", delay: "1.1s" },
  { id: "ca", d: "M 322 400 C 248 368, 204 312, 194 260", dur: "3.4s", delay: "2.2s" },
]

/**
 * One second of extracellular record from a single unit: a small positive
 * shoulder, a fast negative deflection, then a slower positive repolarisation
 * back to baseline, at the irregular intervals a real unit fires at.
 */
const SPIKE_TRAIN = (() => {
  const x0 = 48
  const x1 = 272
  const base = 534
  const isi = [34, 21, 45, 29, 18, 38]
  let x = x0 + 12
  let d = `M ${x0} ${base}`
  for (const gap of isi) {
    x += gap
    if (x > x1 - 14) break
    d +=
      ` L ${x - 4} ${base}` +
      ` L ${x - 2} ${base - 4}` +
      ` L ${x + 1} ${base + 22}` +
      ` L ${x + 4} ${base - 13}` +
      ` L ${x + 9} ${base - 3}` +
      ` L ${x + 13} ${base}`
  }
  return d + ` L ${x1} ${base}`
})()

/**
 * Cell bodies with a few processes each, scattered deterministically inside a
 * well. The processes curve and vary in number and length so a soma reads as a
 * cell rather than as an asterisk.
 */
function Neurons({ cx, cy, w, h, seed }: Compartment & { seed: number }) {
  let s = seed
  const rand = () => ((s = (s * 1103515245 + 12345) % 2147483648) / 2147483648)
  const pts = Array.from({ length: 10 }, () => ({
    x: cx - w / 2 + 26 + rand() * (w - 52),
    y: cy - h / 2 + 24 + rand() * (h - 48),
    r: 3 + rand() * 2.4,
    a: rand() * Math.PI * 2,
    n: 2 + Math.floor(rand() * 3),
    bend: 0.4 + rand() * 0.9,
  }))
  return (
    <g>
      {pts.map((p, i) => (
        <g key={i}>
          {Array.from({ length: p.n }, (_, k) => {
            const ang = p.a + (k * 2 * Math.PI) / p.n + (k % 2 ? 0.35 : -0.25)
            const len = 14 + ((i * 13 + k * 19) % 22)
            const ex = p.x + Math.cos(ang) * len
            const ey = p.y + Math.sin(ang) * len
            // Control point pushed off the chord so the process arcs.
            const mx = p.x + Math.cos(ang) * len * 0.55 - Math.sin(ang) * len * 0.3 * p.bend
            const my = p.y + Math.sin(ang) * len * 0.55 + Math.cos(ang) * len * 0.3 * p.bend
            return (
              <path
                key={k}
                d={`M ${p.x.toFixed(1)} ${p.y.toFixed(1)} Q ${mx.toFixed(1)} ${my.toFixed(1)} ${ex.toFixed(1)} ${ey.toFixed(1)}`}
                fill="none"
                stroke="oklch(0.82 0.14 197)"
                strokeOpacity="0.36"
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
          <stop offset="62%" stopColor="oklch(0.16 0.02 250)" stopOpacity="0" />
          <stop offset="100%" stopColor="oklch(0.16 0.02 250)" stopOpacity="0.55" />
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
          markerWidth="11"
          markerHeight="11"
          orient="auto-start-reverse"
        >
          <path d="M 1 1 L 11 6 L 1 11 Z" fill="oklch(0.9 0.14 197)" fillOpacity="0.95" />
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
        d="M 352 478 L 288 506"
        stroke="oklch(0.82 0.14 197)"
        strokeOpacity="0.45"
        strokeWidth="1"
        strokeDasharray="3 4"
        fill="none"
      />
      <circle cx="352" cy="478" r="3.6" fill="oklch(0.92 0.15 197)" filter="url(#nexi-glow)" />

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
          d={SPIKE_TRAIN}
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
