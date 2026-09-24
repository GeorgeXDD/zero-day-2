import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SpeakersSection from "@/components/SpeakersSection";
import ScheduleSection from "@/components/ScheduleSection";
import CTFSection from "@/components/CTFSection";
import SponsorsSection from "@/components/SponsorsSection";
import TeamSection from "@/components/TeamSection";
import RegistrationSection from "@/components/RegistrationSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  useEffect(() => {
    const handleHashClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest("a");
      
      if (!anchor) return;
      
      const href = anchor.getAttribute("href");
      if (href && href.startsWith("#") && href.length > 1) {
        const element = document.querySelector(href);
        if (element) {
          e.preventDefault();
          element.scrollIntoView({ behavior: "smooth" });
          window.history.pushState(null, "", href);
        }
      }
    };

    document.addEventListener("click", handleHashClick);
    return () => document.removeEventListener("click", handleHashClick);
  }, []);
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SpeakersSection />
      <ScheduleSection />
      <CTFSection />
      <RegistrationSection />
      <SponsorsSection />
      <TeamSection />
      <FooterSection />
    </div>
  );
};

export default Index;
