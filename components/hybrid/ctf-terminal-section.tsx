'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Terminal, Clock, Trophy, Flag, Shield, ArrowRight, CheckCircle2, Award } from 'lucide-react';

export function CtfTerminalSection() {
  const [activeTab, setActiveTab] = useState<'console' | 'timeline' | 'prizes'>('console');

  return (
    <section id="ctf" className="relative py-24 bg-[#040002] text-white overflow-hidden isolate border-t border-[#ff003c]/20">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,0,60,0.14),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(255,42,85,0.1),transparent_40%)]" />
        <div className="absolute inset-0 opacity-[0.06] blackwall-grid" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-8">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.24em] text-[#ff003c] block mb-2 font-bold">
              {`// COMPETITIVE CYBER ARENA`}
            </span>
            <h2 className="display text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight">
              Capture The{' '}
              <span className="text-[#ff003c] text-glow-red">
                Flag.
              </span>
            </h2>
          </div>

          {/* Interactive Navigation Tabs */}
          <div className="flex items-center gap-2 p-1.5 rounded-xl border border-[#ff003c]/30 bg-[#0e0206]/80 backdrop-blur-md">
            {[
              { id: 'console', label: 'Terminal CLI' },
              { id: 'timeline', label: '8h Timeline' },
              { id: 'prizes', label: 'Prizes & Awards' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`font-mono text-xs uppercase tracking-wider px-3.5 py-2 rounded-lg transition-all ${
                  activeTab === tab.id
                    ? 'bg-[#ff003c] text-white shadow-[0_0_15px_rgba(255,0,60,0.5)]'
                    : 'text-white/60 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* 2-Column Grid: Visual / Interaction on Left + Quick Stats & Register on Right */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Main Interactive Stage (7 Cols) */}
          <div className="lg:col-span-7">
            {activeTab === 'console' && (
              <div className="rounded-2xl border border-[#ff003c]/30 bg-[#080104] shadow-[0_16px_40px_rgba(0,0,0,0.8)] overflow-hidden">
                {/* Terminal Window Header */}
                <div className="flex items-center justify-between px-4 py-3 bg-[#0e0206] border-b border-[#ff003c]/20">
                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-[#ff5f56]" />
                    <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
                    <span className="h-3 w-3 rounded-full bg-[#27c93f]" />
                    <span className="ml-3 font-mono text-[11px] text-white/50">
                      zeroday_ctf_env.sh
                    </span>
                  </div>
                  <span className="font-mono text-[10px] text-[#ff003c] bg-[#ff003c]/15 px-2 py-0.5 rounded font-bold">
                    LIVE_READY
                  </span>
                </div>

                {/* Terminal Screen Content */}
                <div className="p-6 font-mono text-xs sm:text-sm space-y-4 text-white/80">
                  <div>
                    <span className="text-[#ff003c]">$</span>{' '}
                    <span className="text-white">cat /etc/zeroday/competition_manifest.json</span>
                  </div>

                  <div className="p-4 rounded-xl bg-black/60 border border-[#ff003c]/20 text-white/70 space-y-2 text-xs leading-relaxed">
                    <p className="text-[#ff003c]">
                      {`{`}
                    </p>
                    <p className="pl-4">
                      <span className="text-white/40">"competition":</span> "ZeroDayTM Capture The Flag",
                    </p>
                    <p className="pl-4">
                      <span className="text-white/40">"duration":</span> "8 Hours Non-stop",
                    </p>
                    <p className="pl-4">
                      <span className="text-white/40">"prize_pool":</span> "4,000€ Guaranteed Cash & Goodies",
                    </p>
                    <p className="pl-4">
                      <span className="text-white/40">"team_size":</span> "1 to 4 Players",
                    </p>
                    <p className="pl-4">
                      <span className="text-white/40">"categories":</span> [
                      <span className="text-[#ff2a55]">"Web Security"</span>,{' '}
                      <span className="text-[#ff2a55]">"Cryptography"</span>,{' '}
                      <span className="text-[#ff2a55]">"Digital Forensics"</span>,{' '}
                      <span className="text-[#ff2a55]">"Reverse Engineering"</span>,{' '}
                      <span className="text-[#ff2a55]">"OSINT & Recon"</span>
                      ]
                    </p>
                    <p className="text-[#ff003c]">
                      {`}`}
                    </p>
                  </div>

                  <div>
                    <span className="text-[#ff003c]">$</span>{' '}
                    <span className="text-white">echo "Need help with rules, teammate matching or write-ups?"</span>
                    <p className="mt-1 text-white/60">
                      Join our official Discord community for real-time announcements and team finding channels.
                    </p>
                  </div>

                  <div className="pt-2">
                    <a
                      href="https://discord.gg/WTfZ26GAg5"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-lg bg-[#5865F2]/20 border border-[#5865F2]/50 text-[#8ea1ff] hover:bg-[#5865F2]/30 transition-all font-mono text-xs uppercase tracking-wider"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 11.732 11.732 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.196.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                      </svg>
                      Join Discord Channel ↗
                    </a>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'timeline' && (
              <div className="rounded-2xl border border-[var(--cyber-purple)]/30 bg-[#070b09] p-6 space-y-4">
                <span className="font-mono text-xs uppercase tracking-widest text-[var(--cyber-purple)] block mb-2">
                  {`// 8-HOUR COMPETITION SCHEDULE`}
                </span>
                <div className="relative pl-6 space-y-6 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-[2px] before:bg-[var(--cyber-purple)]/30">
                  {[
                    { time: '09:00 - 10:00', title: 'Team Check-in & Environment Test', desc: 'VPN key issuance, team verification, and target infrastructure connectivity checks.' },
                    { time: '10:00', title: 'CTF Opening & Challenge Board Unlocked', desc: 'First wave of flags goes live across Web, Crypto, and Forensics.' },
                    { time: '14:00', title: 'Mid-Game Hard Challenges Drop', desc: 'Reverse engineering and complex binary exploitation challenges unlocked.' },
                    { time: '17:30', title: 'Scoreboard Freeze (Final 30 Min)', desc: 'The most intense phase as teams submit final flags in stealth mode.' },
                    { time: '18:00 - 19:00', title: 'Winners Reveal, Write-ups & Awards', desc: 'Podium announcement, prize presentations, and challenge write-up debriefs.' },
                  ].map((item, idx) => (
                    <div key={idx} className="relative">
                      <span className="absolute -left-[27px] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-[var(--cyber-purple)] bg-[#070b09]" />
                      <span className="font-mono text-[11px] text-[var(--cyber-purple)] font-bold">
                        {item.time}
                      </span>
                      <h4 className="font-mono font-bold text-sm text-white mt-0.5">
                        {item.title}
                      </h4>
                      <p className="text-xs text-white/60 mt-1 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'prizes' && (
              <div className="rounded-2xl border border-[var(--cyber-purple)]/30 bg-[#070b09] p-6 space-y-4">
                <span className="font-mono text-xs uppercase tracking-widest text-[var(--cyber-purple)] block mb-3">
                  {`// 4000€ PRIZE MATRIX & SPECIAL RECOGNITIONS`}
                </span>
                <div className="grid sm:grid-cols-3 gap-4">
                  <div className="p-4 rounded-xl border border-[var(--cyber-amber)]/40 bg-[var(--cyber-amber)]/10 text-center">
                    <Trophy className="mx-auto text-[var(--cyber-amber)] mb-2" size={24} />
                    <span className="font-mono text-[10px] uppercase text-white/60 block">1st Place</span>
                    <strong className="font-mono text-xl font-bold text-[var(--cyber-amber)] block">Top Trophy</strong>
                    <span className="text-xs text-white/70 mt-1 block">Major cash prize + hardware swag</span>
                  </div>

                  <div className="p-4 rounded-xl border border-white/20 bg-white/5 text-center">
                    <Award className="mx-auto text-white/70 mb-2" size={24} />
                    <span className="font-mono text-[10px] uppercase text-white/60 block">2nd & 3rd Place</span>
                    <strong className="font-mono text-xl font-bold text-white block">Podium Finish</strong>
                    <span className="text-xs text-white/70 mt-1 block">Cash awards + training vouchers</span>
                  </div>

                  <div className="p-4 rounded-xl border border-[var(--cyber-purple)]/40 bg-[var(--cyber-purple)]/10 text-center">
                    <Shield className="mx-auto text-[var(--cyber-purple)] mb-2" size={24} />
                    <span className="font-mono text-[10px] uppercase text-white/60 block">Special Award</span>
                    <strong className="font-mono text-xl font-bold text-[var(--cyber-purple)] block">Best Write-Up</strong>
                    <span className="text-xs text-white/70 mt-1 block">Recognition for technical clarity</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl border border-white/10 bg-white/[0.02] flex items-start gap-3 mt-4">
                  <CheckCircle2 size={16} className="text-[var(--cyber-green)] shrink-0 mt-0.5" />
                  <p className="text-xs text-white/70 leading-relaxed font-body">
                    All participants receive digital certificates of participation, ISACA verifiable credits, and access to post-event write-ups and challenge solution breakdown discussions.
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* CTF Specs & Direct Action (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Quick Fact Grid */}
            <div className="grid grid-cols-2 gap-3.5">
              {[
                { icon: Clock, label: 'Duration', val: '8 Hours Non-stop', color: 'var(--cyber-green)' },
                { icon: Trophy, label: 'Prize Pool', val: '4,000€ Cash & Gifts', color: 'var(--cyber-amber)' },
                { icon: Flag, label: 'Game Format', val: 'Jeopardy Matrix', color: 'var(--cyber-purple)' },
                { icon: Terminal, label: 'Track Count', val: '5+ Disciplines', color: 'var(--cyber-blue)' },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={i}
                    className="p-4 rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur-md flex flex-col justify-between"
                  >
                    <Icon size={18} style={{ color: item.color }} className="mb-2" />
                    <div>
                      <span className="font-mono text-[10px] uppercase tracking-wider text-white/40 block">
                        {item.label}
                      </span>
                      <strong className="font-mono text-sm sm:text-base font-bold text-white mt-0.5 block">
                        {item.val}
                      </strong>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTF Live Arena Card */}
            <div className="relative rounded-2xl overflow-hidden border border-[#ff003c]/40 p-6 bg-gradient-to-br from-[#160207] to-[#080104] shadow-[0_0_30px_rgba(255,0,60,0.2)]">
              <div className="relative z-10">
                <span className="inline-flex items-center gap-2 rounded-full border border-[#ff003c]/40 bg-[#ff003c]/15 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-white mb-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#ff003c] animate-ping" />
                  Teams of up to 4
                </span>

                <h3 className="font-mono font-bold text-xl sm:text-2xl text-white tracking-tight uppercase">
                  Ready to test your exploits?
                </h3>

                <p className="text-xs text-white/70 mt-2 leading-relaxed">
                  Form a team or register solo to get matched. Solve challenges, claim flags, and climb the live on-site projector scoreboard.
                </p>

                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                  <a
                    href="/ctf"
                    className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-[#ff003c] px-5 py-3 font-mono text-xs font-bold uppercase tracking-[0.16em] text-white shadow-[0_0_25px_rgba(255,0,60,0.45)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#ff1a4f] hover:shadow-[0_0_35px_rgba(255,0,60,0.65)]"
                  >
                    <Flag size={14} />
                    Enter Competition
                  </a>

                  <a
                    href="https://discord.gg/WTfZ26GAg5"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-4 py-3 font-mono text-xs font-bold uppercase tracking-wider text-white hover:border-[#ff003c] hover:bg-[#180207]"
                  >
                    Discord
                  </a>
                </div>
              </div>
            </div>

            {/* In-action photo snippet */}
            <div className="relative h-44 rounded-2xl overflow-hidden border border-white/10 photo">
              <Image
                src="/images/SNY04552.JPG"
                alt="Hackers competing in the ZeroDayTM CTF"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
                <span className="font-mono text-[11px] text-white/80">
                  Edition #1 / Timișoara · Real-time competition floor
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
