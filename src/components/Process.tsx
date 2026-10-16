const steps = [
  {
    number: "01",
    title: "Discovery",
    description: "Understanding your business goals and the problem we are solving."
  },
  {
    number: "02",
    title: "Architecture",
    description: "Designing the most efficient, scalable system."
  },
  {
    number: "03",
    title: "Build",
    description: "Writing clean, high-performance code and iterating fast."
  },
  {
    number: "04",
    title: "Scale",
    description: "Deploying, monitoring, and optimizing for growth."
  }
];

export default function Process() {
  return (
    <section id="process" className="py-20 md:py-32 px-6" aria-labelledby="process-heading">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-accent-gold/10 border border-accent-gold/30 rounded-full text-accent-gold text-sm font-medium">
            How I Work
          </span>
          <h2 id="process-heading" className="mt-4 text-4xl md:text-5xl lg:text-6xl font-serif font-light text-text leading-tight">
            My Process
          </h2>
          <p className="mt-4 text-lg md:text-xl text-text/60 max-w-2xl mx-auto leading-relaxed">
            A systematic approach to delivering production-ready systems that scale.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-accent-cyan/30 to-transparent hidden md:block" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 relative z-10">
            {steps.map((step, index) => (
              <article
                key={step.number}
                className="glow-border relative p-8 bg-[#141416] backdrop-blur-sm rounded-2xl"
              >
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 text-4xl md:text-5xl font-bold text-accent-gold font-jetbrains-mono leading-none">
                    {step.number}
                  </span>
                  <div>
                    <h3 className="text-xl md:text-2xl font-serif font-medium text-text mb-3">
                      {step.title}
                    </h3>
                    <p className="text-text/60 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}