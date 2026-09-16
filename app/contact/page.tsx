import type { Metadata } from 'next';
import Image from 'next/image';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact the ZeroDayTM team about Edition #2.',
};

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="contact-grid paper">
          <div className="contact-copy">
            <p className="eyebrow">Contact / Edition #2</p>
            <h1 className="display">
              Start the
              <br />
              <span style={{ color: 'var(--purple)' }}>conversation.</span>
            </h1>
            <p className="lead">
              Questions about the event, CTF, speaking, volunteering or
              partnerships are all welcome.
            </p>
            <div className="contact-details">
              <div className="contact-detail">
                <small>Founder & Lead Organizer</small>
                <strong>Fofiu Florin George</strong>
              </div>
              <div className="contact-detail">
                <small>Email</small>
                <a href="mailto:fofiu.george03@gmail.com">
                  fofiu.george03@gmail.com ↗
                </a>
              </div>
              <div className="contact-detail">
                <small>Phone</small>
                <a href="tel:+40772218314">+40 772 218 314 ↗</a>
              </div>
              <div className="contact-detail">
                <small>LinkedIn</small>
                <a
                  href="https://www.linkedin.com/in/george-fofiu-6ab38a1ab/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Connect with George ↗
                </a>
              </div>
            </div>
          </div>
          <div className="contact-portrait photo">
            <Image
              src="/images/george-contact.jpg"
              alt="Fofiu Florin George speaking at ZeroDayTM"
              fill
              priority
              sizes="(max-width: 720px) 100vw, 42vw"
            />
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
