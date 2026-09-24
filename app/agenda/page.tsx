'use client';

import { useState } from 'react';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { 
  Terminal, 
  Cpu, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  Sparkles, 
  ChevronRight, 
  Trophy, 
  Mic2, 
  Radio, 
  Code2, 
  ArrowUpRight 
} from 'lucide-react';

interface MilestoneItem {
  id: string;
  timeSlot: string;
  title: string;
  description: string;
  num: string;
  tag: string;
  statusCode: string;
  venue: string;
  trackCode: string;
}

const day1Milestones: MilestoneItem[] = [
  {
    id: 'd1-1',
    timeSlot: 'Morning',
    title: 'Doors open + welcome',
    description: 'Check-in, coffee, community arrival and the opening of Edition #2.',
    num: '01',
    tag: 'Check-in & Doors',
    statusCode: '0x1000',
    venue: 'Main Foyer & Partner Atrium',
    trackCode: 'SYS // ADMIT_VALIDATED',
  },
  {
    id: 'd1-2',
    timeSlot: 'Morning',
    title: 'Keynote + talks',
    description: 'Practical perspectives from cybersecurity professionals.',
    num: '02',
    tag: 'Keynote & Talks',
    statusCode: '0x20F4',
    venue: 'Auditorium Magna (Main Stage)',
    trackCode: 'TRK_01 // DEFENSE_CORE',
  },
  {
    id: 'd1-3',
    timeSlot: 'Midday',
    title: 'Lunch + partner space',
    description: 'A proper break with time to meet the people behind the companies.',
    num: '03',
    tag: 'Community & Lunch',
    statusCode: '0x33A0',
    venue: 'Partner Pavilion & Lounge',
    trackCode: 'NET // SPONSOR_EXPO',
  },
  {
    id: 'd1-4',
    timeSlot: 'Afternoon',
    title: 'Talks + panels',
    description: 'Real cases, open questions and multiple points of view.',
    num: '04',
    tag: 'Talks & Panels',
    statusCode: '0x47B2',
    venue: 'Auditorium Magna & Hall A',
    trackCode: 'TRK_02 // OFFENSIVE_RECON',
  },
  {
    id: 'd1-5',
    timeSlot: 'Closing',
    title: 'Community time',
    description: 'Continue the conversations without rushing out of the room.',
    num: '05',
    tag: 'Community Time',
    statusCode: '0x5EC8',
    venue: 'Community Hub & ICAM Terrace',
    trackCode: 'COMM // DIRECT_SYNC',
  },
];

const day2Milestones: MilestoneItem[] = [
  {
    id: 'd2-1',
    timeSlot: 'Morning',
    title: 'Team check-in',
    description: 'Rules, setup and a final technical check before the clock starts.',
    num: '01',
    tag: 'Team Check-in',
    statusCode: '0x61A0',
    venue: 'CTF Cyber Arena (ICAM Level 2)',
    trackCode: 'CTF // SQUAD_VERIFY',
  },
  {
    id: 'd2-2',
    timeSlot: 'Start',
    title: 'CTF goes live',
    description: 'Challenges unlock and the live scoreboard begins to move.',
    num: '02',
    tag: 'CTF Goes Live',
    statusCode: '0x72B0',
    venue: 'CTF Cyber Arena & Live Projector',
    trackCode: 'EXPLOIT // BOARD_RELEASE',
  },
  {
    id: 'd2-3',
    timeSlot: 'Midday',
    title: 'Competition continues',
    description: 'Teams solve across web, crypto, forensics and more.',
    num: '03',
    tag: 'Jeopardy Sprint',
    statusCode: '0x84C0',
    venue: 'CTF Arena · 5 Disciplines',
    trackCode: 'MULTI // LIVE_SCOREBOARD',
  },
  {
    id: 'd2-4',
    timeSlot: 'Final push',
    title: 'Last flags',
    description: 'The most intense part of the competition.',
    num: '04',
    tag: 'Scoreboard Freeze',
    statusCode: '0x95D0',
    venue: 'Stealth Scoring Horizon',
    trackCode: 'LOCK // CRITICAL_WINDOW',
  },
  {
    id: 'd2-5',
    timeSlot: 'Closing',
    title: 'Awards + write-ups',
    description: 'Winners, special awards and learning from the solutions.',
    num: '05',
    tag: 'Podium & Awards',
    statusCode: '0xA7E0',
    venue: 'Auditorium Magna Podium',
    trackCode: 'CEREMONY // PRIZE_MATRIX',
  },
];

export default function AgendaPage() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'day1' | 'day2' | 'layer3'>('all');
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedItem((prev) => (prev === id ? null : id));
  };

  return (
    <>
      <SiteHeader dark />
      <main className="min-h-screen bg-[#040002] text-white">
        {/* ========================================================
            HERO SECTION (Hybrid of Screenshot 2 + Cyberpunk Blackwall)
            ======================================================== */}
        <section className="relative isolate pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden border-b border-[#ff003c]/25 bg-[#080104]">
          {/* Ambient Blackwall Net & Horizon Lighting */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_10%,rgba(255,0,60,0.18),transparent_45%),radial-gradient(circle_at_80%_80%,rgba(255,42,85,0.12),transparent_40%)]" />
            <div className="absolute inset-0 opacity-[0.1] blackwall-grid" />
            {/* Blazing Incandescent Horizontal Horizon Flare Line */}
            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#ff003c] via-white to-transparent opacity-90 shadow-[0_0_35px_rgba(255,0,60,0.9),0_0_70px_rgba(255,42,85,0.6)]" />
          </div>

          <div className="container relative z-10 mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
              {/* Left Column: Index & Giant Display Title */}
              <div className="lg:col-span-8 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#ff003c] font-bold">
                    01 / Agenda
                  </span>
                  <span className="h-1.5 w-1.5 rounded-full bg-[#ff003c] animate-ping" />
                  <span className="font-mono text-[10px] text-white/50 uppercase tracking-widest hidden sm:inline">
                    {`// PROTOCOL: ARCHITECTURE_PREVIEW`}
                  </span>
                </div>

                <h1 className="display text-5xl sm:text-7xl md:text-8xl lg:text-[7.5rem] font-black uppercase tracking-tight text-white leading-[0.92]">
                  How the days
                  <br />
                  <span className="text-[#ff003c] text-glow-red">
                    take shape.
                  </span>
                </h1>
              </div>

              {/* Right Column: Editorial Summary & Status Badge */}
              <div className="lg:col-span-4 space-y-6">
                <p className="text-base sm:text-lg text-white/80 font-body leading-relaxed">
                  Conference, competition and enough room between them for useful
                  conversations.
                </p>

                <div className="p-4 rounded-xl border border-[#ff003c]/30 bg-[#0e0206]/90 backdrop-blur-md space-y-2">
                  <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-wider">
                    <span className="text-white/60">Programme Status</span>
                    <span className="text-[#ff003c] font-bold">CONFIRMED FORMAT</span>
                  </div>
                  <div className="pt-1 border-t border-white/10 font-mono text-[11px] text-[#c9aeb5] leading-relaxed">
                    <span className="text-white font-bold block">Edition #2 · Spring 2027</span>
                    Final timetable to be announced as speakers are locked.
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive View Filter Tabs */}
            <div className="mt-12 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-2">
                {[
                  { id: 'all' as const, label: 'All Planned Phases', count: '10 Blocks' },
                  { id: 'day1' as const, label: 'Day 01 / Conference', count: '5 Talks & Panels' },
                  { id: 'day2' as const, label: 'Day 02 / 8h CTF', count: '5 Match Milestones' },
                  { id: 'layer3' as const, label: 'Exploratory Layers', count: '3 Modules' },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveFilter(tab.id)}
                    className={`font-mono text-xs uppercase tracking-wider px-4 py-2.5 rounded-lg border transition-all flex items-center gap-2 ${
                      activeFilter === tab.id
                        ? 'border-[#ff003c] bg-[#ff003c] text-white font-bold shadow-[0_0_20px_rgba(255,0,60,0.5)]'
                        : 'border-[#ff003c]/25 bg-[#0e0206]/60 text-white/70 hover:border-[#ff003c]/60 hover:text-white'
                    }`}
                  >
                    <span>{tab.label}</span>
                    <span
                      className={`text-[9px] px-1.5 py-0.5 rounded font-mono ${
                        activeFilter === tab.id
                          ? 'bg-black/30 text-white'
                          : 'bg-white/10 text-white/60'
                      }`}
                    >
                      {tab.count}
                    </span>
                  </button>
                ))}
              </div>

              <div className="hidden xl:flex items-center gap-2 text-xs font-mono text-white/50">
                <Terminal size={14} className="text-[#ff003c]" />
                <span>SYS_MODE: 0x2027_CONFIRMED · PENDING_HOURLY_LOCK</span>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            DAY 01: CONFERENCE DAY (Hybrid Section 1)
            ======================================================== */}
        {(activeFilter === 'all' || activeFilter === 'day1') && (
          <section className="relative py-20 md:py-28 border-b border-[#ff003c]/20 bg-[#040002] overflow-hidden isolate">
            {/* Background Ambience */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_30%,rgba(255,0,60,0.08),transparent_50%)]" />
              <div className="absolute inset-0 opacity-[0.05] blackwall-grid" />
            </div>

            <div className="container relative z-10 mx-auto px-4 md:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
                {/* Left Column: Day 01 Aside (Editorial Style from Screenshot 2) */}
                <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-28">
                  <div className="space-y-3">
                    <p className="eyebrow !text-[#ff003c] text-[#ff003c] font-mono text-xs uppercase tracking-widest font-bold">
                      Day 01
                    </p>
                    <h2 className="display text-5xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-white leading-[0.94]">
                      Conference
                      <br />
                      <span className="text-[#ff003c] text-glow-red">
                        day.
                      </span>
                    </h2>
                  </div>

                  <p className="text-base sm:text-lg text-white/80 font-body leading-relaxed">
                    A full day of talks, panels and direct access to people doing
                    serious work in cybersecurity.
                  </p>

                  {/* Metadata Chips Stack */}
                  <div className="pt-2 space-y-2.5 font-mono text-xs">
                    <div className="flex items-center gap-2.5 p-3 rounded-xl border border-white/10 bg-[#0e0206]/80 text-white/70">
                      <MapPin size={15} className="text-[#ff003c] shrink-0" />
                      <span>ICAM Auditorium Magna & Atrium</span>
                    </div>

                    <div className="flex items-center gap-2.5 p-3 rounded-xl border border-[#ffaa00]/30 bg-[#ffaa00]/10 text-white/85">
                      <ShieldCheck size={15} className="text-[#ffaa00] shrink-0" />
                      <span>Up to 5 CPE Hours Accredited by ISACA</span>
                    </div>

                    <div className="flex items-center gap-2.5 p-3 rounded-xl border border-white/10 bg-[#0e0206]/80 text-white/70">
                      <Mic2 size={15} className="text-[#ff003c] shrink-0" />
                      <span>Keynotes · Technical Talks · Active Panels</span>
                    </div>
                  </div>
                </aside>

                {/* Right Column: Day Switch + Milestones List (Screenshot 2 + Cyber Trace Spine) */}
                <div className="lg:col-span-8 space-y-6">
                  {/* Top Day Switch Pill */}
                  <div className="day-switch">
                    <span>Day 01 / Conference</span>
                    <span>Planned structure</span>
                  </div>

                  {/* Cyber Hybrid Milestones Flow */}
                  <div className="relative pl-6 sm:pl-8 space-y-4 before:absolute before:left-2 sm:before:left-3 before:top-4 before:bottom-4 before:w-[2px] before:bg-gradient-to-b before:from-[#ff003c] before:via-[#ff2a55] before:to-[#ff003c]/20">
                    {day1Milestones.map((item) => {
                      const isExpanded = expandedItem === item.id;
                      return (
                        <article
                          key={item.id}
                          className={`relative rounded-2xl border transition-all duration-200 p-5 sm:p-6 ${
                            isExpanded
                              ? 'border-[#ff003c] bg-[#120207] shadow-[0_0_30px_rgba(255,0,60,0.25)]'
                              : 'border-[#ff003c]/25 bg-[#0a0104]/85 hover:border-[#ff003c]/50 hover:bg-[#0e0206]'
                          }`}
                        >
                          {/* Glowing Spine Dot */}
                          <span
                            className={`absolute -left-[27px] sm:-left-[35px] top-7 h-4 w-4 rounded-full border-2 transition-all ${
                              isExpanded
                                ? 'border-[#ff003c] bg-white shadow-[0_0_15px_#ff003c]'
                                : 'border-[#ff003c] bg-[#040002] shadow-[0_0_8px_rgba(255,0,60,0.6)]'
                            }`}
                          />

                          <button
                            type="button"
                            onClick={() => toggleExpand(item.id)}
                            className="w-full text-left bg-transparent border-0 p-0 text-inherit cursor-pointer focus:outline-none"
                          >
                            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                              {/* Main Content */}
                              <div className="space-y-2 flex-1">
                                <div className="flex flex-wrap items-center gap-3">
                                  <time className="font-mono font-bold text-xs uppercase tracking-wider text-[#ff003c]">
                                    {item.timeSlot}
                                  </time>
                                  <span className="font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 rounded border border-[#ff003c]/30 bg-[#ff003c]/10 text-white/90">
                                    {item.tag}
                                  </span>
                                  <span className="font-mono text-[10px] text-white/40">
                                    {item.statusCode}
                                  </span>
                                </div>

                                <h3 className="font-mono font-black text-xl sm:text-2xl uppercase tracking-tight text-white">
                                  {item.title}
                                </h3>

                                <p className="text-sm sm:text-base text-[#c9aeb5] leading-relaxed font-body">
                                  {item.description}
                                </p>
                              </div>

                              {/* Item Index Number & Action */}
                              <div className="flex sm:flex-col items-center justify-between sm:items-end gap-2 shrink-0">
                                <span className="font-mono text-xl sm:text-2xl font-black text-[#ff003c] text-glow-red">
                                  {item.num}
                                </span>
                                <span className="text-xs font-mono text-white/40 flex items-center gap-1 group-hover:text-white transition-colors">
                                  {isExpanded ? 'Less' : 'Details'}
                                  <ChevronRight
                                    size={13}
                                    className={`transition-transform ${isExpanded ? 'rotate-90' : ''}`}
                                  />
                                </span>
                              </div>
                            </div>
                          </button>

                          {/* Expanded Technical Telemetry */}
                          {isExpanded && (
                            <div className="mt-4 pt-4 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs text-white/70">
                              <div className="p-3 rounded-lg bg-black/40 border border-white/5">
                                <span className="text-white/40 block text-[10px] uppercase">Designated Stage</span>
                                <span className="text-white font-bold">{item.venue}</span>
                              </div>
                              <div className="p-3 rounded-lg bg-black/40 border border-white/5">
                                <span className="text-white/40 block text-[10px] uppercase">Telemetry Protocol</span>
                                <span className="text-[#ff003c] font-bold">{item.trackCode}</span>
                              </div>
                            </div>
                          )}
                        </article>
                      );
                    })}
                  </div>

                  {/* Planned Structure Notice Box (Exact Copy from Screenshot 2) */}
                  <div className="notice">
                    <p className="fine">
                      This is the planned flow, not a published timetable. Exact
                      times, session titles and speakers will be added as the
                      programme is confirmed.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ========================================================
            DAY 02: CTF DAY (Hybrid Section 2)
            ======================================================== */}
        {(activeFilter === 'all' || activeFilter === 'day2') && (
          <section className="relative py-20 md:py-28 border-b border-[#ff003c]/20 bg-[#060103] overflow-hidden isolate">
            {/* Background Ambience */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_30%,rgba(255,42,85,0.1),transparent_50%)]" />
              <div className="absolute inset-0 opacity-[0.05] blackwall-grid" />
            </div>

            <div className="container relative z-10 mx-auto px-4 md:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
                {/* Left Column: Day 02 Aside (Editorial Style from Screenshot 2) */}
                <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-28">
                  <div className="space-y-3">
                    <p className="eyebrow !text-[#ff2a55] text-[#ff2a55] font-mono text-xs uppercase tracking-widest font-bold">
                      Day 02
                    </p>
                    <h2 className="display text-5xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-white leading-[0.94]">
                      CTF
                      <br />
                      <span className="text-[#ff2a55] text-glow-flare">
                        day.
                      </span>
                    </h2>
                  </div>

                  <p className="text-base sm:text-lg text-white/80 font-body leading-relaxed">
                    A focused competition day for teams who want to turn
                    cybersecurity knowledge into action.
                  </p>

                  {/* CTF Specs Badges */}
                  <div className="pt-2 space-y-2.5 font-mono text-xs">
                    <div className="flex items-center gap-2.5 p-3 rounded-xl border border-[#ff2a55]/30 bg-[#ff2a55]/10 text-white">
                      <Trophy size={15} className="text-[#ff2a55] shrink-0" />
                      <span>4,000€ Prize Pool · Top Trophy & Cash</span>
                    </div>

                    <div className="flex items-center gap-2.5 p-3 rounded-xl border border-white/10 bg-[#0e0206]/80 text-white/70">
                      <Clock size={15} className="text-[#ff2a55] shrink-0" />
                      <span>8 Hours Non-stop Jeopardy Matrix</span>
                    </div>

                    <div className="flex items-center gap-2.5 p-3 rounded-xl border border-white/10 bg-[#0e0206]/80 text-white/70">
                      <Cpu size={15} className="text-[#ff2a55] shrink-0" />
                      <span>Web · Crypto · Forensics · Reverse · OSINT</span>
                    </div>
                  </div>
                </aside>

                {/* Right Column: Day Switch + Milestones List (Screenshot 2 + Cyber Trace Spine) */}
                <div className="lg:col-span-8 space-y-6">
                  {/* Day Switch Pill with Blackwall styling */}
                  <div className="day-switch">
                    <span
                      style={{
                        background: '#ff2a55',
                        color: '#ffffff',
                        borderColor: '#ff2a55',
                        boxShadow: '0 0 16px rgba(255,42,85,0.5)',
                      }}
                    >
                      Day 02 / Competition
                    </span>
                    <span>Confirmed format</span>
                  </div>

                  {/* Cyber Hybrid Milestones Flow */}
                  <div className="relative pl-6 sm:pl-8 space-y-4 before:absolute before:left-2 sm:before:left-3 before:top-4 before:bottom-4 before:w-[2px] before:bg-gradient-to-b before:from-[#ff2a55] before:via-[#ff003c] before:to-[#ff2a55]/20">
                    {day2Milestones.map((item) => {
                      const isExpanded = expandedItem === item.id;
                      return (
                        <article
                          key={item.id}
                          className={`relative rounded-2xl border transition-all duration-200 p-5 sm:p-6 ${
                            isExpanded
                              ? 'border-[#ff2a55] bg-[#160207] shadow-[0_0_30px_rgba(255,42,85,0.25)]'
                              : 'border-[#ff2a55]/25 bg-[#0a0104]/85 hover:border-[#ff2a55]/50 hover:bg-[#0e0206]'
                          }`}
                        >
                          {/* Glowing Spine Dot */}
                          <span
                            className={`absolute -left-[27px] sm:-left-[35px] top-7 h-4 w-4 rounded-full border-2 transition-all ${
                              isExpanded
                                ? 'border-[#ff2a55] bg-white shadow-[0_0_15px_#ff2a55]'
                                : 'border-[#ff2a55] bg-[#040002] shadow-[0_0_8px_rgba(255,42,85,0.6)]'
                            }`}
                          />

                          <button
                            type="button"
                            onClick={() => toggleExpand(item.id)}
                            className="w-full text-left bg-transparent border-0 p-0 text-inherit cursor-pointer focus:outline-none"
                          >
                            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                              {/* Main Content */}
                              <div className="space-y-2 flex-1">
                                <div className="flex flex-wrap items-center gap-3">
                                  <time className="font-mono font-bold text-xs uppercase tracking-wider text-[#ff2a55]">
                                    {item.timeSlot}
                                  </time>
                                  <span className="font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 rounded border border-[#ff2a55]/30 bg-[#ff2a55]/10 text-white/90">
                                    {item.tag}
                                  </span>
                                  <span className="font-mono text-[10px] text-white/40">
                                    {item.statusCode}
                                  </span>
                                </div>

                                <h3 className="font-mono font-black text-xl sm:text-2xl uppercase tracking-tight text-white">
                                  {item.title}
                                </h3>

                                <p className="text-sm sm:text-base text-[#c9aeb5] leading-relaxed font-body">
                                  {item.description}
                                </p>
                              </div>

                              {/* Item Index Number & Action */}
                              <div className="flex sm:flex-col items-center justify-between sm:items-end gap-2 shrink-0">
                                <span className="font-mono text-xl sm:text-2xl font-black text-[#ff2a55] text-glow-flare">
                                  {item.num}
                                </span>
                                <span className="text-xs font-mono text-white/40 flex items-center gap-1 group-hover:text-white transition-colors">
                                  {isExpanded ? 'Less' : 'Details'}
                                  <ChevronRight
                                    size={13}
                                    className={`transition-transform ${isExpanded ? 'rotate-90' : ''}`}
                                  />
                                </span>
                              </div>
                            </div>
                          </button>

                          {/* Expanded Technical Telemetry */}
                          {isExpanded && (
                            <div className="mt-4 pt-4 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs text-white/70">
                              <div className="p-3 rounded-lg bg-black/40 border border-white/5">
                                <span className="text-white/40 block text-[10px] uppercase">Battle Arena</span>
                                <span className="text-white font-bold">{item.venue}</span>
                              </div>
                              <div className="p-3 rounded-lg bg-black/40 border border-white/5">
                                <span className="text-white/40 block text-[10px] uppercase">Game Protocol</span>
                                <span className="text-[#ff2a55] font-bold">{item.trackCode}</span>
                              </div>
                            </div>
                          )}
                        </article>
                      );
                    })}
                  </div>

                  {/* CTF Format Notice Box (Exact Copy from Screenshot 2) */}
                  <div
                    className="notice"
                    style={{
                      background: 'rgba(255, 42, 85, 0.08)',
                      borderColor: '#ff2a55',
                    }}
                  >
                    <p className="fine" style={{ color: '#e5c9d0' }}>
                      The CTF is confirmed for Edition #2. Duration, challenge list,
                      online participation and registration details are still being
                      finalized.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ========================================================
            A POSSIBLE THIRD LAYER (Screenshot 2 + Cyber Cards)
            ======================================================== */}
        {(activeFilter === 'all' || activeFilter === 'layer3') && (
          <section className="relative py-24 md:py-32 bg-[#040002] border-t border-[#ff003c]/25 overflow-hidden isolate">
            <div className="container relative z-10 mx-auto px-4 md:px-8">
              <div className="max-w-3xl">
                <p className="eyebrow !text-[#ff003c] text-[#ff003c] font-mono text-xs uppercase tracking-widest font-bold">
                  Still being explored
                </p>
                <h2 className="display text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-white mt-2">
                  A possible
                  <br />
                  <span className="text-[#ff003c] text-glow-red">third layer.</span>
                </h2>
              </div>

              {/* 3 Fact Cards Grid from Screenshot 2 */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14">
                <article className="p-8 rounded-2xl border border-[#ff003c]/25 bg-[#0e0206]/85 backdrop-blur-xl flex flex-col justify-between min-h-[300px] transition-all hover:border-[#ff003c]/60 hover:shadow-[0_0_30px_rgba(255,0,60,0.15)] group">
                  <div className="flex items-center justify-between">
                    <strong className="display text-4xl sm:text-5xl font-black text-[#ff003c] text-glow-red">
                      Labs
                    </strong>
                    <Code2 className="text-[#ff003c]/60 group-hover:text-[#ff003c] transition-colors" size={24} />
                  </div>
                  <div>
                    <h3 className="font-mono font-bold text-lg text-white uppercase mb-2">
                      Hands-on sessions
                    </h3>
                    <p className="text-xs sm:text-sm text-[#c9aeb5] font-body leading-relaxed">
                      Small, practical learning formats if the right trainers,
                      space and partners come together.
                    </p>
                  </div>
                </article>

                <article className="p-8 rounded-2xl border border-[#ff003c]/25 bg-[#0e0206]/85 backdrop-blur-xl flex flex-col justify-between min-h-[300px] transition-all hover:border-[#ff003c]/60 hover:shadow-[0_0_30px_rgba(255,0,60,0.15)] group">
                  <div className="flex items-center justify-between">
                    <strong className="display text-4xl sm:text-5xl font-black text-[#ff2a55] text-glow-flare">
                      Live
                    </strong>
                    <Radio className="text-[#ff2a55]/60 group-hover:text-[#ff2a55] transition-colors" size={24} />
                  </div>
                  <div>
                    <h3 className="font-mono font-bold text-lg text-white uppercase mb-2">
                      Online stream
                    </h3>
                    <p className="text-xs sm:text-sm text-[#c9aeb5] font-body leading-relaxed">
                      Extending the conference beyond the physical room in
                      Timișoara with live streaming infrastructure.
                    </p>
                  </div>
                </article>

                <article className="p-8 rounded-2xl border border-[#ff003c]/25 bg-[#0e0206]/85 backdrop-blur-xl flex flex-col justify-between min-h-[300px] transition-all hover:border-[#ff003c]/60 hover:shadow-[0_0_30px_rgba(255,0,60,0.15)] group">
                  <div className="flex items-center justify-between">
                    <strong className="display text-4xl sm:text-5xl font-black text-white">
                      Web
                    </strong>
                    <Sparkles className="text-white/60 group-hover:text-white transition-colors" size={24} />
                  </div>
                  <div>
                    <h3 className="font-mono font-bold text-lg text-white uppercase mb-2">
                      Online CTF
                    </h3>
                    <p className="text-xs sm:text-sm text-[#c9aeb5] font-body leading-relaxed">
                      Opening selected competition participation beyond the venue,
                      if the format supports it.
                    </p>
                  </div>
                </article>
              </div>

              {/* Action Buttons */}
              <div className="mt-12 flex flex-wrap items-center gap-4">
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2.5 rounded-xl border border-[#ff003c] bg-[#ff003c] px-6 py-3.5 font-mono text-xs font-bold uppercase tracking-[0.16em] text-white shadow-[0_0_24px_rgba(255,0,60,0.45)] transition-all hover:-translate-y-0.5 hover:bg-[#ff1a4f] hover:shadow-[0_0_36px_rgba(255,0,60,0.65)]"
                >
                  Ask about the programme
                  <ArrowUpRight size={14} />
                </a>

                <a
                  href="/ctf"
                  className="inline-flex items-center gap-2.5 rounded-xl border border-white/20 bg-white/5 px-6 py-3.5 font-mono text-xs font-bold uppercase tracking-[0.16em] text-white hover:border-[#ff003c] hover:bg-[#180207] transition-all hover:-translate-y-0.5"
                >
                  Explore CTF Track ↗
                </a>
              </div>
            </div>
          </section>
        )}
      </main>
      <SiteFooter />
    </>
  );
}
