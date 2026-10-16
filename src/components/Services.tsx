"use client";

import { motion } from "motion/react";
import { services } from "@/data/portfolio";

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-32 px-6" aria-labelledby="services-heading">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-accent-gold/10 border border-accent-gold/30 rounded-full text-accent-gold text-sm font-medium">
            Expertise
          </span>
          <h2 id="services-heading" className="mt-4 text-4xl md:text-5xl lg:text-6xl font-serif font-light text-text leading-tight">
            What I Do
          </h2>
          <p className="mt-4 text-lg md:text-xl text-text/60 max-w-2xl mx-auto leading-relaxed">
            End-to-end delivery across the full product lifecycle — from architecture to launch.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" style={{ perspective: 1000 }}>
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30, transition: { duration: 0.6, delay: 0.2 + index * 0.1 } }}
              whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 + index * 0.1 } }}
              viewport={{ once: true, margin: "-100px" }}
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity, repeatDelay: 0, delay: index * 0.5, ease: "easeInOut" }}
              whileHover={{ rotateX: 5, rotateY: -5, scale: 1.05, transition: { type: "spring", stiffness: 300, damping: 20 } }}
              className={`glow-border group relative p-8 bg-surface/50 backdrop-blur-sm rounded-2xl transition-all duration-500 ${
                index === 0
                  ? "shadow-[0_0_40px_rgba(0,212,255,0.3)]"
                  : ""
              }`}
            >
              {index === 0 && (
                <span className="absolute top-4 right-4 px-3 py-1 bg-accent-cyan text-background text-xs font-bold rounded-full">
                  HOT
                </span>
              )}
              <div className="flex items-center gap-3 mb-6">
                <span className="w-2 h-2 rounded-full bg-accent-gold flex-shrink-0" />
                <h3 className="text-xl md:text-2xl font-serif font-medium text-text">{service.title}</h3>
              </div>
              <p className="text-text/70 mb-6 leading-relaxed">{service.description}</p>
              <ul className="space-y-3" role="list">
                {service.features.map((feature, featureIndex) => (
                  <motion.li
                    key={feature}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 + featureIndex * 0.05 }}
                    className="flex items-center gap-3 text-text/80 group-hover:text-text transition-colors"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan/50 group-hover:bg-accent-cyan group-hover:scale-125 transition-all duration-300 flex-shrink-0" />
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}