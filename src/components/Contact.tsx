"use client";

import { motion } from "motion/react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-32 px-6" aria-labelledby="contact-heading">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 id="contact-heading" className="text-4xl md:text-5xl font-serif text-text mb-4">
            Start a Project
          </h2>
          <p className="mt-4 text-lg md:text-xl text-text/60 max-w-2xl mx-auto leading-relaxed">
            Have a project in mind? Let's talk about how I can help you build something exceptional.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glow-border bg-[#141416] backdrop-blur-sm rounded-2xl p-8 mt-12 text-center"
        >
          <p className="text-text/70 mb-8 max-w-xl mx-auto leading-relaxed">
            I prefer to keep things simple. Click below to open your email client with a pre-filled subject line.
          </p>
          <a
            href="mailto:opeyemitecharchitect@gmail.com?subject=New Project Inquiry"
            className="inline-block px-10 py-4 bg-accent-gold text-background font-semibold text-base rounded-full hover:bg-accent-gold/90 transition-all hover:shadow-[0_0_30px_rgba(212,175,55,0.4)]"
          >
            Send Me an Email
          </a>
        </motion.div>
      </div>
    </section>
  );
}