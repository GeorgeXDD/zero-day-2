import grigorePapuse from "@/assets/speakers/grigore_papuse.png";
import raulPantea from "@/assets/speakers/raul_pantea.jpeg";
import fineasSilaghi from "@/assets/speakers/fineas_silaghi.png";
import sorinMaxim from "@/assets/speakers/sorin_maxim.png";
import savuAdrian from "@/assets/speakers/savu_adrian.jpeg";
import adrianPaul from "@/assets/speakers/adrian_paul.jpeg";
import claudiuBoar from "@/assets/speakers/claudiu_boar.jpg";
import beatriceDragotescu from "@/assets/speakers/beatrice_dragotescu.jpeg";
import moderatorImg from "@/assets/moderator.jpg";
import claudiuBrandas from "@/assets/speakers/claudiu_brandas.jpg";
import cosminBonchis from "@/assets/speakers/cosmin_bonchis.jpg";
import cristianDriga from "@/assets/speakers/cristian_driga.jpg";
import alexandruMargineanu from "@/assets/speakers/alexandru_margineanu.jpeg";
import valentinMuresan from "@/assets/speakers/valentin_muresan.jpg";
import emanuelKovacs from "@/assets/speakers/emanuel_kovacs.jpg";
import paulValase from "@/assets/speakers/paul_valase.jpg";
import eliasBota from "@/assets/speakers/elias_bota.jpg";
import octavianStancu from "@/assets/speakers/octavian_stancu.jpeg";
import lucianPatian from "@/assets/speakers/lucian_patian.jpeg";
import viorelVintan from "@/assets/speakers/viorel_vintan.jpg";
import georgeFofiu from "@/assets/team/george.png";

export type EventPersonRole = "speaker" | "moderator";

export type SessionType =
  | "keynote"
  | "workshop"
  | "talk"
  | "panel"
  | "break"
  | "checkin";

export interface EventPerson {
  id: string;
  name: string;
  title: string | string[];
  company?: string | string[];
  image?: string;
  role: EventPersonRole;
}

export interface EventSession {
  id: string;
  time: string;
  title: string;
  type: SessionType;
  speakerIds?: string[];
  moderatorIds?: string[];
  details?: string;
}

export const eventPeople: EventPerson[] = [
  {
    id: "grigore-papuse",
    name: "Grigore Papuse",
    title: "Forensic Analyst",
    company: "DIICOT",
    image: grigorePapuse,
    role: "speaker",
  },
  {
    id: "fineas-silaghi",
    name: "Fineas-Florin Silaghi",
    title: "CEO",
    company: "AISafe Labs",
    image: fineasSilaghi,
    role: "speaker",
  },
  {
    id: "paul-adrian",
    name: "Adrian Paul",
    title: "Cybersecurity Engineer Manager",
    company: "Visma",
    image: adrianPaul,
    role: "speaker",
  },
  {
    id: "raul-pantea",
    name: "Raul Pantea",
    title: "Red Hat Practice Lead",
    company: "IBM",
    image: raulPantea,
    role: "speaker",
  },
  {
    id: "sorin-maxim",
    name: "Sorin Maxim",
    title: "Director General",
    company: "ADR Vest",
    image: sorinMaxim,
    role: "speaker",
  },
  {
    id: "cristian-driga",
    name: "Cristian Driga",
    title: "Senior Cybersecurity Manager",
    company: "DNSC",
    image: cristianDriga,
    role: "speaker",
  },
  {
    id: "cosmin-bonchis",
    name: "Cosmin Bonchis",
    title: "Decan al Facultatii de Informatica",
    company: "UVT",
    image: cosminBonchis,
    role: "speaker",
  },
  {
    id: "savu-adrian",
    name: "Adrian Savu",
    title: ["CEO & Co-Fondator", "Asistent Profesor"],
    company: ["Savnet", "UPT"],
    image: savuAdrian,
    role: "speaker",
  },
  {
    id: "claudiu-boar",
    name: "Claudiu Boar",
    title: "Networking and Security Manager",
    company: "BRINEL | IQANTO - Palo Alto Networks",
    image: claudiuBoar,
    role: "speaker",
  },
  {
    id: "alexandru-margineanu",
    name: "Alexandru Margineanu",
    title: "Security Consultant Specialist",
    company: "NOKIA",
    image: alexandruMargineanu,
    role: "speaker",
  },
  {
    id: "octavian-stancu",
    name: "Octavian Stancu",
    title: "CISO",
    company: "Comptim",
    image: octavianStancu,
    role: "speaker",
  },
  {
    id: "valentin-muresan",
    name: "Valentin Muresan",
    title: "Public Institution Digitalization Specialist",
    company: "Primaria Timisoara",
    image: valentinMuresan,
    role: "speaker",
  },
  {
    id: "beatrice-dragotescu",
    name: "Beatrice Dragotescu",
    title: "Technical Product Manager",
    company: "OPSWAT",
    image: beatriceDragotescu,
    role: "speaker",
  },
  {
    id: "lucian-patian",
    name: "Lucian Patian",
    title: "Cloud Architect",
    company: "Haufe",
    image: lucianPatian,
    role: "speaker",
  },
  {
    id: "viorel-vintan",
    name: "Viorel Vintan",
    title: "Expert DevOps Consultant",
    company: "ValeoIT",
    image: viorelVintan,
    role: "speaker",
  },
  {
    id: "emanuel-kovacs",
    name: "Emanuel Kovacs",
    title: "Penetration Tester",
    company: "Omega Trust",
    image: emanuelKovacs,
    role: "speaker",
  },
  {
    id: "paul-valase",
    name: "Paul Valase",
    title: "Penetration Tester",
    company: "BIT Sentinel",
    image: paulValase,
    role: "speaker",
  },
  {
    id: "elias-bota",
    name: "Elias Bota",
    title: "Junior Penetration Tester",
    company: "BIT Sentinel",
    image: eliasBota,
    role: "speaker",
  },
  {
    id: "mike-dolha",
    name: "Mike Dolha",
    title: "Senior Software Engineer",
    company: "ACI Worldwide",
    image: moderatorImg,
    role: "moderator",
  },
  {
    id: "claudiu-brandas",
    name: "Claudiu Brândaș",
    title:
      "Head of Department of Finance, Information Systems and Business Modeling",
    company: "FEAA, UVT",
    image: claudiuBrandas,
    role: "moderator",
  },
  {
    id: "george-fofiu",
    name: "George Fofiu",
    title:
      "Software Developer & Cybersecurity Engineer",
    company: "ValeoIT",
    image: georgeFofiu,
    role: "moderator",
  },
];

const peopleById = new Map(eventPeople.map((person) => [person.id, person]));

export const speakers = eventPeople.filter(
  (person) => person.role === "speaker",
);

export const moderators = eventPeople.filter(
  (person) => person.role === "moderator",
);

export const speakerRotation = [...speakers, ...moderators];

export const eventSessions: EventSession[] = [
  {
    id: "check-in",
    time: "09:00 - 09:45",
    title: "Participants Check-in (Badge)",
    type: "checkin",
    details: "Coffee, water, and networking.",
  },
  {
    id: "opening-speech",
    time: "09:50 - 10:00",
    title: "Opening Speech",
    type: "keynote",
  },
  {
    id: "education-panel",
    time: "10:00 - 11:00",
    title: "Education and Investment in Cybersecurity",
    type: "panel",
    speakerIds: [
      "cristian-driga",
      "sorin-maxim",
      "cosmin-bonchis",
      "savu-adrian",
    ],
    moderatorIds: ["claudiu-brandas"],
  },
  {
    id: "industry-panel",
    time: "11:00 - 12:00",
    title:
      "Cybersecurity 360: Real-World Challenges Across the Public and Private Sectors",
    type: "panel",
    speakerIds: ["valentin-muresan", "alexandru-margineanu", "octavian-stancu"],
    moderatorIds: ["claudiu-brandas"],
  },
  {
    id: "claudiu-boar-palo-alto",
    time: "12:00 - 12:30",
    title: "After Attack: The Anatomy of a Digital Comeback",
    speakerIds: ["claudiu-boar"],
    type: "talk",
  },
  {
    id: "digital-forensics",
    time: "12:30 - 13:00",
    title: "Digital Forensics",
    type: "talk",
    speakerIds: ["grigore-papuse"],
  },
  {
    id: "lunch-break",
    time: "13:00 - 14:00",
    title: "Lunch & Networking",
    type: "break",
  },
  {
    id: "agentic-ai",
    time: "14:00 - 14:20",
    title: "Please hack this application. MAKE NO MISTAKES.",
    type: "talk",
    speakerIds: ["fineas-silaghi"],
  },
  {
    id: "detection-engineer-insights",
    time: "14:25 - 15:10",
    title: "Detection Engineer Insights",
    type: "talk",
    speakerIds: ["paul-adrian"],
  },
  {
    id: "post-quantum-cryptography",
    time: "15:15 - 15:50",
    title: "Post Quantum Cryptography",
    type: "talk",
    speakerIds: ["raul-pantea"],
  },
  {
    id: "coffee-break",
    time: "15:50 - 16:00",
    title: "Coffee Break",
    type: "break",
  },
  {
    id: "aws-secure-architecture",
    time: "16:00 - 16:30",
    title: "AWS Secure Architecture",
    type: "panel",
    speakerIds: ["lucian-patian", "viorel-vintan"],
    moderatorIds: ["mike-dolha"],
  },
  {
    id: "beyond-malware-analysis",
    time: "16:30 - 17:00",
    title: "Beyond Malware Analysis",
    type: "talk",
    speakerIds: ["beatrice-dragotescu"],
  },
  {
    id: "offensive-security",
    time: "17:00 - 17:45",
    title: "Offensive Security",
    type: "panel",
    speakerIds: ["emanuel-kovacs", "paul-valase", "elias-bota"],
    moderatorIds: ["george-fofiu"],
  },
  {
    id: "google-cybersecurity-seminars",
    time: "17:45 - 18:00",
    title: "Google Cybersecurity Seminars",
    type: "keynote",
  },
  {
    id: "networking",
    time: "18:00",
    title: "CTF Award Ceremony & Networking",
    type: "keynote",
    details: "Vor fi premiati castigatorii de la concursul de CTF.",
  },
];

export const getPersonById = (id: string) => peopleById.get(id);

export const getPeopleByIds = (ids: string[] = []) =>
  ids
    .map((id) => peopleById.get(id))
    .filter((person): person is EventPerson => Boolean(person));

export const formatPersonCompany = (person: EventPerson) => {
  const companies = Array.isArray(person.company)
    ? person.company
    : person.company
      ? [person.company]
      : [];
  const companyStr = companies.join(" & ");
  return companyStr ? `${person.name} (${companyStr})` : person.name;
};

export const formatPersonRoles = (person: EventPerson): string[] => {
  const titles = Array.isArray(person.title) ? person.title : [person.title];
  const companies = Array.isArray(person.company)
    ? person.company
    : person.company
      ? [person.company]
      : [];

  const maxLength = Math.max(titles.length, companies.length);
  const roles: string[] = [];

  if (maxLength === 0) {
    return [];
  }

  for (let i = 0; i < maxLength; i++) {
    const t = titles[i] !== undefined ? titles[i] : titles[0];
    const c = companies[i] !== undefined ? companies[i] : companies[0];

    if (t === "Speaker") {
      roles.push(c ?? t);
    } else {
      roles.push(c ? `${t} - ${c}` : t);
    }
  }

  return roles;
};

export const formatSessionParticipants = (session: EventSession) => {
  const moderatorList = getPeopleByIds(session.moderatorIds).map(
    formatPersonCompany,
  );
  const speakerList = getPeopleByIds(session.speakerIds).map(
    formatPersonCompany,
  );

  if (session.type === "panel") {
    const parts: string[] = [];

    if (speakerList.length > 0) {
      parts.push(`Speakers: ${speakerList.join(", ")}`);
    }

    if (moderatorList.length > 0) {
      parts.push(`Moderator: ${moderatorList.join(", ")}`);
    }

    if (session.details) {
      parts.push(session.details);
    }

    return parts.join("\n");
  }

  const parts: string[] = [];

  if (speakerList.length > 0) {
    parts.push(speakerList.join(", "));
  }

  if (moderatorList.length > 0) {
    parts.push(moderatorList.join(", "));
  }

  if (session.details) {
    parts.push(session.details);
  }

  return parts.length > 0 ? parts.join("\n") : undefined;
};
