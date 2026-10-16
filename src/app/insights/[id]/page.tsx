import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";
import { insights } from "@/data/portfolio";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const article = insights.find((a) => a.id === resolvedParams.id);
  if (!article) return { title: "Article Not Found" };
  return {
    title: `${article.title} | Tayo Opeyemi`,
    description: article.excerpt,
  };
}

export default async function InsightPage({ params }: PageProps) {
  const resolvedParams = await params;
  const article = insights.find((a) => a.id === resolvedParams.id);

  if (!article) {
    notFound();
  }

  const currentIndex = insights.findIndex((a) => a.id === resolvedParams.id);
  const nextIndex = (currentIndex + 1) % insights.length;
  const nextArticle = insights[nextIndex];

  return (
    <div className="min-h-screen bg-background text-text">
      <nav className="px-6 py-8" aria-label="Breadcrumb">
        <Link
          href="/#insights"
          className="inline-flex items-center gap-2 text-text/60 hover:text-accent-cyan transition-colors text-sm font-medium"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Insights
        </Link>
      </nav>

      <main className="mx-auto max-w-3xl px-6 pb-20">
        <article className="space-y-10">
          <div className="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden mb-10 border border-cyan-400/20 bg-gradient-to-br from-[#141416] via-[#0A0A0B] to-[#141416] flex items-center justify-center">
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 0h20v20H20V0zm0 20h20v20H20V20zm20-20h20v20H40V0z' fill='%2300D4FF' fill-opacity='0.1'/%3E%3C/svg%3E")`,
                backgroundSize: "40px 40px",
              }}
              aria-hidden="true"
            />
            <span className="relative z-10 px-6 py-3 bg-[#D4AF37]/10 border border-[#D4AF37]/40 rounded-full text-[#D4AF37] font-jetbrains-mono text-sm tracking-widest uppercase">
              {article.category}
            </span>
          </div>
          <header className="space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              <span className="px-3 py-1 bg-accent-gold/10 border border-accent-gold/30 rounded-full text-accent-gold text-xs font-medium">
                {article.category}
              </span>
              <span className="text-sm text-text/50 font-jetbrains-mono">
                {article.date} · {article.readTime}
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-light text-text leading-tight">
              {article.title}
            </h1>
          </header>

          <div className="prose prose-invert max-w-none text-text/70 leading-relaxed text-lg">
            {article.content.split("\n\n").map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <nav className="pt-8 border-t border-accent-cyan/10">
            <Link
              href={`/insights/${nextArticle.id}`}
              className="group block p-6 bg-[#141416] backdrop-blur-sm rounded-2xl border border-cyan-400/10 hover:border-accent-cyan/30 transition-all duration-500"
            >
              <span className="inline-flex items-center gap-2 px-3 py-1 bg-accent-cyan/10 border border-accent-cyan/30 rounded-full text-accent-cyan text-xs font-medium mb-3">
                NEXT ARTICLE
              </span>
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-xl font-serif font-medium text-text group-hover:text-accent-gold transition-colors">
                  {nextArticle.title}
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
          </nav>
        </article>
      </main>
    </div>
  );
}