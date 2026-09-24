import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { RadarHero } from '@/components/hybrid/radar-hero';
import { TracksSection } from '@/components/hybrid/tracks-section';
import { CtfTerminalSection } from '@/components/hybrid/ctf-terminal-section';
import { RecapMetricsGallery } from '@/components/hybrid/recap-metrics-gallery';
import { VoicesSection } from '@/components/hybrid/voices-section';
import { TeamSection } from '@/components/hybrid/team-section';
import { SponsorsHybrid } from '@/components/hybrid/sponsors-hybrid';
import { FinalCtaHybrid } from '@/components/hybrid/final-cta-hybrid';

export default function Home() {
  return (
    <>
      <SiteHeader dark />
      <main className="min-h-screen bg-transparent relative isolate">
        {/* 1. Vice City Neon Radar Hero */}
        <RadarHero />

        {/* 2. Synthwave / Vice Ticker Tape */}
        <div className="ticker border-y border-[#ff2a85]/30 bg-[#0e051c]/75 backdrop-blur-md py-2.5">
          <div className="ticker-track font-mono text-xs uppercase tracking-[0.2em] font-bold">
            <span className="text-white">Conference</span>
            <span className="text-[#ff2a85]">{'///'}</span>
            <span className="text-white">8h Capture The Flag</span>
            <span className="text-[#00f0ff]">{'///'}</span>
            <span className="text-white">4000€ Prize Pool</span>
            <span className="text-[#ff2a85]">{'///'}</span>
            <span className="text-white">Digital Forensics</span>
            <span className="text-[#00f0ff]">{'///'}</span>
            <span className="text-white">AI Security</span>
            <span className="text-[#ff2a85]">{'///'}</span>
            <span className="text-white">Cloud Hardening</span>
            <span className="text-[#00f0ff]">{'///'}</span>
            <span className="text-white">Timișoara</span>
            <span className="text-[#ff2a85]">{'///'}</span>
            <span className="text-white">Spring 2027</span>
            <span className="text-[#00f0ff]">{'///'}</span>
            <span className="text-white">ISACA CPE Accredited</span>
            <span className="text-[#ff2a85]">{'///'}</span>
            <span className="text-white">Conference</span>
            <span className="text-[#00f0ff]">{'///'}</span>
            <span className="text-white">8h Capture The Flag</span>
            <span className="text-[#ff2a85]">{'///'}</span>
            <span className="text-white">4000€ Prize Pool</span>
            <span className="text-[#00f0ff]">{'///'}</span>
            <span className="text-white">Digital Forensics</span>
            <span className="text-[#ff2a85]">{'///'}</span>
            <span className="text-white">AI Security</span>
            <span className="text-[#00f0ff]">{'///'}</span>
            <span className="text-white">Cloud Hardening</span>
            <span className="text-[#ff2a85]">{'///'}</span>
            <span className="text-white">Timișoara</span>
            <span className="text-[#00f0ff]">{'///'}</span>
          </div>
        </div>

        {/* 3. Operational Tracks (Decode The Unknown) */}
        <TracksSection />

        {/* 4. Cyber CTF Terminal Arena */}
        <CtfTerminalSection />

        {/* 6. Edition #1 Metrics, Photo Gallery & Livestream Player */}
        <RecapMetricsGallery />

        {/* 7. Community Voices & Resonances */}
        <VoicesSection />

        {/* 8. Meet The Crew (Organizing Team) */}
        <TeamSection />

        {/* 9. Comprehensive Partner & Sponsor Wall */}
        <SponsorsHybrid />

        {/* 10. Final Call to Action */}
        <FinalCtaHybrid />
      </main>
      <SiteFooter />
    </>
  );
}
