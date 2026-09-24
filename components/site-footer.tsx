import Image from 'next/image';
import { MapPin, Mail } from 'lucide-react';

export function SiteFooter() {
  return (
    <footer className="relative bg-[#05010a]/85 backdrop-blur-md text-white pt-16 pb-12 overflow-hidden border-t border-[#ff2a85]/20">
      {/* Top glowing Vice City synthwave horizon flare line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#ff2a85] via-[#00f0ff] to-transparent opacity-90 shadow-[0_0_25px_rgba(255,42,133,0.85)]" />

      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10 items-start">
          {/* Brand & Mission (5 Cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative h-10 w-12">
                <Image
                  src="/logos/zeroday-logo-white.png"
                  alt="ZeroDayTM"
                  fill
                  className="object-contain drop-shadow-[0_0_12px_rgba(255,42,133,0.55)]"
                />
              </div>
              <span className="font-mono text-lg font-bold tracking-widest uppercase">
                ZeroDay<span className="text-[#00f0ff]">TM</span>
              </span>
            </div>

            <p className="display text-2xl sm:text-3xl text-white/90 leading-tight">
              HACK. LEARN.{' '}
              <span className="text-[#ff2a85] text-glow-pink">
                CONNECT.
              </span>
            </p>

            <p className="text-xs text-white/60 font-body max-w-sm leading-relaxed">
              Western Romania&apos;s premier community-driven cybersecurity conference
              and Capture The Flag competition. Hosted at West University of Timișoara ICAM.
            </p>
          </div>

          {/* Quick Navigation (3 Cols) */}
          <div className="md:col-span-3 space-y-3">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#00f0ff] block font-bold">
              {`// ARCHITECTURE`}
            </span>
            <div className="flex flex-col space-y-2 text-xs font-mono uppercase tracking-wider text-white/70">
              <a href="/agenda" className="hover:text-[#ff2a85] transition-colors">
                Event Agenda ↗
              </a>
              <a href="/ctf" className="hover:text-[#00f0ff] transition-colors">
                Capture The Flag ↗
              </a>
              <a href="/edition-2026" className="hover:text-[#ff2a85] transition-colors">
                Edition #1 Archive ↗
              </a>
              <a href="/partners" className="hover:text-[#00f0ff] transition-colors">
                Partner with Us ↗
              </a>
              <a href="/contact" className="hover:text-[#ff2a85] transition-colors">
                Contact Organizers ↗
              </a>
            </div>
          </div>

          {/* Contact & Venue (4 Cols) */}
          <div className="md:col-span-4 space-y-3">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#00f0ff] block font-bold">
              {`// LOCATION & COMMS`}
            </span>
            <div className="space-y-2 text-xs text-white/75 font-body">
              <div className="flex items-center gap-2">
                <MapPin size={14} className="text-[#00f0ff] shrink-0" />
                <span>ICAM Timișoara · West University of Timișoara</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={14} className="text-[#ff2a85] shrink-0" />
                <a href="mailto:zerodaytm@gmail.com" className="hover:text-[#ff2a85] transition-colors font-mono">
                  zerodaytm@gmail.com
                </a>
              </div>
            </div>

            {/* Social Badges */}
            <div className="pt-3 flex flex-wrap gap-2">
              {[
                { name: 'Discord', href: 'https://discord.gg/WTfZ26GAg5' },
                { name: 'LinkedIn', href: 'https://www.linkedin.com/company/zerodaytm/' },
                { name: 'Instagram', href: 'https://www.instagram.com/zerodaytm/' },
                { name: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61588751345468' },
              ].map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-lg border border-white/10 bg-white/5 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-white/70 hover:border-[#ff2a85] hover:text-[#ff2a85] hover:bg-[#ff2a85]/10 transition-colors"
                >
                  {s.name} ↗
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-xs font-mono text-white/40">
          <span>© 2026–2027 ZERODAYTM CONFERENCE & CTF. ALL RIGHTS RESERVED.</span>
          <span className="text-[#00f0ff]/90 font-bold">
            TIMIȘOARA, ROMANIA · EDITION #2
          </span>
        </div>
      </div>
    </footer>
  );
}
