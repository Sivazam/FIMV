const WA_MESSAGE = encodeURIComponent(
  "Hi FACT IN MEDIA! I'd like to discuss a campaign for my constituency. Let's win together!"
);

export const CONTACT = {
  phones: ["+91 95337 77726", "+91 70364 61514"],
  rawPhones: ["9533777726", "7036461514"],
  email: "connect2factinmedia@gmail.com",
  website: "www.factinmedia.com",
  whatsapp: {
    primary: `https://wa.me/919533777726?text=${WA_MESSAGE}`,
    secondary: `https://wa.me/917036461514?text=${WA_MESSAGE}`,
  },
  profileDeck: "/fim/FACT_IN_MEDIA.pdf",
  socials: [
    { label: "X / Twitter", handle: "@FACTINMEDIA", href: "https://x.com/" },
    { label: "Facebook", handle: "FACT IN MEDIA", href: "https://facebook.com/" },
    { label: "YouTube", handle: "FACT IN MEDIA", href: "https://youtube.com/" },
  ],
};

export const STATS = [
  { value: 2022, label: "Founded in the heat of the arena", suffix: "", isYear: true },
  { value: 40, suffix: "+", label: "Battle-ready services under one roof" },
  { value: 6, suffix: "", label: "Major parties served across lines" },
  { value: 2, suffix: "", label: "States commanded — AP & Telangana" },
  { value: 24, suffix: "×7", label: "War room that never sleeps" },
];

export const PILLARS = [
  {
    id: "faith",
    index: "01",
    name: "Faith",
    color: "#2dd4a0",
    description:
      "Every mandate begins with trust. We work under the guidelines of our customers' faith — earned in back-to-back campaigns, kept through results.",
  },
  {
    id: "service",
    index: "02",
    name: "Customer Service",
    color: "#38cfd8",
    description:
      "Constituency problems at 2 AM? We answer. Dedicated response teams, 24×7 availability and satisfaction guaranteed through relentless service.",
  },
  {
    id: "analysis",
    index: "03",
    name: "Analysis",
    color: "#ff9330",
    description:
      "Gut feeling loses to ground data. We conduct deep analysis — surveys, booth math, caste equations, sentiment maps — before a single rupee is spent.",
  },
  {
    id: "transparency",
    index: "04",
    name: "Transparency",
    color: "#f2544a",
    description:
      "No black boxes, no hidden invoices. Every strategy, every rupee, every result is reported with complete transparency to our customers.",
  },
];

export type ServiceCategory = {
  id: string;
  index: string;
  title: string;
  tagline: string;
  accent: string;
  gains: string[];
  services: { name: string; benefit: string; chips: string[] }[];
};

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: "strategy",
    index: "01",
    title: "Political Strategy",
    tagline: "The brain of the campaign",
    accent: "#ff5a1f",
    gains: ["A clear game plan", "Zero wasted spend", "Split-second responses"],
    services: [
      {
        name: "Political Image Building",
        benefit: "Voters trust the leader before the first speech is delivered.",
        chips: ["Perception strategy", "Positive narratives", "Media presence", "Public outreach"],
      },
      {
        name: "Campaign Ideation",
        benefit: "A story only your candidate can tell — and voters repeat.",
        chips: ["Audience concepts", "Slogans & themes", "Innovative formats"],
      },
      {
        name: "Electioneering — End to End",
        benefit: "You shake hands. We run the entire machine.",
        chips: ["Plan–execute–monitor", "Constituency mapping", "Rally planning", "Mandal strategy", "Door-to-door", "Missed-call drives"],
      },
      {
        name: "Booth-Level Management",
        benefit: "Every booth has a captain. Every captain has a plan.",
        chips: ["Voter mapping", "List analysis", "Volunteer tools", "Day-wise actions"],
      },
      {
        name: "War Room Setup & Monitoring",
        benefit: "Nothing surprises you — live dashboards catch it first.",
        chips: ["24×7 command centre", "Real-time dashboards", "Response squads"],
      },
      {
        name: "Negative Campaign Management",
        benefit: "Opposition attacks die within the news cycle — not after it.",
        chips: ["Opposition tracking", "Rapid rebuttals", "Troll control", "Counter-narratives"],
      },
      {
        name: "Manifesto Drafting Support",
        benefit: "Promises people believe — built around their issues.",
        chips: ["People-first content", "Issue structuring", "Positioning"],
      },
      {
        name: "Polling Day & Post-Poll",
        benefit: "Your voters reach the booth. Your agents know the plan.",
        chips: ["Voter mobilization", "Booth agents", "Live tracking", "Exit polls", "Post-poll review"],
      },
    ],
  },
  {
    id: "digital",
    index: "02",
    title: "Digital & Social Dominance",
    tagline: "Own every timeline",
    accent: "#38cfd8",
    gains: ["Own every timeline", "Reach at machine scale", "24×7 reputation shield"],
    services: [
      {
        name: "Social Content Management",
        benefit: "Your timeline never sleeps — daily presence, daily engagement.",
        chips: ["Daily posting", "Analytics & trends", "Community handling"],
      },
      {
        name: "Digital Marketing",
        benefit: "The right voter, the right message, the right rupee.",
        chips: ["SEO & SEM", "Meta · Google · YouTube", "Precision targeting"],
      },
      {
        name: "Meme Marketing",
        benefit: "Your message travels at share speed — for free.",
        chips: ["Trend-jacking", "Political memes", "Viral velocity"],
      },
      {
        name: "Blue Tick Verification",
        benefit: "Credibility that stops the scroll — and the impersonators.",
        chips: ["FB · IG · X badges", "Documentation", "Leader credibility"],
      },
      {
        name: "Fake News Monitoring & ORM",
        benefit: "Attacks get neutralised before your phone rings.",
        chips: ["Misinformation tracking", "Reputation shield", "Social listening"],
      },
      {
        name: "Bulk SMS & WhatsApp",
        benefit: "Ten lakh voters reached before breakfast.",
        chips: ["Mass messaging", "Media-rich formats", "Response tracking", "API automation"],
      },
      {
        name: "IVR Calling Services",
        benefit: "The leader's voice in every living room — at scale.",
        chips: ["Pre-recorded calls", "Call-based polls", "Feedback loops"],
      },
      {
        name: "Leader App Development",
        benefit: "Your whole campaign in every worker's pocket.",
        chips: ["Custom apps", "Updates & tasks", "On-move voter DB"],
      },
      {
        name: "Festival Greetings Automation",
        benefit: "Year-round presence in every family group chat.",
        chips: ["Festive creatives", "Auto-scheduling", "Emotional connect"],
      },
    ],
  },
  {
    id: "studio",
    index: "03",
    title: "Content Studio",
    tagline: "Stories that move millions",
    accent: "#f2544a",
    gains: ["Stories voters rewatch", "Hours, not weeks", "Cinema-grade craft"],
    services: [
      {
        name: "Reel Videos",
        benefit: "Thumb-stopping stories voters watch to the last second.",
        chips: ["IG & FB shorts", "Creative scripting", "Trend-based cuts"],
      },
      {
        name: "Speech Videos & Thumbnails",
        benefit: "Every speech becomes a shareable moment.",
        chips: ["Recording & edits", "Custom thumbnails", "Highlight cuts"],
      },
      {
        name: "Voice Over Videos",
        benefit: "One message — in every language your voters speak.",
        chips: ["Multilingual VO", "Narration & promos", "Dubbing support"],
      },
      {
        name: "Live Video Streaming",
        benefit: "Rallies reach far beyond the ground — live, everywhere.",
        chips: ["Event coverage", "Multi-platform", "Live engagement"],
      },
      {
        name: "Video Editing & Graphic Design",
        benefit: "Studio-grade creative, in-house — no agency markup.",
        chips: ["Pro editing", "Posters & flyers", "Digital + print"],
      },
      {
        name: "Customized Political Songs",
        benefit: "Anthems that play at every street-corner meeting.",
        chips: ["Audio branding", "Recorded songs", "Dialer tunes"],
      },
      {
        name: "Documentaries & Short Films",
        benefit: "The leader's journey, told like cinema.",
        chips: ["Journey films", "Ground-reality stories", "Script to screen"],
      },
      {
        name: "AI Video Solutions",
        benefit: "Campaign films in hours — not weeks.",
        chips: ["AI spokespersons", "Lip-sync multilingual", "Fast turnaround"],
      },
      {
        name: "LED Campaigns",
        benefit: "Your face on every high street, after dark.",
        chips: ["LED video vans", "Location targeting", "Rally visibility"],
      },
    ],
  },
  {
    id: "research",
    index: "04",
    title: "Research & Data Warfare",
    tagline: "Numbers before noise",
    accent: "#2dd4a0",
    gains: ["Decisions on data", "Know the result early", "Every voter mapped"],
    services: [
      {
        name: "Public Opinion Polls",
        benefit: "Know the result before the electorate does.",
        chips: ["Scientific surveys", "Data analysis", "Predictive insight"],
      },
      {
        name: "Election Surveys",
        benefit: "Ground truth — not drawing-room guesses.",
        chips: ["Pre-poll & exit", "Ground feedback", "Strategy input"],
      },
      {
        name: "Data Management",
        benefit: "Every voter in the constituency, one clean database.",
        chips: ["Segmentation", "Visualization", "Secure storage"],
      },
      {
        name: "Mobile Number Database",
        benefit: "The fuel for every SMS, call and WhatsApp push.",
        chips: ["Constituency filters", "Age & caste segments", "Legal & updated"],
      },
      {
        name: "Content Writing",
        benefit: "Words that turn readers into volunteers.",
        chips: ["Articles & blogs", "Speeches & scripts", "Campaign copy"],
      },
      {
        name: "Voter Awareness Campaigns",
        benefit: "First-time voters become first-time supporters.",
        chips: ["Youth & women drives", "Issue campaigns", "Awareness films"],
      },
    ],
  },
  {
    id: "outreach",
    index: "05",
    title: "Branding & Ground Outreach",
    tagline: "From podium to doorstep",
    accent: "#ff9330",
    gains: ["Ground presence everywhere", "Borrowed trust", "Gratitude that converts"],
    services: [
      {
        name: "Personal Branding for Leaders",
        benefit: "A leader people quote — not just vote for.",
        chips: ["Vision documents", "Image consultancy", "Leader's diary"],
      },
      {
        name: "Influencer & Celebrity Collabs",
        benefit: "Borrowed trust, transferred to you.",
        chips: ["Regional line-ups", "Endorsements & bytes", "Collab strategy"],
      },
      {
        name: "Media Coverage & PR",
        benefit: "Earned headlines in the papers voters still trust.",
        chips: ["Press releases", "News features", "Airtime coordination"],
      },
      {
        name: "Complaint Management System",
        benefit: "Every grievance answered — a vote bank built on gratitude.",
        chips: ["Toll-free setup", "WhatsApp intake", "Resolution tracking"],
      },
      {
        name: "Election Material Supply",
        benefit: "The ground game, fully equipped — flags to T-shirts.",
        chips: ["Pamphlets & banners", "Custom printing", "Fast delivery"],
      },
      {
        name: "Cadre Training",
        benefit: "Volunteers who message with discipline.",
        chips: ["Volunteer briefings", "Voter interaction", "Booth agent prep"],
      },
    ],
  },
];

export const FOUNDER_TIMELINE = [
  {
    year: "17",
    era: "AGE",
    title: "Selected to the Indian Air Force",
    description:
      "Discipline was never taught to Karthik — it was earned early. At seventeen he was selected into the Indian Air Force, an institution that forged his operational mind.",
  },
  {
    year: "DELHI → RAJAHMUNDRY",
    era: "GROUND ZERO",
    title: "Personal Assistant to MP Shri Margani Bharat",
    description:
      "Serving the Rajahmundry MP gave him real-time experience in constituency operations, politicking and public interaction — the classroom no university offers.",
  },
  {
    year: "2022",
    era: "BIRTH",
    title: "Fact In Media is founded",
    description:
      "A new-generation consultancy combining ground realities with modern strategy. Recognition came fast — for strategy, digital dominance and a Telangana–Andhra focus.",
  },
  {
    year: "NOW",
    era: "COMMAND",
    title: "The most sought-after digital consultant in AP & Telangana",
    description:
      "MLAs, MPs and Ministers across party lines trust one war room. Key role in successful election campaigns across the two states — and counting.",
  },
];

export const PARTIES = [
  { name: "YSRCP", full: "Yuvajana Sramika Rythu Congress Party" },
  { name: "TDP", full: "Telugu Desam Party" },
  { name: "JANASENA", full: "Jana Sena Party" },
  { name: "BJP", full: "Bharatiya Janata Party" },
  { name: "INC", full: "Indian National Congress" },
  { name: "BRS", full: "Bharat Rashtra Samithi" },
];

export const PROCESS_STEPS = [
  {
    index: "01",
    title: "Recon & Analysis",
    description:
      "We start where the votes are — constituency mapping, voter list analysis, caste equations, sentiment surveys. No assumptions, only evidence.",
    deliverables: ["Constituency map", "Voter segmentation", "Sentiment report"],
  },
  {
    index: "02",
    title: "Narrative Engineering",
    description:
      "Slogans, themes, manifestos and the story only this leader can tell. We build the message before we buy the megaphone.",
    deliverables: ["Campaign theme", "Slogan & manifestos", "Content calendar"],
  },
  {
    index: "03",
    title: "War Room Activation",
    description:
      "24×7 command centre goes live. Real-time dashboards, response teams, media monitoring, fake-news firewalls — the campaign now has a heartbeat.",
    deliverables: ["Live dashboards", "Response squads", "ORM shield"],
  },
  {
    index: "04",
    title: "Ground Game",
    description:
      "Booth-level management, cadre training, door-to-door outreach, LED vans, rallies and influencer amplification — digital air cover meets ground troops.",
    deliverables: ["Booth activation", "Outreach drives", "Material logistics"],
  },
  {
    index: "05",
    title: "Poll Day & Beyond",
    description:
      "Voter mobilization, booth agents, live tracking through polling day — then exit polls, post-poll analysis and the next battle plan.",
    deliverables: ["Poll-day playbook", "Exit poll insights", "Post-poll review"],
  },
];

export const NAV_LINKS = [
  { label: "The Firm", href: "#firm" },
  { label: "Pillars", href: "#pillars" },
  { label: "Arsenal", href: "#services" },
  { label: "Founder", href: "#founder" },
  { label: "Playbook", href: "#playbook" },
  { label: "Contact", href: "#contact" },
];
