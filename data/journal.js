export const journalArticles = [
  {
    slug: "on-the-architecture-of-unhurried-time",
    title: "On the Architecture of Unhurried Time",
    subtitle: "Why the modern obsession with acceleration is destroying our capacity for original thought.",
    category: "Life",
    date: "October 14, 2024",
    readTime: "6 min read",
    isFeatured: true,
    excerpt: "Most people do not suffer from a lack of time; they suffer from a fragmentation of attention. When every minute is colonized by external demands, the mind loses its ability to synthesize deep perspective.",
    content: `
### The Acceleration Trap

We live in a culture that mistakes velocity for progress. If an email can be answered in thirty seconds, we assume it should be answered in ten. If a business can grow by twenty percent, we demand thirty. In doing so, we have built an architecture of constant interruption—one that rewards responsiveness over contemplation.

Yet, every enduring work of art, every sound financial decision, and every profound realization requires an unhurried mind. The ancients understood this well: the Latin *otium* was not idle laziness, but the dedicated leisure required for philosophical reflection, writing, and deliberate living.

> "When your hours are crowded with immediate reactions, you forfeit the quiet sanctuary where original thoughts are born."

### Reclaiming Cognitive Space

To live deliberately is to introduce intentional friction into your life. It means refusing to let algorithms dictate your waking thoughts, creating empty space in your calendar without feeling guilt, and recognizing that not every question demands an instant answer.

Consider three simple practices:

1. **The Morning Silence**: Keep the first ninety minutes of your waking day free from screens, headlines, and external demands. Allow your thoughts to settle like water in a glass.
2. **Deep Reading**: Dedicate unhurried time to physical books that have survived at least fifty years. Modern feeds inform you of what happened ten minutes ago; timeless books teach you what always happens.
3. **The Walk Without Destination**: Step outside without headphones or agenda. The rhythm of walking is the natural tempo of human thinking.

When you protect your time, you protect your life. For time is not merely a resource to be managed—it is the very substance of our existence.
    `,
    quote: "Time is not a resource to be spent in haste; it is the canvas upon which your character is painted."
  },
  {
    slug: "the-myth-of-passive-clarity",
    title: "The Myth of Passive Clarity",
    subtitle: "Why purpose is never found waiting on a mountain peak, but built through deliberate inquiry.",
    category: "Purpose",
    date: "September 28, 2024",
    readTime: "5 min read",
    isFeatured: false,
    excerpt: "Waiting for inspiration is the favorite refuge of the hesitant. True clarity of purpose is not a sudden revelation; it is the residue of consistent, honest engagement with life.",
    content: `
### Beyond the Waiting Room

Many individuals spend decades waiting for their "true calling" to reveal itself in a burst of cinematic certainty. They read countless self-help books, attend seminars, and wait for a sign. But purpose does not operate like a radio frequency that you suddenly tune into while sitting idle.

Clarity follows action, not the other way around. It is in the act of committing to a craft, solving a real problem, or helping another person that your own internal compass begins to calibrate.

### The Diagnostic Power of Resistance

When you observe what frustrates you most about the world, you are often looking directly at the raw material of your purpose. The things that bother you—injustice, poor design, superficiality, financial ignorance—are clues to where your energy is most urgently needed.

Don't ask: *What will make me happy?*  
Ask instead: *What problem is worth my patience, my sacrifice, and my discipline?*
    `,
    quote: "Clarity is not the precursor to action; it is the dividend of deliberate commitment."
  },
  {
    slug: "money-as-stored-agency",
    title: "Money as Stored Agency: Reframing Wealth",
    subtitle: "Moving beyond status symbols to understand the true sovereignty of capital.",
    category: "Money",
    date: "August 19, 2024",
    readTime: "7 min read",
    isFeatured: false,
    excerpt: "The ultimate luxury is not what you can buy, but what you can walk away from. When money is understood as freedom rather than display, your entire economic worldview transforms.",
    content: `
### The Display Delusion

The modern world encourages us to convert intangible wealth (savings, security, peace of mind) into tangible displays (vehicles, watches, square footage) to impress people whose opinions we do not actually value.

This is the central paradox of consumption: the more wealth you display, the less sovereignty you retain. True wealth is silent. It exists in the unencumbered balance sheet, the debt-free property, and the psychological freedom to say "no" to compromises that degrade your dignity.

> "Wealth is what you do not see: the unbought car, the unspent dollar, the unaccepted contract that violates your ethics."

### Three Pillars of Capital Stewardship

1. **Margin over Maximum**: Never run your financial engine at 100% capacity. Liquidity and cash reserves provide psychological safety during economic storms.
2. **Defensive Thinking**: The first rule of compounding is never interrupt it unnecessarily. Avoiding catastrophic loss is far more important than chasing maximum return.
3. **Generational Perspective**: Evaluate investments not on their quarterly return, but on how they will stand twenty or thirty years from today.
    `,
    quote: "The highest return on money is the ability to control your own time every single morning."
  },
  {
    slug: "the-quiet-strength-of-restraint-in-business",
    title: "The Quiet Strength of Restraint in Business",
    subtitle: "Why saying no to 90% of opportunities is the foundational discipline of enduring enterprises.",
    category: "Business",
    date: "July 12, 2024",
    readTime: "5 min read",
    isFeatured: false,
    excerpt: "Most businesses do not die of starvation; they die of indigestion from chasing too many shiny opportunities simultaneously.",
    content: `
### The Discipline of Focus

In early business stages, opportunism is necessary for survival. But as an enterprise matures, opportunism becomes its greatest vulnerability. Every new initiative, client type, or product line dilutes the core competence that created initial success.

The most admirable companies and personal brands are defined not by what they do, but by the lucrative things they consciously choose *not* to do.

Restraint builds reputation. When clients and readers know you hold unbreakable standards, your work gains an enduring, premium gravity.
    `,
    quote: "Strategy is the art of deliberate sacrifice."
  },
  {
    slug: "on-writing-letters-that-survive-us",
    title: "On Writing Letters That Survive Us",
    subtitle: "Reflections on legacy, memory, and the enduring power of the written word.",
    category: "Perspective",
    date: "June 04, 2024",
    readTime: "6 min read",
    isFeatured: false,
    excerpt: "A digital message dissolves into the digital ether; a physical letter, penned with care, endures across generations as a tangible fragment of love and wisdom.",
    content: `
### The Permanence of Ink

When I began writing *A Letter To My Daughter*, I realized how few tangible artifacts of thought we leave behind for those we love. We leave thousands of text messages, receipts, and photos stored on corporate servers, but very few deliberate, carefully considered reflections on how we viewed the world.

To write a letter is to freeze a moment of consciousness in time. It is a gift not only to the recipient today, but to the grandchild who will one day hold the aged paper and understand the voice of someone they never met.
    `,
    quote: "A written word is a bridge thrown across the chasm of time."
  }
];

export function getArticleBySlug(slug) {
  return journalArticles.find((a) => a.slug === slug);
}
