import { MessageSquareQuote, HeartHandshake, Sparkles } from 'lucide-react';

export function VoicesSection() {
  return (
    <section className="section bg-transparent text-white border-t border-[#ff2a85]/20 relative isolate overflow-hidden">
      <div className="container relative z-10">
        <div className="max-w-2xl mb-12">
          <p className="eyebrow !text-[#00f0ff] text-[#00f0ff] font-mono text-xs uppercase tracking-widest font-bold text-glow-cyan">
            {`// Community Resonances`}
          </p>
          <h2 className="display section-title text-4xl sm:text-6xl mt-2 text-white">
            More than
            <br />
            <span className="text-[#ff2a85] text-glow-pink">good feedback.</span>
          </h2>
          <p className="lead mt-4 text-[#a89fc0] font-body">
            What happened after the room emptied on 23 May 2026 was the true test.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <article className="p-8 rounded-2xl border border-[#ff2a85]/25 bg-[#100422]/90 flex flex-col justify-between shadow-[0_0_24px_rgba(255,42,133,0.12)] hover:border-[#ff2a85]/60 hover:shadow-[0_0_30px_rgba(255,42,133,0.25)] transition-all">
            <div className="mb-6">
              <MessageSquareQuote size={28} className="text-[#ff2a85] mb-4" />
              <p className="text-base sm:text-lg font-body font-semibold text-white leading-snug">
                &ldquo;People asked when the next edition would happen before the day had even closed.&rdquo;
              </p>
            </div>
            <div className="pt-4 border-t border-white/10">
              <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#ff2a85] block">
                Attendee Feedback
              </span>
              <span className="text-xs text-[#a89fc0] font-body">
                Captured across 2026 post-event surveys
              </span>
            </div>
          </article>

          <article className="p-8 rounded-2xl border border-[#00f0ff]/25 bg-[#0a1428]/90 flex flex-col justify-between shadow-[0_0_24px_rgba(0,240,255,0.12)] hover:border-[#00f0ff]/60 hover:shadow-[0_0_30px_rgba(0,240,255,0.25)] transition-all">
            <div className="mb-6">
              <HeartHandshake size={28} className="text-[#00f0ff] mb-4" />
              <p className="text-base sm:text-lg font-body font-semibold text-white leading-snug">
                &ldquo;New student volunteers and mentors reached out to help build what comes next.&rdquo;
              </p>
            </div>
            <div className="pt-4 border-t border-white/10">
              <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#00f0ff] block">
                Grassroots Organizing
              </span>
              <span className="text-xs text-[#a89fc0] font-body">
                UVT & regional cybersecurity community
              </span>
            </div>
          </article>

          <article className="p-8 rounded-2xl border border-[#9d4edd]/25 bg-[#15072c]/90 flex flex-col justify-between shadow-[0_0_24px_rgba(157,78,221,0.12)] hover:border-[#9d4edd]/60 hover:shadow-[0_0_30px_rgba(157,78,221,0.25)] transition-all">
            <div className="mb-6">
              <Sparkles size={28} className="text-[#9d4edd] mb-4" />
              <p className="text-base sm:text-lg font-body font-semibold text-white leading-snug">
                &ldquo;Industry partners offered to return with bigger challenges, richer prize pools, and more lab equipment.&rdquo;
              </p>
            </div>
            <div className="pt-4 border-t border-white/10">
              <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#9d4edd] block">
                Sponsor Momentum
              </span>
              <span className="text-xs text-[#a89fc0] font-body">
                Palo Alto, OPSWAT, Valeo IT & Google initiatives
              </span>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
