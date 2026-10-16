"use client";

import { motion } from "motion/react";

const categories = [
  {
    title: "AI & Machine Learning",
    tools: ["OpenAI API", "Anthropic Claude", "LangChain", "LlamaIndex", "CrewAI", "LangGraph"],
  },
  {
    title: "Automation & Workflows",
    tools: ["n8n", "Make", "Zapier", "Vercel AI SDK", "Pinecone", "Supabase Vector"],
  },
  {
    title: "Frontend Engineering",
    tools: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "Framer Motion", "TanStack Query"],
  },
  {
    title: "Backend & Data",
    tools: ["Node.js", "tRPC", "PostgreSQL", "Prisma", "Redis", "Python FastAPI"],
  },
  {
    title: "Cloud & DevOps",
    tools: ["Vercel", "AWS (ECS, S3, Lambda)", "Docker", "Cloudflare Workers", "GitHub Actions", "Terraform"],
  },
  {
    title: "AI Video & Design",
    tools: ["HeyGen", "ElevenLabs", "Runway ML", "Midjourney", "Figma", "Adobe Premiere Pro"],
  },
];

export default function TechStack() {
  return (
    <section id="stack" className="py-20 md:py-32 px-6" aria-labelledby="stack-heading">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-accent-gold/10 border border-accent-gold/30 rounded-full text-accent-gold text-sm font-medium mb-4">
            Technology Stack
          </span>
          <h2 id="stack-heading" className="text-4xl md:text-5xl lg:text-6xl font-serif font-light text-text leading-tight">
            The Tools I Master
          </h2>
          <p className="mt-4 text-lg md:text-xl text-text/60 max-w-2xl mx-auto leading-relaxed">
            A curated stack built for speed, scale, and intelligence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="glow-border bg-[#141416] rounded-2xl p-8"
            >
              <h3 className="text-xl font-serif font-medium text-accent-gold mb-6">
                {category.title}
              </h3>
              <ul className="space-y-3 font-jetbrains-mono text-sm text-accent-cyan" role="list">
                {category.tools.map((tool, toolIndex) => (
                  <li key={tool}>
                    <span className="mr-2">•</span>
                    {tool}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
