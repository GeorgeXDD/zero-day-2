import { MapPin, Mail } from "lucide-react";
import logoImg from "@/assets/logos/zeroday-logo-simplu-white.png";

const FooterSection = () => (
  <footer className="relative isolate overflow-hidden text-white py-12">
    <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent shadow-[0_0_20px_rgba(55,255,120,0.8)] opacity-90" />

    <div className="absolute inset-0 pointer-events-none -z-10">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,#07110b_40%,#020302_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(55,255,120,0.25),transparent_50%)]" />
    </div>

    <div className="relative z-10 container mx-auto px-4 md:px-8">
      <div className="grid md:grid-cols-3 gap-8 items-start mt-4">
        <div className="flex flex-col items-start">
          <div className="h-20 flex items-start">
            <img
              src={logoImg}
              alt="ZeroDay"
              className="h-20 w-auto block -translate-y-[6px]"
            />
          </div>

          <p className="text-sm text-muted-foreground font-body -mt-2 leading-none">
            Cybersecurity Conference & CTF
          </p>
        </div>

        <div className="space-y-2 md:justify-self-center mt-5">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin size={14} strokeWidth={1.5} className="text-primary" />
            <span>ICAM Timișoara</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Mail size={14} strokeWidth={1.5} className="text-primary" />
            <span>zerodaytm@gmail.com</span>
          </div>
        </div>

        <div className="md:text-right mt-1">
          <p className="label-mono text-muted-foreground mb-2">23 MAY 2026</p>

          <div className="flex md:justify-end gap-4 flex-wrap">
            {[
              { label: "Schedule", href: "#schedule" },
              { label: "Speakers", href: "#speakers" },
              { label: "CTF", href: "#ctf" },
              { label: "Sponsors", href: "#sponsors" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs font-mono uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors duration-150"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex md:justify-end gap-4 mt-3">
            {[
              { label: "Facebook", href: "https://www.facebook.com/profile.php?id=61588751345468" },
              {
                label: "Instagram",
                href: "https://www.instagram.com/zerodaytm/",
              },
              { label: "LinkedIn", href: "https://www.linkedin.com/company/zerodaytm/" },
              { label: "Discord", href: "https://discord.gg/WTfZ26GAg5" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href !== "#" ? "_blank" : undefined}
                rel={s.href !== "#" ? "noopener noreferrer" : undefined}
                className="text-xs font-mono uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors duration-150"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8 pt-8 text-center">
        <p className="text-xs text-muted-foreground font-mono">
          © 2026 ZERODAYTM CONFERENCE. ALL RIGHTS RESERVED.
        </p>
      </div>
    </div>
  </footer>
);

export default FooterSection;
