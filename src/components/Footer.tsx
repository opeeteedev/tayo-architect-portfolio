"use client";

import Link from "next/link";
import { navLinks } from "@/data/portfolio";

export default function Footer() {
  const socialLinks = [
    { name: "GitHub", href: "https://github.com/tayoopeyemi", label: "GitHub" },
    { name: "LinkedIn", href: "https://linkedin.com/in/tayoopeyemi", label: "LinkedIn" },
    { name: "X", href: "https://x.com/tayoopeyemi", label: "X (Twitter)" },
  ];

  return (
    <footer className="py-12 md:py-16 px-6 border-t border-accent-cyan/10" role="contentinfo">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-12">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2" aria-label="Tayo Portfolio Home">
              <span className="font-serif text-[#D4AF37] text-xl tracking-[0.2em] font-bold">TAYO OPEYEMI</span>
              <span className="w-2 h-2 rounded-full bg-[#00D4FF]"></span>
            </Link>
            <p className="text-text/50 text-sm leading-relaxed">
              Lead Systems Architect building scalable, resilient platforms.
              Engineered with Next.js 15, Tailwind CSS 4, and an obsession with performance.
            </p>
          </div>

          <nav className="space-y-3" aria-label="Footer navigation">
            <h3 className="font-semibold text-text">Navigate</h3>
            <ul className="space-y-2" role="list">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-text/60 hover:text-accent-cyan transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="space-y-3">
            <h3 className="font-semibold text-text">Connect</h3>
            <ul className="space-y-2" role="list">
              {socialLinks.map((social) => (
                <li key={social.name}>
                  <a href={social.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-text/60 hover:text-accent-cyan transition-colors text-sm" aria-label={social.label}>
                    <span className="w-5 h-5 flex items-center justify-center">
                      {social.name === "GitHub" && (
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
                      )}
                      {social.name === "LinkedIn" && (
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                      )}
                      {social.name === "X" && (
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                      )}
                    </span>
                    <span>{social.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-accent-cyan/10 text-center">
          <p className="text-text/40 text-sm">
            Architected with Next.js 15, Tailwind CSS 4, and an obsession with performance
          </p>
        </div>
      </div>
    </footer>
  );
}