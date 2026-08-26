export const servicesData = [
  {
    number: "01",
    id: "business-coaching",
    title: "Business Coaching",
    subtitle: "Strategic thinking, decision-making, and practical perspective for founders and business owners.",
    image: "/images/service-business.jpg",
    overview: "Building and sustaining a business is fundamentally an exercise in judgment. Wild Mac provides a confidential, objective sounding board for business leaders seeking clarity across operations, leadership, and long-term trajectory.",
    whoItIsFor: "Founders, business owners, and principal operators navigating transitions, growth bottlenecks, or strategic crossroads.",
    conversationThemes: [
      "Untangling operational complexity from core commercial value.",
      "High-stakes decision frameworks under uncertainty.",
      "Founder burnout, delegation, and building resilient team culture.",
      "Sustainable growth vs. premature expansion."
    ],
    approach: "Conversations are unhurried, direct, and rooted in lived operational realities rather than theoretical buzzwords."
  },
  {
    number: "02",
    id: "life-coaching",
    title: "Life Coaching",
    subtitle: "A thoughtful space for clarity, direction, habits, and intentional living.",
    image: "/images/service-life.jpg",
    overview: "Life moves quickly, and without deliberate inquiry, years can pass in reactive motion. This practice is dedicated to helping individuals examine their lives, cultivate discipline, and design daily habits aligned with what matters most.",
    whoItIsFor: "Individuals seeking greater alignment between their internal values and external commitments, or navigating major life transitions.",
    conversationThemes: [
      "Auditing personal time and emotional energy allocation.",
      "Developing unshakeable personal routines and creative discipline.",
      "Navigating career transitions and identity evolution.",
      "Cultivating presence, family relationships, and personal peace."
    ],
    approach: "A non-dogmatic, highly personalized dialogue focused on self-awareness and sustainable behavioral shifts."
  },
  {
    number: "03",
    id: "real-estate-strategy",
    title: "Real Estate Strategy",
    subtitle: "Strategic perspective around property decisions, opportunities, and long-term thinking.",
    image: "/images/service-realestate.jpg",
    overview: "Real estate represents both significant capital and enduring physical heritage. We offer an independent, experienced perspective on property evaluation, portfolio positioning, and generational real estate strategy.",
    whoItIsFor: "Property owners, private investors, and families evaluating acquisitions, dispositions, or portfolio restructuring.",
    conversationThemes: [
      "Evaluating property opportunities through a risk-adjusted, long-term lens.",
      "Capital deployment versus capital preservation in property markets.",
      "Understanding cyclical shifts and avoiding emotional purchases.",
      "Developing property as a stable, intergenerational foundation."
    ],
    approach: "Objective, conservative strategic guidance without sales pressure or broker bias."
  },
  {
    number: "04",
    id: "investment",
    title: "Investment",
    subtitle: "Practical conversations around financial awareness, decision-making, and wealth-building mindset.",
    image: "/images/service-investment.jpg",
    overview: "True investment wisdom is rooted in psychology, emotional restraint, and rational capital stewardship. This service offers high-level strategic perspective on asset mindset, risk parameters, and financial sovereignty.",
    whoItIsFor: "Individuals and family leaders seeking a grounded philosophical and strategic approach to managing and growing capital.",
    conversationThemes: [
      "Developing an investment temperament that outlasts market volatility.",
      "Principles of asymmetric risk and defensive capital positioning.",
      "Untangling speculative hype from durable economic value.",
      "Aligning wealth creation with personal life philosophy and family goals."
    ],
    approach: "Educational and strategic dialogue centered on temperament, discipline, and long-term awareness."
  },
  {
    number: "05",
    id: "branding-digital-marketing",
    title: "Branding & Digital Marketing",
    subtitle: "Strategic guidance for building a credible, meaningful, and enduring presence.",
    image: "/images/service-branding.jpg",
    overview: "In a world saturated with ephemeral noise, true brand authority is built on substance, distinct visual identity, and articulate storytelling. We help leaders and creators craft brands that command respect without screaming for attention.",
    whoItIsFor: "Authors, experts, boutique firms, and visionary leaders looking to establish or elevate their digital footprint.",
    conversationThemes: [
      "Distilling complex expertise into clear, compelling editorial narratives.",
      "Developing refined visual systems and enduring brand identities.",
      "Content strategy that builds deep trust rather than vanity metrics.",
      "Designing authentic digital experiences that convert attention into respect."
    ],
    approach: "Editorial art direction and messaging strategy focused on dignity, prestige, and commercial efficacy."
  }
];

export function getServiceById(id) {
  return servicesData.find((s) => s.id === id);
}
