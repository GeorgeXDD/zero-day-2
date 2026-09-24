import { MessageSquareQuote, HeartHandshake, Sparkles } from 'lucide-react';

export function VoicesSection() {
  return (
    <section className="section bg-[#040002] text-white border-t border-[#ff003c]/20 relative isolate overflow-hidden">
      <div className="container relative z-10">
        <div className="max-w-2xl mb-12">
          <p className="eyebrow !text-[#ff003c] text-[#ff003c] font-mono text-xs uppercase tracking-widest font-bold">
            {`// Community Resonances`}
          </p>
          <h2 className="display section-title text-4xl sm:text-6xl mt-2 text-white">
            More than
            <br />
            <span className="text-[#ff003c] text-glow-red">good feedback.</span>
          </h2>
          <p className="lead mt-4 text-[#c9aeb5] font-body">
            What happened after the room emptied on 23 May 2026 was the true test.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <article className="p-8 rounded-2xl border border-[#ff003c]/25 bg-[#0e0206]/90 flex flex-col justify-between shadow-[0_0_24px_rgba(255,0,60,0.1)] hover:border-[#ff003c]/60 hover:shadow-[0_0_30px_rgba(255,0,60,0.2)] transition-all">
            <div className="mb-6">
              <MessageSquareQuote size={28} className="text-[#ff003c] mb-4" />
              <p className="text-base sm:text-lg font-body font-semibold text-white leading-snug">
                &ldquo;People asked when the next edition would happen before the day had even closed.&rdquo;
              </p>
            </div>
            <div className="pt-4 border-t border-white/10">
              <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#ff003c] block">
                Attendee Feedback
              </span>
              <span className="text-xs text-[#a38890] font-body">
                Captured across 2026 post-event surveys
              </span>
            </div>
          </article>

          <article className="p-8 rounded-2xl border border-[#ff2a55]/25 bg-[#0e0206]/90 flex flex-col justify-between shadow-[0_0_24px_rgba(255,42,85,0.1)] hover:border-[#ff2a55]/60 hover:shadow-[0_0_30px_rgba(255,42,85,0.2)] transition-all">
            <div className="mb-6">
              <HeartHandshake size={28} className="text-[#ff2a55] mb-4" />
              <p className="text-base sm:text-lg font-body font-semibold text-white leading-snug">
                &ldquo;New student volunteers and mentors reached out to help build what comes next.&rdquo;
              </p>
            </div>
            <div className="pt-4 border-t border-white/10">
              <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#ff2a55] block">
                Grassroots Organizing
              </span>
              <span className="text-xs text-[#a38890] font-body">
                UVT & regional cybersecurity community
              </span>
            </div>
          </article>

          <article className="p-8 rounded-2xl border border-[#ff003c]/25 bg-[#0e0206]/90 flex flex-col justify-between shadow-[0_0_24px_rgba(255,0,60,0.1)] hover:border-[#ff003c]/60 hover:shadow-[0_0_30px_rgba(255,0,60,0.2)] transition-all">
            <div className="mb-6">
              <Sparkles size={28} className="text-[#ff003c] mb-4" />
              <p className="text-base sm:text-lg font-body font-semibold text-white leading-snug">
                &ldquo;Industry partners offered to return with bigger challenges, richer prize pools, and more lab equipment.&rdquo;
              </p>
            </div>
            <div className="pt-4 border-t border-white/10">
              <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#ff003c] block">
                Sponsor Momentum
              </span>
              <span className="text-xs text-[#a38890] font-body">
                Palo Alto, OPSWAT, Valeo IT & Google initiatives
              </span>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
