import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "../assets/logos/zeroday-logo-simplu-white.png";

const navLinks = [
  { label: "ABOUT", href: "#about" },
  { label: "SPEAKERS", href: "#speakers" },
  { label: "SCHEDULE", href: "#schedule" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 pt-4"
    >
      <div className="mx-auto w-full max-w-fit px-4">
        <div
          className={`flex items-center justify-center rounded-2xl border px-5 sm:px-6 py-3 transition-all duration-300 ${
            scrolled
              ? "border-white/10 bg-black/45 shadow-[0_10px_40px_rgba(0,0,0,0.35)] backdrop-blur-xl"
              : "border-white/8 bg-black/15 backdrop-blur-md"
          }`}
        >
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-mono text-[12px] uppercase tracking-[0.16em] text-white/65 transition-colors duration-200 hover:text-primary"
              >
                {link.label}
              </a>
            ))}

            <a
              href="#sponsors"
              className="font-mono text-[12px] uppercase tracking-[0.16em] text-white/65 transition-colors duration-200 hover:text-primary"
            >
              SPONSORS
            </a>

            <a
              href="#team"
              className="font-mono text-[12px] uppercase tracking-[0.16em] text-white/65 transition-colors duration-200 hover:text-primary"
            >
              TEAM
            </a>

            <a
              href="#ctf"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-xl border border-cyber-purple/55 bg-cyber-purple px-5 py-2.5 font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-white shadow-[0_0_25px_rgba(168,85,247,0.18)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_35px_rgba(168,85,247,0.24)]"
            >
              <span className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.18),transparent)] opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
              <span className="relative">Join CTF</span>
            </a>

            <a
              href="#register"
              className="group relative ml-1 inline-flex items-center justify-center overflow-hidden rounded-xl border border-primary/55 bg-primary px-5 py-2.5 font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-black shadow-[0_0_25px_rgba(93,255,135,0.18)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_35px_rgba(93,255,135,0.24)]"
            >
              <span className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.18),transparent)] opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
              <span className="relative">Join Event</span>
            </a>
          </div>

          <button
            className="md:hidden ml-auto text-white"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-3 rounded-2xl border border-white/10 bg-black/70 px-4 py-4 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col">
              <div className="flex justify-center mb-4 border-b border-white/5 pb-4 md:hidden">
                <img src={logo} alt="ZeroDay Logo" className="h-10 w-auto" />
              </div>
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="py-3 font-mono text-[12px] uppercase tracking-[0.16em] text-white/70 transition-colors hover:text-primary"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#sponsors"
                onClick={() => setMobileOpen(false)}
                className="py-3 font-mono text-[12px] uppercase tracking-[0.16em] text-white/70 transition-colors hover:text-primary"
              >
                SPONSORS
              </a>
              <a
                href="#team"
                onClick={() => setMobileOpen(false)}
                className="py-3 font-mono text-[12px] uppercase tracking-[0.16em] text-white/70 transition-colors hover:text-primary"
              >
                TEAM
              </a>
              <a
                href="#ctf"
                onClick={() => setMobileOpen(false)}
                className="mt-3 inline-flex justify-center rounded-xl border border-cyber-purple/50 bg-cyber-purple px-4 py-3 font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-white"
              >
                Join CTF
              </a>
              <a
                href="#register"
                onClick={() => setMobileOpen(false)}
                className="mt-2 inline-flex justify-center rounded-xl border border-primary/50 bg-primary px-4 py-3 font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-black"
              >
                Join Event
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
