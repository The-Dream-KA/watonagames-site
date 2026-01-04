import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import GamesSection from "@/components/sections/GamesSection";
import ValuesSection from "@/components/sections/ValuesSection";
import CTASection from "@/components/sections/CTASection";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-50 to-white dark:from-zinc-950 dark:to-black overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <GamesSection />
      <ValuesSection />
      <CTASection />
      <Footer />
    </div>
  );
}

