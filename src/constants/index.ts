// Navigation Links
export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Work", href: "#work" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

// Hero Section Content
export const heroContent = {
  headline: "Turning Clicks Into Customers",
  subheadline: "Digital Marketing Strategist at AirDesk",
  subtext:
    "I build campaigns that grow brands, generate leads, and move revenue.",
  cta1: "View My Work",
  cta2: "Let's Connect",
  badge: "@ AirDesk",
};

// Skills (TechStack - 3D Balls)
export const skills = [
  { name: "Google Ads", icon: "📊" },
  { name: "Meta Ads", icon: "👥" },
  { name: "SEO", icon: "🔍" },
  { name: "Google Analytics", icon: "📈" },
  { name: "HubSpot", icon: "🎯" },
  { name: "Mailchimp", icon: "✉️" },
  { name: "Canva", icon: "🎨" },
  { name: "Semrush", icon: "🛠️" },
  { name: "Notion", icon: "📝" },
  { name: "Zapier", icon: "⚡" },
  { name: "Hotjar", icon: "👀" },
  { name: "Figma", icon: "🎭" },
];

// Case Studies / Projects
export const caseStudies = [
  {
    id: 1,
    title: "Lead Generation Engine — AirDesk",
    description:
      "Built a full-funnel lead gen system using Meta Ads + landing page optimization, reducing CPA by 40% in 60 days.",
    image: "/images/projects/lead-gen.png",
    tags: ["Meta Ads", "Landing Pages", "CRO"],
    liveUrl: "#",
    objective: "Generate 500+ qualified B2B leads per month",
    result: "CPA ↓40% | Leads ↑3x | ROAS 4.2x",
  },
  {
    id: 2,
    title: "SEO Traffic Growth Strategy",
    description:
      "Drove 220% organic traffic growth in 6 months through technical SEO audits, content clusters, and backlink outreach.",
    image: "/images/projects/seo.png",
    tags: ["SEO", "Content Strategy", "Semrush"],
    liveUrl: "#",
    objective: "Increase non-paid traffic and domain authority",
    result: "Traffic ↑220% | DA +18 | #1 for 12 keywords",
  },
  {
    id: 3,
    title: "Google Ads Funnel Rebuild",
    description:
      "Rebuilt a fragmented Google Ads account with proper campaign segmentation, ad copy testing, and smart bidding strategies.",
    image: "/images/projects/google-ads.png",
    tags: ["Google Ads", "PPC", "Analytics"],
    liveUrl: "#",
    objective: "Improve ROAS from 1.8x to 4x+",
    result: "ROAS 4.6x | CTR ↑60% | Budget efficiency ↑35%",
  },
  {
    id: 4,
    title: "Brand Awareness Campaign",
    description:
      "Executed a 360° social media + display brand campaign for AirDesk's product launch across 3 platforms.",
    image: "/images/projects/brand.png",
    tags: ["Brand Strategy", "Social Media", "Display"],
    liveUrl: "#",
    objective: "Launch new product line with maximum reach",
    result: "2M+ Impressions | Reach ↑180% | Engagement ↑90%",
  },
  {
    id: 5,
    title: "Email Automation Sequences",
    description:
      "Built a full email nurture journey with behavioral triggers, A/B tested subject lines, and segmentation for AirDesk's CRM.",
    image: "/images/projects/email.png",
    tags: ["Email Marketing", "HubSpot", "Automation"],
    liveUrl: "#",
    objective: "Reduce sales cycle and increase trial conversions",
    result: "Open Rate 42% | Conv ↑28% | Churn ↓15%",
  },
  {
    id: 6,
    title: "Conversion Rate Optimization",
    description:
      "Ran a structured CRO program on AirDesk's key landing pages using heatmaps, user recordings, and A/B tests.",
    image: "/images/projects/cro.png",
    tags: ["CRO", "Hotjar", "A/B Testing"],
    liveUrl: "#",
    objective: "Increase demo booking rate on product pages",
    result: "Conversion ↑55% | Bounce Rate ↓30% | Revenue ↑22%",
  },
];

// Experience Timeline
export const experience = [
  {
    id: 1,
    role: "Digital Marketing Lead",
    company: "AirDesk",
    period: "2023 — Present",
    description:
      "Owning the full marketing funnel — from paid acquisition to email nurture to brand positioning. Managing cross-channel campaigns across Google, Meta, LinkedIn, and SEO. Reporting weekly ROAS and CAC metrics to leadership.",
    logo: "/images/logos/airdesk.png",
    tags: ["Google Ads", "Meta", "SEO", "Analytics", "HubSpot"],
  },
  {
    id: 2,
    role: "Performance Marketing Specialist",
    company: "GrowthLab Agency",
    period: "2021 — 2023",
    description:
      "Managed $200K+ monthly ad spend across 12 B2B SaaS clients. Built automated reporting dashboards and delivered consistent ROAS above 3.5x across all accounts.",
    logo: "/images/logos/growthlab.png",
    tags: ["PPC", "Paid Social", "Reporting", "CRO"],
  },
  {
    id: 3,
    role: "SEO & Content Strategist",
    company: "ContentFirst Studio",
    period: "2019 — 2021",
    description:
      "Led SEO for 8 startup clients — from technical audits to content cluster strategies. Consistently ranked client pages in top 3 for commercial-intent keywords.",
    logo: "/images/logos/contentfirst.png",
    tags: ["SEO", "Content", "Semrush", "Ahrefs"],
  },
];

// Stats / Animated Counters
export const stats = [
  { value: 50, suffix: "+", label: "Campaigns Launched" },
  { value: 4.2, suffix: "x", label: "Average ROAS" },
  { value: 220, suffix: "%", label: "Organic Traffic Growth" },
  { value: 3, suffix: "M+", label: "Total Ad Impressions" },
];

// Testimonials
export const testimonials = [
  {
    id: 1,
    name: "Rohan Mehta",
    role: "Head of Growth, AirDesk",
    quote:
      "Satyaprakash completely transformed our paid acquisition funnel. In 3 months, our CAC dropped by 35% and lead quality improved dramatically. He doesn't just run ads — he builds systems.",
    avatar: "/images/testimonials/rohan.png",
    rating: 5,
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Founder, GrowthLab Agency",
    quote:
      "One of the most analytically sharp marketers I've worked with. His ability to connect creative strategy with data-backed decisions is rare. Our clients love the results.",
    avatar: "/images/testimonials/priya.png",
    rating: 5,
  },
  {
    id: 3,
    name: "Ananya Bose",
    role: "CEO, ContentFirst Studio",
    quote:
      "Satya turned SEO from a mystery into a growth engine for us. 6 months in, we were ranking #1 for our top 3 commercial keywords. A genuine expert.",
    avatar: "/images/testimonials/ananya.png",
    rating: 5,
  },
];

// Logo Showcase (Brands/Tools)
export const logoShowcase = [
  { name: "Google", icon: "🔍" },
  { name: "Meta", icon: "👥" },
  { name: "HubSpot", icon: "🎯" },
  { name: "Semrush", icon: "🛠️" },
  { name: "Hotjar", icon: "👀" },
  { name: "Mailchimp", icon: "✉️" },
  { name: "LinkedIn", icon: "💼" },
  { name: "Canva", icon: "🎨" },
];

// Feature Cards (About/Value Prop)
export const featureCards = [
  {
    icon: "📊",
    title: "Data-Driven Strategy",
    description:
      "Every campaign decision is backed by numbers. No guesswork — only tested, measurable growth.",
  },
  {
    icon: "⚡",
    title: "Full-Funnel Execution",
    description:
      "From first impression to closed deal — I manage the entire customer acquisition journey end to end.",
  },
  {
    icon: "🎯",
    title: "Precision Targeting",
    description:
      "Audience research, segmentation, and behavioral targeting that puts the right message in front of the right person.",
  },
  {
    icon: "📈",
    title: "ROI-Obsessed",
    description:
      "ROAS, CAC, LTV — the numbers that actually matter. I optimize for business outcomes, not vanity metrics.",
  },
];

// Contact Info
export const contactInfo = {
  heading: "Let's Build Something That Grows",
  subtext:
    "Whether it's a campaign, a growth strategy, or a brand relaunch — let's talk about what we can build together.",
  email: "satyaprakash@airdesk.io",
  cta: "Send a Message",
};

// Social Links
export const socialLinks = [
  { name: "LinkedIn", url: "https://linkedin.com/in/satyaprakash", icon: "FaLinkedin" },
  { name: "Twitter", url: "https://twitter.com/satyaprakash", icon: "FaTwitter" },
  { name: "Instagram", url: "https://instagram.com/satyaprakash", icon: "FaInstagram" },
  { name: "GitHub", url: "https://github.com/satyaprakash", icon: "FaGithub" },
];

// About Section
export const aboutContent = {
  heading: "About Me",
  intro:
    "I'm a Digital Marketing strategist who obsesses over turning data into growth. For the past 5 years, I've built and scaled campaigns that generate leads, drive revenue, and build brands.",
  highlight:
    "Every campaign I run starts with a number and ends with a result.",
};
