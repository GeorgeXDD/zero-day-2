'use client';

import { useState, useEffect } from 'react';
import { Mic2, Trophy, MapPin, ArrowRight, ShieldCheck, Clock } from 'lucide-react';

const TARGET_DATE = new Date('2027-05-15T09:00:00');

export function RadarHero() {
  const [activeAnchor, setActiveAnchor] = useState<number | null>(null);
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      const diff = Math.max(0, TARGET_DATE.getTime() - now.getTime());
      setCountdown({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
      });
    };
    tick();
    const timer = setInterval(tick, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative isolate min-h-[92vh] flex items-center overflow-hidden bg-transparent text-white pt-24 pb-12 sm:pt-28 sm:pb-16">
      {/* GTA 6 Dusk Sunset Gradient Atmosphere (Soft, Blurry, No Radar Lines) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        {/* Vertical Sky Gradient (Sampled directly from GTA 6 dusk photo: #7e71a5 -> #c185a9 -> #f09c93 -> #fd9d7e) */}
        <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,rgba(126,113,165,0.22)_18%,rgba(193,133,169,0.28)_46%,rgba(240,156,147,0.34)_70%,rgba(253,157,126,0.25)_88%,transparent_100%)]" />

        {/* Large Blurry Sunset Horizon Bloom (Warm Peach / Sunset Glow from photo) */}
        <div className="absolute bottom-[8%] left-1/2 -translate-x-1/2 w-[125%] h-[55%] rounded-[100%] bg-[radial-gradient(ellipse_at_center,rgba(253,157,126,0.36)_0%,rgba(240,156,147,0.25)_35%,rgba(193,133,169,0.12)_65%,transparent_80%)] blur-[95px]" />

        {/* Upper-Mid Dusk Rose & Lavender Blurry Glow Orb */}
        <div className="absolute top-[18%] left-1/2 -translate-x-1/2 w-[90%] h-[45%] rounded-[100%] bg-[radial-gradient(ellipse_at_center,rgba(193,133,169,0.24)_0%,rgba(144,121,165,0.18)_45%,transparent_75%)] blur-[100px]" />

        {/* Left Side Glow: GTA Sunset Rose-Pink Accent */}
        <div className="absolute top-[28%] -left-[12%] w-[55%] h-[60%] rounded-full bg-[radial-gradient(circle,rgba(255,42,133,0.24)_0%,rgba(193,133,169,0.15)_40%,transparent_70%)] blur-[110px]" />

        {/* Right Side Glow: Cool Evening Sky & Electric Cyan Accent */}
        <div className="absolute top-[24%] -right-[12%] w-[55%] h-[60%] rounded-full bg-[radial-gradient(circle,rgba(0,240,255,0.18)_0%,rgba(126,113,165,0.15)_45%,transparent_70%)] blur-[110px]" />

        {/* Central Contrast Shield (ensures crystal clear readability for all typography and badges) */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(7,2,13,0.5)_0%,rgba(7,2,13,0.15)_65%,transparent_100%)]" />

        {/* Top Vignette (gentle blend into header) */}
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#07020d]/80 to-transparent" />
      </div>

      {/* Main Hero Container - Structured Left-Aligned 2-Column Layout */}
      <div className="container relative z-10 mx-auto px-4 md:px-8 w-full">
        {/* Top Badges Ribbon with high-contrast white & vibrant colors */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#ff2a85]/60 bg-[#ff2a85]/15 px-3.5 py-1.5 font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-white shadow-[0_0_12px_rgba(255,42,133,0.35)]">
            <span className="h-2 w-2 rounded-full bg-[#ff2a85] animate-ping" />
            Edition #2 · Spring 2027
          </span>

          <span className="inline-flex items-center gap-2 rounded-full border border-[#00f0ff]/40 bg-[#00f0ff]/10 px-3.5 py-1.5 font-mono text-[11px] font-bold tracking-[0.12em] text-white">
            <MapPin size={13} className="text-[#00f0ff]" />
            Timișoara, Romania
          </span>

          <a
            href="https://www.isaca.org"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-[#ff7a00]/50 bg-[#ff7a00]/15 px-3.5 py-1.5 font-mono text-[11px] font-bold uppercase tracking-[0.12em] text-white hover:bg-[#ff7a00]/25 transition-colors"
          >
            <ShieldCheck size={14} className="text-[#ff7a00]" />
            Up to 5 CPE Hours by ISACA
          </a>
        </div>

        {/* 2-Column Hero Grid: Left Content (Headline, Lead, CTA, Countdown) + Right Structured Box */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* LEFT COLUMN: Headings, Lead Text, Buttons, Countdown (7 Cols) */}
          <div className="lg:col-span-7 text-left space-y-6">
            <p className="eyebrow !text-[#00f0ff] text-[#00f0ff] font-mono text-xs uppercase tracking-widest block font-bold text-glow-cyan">
              {`// TIMIȘOARA CYBERSECURITY CONFERENCE & CTF`}
            </p>

            <h1 className="display text-5xl sm:text-7xl lg:text-8xl font-black uppercase tracking-tight text-white leading-[0.92] text-left">
              ZeroDayTM
              <br />
              <span className="text-[#ff2a85] text-glow-pink">
                Conference
              </span>{' '}
              <span className="text-white/60 font-mono text-3xl sm:text-5xl align-middle">
                +
              </span>{' '}
              <span className="text-[#00f0ff] text-glow-cyan">
                8h CTF.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-white/85 font-body max-w-2xl leading-relaxed">
              Cybersecurity gets better when knowledge leaves the screen and
              enters the room. Talks, panels, and an intense closing Capture The
              Flag competition for students, builders, and elite practitioners in
              Timișoara.
            </p>

            {/* Quick Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3.5">
              <a
                href="/agenda"
                className="group inline-flex items-center justify-center gap-2 rounded-xl border border-[#ff2a85] bg-[#ff2a85] px-6 py-3.5 font-mono text-xs font-bold uppercase tracking-[0.16em] text-white shadow-[0_0_28px_rgba(255,42,133,0.55)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#ff007f] hover:shadow-[0_0_42px_rgba(255,42,133,0.8)]"
              >
                Explore Programme
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="/ctf"
                className="group inline-flex items-center justify-center gap-2 rounded-xl border border-[#00f0ff] bg-[#00f0ff]/20 px-6 py-3.5 font-mono text-xs font-bold uppercase tracking-[0.16em] text-white shadow-[0_0_24px_rgba(0,240,255,0.3)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#00f0ff]/35 hover:shadow-[0_0_35px_rgba(0,240,255,0.55)]"
              >
                <Trophy size={14} className="text-[#00f0ff]" />
                Enter 8h CTF
              </a>

              <a
                href="https://discord.gg/WTfZ26GAg5"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-5 py-3.5 font-mono text-xs font-bold uppercase tracking-[0.16em] text-white backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 hover:border-[#ff2a85] hover:bg-[#1a0418]"
              >
                Join Discord ↗
              </a>
            </div>

            {/* Live Countdown Matrix - Left Aligned */}
            <div className="pt-4">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#00f0ff] font-bold mb-2.5 flex items-center gap-2">
                <Clock size={12} />
                Countdown to Registration & Spring 2027
              </span>

              <div className="flex gap-2.5 sm:gap-3">
                {[
                  { label: 'DAYS', value: countdown.days },
                  { label: 'HRS', value: countdown.hours },
                  { label: 'MIN', value: countdown.minutes },
                  { label: 'SEC', value: countdown.seconds },
                ].map((u) => (
                  <div
                    key={u.label}
                    className="p-3 sm:px-4 sm:py-2.5 rounded-xl border border-[#ff2a85]/30 bg-[#120524]/85 backdrop-blur-md text-center min-w-[62px] sm:min-w-[72px]"
                  >
                    <span className="block font-mono text-xl sm:text-2xl font-black text-white leading-none">
                      {String(u.value).padStart(2, '0')}
                    </span>
                    <span className="block font-mono text-[9px] uppercase tracking-wider text-[#a89fc0] mt-1">
                      {u.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Structured Box Matching Section 2 Style (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="rounded-2xl border border-[#ff2a85]/35 bg-[#100424]/92 backdrop-blur-xl p-6 shadow-[0_12px_40px_rgba(0,0,0,0.8),0_0_30px_rgba(255,42,133,0.15)]">
              <div className="flex items-center justify-between border-b border-[#ff2a85]/25 pb-3 mb-4">
                <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-[#ff2a85]">
                  {`// DUAL-MODE ARENA & VENUE`}
                </span>
                <span className="font-mono text-[10px] text-[#00f0ff] uppercase">
                  Timișoara · 2027
                </span>
              </div>

              <p className="text-xs text-white/80 leading-relaxed font-body">
                The conference sessions and the 8-hour CTF competition run in
                dedicated spaces with separate schedules so participants can dive
                deep into their preferred track.
              </p>

              {/* 3 Interactive Anchors Stack */}
              <div className="space-y-3 pt-3">
                {/* Anchor 1: Speaker Panels */}
                <div
                  onMouseEnter={() => setActiveAnchor(0)}
                  onMouseLeave={() => setActiveAnchor(null)}
                  className={`p-4 rounded-xl border transition-all duration-200 cursor-pointer ${
                    activeAnchor === 0
                      ? 'border-[#ff2a85] bg-[#ff2a85]/20 shadow-[0_0_20px_rgba(255,42,133,0.35)]'
                      : 'border-white/10 bg-white/[0.03] hover:border-[#ff2a85]/40'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-white/60">
                      Day 01 · Conference
                    </span>
                    <Mic2 size={14} className="text-[#ff2a85]" />
                  </div>
                  <h4 className="font-mono font-bold text-sm text-white mt-1 uppercase tracking-wide">
                    Speaker Panels & Keynotes
                  </h4>
                  <p className="text-xs text-white/65 mt-1 leading-relaxed">
                    Practical case studies, offensive security, and threat defense from active practitioners.
                  </p>
                </div>

                {/* Anchor 2: 8h CTF */}
                <div
                  onMouseEnter={() => setActiveAnchor(1)}
                  onMouseLeave={() => setActiveAnchor(null)}
                  className={`p-4 rounded-xl border transition-all duration-200 cursor-pointer ${
                    activeAnchor === 1
                      ? 'border-[#00f0ff] bg-[#00f0ff]/20 shadow-[0_0_20px_rgba(0,240,255,0.35)]'
                      : 'border-[#00f0ff]/30 bg-[#00f0ff]/[0.05] hover:border-[#00f0ff]/60'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-[#00f0ff] font-bold">
                      Day 02 · 8 Hours
                    </span>
                    <Trophy size={14} className="text-[#00f0ff]" />
                  </div>
                  <h4 className="font-mono font-bold text-sm text-[#00f0ff] mt-1 uppercase tracking-wide">
                    8h Jeopardy CTF Arena
                  </h4>
                  <p className="text-xs text-white/65 mt-1 leading-relaxed">
                    4000€ prize pool, teams of up to 4. Web, Crypto, Reverse, Forensics, OSINT.
                  </p>
                </div>

                {/* Anchor 3: Venue */}
                <div
                  onMouseEnter={() => setActiveAnchor(2)}
                  onMouseLeave={() => setActiveAnchor(null)}
                  className={`p-4 rounded-xl border transition-all duration-200 cursor-pointer ${
                    activeAnchor === 2
                      ? 'border-[#9d4edd] bg-[#9d4edd]/20 shadow-[0_0_20px_rgba(157,78,221,0.35)]'
                      : 'border-[#9d4edd]/30 bg-[#9d4edd]/[0.05] hover:border-[#9d4edd]/60'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-[#9d4edd] font-bold">
                      Campus Hub
                    </span>
                    <MapPin size={14} className="text-[#9d4edd]" />
                  </div>
                  <h4 className="font-mono font-bold text-sm text-[#9d4edd] mt-1 uppercase tracking-wide">
                    ICAM Timișoara
                  </h4>
                  <p className="text-xs text-white/65 mt-1 leading-relaxed">
                    West University of Timișoara ICAM institute — auditorium, CTF lab & community lounge.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
