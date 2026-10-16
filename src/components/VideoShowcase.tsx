export default function VideoShowcase() {
  return (
    <section id="videos" className="py-20 md:py-32 px-6" aria-labelledby="videos-heading">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-accent-cyan/10 border border-accent-cyan/30 rounded-full text-accent-cyan text-sm font-medium mb-4">
            Showreel
          </span>
          <h2 id="videos-heading" className="text-4xl md:text-5xl lg:text-6xl font-serif font-light text-text leading-tight">
            Video Production
          </h2>
          <p className="mt-4 text-lg md:text-xl text-text/60 max-w-2xl mx-auto leading-relaxed">
            AI-generated product videos and short-form content.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="glow-border rounded-2xl bg-[#141416]">
            <iframe
              src="https://www.youtube.com/embed/GT6rcPnc-eM"
              title="AI product video showcase 1"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="w-full aspect-video"
            />
          </div>
          <div className="glow-border rounded-2xl bg-[#141416]">
            <iframe
              src="https://www.youtube.com/embed/GT6rcPnc-eM"
              title="AI product video showcase 2"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="w-full aspect-video"
            />
          </div>
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://www.youtube.com/@Promptpulsegd"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-accent-gold text-background font-semibold text-base rounded-full hover:bg-accent-gold/90 transition-all hover:shadow-[0_0_30px_rgba(212,175,55,0.4)]"
          >
            Subscribe on YouTube
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M23.5 6.2a3.02 3.02 0 0 0-2.12-2.14C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.38.56A3.02 3.02 0 0 0 .5 6.2 31.6 31.6 0 0 0 0 12a31.6 31.6 0 0 0 .5 5.8 3.02 3.02 0 0 0 2.12 2.14c1.88.56 9.38.56 9.38.56s7.5 0 9.38-.56a3.02 3.02 0 0 0 2.12-2.14A31.6 31.6 0 0 0 24 12a31.6 31.6 0 0 0-.5-5.8zM9.6 15.6V8.4L15.8 12z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}