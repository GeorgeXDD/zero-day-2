import { motion } from "framer-motion";
import googleLogo from "@/assets/logos/Googleorg.png";
import uvtLogo from "@/assets/logos/uvt.png";
import opswatLogo from "@/assets/logos/opswat.png";
import paloAltoLogo from "@/assets/logos/paloalto.png";
import brinelIqantoLogo from "@/assets/logos/logo_brinel.png";
import virtualRoutesLogo from "@/assets/logos/virtualroutes-white.png";
import coderDojoLogo from "@/assets/logos/CyberDojoTM_white.svg";
import omniCtfLogo from "@/assets/logos/OmniCTF_Logo.svg";
import minipif from "@/assets/logos/minipif.png";
import cloudSecAll from "@/assets/logos/cloud_sec_all.png";
import cyberForum from "@/assets/logos/cyberforum.svg";
import isacaLogo from "@/assets/logos/isaca.png";
import isc2Logo from "@/assets/logos/isc2.png";
import adrvestLogo from "@/assets/logos/adrvest.png";
import diicotLogo from "@/assets/logos/diicot_logo.png";
import dnscLogo from "@/assets/logos/dnsc_white.png";
import ibmLogo from "@/assets/logos/ibm.png";
import vismaLogo from "@/assets/logos/visma_white.png";
import haufeLogo from "@/assets/logos/haufe_white.png";
import aisafelabsLogo from "@/assets/logos/aisafe.svg";
import valeoItLogo from "@/assets/logos/valeoit_logo_oSlogan_rgb.png";
import osutLogo from "@/assets/logos/Sigla_OSUT_white-01.png";
import cybersecurityLogo from "@/assets/logos/cybersecurity-seminars.png";

const topSponsors = [
  {
    name: "UVT",
    highlight: true,
    image: uvtLogo,
    url: "https://www.uvt.ro",
    size: "large",
    scaleClass: "scale-[1.15]",
  },
  {
    name: "Virtual Routes",
    highlight: true,
    image: virtualRoutesLogo,
    url: "https://virtual-routes.org",
    size: "medium",
    scaleClass: "scale-[0.9]",
  },
  {
    name: "Google Cyber Security Seminars",
    highlight: true,
    image: cybersecurityLogo,
    url: "https://virtual-routes.org/initiatives/cybersecurity-seminars/",
    size: "medium",
    scaleClass: "scale-[1.15]",
  },
  {
    name: "OPSWAT",
    highlight: true,
    image: opswatLogo,
    url: "https://www.opswat.com",
    size: "medium",
    scaleClass: "scale-[1.2] relative -top-1",
  },
];

const secondarySponsors = [
  {
    name: "Valeo IT",
    highlight: true,
    image: valeoItLogo,
    url: "https://valeo-it.com",
  },
  {
    name: "Palo Alto",
    highlight: true,
    image: paloAltoLogo,
    url: "https://www.paloaltonetworks.com",
  },
  {
    name: "BRINEL | IQANTO",
    highlight: true,
    image: brinelIqantoLogo,
    url: "https://www.brinel.ro",
  },
];

const allSponsors = [...topSponsors, ...secondarySponsors];

const partners = [
  {
    name: "CoderDojo",
    image: coderDojoLogo,
    url: "https://timisoara.coderdojo.ro",
  },
  { name: "OmniCTF", image: omniCtfLogo, url: "https://omnictf.com" },
  {
    name: "MiniPif",
    image: minipif,
    url: "https://blog.minipif.xyz/",
  },
];

const prPartners = [
  {
    name: "Cloud Security Alliance",
    image: cloudSecAll,
    url: "https://cloudsecurityalliance.org",
  },
  { name: "CyberForum", image: cyberForum, url: "https://cyberforum.ro" },
  { name: "ISACA", image: isacaLogo, url: "https://www.isaca.org" },
  //{ name: "ISC2", image: isc2Logo, url: "https://www.isc2.org" },
];

const communityPartners = [
  { name: "DNSC", image: dnscLogo, url: "https://dnsc.ro" },
  { name: "DIICOT", image: diicotLogo, url: "https://www.diicot.ro" },
  { name: "Visma", image: vismaLogo, url: "https://www.visma.ro" },
  { name: "IBM", image: ibmLogo, url: "https://www.ibm.com" },
  { name: "Haufe", image: haufeLogo, url: "https://www.haufegroup.com/en" },
  { name: "ADR Vest", image: adrvestLogo, url: "https://adrvest.ro" },
  { name: "AISafe Labs", image: aisafelabsLogo, url: "https://aisafe.io" },
  {
    name: "OSUT",
    image: osutLogo,
    url: "https://osut.ro",
    scaleClass: "scale-[6] md:scale-[5]",
  },

  ...prPartners,
];

const SponsorCard = ({
  s,
  index,
  size = "small",
}: {
  s: any;
  index: number;
  size?: "large" | "medium" | "small" | "xsmall" | "mobilePartner";
}) => {
  const sizeClasses = {
    large: "h-32 w-56 sm:w-80 sm:h-44",
    medium: "h-28 w-48 sm:w-64 sm:h-36",
    small: "h-20 w-44 sm:w-56 sm:h-28",
    xsmall: "h-16 w-full sm:h-20",
    mobilePartner: "h-20 w-full sm:h-24",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.3 }}
      className={`flex items-center justify-center p-2 sm:p-4 transition-all duration-300 ${sizeClasses[size]} ${s.url ? "hover:scale-105" : ""}`}
    >
      {s.url ? (
        <a
          href={s.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-full h-full"
        >
          {s.image ? (
            <img
              src={s.image}
              alt={s.name}
              className={`max-w-full max-h-full object-contain drop-shadow-md ${
                s.scaleClass || ""
              } ${s.imageClass || ""}`}
              loading="lazy"
            />
          ) : (
            <span className="font-mono text-xl md:text-2xl font-bold uppercase tracking-wider text-muted-foreground text-center">
              {s.name}
            </span>
          )}
        </a>
      ) : s.image ? (
        <img
          src={s.image}
          alt={s.name}
          className={`max-w-full max-h-full object-contain drop-shadow-md ${
            s.scaleClass || ""
          } ${s.imageClass || ""}`}
          loading="lazy"
        />
      ) : (
        <span className="font-mono text-xl md:text-2xl font-bold uppercase tracking-wider text-muted-foreground text-center">
          {s.name}
        </span>
      )}
    </motion.div>
  );
};

const SponsorsSection = () => {
  const mobileSponsors = [
    topSponsors[0],
    topSponsors[1],
    topSponsors[2],
    topSponsors[3],
    ...secondarySponsors,
  ] as any;
  if (mobileSponsors.length % 2 !== 0) {
    mobileSponsors.push({
      name: "spacer",
      image: null,
      url: null,
      isSpacer: true,
    });
  }

  return (
    <section id="sponsors" className="relative py-24">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: [0.2, 1, 0.3, 1] }}
          className="mb-16 text-center"
        >
          <p className="label-mono mb-4">// SPONSORS & PARTNERS</p>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">
            TRUSTED <span className="text-primary text-glow">ALLIES</span>
          </h2>
        </motion.div>

        {/* Sponsors - Desktop Layout */}
        <div className="hidden md:flex flex-col items-center gap-12 mb-20">
          <div className="flex flex-wrap justify-center items-center gap-10 lg:gap-14">
            {topSponsors.map((s, i) => (
              <SponsorCard key={s.name} s={s} index={i} size={s.size || "large"} />
            ))}
          </div>
          <div className="flex flex-wrap justify-center items-center gap-14">
            {secondarySponsors.map((s, i) => (
              <SponsorCard key={s.name} s={s} index={i + 3} size="medium" />
            ))}
          </div>
        </div>

        {/* Sponsors - Mobile Layout (Independent from Desktop) */}
        <div className="md:hidden flex flex-col items-center gap-8 mb-16 px-4">
          <div className="grid grid-cols-2 gap-6 w-full max-w-sm">
            {mobileSponsors.map((s: any, i: number) =>
              s.isSpacer ? (
                <div
                  key={`spacer-${i}`}
                  className="h-28 w-48 sm:w-64 sm:h-36"
                />
              ) : (
                <SponsorCard key={s.name} s={s} index={i} size="medium" />
              ),
            )}
          </div>
        </div>

        {/* Partners */}
        <div className="text-center mb-16">
          <p className="label-mono mb-6">// CTF PARTNERS</p>
          <div className="hidden md:flex flex-wrap justify-center items-center gap-4 sm:gap-6">
            {partners.map((s, i) => (
              <SponsorCard key={s.name} s={s} index={i} size="small" />
            ))}
          </div>
          <div className="grid md:hidden grid-cols-2 gap-3 w-full max-w-sm mx-auto">
            {partners.map((s, i) => (
              <SponsorCard key={s.name} s={s} index={i} size="mobilePartner" />
            ))}
          </div>
        </div>

        {/* Community Partners */}
        <div className="text-center">
          <p className="label-mono mb-6">// COMMUNITY PARTNERS</p>
          <div className="hidden md:flex flex-wrap justify-center items-center gap-4 sm:gap-6">
            {communityPartners.map((s, i) => (
              <SponsorCard key={s.name} s={s} index={i} size="small" />
            ))}
          </div>
          <div className="grid md:hidden grid-cols-2 gap-3 w-full max-w-sm mx-auto">
            {communityPartners.map((s, i) => (
              <SponsorCard key={s.name} s={s} index={i} size="xsmall" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;
