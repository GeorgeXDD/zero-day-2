import Image from 'next/image';
import { Play, Video, Trophy, Users, ShieldCheck, Zap } from 'lucide-react';

const stats = [
  { value: '170+', label: 'people present', note: 'Tracked across conference and competition spaces', icon: Users },
  { value: '100+', label: 'at the conference', note: 'Attendees, speakers, researchers and partners', icon: ShieldCheck },
  { value: '60+', label: 'CTF competitors', note: '27 registered teams battling simultaneously', icon: Zap },
  { value: '17', label: 'speakers', note: 'Across 10 technical talks and expert panels', icon: Trophy },
  { value: '8h', label: 'non-stop security', note: 'From morning keynotes to the trophy ceremony', icon: Play },
  { value: '4000€', label: 'awarded in prizes', note: 'In hardware, cash, vouchers and recognition', icon: AwardIcon },
];

function AwardIcon({ size, className }: { size?: number; className?: string }) {
  return (
    <svg width={size || 20} height={size || 20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="8" r="6" />
      <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
    </svg>
  );
}

export function RecapMetricsGallery() {
  return (
    <section className="section paper border-t border-[var(--line)]">
      <div className="container">
        {/* Editorial Numbers Row */}
        <div className="recap-grid mb-20">
          <div className="recap-sticky">
            <span className="eyebrow !text-[#ff2a85] text-[#ff2a85] font-bold text-glow-pink">{`// Edition #1 Validation`}</span>
            <h2 className="display section-title text-4xl sm:text-6xl md:text-7xl mt-2 text-white">
              The first
              <br />
              signal was
              <br />
              <span className="text-[#00f0ff] text-glow-cyan">clear.</span>
            </h2>
            <p className="lead mt-4 text-[#a89fc0]">
              People came to listen, compete, meet, and ask when we would do it again.
              Timișoara proved the community was here; we just needed to give it a stage.
            </p>
            <div className="mt-6">
              <a href="/edition-2026" className="text-link text-sm font-bold uppercase tracking-wider text-white hover:text-[#00f0ff] transition-colors">
                Explore Full 2026 Archive <span>↗</span>
              </a>
            </div>
          </div>

          <div className="metrics">
            {stats.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="metric group hover:border-[#ff2a85]/60 hover:shadow-[0_0_20px_rgba(255,42,133,0.2)] transition-all">
                  <div className="flex items-center justify-between mb-2">
                    <strong className="display text-4xl sm:text-5xl text-white">
                      {item.value}
                    </strong>
                    <Icon size={20} className="text-[#ff2a85]" />
                  </div>
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-white block">
                    {item.label}
                  </span>
                  <small className="text-[11px] text-[#a89fc0] mt-1 block font-body">
                    {item.note}
                  </small>
                </div>
              );
            })}
          </div>
        </div>

        {/* Real Event Photo Gallery */}
        <div className="gallery-grid mb-20">
          <div className="photo h-[340px] sm:h-[440px] rounded-2xl overflow-hidden border border-[#00f0ff]/30">
            <Image
              src="/images/untitled-84.jpg"
              alt="Audience gathered at the first ZeroDayTM conference"
              fill
              className="object-cover"
              sizes="(max-width: 720px) 100vw, 58vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-5">
              <div className="text-white">
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#00f0ff] block font-bold">
                  Timișoara · 23 May 2026
                </span>
                <strong className="font-mono text-sm uppercase">
                  Auditorium Magna / West University of Timișoara
                </strong>
              </div>
            </div>
          </div>

          <div className="gallery-caption p-6 rounded-2xl border border-[#ff2a85]/35 bg-[#120524]/90 backdrop-blur-md flex flex-col justify-center shadow-[0_0_24px_rgba(255,42,133,0.18)]">
            <span className="mono text-[11px] uppercase tracking-wider text-[#00f0ff] block mb-2 font-bold text-glow-cyan">
              {`// Community Verification`}
            </span>
            <strong className="text-xl sm:text-2xl font-body text-white leading-snug">
              &ldquo;A cybersecurity community was already here. It just needed a room.&rdquo;
            </strong>
            <p className="text-xs text-[#a89fc0] font-body mt-3 leading-relaxed">
              From first-year students to seasoned cloud architects, everyone had
              a seat at the same table.
            </p>
          </div>

          <div className="photo h-[340px] sm:h-[440px] rounded-2xl overflow-hidden border border-[#ff2a85]/30">
            <Image
              src="/images/untitled-88.jpg"
              alt="CTF winners receiving awards on stage"
              fill
              className="object-cover"
              sizes="(max-width: 720px) 100vw, 40vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-5">
              <div className="text-white">
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#ff2a85] block font-bold">
                  Closing Podium
                </span>
                <strong className="font-mono text-sm uppercase">
                  CTF Award Presentations & Honors
                </strong>
              </div>
            </div>
          </div>
        </div>

        {/* High-Tech Livestream Video Frame */}
        <div className="rounded-2xl border border-[#ff2a85]/30 bg-[#0c0418] p-6 sm:p-10 shadow-[0_16px_40px_rgba(0,0,0,0.85)]">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
            <div>
              <span className="eyebrow !text-[#00f0ff] text-[#00f0ff] font-bold text-glow-cyan">{`// Complete Livestream On Record`}</span>
              <h3 className="display text-3xl sm:text-5xl mt-1 uppercase text-white">
                The Whole Day.
                <br />
                <span className="text-[#ff2a85] text-glow-pink">Unedited.</span>
              </h3>
            </div>
            <p className="max-w-md text-xs sm:text-sm text-[#a89fc0] font-body leading-relaxed">
              Revisit the talks, panels, and closing competition debriefs from Edition #1
              through the full archived broadcast.
            </p>
          </div>

          <div className="relative aspect-video w-full rounded-xl overflow-hidden border border-[#ff2a85]/30 bg-black shadow-inner">
            <iframe
              src="https://www.youtube-nocookie.com/embed/F-EaR4WAuAQ"
              title="ZeroDayTM Edition #1 Full Livestream"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-full border-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
