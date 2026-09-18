import type { Metadata } from 'next';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';

export const metadata: Metadata = {
  title: 'Contact us',
  description: 'Contact the ZeroDayTM team.',
};

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="contact-grid contact-generic paper">
          <div className="contact-copy">
            <p className="eyebrow">Contact us</p>
            <h1 className="display">
              Let&apos;s
              <br />
              <span style={{ color: 'var(--purple)' }}>talk.</span>
            </h1>
            <p className="lead">
              Questions about ZeroDayTM, our events, the CTF, partnerships or
              the community are always welcome.
            </p>
            <div className="contact-details">
              <div className="contact-detail">
                <small>Team</small>
                <strong>ZeroDayTM Team</strong>
              </div>
              <div className="contact-detail">
                <small>Email</small>
                <a href="mailto:zerodaytm@gmail.com">
                  zerodaytm@gmail.com ↗
                </a>
              </div>
              <div className="contact-detail">
                <small>Phone</small>
                <a href="tel:+40772218314">0772 218 314 ↗</a>
              </div>
              <div className="contact-detail">
                <small>LinkedIn</small>
                <a
                  href="https://www.linkedin.com/company/zerodaytm/"
                  target="_blank"
                  rel="noreferrer"
                >
                  ZeroDayTM on LinkedIn ↗
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
