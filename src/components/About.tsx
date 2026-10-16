"use client";

import { motion } from "motion/react";

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 px-6" aria-labelledby="about-heading">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-br from-accent-cyan/30 via-transparent to-accent-gold/30 rounded-3xl blur-2xl opacity-50" aria-hidden="true" />
            <div className="relative w-full aspect-square rounded-2xl bg-[#141416] overflow-hidden shadow-[0_0_40px_rgba(0,212,255,0.15)] glow-border">
              <img 
                src="/tayo-profile.png" 
                alt="Tayo Opeyemi" 
                className="object-cover object-center w-full h-full" 
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8 pt-8 lg:pt-0"
          >
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-accent-gold/10 border border-accent-gold/30 rounded-full text-accent-gold text-sm font-medium">
                About Me
              </span>
              <h2 id="about-heading" className="mt-4 text-4xl md:text-5xl lg:text-6xl font-serif font-light text-text leading-tight">
                Building systems that
                <br />
                <span className="font-medium text-accent-cyan">scale without breaking</span>
              </h2>
            </div>

            <div className="space-y-6 text-text/70 leading-relaxed text-lg">
              <p>
                I am Tayo Opeyemi. I am a Lead Systems Architect. I build digital foundations that perform. My work is simple. I build high converting Shopify stores. I architect scalable SaaS platforms using Next.js 15. I automate AI video pipelines. I focus on speed, scalability, and user experience. I do not just write code. I build systems that convert and scale.
              </p>
            </div>

            <div className="pt-6 border-t border-accent-cyan/10 space-y-4">
              <h3 className="text-lg font-semibold text-text">Get In Touch</h3>
              <div className="space-y-3">
                <a href="mailto:opeyemitecharchitect@gmail.com" className="flex items-center gap-3 text-text/80 hover:text-accent-cyan transition-colors group">
                  <span className="w-10 h-10 rounded-full bg-surface border border-accent-cyan/20 flex items-center justify-center group-hover:border-accent-cyan/50 transition-colors">
                    <svg className="w-5 h-5 text-accent-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  </span>
                  <span>opeyemitecharchitect@gmail.com</span>
                </a>
                <a href="https://wa.me/447553806076" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-text/80 hover:text-accent-cyan transition-colors group">
                  <span className="w-10 h-10 rounded-full bg-surface border border-accent-cyan/20 flex items-center justify-center group-hover:border-accent-cyan/50 transition-colors">
                    <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.194 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.4c-1.585-.77-3.164-1.48-4.735-2.016-1.57-.535-3.134-.83-4.708-.967-.895-.12-1.898-.173-2.913-.173-2.594 0-3.195 1.867-3.195 1.867 0 .792.719 2.39 1.065 3.172.273.72.52.966.643 1.118.372.457.908 1.35 1.306 1.827.486.594 1.206 1.212 1.653 1.51.593.389 1.041.496 1.413.457.594-.074 1.907-.792 2.38-1.794.747-1.595.372-3.15-.148-3.778m4.062-7.83c-.033-.033-.358-.426-.873-.74-.514-.313-2.149-1.587-2.619-2.259-.47-.672-.74-1.195-.873-1.448-.133-.252-.052-.471.074-.644.149-.197.272-.245.471-.245.113 0 .262.024.389.124.199.198.298.792.397 1.462.074.543.273 2.059.321 2.536.024.362-.052.74-.124.939-.075.222-.273.49-.546.84-.242.362-.546.84-.74 1.09-.198.248-.521.569-.819.895-.297.314-.694.82-.916 1.04-.273.313-.643.67-.967.895-.321.222-.546.446-.74.57-.198.099-.47.148-.669.124-.173-.024-.546-.273-.94-.895-.397-.625-.768-1.37-.895-1.642-.127-.273-.052-.471.074-.644.149-.197.298-.298.497-.321.198-.024.422-.024.694-.049.298-.024.72-.173.99-.52.297-.372.546-.72.74-1.04.198-.321.347-.52.397-.719.074-.197.074-.347.049-.52-.025-.198-.224-.397-.52-.546z" /></svg>
                  </span>
                  <span>+44 7553 806076</span>
                </a>
                <a href="https://cal.com/tayoopeyemi" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-text/80 hover:text-accent-cyan transition-colors group">
                  <span className="w-10 h-10 rounded-full bg-surface border border-accent-cyan/20 flex items-center justify-center group-hover:border-accent-cyan/50 transition-colors">
                    <svg className="w-5 h-5 text-accent-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                  </span>
                  <span>Book a consultation →</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}