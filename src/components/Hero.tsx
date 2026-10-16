"use client";

import { motion, useMotionValue, useSpring } from "motion/react";
import Image from "next/image";

const metrics = [
  { label: "Systems Designed", value: "50+" },
  { label: "Uptime Guaranteed", value: "99.9%" },
  { label: "Team Members Led", value: "20+" },
];

export default function Hero() {
  const rotateX = useSpring(0, { stiffness: 200, damping: 20 });
  const rotateY = useSpring(0, { stiffness: 200, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    rotateY.set(x * 20 - 10);
    rotateX.set(-(y * 20 - 10));
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <section className="w-full overflow-visible relative min-h-screen flex items-center pt-32 md:pt-20 pb-32" aria-labelledby="hero-heading">
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 0h20v20H20V0zm0 20h20v20H20V20zm20-20h20v20H40V0z' fill='%2300D4FF' fill-opacity='0.1'/%3E%3C/svg%3E")`,
            backgroundSize: "40px 40px",
          }}
          aria-hidden="true"
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[600px] h-[600px] rounded-full opacity-10 blur-3xl"
          style={{ background: "radial-gradient(circle, #00D4FF 0%, transparent 70%)" }}
          aria-hidden="true"
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 py-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="inline-flex items-center gap-2 px-4 py-1.5 bg-accent-cyan/10 border border-accent-cyan/30 rounded-full text-accent-cyan text-sm font-medium"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-cyan opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-cyan" />
              </span>
              Systems Architect & Engineering Lead
            </motion.span>

            <motion.h1
              id="hero-heading"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-playfair font-light text-text leading-[1.1] tracking-tight"
            >
              Building Scalable
              <br />
              <span className="font-medium text-accent-gold">Digital Foundations</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="text-lg md:text-xl text-text/70 max-w-xl leading-relaxed"
            >
              I architect resilient, high performance systems that scale. From distributed
              architectures to pixel perfect interfaces — engineering with intention.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
              className="flex flex-wrap gap-3"
            >
              {metrics.map((metric, index) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1, ease: "easeOut" }}
                  className="flex items-center gap-2 px-4 py-2 bg-surface border border-accent-cyan/20 rounded-full"
                >
                  <span className="text-2xl font-bold text-accent-cyan font-jetbrains-mono">
                    {metric.value}
                  </span>
                  <span className="text-sm text-text/70">{metric.label}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#contact"
                className="px-8 py-4 bg-accent-gold text-background font-semibold text-base rounded-full hover:bg-accent-gold/90 transition-all hover:shadow-[0_0_30px_rgba(212,175,55,0.4)]"
              >
                Book a Systems Architecture Consultation
              </a>
              <a
                href="#projects"
                className="px-8 py-4 border-2 border-accent-cyan/50 text-accent-cyan font-semibold text-base rounded-full hover:bg-accent-cyan/10 transition-all"
              >
                View Case Studies
              </a>
            </motion.div>
          </motion.div>
        </div>

        <div className="lg:col-span-5 relative">
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            className="relative w-full h-[600px] max-w-lg mx-auto flex items-center justify-center"
            style={{ rotateX, rotateY, transformPerspective: 1000 }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <div className="absolute inset-0 bg-cyan-500/20 blur-3xl rounded-full" aria-hidden="true" />
            <div
              className="absolute inset-0 overflow-hidden pointer-events-none"
              aria-hidden="true"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent transform -skew-x-12 animate-light-sweep" />
            </div>
            <Image
              src="/hero-portrait.png"
              alt="Tayo - Systems Architect"
              width={500}
              height={600}
              className="object-contain w-full h-full relative z-10"
              style={{ width: "100%", height: "auto" }}
              priority
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 1, ease: "easeOut" }}
              className="absolute bottom-4 left-4 z-20 whitespace-nowrap w-24 h-24 bg-surface border border-accent-gold/30 rounded-xl p-4 flex flex-col items-center justify-center"
            >
              <span className="text-3xl font-bold text-accent-gold font-jetbrains-mono">5+</span>
              <span className="text-xs text-text/60 mt-1">Years Experience</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
              className="absolute top-4 right-4 z-20 whitespace-nowrap w-24 h-24 bg-surface border border-accent-cyan/30 rounded-xl p-4 flex flex-col items-center justify-center"
            >
              <span className="text-3xl font-bold text-accent-cyan font-jetbrains-mono">99.9%</span>
              <span className="text-xs text-text/60 mt-1">Uptime SLA</span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text/50"
        aria-hidden="true"
      >
        <span className="text-xs tracking-widest uppercase">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-1 h-6 flex flex-col justify-between"
        >
          <div className="w-1 h-1 bg-accent-cyan/50 rounded-full" />
          <div className="w-1 h-1 bg-accent-cyan/30 rounded-full" />
          <div className="w-1 h-1 bg-accent-cyan/20 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
