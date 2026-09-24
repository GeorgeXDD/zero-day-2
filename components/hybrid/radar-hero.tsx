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
    <section className="relative isolate min-h-[92vh] flex items-center overflow-hidden bg-[#040002] text-white pt-24 pb-12 sm:pt-28 sm:pb-16">
      {/* Dynamic Cyber Atmosphere & Blackwall Radar Background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Deep ambient dark gradient */}
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#140207_0%,#060103_42%,#020001_100%)]" />

        {/* Ambient radial glows in Cyberpunk Blackwall red & flare */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,0,60,0.22),transparent_40%),radial-gradient(circle_at_85%_25%,rgba(255,42,85,0.18),transparent_35%),radial-gradient(circle_at_50%_80%,rgba(255,0,60,0.08),transparent_40%)]" />

        {/* Diagonal light shafts */}
        <div className="absolute -top-32 left-[-10%] h-[38rem] w-[24rem] rotate-[18deg] bg-[linear-gradient(180deg,rgba(255,0,60,0.18),rgba(255,0,60,0.02),transparent)] blur-3xl opacity-70" />
        <div className="absolute -top-24 right-[-5%] h-[32rem] w-[18rem] rotate-[-22deg] bg-[linear-gradient(180deg,rgba(255,42,85,0.16),rgba(255,42,85,0.02),transparent)] blur-3xl opacity-60" />

        {/* Fine matrix grid pattern */}
        <div className="absolute inset-0 opacity-[0.1] blackwall-grid" />

        {/* Animated Radar Scanline Beam moving down */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute left-0 right-0 top-0 h-[28vh] bg-gradient-to-t from-[rgba(255,0,60,0.22)] via-[rgba(255,0,60,0.05)] to-transparent animate-scan-line border-b border-[rgba(255,0,60,0.5)]" />
        </div>

        {/* Blackwall Blazing Horizon Flare Beam across the background */}
        <div className="absolute top-[52%] left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#ff003c] via-white to-transparent opacity-75 shadow-[0_0_35px_rgba(255,0,60,0.9),0_0_70px_rgba(255,42,85,0.6)] pointer-events-none" />

        {/* Ambient bottom light pillars */}
        <div className="absolute inset-x-0 bottom-0 h-[30vh] pointer-events-none">
          <div className="absolute left-[-2%] bottom-0 h-[80%] w-[10%] bg-[linear-gradient(180deg,transparent,rgba(255,0,60,0.12)_60%,rgba(255,0,60,0.45)_100%)] blur-[20px]" />
          <div className="absolute left-[14%] bottom-0 h-[60%] w-[8%] bg-[linear-gradient(180deg,transparent,rgba(255,0,60,0.08)_60%,rgba(255,0,60,0.35)_100%)] blur-[16px]" />
          <div className="absolute right-[14%] bottom-0 h-[60%] w-[8%] bg-[linear-gradient(180deg,transparent,rgba(255,42,85,0.08)_60%,rgba(255,42,85,0.35)_100%)] blur-[16px]" />
          <div className="absolute right-[-2%] bottom-0 h-[80%] w-[10%] bg-[linear-gradient(180deg,transparent,rgba(255,42,85,0.12)_60%,rgba(255,42,85,0.45)_100%)] blur-[20px]" />
        </div>
      </div>

      {/* Main Hero Container - Structured Left-Aligned 2-Column Layout */}
      <div className="container relative z-10 mx-auto px-4 md:px-8 w-full">
        {/* Top Badges Ribbon with high-contrast white & vibrant colors */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#ff003c]/50 bg-[#ff003c]/15 px-3.5 py-1.5 font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-white">
            <span className="h-2 w-2 rounded-full bg-[#ff003c] animate-ping" />
            Edition #2 · Spring 2027
          </span>

          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 font-mono text-[11px] font-bold tracking-[0.12em] text-white">
            <MapPin size={13} className="text-[#ff003c]" />
            Timișoara, Romania
          </span>

          <a
            href="https://www.isaca.org"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-[#ffaa00]/50 bg-[#ffaa00]/15 px-3.5 py-1.5 font-mono text-[11px] font-bold uppercase tracking-[0.12em] text-white hover:bg-[#ffaa00]/25 transition-colors"
          >
            <ShieldCheck size={14} className="text-[#ffaa00]" />
            Up to 5 CPE Hours by ISACA
          </a>
        </div>

        {/* 2-Column Hero Grid: Left Content (Headline, Lead, CTA, Countdown) + Right Structured Box */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* LEFT COLUMN: Headings, Lead Text, Buttons, Countdown (7 Cols) */}
          <div className="lg:col-span-7 text-left space-y-6">
            <p className="eyebrow !text-[#ff003c] text-[#ff003c] font-mono text-xs uppercase tracking-widest block font-bold">
              {`// TIMIȘOARA CYBERSECURITY CONFERENCE & CTF`}
            </p>

            <h1 className="display text-5xl sm:text-7xl lg:text-8xl font-black uppercase tracking-tight text-white leading-[0.92] text-left">
              ZeroDayTM
              <br />
              <span className="text-[#ff003c] text-glow-red">
                Conference
              </span>{' '}
              <span className="text-white/60 font-mono text-3xl sm:text-5xl align-middle">
                +
              </span>{' '}
              <span className="text-[#ff2a55] text-glow-flare">
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
                className="group inline-flex items-center justify-center gap-2 rounded-xl border border-[#ff003c] bg-[#ff003c] px-6 py-3.5 font-mono text-xs font-bold uppercase tracking-[0.16em] text-white shadow-[0_0_28px_rgba(255,0,60,0.5)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#ff1a4f] hover:shadow-[0_0_42px_rgba(255,0,60,0.7)]"
              >
                Explore Programme
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="/ctf"
                className="group inline-flex items-center justify-center gap-2 rounded-xl border border-[#ff2a55] bg-[#ff2a55]/20 px-6 py-3.5 font-mono text-xs font-bold uppercase tracking-[0.16em] text-white shadow-[0_0_24px_rgba(255,42,85,0.25)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#ff2a55]/35 hover:shadow-[0_0_35px_rgba(255,42,85,0.45)]"
              >
                <Trophy size={14} className="text-[#ff2a55]" />
                Enter 8h CTF
              </a>

              <a
                href="https://discord.gg/WTfZ26GAg5"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-5 py-3.5 font-mono text-xs font-bold uppercase tracking-[0.16em] text-white backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 hover:border-[#ff003c] hover:bg-[#180207]"
              >
                Join Discord ↗
              </a>
            </div>

            {/* Live Countdown Matrix - Left Aligned */}
            <div className="pt-4">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#ff003c] font-bold mb-2.5 flex items-center gap-2">
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
                    className="p-3 sm:px-4 sm:py-2.5 rounded-xl border border-[#ff003c]/25 bg-[#0e0206]/80 backdrop-blur-md text-center min-w-[62px] sm:min-w-[72px]"
                  >
                    <span className="block font-mono text-xl sm:text-2xl font-black text-white leading-none">
                      {String(u.value).padStart(2, '0')}
                    </span>
                    <span className="block font-mono text-[9px] uppercase tracking-wider text-[#a38890] mt-1">
                      {u.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Structured Box Matching Section 2 Style (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="rounded-2xl border border-[#ff003c]/30 bg-[#0d0206]/92 backdrop-blur-xl p-6 shadow-2xl">
              <div className="flex items-center justify-between border-b border-[#ff003c]/20 pb-3 mb-4">
                <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-[#ff003c]">
                  {`// DUAL-MODE ARENA & VENUE`}
                </span>
                <span className="font-mono text-[10px] text-white/60 uppercase">
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
                      ? 'border-[#ff003c] bg-[#ff003c]/15 shadow-[0_0_20px_rgba(255,0,60,0.3)]'
                      : 'border-white/10 bg-white/[0.03] hover:border-[#ff003c]/40'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-white/50">
                      Day 01 · Conference
                    </span>
                    <Mic2 size={14} className="text-white" />
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
                      ? 'border-[#ff2a55] bg-[#ff2a55]/20 shadow-[0_0_20px_rgba(255,42,85,0.35)]'
                      : 'border-[#ff2a55]/30 bg-[#ff2a55]/[0.05] hover:border-[#ff2a55]/60'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-[#ff2a55] font-bold">
                      Day 02 · 8 Hours
                    </span>
                    <Trophy size={14} className="text-[#ff2a55]" />
                  </div>
                  <h4 className="font-mono font-bold text-sm text-[#ff2a55] mt-1 uppercase tracking-wide">
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
                      ? 'border-[#ff003c] bg-[#ff003c]/20 shadow-[0_0_20px_rgba(255,0,60,0.3)]'
                      : 'border-[#ff003c]/30 bg-[#ff003c]/[0.05] hover:border-[#ff003c]/60'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-[#ff003c] font-bold">
                      Campus Hub
                    </span>
                    <MapPin size={14} className="text-[#ff003c]" />
                  </div>
                  <h4 className="font-mono font-bold text-sm text-[#ff003c] mt-1 uppercase tracking-wide">
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
