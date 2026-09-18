import type { Metadata } from 'next';
import Image from 'next/image';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';

export const metadata: Metadata = {
  title: 'Partners',
  description:
    'The companies and organizations helping ZeroDayTM keep cybersecurity learning open.',
};
const logos = [
  ['/logos/paloalto.png', 'Palo Alto Networks'],
  ['/logos/opswat.png', 'OPSWAT'],
  ['/logos/brinel.png', 'Brinel IQANTO'],
  ['/logos/valeoit.png', 'Valeo IT'],
  ['/logos/uvt.png', 'West University of Timișoara'],
  ['/logos/cybersecurity-seminars.png', 'Google Cybersecurity Seminars'],
];

export default function PartnersPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="page-hero paper">
          <div className="container page-hero-grid">
            <span className="page-index mono">04 / Partners</span>
            <h1 className="display page-title">
              Keep the doors
              <br />
              <span style={{ color: 'var(--purple)' }}>open.</span>
            </h1>
            <p className="page-summary">
              ZeroDayTM is free to attend. Partners help make the room, the
              programme and the competition possible.
              <span className="fine">
                Edition #2 partnerships
                <br />
                Now in discussion
              </span>
            </p>
          </div>
        </section>
        <section className="section paper">
          <div className="container">
            <p className="eyebrow">What support enables</p>
            <div className="simple-partners" style={{ marginTop: 48 }}>
              <article className="simple-partner">
                <span className="fine">01 / The experience</span>
                <div>
                  <strong>
                    Venue, food, production and participant materials.
                  </strong>
                  <p>
                    The physical details that let everyone focus on learning and
                    meeting people.
                  </p>
                </div>
              </article>
              <article className="simple-partner">
                <span className="fine">02 / The competition</span>
                <div>
                  <strong>
                    CTF infrastructure, challenges and meaningful prizes.
                  </strong>
                  <p>Including main awards and special recognition.</p>
                </div>
              </article>
              <article className="simple-partner">
                <span className="fine">03 / The reach</span>
                <div>
                  <strong>
                    Streaming, communication and access beyond the venue.
                  </strong>
                  <p>Helping the event reach more of the community.</p>
                </div>
              </article>
            </div>
          </div>
        </section>
        <section className="partners-strip">
          <div className="container">
            <div className="partners-heading">
              <p className="eyebrow">Partners who backed Edition #1</p>
              <span className="fine">Thank you for starting with us.</span>
            </div>
            <div className="partner-logos">
              {logos.map(([src, alt]) => (
                <Image key={alt} src={src} alt={alt} width={120} height={52} />
              ))}
            </div>
          </div>
        </section>
        <section className="dark-feature section">
          <div className="container dark-feature-grid">
            <div>
              <p className="eyebrow">Edition #2</p>
              <h2 className="display">
                Bring more
                <br />
                than a logo.
              </h2>
              <p className="lead">
                Support a challenge, a prize, a programme moment or the
                experience around it. We can shape an activation around what
                your company can contribute well.
              </p>
            </div>
            <div
              className="simple-partners"
              style={{
                gridTemplateColumns: '1fr',
                borderColor: 'rgba(255,255,255,.25)',
              }}
            >
              <article
                className="simple-partner"
                style={{ borderColor: 'rgba(255,255,255,.25)' }}
              >
                <span className="fine" style={{ color: '#aaa' }}>
                  Possible involvement
                </span>
                <div>
                  <strong>
                    CTF challenges · prizes · talks · panels · talent connection
                    · streaming · food · merchandise · in-kind support
                  </strong>
                </div>
              </article>
            </div>
          </div>
        </section>
        <section className="final-cta">
          <div className="container final-cta-inner">
            <h2 className="display">
              Build the next
              <br />
              edition with us.
            </h2>
            <a href="/contact" className="button button-lime">
              Start a conversation <span>↗</span>
            </a>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
