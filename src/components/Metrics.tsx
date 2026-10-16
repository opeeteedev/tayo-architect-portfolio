"use client";

import { useInView } from "motion/react";
import { useRef, useEffect, useState } from "react";
import { motion } from "motion/react";
import { metrics } from "@/data/portfolio";

function MetricItem({ metric, index }: { metric: any; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let startTime: number;
    const duration = 2000;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(metric.value * eased));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [isInView, metric.value]);

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="glow-border text-center p-6 md:p-8 bg-[#141416] rounded-2xl"
    >
      <div className="mb-3">
        <span className="text-4xl md:text-5xl lg:text-6xl font-jetbrains-mono font-bold text-[#00D4FF]">
          {count}
          <span className="text-[#D4AF37]">{metric.suffix}</span>
        </span>
      </div>
      <h3 className="text-lg md:text-xl font-serif font-medium text-[#F5F5F7] mb-1">
        {metric.label}
      </h3>
    </motion.article>
  );
}

export default function Metrics() {
  return (
    <section id="metrics" className="py-20 md:py-24 px-6" aria-labelledby="metrics-heading">
      <div className="mx-auto max-w-7xl">
        <h2 id="metrics-heading" className="sr-only">Key Metrics</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {metrics.map((metric, index) => (
            <MetricItem key={metric.label} metric={metric} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}