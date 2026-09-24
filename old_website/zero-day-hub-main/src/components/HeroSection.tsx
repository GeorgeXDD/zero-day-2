import { motion } from "framer-motion";
import { ChevronDown, MapPin, Trophy, ArrowRight, Mic2 } from "lucide-react";
import logoImg from "@/assets/logos/zeroday-logo-powered.png";

const HeroSection = () => {
  return (
    <section className="relative isolate min-h-screen overflow-hidden bg-[#030504] text-white">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#07110b_0%,#030504_42%,#020302_100%)]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(55,255,120,0.12),transparent_28%),radial-gradient(circle_at_85%_20%,rgba(55,255,120,0.08),transparent_22%),radial-gradient(circle_at_25%_85%,rgba(55,255,120,0.05),transparent_18%)]" />

        <div className="absolute -top-32 left-[-10%] h-[36rem] w-[22rem] rotate-[18deg] bg-[linear-gradient(180deg,rgba(104,255,151,0.20),rgba(104,255,151,0.04),transparent)] blur-3xl" />
        <div className="absolute -top-24 right-[-5%] h-[30rem] w-[16rem] rotate-[-22deg] bg-[linear-gradient(180deg,rgba(104,255,151,0.14),rgba(104,255,151,0.03),transparent)] blur-3xl" />

        <div className="absolute inset-0 opacity-[0.12] mix-blend-screen pointer-events-none">
          <div className="absolute inset-0 bg-[repeating-linear-gradient(90deg,rgba(255,255,255,0.018)_0px,rgba(255,255,255,0.018)_1px,transparent_1px,transparent_7px)]" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.03)_0%,transparent_14%,transparent_86%,rgba(255,255,255,0.03)_100%)]" />
        </div>

        <div className="absolute inset-0 opacity-[0.14] pointer-events-none">
          <div className="absolute left-[8%] top-0 h-full w-[120px] bg-[linear-gradient(180deg,rgba(83,255,136,0.10),rgba(255,255,255,0.02),transparent)] blur-[70px]" />
          <div className="absolute left-[18%] top-[10%] h-[76%] w-[80px] bg-primary/10 blur-[70px]" />
          <div className="absolute right-[10%] top-0 h-full w-[140px] bg-[linear-gradient(180deg,rgba(83,255,136,0.10),rgba(255,255,255,0.02),transparent)] blur-[80px]" />
        </div>

        <div className="absolute inset-0 opacity-[0.045] [background-image:radial-gradient(rgba(255,255,255,0.75)_0.55px,transparent_0.55px)] [background-size:16px_16px]" />

        {/* Taller ambient bottom pillars */}
        <div className="absolute inset-x-0 bottom-0 h-[42vh] md:h-[46vh] pointer-events-none">
          <div className="absolute left-[-2%] bottom-0 h-[82%] w-[10%] bg-[linear-gradient(180deg,rgba(0,0,0,0),rgba(55,255,120,0.18)_58%,rgba(55,255,120,0.62)_100%)] blur-[18px]" />
          <div className="absolute left-[10%] bottom-0 h-[64%] w-[9%] bg-[linear-gradient(180deg,rgba(0,0,0,0),rgba(55,255,120,0.12)_55%,rgba(55,255,120,0.46)_100%)] blur-[16px]" />
          <div className="absolute left-[24%] bottom-0 h-[48%] w-[8%] bg-[linear-gradient(180deg,rgba(0,0,0,0),rgba(55,255,120,0.10)_55%,rgba(55,255,120,0.38)_100%)] blur-[16px]" />
          <div className="absolute left-[38%] bottom-0 h-[32%] w-[8%] bg-[linear-gradient(180deg,rgba(0,0,0,0),rgba(55,255,120,0.08)_55%,rgba(55,255,120,0.30)_100%)] blur-[14px]" />

          <div className="absolute right-[38%] bottom-0 h-[32%] w-[8%] bg-[linear-gradient(180deg,rgba(0,0,0,0),rgba(55,255,120,0.08)_55%,rgba(55,255,120,0.30)_100%)] blur-[14px]" />
          <div className="absolute right-[24%] bottom-0 h-[48%] w-[8%] bg-[linear-gradient(180deg,rgba(0,0,0,0),rgba(55,255,120,0.10)_55%,rgba(55,255,120,0.38)_100%)] blur-[16px]" />
          <div className="absolute right-[10%] bottom-0 h-[64%] w-[9%] bg-[linear-gradient(180deg,rgba(0,0,0,0),rgba(55,255,120,0.12)_55%,rgba(55,255,120,0.46)_100%)] blur-[16px]" />
          <div className="absolute right-[-2%] bottom-0 h-[82%] w-[10%] bg-[linear-gradient(180deg,rgba(0,0,0,0),rgba(55,255,120,0.18)_58%,rgba(55,255,120,0.62)_100%)] blur-[18px]" />
        </div>

        <div className="absolute left-[-10rem] top-[20%] h-[24rem] w-[24rem] rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute right-[-8rem] bottom-[8%] h-[22rem] w-[22rem] rounded-full bg-primary/10 blur-[120px]" />

        <div className="absolute inset-0 opacity-20">
          <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-white/[0.04]" />
          <div className="absolute left-0 right-0 top-[62%] h-px bg-primary/10" />
          <div className="absolute left-[18%] top-[26%] h-[22rem] w-[22rem] rounded-full border border-primary/10" />
          <div className="absolute right-[18%] top-[24%] h-[22rem] w-[22rem] rounded-full border border-primary/10" />
        </div>

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,0,0,0.38)_100%)]" />

        <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
          {/* Radar Scanline with trail behind it (moving downwards, trail goes upwards) */}
          <div className="absolute left-0 right-0 top-0 h-[25vh] bg-gradient-to-t from-primary/20 via-primary/5 to-transparent to-60% animate-scan-line border-b border-primary/30" />
        </div>
      </div>

      {/* Main content */}
      <div className="relative mx-auto flex min-h-screen w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center py-28 text-center md:py-32">
          {/* Hero stack */}
          <div className="flex flex-col items-center gap-5 md:gap-6">
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                delay: 0.12,
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="-mb-6 md:-mb-8"
            >
              <a
                href="https://virtual-routes.org/initiatives/cybersecurity-seminars/"
                target="_blank"
                rel="noopener noreferrer"
                className="block cursor-pointer transition-transform hover:scale-105"
              >
                <img
                  src={logoImg}
                  alt="ZeroDay"
                  className="mx-auto h-36 sm:h-36 md:h-52 lg:h-60 xl:h-64 w-auto object-contain drop-shadow-[0_0_40px_rgba(93,255,135,0.16)]"
                />
              </a>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.24,
                duration: 0.65,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="max-w-3xl text-pretty text-sm leading-7 text-white/72 sm:text-base md:text-lg md:leading-8"
            >
              One day built around security talks, hands-on insights, and a
              closing{" "}
              <span className="text-white font-medium">
                8-hour CTF competition
              </span>{" "}
              for students, professionals, and cybersecurity enthusiasts in
              Timișoara.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.3,
                duration: 0.65,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="max-w-2xl text-pretty text-xl font-bold text-white/80 md:text-2xl"
            >
              Up to 5 CPE hours by{" "}
              <a
                href="https://www.isaca.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 underline decoration-primary/30 underline-offset-4 transition-colors"
              >
                ISACA
              </a>
            </motion.p>
          </div>

          {/* Bottom info band */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.42,
              duration: 0.75,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative mx-auto mt-12 w-full md:mt-14"
          >
            <div className="relative z-10 h-auto w-full px-2 sm:h-[11rem] sm:px-8 md:px-12">
              {/* Connecting line (Desktop Only) */}
              <div className="hidden sm:block absolute left-8 right-8 top-[4.75rem] mt-[7px] h-[2px] bg-gradient-to-r from-transparent via-white/20 to-transparent md:left-12 md:right-12" />

              <div className="relative mx-auto grid h-full w-full max-w-6xl grid-cols-1 gap-6 sm:gap-0 sm:grid-cols-3">
                {/* Node 1: Speaker Panels */}
                <div className="relative group flex flex-col sm:h-full sm:items-start sm:justify-center">
                  {/* Title */}
                  <div className="hidden sm:block absolute top-0 w-full text-center transition-all duration-300 group-hover:-translate-y-2 group-hover:opacity-0">
                    <h4 className="font-mono font-bold text-white/90 text-xl md:text-2xl tracking-widest uppercase whitespace-nowrap">
                      Speaker Panels
                    </h4>
                  </div>

                  {/* Dot */}
                  <div className="hidden sm:block absolute top-[4.25rem] left-1/2 -translate-x-1/2 mt-[7px] z-10 h-6 w-6 cursor-pointer rounded-full border-[3px] border-white/40 bg-[#030504] transition-all duration-300 group-hover:scale-50 group-hover:opacity-0" />

                  {/* Date */}
                  <div className="hidden sm:block absolute top-[6.75rem] w-full text-center transition-all duration-300 group-hover:translate-y-2 group-hover:opacity-0">
                    <p className="font-mono text-xl md:text-2xl font-bold tracking-widest text-white/50 uppercase whitespace-nowrap">
                      23 MAY
                    </p>
                  </div>

                  {/* Info Card: Static on Mobile, Hover Pop-up on Desktop */}
                  <div
                    className="
                    relative w-[90%] mx-auto z-10 opacity-100 scale-90 sm:scale-95 pointer-events-auto
                    sm:absolute sm:left-1/2 sm:top-[5rem] sm:mt-[7px] sm:z-50 sm:w-[320px] sm:-translate-x-1/2 sm:-translate-y-1/2 sm:opacity-0 sm:pointer-events-none
                    transition-all duration-300 sm:group-hover:pointer-events-auto sm:group-hover:scale-100 sm:group-hover:opacity-100
                  "
                  >
                    <div className="rounded-[1.4rem] border border-white/20 bg-[#0a0f0c]/95 backdrop-blur-xl p-4 sm:p-5 text-left shadow-xl sm:shadow-2xl flex flex-col h-full">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/45">
                            Program Overview
                          </p>
                          <h3 className="mt-2 text-xl sm:text-2xl font-semibold tracking-[-0.04em] text-white leading-none">
                            Speaker Panels
                          </h3>
                        </div>
                        <div className="rounded-full border border-white/30 bg-white/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-white whitespace-nowrap">
                          23 May
                        </div>
                      </div>

                      <div className="mt-4 flex-1">
                        <div className="flex items-start gap-3 text-white/72">
                          <Mic2 className="mt-0.5 h-4 w-4 shrink-0 text-white" />
                          <p className="text-sm leading-6">
                            Talks and speaker sessions on offensive security,
                            defense, cloud architecture, and practical
                            cybersecurity topics.
                          </p>
                        </div>
                      </div>

                      <a
                        href="#schedule"
                        className="mt-5 inline-flex items-center justify-center rounded-[1rem] border border-white/10 bg-white/[0.04] px-5 py-3 font-mono text-xs font-bold uppercase tracking-[0.16em] text-white/92 transition-all duration-200 hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/[0.08]"
                      >
                        View Schedule
                      </a>
                    </div>
                  </div>
                </div>

                {/* Node 2: 24h CTF */}
                <div className="relative group flex flex-col sm:h-full sm:items-start sm:justify-center">
                  <div className="hidden sm:block absolute top-0 w-full text-center transition-all duration-300 group-hover:-translate-y-2 group-hover:opacity-0">
                    <h4 className="font-mono font-bold text-cyber-purple/90 text-xl md:text-2xl tracking-widest uppercase whitespace-nowrap">
                      8h CTF
                    </h4>
                  </div>

                  <div className="hidden sm:block absolute top-[4.25rem] left-1/2 -translate-x-1/2 mt-[7px] z-10 h-6 w-6 cursor-pointer rounded-full border-[3px] border-cyber-purple/40 bg-[#030504] transition-all duration-300 group-hover:scale-50 group-hover:opacity-0" />

                  <div className="hidden sm:block absolute top-[6.75rem] w-full text-center transition-all duration-300 group-hover:translate-y-2 group-hover:opacity-0">
                    <p className="font-mono text-xl md:text-2xl font-bold tracking-widest text-cyber-purple/50 uppercase whitespace-nowrap">
                      23 MAY
                    </p>
                  </div>

                  <div
                    className="
                    relative w-[90%] mx-auto z-10 opacity-100 scale-90 sm:scale-95 pointer-events-auto
                    sm:absolute sm:left-1/2 sm:top-[5rem] sm:mt-[7px] sm:z-50 sm:w-[320px] sm:-translate-x-1/2 sm:-translate-y-1/2 sm:opacity-0 sm:pointer-events-none
                    transition-all duration-300 sm:group-hover:pointer-events-auto sm:group-hover:scale-100 sm:group-hover:opacity-100
                  "
                  >
                    <div className="rounded-[1.4rem] border border-cyber-purple/30 bg-[#0a0f0c]/95 backdrop-blur-xl p-4 sm:p-5 text-left shadow-xl sm:shadow-2xl flex flex-col h-full">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/45">
                            Program Overview
                          </p>
                          <h3 className="mt-2 text-xl sm:text-2xl font-semibold tracking-[-0.04em] text-white leading-none">
                            8h CTF
                          </h3>
                        </div>
                        <div className="rounded-full border border-cyber-purple/30 bg-cyber-purple/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-cyber-purple whitespace-nowrap">
                          23 May
                        </div>
                      </div>

                      <div className="mt-4 flex-1">
                        <div className="flex items-start gap-3 text-white/72">
                          <Trophy className="mt-0.5 h-4 w-4 shrink-0 text-warning-amber" />
                          <p className="text-sm leading-6">
                            A 8-hour Capture The Flag focused on teamwork,
                            problem solving, and real challenges, with a prize
                            pool of 4000€.
                          </p>
                        </div>
                      </div>

                      <a
                        href="#ctf"
                        className="mt-5 inline-flex items-center justify-center rounded-[1rem] border border-cyber-purple/30 bg-cyber-purple/[0.05] px-5 py-3 font-mono text-xs font-bold uppercase tracking-[0.16em] text-cyber-purple transition-all duration-200 hover:-translate-y-0.5 hover:border-cyber-purple/55 hover:bg-cyber-purple/10"
                      >
                        Join CTF
                      </a>
                    </div>
                  </div>
                </div>

                {/* Node 3: Venue */}
                <div className="relative group flex flex-col sm:h-full sm:items-start sm:justify-center">
                  <div className="hidden sm:block absolute top-0 w-full text-center transition-all duration-300 group-hover:-translate-y-2 group-hover:opacity-0">
                    <h4 className="font-mono font-bold text-primary/90 text-xl md:text-2xl tracking-widest uppercase whitespace-nowrap">
                      Venue
                    </h4>
                  </div>

                  <div className="hidden sm:block absolute top-[4.25rem] left-1/2 -translate-x-1/2 mt-[7px] z-10 h-6 w-6 cursor-pointer rounded-full border-[3px] border-primary/40 bg-[#030504] transition-all duration-300 group-hover:scale-50 group-hover:opacity-0" />

                  <div className="hidden sm:block absolute top-[6.75rem] w-full text-center transition-all duration-300 group-hover:translate-y-2 group-hover:opacity-0">
                    <p className="font-mono text-xl md:text-2xl font-bold tracking-widest text-primary/50 uppercase whitespace-nowrap">
                      ICAM TIMISOARA
                    </p>
                  </div>

                  <div
                    className="
                    relative w-[90%] mx-auto z-10 opacity-100 scale-90 sm:scale-95 pointer-events-auto
                    sm:absolute sm:left-1/2 sm:top-[5rem] sm:mt-[7px] sm:z-50 sm:w-[320px] sm:-translate-x-1/2 sm:-translate-y-1/2 sm:opacity-0 sm:pointer-events-none
                    transition-all duration-300 sm:group-hover:pointer-events-auto sm:group-hover:scale-100 sm:group-hover:opacity-100
                  "
                  >
                    <div className="rounded-[1.4rem] border border-primary/30 bg-[#0a0f0c]/95 backdrop-blur-xl p-4 sm:p-5 text-left shadow-xl sm:shadow-2xl flex flex-col h-full">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/45">
                            Venue
                          </p>
                          <h3 className="mt-2 text-xl sm:text-2xl font-semibold tracking-[-0.04em] text-white leading-none">
                            ICAM
                          </h3>
                        </div>
                        <div className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-primary whitespace-nowrap">
                          Timișoara
                        </div>
                      </div>

                      <div className="mt-4 flex-1">
                        <div className="flex items-start gap-3 text-white/72">
                          <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                          <p className="text-sm leading-6">
                            The event takes place at ICAM Timișoara - talks,
                            networking, and competition in one on-site
                            experience.
                          </p>
                        </div>
                      </div>

                      <a
                        href="#register"
                        className="group mt-5 inline-flex items-center justify-center gap-2 rounded-[1rem] border border-primary/60 bg-primary px-5 py-3 font-mono text-xs font-bold uppercase tracking-[0.16em] text-black shadow-[0_0_26px_rgba(93,255,135,0.18)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_34px_rgba(93,255,135,0.24)]"
                      >
                        Register for Talks
                        <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-5 left-1/2 -translate-x-1/2 text-white/40"
      >
        <ChevronDown size={24} />
      </motion.div>
    </section>
  );
};

export default HeroSection;
