import type { Metadata } from 'next';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';

export const metadata: Metadata = {
  title: 'Agenda',
  description: 'The planned programme structure for ZeroDayTM Edition #2.',
};
const conference = [
  [
    'Morning',
    'Doors open + welcome',
    'Check-in, coffee, community arrival and the opening of Edition #2.',
  ],
  [
    'Morning',
    'Keynote + talks',
    'Practical perspectives from cybersecurity professionals.',
  ],
  [
    'Midday',
    'Lunch + partner space',
    'A proper break with time to meet the people behind the companies.',
  ],
  [
    'Afternoon',
    'Talks + panels',
    'Real cases, open questions and multiple points of view.',
  ],
  [
    'Closing',
    'Community time',
    'Continue the conversations without rushing out of the room.',
  ],
];
const competition = [
  [
    'Morning',
    'Team check-in',
    'Rules, setup and a final technical check before the clock starts.',
  ],
  [
    'Start',
    'CTF goes live',
    'Challenges unlock and the live scoreboard begins to move.',
  ],
  [
    'Midday',
    'Competition continues',
    'Teams solve across web, crypto, forensics and more.',
  ],
  ['Final push', 'Last flags', 'The most intense part of the competition.'],
  [
    'Closing',
    'Awards + write-ups',
    'Winners, special awards and learning from the solutions.',
  ],
];

function Schedule({ items }: { items: string[][] }) {
  return (
    <div className="schedule">
      {items.map(([time, title, copy], index) => (
        <article className="schedule-item" key={`${time}-${title}`}>
          <time>{time}</time>
          <div>
            <h3>{title}</h3>
            <p>{copy}</p>
          </div>
          <span className="mono">0{index + 1}</span>
        </article>
      ))}
    </div>
  );
}

export default function AgendaPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="page-hero paper">
          <div className="container page-hero-grid">
            <span className="page-index mono">01 / Agenda</span>
            <h1 className="display page-title">
              How the days
              <br />
              take shape.
            </h1>
            <p className="page-summary">
              Conference, competition and enough room between them for useful
              conversations.
              <span className="fine">
                Edition #2 · Spring 2027
                <br />
                Final timetable to be announced
              </span>
            </p>
          </div>
        </section>
        <section className="section paper">
          <div className="container content-grid">
            <aside>
              <p className="eyebrow aside-label">Day 01</p>
              <h2 className="display section-title">
                Conference
                <br />
                day.
              </h2>
              <p className="lead">
                A full day of talks, panels and direct access to people doing
                serious work in cybersecurity.
              </p>
            </aside>
            <div>
              <div className="day-switch">
                <span>Day 01 / Conference</span>
                <span>Planned structure</span>
              </div>
              <Schedule items={conference} />
              <div className="notice">
                <p className="fine">
                  This is the planned flow, not a published timetable. Exact
                  times, session titles and speakers will be added as the
                  programme is confirmed.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="section dark">
          <div className="container content-grid">
            <aside>
              <p className="eyebrow">Day 02</p>
              <h2
                className="display section-title"
                style={{ color: 'var(--lime)' }}
              >
                CTF
                <br />
                day.
              </h2>
              <p className="lead" style={{ color: '#bbb' }}>
                A focused competition day for teams who want to turn
                cybersecurity knowledge into action.
              </p>
            </aside>
            <div>
              <div className="day-switch">
                <span
                  style={{
                    background: 'var(--lime)',
                    color: 'var(--ink)',
                    borderColor: 'var(--lime)',
                  }}
                >
                  Day 02 / Competition
                </span>
                <span style={{ borderColor: 'rgba(255,255,255,.4)' }}>
                  Confirmed format
                </span>
              </div>
              <Schedule items={competition} />
              <div
                className="notice"
                style={{
                  background: 'rgba(185,244,47,.08)',
                  borderColor: 'var(--lime)',
                }}
              >
                <p className="fine" style={{ color: '#bbb' }}>
                  The CTF is confirmed for Edition #2. Duration, challenge list,
                  online participation and registration details are still being
                  finalized.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="section paper">
          <div className="container">
            <p className="eyebrow">Still being explored</p>
            <h2 className="display section-title">
              A possible
              <br />
              <span style={{ color: 'var(--purple)' }}>third layer.</span>
            </h2>
            <div className="fact-grid" style={{ marginTop: 60 }}>
              <article className="fact">
                <strong className="display">Labs</strong>
                <div>
                  <h3>Hands-on sessions</h3>
                  <p>
                    Small, practical learning formats if the right trainers,
                    space and partners come together.
                  </p>
                </div>
              </article>
              <article className="fact">
                <strong className="display">Live</strong>
                <div>
                  <h3>Online stream</h3>
                  <p>
                    Extending the conference beyond the physical room in
                    Timișoara.
                  </p>
                </div>
              </article>
              <article className="fact">
                <strong className="display">+Web</strong>
                <div>
                  <h3>Online CTF</h3>
                  <p>
                    Opening selected competition participation beyond the venue,
                    if the format supports it.
                  </p>
                </div>
              </article>
            </div>
            <div style={{ marginTop: 44 }}>
              <a href="/contact" className="button button-dark">
                Ask about the programme <span>↗</span>
              </a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
