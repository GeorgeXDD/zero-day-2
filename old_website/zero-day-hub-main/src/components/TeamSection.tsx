import { motion } from "framer-motion";
import { User, Linkedin } from "lucide-react";
import george from "../assets/team/george.png";
import remus from "../assets/team/remus.jpeg";
import silvana from "../assets/team/silvana.jpeg";
import galis from "../assets/team/galis.jpeg";
import birla from "../assets/team/birla.jpg";
import brandas from "../assets/speakers/claudiu_brandas.jpg";

const team = [
  {
    name: "George Fofiu",
    nickname: "The Mastermind",
    linkedin: "https://www.linkedin.com/in/george-fofiu-6ab38a1ab/",
    img: george,
  },
  {
    name: "Silvana Papa",
    nickname: "Creative Mind",
    linkedin: "https://www.linkedin.com/in/andreea-silvana-papa-00870b237/",
    img: silvana,
  },
  {
    name: "Porumb Remus",
    nickname: "The Vanguard",
    linkedin: "https://www.linkedin.com/in/remus-porumb-5a8511223/",
    img: remus,
  },
  {
    name: "Bîrla Alexandru",
    nickname: "The Problem Solver",
    linkedin: "https://www.linkedin.com/in/alexandru-birla-47817033b/",
    img: birla,
  },
  {
    name: "Brândaș Claudiu",
    nickname: "Coordinating Professor",
    linkedin: "https://www.linkedin.com/in/claudiu-brandas-92651145/",
    img: brandas,
  },
  {
    name: "Lect. Dr. Galiș Darius",
    nickname: "Coordinating Professor",
    linkedin: "https://www.linkedin.com/in/darius-galis-171868232/",
    img: galis,
  },
];

const TeamSection = () => (
  <section
    id="team"
    className="relative py-16 bg-background grid-background overflow-hidden"
  >
    {/* Atmosphere effects to match other sections */}
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(55,255,120,0.02),transparent_60%)]" />
      <div className="absolute inset-0 opacity-[0.015] [background-image:radial-gradient(rgba(255,255,255,0.75)_0.55px,transparent_0.55px)] [background-size:16px_16px]" />

      {/* Top transition - Soft fade from background color to plain grid texture */}
      <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-background via-background/80 to-transparent z-10" />
    </div>

    <div className="relative z-10 container mx-auto px-4 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12 text-center"
      >
        <p className="label-mono mb-4 text-primary">// OUR CREW</p>
        <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-white">
          MEET THE <span className="text-primary text-glow">TEAM</span>
        </h2>
      </motion.div>

      <div className="flex flex-wrap justify-center gap-4 sm:gap-6 max-w-7xl mx-auto">
        {team.map((member, i) => (
          <motion.a
            key={member.name}
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group relative block w-[calc(50%-0.5rem)] sm:w-[calc(50%-0.75rem)] lg:w-[calc(25%-1.125rem)]"
          >
            <div className="relative aspect-square overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition-all duration-300 group-hover:border-primary/50 group-hover:shadow-[0_0_30px_rgba(55,255,120,0.15)] flex items-center justify-center">
              {member.img ? (
                <img
                  src={member.img}
                  alt={member.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              ) : (
                <User
                  size={80}
                  className="text-white/10 transition-all duration-500 group-hover:text-primary/40 group-hover:scale-110"
                  strokeWidth={1}
                />
              )}

              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

              {/* LinkedIn Icon Overlay */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-20">
                <div className="bg-primary/20 backdrop-blur-md rounded-full p-4 border border-primary/30">
                  <Linkedin className="text-primary" size={32} />
                </div>
              </div>

              {/* Decorative corners */}
              <div className="absolute top-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-3 h-3 border-t-2 border-r-2 border-primary" />
              </div>
              <div className="absolute bottom-0 left-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-3 h-3 border-b-2 border-l-2 border-primary" />
              </div>
            </div>

            <div className="mt-6 text-center">
              <h3 className="font-mono text-lg font-bold text-white uppercase tracking-wider group-hover:text-primary transition-colors">
                {member.name}
              </h3>
              <p className="mt-1 font-mono text-xs uppercase tracking-[0.2em] text-primary/70">
                {member.nickname}
              </p>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  </section>
);

export default TeamSection;
