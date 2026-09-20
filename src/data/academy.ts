// Verified Academy facts — sourced from Project-1 (DigitalBurj Academy):
// backend/src/data.js (catalogue, bundles, stages, levels, audiences) and
// the Academy README (submission lifecycle, roles, entry routes).
// Counts: 23 DB + 10 PF + 25 PC + 8 AD = 66 units; 15 bundles.

export const academyDomain = "academy.digitalburj.com"
const app = (path: string) => `https://${academyDomain}${path}`

export const academyLinks = {
  home: app("/"),
  access: app("/access"),
  setup: app("/setup"),
  orientation: app("/orientation"),
  catalogue: app("/app/catalogue"),
  bundles: app("/app/bundles"),
  diagnostic: app("/app/diagnostic"),
  evidence: app("/app/evidence"),
  record: app("/app/record"),
}

export const academyStats = [
  { value: 66, label: "Course units" },
  { value: 15, label: "Bundles" },
  { value: 12, label: "Stages per mission" },
  { value: 4, label: "Live courses today" },
]

export type AcademyTrack = {
  code: string
  name: string
  units: number
  prefix: string
  entry: string
  note: string
}

export const academyTracks: AcademyTrack[] = [
  {
    code: "technology",
    name: "Technology",
    units: 23,
    prefix: "DB-00 – DB-22",
    entry: "Start at DB-00, no prerequisites",
    note: "DB-00 to DB-03 are Active and enrollable. DB-04 to DB-21 are Planning catalogue entries; DB-22 is Restricted.",
  },
  {
    code: "foundation",
    name: "Professional Foundation",
    units: 10,
    prefix: "PF-01 – PF-10",
    entry: "Common core, no prerequisites",
    note: "Workplace English, office tools, service and ethics. Proposed catalogue — shown honestly, never sold early.",
  },
  {
    code: "career",
    name: "Professional Career",
    units: 25,
    prefix: "PC-*",
    entry: "Gated by a server-graded Foundation diagnostic",
    note: "Role pathways from real estate to logistics to healthcare administration. Prerequisites are never self-attested.",
  },
  {
    code: "advanced",
    name: "Advanced Professional",
    units: 8,
    prefix: "AD-*",
    entry: "Gated by the Foundation diagnostic",
    note: "Specialist and international pathways with Defend-grade final assessment.",
  },
]

export const liveCourses = [
  { code: "DB-00", title: "Digital Foundations", hours: 57 },
  { code: "DB-01", title: "Real-World Problem Solving & Product Thinking", hours: 36 },
  { code: "DB-02", title: "Professional Web Development", hours: 115 },
  { code: "DB-03", title: "Backend, APIs & Databases", hours: 115 },
]

export type AcademyBundle = { id: string; name: string; price: number; hours: number }

export const academyBundles: AcademyBundle[] = [
  { id: "b-tech-found", name: "Digital Foundations", price: 25, hours: 57 },
  { id: "b-frontend", name: "Frontend Developer", price: 49, hours: 115 },
  { id: "b-backend", name: "Backend Developer", price: 59, hours: 115 },
  { id: "b-ai", name: "AI Automation & Applications", price: 59, hours: 127 },
  { id: "b-data", name: "Data Analyst Foundation", price: 49, hours: 105 },
  { id: "b-mkt", name: "Digital Marketing", price: 49, hours: 107 },
  { id: "b-bizsys", name: "Business Systems Specialist", price: 49, hours: 89 },
  { id: "b-pf", name: "Professional Foundation Bundle", price: 29, hours: 104 },
  { id: "b-office", name: "Office Career Starter", price: 49, hours: 108 },
  { id: "b-acc", name: "Accounting Career Starter", price: 59, hours: 157 },
  { id: "b-log", name: "International Logistics Career", price: 69, hours: 179 },
  { id: "b-re", name: "Real Estate Career Starter", price: 59, hours: 109 },
  { id: "b-hr", name: "HR & Administration Career", price: 59, hours: 142 },
  { id: "b-bank", name: "Banking Operations Career", price: 69, hours: 147 },
  { id: "b-intl-wr", name: "International Workplace Readiness", price: 25, hours: 79 },
]

export const missionLoop: { stage: string; help: string }[] = [
  { stage: "Brief", help: "Confirm the scenario, users, scope and constraints." },
  { stage: "Learn", help: "Review only the concepts needed for this decision." },
  { stage: "Investigate", help: "Find facts, assumptions and policy boundaries." },
  { stage: "Try", help: "Make a small, reversible first attempt." },
  { stage: "Build", help: "Produce the practical output or workplace record." },
  { stage: "Break", help: "Deliberately test a failure, exception or missing item." },
  { stage: "Fix", help: "Correct the observed weakness and record the change." },
  { stage: "Test", help: "Show normal-path and failure-path results." },
  { stage: "Explain", help: "Explain the decisions, trade-offs and evidence." },
  { stage: "Defend", help: "Answer challenge questions against the rubric." },
  { stage: "Ship", help: "Package a usable handover, report or record." },
  { stage: "Evidence", help: "Assemble the complete evidence pack for review." },
]

export const submissionLifecycle: { status: string; meaning: string }[] = [
  { status: "Draft", meaning: "Learner-owned work in progress." },
  { status: "Submitted", meaning: "Handed to the review queue." },
  { status: "In Review", meaning: "A reviewer examines another learner's work — never their own." },
  { status: "Request Changes", meaning: "Returned with feedback." },
  { status: "Resubmitted", meaning: "Corrected version back in the queue." },
  { status: "Approved", meaning: "Reviewer sign-off; automatically forwarded to verification." },
  { status: "Pending Verification", meaning: "Awaiting an independent verifier." },
  { status: "Verified", meaning: "Verifier confirms; evidence is issued automatically." },
  { status: "Evidence Issued", meaning: "Capability evidence lands in the learner record." },
]

export const academyRoles = [
  { role: "Learner", scope: "Enrols, completes checkpoints, submits own work." },
  { role: "Reviewer", scope: "Acts on other learners' submissions via a shared queue." },
  { role: "Verifier", scope: "Independently verifies approved work and issues evidence." },
  { role: "Admin", scope: "Manages roles and curriculum health — never their own record." },
]

export const capabilityLevels = [
  { code: "L1", label: "Guided basics" },
  { code: "L2", label: "Scenario capability" },
  { code: "L3", label: "Published assessment" },
  { code: "L4", label: "Production delivery" },
  { code: "L5", label: "Repeated verified delivery" },
]

export const academyAudiences = [
  "After 12th grade",
  "Graduate seeking work",
  "Working professional",
  "Career changer",
  "International / GCC job seeker",
  "Technology learner",
]
