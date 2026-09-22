import type { Metadata } from 'next';
import Image from 'next/image';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';

export const metadata: Metadata = {
  title: 'Edition 2026',
  description:
    'Numbers, photographs and the full livestream from the first ZeroDayTM edition.',
};
const stats = [
  [
    '170+',
    'people present',
    'Across separately tracked conference and CTF participation.',
  ],
  [
    '100+',
    'conference attendees',
    'Including attendees, speakers, guests and partners.',
  ],
  ['60+', 'CTF competitors', 'Around 27 teams took part.'],
  ['17', 'speakers', 'Across 10 talks and panels.'],
  ['8h', 'conference + CTF', 'A full day from morning to closing.'],
];

export default function RecapPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="page-hero paper">
          <div className="container page-hero-grid">
            <span className="page-index mono">03 / Edition #1</span>
            <h1 className="display page-title">
              The day
              <br />
              it started.
            </h1>
            <p className="page-summary">
              On 23 May 2026, the first ZeroDayTM brought the region’s
              cybersecurity community together at ICAM in Timișoara.
              <span className="fine">
                23 May 2026 · ICAM
                <br />
                Timișoara, Romania
              </span>
            </p>
          </div>
        </section>
        <section className="section paper">
          <div className="container recap-grid">
            <div className="recap-sticky">
              <p className="eyebrow">The numbers</p>
              <h2 className="display section-title">
                One full
                <br />
                day of
                <br />
                <span style={{ color: 'var(--purple)' }}>momentum.</span>
              </h2>
            </div>
            <div className="metrics">
              {stats.map(([value, label, note]) => (
                <div className="metric" key={label}>
                  <strong className="display">{value}</strong>
                  <span>{label}</span>
                  <small>{note}</small>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="gallery">
          <div className="container gallery-grid">
            <div className="photo">
              <Image
                src="/images/untitled-81.jpg"
                alt="Audience members at ZeroDayTM Edition #1"
                fill
                sizes="(max-width: 720px) 100vw, 58vw"
              />
            </div>
            <div className="gallery-caption">
              <span className="mono">Talks / Panels / CTF</span>
              <strong>Different experience levels. The same curiosity.</strong>
            </div>
            <div className="photo">
              <Image
                src="/images/untitled-93.jpg"
                alt="Participants and organizers at ZeroDayTM"
                fill
                sizes="(max-width: 720px) 100vw, 40vw"
              />
            </div>
          </div>
        </section>
        <section className="section video-section">
          <div className="container">
            <div className="video-head">
              <div>
                <p className="eyebrow">Livestream archive</p>
                <h2 className="display section-title">
                  Press play.
                  <br />
                  Go back in.
                </h2>
              </div>
              <p>
                The complete event broadcast is available here—talks, panels and
                the context around them.
              </p>
            </div>
            <div className="video-frame">
              <iframe
                src="https://www.youtube-nocookie.com/embed/F-EaR4WAuAQ"
                title="ZeroDayTM Edition #1 full livestream"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </section>
        <section className="section voices paper">
          <div className="container">
            <p className="eyebrow">The response</p>
            <h2 className="display section-title">
              The people asked
              <br />
              for a second edition.
            </h2>
            <div className="voice-grid">
              <article className="voice">
                <p>Attendees asked when the next edition would happen.</p>
                <small>
                  Paraphrased feedback
                  <br />
                  Edition #1
                </small>
              </article>
              <article className="voice">
                <p>People volunteered to help build the next one.</p>
                <small>
                  Community response
                  <br />
                  After the event
                </small>
              </article>
              <article className="voice">
                <p>New speakers reached out to take part in 2027.</p>
                <small>
                  Programme interest
                  <br />
                  After the event
                </small>
              </article>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
