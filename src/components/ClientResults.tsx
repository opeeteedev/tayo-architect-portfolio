export default function ClientResults() {
  return (
    <section id="testimonials" className="py-20 md:py-32 px-6" aria-labelledby="client-results-heading">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-accent-gold/10 border border-accent-gold/30 rounded-full text-accent-gold text-sm font-medium mb-4">
            Proven Results
          </span>
          <h2 id="client-results-heading" className="text-4xl md:text-5xl lg:text-6xl font-serif font-light text-text leading-tight">
            The Results You Can Expect
          </h2>
          <p className="mt-4 text-lg text-text/60 max-w-xl mx-auto">
            Real outcomes from my systems and designs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="glow-border bg-[#141416] rounded-2xl p-8 flex flex-col text-center">
            <div className="text-5xl md:text-6xl font-bold text-accent-cyan font-jetbrains-mono mb-4">100/100</div>
            <h3 className="text-xl font-serif font-medium text-text mb-3">Lighthouse Performance Score</h3>
            <p className="text-text/60 leading-relaxed">Every site I deliver must pass Core Web Vitals. No exceptions.</p>
          </div>

          <div className="glow-border bg-[#141416] rounded-2xl p-8 flex flex-col text-center">
            <div className="text-5xl md:text-6xl font-bold text-accent-gold font-jetbrains-mono mb-4">99.9%</div>
            <h3 className="text-xl font-serif font-medium text-text mb-3">Production Uptime</h3>
            <p className="text-text/60 leading-relaxed">My deployments never break. Zero downtime. Zero surprised clients.</p>
          </div>

          <div className="glow-border bg-[#141416] rounded-2xl p-8 flex flex-col text-center">
            <div className="text-5xl md:text-6xl font-bold text-accent-cyan font-jetbrains-mono mb-4">3x</div>
            <h3 className="text-xl font-serif font-medium text-text mb-3">Faster Delivery</h3>
            <p className="text-text/60 leading-relaxed">I use AI and automation to ship in weeks what agencies ship in months.</p>
          </div>

          <div className="glow-border bg-[#141416] rounded-2xl p-8 flex flex-col text-center">
            <div className="text-5xl md:text-6xl font-bold text-accent-gold font-jetbrains-mono mb-4">80%</div>
            <h3 className="text-xl font-serif font-medium text-text mb-3">Cost Reduction</h3>
            <p className="text-text/60 leading-relaxed">My architectural decisions reduce cloud and infrastructure costs by design.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
