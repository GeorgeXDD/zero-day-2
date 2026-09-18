import type { Metadata } from 'next';
import Image from 'next/image';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';

export const metadata: Metadata = {
  title: 'About the Event',
  description: 'What ZeroDayTM is and who it brings together.',
};

export default function EventPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="page-hero paper">
          <div className="container page-hero-grid">
            <span className="page-index mono">About / ZeroDayTM</span>
            <h1 className="display page-title">
              Cybersecurity
              <br />
              in the room.
            </h1>
            <p className="page-summary">
              Learning, practice and community for professionals, enthusiasts
              and students.
              <span className="fine">
                Timișoara · Edition #2
                <br />
                Spring 2027
              </span>
            </p>
          </div>
        </section>
        <section className="section paper">
          <div className="container">
            <p className="eyebrow">Three ways in</p>
            <div className="fact-grid" style={{ marginTop: 45 }}>
              <article className="fact">
                <strong className="display">Talk</strong>
                <div>
                  <h3>Conference</h3>
                  <p>
                    Presentations and panels grounded in real work and real
                    decisions.
                  </p>
                </div>
              </article>
              <article className="fact">
                <strong className="display">Try</strong>
                <div>
                  <h3>CTF competition</h3>
                  <p>A team challenge for people who learn best by solving.</p>
                </div>
              </article>
              <article className="fact">
                <strong className="display">Meet</strong>
                <div>
                  <h3>Community</h3>
                  <p>
                    Professionals, students, companies and curious people in one
                    shared space.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>
        <section className="ctf-feature">
          <div className="ctf-photo photo">
            <Image
              src="/images/untitled-31.jpg"
              alt="A speaker presenting at the first ZeroDayTM conference"
              fill
              sizes="(max-width: 720px) 100vw, 55vw"
            />
          </div>
          <div className="ctf-copy">
            <p className="eyebrow">Why Timișoara</p>
            <h2
              className="display"
              style={{ fontSize: 'clamp(4rem,8vw,8rem)', color: 'white' }}
            >
              The west
              <br />
              needed
              <br />
              <span style={{ color: 'var(--green)' }}>a signal.</span>
            </h2>
            <p className="lead">
              Edition #1 proved that the community was already here. Edition #2
              gives it more room, more time and more ways to participate.
            </p>
            <a href="/edition-2026" className="button button-lime">
              See what happened in 2026 <span>↗</span>
            </a>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
