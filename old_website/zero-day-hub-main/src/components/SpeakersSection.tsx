import { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import {
  formatPersonRoles,
  speakerRotation,
  type EventPerson,
} from "@/lib/eventData";
import { useIsMobile } from "@/hooks/use-mobile";

const CARDS_PER_PAGE = 3;

const chunkPeople = (people: EventPerson[], size: number) => {
  const pages: EventPerson[][] = [];

  for (let index = 0; index < people.length; index += size) {
    pages.push(people.slice(index, index + size));
  }

  return pages;
};

const slideThemes = [
  {
    accent: "text-primary",
    border: "border-primary/35",
    glow: "shadow-[0_0_30px_-8px_rgba(55,255,120,0.45)]",
    chip: "bg-primary/10 text-primary border-primary/30",
    avatar: "border-primary/35 shadow-[0_0_24px_-8px_rgba(55,255,120,0.55)]",
  },
  {
    accent: "text-cyber-blue",
    border: "border-cyber-blue/35",
    glow: "shadow-[0_0_30px_-8px_rgba(0,194,255,0.4)]",
    chip: "bg-cyber-blue/10 text-cyber-blue border-cyber-blue/30",
    avatar: "border-cyber-blue/35 shadow-[0_0_24px_-8px_rgba(0,194,255,0.5)]",
  },
  {
    accent: "text-warning-amber",
    border: "border-warning-amber/35",
    glow: "shadow-[0_0_30px_-8px_rgba(245,158,11,0.45)]",
    chip: "bg-warning-amber/10 text-warning-amber border-warning-amber/30",
    avatar:
      "border-warning-amber/35 shadow-[0_0_24px_-8px_rgba(245,158,11,0.5)]",
  },
];

const PersonCard = ({
  person,
  theme,
  compact = false,
}: {
  person: EventPerson;
  theme: (typeof slideThemes)[number];
  compact?: boolean;
}) => {
  const initials = person.name
    .split(" ")
    .map((chunk) => chunk[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.4, ease: [0.2, 1, 0.3, 1] }}
      className={`relative overflow-hidden border bg-[linear-gradient(180deg,rgba(12,18,15,0.92),rgba(6,10,8,0.88))] backdrop-blur-xl ${compact ? "mx-auto w-full rounded-2xl p-5" : "rounded-[28px] p-6 md:p-7"} ${theme.border} ${theme.glow}`}
    >
      <div className="absolute inset-x-6 top-0 h-px bg-white/10" />
      <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-white/5 blur-3xl" />

      <div className="flex h-full flex-col items-center text-center">
        {person.image ? (
          <div
            className={`overflow-hidden rounded-full border bg-black/30 ${compact ? "mb-4 h-20 w-20" : "mb-5 h-24 w-24 md:h-28 md:w-28"} ${theme.avatar}`}
          >
            <img
              src={person.image}
              alt={person.name}
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        ) : (
          <div
            className={`flex items-center justify-center rounded-full border bg-black/30 font-mono font-bold uppercase ${compact ? "mb-4 h-20 w-20 text-xl" : "mb-5 h-24 w-24 text-2xl md:h-28 md:w-28"} ${theme.accent} ${theme.avatar}`}
          >
            {initials}
          </div>
        )}

        <span
          className={`inline-flex rounded-full border font-mono uppercase tracking-[0.24em] ${compact ? "mb-3 px-2.5 py-1 text-[10px]" : "mb-4 px-3 py-1 text-[11px]"} ${theme.chip}`}
        >
          {person.role}
        </span>

        <h3
          className={`font-mono font-bold uppercase tracking-[0.16em] text-white ${compact ? "text-base" : "text-lg md:text-xl"}`}
        >
          {person.name}
        </h3>

        <div
          className={`font-mono flex flex-col ${compact ? "mt-2 text-xs leading-5" : "mt-3 text-sm leading-6"} ${theme.accent}`}
        >
          {formatPersonRoles(person).map((role, idx) => (
            <p key={idx}>{role}</p>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const SpeakersSection = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const isMobile = useIsMobile();
  const autoplay = useRef(
    Autoplay({
      delay: 10000,
      stopOnInteraction: false,
    }),
  );

  const pages = useMemo(() => chunkPeople(speakerRotation, CARDS_PER_PAGE), []);
  const mobilePages = useMemo(
    () => speakerRotation.map((person) => [person]),
    [],
  );
  const activePages = isMobile ? mobilePages : pages;

  useEffect(() => {
    if (!api) {
      return;
    }

    const updateCurrent = () => {
      setCurrent(api.selectedScrollSnap());
    };

    updateCurrent();
    api.on("select", updateCurrent);

    return () => {
      api.off("select", updateCurrent);
    };
  }, [api]);

  return (
    <section
      id="speakers"
      className="relative isolate overflow-hidden bg-[#030504] py-12 text-white md:py-24"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#030504_0%,#080b09_18%,#050906_46%,hsl(var(--background))_100%)]" />

        <div className="absolute inset-0 opacity-[0.14]">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:128px_128px]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(55,255,120,0.022)_1px,transparent_1px),linear-gradient(90deg,rgba(55,255,120,0.022)_1px,transparent_1px)] [background-size:32px_32px]" />
        </div>

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_74%,rgba(55,255,120,0.06),transparent_30%)]" />

        <div className="absolute inset-0 opacity-[0.10] mix-blend-screen">
          <div className="absolute inset-0 bg-[repeating-linear-gradient(90deg,rgba(255,255,255,0.018)_0px,rgba(255,255,255,0.018)_1px,transparent_1px,transparent_7px)]" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.02)_0%,transparent_14%,transparent_86%,rgba(255,255,255,0.02)_100%)]" />
        </div>

        <div className="absolute inset-0 opacity-[0.035] [background-image:radial-gradient(rgba(255,255,255,0.75)_0.55px,transparent_0.55px)] [background-size:16px_16px]" />

        <div className="absolute inset-0 opacity-[0.13]">
          <div className="absolute left-[34%] top-0 h-full w-[100px] bg-[linear-gradient(180deg,rgba(83,255,136,0.07),rgba(255,255,255,0.01),transparent)] blur-[72px]" />
          <div className="absolute left-1/2 top-0 h-full w-[160px] -translate-x-1/2 bg-[linear-gradient(180deg,rgba(83,255,136,0.09),rgba(255,255,255,0.012),transparent)] blur-[88px]" />
          <div className="absolute right-[30%] top-0 h-full w-[100px] bg-[linear-gradient(180deg,rgba(83,255,136,0.07),rgba(255,255,255,0.01),transparent)] blur-[72px]" />
        </div>

        <div className="absolute inset-x-0 bottom-0 h-[30%]">
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,10,8,0)_0%,rgba(8,15,11,0.34)_28%,rgba(8,18,13,0.64)_58%,rgba(9,21,15,0.88)_100%)]" />
          <div
            className="absolute inset-0 opacity-[0.26] [mask-image:linear-gradient(to_top,black_84%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_top,black_84%,transparent_100%)]"
            style={{
              backgroundImage:
                "linear-gradient(to right, hsl(var(--border) / 0.36) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--border) / 0.36) 1px, transparent 1px)",
              backgroundSize: "4rem 4rem",
            }}
          />
        </div>

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_44%,rgba(0,0,0,0.26)_100%)]" />
      </div>

      <div className="relative z-20 container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: [0.2, 1, 0.3, 1] }}
          className="mb-12 md:mb-16"
        >
          <p className="label-mono mb-4 text-primary/85">// SPEAKERS</p>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-4xl font-black uppercase tracking-tighter md:text-5xl">
                THE <span className="text-primary text-glow">OPERATIVES</span>
              </h2>
              <p className="mt-4 max-w-2xl text-sm text-white/70 md:text-base">
                {isMobile
                  ? "Here you can get a glimpse of the lineup of speakers we have in store for you."
                  : "Here you can get a glimpse of the lineup of speakers we have in store for you."}
              </p>
            </div>

            <div className="font-mono text-xs uppercase tracking-[0.28em] text-white/45">
              Slide {current + 1 < 10 ? `0${current + 1}` : current + 1} /{" "}
              {activePages.length < 10
                ? `0${activePages.length}`
                : activePages.length}
            </div>
          </div>
        </motion.div>

        <div className="relative px-1 md:px-12">
          <Carousel
            key={isMobile ? "speakers-mobile" : "speakers-desktop"}
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[autoplay.current]}
            className="w-full"
          >
            <CarouselContent className="items-stretch">
              {activePages.map((page, pageIndex) => {
                const theme = slideThemes[pageIndex % slideThemes.length];

                return (
                  <CarouselItem
                    key={`speakers-page-${pageIndex}`}
                    className="basis-full"
                  >
                    <div
                      className={
                        isMobile
                          ? "flex w-full justify-center"
                          : "grid gap-5 md:grid-cols-3 md:gap-6"
                      }
                    >
                      {page.map((person) => (
                        <PersonCard
                          key={person.id}
                          person={person}
                          theme={theme}
                          compact={isMobile}
                        />
                      ))}
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>

            <CarouselPrevious className="left-0 top-auto bottom-[-4.75rem] flex h-11 w-11 -translate-y-0 border-primary/40 bg-background/60 text-primary backdrop-blur hover:bg-primary/20 md:-left-12 md:top-1/2 md:bottom-auto md:-translate-y-1/2" />
            <CarouselNext className="right-0 top-auto bottom-[-4.75rem] flex h-11 w-11 -translate-y-0 border-primary/40 bg-background/60 text-primary backdrop-blur hover:bg-primary/20 md:-right-12 md:top-1/2 md:bottom-auto md:-translate-y-1/2" />
          </Carousel>
        </div>

        <div className="mt-14 flex items-center justify-center gap-2">
          {activePages.map((_, index) => (
            <button
              key={`speaker-dot-${index}`}
              type="button"
              aria-label={`Go to speakers slide ${index + 1}`}
              onClick={() => api?.scrollTo(index)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                index === current
                  ? "w-10 bg-primary shadow-[0_0_16px_rgba(55,255,120,0.6)]"
                  : "w-2.5 bg-white/20 hover:bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 z-10 h-24 pointer-events-none bg-[linear-gradient(to_bottom,transparent,hsl(var(--background)))] md:h-64" />
    </section>
  );
};

export default SpeakersSection;
