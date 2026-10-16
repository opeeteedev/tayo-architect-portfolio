"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { portfolioProjects } from "@/data/portfolio";

export default function BentoGrid() {
  return (
    <section id="portfolio" className="py-20 md:py-32 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-text mb-4">
            Selected Work
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {portfolioProjects.map((project, index) => {
            const isFeatured = project.featured;
            return (
              <Link
                key={project.id}
                href={`/work/${project.id}`}
                className={`block w-full h-full group ${
                  isFeatured
                    ? "md:col-span-8 md:row-span-2"
                    : "md:col-span-4"
                }`}
              >
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10, rotateX: 2, rotateY: 2, scale: 1.02 }}
                  className="glow-border bg-[#141416] rounded-2xl p-8 h-full flex flex-col justify-between transition-shadow hover:shadow-[0_0_40px_rgba(0,212,255,0.15)]"
                >
                  <div>
                    <div className="flex flex-wrap gap-2 mb-6">
                      <span className="px-3 py-1 bg-accent-cyan/10 border border-accent-cyan/30 rounded-full text-accent-cyan text-xs font-medium">
                        {project.metric}
                      </span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-serif text-text mb-4">
                      {project.title}
                    </h3>
                    <p className="text-text/60 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  <div className="mt-8 flex items-center text-accent-cyan font-medium">
                    <span>View Case Study</span>
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </motion.div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}