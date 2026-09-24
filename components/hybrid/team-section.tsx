import Image from 'next/image';
import { User, ArrowUpRight } from 'lucide-react';

function LinkedinIcon({ size = 14, className = '' }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.7 1.7 0 0 0 1.7-1.7 1.7 1.7 0 0 0-1.7-1.7 1.7 1.7 0 0 0-1.7 1.7c0 .94.76 1.7 1.7 1.7m1.4 9.74v-8.37H5.06v8.37h2.8Z" />
    </svg>
  );
}

const teamMembers = [
  {
    name: 'George Fofiu',
    nickname: 'The Mastermind',
    role: 'Lead Organizer & Strategy',
    linkedin: 'https://www.linkedin.com/in/george-fofiu-6ab38a1ab/',
    image: '/team/george.png',
  },
  {
    name: 'Silvana Papa',
    nickname: 'Creative Mind',
    role: 'Brand & Creative Director',
    linkedin: 'https://www.linkedin.com/in/andreea-silvana-papa-00870b237/',
    image: '/team/silvana.jpeg',
  },
  {
    name: 'Porumb Remus',
    nickname: 'The Vanguard',
    role: 'Technical Lead & CTF Architecture',
    linkedin: 'https://www.linkedin.com/in/remus-porumb-5a8511223/',
    image: '/team/remus.jpeg',
  },
  {
    name: 'Bîrla Alexandru',
    nickname: 'The Problem Solver',
    role: 'Operations & Infrastructure',
    linkedin: 'https://www.linkedin.com/in/alexandru-birla-47817033b/',
    image: '/team/birla.jpg',
  },
  {
    name: 'Prof. Claudiu Brândaș',
    nickname: 'Coordinating Professor',
    role: 'Academic Coordinator (UVT)',
    linkedin: 'https://www.linkedin.com/in/claudiu-brandas-92651145/',
    image: '/team/claudiu_brandas.jpg',
  },
  {
    name: 'Lect. Dr. Darius Galiș',
    nickname: 'Coordinating Professor',
    role: 'Academic Coordinator (UVT)',
    linkedin: 'https://www.linkedin.com/in/darius-galis-171868232/',
    image: '/team/galis.jpeg',
  },
];

export function TeamSection() {
  return (
    <section id="team" className="section relative bg-[#040002] text-white overflow-hidden isolate border-t border-[#ff003c]/20">
      {/* Background Matrix & Subtle Blackwall Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_15%,rgba(255,0,60,0.1),transparent_50%)]" />
        <div className="absolute inset-0 opacity-[0.06] blackwall-grid" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs uppercase tracking-[0.24em] text-[#ff003c] block mb-2 font-bold">
            {`// THE PEOPLE BEHIND THE EVENT`}
          </span>
          <h2 className="display text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight">
            Meet The{' '}
            <span className="text-[#ff003c] text-glow-red">
              Crew.
            </span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-white/70 font-body leading-relaxed">
            Builders, researchers, and community organizers bringing students,
            academics, and industry leaders under one roof in Timișoara.
          </p>
        </div>

        {/* 6-Card Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {teamMembers.map((member) => (
            <a
              key={member.name}
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative rounded-2xl border border-[#ff003c]/20 bg-[#0e0206]/85 backdrop-blur-xl p-5 transition-all duration-300 hover:border-[#ff003c]/60 hover:-translate-y-1.5 hover:shadow-[0_12px_36px_rgba(255,0,60,0.2)] flex flex-col justify-between"
            >
              {/* Photo Area */}
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-black/60 border border-white/5">
                {member.image ? (
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                ) : (
                  <div className="flex items-center justify-center h-full">
                    <User size={48} className="text-white/20" />
                  </div>
                )}

                {/* Subtle gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-70 group-hover:opacity-40 transition-opacity" />

                {/* Corner Cyber Brackets */}
                <div className="absolute top-2.5 right-2.5 h-3 w-3 border-t-2 border-r-2 border-[#ff003c] opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-2.5 left-2.5 h-3 w-3 border-b-2 border-l-2 border-[#ff003c] opacity-0 group-hover:opacity-100 transition-opacity" />

                {/* LinkedIn Overlay Button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#ff003c]/20 border border-[#ff003c]/60 backdrop-blur-md font-mono text-xs uppercase tracking-wider text-white font-bold shadow-[0_0_20px_rgba(255,0,60,0.5)]">
                    <LinkedinIcon size={14} />
                    View LinkedIn
                  </span>
                </div>
              </div>

              {/* Text Info */}
              <div className="mt-5">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#ff003c] font-bold">
                    {member.nickname}
                  </span>
                  <ArrowUpRight
                    size={14}
                    className="text-white/40 group-hover:text-[#ff003c] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                  />
                </div>

                <h3 className="font-mono font-bold text-lg text-white mt-1 uppercase tracking-tight group-hover:text-[#ff003c] transition-colors">
                  {member.name}
                </h3>

                <p className="text-xs text-white/60 font-body mt-0.5">
                  {member.role}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
