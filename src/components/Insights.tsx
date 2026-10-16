import Link from "next/link";
import { insights } from "@/data/portfolio";

export default function Insights() {
  return (
    <section id="insights" className="py-20 md:py-32 px-6" aria-labelledby="insights-heading">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-accent-cyan/10 border border-accent-cyan/30 rounded-full text-accent-cyan text-sm font-medium">
            Insights
          </span>
          <h2 id="insights-heading" className="mt-4 text-4xl md:text-5xl lg:text-6xl font-serif font-light text-text leading-tight">
            Engineering Notes
          </h2>
          <p className="mt-4 text-lg md:text-xl text-text/60 max-w-2xl mx-auto leading-relaxed">
            Deep dives into systems design, performance optimization, and architecture patterns.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {insights.map((insight) => (
            <Link
              key={insight.id}
              href={`/insights/${insight.id}`}
              className="glow-border block p-8 bg-[#141416] backdrop-blur-sm rounded-2xl hover:shadow-[0_0_30px_rgba(0,212,255,0.15)] transition-all duration-500"
            >
              <div className="relative w-full h-32 rounded-xl overflow-hidden mb-4 bg-gradient-to-br from-[#141416] to-[#0A0A0B] border border-cyan-400/10 flex items-center justify-center">
                <span className="text-[#D4AF37] font-jetbrains-mono text-xs tracking-widest uppercase">
                  {insight.category}
                </span>
              </div>
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-accent-gold/10 border border-accent-gold/30 rounded-full text-accent-gold text-xs font-medium">
                  {insight.category}
                </span>
                <span className="text-sm text-text/50 font-jetbrains-mono">
                  {insight.date} · {insight.readTime}
                </span>
              </div>
              <h3 className="text-xl font-serif font-medium text-text mb-3 leading-snug">
                {insight.title}
              </h3>
              <p className="text-text/60 leading-relaxed">
                {insight.excerpt}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}