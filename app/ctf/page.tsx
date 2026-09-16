import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';

export const metadata: Metadata = {
  title: 'CTF Competition',
  description:
    'Teams, challenges and prizes at the ZeroDayTM Capture the Flag competition.',
};
const areas = [
  'Web security',
  'Cryptography',
  'Reverse engineering',
  'Digital forensics',
  'OSINT',
  'Miscellaneous',
];

export default function CtfPage() {
  return (
    <>
      <SiteHeader dark />
      <main>
        <section className="page-hero dark">
          <div className="container page-hero-grid">
            <span className="page-index mono" style={{ color: '#aaa' }}>
              02 / CTF
            </span>
            <h1 className="display page-title" style={{ color: 'var(--lime)' }}>
              Capture
              <br />
              the flag.
            </h1>
            <p className="page-summary">
              A team competition where knowledge becomes action and every solved
              challenge moves the scoreboard.
              <span className="fine" style={{ color: '#999' }}>
                Teams of up to four
                <br />
                Registration opens later
              </span>
            </p>
          </div>
        </section>
        <section className="section paper">
          <div className="container">
            <p className="eyebrow">The format</p>
            <h2 className="display section-title">
              Think together.
              <br />
              <span style={{ color: 'var(--purple)' }}>
                Solve under pressure.
              </span>
            </h2>
            <div className="fact-grid" style={{ marginTop: 60 }}>
              <article className="fact">
                <strong className="display">≤4</strong>
                <div>
                  <h3>Players per team</h3>
                  <p>
                    Build a balanced team or bring the people you already solve
                    with.
                  </p>
                </div>
              </article>
              <article className="fact">
                <strong className="display">Live</strong>
                <div>
                  <h3>Shared scoreboard</h3>
                  <p>
                    Every flag changes the picture while the clock keeps moving.
                  </p>
                </div>
              </article>
              <article className="fact">
                <strong className="display">Prizes</strong>
                <div>
                  <h3>Multiple awards</h3>
                  <p>
                    Top teams, a special all-girls team award and recognition
                    for the best write-up are planned.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>
        <section className="section dark-feature">
          <div className="container dark-feature-grid">
            <div>
              <p className="eyebrow">Challenge areas</p>
              <h2 className="display">
                Many paths.
                <br />
                <span style={{ color: 'var(--purple)' }}>One board.</span>
              </h2>
              <p className="lead">
                The final set will be published with the rules. Expect a mix of
                familiar disciplines and challenges that reward careful
                thinking.
              </p>
            </div>
            <div className="challenge-grid">
              {areas.map((area, index) => (
                <article className="challenge" key={area}>
                  <span className="mono">0{index + 1}</span>
                  <strong>{area}</strong>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section
          className="ctf-feature"
          style={{ background: 'var(--paper-2)', color: 'var(--ink)' }}
        >
          <div className="ctf-copy">
            <p className="eyebrow">Edition #1</p>
            <h2
              className="display"
              style={{
                fontSize: 'clamp(4rem,8vw,8rem)',
                color: 'var(--purple)',
              }}
            >
              27 teams.
              <br />
              60+ players.
            </h2>
            <p className="lead" style={{ color: 'var(--ink)' }}>
              The first competition showed how quickly the room can turn from
              quiet concentration into shared celebration.
            </p>
            <a
              href="https://discord.gg/WTfZ26GAg5"
              target="_blank"
              rel="noreferrer"
              className="button button-dark"
            >
              Join the CTF community <span>↗</span>
            </a>
          </div>
          <div className="ctf-photo photo">
            <Image
              src="/images/SNY04588.JPG"
              alt="CTF teams competing during ZeroDayTM Edition #1"
              fill
              sizes="(max-width: 720px) 100vw, 55vw"
            />
          </div>
        </section>
        <section className="final-cta">
          <div className="container final-cta-inner">
            <h2 className="display">
              Registration
              <br />
              opens later.
            </h2>
            <div className="final-actions">
              <a
                href="https://discord.gg/WTfZ26GAg5"
                target="_blank"
                rel="noreferrer"
                className="button button-lime"
              >
                Follow CTF updates <span>↗</span>
              </a>
              <Link href="/agenda" className="button button-light">
                View event agenda <span>↗</span>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
