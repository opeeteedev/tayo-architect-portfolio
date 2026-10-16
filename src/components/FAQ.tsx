"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const FAQ_ITEMS = [
  {
    category: "Process",
    q: "Who do you typically work with?",
    a: "I work with founders and CTOs who need a technical partner, not just a code-monkey. My clients range from bootstrapped Shopify brands to Series B SaaS companies architecting AI-powered platforms. If you need an architect who challenges your assumptions and builds for scale, we should talk.",
  },
  {
    category: "Process",
    q: "How is your approach different from a traditional agency?",
    a: "Agencies sell you a team. I sell you an architect. You are not paying for account managers or junior developers. You are paying for direct access to the person who designs and builds your system. I use AI to compress my own workflow, delivering in weeks what most agencies deliver in months.",
  },
  {
    category: "Technical",
    q: "Do you use AI in your own development process?",
    a: "Yes, extensively. I do not just build AI systems for clients. I use AI to accelerate my own delivery. This means faster iteration, fewer errors, and lower costs for you. It also means I understand the real-world limitations of AI, not just the marketing hype.",
  },
  {
    category: "Technical",
    q: "How do you handle security and confidentiality?",
    a: "Every project runs on a private GitHub repository owned by you. I sign NDAs when requested. Client data is never used to train AI models. For enterprise clients with strict compliance needs like HL7 FHIR, I architect systems that meet audit-ready standards.",
  },
  {
    category: "Pricing",
    q: "What is your pricing model?",
    a: "I charge flat project fees, not hourly. You know the exact cost before we start. Pricing is based on the value the system delivers to your business, not the hours it took to build. Payment is 50 percent upfront and 50 percent on delivery.",
  },
  {
    category: "Process",
    q: "What happens after launch?",
    a: "Every project includes a 30-day post-launch support window. After that, I offer monthly retainers for ongoing development, performance monitoring, and feature additions. I do not disappear after launch.",
  },
  {
    category: "Technical",
    q: "Can you work with our existing team or codebase?",
    a: "Yes. I regularly integrate into existing engineering teams. I can audit your current codebase, identify bottlenecks, and work alongside your developers to ship improvements.",
  },
  {
    category: "Process",
    q: "What is your typical project timeline?",
    a: "Shopify stores are 2 to 4 weeks. SaaS platforms are 6 to 12 weeks. AI agent systems and enterprise integrations are 8 to 16 weeks. I provide a detailed weekly breakdown after our discovery call.",
  },
];

const CATEGORIES = ["All", "Pricing", "Process", "Technical"];

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [openId, setOpenId] = useState<number | null>(null);

  const filteredItems =
    activeCategory === "All"
      ? FAQ_ITEMS
      : FAQ_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section id="faq" className="py-20 md:py-32 px-6 bg-background" aria-labelledby="faq-heading">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-accent-gold/10 border border-accent-gold/30 rounded-full text-accent-gold text-sm font-medium">
            Answers to Your Questions
          </span>
          <h2 id="faq-heading" className="mt-4 text-4xl md:text-5xl lg:text-6xl font-serif font-light text-text leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg md:text-xl text-text/60 max-w-2xl mx-auto leading-relaxed">
            Everything you need to know before we build together.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              aria-pressed={activeCategory === category}
              className={
                activeCategory === category
                  ? "px-6 py-2.5 rounded-full text-sm font-medium bg-accent-gold text-background shadow-[0_0_20px_rgba(212,175,55,0.5)] transition-all duration-300"
                  : "px-6 py-2.5 rounded-full text-sm font-medium bg-[#141416] border border-accent-cyan/50 text-text hover:border-accent-cyan hover:text-accent-cyan transition-all duration-300"
              }
            >
              {category}
            </button>
          ))}
        </div>

        <div className="space-y-4">
          {filteredItems.map((item, index) => (
            <div
              key={index}
              className="glow-border p-6 md:p-8 bg-[#141416] rounded-2xl transition-all duration-300"
            >
              <button
                onClick={() => setOpenId(openId === index ? null : index)}
                aria-expanded={openId === index}
                className="flex w-full items-center justify-between"
              >
                <h3 className="font-serif text-xl md:text-2xl font-medium text-accent-gold leading-snug">
                  {item.q}
                </h3>
                <motion.span
                  className="w-5 h-5 shrink-0"
                  style={{ rotate: openId === index ? 180 : 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </motion.span>
              </button>
              <AnimatePresence mode="wait">
                {openId === index && (
                  <motion.div
                    key="answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-4 overflow-hidden"
                  >
                    <p className="text-accent-cyan/80 text-lg leading-relaxed">
                      {item.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 relative p-8 md:p-12 rounded-3xl glow-border bg-[#141416] text-center overflow-hidden"
        >
          <div className="absolute inset-0 bg-accent-cyan/10 rounded-3xl blur-3xl opacity-30" aria-hidden="true" />
          <h2 className="relative z-10 text-3xl md:text-4xl font-serif font-medium text-text leading-tight">
            Still have questions?
          </h2>
          <p className="relative z-10 mt-4 text-lg text-text/60 max-w-xl mx-auto leading-relaxed">
            The fastest way to get answers is a 20-minute call.
          </p>
          <a
            href="https://cal.com/tayoopeyemi"
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-10 inline-flex items-center gap-3 mt-8 px-10 py-5 bg-accent-gold text-background font-semibold text-lg rounded-full hover:bg-accent-gold/90 transition-all shadow-[0_0_40px_rgba(212,175,55,0.4)]"
          >
            Book a Free Consultation
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
