export type PortfolioCompany = {
  slug: string
  name: string
  role: "Flagship" | "Anchor Partner" | "Partner"
  category: string
  blurb: string
  detail: string
  href?: string
}

export const portfolio: PortfolioCompany[] = [
  {
    slug: "nexi-biotech",
    name: "NEXI Biotech Inc.",
    role: "Flagship",
    category: "In vitro human neural modeling",
    blurb: "Our flagship in vitro modeling platform company — functional readouts from living human neural networks.",
    detail:
      "NEXI Biotech builds translational in vitro neural models that turn preclinical research into clinical insight, so CNS go / no-go decisions rest on human biology rather than a proxy for it.",
    href: "https://www.nexibiotech.com",
  },
  {
    slug: "keene-trace",
    name: "Keene Trace Life Science",
    role: "Anchor Partner",
    category: "In vivo & in vitro study execution",
    blurb: "Our anchor partner with in vivo and in vitro study capabilities for translational partnering capacity.",
    detail:
      "Keene Trace anchors the network's execution capacity — running the in vivo and in vitro studies that carry a program from question to data, and pairing with NEXI Biotech for end-to-end translational packages.",
  },
  {
    slug: "expressive-neuroscience",
    name: "Expressive Neuroscience",
    role: "Partner",
    category: "Histology & quantification",
    blurb: "A histology company focused on brain slices and sub-cellular quantification.",
    detail:
      "Expressive Neuroscience brings anatomical ground truth to the network — brain-slice histology and sub-cellular quantification that put structure behind every functional claim.",
  },
  {
    slug: "d-bar",
    name: "D-Bar",
    role: "Partner",
    category: "Quantum drug discovery",
    blurb: "A quantum drug discovery company.",
    detail:
      "D-Bar applies quantum approaches to drug discovery — expanding the chemical search space available to programs in the network.",
  },
  {
    slug: "voxel-bio",
    name: "Voxel Bio",
    role: "Partner",
    category: "AI drug discovery · rare disease",
    blurb: "A computational AI drug discovery company for rare disease.",
    detail:
      "Voxel Bio brings computational AI discovery to rare disease — surfacing candidates for indications that traditional pipelines pass over.",
  },
]
