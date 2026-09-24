import { ArrowUpRight } from 'lucide-react';

export function FinalCtaHybrid() {
  return (
    <section className="relative overflow-hidden bg-[#040002] py-24 text-white isolate border-t border-[#ff003c]/25">
      {/* Horizon glow effect from Cyberpunk Blackwall */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#ff003c] to-transparent shadow-[0_0_25px_rgba(255,0,60,0.85)] opacity-95" />

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(255,0,60,0.18),transparent_60%)]" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-8 text-center max-w-4xl">
        <span className="font-mono text-xs uppercase tracking-[0.24em] text-[#ff003c] block mb-3 font-bold">
          {`// EDITION #2 · SPRING 2027`}
        </span>

        <h2 className="display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight leading-[0.92]">
          See You in
          <br />
          <span className="text-[#ff003c] text-glow-red">
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
            className="inline-flex items-center gap-2.5 rounded-xl border border-[#ff003c] bg-[#ff003c] px-7 py-3.5 font-mono text-xs font-bold uppercase tracking-[0.16em] text-white shadow-[0_0_30px_rgba(255,0,60,0.45)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#ff1a4f] hover:shadow-[0_0_42px_rgba(255,0,60,0.7)]"
          >
            Join Discord Community
            <ArrowUpRight size={14} />
          </a>

          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScsqzlr9JUBYCRAN6q7_Vfu7iNi46Nju_RlLBE0az7bOA7FKA/viewform?usp=publish-editor"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2.5 rounded-xl border border-white/25 bg-white/5 px-6 py-3.5 font-mono text-xs font-bold uppercase tracking-[0.16em] text-white hover:border-[#ff003c] hover:bg-[#180207] transition-all duration-200 hover:-translate-y-0.5"
          >
            Join as Volunteer ↗
          </a>

          <a
            href="/contact"
            className="inline-flex items-center gap-2.5 rounded-xl border border-[#ff2a55]/60 bg-[#ff2a55]/10 px-6 py-3.5 font-mono text-xs font-bold uppercase tracking-[0.16em] text-[#ff2a55] hover:bg-[#ff2a55]/20 transition-all duration-200 hover:-translate-y-0.5"
          >
            Stay in Touch ↗
          </a>
        </div>
      </div>
    </section>
  );
}
