import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

const mainPartners = [
  { name: 'West University of Timișoara', logo: '/logos/uvt.png', url: 'https://www.uvt.ro', tier: 'Academic Partner' },
  { name: 'Google Cybersecurity Seminars', logo: '/logos/cybersecurity-seminars.png', url: 'https://virtual-routes.org/initiatives/cybersecurity-seminars/', tier: 'Founding Partner' },
  { name: 'Virtual Routes', logo: '/logos/virtualroutes-white.png', url: 'https://virtual-routes.org', tier: 'Initiative' },
  { name: 'OPSWAT', logo: '/logos/opswat.png', url: 'https://www.opswat.com', tier: 'Industry Sponsor' },
];

const industrySponsors = [
  { name: 'Palo Alto Networks', logo: '/logos/paloalto.png', url: 'https://www.paloaltonetworks.com' },
  { name: 'Valeo IT', logo: '/logos/valeoit.png', url: 'https://valeo-it.com' },
  { name: 'BRINEL | IQANTO', logo: '/logos/brinel.png', url: 'https://www.brinel.ro' },
];

const ecosystemPartners = [
  { name: 'DNSC', logo: '/logos/dnsc_white.png', url: 'https://dnsc.ro' },
  { name: 'DIICOT', logo: '/logos/diicot_logo.png', url: 'https://www.diicot.ro' },
  { name: 'Visma', logo: '/logos/visma_white.png', url: 'https://www.visma.ro' },
  { name: 'IBM', logo: '/logos/ibm.png', url: 'https://www.ibm.com' },
  { name: 'Haufe Group', logo: '/logos/haufe_white.png', url: 'https://www.haufegroup.com' },
  { name: 'ADR Vest', logo: '/logos/adrvest.png', url: 'https://adrvest.ro' },
  { name: 'ISACA', logo: '/logos/isaca.png', url: 'https://www.isaca.org' },
  { name: 'Cloud Security Alliance', logo: '/logos/cloud_sec_all.png', url: 'https://cloudsecurityalliance.org' },
  { name: 'AISafe Labs', logo: '/logos/aisafe.svg', url: 'https://aisafe.io' },
  { name: 'CyberDojo', logo: '/logos/CyberDojoTM_white.svg', url: 'https://timisoara.coderdojo.ro' },
  { name: 'OmniCTF', logo: '/logos/OmniCTF_Logo.svg', url: 'https://omnictf.com' },
  { name: 'MiniPif', logo: '/logos/minipif.png', url: 'https://blog.minipif.xyz/' },
  { name: 'CyberForum', logo: '/logos/cyberforum.svg', url: 'https://cyberforum.ro' },
  { name: 'OSUT', logo: '/logos/Sigla_OSUT_white-01.png', url: 'https://osut.ro' },
];

export function SponsorsHybrid() {
  return (
    <section id="sponsors" className="section bg-transparent text-white relative overflow-hidden border-t border-[#ff2a85]/20">
      <div className="container relative z-10 mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.24em] text-[#00f0ff] block mb-2 font-bold text-glow-cyan">
              {`// COLLABORATIVE ALLIANCE`}
            </span>
            <h2 className="display text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight">
              Backed by{' '}
              <span className="text-[#ff2a85] text-glow-pink">
                Pioneers.
              </span>
            </h2>
            <p className="mt-3 max-w-xl text-xs sm:text-sm text-white/70 font-body leading-relaxed">
              ZeroDayTM is free to attend thanks to the companies, academic institutions,
              and public security agencies building Romania&apos;s cybersecurity backbone.
            </p>
          </div>

          <div>
            <a
              href="/partners"
              className="inline-flex items-center gap-2 rounded-xl border border-[#ff2a85] bg-[#ff2a85]/15 px-5 py-3 font-mono text-xs font-bold uppercase tracking-wider text-[#ff2a85] hover:bg-[#ff2a85] hover:text-white transition-all shadow-[0_0_20px_rgba(255,42,133,0.3)]"
            >
              Partner with Edition #2
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>

        {/* Tier 1: Main Academic & Industry Champions */}
        <div className="mb-12">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#ff2a85] block mb-4 font-bold">
            {`// FOUNDING & TITLE PARTNERS`}
          </span>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {mainPartners.map((item) => (
              <a
                key={item.name}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 rounded-2xl border border-[#ff2a85]/25 bg-[#100422]/85 backdrop-blur-md flex flex-col items-center justify-center min-h-[140px] text-center transition-all duration-300 hover:border-[#ff2a85]/60 hover:bg-[#18052a] hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(255,42,133,0.25)]"
              >
                <div className="relative h-14 w-full flex items-center justify-center">
                  <Image
                    src={item.logo}
                    alt={item.name}
                    width={150}
                    height={56}
                    className="max-h-12 w-auto object-contain sponsor-logo-hybrid"
                  />
                </div>
                <span className="font-mono text-[9px] uppercase tracking-wider text-[#00f0ff] mt-3 font-bold">
                  {item.tier}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Tier 2: Industry Partners */}
        <div className="mb-12">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#00f0ff] block mb-4 font-bold">
            {`// INDUSTRY CYBERSECURITY PARTNERS`}
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {industrySponsors.map((item) => (
              <a
                key={item.name}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-5 rounded-2xl border border-[#00f0ff]/20 bg-[#091428]/85 flex items-center justify-center min-h-[110px] transition-all duration-300 hover:border-[#00f0ff]/60 hover:bg-[#0c1a34] hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,240,255,0.25)]"
              >
                <div className="relative h-10 w-full flex items-center justify-center">
                  <Image
                    src={item.logo}
                    alt={item.name}
                    width={140}
                    height={44}
                    className="max-h-10 w-auto object-contain sponsor-logo-hybrid"
                  />
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Tier 3: Institutional, Public & Community Alliances */}
        <div>
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/50 block mb-4">
            {`// INSTITUTIONAL, COMMUNITY & MEDIA ALLIANCES`}
          </span>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-3">
            {ecosystemPartners.map((item) => (
              <a
                key={item.name}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                title={item.name}
                className="group p-3 rounded-xl border border-white/10 bg-white/[0.02] flex items-center justify-center min-h-[80px] transition-all duration-300 hover:border-[#9d4edd]/50 hover:bg-[#9d4edd]/10"
              >
                <div className="relative h-8 w-full flex items-center justify-center">
                  <Image
                    src={item.logo}
                    alt={item.name}
                    width={110}
                    height={32}
                    className="max-h-7 w-auto object-contain sponsor-logo-hybrid"
                  />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
