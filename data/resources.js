export const resourcesData = [
  {
    id: "strategic-decision-framework",
    title: "Strategic Decision-Making Framework",
    category: "BUSINESS & LEADERSHIP",
    type: "Guide & Template (PDF)",
    description: "A structured framework to evaluate high-stakes commercial choices, untangle operational complexity, and mitigate downside risks.",
    readTime: "8 min read",
    format: "Downloadable PDF",
    fileSize: "1.4 MB",
    downloadUrl: "#",
    keyTakeaways: [
      "Asymmetric risk calculation matrix",
      "Core value vs. operational friction audit",
      "Decision trees for founder growth transitions"
    ]
  },
  {
    id: "personal-time-capital-audit",
    title: "Personal Capital & Time Allocation Audit",
    category: "LIFE & STRATEGY",
    type: "Actionable Worksheet",
    description: "An unhurried inquiry and self-assessment tool designed to audit energy expenditure, financial awareness, and daily alignment.",
    readTime: "12 min exercise",
    format: "Interactive Worksheet",
    fileSize: "980 KB",
    downloadUrl: "#",
    keyTakeaways: [
      "168-hour weekly energy accounting",
      "Sovereignty vs. reactive commitment scoring",
      "Long-term purpose calibration exercises"
    ]
  },
  {
    id: "durable-brand-architecture-blueprint",
    title: "Durable Brand Architecture Blueprint",
    category: "BRANDING & DIGITAL",
    type: "Strategy Framework",
    description: "Principles for building authoritative personal and commercial brands that command deep trust without screaming for attention.",
    readTime: "10 min read",
    format: "Strategy Document",
    fileSize: "2.1 MB",
    downloadUrl: "#",
    keyTakeaways: [
      "Editorial storytelling hierarchy",
      "Dignity-first digital conversion funnels",
      "Visual identity consistency standards"
    ]
  },
  {
    id: "property-acquisition-matrix",
    title: "Property & Real Estate Evaluation Matrix",
    category: "REAL ESTATE",
    type: "Evaluation Checklist",
    description: "A conservative, multi-factor checklist for evaluating property acquisitions, long-term holding potential, and generational value.",
    readTime: "6 min review",
    format: "Checklist Matrix",
    fileSize: "1.1 MB",
    downloadUrl: "#",
    keyTakeaways: [
      "Location durability and structural integrity metrics",
      "Risk-adjusted cash flow versus capital preservation",
      "Generational wealth transfer considerations"
    ]
  }
];

export function getFeaturedResources() {
  return resourcesData.slice(0, 3);
}
