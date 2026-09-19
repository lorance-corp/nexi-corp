import { Cpu, Braces, ShieldCheck, Waves } from "lucide-react"

/**
 * The four capability pillars, in one place. The homepage teaser and the
 * /capabilities page both read from here so their wording cannot drift.
 */
export const capabilities = [
  {
    icon: Cpu,
    title: "Living neural substrates",
    body: "Human circuits built to specification and kept alive under measurement, engineered as programmable, adaptive compute.",
  },
  {
    icon: Braces,
    title: "Neuro-computational models",
    body: "Software that reads the activity coming off those circuits, models what it means, and extends it beyond what the culture alone can show.",
  },
  {
    icon: ShieldCheck,
    title: "Trusted deployment",
    body: "Controlled, compliant delivery for the regulated, defense, and dual-use mandates that will not accept anything less.",
  },
  {
    icon: Waves,
    title: "Signal & sensing",
    body: "High-bandwidth interfaces that turn neural activity into a signal you can act on, and carry signal back the other way.",
  },
]
