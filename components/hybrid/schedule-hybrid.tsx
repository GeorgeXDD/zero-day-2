'use client';

import { useState } from 'react';
import { Calendar, Clock, MapPin, Cpu, ArrowUpRight } from 'lucide-react';

interface SessionItem {
  id: string;
  time: string;
  title: string;
  type: 'keynote' | 'talk' | 'panel' | 'ctf' | 'networking' | 'checkin';
  venue: string;
  desc: string;
  statusCode: string;
  day: 1 | 2;
}

const sessions: SessionItem[] = [
  // Day 1
  {
    id: 'd1-checkin',
    time: '08:30 - 09:30',
    title: 'Doors Open, Coffee & Badge Verification',
    type: 'checkin',
    venue: 'Main Foyer & Atrium',
    desc: 'Welcome kit pickup, badge issuance, morning coffee, and early sponsor booth networking.',
    statusCode: '0x1000',
    day: 1,
  },
  {
    id: 'd1-opening',
    time: '09:30 - 10:15',
    title: 'ZeroDayTM Opening Keynote: Defending in the Age of Autonomous Threats',
    type: 'keynote',
    venue: 'Auditorium Magna',
    desc: 'Practical perspectives on shifting threat landscapes, defensive engineering, and community resilience.',
    statusCode: '0x10A4',
    day: 1,
  },
  {
    id: 'd1-forensics',
    time: '10:30 - 11:30',
    title: 'Digital Forensics in the Trenches: Incident Response Case Studies',
    type: 'talk',
    venue: 'Hall A (Blue Track)',
    desc: 'Real memory artifacts, malware unmasking, chain of custody procedures, and anti-forensics evasion breakdown.',
    statusCode: '0x11B8',
    day: 1,
  },
  {
    id: 'd1-lunch',
    time: '12:30 - 14:00',
    title: 'Shared Lunch & Partner Lounge Discovery',
    type: 'networking',
    venue: 'Partner Pavilion',
    desc: 'Full sit-down meal, partner tech demos, recruiting lounges, and open conversations without rushing.',
    statusCode: '0x12F0',
    day: 1,
  },
  {
    id: 'd1-panel',
    time: '14:00 - 15:15',
    title: 'Executive Panel: Cloud Resilience, NIS2 Compliance & Threat Intelligence',
    type: 'panel',
    venue: 'Auditorium Magna',
    desc: 'Industry CISOs, government liaisons, and researchers debating regulatory realities and practical posture.',
    statusCode: '0x13C2',
    day: 1,
  },
  {
    id: 'd1-ai-sec',
    time: '15:30 - 16:30',
    title: 'Offensive AI & Agentic Security Architecture',
    type: 'talk',
    venue: 'Hall B (Green Track)',
    desc: 'Auditing LLM agents, indirect prompt injection risks, red-teaming automated SOC workflows.',
    statusCode: '0x14D6',
    day: 1,
  },

  // Day 2
  {
    id: 'd2-checkin',
    time: '09:00 - 10:00',
    title: 'CTF Team Staging & Network Key Distribution',
    type: 'checkin',
    venue: 'ICAM CTF Arena',
    desc: 'Hardware setups, network tunnel configs, rule confirmation, and final team roster freeze.',
    statusCode: '0x2000',
    day: 2,
  },
  {
    id: 'd2-ctf-start',
    time: '10:00 - 18:00',
    title: '8-Hour Non-stop Capture The Flag Competition',
    type: 'ctf',
    venue: 'ICAM Arena & Online Board',
    desc: 'Jeopardy-style challenge board unlocking Web, Crypto, Reverse Engineering, Forensics, and OSINT flags.',
    statusCode: '0x20A8',
    day: 2,
  },
  {
    id: 'd2-awards',
    time: '18:15 - 19:30',
    title: 'Scoreboard Reveal, Prize Ceremony & Challenge Write-ups',
    type: 'panel',
    venue: 'Auditorium Magna',
    desc: 'Unfreezing the scoreboard, awarding the 4000€ prize pool, and top teams presenting their clever exploit chains.',
    statusCode: '0x21F4',
    day: 2,
  },
];

const typeStyles: Record<string, { label: string; color: string; border: string; bg: string }> = {
  keynote: { label: 'Keynote', color: '#eab308', border: 'rgba(234, 179, 8, 0.4)', bg: 'rgba(234, 179, 8, 0.08)' },
  talk: { label: 'Technical Talk', color: '#0ea5e9', border: 'rgba(14, 165, 233, 0.4)', bg: 'rgba(14, 165, 233, 0.08)' },
  panel: { label: 'Panel Debate', color: '#a855f7', border: 'rgba(168, 85, 247, 0.4)', bg: 'rgba(168, 85, 247, 0.08)' },
  ctf: { label: 'CTF Battle', color: '#37ff78', border: 'rgba(55, 255, 120, 0.4)', bg: 'rgba(55, 255, 120, 0.08)' },
  networking: { label: 'Community & Lunch', color: '#10b981', border: 'rgba(16, 185, 129, 0.4)', bg: 'rgba(16, 185, 129, 0.08)' },
  checkin: { label: 'Check-in & Doors', color: '#94a3b8', border: 'rgba(148, 163, 184, 0.4)', bg: 'rgba(148, 163, 184, 0.08)' },
};

export function ScheduleHybrid() {
  const [selectedDay, setSelectedDay] = useState<1 | 2 | 'all'>('all');

  const filteredSessions =
    selectedDay === 'all'
      ? sessions
      : sessions.filter((s) => s.day === selectedDay);

  return (
    <section id="schedule" className="section paper border-t border-[var(--line)]">
      <div className="container">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <p className="eyebrow">{`// Timetable Architecture`}</p>
            <h2 className="display section-title text-4xl sm:text-6xl md:text-7xl mt-2">
              Two Days.
              <br />
              <span className="text-[var(--purple)]">Different Modes.</span>
            </h2>
            <p className="lead mt-4 text-[var(--muted)]">
              Carefully choreographed to balance intense technical talks,
              collaborative hacking, and ample time to build community relationships.
            </p>
          </div>

          {/* Day Filter Pills */}
          <div className="flex items-center gap-2 p-1.5 rounded-xl border border-[var(--ink)] bg-[var(--paper-2)] shadow-[3px_3px_0_var(--ink)]">
            <button
              onClick={() => setSelectedDay('all')}
              className={`font-mono text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-lg transition-all ${
                selectedDay === 'all'
                  ? 'bg-[var(--ink)] text-white'
                  : 'text-[var(--muted)] hover:text-[var(--ink)]'
              }`}
            >
              Full Sequence
            </button>
            <button
              onClick={() => setSelectedDay(1)}
              className={`font-mono text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-lg transition-all ${
                selectedDay === 1
                  ? 'bg-[var(--ink)] text-white'
                  : 'text-[var(--muted)] hover:text-[var(--ink)]'
              }`}
            >
              Day 01 · Conference
            </button>
            <button
              onClick={() => setSelectedDay(2)}
              className={`font-mono text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-lg transition-all ${
                selectedDay === 2
                  ? 'bg-[var(--purple)] text-white'
                  : 'text-[var(--muted)] hover:text-[var(--ink)]'
              }`}
            >
              Day 02 · 8h CTF
            </button>
          </div>
        </div>

        {/* Schedule Spine Matrix */}
        <div className="relative border border-[var(--ink)] rounded-2xl bg-[var(--paper-2)] overflow-hidden shadow-[8px_8px_0_var(--ink)]">
          {/* Header Bar of Table */}
          <div className="hidden sm:grid grid-cols-12 gap-4 px-6 py-3.5 bg-[var(--ink)] text-white font-mono text-[11px] uppercase tracking-wider">
            <span className="col-span-2">Time / Day</span>
            <span className="col-span-2">Track Category</span>
            <span className="col-span-5">Session & Focus</span>
            <span className="col-span-2">Location</span>
            <span className="col-span-1 text-right">Sys Node</span>
          </div>

          {/* Session Rows */}
          <div className="divide-y divide-[var(--line)]">
            {filteredSessions.map((session, i) => {
              const meta = typeStyles[session.type] || typeStyles.talk;
              return (
                <div
                  key={session.id}
                  className="group relative p-5 sm:px-6 sm:py-5 hover:bg-white/80 transition-colors"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 sm:gap-4 items-center">
                    {/* Time & Day */}
                    <div className="sm:col-span-2 flex items-center sm:flex-col sm:items-start gap-2 sm:gap-0.5">
                      <span className="font-mono text-xs font-bold text-[var(--ink)] tracking-wider">
                        {session.time}
                      </span>
                      <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--muted)]">
                        Day 0{session.day} · Planned
                      </span>
                    </div>

                    {/* Category Badge */}
                    <div className="sm:col-span-2">
                      <span
                        className="inline-flex items-center gap-1.5 font-mono text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md"
                        style={{
                          color: meta.color,
                          backgroundColor: meta.bg,
                          border: `1px solid ${meta.border}`,
                        }}
                      >
                        <span
                          className="h-1.5 w-1.5 rounded-full"
                          style={{ backgroundColor: meta.color }}
                        />
                        {meta.label}
                      </span>
                    </div>

                    {/* Session Title & Description */}
                    <div className="sm:col-span-5">
                      <h4 className="font-mono font-bold text-sm sm:text-base text-[var(--ink)] tracking-tight">
                        {session.title}
                      </h4>
                      <p className="text-xs text-[var(--muted)] font-body mt-1 leading-relaxed">
                        {session.desc}
                      </p>
                    </div>

                    {/* Venue */}
                    <div className="sm:col-span-2 flex items-center gap-1.5 text-xs text-[var(--muted)] font-body">
                      <MapPin size={13} className="shrink-0 text-[var(--purple)]" />
                      <span>{session.venue}</span>
                    </div>

                    {/* Circuit Status Code */}
                    <div className="sm:col-span-1 flex items-center justify-between sm:justify-end gap-2 text-right">
                      <span className="font-mono text-[10px] text-[var(--muted)] group-hover:text-[var(--purple)] transition-colors">
                        {session.statusCode}
                      </span>
                      <ArrowUpRight
                        size={14}
                        className="text-[var(--muted)] opacity-0 group-hover:opacity-100 transition-opacity"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Footer note */}
          <div className="p-4 bg-[var(--paper)] border-t border-[var(--line)] flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
            <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--muted)]">
              {`// Final minute-by-minute timetable will be locked as speaker briefs are finalized.`}
            </span>
            <a
              href="/agenda"
              className="inline-flex items-center gap-1 font-mono text-xs font-bold uppercase tracking-wider text-[var(--purple)] hover:underline"
            >
              Detailed Agenda Structure ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
