'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

const links = [
  ['Home', '/'],
  ['Agenda', '/agenda'],
  ['CTF', '/ctf'],
  ['Edition 2026', '/edition-2026'],
  ['Partners', '/partners'],
  ['Contact', '/contact'],
];

export function SiteHeader({ dark: _dark = true }: { dark?: boolean } = {}) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-3.5 bg-[#07020d]/95 backdrop-blur-xl border-b border-[#ff2a85]/25 shadow-[0_8px_30px_rgba(0,0,0,0.85)]'
          : 'py-5 bg-gradient-to-b from-[#07020d]/95 via-[#07020d]/60 to-transparent'
      }`}
      style={{ color: '#ffffff' }}
    >
      <div className="container flex items-center justify-between">
        {/* Brand Logo */}
        <a href="/" className="flex items-center gap-3 group" aria-label="ZeroDayTM Home">
          <div className="relative h-9 w-10">
            <Image
              src="/logos/zeroday-logo-white.png"
              alt="ZeroDayTM"
              fill
              className="object-contain transition-transform duration-200 group-hover:scale-105 drop-shadow-[0_0_12px_rgba(255,42,133,0.55)]"
              priority
            />
          </div>
          <span className="font-mono text-sm font-bold tracking-widest text-white uppercase group-hover:text-[#ff2a85] transition-colors">
            ZeroDay<span className="text-[#00f0ff] drop-shadow-[0_0_8px_rgba(0,240,255,0.7)]">TM</span>
          </span>
        </a>

        {/* Desktop Nav Links - Bright White Ribbon */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 font-mono text-xs uppercase tracking-[0.16em]">
          {links.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="font-bold text-white hover:text-[#00f0ff] transition-colors duration-150 relative py-1 drop-shadow-sm"
              style={{ color: '#ffffff' }}
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Desktop Quick Actions */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="/ctf"
            className="rounded-lg border border-[#00f0ff]/60 bg-[#00f0ff]/15 px-3.5 py-1.5 font-mono text-[11px] font-bold uppercase tracking-wider text-[#00f0ff] hover:bg-[#00f0ff]/30 hover:shadow-[0_0_18px_rgba(0,240,255,0.5)] transition-all"
          >
            CTF ↗
          </a>

          <a
            href="https://discord.gg/WTfZ26GAg5"
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-[#ff2a85] bg-[#1a0414] px-4 py-1.5 font-mono text-[11px] font-bold uppercase tracking-wider text-[#ff2a85] shadow-[0_0_15px_rgba(255,42,133,0.25)] hover:bg-[#ff2a85] hover:shadow-[0_0_24px_rgba(255,42,133,0.6)] hover:text-white transition-all"
          >
            Community ↗
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-white hover:text-[#ff2a85] p-2"
          aria-label="Toggle Navigation Menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Dropdown Panel */}
      {mobileOpen && (
        <div className="md:hidden mt-3 mx-4 rounded-2xl border border-[#ff2a85]/30 bg-[#0c0418]/98 backdrop-blur-2xl p-6 shadow-2xl space-y-4">
          <div className="flex flex-col space-y-3 font-mono text-xs uppercase tracking-widest">
            {links.map(([label, href]) => (
              <a
                key={href}
                href={href}
                onClick={() => setMobileOpen(false)}
                className="py-2 text-white font-bold hover:text-[#ff2a85] border-b border-white/10"
                style={{ color: '#ffffff' }}
              >
                {label}
              </a>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-2.5">
            <a
              href="/ctf"
              onClick={() => setMobileOpen(false)}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#00f0ff]/60 bg-[#00f0ff]/15 px-4 py-3 font-mono text-xs font-bold uppercase tracking-wider text-[#00f0ff]"
            >
              Enter CTF Competition
            </a>
            <a
              href="https://discord.gg/WTfZ26GAg5"
              target="_blank"
              rel="noreferrer"
              onClick={() => setMobileOpen(false)}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#ff2a85] bg-[#1a0414] px-4 py-3 font-mono text-xs font-bold uppercase tracking-wider text-[#ff2a85] hover:bg-[#ff2a85] hover:text-white"
            >
              Join Discord Community ↗
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
