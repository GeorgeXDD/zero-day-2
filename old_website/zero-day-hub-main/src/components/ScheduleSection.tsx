import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  eventSessions,
  formatSessionParticipants,
  type SessionType,
} from "@/lib/eventData";

const hexColors: Record<SessionType, string> = {
  keynote: "#eab308", // yellow
  workshop: "#00c2ff", // cyber blue
  talk: "#0ea5e9", // blue
  panel: "#a855f7", // purple
  break: "#eab308", // yellow
  checkin: "#22c55e", // green
};

const getStatusCode = (index: number) =>
  `0x${(index * 7919 + 4096).toString(16).toUpperCase().padStart(4, "0")}`;

const ScheduleSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [offsets, setOffsets] = useState<number[]>([]);
  const [circuitPatternX, setCircuitPatternX] = useState<number>(-900);

  useEffect(() => {
    const updatePositions = () => {
      if (!containerRef.current) return;
      const containerRect = containerRef.current.getBoundingClientRect();
      setCircuitPatternX(containerRect.width / 2 - 1500);
      const anchors = containerRef.current.querySelectorAll(".dna-dot-anchor");
      const newOffsets: number[] = [];
      anchors.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const yPx = rect.top - containerRect.top + rect.height / 2;
        newOffsets.push(yPx);
      });
      setOffsets(newOffsets);
    };

    updatePositions();
    window.addEventListener("resize", updatePositions);
    const timeout = setTimeout(updatePositions, 500);
    return () => {
      window.removeEventListener("resize", updatePositions);
      clearTimeout(timeout);
    };
  }, []);

  const getTraceX = (typeId: string, yMod: number) => {
    const mapping: Record<string, number> = {
      checkin: 0,
      panel: 1,
      workshop: 2,
      talk: 3,
      keynote: 4,
      break: 4,
    };
    const id = mapping[typeId] ?? 0;
    const y = yMod;

    if (id === 0 || id === 5) {
      // Green
      if (y <= 80) return 180;
      if (y <= 100) return 180 - (y - 80);
      if (y <= 200) return 160;
      if (y <= 240) return 160 + (y - 200);
      if (y <= 300) return 200;
      if (y <= 320) return 200 - (y - 300);
      return 180;
    }
    if (id === 1) {
      // Purple
      if (y <= 40) return 220;
      if (y <= 70) return 220 + (y - 40);
      if (y <= 150) return 250;
      if (y <= 190) return 250 - (y - 150);
      if (y <= 290) return 210;
      if (y <= 300) return 210 + (y - 290);
      return 220;
    }
    if (id === 2) {
      // Cyber Blue
      if (y <= 120) return 150;
      if (y <= 150) return 150 - (y - 120);
      if (y <= 190) return 120;
      if (y <= 220) return 120 + (y - 190);
      return 150;
    }
    if (id === 3) {
      // Blue
      if (y <= 100) return 250;
      if (y <= 120) return 250 + (y - 100);
      if (y <= 180) return 270;
      if (y <= 210) return 270 - (y - 180);
      if (y <= 310) return 240;
      if (y <= 320) return 240 + (y - 310);
      return 250;
    }
    if (id === 4) {
      // Yellow
      if (y <= 60) return 120;
      if (y <= 80) return 120 + (y - 60);
      if (y <= 220) return 140;
      if (y <= 250) return 140 - (y - 220);
      if (y <= 330) return 110;
      if (y <= 340) return 110 + (y - 330);
      return 120;
    }
    return 200;
  };

  return (
    <section
      id="schedule"
      className="relative overflow-hidden py-12 md:py-24 grid-background"
    >
      {/* Top fade — blends from Speakers section's dark background */}
      <div className="absolute inset-x-0 top-0 h-64 pointer-events-none z-0 bg-[linear-gradient(to_bottom,hsl(var(--background)),transparent)]" />

      <div className="relative z-10 container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: [0.2, 1, 0.3, 1] }}
          className="mb-16"
        >
          <p className="label-mono mb-4">// CONFERENCE — 23 MAY</p>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">
            EVENT <span className="text-primary text-glow">AGENDA</span>
          </h2>
        </motion.div>

        {/* Circuit Bus layout */}
        <div
          ref={containerRef}
          className="flex flex-col gap-8 md:gap-16 relative"
        >
          {/* SVG Circuit Background (Visible on Desktop) */}
          <div
            className="hidden md:block absolute left-1/2 top-0 bottom-0 w-full max-w-[2000px] -translate-x-1/2 z-0 opacity-50 pointer-events-none overflow-hidden"
            style={{
              maskImage:
                "linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)",
              WebkitMaskImage:
                "linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)",
            }}
          >
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern
                  id="circuit-pattern"
                  x={circuitPatternX}
                  y="0"
                  width="3000"
                  height="400"
                  patternUnits="userSpaceOnUse"
                >
                  <g
                    strokeWidth="2.5"
                    fill="none"
                    strokeOpacity="1.0"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    transform="translate(1300, 0)"
                  >
                    {/* === LEFT OUTRIGGERS === */}
                    <g strokeOpacity="0.4" strokeWidth="1.5">
                      {/* Green (0) */}
                      <path
                        d="M 180 60 h -100 l -40 -40 h -300"
                        stroke="#22c55e"
                      />
                      <circle cx="-160" cy="20" r="4" stroke="#22c55e" />

                      <path
                        d="M 200 280 h -80 l -20 20 h -120 v 50 l -30 30 h -400"
                        stroke="#22c55e"
                      />
                      <rect
                        x="-300"
                        y="375"
                        width="40"
                        height="20"
                        rx="2"
                        fill="#050505"
                        stroke="#22c55e"
                      />
                      <path
                        d="M -295 370 v 5 M -285 370 v 5 M -275 370 v 5 M -265 370 v 5"
                        stroke="#22c55e"
                      />

                      {/* Cyber Blue (2) */}
                      <path
                        d="M 120 200 h -120 l -40 40 v 50 l -30 30 h -300"
                        stroke="#00c2ff"
                      />
                      <rect
                        x="-240"
                        y="310"
                        width="20"
                        height="20"
                        fill="none"
                        stroke="#00c2ff"
                        strokeWidth="1.5"
                        transform="rotate(45, -230, 320)"
                      />
                      <circle cx="-370" cy="320" r="3" fill="#00c2ff" />

                      <path
                        d="M 150 250 h -150 l -30 -30 h -300"
                        stroke="#00c2ff"
                      />
                      <circle
                        cx="-230"
                        cy="220"
                        r="8"
                        stroke="#00c2ff"
                        strokeDasharray="3 3"
                      />

                      {/* Yellow (4) */}
                      <path
                        d="M 120 350 h -100 l -40 -40 h -180 v -30 l -30 -30 h -300"
                        stroke="#eab308"
                      />
                      <circle cx="-250" cy="250" r="3" fill="#eab308" />

                      <path
                        d="M 140 100 h -100 l -30 -30 v -40 l -30 -30 h -400"
                        stroke="#eab308"
                      />
                    </g>

                    {/* === RIGHT OUTRIGGERS === */}
                    <g strokeOpacity="0.4" strokeWidth="1.5">
                      {/* Purple (1) */}
                      <path
                        d="M 250 100 h 100 l 40 -40 h 180 v 50 l 30 30 h 300"
                        stroke="#a855f7"
                      />
                      <circle cx="570" cy="140" r="4" stroke="#a855f7" />

                      <path
                        d="M 220 320 h 130 l 30 30 h 150 v -30 l 30 -30 h 280"
                        stroke="#a855f7"
                      />
                      <rect
                        x="530"
                        y="340"
                        width="20"
                        height="20"
                        fill="none"
                        stroke="#a855f7"
                        transform="rotate(45, 540, 350)"
                      />
                      <circle cx="740" cy="290" r="3" fill="#a855f7" />

                      {/* Blue (3) */}
                      <path
                        d="M 240 220 h 120 l 40 40 v 60 l 30 30 h 400"
                        stroke="#0ea5e9"
                      />
                      <circle cx="600" cy="350" r="3" fill="#0ea5e9" />

                      <path
                        d="M 250 50 h 150 l 40 40 v 40 l 30 30 h 350"
                        stroke="#0ea5e9"
                      />
                      <rect
                        x="500"
                        y="145"
                        width="40"
                        height="30"
                        rx="3"
                        fill="#050505"
                        stroke="#0ea5e9"
                      />
                      <path
                        d="M 505 140 v 5 M 515 140 v 5 M 525 140 v 5 M 535 140 v 5"
                        stroke="#0ea5e9"
                      />

                      {/* Green2 (5) */}
                      <path
                        d="M 290 360 h 110 l 30 -30 h 150 v -40 l 40 -40 h 300"
                        stroke="#22c55e"
                      />
                      <circle
                        cx="580"
                        cy="250"
                        r="8"
                        stroke="#22c55e"
                        strokeDasharray="3 3"
                      />

                      <path d="M 280 80 h 100 l 40 40 h 300" stroke="#22c55e" />
                      <circle cx="620" cy="120" r="3" fill="#22c55e" />
                    </g>

                    {/* Traces mapping to our hex colors */}
                    <path
                      d="M 180 0 v 80 l -20 20 v 100 l 40 40 v 60 l -20 20 v 80"
                      stroke="#22c55e"
                      style={{ filter: "drop-shadow(0 0 6px #22c55e)" }}
                    />
                    <path
                      d="M 220 0 v 40 l 30 30 v 80 l -40 40 v 100 l 10 10 v 100"
                      stroke="#a855f7"
                      style={{ filter: "drop-shadow(0 0 6px #a855f7)" }}
                    />
                    <path
                      d="M 150 0 v 120 l -30 30 v 40 l 30 30 v 180"
                      stroke="#00c2ff"
                      style={{ filter: "drop-shadow(0 0 6px #00c2ff)" }}
                    />
                    <path
                      d="M 250 0 v 100 l 20 20 v 60 l -30 30 v 100 l 10 10 v 80"
                      stroke="#0ea5e9"
                      style={{ filter: "drop-shadow(0 0 6px #0ea5e9)" }}
                    />
                    <path
                      d="M 120 0 v 60 l 20 20 v 140 l -30 30 v 80 l 10 10 v 60"
                      stroke="#eab308"
                      style={{ filter: "drop-shadow(0 0 6px #eab308)" }}
                    />

                    <path
                      d="M 280 0 v 150 l -20 20 v 50 l 30 30 v 120 l -10 10 v 20"
                      stroke="#22c55e"
                      style={{ filter: "drop-shadow(0 0 6px #22c55e)" }}
                    />
                  </g>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#circuit-pattern)" />
            </svg>
          </div>
          {eventSessions.map((session, i) => {
            const isEven = i % 2 === 0;
            const color = hexColors[session.type] || "#37ff78";
            const participants = formatSessionParticipants(session);
            const metadata = participants || session.details;

            // Calculate snapping offset to hit the actual circuit trace
            const yPx = offsets[i] || 0;
            let yMod = yPx % 400;
            if (yMod < 0) yMod += 400;

            // Find exact X of target trace at this container height
            let targetX = 200;
            if (yPx > 0) {
              targetX = getTraceX(session.type, yMod);
            }

            const offsetX = targetX - 200;

            return (
              <div key={session.id} className="relative flex w-full">
                {/* Card wrapper */}
                <div
                  className={`w-full md:w-[45%] ${isEven ? "mr-auto" : "ml-auto"}`}
                >
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -24 : 24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06, duration: 0.4 }}
                    style={{
                      borderColor: `${color}80`,
                      boxShadow: `0 0 15px ${color}20, inset 0 0 20px ${color}10`,
                    }}
                    className="relative z-10 glass-card p-6 group hover:-translate-y-0.5 transition-transform duration-150 border w-full"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <span
                        style={{ color }}
                        className="font-mono text-[10px] uppercase tracking-wider"
                      >
                        [{session.type}]
                      </span>
                      <span className="font-mono text-xs text-muted-foreground">
                        {session.time}
                      </span>
                    </div>
                    <h4 className="font-mono font-bold text-sm uppercase tracking-wide">
                      {session.title}
                    </h4>
                    {metadata && (
                      <p className="mt-1 whitespace-pre-line text-xs text-muted-foreground">
                        {metadata}
                      </p>
                    )}
                  </motion.div>
                </div>

                {/* Central Spine Connector */}
                <div
                  className="dna-dot-anchor hidden md:block absolute z-0 pointer-events-none"
                  style={{
                    top: "50%",
                    width: `calc(max(0px, 5% + ${isEven ? offsetX : -offsetX}px))`,
                    [isEven ? "left" : "right"]: "45%",
                    height: "3px",
                    backgroundColor: color,
                    boxShadow: `0 0 8px ${color}`,
                    transform: "translateY(-50%)",
                  }}
                >
                  {/* Center Node Dot */}
                  <div
                    className="absolute rounded-full"
                    style={{
                      width: "14px",
                      height: "14px",
                      backgroundColor: color,
                      boxShadow: `0 0 10px ${color}, 0 0 20px ${color}`,
                      top: "50%",
                      transform: "translateY(-50%)",
                      [isEven ? "right" : "left"]: "-7px",
                    }}
                  />

                  {/* Floating Circuit Data Text */}
                  <div
                    className="absolute font-mono text-[10px] leading-tight text-white/50 whitespace-nowrap"
                    style={{
                      [isEven ? "left" : "right"]: "12px",
                      bottom: "6px",
                      textAlign: isEven ? "left" : "right",
                    }}
                  >
                    {/* Generate hex codes instead of genetic DNA labels */}
                    {getStatusCode(i)}
                    <br />
                    SYS_OK
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
