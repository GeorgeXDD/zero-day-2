import { motion } from "framer-motion";
import { Search, Brain, Cloud, Shield, Flag } from "lucide-react";

const features = [
  {
    icon: Search,
    title: "Digital Forensics",
    desc: "Evidence acquisition, chain-of-custody, and forensic investigation techniques.",
  },
  {
    icon: Brain,
    title: "AI Security",
    desc: "Exploring AI-driven threat detection and agentic security operations.",
  },
  {
    icon: Cloud,
    title: "Cloud Security",
    desc: "Securing cloud infrastructure, AWS architecture, and DevSecOps.",
  },
  {
    icon: Shield,
    title: "Modern Threat Detection",
    desc: "Detection engineering with IoCs, ATT&CK mapping, alerting, and correlation.",
  },
  {
    icon: Flag,
    title: "Capture The Flag",
    desc: "8-hour CTF competition with 4000€ in prizes.",
  },
];

const eventStats = [
  "8H CTF",
  "10+ ELITE SPEAKERS",
  "1 DAY",
  "100+ PARTICIPANTS",
];

const AboutSection = () => (
  <section
    id="about"
    className="relative isolate overflow-hidden bg-[#030504] text-white pt-24 pb-16 md:pt-28 md:pb-24"
  >
    {/* Shared atmosphere */}
    <div className="absolute inset-0 scale-y-[-1] pointer-events-none">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#030504_0%,#030504_42%,#020302_100%)]" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_85%,rgba(55,255,120,0.06),transparent_24%)]" />

      <div className="absolute inset-0 opacity-[0.12] mix-blend-screen">
        <div className="absolute inset-0 bg-[repeating-linear-gradient(90deg,rgba(255,255,255,0.018)_0px,rgba(255,255,255,0.018)_1px,transparent_1px,transparent_7px)]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.03)_0%,transparent_14%,transparent_86%,rgba(255,255,255,0.03)_100%)]" />
      </div>

      <div className="absolute inset-0 opacity-[0.045] [background-image:radial-gradient(rgba(255,255,255,0.75)_0.55px,transparent_0.55px)] [background-size:16px_16px]" />

      {/* old hero-style bottom pillars */}
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

      {/* restored old structural lines */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-white/[0.04]" />
        <div className="absolute left-0 right-0 top-[62%] h-px bg-primary/10" />
        <div className="absolute left-[18%] top-[26%] h-[22rem] w-[22rem] rounded-full border border-primary/10" />
        <div className="absolute right-[18%] top-[24%] h-[22rem] w-[22rem] rounded-full border border-primary/10" />
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,0,0,0.38)_100%)]" />
    </div>

    <div className="relative z-10 container mx-auto px-4 md:px-8">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, ease: [0.2, 1, 0.3, 1] }}
        className="max-w-3xl mb-14 md:mb-16"
      >
        <p className="label-mono mb-4 text-primary/85">// ABOUT THE EVENT</p>

        <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-3">
          DECODE THE <span className="text-primary text-glow">UNKNOWN</span>.
        </h2>

        {/* subtle punch line */}
        <p className="text-sm text-primary/70 font-mono mb-6">
          Real-world cybersecurity. No fluff.
        </p>

        <p className="text-[15px] leading-relaxed text-white/68 font-body mb-4">
          ZeroDayTM brings together students, professionals, and anyone curious
          about cybersecurity for a day of hands-on experience. From practical
          talks to live challenges, everything is built around how things
          actually work in the real world.
        </p>

        <p className="text-[15px] leading-relaxed text-white/68 font-body">
          Learn something new, test your skills, and connect with people who
          think the same way.
        </p>

        <p className="mt-8 text-sm font-mono text-primary/90 bg-primary/5 border-l-2 border-primary py-3 px-4 rounded-r-lg">
          <span className="font-bold">NOTE:</span> CTF and Conference have separate registration forms as they are happening in parallel.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: i * 0.08,
              duration: 0.4,
              ease: [0.2, 1, 0.3, 1],
            }}
            className="relative rounded-[1.4rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-6 backdrop-blur-xl shadow-[0_12px_40px_rgba(0,0,0,0.2)] group hover:-translate-y-1 transition-all duration-200 overflow-hidden"
          >
            {/* accent line to echo old rectangles */}
            <div className="absolute left-0 top-5 bottom-5 w-px bg-primary/70" />

            <f.icon
              className="text-primary mb-4 group-hover:drop-shadow-[0_0_10px_rgba(55,255,120,0.55)] transition-all duration-150"
              size={28}
              strokeWidth={1.5}
            />
            <h3 className="font-mono font-bold text-xs uppercase tracking-wider mb-2 text-white/92">
              {f.title}
            </h3>
            <p className="text-xs text-white/62 leading-relaxed">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
