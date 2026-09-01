export type PortfolioEntry = {
  slug: string
  /** Public display name. Partners are listed by capability, not by name —
   *  identities are disclosed after an inquiry, never on the open site. */
  name: string
  role: "Flagship" | "Anchor Partner" | "Partner"
  category: string
  blurb: string
  detail: string
  href?: string
  /** True only for NEXI-owned companies whose identity is public. */
  disclosed: boolean
}

export const portfolio: PortfolioEntry[] = [
  {
    slug: "nexi-biotech",
    name: "NEXI Biotech Inc.",
    role: "Flagship",
    category: "In vitro human neural modeling",
    blurb: "Our flagship in vitro modeling platform company — functional readouts from living human neural networks.",
    detail:
      "NEXI Biotech builds translational in vitro neural models that turn preclinical research into clinical insight, so CNS go / no-go decisions rest on human biology rather than a proxy for it.",
    href: "https://www.nexibiotech.com",
    disclosed: true,
  },
  {
    slug: "study-execution",
    name: "Translational Study Execution",
    role: "Anchor Partner",
    category: "In vivo & in vitro studies",
    blurb: "Anchor partner capacity for the in vivo and in vitro studies that carry a program from question to data.",
    detail:
      "Our anchor partner runs the in vivo and in vitro studies that carry a program from question to data — and pairs with NEXI Biotech for end-to-end translational packages.",
    disclosed: false,
  },
  {
    slug: "histology",
    name: "Histology & Sub-Cellular Quantification",
    role: "Partner",
    category: "Brain-slice histology",
    blurb: "Brain-slice histology and sub-cellular quantification that put anatomical ground truth behind functional claims.",
    detail:
      "A specialist histology partner brings anatomical ground truth to the network — brain-slice work and sub-cellular quantification that put structure behind every functional claim.",
    disclosed: false,
  },
  {
    slug: "tissue-pathology",
    name: "Tissue Pathology",
    role: "Partner",
    category: "Pathology services",
    blurb: "Dedicated tissue pathology capability for programs that need diagnostic-grade tissue answers.",
    detail:
      "A tissue pathology partner gives the network diagnostic-grade tissue analysis — pathology read-outs that anchor preclinical findings in established clinical practice.",
    disclosed: false,
  },
  {
    slug: "quantum-discovery",
    name: "Quantum Drug Discovery",
    role: "Partner",
    category: "Computational chemistry",
    blurb: "Quantum approaches to drug discovery that expand the chemical search space available to programs.",
    detail:
      "A quantum drug discovery partner expands the chemical search space available to programs in the network — candidate exploration beyond what classical pipelines reach.",
    disclosed: false,
  },
  {
    slug: "ai-discovery",
    name: "AI Drug Discovery · Rare Disease",
    role: "Partner",
    category: "Computational discovery",
    blurb: "Computational AI discovery focused on rare disease — surfacing candidates traditional pipelines pass over.",
    detail:
      "A computational AI discovery partner focuses on rare disease — surfacing candidates for the indications that traditional pipelines pass over.",
    disclosed: false,
  },
]

export const ecosystem = [
  {
    name: "Florida Biotech Exchange",
    href: "https://www.flbiotech.org",
    note: "The statewide life science council",
  },
  {
    name: "Florida BioXchange",
    href: "https://www.flbioxchange.com",
    note: "The Exchange's lead virtual event series",
  },
  { name: "BIO on the Bay", href: "https://www.bioonthebay.com", note: "St. Petersburg's annual summit" },
  { name: "VC Village · Tampa Bay Chapter", href: "https://vcvillage.co", note: "Investor community" },
]
