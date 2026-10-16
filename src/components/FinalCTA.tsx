"use client";

import { motion } from "motion/react";

export default function FinalCTA() {
  return (
    <section id="cta" className="py-20 md:py-32 px-6" aria-labelledby="cta-heading">
      <div className="mx-auto max-w-4xl text-center relative">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-cyan/10 via-transparent to-accent-gold/10 rounded-3xl blur-3xl opacity-50" aria-hidden="true" />
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative space-y-8"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-accent-gold/10 border border-accent-gold/30 rounded-full text-accent-gold text-sm font-medium">
            Final Call
          </span>

          <h2 id="cta-heading" className="text-4xl md:text-5xl lg:text-6xl font-serif font-light text-text leading-tight">
            Your system has a bottleneck.
            <br />
            <span className="font-medium text-accent-cyan">I can find it in 20 minutes.</span>
          </h2>

          <p className="text-lg md:text-xl text-text/60 max-w-2xl mx-auto leading-relaxed">
            No vague audits. No generic advice. A focused architecture review that identifies
            your top 3 scaling risks and a concrete plan to fix them.
          </p>

          <motion.a
            href="https://cal.com/tayoopeyemi"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-3 px-10 py-5 bg-accent-gold text-background font-semibold text-lg rounded-full hover:bg-accent-gold/90 transition-all shadow-[0_0_40px_rgba(212,175,55,0.4)]"
          >
            Book a Free Architecture Audit
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
          </motion.a>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex items-center justify-center gap-3 text-text/70"
          >
            <span className="relative flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span>Currently available for new projects</span>
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}