import Image from 'next/image';
import Link from 'next/link';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';

const logos = [
  ['/logos/paloalto.png', 'Palo Alto Networks'],
  ['/logos/opswat.png', 'OPSWAT'],
  ['/logos/brinel.png', 'Brinel IQANTO'],
  ['/logos/valeoit.png', 'Valeo IT'],
  ['/logos/uvt.png', 'West University of Timișoara'],
  ['/logos/cybersecurity-seminars.png', 'Google Cybersecurity Seminars'],
];

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="event-hero paper">
          <div className="hero-content">
            <div className="hero-topline">
              <span className="tag">Edition #2</span>
              <span className="hero-date mono">Timișoara · Spring 2027</span>
            </div>
            <h1 className="display hero-title">
              ZeroDayTM<span>Conference + CTF</span>
            </h1>
            <p className="hero-deck">
              Cybersecurity gets better when knowledge leaves the screen and
              enters the room.
            </p>
            <div className="hero-actions">
              <Link className="button button-dark" href="/agenda">
                Explore the agenda <span>↗</span>
              </Link>
              <Link className="button" href="/ctf">
                Enter the CTF <span>↗</span>
              </Link>
            </div>
            <div className="hero-note">
              <p className="fine">
                A free cybersecurity event for professionals, students, builders
                and the deeply curious.
              </p>
              <span className="fine">Date + venue to be announced</span>
            </div>
          </div>
          <div className="hero-photo">
            <Image
              src="/images/untitled-72.jpg"
              alt="A speaker presenting at ZeroDayTM in Timișoara"
              fill
              priority
              sizes="(max-width: 720px) 100vw, 44vw"
            />
            <div className="pixel-bars" aria-hidden="true">
              <i />
              <i />
              <i />
            </div>
            <div className="hero-photo-label mono">
              <span>Edition #1 / 2026</span>
              <span>The room that started it</span>
            </div>
          </div>
        </section>
        <div className="ticker">
          <div className="ticker-track">
            <span>Conference</span>
            <span>{'///'}</span>
            <span>Capture the flag</span>
            <span>{'///'}</span>
            <span>Community</span>
            <span>{'///'}</span>
            <span>Timișoara</span>
            <span>{'///'}</span>
            <span>Spring 2027</span>
            <span>{'///'}</span>
            <span>Conference</span>
            <span>{'///'}</span>
            <span>Capture the flag</span>
            <span>{'///'}</span>
            <span>Community</span>
            <span>{'///'}</span>
            <span>Timișoara</span>
            <span>{'///'}</span>
            <span>Spring 2027</span>
            <span>{'///'}</span>
          </div>
        </div>
        <section className="section paper">
          <div className="container intro-grid">
            <p className="eyebrow">What is ZeroDayTM?</p>
            <h2>A meeting point for the people who learn, build and defend.</h2>
            <div className="intro-copy">
              <p>
                ZeroDayTM brings cybersecurity professionals, enthusiasts and
                students into the same room for practical ideas, honest
                conversations and a CTF that turns knowledge into action.
              </p>
              <Link className="text-link" href="/agenda">
                See how the event unfolds <span>↗</span>
              </Link>
            </div>
          </div>
        </section>
        <section className="section programme-preview">
          <div className="container">
            <div className="programme-head">
              <div>
                <p className="eyebrow">Programme preview</p>
                <h2 className="display section-title">
                  Two days.
                  <br />
                  Different modes.
                </h2>
              </div>
              <p>
                The exact timetable and speaker line-up will be announced as the
                2027 programme is confirmed.
              </p>
            </div>
            <div className="programme-list">
              <div className="programme-row">
                <time>Day 01</time>
                <h3 className="display">Conference</h3>
                <p>
                  Talks, panels, practical case studies and conversations with
                  people doing the work.
                </p>
                <span>Planned</span>
              </div>
              <div className="programme-row">
                <time>Day 02</time>
                <h3 className="display">CTF competition</h3>
                <p>
                  Team-based challenges, a live scoreboard, prizes and learning
                  through practice.
                </p>
                <span>Confirmed format</span>
              </div>
              <div className="programme-row">
                <time>Across both</time>
                <h3 className="display">Community</h3>
                <p>
                  Networking, partner spaces, shared meals and time to meet
                  without rushing.
                </p>
                <span>Built in</span>
              </div>
            </div>
            <div style={{ marginTop: 34 }}>
              <Link href="/agenda" className="button button-light">
                View agenda structure <span>↗</span>
              </Link>
            </div>
          </div>
        </section>
        <section className="ctf-feature">
          <div className="ctf-copy">
            <p className="eyebrow">Capture the flag</p>
            <h2 className="display">CTF</h2>
            <p className="lead">
              Form a team of up to four. Follow the clues. Break the challenge.
              Capture the flag.
            </p>
            <div className="ctf-facts">
              <span>Web</span>
              <span>Crypto</span>
              <span>Forensics</span>
              <span>Reverse engineering</span>
              <span>OSINT</span>
            </div>
            <Link className="button button-lime" href="/ctf">
              Explore the competition <span>↗</span>
            </Link>
          </div>
          <div className="ctf-photo photo">
            <Image
              src="/images/SNY04552.JPG"
              alt="Participants competing in the ZeroDayTM CTF"
              fill
              sizes="(max-width: 720px) 100vw, 55vw"
            />
          </div>
        </section>
        <section className="section paper">
          <div className="container recap-grid">
            <div className="recap-sticky">
              <p className="eyebrow">Edition #1 / 2026</p>
              <h2 className="display section-title">
                The first
                <br />
                signal was
                <br />
                clear.
              </h2>
              <p className="lead">
                People came to listen, compete, meet and ask when we would do it
                again.
              </p>
              <Link className="text-link" href="/edition-2026">
                Explore the full recap <span>↗</span>
              </Link>
            </div>
            <div className="metrics">
              <div className="metric">
                <strong className="display">170+</strong>
                <span>people present</span>
                <small>Conference and CTF records tracked separately</small>
              </div>
              <div className="metric">
                <strong className="display">100+</strong>
                <span>at the conference</span>
              </div>
              <div className="metric">
                <strong className="display">60+</strong>
                <span>CTF competitors</span>
              </div>
              <div className="metric">
                <strong className="display">17</strong>
                <span>speakers</span>
              </div>
              <div className="metric">
                <strong className="display">8h</strong>
                <span>of conference and competition</span>
              </div>
            </div>
          </div>
        </section>
        <section className="gallery">
          <div className="container gallery-grid">
            <div className="photo">
              <Image
                src="/images/untitled-84.jpg"
                alt="The audience at the first ZeroDayTM conference"
                fill
                sizes="(max-width: 720px) 100vw, 58vw"
              />
            </div>
            <div className="gallery-caption">
              <span className="mono">Timișoara / 23 May 2026</span>
              <strong>
                A community was already here. It just needed a room.
              </strong>
            </div>
            <div className="photo">
              <Image
                src="/images/untitled-88.jpg"
                alt="A CTF team receiving an award"
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
                <p className="eyebrow">Watch Edition #1</p>
                <h2 className="display section-title">
                  The whole day.
                  <br />
                  On record.
                </h2>
              </div>
              <p>
                Revisit the talks, panels and atmosphere from the first edition
                through the complete livestream recording.
              </p>
            </div>
            <div className="video-frame">
              <iframe
                src="https://www.youtube-nocookie.com/embed/F-EaR4WAuAQ"
                title="ZeroDayTM Edition #1 livestream"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </section>
        <section className="section voices paper">
          <div className="container">
            <p className="eyebrow">What came back to us</p>
            <h2 className="display section-title">
              More than
              <br />
              good feedback.
            </h2>
            <div className="voice-grid">
              <article className="voice">
                <p>People asked when the next edition would happen.</p>
                <small>
                  Recurring attendee feedback
                  <br />
                  Paraphrased from 2026 conversations
                </small>
              </article>
              <article className="voice">
                <p>New volunteers reached out to help build what comes next.</p>
                <small>
                  Community response
                  <br />
                  After Edition #1
                </small>
              </article>
              <article className="voice">
                <p>Speakers offered to return—and others asked to join.</p>
                <small>
                  Programme interest
                  <br />
                  After Edition #1
                </small>
              </article>
            </div>
          </div>
        </section>
        <section className="partners-strip">
          <div className="container">
            <div className="partners-heading">
              <p className="eyebrow">Edition #1 partners</p>
              <Link href="/partners" className="text-link">
                Partner with Edition #2 <span>↗</span>
              </Link>
            </div>
            <div className="partner-logos">
              {logos.map(([src, alt]) => (
                <Image key={alt} src={src} alt={alt} width={120} height={52} />
              ))}
            </div>
          </div>
        </section>
        <section className="final-cta">
          <div className="container final-cta-inner">
            <h2 className="display">See you in the room.</h2>
            <div className="final-actions">
              <a
                href="https://discord.gg/WTfZ26GAg5"
                target="_blank"
                rel="noreferrer"
                className="button button-lime"
              >
                Join the community <span>↗</span>
              </a>
              <Link href="/contact" className="button button-light">
                Stay in touch <span>↗</span>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
