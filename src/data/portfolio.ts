export type PortfolioProject = {
  id: string;
  title: string;
  metric: string;
  description: string;
  featured: boolean;
  challenge: string;
  solution: string;
  results: string;
  gallery: string[];
};

export const portfolioProjects: PortfolioProject[] = [
  {
    id: "ai-video-campaign",
    title: "AI Agent Orchestration Platform",
    metric: "10,000+ tasks automated with 99.5% success rate",
    description: "Architected and deployed a multi-agent AI automation pipeline. Integrated custom LLM agents with internal APIs and data pipelines for enterprise clients.",
    featured: true,
    challenge: "Manual data processing and fragmented workflows were costing the client hundreds of hours per week. They needed a system that could think, route, and execute autonomously.",
    solution: "Built a multi-agent orchestration system using custom LLMs, Chatalyst API integration, and automated data pipelines to handle complex workflows end-to-end.",
    results: "10,000+ tasks automated within the first month. 99.5% success rate. Reduced manual operational overhead by 80%.",
    gallery: ["/dataflow-pipeline.png.png", "/nexus-orchestration.png.png"]
  },
  {
    id: "saas-arch",
    title: "Enterprise SaaS Architecture",
    metric: "99.9 percent Uptime and 100 Lighthouse",
    description: "Migrated a legacy monolith to Next.js 15 and AWS. Achieved a perfect performance score and zero downtime during the migration.",
    featured: false,
    challenge: "The client's legacy monolithic platform was crashing under heavy user load. Deployments took hours and often caused downtime. They needed a scalable architecture.",
    solution: "I architected a microservices based solution using Next.js 15, AWS ECS, and edge caching. I established a CI/CD pipeline with zero downtime deployments.",
    results: "Achieved a 100/100 Lighthouse performance score. Uptime improved to 99.9 percent. Cloud infrastructure costs were reduced by 35 percent.",
    gallery: ["/chatalyst-api.png.png", "/nexora-dashboard.png.png"]
  },
  {
    id: "shopify-luxury",
    title: "Luxury Shopify Storefront",
    metric: "3.2x increase in conversion rate",
    description: "Custom theme build for a high end fashion brand. Added AI video product showcases. Improved site speed to a 95 plus Lighthouse score.",
    featured: false,
    challenge: "The client had a beautiful store but a 1.2 second load time and a high cart abandonment rate. They needed a complete technical overhaul without losing their brand identity.",
    solution: "I rebuilt the theme from scratch using a custom Next.js frontend and optimized Shopify Liquid. I also integrated automated AI video showcases for their top products to increase engagement.",
    results: "Site speed improved to a 95 plus Lighthouse score. Conversion rate increased by 3.2x within the first month. Cart abandonment dropped by 40 percent.",
    gallery: ["/order-processing.png.png", "/nexora-dashboard.png.png"]
  }
];

export const metrics = [
  { value: 80, suffix: "%", label: "Pipeline Reduction" },
  { value: 100, suffix: "/100", label: "Lighthouse Score" },
  { value: 25, suffix: "%", label: "Retention Growth" },
  { value: 35, suffix: "%", label: "Cloud Overhead Reduction" }
];

export type Service = {
  title: string;
  description: string;
  features: string[];
};

export const services: Service[] = [
  {
    title: "AI & ML Integration",
    description: "Architecting intelligent systems that automate workflows and drive real business value.",
    features: ["Custom LLM Pipelines", "RAG & Vector Databases", "n8n Workflow Automation", "AI-Powered Product Features"]
  },
  {
    title: "Business Process Automation",
    description: "Streamline operations with intelligent workflow automation that eliminates manual, repetitive tasks.",
    features: ["n8n & Make Workflows", "API Integrations", "Data Synchronization", "Operational Dashboards"]
  },
  {
    title: "SaaS Platform Architecture",
    description: "Scalable, high-performance backend systems for growing platforms.",
    features: ["Next.js 15 App Router", "Edge caching & ISR", "Performance budgets", "Scalable API design"]
  },
  {
    title: "AI Video Production",
    description: "Automated video pipelines and AI-generated content for modern brands.",
    features: ["AI-Generated Product Videos", "Short-Form Reels & TikToks", "Motion Graphics", "Automated Video Pipelines"]
  },
  {
    title: "Data Engineering & Analytics",
    description: "Turn raw data into actionable insights with modern ETL pipelines and real-time analytics dashboards.",
    features: ["ETL Pipelines", "Real-Time Dashboards", "Data Warehousing", "Predictive Analytics"]
  },
  {
    title: "Cloud & DevOps Engineering",
    description: "Reliable, scalable infrastructure with automated deployment pipelines for cloud-native applications.",
    features: ["AWS & Vercel Deployment", "CI/CD Pipelines", "Docker & Serverless", "Infrastructure as Code"]
  },
  {
    title: "Enterprise Integration",
    description: "Robust, compliant systems that bridge legacy platforms with modern tech.",
    features: ["HL7 FHIR compliance", "Microservices architecture", "Legacy system bridges", "Audit-ready APIs"]
  },
  {
    title: "Shopify & E-Commerce",
    description: "High-converting custom storefronts engineered for speed and scale.",
    features: ["Custom Theme Development", "High-Converting UI/UX", "App Integration", "Speed Optimization"]
  },
  {
    title: "Performance & SEO",
    description: "Lightning-fast websites that rank higher and convert better.",
    features: ["Core Web Vitals Optimization", "Technical SEO Audits", "Lighthouse Score 100/100", "Edge Caching Strategy"]
  }
];

export const clientNames = [
  "LUXURY APPAREL",
  "SERIES B SAAS",
  "TECH STARTUP",
  "ECOMMERCE BRAND",
  "TECH AGENCY"
];

export const navLinks = [
  { label: "Home", href: "/#hero" },
  { label: "About", href: "/#about" },
  { label: "Projects", href: "/#portfolio" },
  { label: "Services", href: "/#services" },
  { label: "Stack", href: "/#stack" },
  { label: "Client Results", href: "/#testimonials" },
  { label: "Contact", href: "/#contact" }
];

export type Insight = {
  id: string;
  title: string;
  date: string;
  readTime: string;
  excerpt: string;
  category: string;
  content: string;
};

export const insights: Insight[] = [
  {
    id: "shopify-load-times",
    title: "How I Reduced Shopify Load Times by 50%",
    date: "March 15, 2024",
    readTime: "8 min read",
    excerpt: "A deep dive into the performance optimizations that took a luxury fashion brand from a 1.2s load time to sub-600ms. From Liquid optimization to edge caching strategies.",
    category: "Performance",
    content: "A 1.2 second load time was costing the client sales. Cart abandonment was high because the Shopify theme was bloated with unused apps and redundant scripts that had accumulated over years.\n\nThe approach started with a full audit of the Liquid theme. I removed every unused app and converted all images to WebP format. The hero slider loading five full size images was replaced with a single optimized WebP. I rewrote the Liquid templates from scratch cutting the template code by 40 percent.\n\nThe technical architecture moved to a headless Next.js frontend with edge caching. Cloudflare Workers cache the HTML at the edge using a stale while revalidate strategy. This gives returning visitors sub 100ms Time to First Byte globally. A service worker handles offline caching of critical assets.\n\nThe result was a 50 percent faster load time. Conversion rate increased by 3.2x in the first month. The client now has a performance budget in their CI pipeline so regressions get caught before they ship."
  },
  {
    id: "ai-video-ecommerce",
    title: "The Future of AI Video in E-Commerce",
    date: "January 22, 2024",
    readTime: "12 min read",
    excerpt: "How automated AI video pipelines are transforming product marketing. A case study on generating 50+ premium videos in 48 hours while maintaining brand quality.",
    category: "AI & Automation",
    content: "Video is the highest converting content format for e-commerce. Traditional production is too expensive and slow for brands that need to showcase hundreds of products across seasonal campaigns.\n\nThe solution uses AI avatars and programmatic video generation. Instead of filming each product the system generates scripts from product data selects relevant B roll from a licensed library and assembles the final video with branded overlays and transitions.\n\nThe pipeline connects the product catalog directly to the AI video generator. When a new product is added to the PIM the system automatically creates a video using the product title description and images. A human review step ensures quality before the video goes live.\n\nThe impact was a 90 percent reduction in production costs. Social engagement increased by 300 percent. The pipeline is now a permanent part of their content operations generating new videos whenever products are added to the catalog."
  },
  {
    id: "architecting-uptime",
    title: "Architecting for 99.9% Uptime",
    date: "November 8, 2023",
    readTime: "10 min read",
    excerpt: "Lessons learned migrating a legacy monolith to a microservices architecture on AWS. Zero-downtime deployments, edge caching, and the patterns that keep systems resilient.",
    category: "Architecture",
    content: "Legacy monoliths crash under heavy load. A single memory leak brings down the entire platform. Downtime destroys client trust and costs revenue every minute the system is offline.\n\nThe architectural approach splits the monolith into microservices deployed on AWS ECS. Each service owns its domain and can scale independently. Edge caching through CloudFront handles 80 percent of traffic at the edge. Aurora Serverless v2 provides the database with automatic scaling and read replicas.\n\nThe deployment pipeline uses CI/CD with zero downtime deployments. Blue green deployments for stateless services and backward compatible schema migrations for the database. Every migration works with both old and new code. Columns are only dropped after two successful releases.\n\nThe results are 99.9 percent uptime and a 100 Lighthouse performance score. The system handles ten times the previous load. The team deploys fifty times a week with confidence."
  }
];