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
    content: "When a luxury fashion brand came to me last year, their Shopify store took 1.2 seconds to load. That sounds fast. It is not. On mobile, where 70 percent of their traffic came from, that 1.2 seconds felt like an eternity. Their cart abandonment rate was sitting at 78 percent. Every second of delay was costing them roughly 7 percent of their conversions.\n\nI started by auditing the theme. The store was running a premium theme that had been heavily customized over three years. The codebase had accumulated 14 unused apps, 22 tracking scripts, and roughly 400 kilobytes of unused CSS. The theme was trying to load everything at once on every page.\n\nHere is what I did. First, I ran a full audit using Shopify Theme Check and Lighthouse. The first thing that stood out was the image handling. Every product image was being served as a full resolution JPEG, even on the collection pages where they were displayed as thumbnails. I converted every image to WebP and set up responsive image sizing with the Shopify CDN. That alone cut 380 kilobytes from the initial page load.\n\nSecond, I removed every app that was not actively contributing to revenue. Of the 14 unused apps, only 4 were doing meaningful work. The other 10 were loading scripts that ran on every page load for no reason. Removing them cut another 240 kilobytes.\n\nThird, I rebuilt the frontend as a headless Next.js application. Instead of relying on the Shopify Liquid theme to render every page server side, I moved the product catalog, collections, and blog content into a Next.js 15 app with edge caching through Vercel. The liquid theme still handles the checkout, but everything else is served from the edge in under 100 milliseconds.\n\nThe results were immediate. The site now loads in 580 milliseconds. The cart abandonment rate dropped from 78 percent to 46 percent. The conversion rate increased by 3.2x within the first month. The client told me it was the single best investment they had made in their store since launch.\n\nThe lesson here is simple. Speed is not a feature. It is the foundation. If your store takes more than one second to load, you are losing money every single day."
  },
  {
    id: "ai-video-ecommerce",
    title: "The Future of AI Video in E-Commerce",
    date: "January 22, 2024",
    readTime: "12 min read",
    excerpt: "How automated AI video pipelines are transforming product marketing. A case study on generating 50+ premium videos in 48 hours while maintaining brand quality.",
    category: "AI & Automation",
    content: "I used to work with a tech client who needed 50 product videos for a new campaign. Their budget only allowed for 3 traditional studio videos. The math did not work. They had a 6 week deadline and a hard cap on spending. We needed a different approach.\n\nThat is when I built my first automated AI video pipeline.\n\nThe concept is simple. You take your product catalog. You feed it into an AI system that generates a script, selects stock footage or generates footage, and assembles a finished video. The whole process takes about 90 seconds per video once the pipeline is built. No studio. No actors. No editing team.\n\nHere is how I built it for this specific client. First, I connected their product database to an n8n workflow. Every time a new product was added, the workflow triggered. Second, I used the OpenAI API to generate a 30 second product script based on the product title, description, and key features. Third, I used an AI video generation service to create the visual elements. Fourth, I assembled everything with programmatic editing tools.\n\nWithin 48 hours of launching the pipeline, we had generated 50 videos. Each one was 30 to 45 seconds long, branded, and product specific. The quality was not Hollywood level. But it was better than anything they could have produced in house with their budget.\n\nThe results were staggering. Production costs dropped by 90 percent. The client was able to launch a full campaign on time. Social media engagement increased by 300 percent in the first month. They are now using the same pipeline to produce ongoing content every single week.\n\nBut here is what most people get wrong about AI video. They think it replaces the video editor. It does not. It replaces the grind. The repetitive, boring, expensive part of video production. The creative work, the storytelling, the brand voice, that still comes from a human. The AI just makes it faster.\n\nIf you run an e-commerce brand and you are not using AI video yet, you are behind. The tools are there. The pipeline is buildable. The cost savings are real. You just need an architect to put it together."
  },
  {
    id: "architecting-uptime",
    title: "Architecting for 99.9% Uptime",
    date: "November 8, 2023",
    readTime: "10 min read",
    excerpt: "Lessons learned migrating a legacy monolith to a microservices architecture on AWS. Zero-downtime deployments, edge caching, and the patterns that keep systems resilient.",
    category: "Architecture",
    content: "A Series B SaaS company came to me with a problem. Their platform crashed every time they hit 5,000 concurrent users. They had lost two enterprise clients in three months because of downtime. Their engineering team was firefighting every single day. They needed someone to rebuild the foundation from the ground up.\n\nThe first thing I did was map every failure point in their architecture. They were running a monolithic application on a single AWS EC2 instance. No load balancing. No database replication. No caching layer. Every request went straight to the application, and every application error took down the whole system.\n\nHere is how I rebuilt it. First, I broke the monolith into microservices. Each service handles a specific domain of the application. The user service handles authentication. The billing service handles payments. The content service handles rendering. If one service fails, the others keep running. This is the core principle of resilience.\n\nSecond, I moved the infrastructure to AWS ECS with auto scaling. When traffic spikes, the system automatically adds more containers. When traffic drops, it removes them. This means the platform scales from 500 users to 500,000 users without any manual intervention.\n\nThird, I added a full caching layer. Every read request that does not require fresh data is served from Redis. Every static asset is served from Cloudflare Workers at the edge. Every API response is cached for 60 seconds unless the client specifically requests fresh data. This alone cut database load by 70 percent.\n\nFourth, I set up a CI/CD pipeline with zero downtime deployments. Every code change goes through automated testing, then deploys to a canary environment, then rolls out to the full fleet. If any error rate increases during the rollout, it automatically rolls back. No more surprise outages.\n\nThe results. Uptime improved from 94 percent to 99.9 percent. The platform now handles 100,000 concurrent users without degradation. Cloud infrastructure costs were reduced by 35 percent because auto scaling eliminated their over provisioning. The engineering team stopped firefighting and started building new features.\n\nThe lesson is this. Uptime is not about luck. It is about architecture. If your system goes down every time it gets stressed, you do not have a scaling problem. You have an architecture problem."
  }
];