import { Search, Brain, Cloud, Shield, Flag, ArrowUpRight } from 'lucide-react';

const tracks = [
  {
    icon: Search,
    title: 'Digital Forensics',
    code: 'TRK_01',
    color: '#ff003c',
    desc: 'Evidence acquisition, chain-of-custody protocols, memory forensics, and deep incident reconstruction techniques.',
  },
  {
    icon: Brain,
    title: 'AI Security & LLMs',
    code: 'TRK_02',
    color: '#ff2a55',
    desc: 'Exploring AI-driven threat detection, agentic security operations, adversarial prompt injection, and model safeguards.',
  },
  {
    icon: Cloud,
    title: 'Cloud & Infrastructure',
    code: 'TRK_03',
    color: '#ff003c',
    desc: 'Securing multi-cloud architectures, Kubernetes and container hardening, IAM zero-trust, and automated DevSecOps.',
  },
  {
    icon: Shield,
    title: 'Modern Threat Detection',
    code: 'TRK_04',
    color: '#ffaa00',
    desc: 'Detection engineering with high-fidelity telemetry, IoCs, MITRE ATT&CK matrix mapping, and rapid correlation.',
  },
  {
    icon: Flag,
    title: 'Capture The Flag (CTF)',
    code: 'TRK_05',
    color: '#ff2a55',
    desc: '8-hour intensive competition across web, crypto, reverse engineering, forensics, and OSINT with 4000€ in prizes.',
  },
];

export function TracksSection() {
  return (
    <section className="section bg-[#040002] text-white relative isolate overflow-hidden border-t border-[#ff003c]/20">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,0,60,0.06),transparent_60%)]" />
        <div className="absolute inset-0 opacity-[0.05] blackwall-grid" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-8">
        {/* Editorial Top Headline */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl text-left">
            <p className="eyebrow !text-[#ff003c] text-[#ff003c] font-mono text-xs uppercase tracking-widest mb-2 font-bold">
              {`// OPERATIONAL CURRICULUM`}
            </p>
            <h2 className="display section-title text-5xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-white mt-2">
              Decode the
              <br />
              <span className="text-[#ff003c] text-glow-red">
                Unknown.
              </span>
            </h2>
            <p className="lead mt-4 text-white/80 font-body text-base sm:text-lg leading-relaxed">
              Real-world cybersecurity. No fluff. From foundational tradecraft
              to frontline defense against evolving threat actors.
            </p>
          </div>

          <div className="max-w-md w-full">
            <div className="p-5 rounded-2xl border border-[#ff003c]/25 bg-[#0e0206]/90 backdrop-blur-xl shadow-2xl">
              <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-[#ff003c] block mb-1.5">
                {`// DUAL-MODE EXECUTION`}
              </span>
              <p className="text-xs text-white/80 font-body leading-relaxed">
                The conference sessions and the 8-hour CTF competition run in
                dedicated spaces with separate schedules so participants can dive
                deep into their preferred track.
              </p>
            </div>
          </div>
        </div>

        {/* 5 Tactical Track Cards - Blackwall Cyber Glass */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5">
          {tracks.map((t) => {
            const Icon = t.icon;
            return (
              <div
                key={t.title}
                className="group relative flex flex-col justify-between p-6 rounded-2xl border border-[#ff003c]/20 bg-[#0d0206]/85 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-[#ff003c]/60 hover:shadow-[0_14px_36px_rgba(255,0,60,0.15)] overflow-hidden"
              >
                {/* Glowing left accent line */}
                <div
                  className="absolute left-0 top-6 bottom-6 w-[2px] transition-all duration-300 group-hover:top-0 group-hover:bottom-0"
                  style={{ backgroundColor: t.color, boxShadow: `0 0 10px ${t.color}` }}
                />

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-white/50">
                      {t.code}
                    </span>
                    <div
                      className="h-9 w-9 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                      style={{
                        backgroundColor: `${t.color}20`,
                        border: `1px solid ${t.color}50`,
                        color: t.color,
                        boxShadow: `0 0 15px ${t.color}30`,
                      }}
                    >
                      <Icon size={18} />
                    </div>
                  </div>

                  <h3 className="font-mono font-bold text-sm sm:text-base uppercase tracking-wide text-white group-hover:text-[#ff003c] transition-colors mb-2.5">
                    {t.title}
                  </h3>

                  <p className="text-xs leading-relaxed text-white/70 font-body">
                    {t.desc}
                  </p>
                </div>

                <div className="mt-6 pt-3.5 border-t border-white/10 flex items-center justify-between text-white/40 group-hover:text-white transition-colors">
                  <span className="font-mono text-[10px] uppercase tracking-wider">
                    In-person / Lab
                  </span>
                  <ArrowUpRight
                    size={14}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
