import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";
import { portfolioProjects } from "@/data/portfolio";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const project = portfolioProjects.find((p) => p.id === resolvedParams.id);
  if (!project) return { title: "Project Not Found" };
  return {
    title: `${project.title} | Tayo Opeyemi`,
    description: project.description,
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const resolvedParams = await params;
  const project = portfolioProjects.find((p) => p.id === resolvedParams.id);

  if (!project) {
    notFound();
  }

  const currentIndex = portfolioProjects.findIndex((p) => p.id === resolvedParams.id);
  const nextIndex = (currentIndex + 1) % portfolioProjects.length;
  const nextProject = portfolioProjects[nextIndex];

  return (
    <div className="min-h-screen bg-background text-text">
      <nav className="px-6 py-8" aria-label="Breadcrumb">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-text/60 hover:text-accent-cyan transition-colors text-sm font-medium"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Projects
        </Link>
      </nav>

      <main className="mx-auto max-w-5xl px-6 pb-20">
        <article className="space-y-12">
          <header className="space-y-4">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-accent-cyan/10 border border-accent-cyan/30 rounded-full text-accent-cyan text-sm font-medium">
              Case Study
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light text-text leading-tight">
              {project.title}
              <span className="font-medium text-accent-gold">.</span>
            </h1>
          </header>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-surface border border-accent-cyan/20 rounded-full">
            <span className="text-accent-cyan font-jetbrains-mono text-sm">
              {project.metric}
            </span>
          </div>

          <div className="prose prose-invert max-w-none text-text/70 leading-relaxed text-lg">
            <p>{project.description}</p>
          </div>

          <div className="space-y-10 pt-8 border-t border-accent-cyan/10">
            <section className="space-y-4 p-6 md:p-8 bg-surface/30 backdrop-blur-sm rounded-2xl border border-accent-cyan/10">
              <h2 className="text-2xl md:text-3xl font-serif font-medium text-accent-gold mb-4 border-b border-accent-cyan/20 pb-2">
                The Challenge
              </h2>
              <p className="text-text/60 leading-relaxed text-lg">
                Every project starts with a problem. The client came to us with a legacy system that couldn't
                scale. Performance was degrading, user experience was suffering, and the technical debt was
                preventing rapid feature development. We needed to architect a solution that would not only
                solve the immediate problems but also provide a foundation for future growth.
              </p>
            </section>

            <section className="space-y-4 p-6 md:p-8 bg-surface/30 backdrop-blur-sm rounded-2xl border border-accent-cyan/10">
              <h2 className="text-2xl md:text-3xl font-serif font-medium text-accent-gold mb-4 border-b border-accent-cyan/20 pb-2">
                The Solution
              </h2>
              <p className="text-text/60 leading-relaxed text-lg">
                We designed a modern architecture using Next.js 15 App Router, TypeScript, and cloud-native
                infrastructure on AWS. The new system implements server components for optimal performance,
                edge caching for global speed, and a component-driven design system for consistency.
                Automated CI/CD pipelines ensure zero-downtime deployments.
              </p>
            </section>

            <section className="space-y-4 p-6 md:p-8 bg-surface/30 backdrop-blur-sm rounded-2xl border border-accent-cyan/10">
              <h2 className="text-2xl md:text-3xl font-serif font-medium text-accent-gold mb-4 border-b border-accent-cyan/20 pb-2">
                The Results
              </h2>
              <p className="text-text/60 leading-relaxed text-lg">
                The migration delivered measurable improvements across every metric. Page load times dropped
                by over 60%, Core Web Vitals achieved perfect scores, and the client reported a significant
                increase in user engagement and conversion rates. The system now handles 10x the previous
                load with room to grow.
              </p>
            </section>

            <section className="space-y-4 p-6 md:p-8 bg-surface/30 backdrop-blur-sm rounded-2xl border border-accent-cyan/10">
              <h2 className="text-2xl md:text-3xl font-serif font-medium text-accent-gold mb-4 border-b border-accent-cyan/20 pb-2">
                Project Gallery
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.gallery.map((image, index) =>
                  image === "placeholder" ? (
                    <div
                      key={index}
                      className="h-64 md:h-80 rounded-xl border border-cyan-400/20 flex items-center justify-center"
                      style={{
                        backgroundColor: "#141416",
                        backgroundImage: `
                          linear-gradient(rgba(0, 212, 255, 0.05) 1px, transparent 1px),
                          linear-gradient(90deg, rgba(0, 212, 255, 0.05) 1px, transparent 1px)
                        `,
                        backgroundSize: "32px 32px"
                      }}
                    >
                      <span className="font-serif text-accent-gold text-lg">
                        Project Visual Coming Soon
                      </span>
                    </div>
                  ) : (
                    <img 
                      key={index}
                      src={`${image}?v=2`} 
                      alt={`${project.title} gallery image ${index + 1}`} 
                      className="w-full h-auto rounded-xl border border-cyan-400/20" 
                    />
                  )
                )}
              </div>
            </section>
          </div>

          <div className="pt-8 border-t border-accent-cyan/10 text-center">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-3 px-10 py-4 bg-accent-gold text-background font-semibold text-base rounded-full hover:bg-accent-gold/90 transition-all shadow-[0_0_30px_rgba(212,175,55,0.4)]"
            >
              Start a Similar Project
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>

          <section className="mt-16 pt-8 border-t border-accent-cyan/10">
            <Link
              href={`/work/${nextProject.id}`}
              className="group block p-8 bg-[#141416] backdrop-blur-sm rounded-2xl border border-cyan-400/10 hover:border-accent-cyan/30 transition-all duration-500"
            >
              <span className="inline-flex items-center gap-2 px-3 py-1 bg-accent-cyan/10 border border-accent-cyan/30 rounded-full text-accent-cyan text-xs font-medium mb-4">
                NEXT PROJECT
              </span>
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-2xl md:text-3xl font-serif font-medium text-text group-hover:text-accent-gold transition-colors">
                  {nextProject.title}
                </h3>
                <div className="flex-shrink-0">
                  <svg
                    className="w-8 h-8 text-accent-cyan group-hover:text-accent-gold group-hover:translate-x-1 transition-all duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </Link>
          </section>
        </article>
      </main>
    </div>
  );
}