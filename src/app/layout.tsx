import { Analytics } from "@vercel/analytics/react";
import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ReactNode } from "react";
import LoadingScreen from "@/components/LoadingScreen";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata: Metadata = {
  title: "Tayo Portfolio",
  description: "Lead Systems Architect building scalable, resilient platforms.",
  icons: { icon: "/favicon.png?v=5" },
};

export const viewport: Viewport = {
  themeColor: "#0A0A0B",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Tayo Opeyemi",
              "jobTitle": "Lead Systems Architect",
              "url": "https://tayo-portfolio.vercel.app",
              "email": "opeyemitecharchitect@gmail.com",
              "sameAs": [
                "https://github.com/opeeteedev",
                "https://www.youtube.com/@Promptpulsegd"
              ],
              "knowsAbout": [
                "Systems Architecture",
                "AI Integration",
                "Machine Learning",
                "SaaS Platform Architecture",
                "Shopify Development",
                "AI Video Production",
                "Business Process Automation",
                "Cloud Engineering"
              ]
            })
          }}
        />
      </head>
      <body className="bg-[#0A0A0B] text-[#F5F5F7] antialiased min-h-screen flex flex-col">
        {children}
        <LoadingScreen />
        <ScrollToTop />
        <Analytics />
      </body>
    </html>
  );
}
