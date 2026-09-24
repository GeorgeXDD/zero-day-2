import { motion } from "framer-motion";
import { Terminal, Clock, Trophy, Flag } from "lucide-react";

const CTFSection = () => (
  <section id="ctf" className="relative py-24">
    <div className="container mx-auto px-4 md:px-8">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, ease: [0.2, 1, 0.3, 1] }}
        className="mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">
          CAPTURE THE{" "}
          <span
            className="text-cyber-purple"
            style={{ textShadow: "0 0 20px hsl(252 100% 68% / 0.5)" }}
          >
            FLAG
          </span>
        </h2>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <p className="label-mono mb-6 !text-cyber-purple md:mt-2">
            // COMPETITION
          </p>
          <div className="terminal-card p-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2.5 h-2.5 rounded-full bg-destructive" />
              <div className="w-2.5 h-2.5 rounded-full bg-warning-amber" />
              <div className="w-2.5 h-2.5 rounded-full bg-primary" />
              <span className="ml-2 text-[10px] text-muted-foreground font-mono">
                zeroday_ctf.sh
              </span>
            </div>
            <div className="space-y-2 text-sm font-mono">
              <p className="text-muted-foreground">
                $ cat competition_info.txt
              </p>
              <p className="text-foreground mt-3">
                An 8-hour Capture The Flag competition challenging participants
                across web security, cryptography, reverse engineering,
                forensics, and many more.
              </p>
              <p className="text-foreground mt-3">
                If you have any questions or need help, join our
                Discord server and we'll be happy to assist you.
              </p>
              <div className="mt-4">
                <a
                  href="https://discord.gg/WTfZ26GAg5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-[#5865F2]/10 border border-[#5865F2]/40 text-[#5865F2] hover:bg-[#5865F2]/20 hover:border-[#5865F2]/60 transition-all font-mono text-xs uppercase tracking-wider group"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="group-hover:scale-110 transition-transform"
                  >
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 11.732 11.732 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.196.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                  </svg>
                  Join Discord
                </a>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: Clock, label: "Duration", value: "8 Hours" },
              { icon: Trophy, label: "Prize Pool", value: "4000€" },
              { icon: Flag, label: "Format", value: "Jeopardy" },
              { icon: Terminal, label: "Categories", value: "5+ Tracks" },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="cyber-border p-4 text-center"
              >
                <item.icon
                  size={20}
                  className="text-cyber-purple mx-auto mb-2"
                  strokeWidth={1.5}
                />
                <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                  {item.label}
                </p>
                <p className="font-mono font-bold text-sm text-foreground mt-1">
                  {item.value}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <a
              href="https://ctf.info.uvt.ro/invite/ckhbsit2kfmk"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full"
            >
              <button className="w-full h-16 bg-cyber-purple/10 border border-cyber-purple/40 relative group overflow-hidden transition-all hover:bg-cyber-purple/20 hover:border-cyber-purple/60 shadow-[0_0_20px_rgba(168,85,247,0.15)] hover:shadow-[0_0_30px_rgba(168,85,247,0.25)]">
                <div className="absolute inset-x-0 bottom-0 h-[2px] bg-cyber-purple scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                <div className="flex items-center justify-center gap-3">
                  <Flag
                    size={20}
                    className="text-cyber-purple mb-1 group-hover:scale-110 transition-transform"
                  />
                  <span className="font-mono font-bold text-lg uppercase tracking-[0.2em] text-foreground">
                    Join the CTF
                  </span>
                </div>
                <div className="absolute top-0 right-0 p-1 opacity-20 group-hover:opacity-100 transition-opacity">
                  <div className="w-2 h-2 border-t border-r border-cyber-purple" />
                </div>
                <div className="absolute bottom-0 left-0 p-1 opacity-20 group-hover:opacity-100 transition-opacity">
                  <div className="w-2 h-2 border-b border-l border-cyber-purple" />
                </div>
              </button>
            </a>
          </motion.div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
        >
          <h3 className="label-mono mb-6 !text-cyber-purple">
            // CTF TIMELINE
          </h3>
          <div className="relative">
            <div className="absolute left-[5px] top-1 bottom-1 w-[1px] bg-cyber-purple/30" />
            <div className="space-y-5">
              {[
                {
                  time: "23 May — 10:00",
                  title: "CTF Opening",
                  desc: "Google opening speech",
                },
                {
                  time: "23 May — 18:00",
                  title: "Competition End",
                  desc: "8-hour countdown begins",
                },
                {
                  time: "23 May — 18:00",
                  title: "Competition Finale & Winners Reveal",
                  desc: "Winners announced & prizes",
                },
                {
                  time: "23 May — 18:00",
                  title: "Networking Session",
                  desc: "Post-event networking",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 mt-2">
                    <div
                      className="h-3 w-3 rounded-full bg-cyber-purple"
                      style={{ boxShadow: "0 0 10px hsl(252 100% 68% / 0.6)" }}
                    />
                  </div>
                  <div className="glass-panel p-4 flex-1">
                    <span className="font-mono text-[10px] text-cyber-purple tracking-wider">
                      {item.time}
                    </span>
                    <h4 className="font-mono font-bold text-sm uppercase tracking-wide mt-1">
                      {item.title}
                    </h4>
                    <p className="text-xs text-muted-foreground mt-1">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default CTFSection;
