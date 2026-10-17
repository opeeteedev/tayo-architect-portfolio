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
          <h3 className="text-lg md:text-xl text-text mb-6">Book Your Free Strategy Call</h3>
          <div className="w-full h-[600px] rounded-2xl overflow-hidden border border-cyan-400/20 bg-[#141416]">
            <iframe src="https://cal.com/tayoopeyemi" className="w-full h-full border-0" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}