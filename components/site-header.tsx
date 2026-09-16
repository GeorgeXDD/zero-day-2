import Image from 'next/image';
import Link from 'next/link';

const links = [
  ['Home', '/'],
  ['Agenda', '/agenda'],
  ['CTF', '/ctf'],
  ['Edition 2026', '/edition-2026'],
  ['Partners', '/partners'],
  ['Contact', '/contact'],
];

export function SiteHeader({ dark = false }: { dark?: boolean }) {
  return (
    <header className={`site-header ${dark ? 'on-dark' : ''}`}>
      <div className="container nav">
        <Link href="/" className="logo" aria-label="ZeroDayTM home">
          <Image
            src="/logos/zeroday-logo-white.png"
            alt="ZeroDayTM"
            width={54}
            height={50}
            priority
          />
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map(([label, href]) => (
            <Link key={href} href={href}>
              {label}
            </Link>
          ))}
        </nav>
        <a
          className="header-cta"
          href="https://discord.gg/WTfZ26GAg5"
          target="_blank"
          rel="noreferrer"
        >
          Join the community ↗
        </a>
        <details className="menu">
          <summary>Menu</summary>
          <div className="menu-panel">
            {links.map(([label, href]) => (
              <Link key={href} href={href}>
                {label}
              </Link>
            ))}
          </div>
        </details>
      </div>
    </header>
  );
}
