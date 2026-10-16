"use client";

import { clientNames } from "@/data/portfolio";

export default function LogoMarquee() {
  const duplicatedNames = [...clientNames, ...clientNames];

  return (
    <section className="py-12 border-y border-cyan-400/10 bg-[#0A0A0B] overflow-hidden">
      <div className="relative flex overflow-hidden">
        <div className="animate-marquee flex whitespace-nowrap">
          {duplicatedNames.map((name, index) => (
            <div
              key={index}
              className="mx-12 md:mx-16 flex items-center justify-center"
            >
              <span className="text-xl md:text-2xl font-serif tracking-[0.3em] text-[#9CA3AF] hover:text-[#D4AF37] transition-colors duration-300">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}