import { Cpu, Braces, ShieldCheck, Waves } from "lucide-react"

/**
 * The four capability pillars, in one place. The homepage teaser and the
 * /capabilities page both read from here so their wording cannot drift.
 */
export const capabilities = [
  {
    icon: Cpu,
    title: "Living neural substrates",
    body: "We build human circuits to specification and keep them alive under measurement, so that the tissue behaves as programmable, adaptive compute for as long as an experiment needs it to.",
  },
  {
    icon: Braces,
    title: "Neuro-computational models",
    body: "Our software reads the activity coming off those circuits and models what it means, extending a measured result past what the culture alone can show.",
  },
  {
    icon: ShieldCheck,
    title: "Trusted deployment",
    body: "We deliver under the controls that regulated, defense, and dual-use mandates require, so that an engagement can proceed where provenance and handling are part of the specification.",
  },
  {
    icon: Waves,
    title: "Signal & sensing",
    body: "High-bandwidth interfaces turn neural activity into a signal you can act on, and carry stimulation back the other way into the circuit.",
  },
]
