import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LogoMarquee from "@/components/LogoMarquee";
import BentoGrid from "@/components/BentoGrid";
import Services from "@/components/Services";
import TechStack from "@/components/TechStack";
import Process from "@/components/Process";
import VideoShowcase from "@/components/VideoShowcase";
import Metrics from "@/components/Metrics";
import About from "@/components/About";
import ClientResults from "@/components/ClientResults";
import Insights from "@/components/Insights";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollProgress from "@/components/ScrollProgress";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <ScrollProgress />
        <Hero />
        <LogoMarquee />
        <BentoGrid />
        <Services />
        <TechStack />
<Process />
            <VideoShowcase />
            <Metrics />
        <About />
        <ClientResults />
        <Insights />
        <FAQ />
        <FinalCTA />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}