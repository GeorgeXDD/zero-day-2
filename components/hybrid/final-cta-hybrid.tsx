import { ArrowUpRight } from 'lucide-react';

export function FinalCtaHybrid() {
  return (
    <section className="relative overflow-hidden bg-transparent py-24 text-white isolate border-t border-[#ff2a85]/25">
      {/* Horizon glow effect from Vice City synthwave horizon */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#ff2a85] via-[#00f0ff] to-transparent shadow-[0_0_30px_rgba(255,42,133,0.85)] opacity-95" />

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(255,42,133,0.2),transparent_60%)]" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-8 text-center max-w-4xl">
        <span className="font-mono text-xs uppercase tracking-[0.24em] text-[#00f0ff] block mb-3 font-bold text-glow-cyan">
          {`// EDITION #2 · SPRING 2027`}
        </span>

        <h2 className="display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight leading-[0.92]">
          See You in
          <br />
          <span className="text-[#ff2a85] text-glow-pink">
            The Room.
          </span>
        </h2>

        <p className="mt-6 text-sm sm:text-base md:text-lg text-white/70 font-body max-w-2xl mx-auto leading-relaxed">
          Whether you want to learn from frontline defenders, compete in the 8-hour CTF,
          volunteer to run the floor, or partner with us — there is a seat for you in Timișoara.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://discord.gg/WTfZ26GAg5"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2.5 rounded-xl border border-[#ff2a85] bg-[#ff2a85] px-7 py-3.5 font-mono text-xs font-bold uppercase tracking-[0.16em] text-white shadow-[0_0_30px_rgba(255,42,133,0.55)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#ff007f] hover:shadow-[0_0_42px_rgba(255,42,133,0.8)]"
          >
            Join Discord Community
            <ArrowUpRight size={14} />
          </a>

          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScsqzlr9JUBYCRAN6q7_Vfu7iNi46Nju_RlLBE0az7bOA7FKA/viewform?usp=publish-editor"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2.5 rounded-xl border border-white/25 bg-white/5 px-6 py-3.5 font-mono text-xs font-bold uppercase tracking-[0.16em] text-white hover:border-[#00f0ff] hover:bg-[#00f0ff]/10 hover:text-[#00f0ff] transition-all duration-200 hover:-translate-y-0.5"
          >
            Join as Volunteer ↗
          </a>

          <a
            href="/contact"
            className="inline-flex items-center gap-2.5 rounded-xl border border-[#00f0ff]/60 bg-[#00f0ff]/10 px-6 py-3.5 font-mono text-xs font-bold uppercase tracking-[0.16em] text-[#00f0ff] hover:bg-[#00f0ff]/20 transition-all duration-200 hover:-translate-y-0.5"
          >
            Stay in Touch ↗
          </a>
        </div>
      </div>
    </section>
  );
}
