export type Division = {
  slug: string
  name: string
  tag: string
  domain: string
  summary: string
  description: string
  highlights: string[]
}

export const divisions: Division[] = [
  {
    slug: "academy",
    name: "DigitalBurj Academy",
    tag: "Academy",
    domain: "academy.digitalburj.com",
    summary: "Technology and professional education, practical assessments and capability evidence.",
    description:
      "Academy pairs an existing technology curriculum with proposed professional career training. Every path shares one learning and assessment system, so completion, assessed competence and independently verified evidence are always kept distinct.",
    highlights: [
      "Individually purchasable technology and professional courses",
      "Career bundles across technology and professional operations",
      "Evidence-led assessment: Brief, Try, Build, Test, Defend, Ship",
    ],
  },
  {
    slug: "studio",
    name: "DigitalBurj Studio",
    tag: "Studio",
    domain: "studio.digitalburj.com",
    summary: "Validation-first engineering and product delivery.",
    description:
      "Studio takes software work through discovery and validation before committing to a build, reshape or stop decision — so engagement scope is agreed before larger execution begins.",
    highlights: [
      "Web, mobile, enterprise and SaaS product delivery",
      "API engineering, integrations and technical architecture",
      "Milestones, deliverables and acceptance tracked in one workspace",
    ],
  },
  {
    slug: "business-ai",
    name: "DigitalBurj Business AI",
    tag: "Business AI",
    domain: "business.digitalburj.com",
    summary: "Measurable operational improvement and bounded automation.",
    description:
      "Business AI diagnoses quantifiable operational loss, designs improved workflows and implements automation that is bounded and measured, with human approval built in where it matters.",
    highlights: [
      "Diagnosis before automation, not automation by default",
      "CRM, sales, service, document and reporting workflows",
      "Outcomes measured and reported, not assumed",
    ],
  },
  {
    slug: "verified-talent",
    name: "DigitalBurj Verified Talent",
    tag: "Verified Talent",
    domain: "talent.digitalburj.com",
    summary: "Evidence-backed capability and employer discovery.",
    description:
      "Verified Talent keeps self-reported experience clearly separate from independently reviewed capability, so employers can search and shortlist with a clear view of what has actually been verified.",
    highlights: [
      "Capability passport with labeled self-reported and verified skills",
      "Project evidence, not just claims",
      "Authorized employer search and shortlisting",
    ],
  },
]

export const jobsService = {
  slug: "jobs",
  name: "DigitalBurj Jobs",
  tag: "Jobs",
  domain: "jobs.digitalburj.com",
  summary: "Opportunities and recruitment, connected to talent profiles.",
  description:
    "Jobs connects candidates and employers directly. An Academy credential is not required for every applicant — Jobs is an open, connected opportunity marketplace.",
}

export type PortfolioItem = {
  name: string
  description: string
  status: string
}

export const portfolio: PortfolioItem[] = [
  { name: "LoadByTon", description: "Freight and logistics coordination.", status: "In development" },
  { name: "VelozTrade", description: "Trade and commerce platform.", status: "In development" },
  { name: "The Imam Collective", description: "Community and content platform.", status: "In development" },
  { name: "Rootiva Herbal", description: "Herbal wellness commerce.", status: "In development" },
  { name: "Procurazo", description: "Procurement and purchasing workflow.", status: "In development" },
  { name: "Attesora", description: "Verification and attestation services.", status: "In development" },
  { name: "HospyQ", description: "Hospitality queue and service management.", status: "In development" },
  { name: "Elite Escape", description: "Travel and leisure experiences.", status: "In development" },
  { name: "MedinaBridge", description: "Cross-border services bridge.", status: "In development" },
  { name: "Resilianta", description: "Operational resilience tooling.", status: "In development" },
]

export const industries = [
  "Real estate",
  "Logistics",
  "Finance",
  "Healthcare",
  "Retail",
  "Professional services",
  "Small and medium enterprises",
]

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "Company", to: "/company/about" },
  { label: "Ecosystem", to: "/ecosystem" },
  { label: "Technology", to: "/technology" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "Contact", to: "/contact" },
]
