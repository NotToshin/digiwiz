// Confirmed services and sectors, with examples for project planning.
export const services = [
  {
    slug: "custom-software", category: "Software", name: "Software services",
    description: "Build a tool around the work your team does every day.",
    scope: "Start with the tasks that are slow, repetitive or spread across several tools. A focused first version could bring records, approvals or reporting into one workflow.",
    questions: ["Which steps take the most manual effort?", "Who uses the tool, and what do they need to see?", "Which existing tools or data does it need to work with?"],
  },
  {
    slug: "web-development", category: "Web", name: "Custom websites",
    description: "Build a site that helps people understand your offer and take the next step.",
    scope: "Shape the navigation around the questions visitors arrive with, then design the pages and inquiry paths they need. Plan content and mobile layouts alongside the build.",
    questions: ["What do visitors need to learn or do first?", "Which pages and features are essential?", "What content is ready to use?"],
  },
  {
    slug: "wordpress-development", category: "WordPress", name: "WordPress websites",
    description: "Give your team a WordPress site they can keep up to date.",
    scope: "Decide what should be editable, which layouts need to repeat and what content can move from the existing site. Set up the site around those everyday editing tasks.",
    questions: ["Which pages will your team update regularly?", "Is there an existing site to carry content over from?", "Who will manage the site after launch?"],
  },
  {
    slug: "branding", category: "Brand", name: "Branding",
    description: "Create an identity that people can recognize across the places they meet your business.",
    scope: "Clarify what your business stands for and how it should feel. Build a visual direction that can carry from your website into campaign and sales materials.",
    questions: ["Which existing brand assets should carry forward?", "Who needs to recognize and understand the brand?", "Where will the identity appear first?"],
  },
  {
    slug: "digital-marketing", category: "Growth", name: "Digital marketing",
    description: "Plan campaigns around an audience, a message and a clear next step.",
    scope: "Choose channels based on where your audience pays attention. Tie campaign content to a landing page or inquiry path and agree on the signals that will guide changes.",
    questions: ["Who are you trying to reach?", "Which channels are you already using?", "What outcome would make the campaign worthwhile?"],
  },
] as const;

export type Service = (typeof services)[number];

export const industries = [
  { slug: "education", name: "Education", idea: "Help prospective students find course and admission information.", service: services[1] },
  { slug: "land-share", name: "Land share", idea: "Organize approved project information and give visitors a clear way to ask questions.", service: services[1] },
  { slug: "real-estate", name: "Real estate", idea: "Make property details, locations and inquiry options easier to find.", service: services[1] },
  { slug: "clothing", name: "Clothing", idea: "Give collections a consistent visual identity across online materials.", service: services[3] },
  { slug: "food-and-restaurants", name: "Food & restaurants", idea: "Keep menus, opening hours and location information easy to update.", service: services[2] },
  { slug: "healthcare", name: "Healthcare", idea: "Make public service information and contact options easy to navigate.", service: services[1] },
  { slug: "electrical-gadgets", name: "Electrical gadgets", idea: "Present product specifications and comparisons clearly.", service: services[1] },
  { slug: "salons", name: "Salons", idea: "Introduce services clearly and help people find booking information.", service: services[2] },
  { slug: "gyms", name: "Gyms", idea: "Reach prospective members with clear information about classes and memberships.", service: services[4] },
] as const;
