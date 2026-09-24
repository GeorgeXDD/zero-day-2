import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const TARGET_DATE = new Date("2026-05-23T09:00:00");

const RegistrationSection = () => {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      const diff = Math.max(0, TARGET_DATE.getTime() - now.getTime());
      setCountdown({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const units = [
    { label: "DAYS", value: countdown.days },
    { label: "HRS", value: countdown.hours },
    { label: "MIN", value: countdown.minutes },
    { label: "SEC", value: countdown.seconds },
  ];

  return (
    <section id="register" className="relative py-24 grid-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: [0.2, 1, 0.3, 1] }}
          >
            <p className="label-mono mb-4">// SECURE YOUR SPOT</p>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-6">
              JOIN <span className="text-primary text-glow">ZERODAYTM</span>
            </h2>

            {/* Countdown */}
            <div className="flex justify-center gap-4 md:gap-6 mb-12">
              {units.map((u) => (
                <div
                  key={u.label}
                  className="glass-card px-4 py-3 md:px-6 md:py-4 text-center min-w-[70px]"
                >
                  <p className="font-mono text-2xl md:text-3xl font-black text-primary">
                    {String(u.value).padStart(2, "0")}
                  </p>
                  <p className="label-mono text-muted-foreground mt-1">
                    {u.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Registration button */}
            <div className="flex justify-center max-w-md mx-auto mb-6">
              <a
                href="https://luma.com/ky5sottz"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block clip-circuit bg-primary text-primary-foreground font-mono text-sm font-bold uppercase tracking-wider px-12 py-4 hover:glow-primary-lg transition-all duration-150 hover:translate-x-[2px] hover:-translate-y-[2px]"
              >
                Register Now
              </a>
            </div>
            <p className="text-xs text-muted-foreground font-mono">
              // Limited seats available! Grab yours now!
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationSection;
