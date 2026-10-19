import { createFileRoute } from "@tanstack/react-router";

import asteroidImage from "@/assets/asteroid.jpg";
import csr2Image from "@/assets/csr2.jpg";
import ghostRiderImage from "@/assets/ghost-rider.jpg";
import krayonikArImage from "@/assets/krayonik-ar.jpg";
import iterationToolImage from "@/assets/iteration-tool.jpg";
import laserImage from "@/assets/laser.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Rajkumar Manikindi — Senior Gameplay Programmer" },
      {
        name: "description",
        content:
          "Portfolio of Rajkumar Manikindi: senior gameplay programmer at Zynga with 12+ years shipping mobile games, gameplay systems and Unity tooling.",
      },
      {
        property: "og:title",
        content: "Rajkumar Manikindi — Senior Gameplay Programmer",
      },
      {
        property: "og:description",
        content:
          "12+ years shipping mobile games, gameplay systems and Unity tooling — CSR2, Ghost Rider, AR education apps and more.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

type Project = {
  title: string;
  badge: string;
  badgeVariant: "solid" | "text";
  description: string;
  tags: string;
  image: string;
};

/* To add a new shipped title or tool, append an entry here. */
const projects: Project[] = [
  {
    title: "CSR2",
    badge: "LIVE",
    badgeVariant: "solid",
    description:
      "Drag-racing simulator · Senior Gameplay Programmer at Zynga since 2018.",
    tags: "Unity · iOS · Android",
    image: csr2Image,
  },
  {
    title: "Ghost Rider",
    badge: "5M+",
    badgeVariant: "text",
    description: "Arcade motorcycle action · Integer Production · 4-star rating.",
    tags: "Android · Gameplay",
    image: ghostRiderImage,
  },
  {
    title: "Krayonik AR",
    badge: "AR/VR",
    badgeVariant: "text",
    description:
      "Augmented-reality education apps · Led gameplay development and tooling.",
    tags: "ARKit · Unity",
    image: krayonikArImage,
  },
  {
    title: "Iter. Tool",
    badge: "-50%",
    badgeVariant: "text",
    description: "Unity scripting tool · halved design iteration time across teams.",
    tags: "Tool dev · C#",
    image: iterationToolImage,
  },
];

type ItchGame = {
  title: string;
  url: string;
  badge: string;
  description: string;
  tags: string;
  image: string;
};

/* To add a new itch.io web game, append an entry here. */
const itchGames: ItchGame[] = [
  {
    title: "Asteroid",
    url: "https://rajkutitgmailcom.itch.io/asteroid",
    badge: "HTML5",
    description: "Made with Unity · runs in the browser.",
    tags: "Unity · HTML5",
    image: asteroidImage,
  },
  {
    title: "Laser",
    url: "https://rajkutitgmailcom.itch.io/laser",
    badge: "HTML5",
    description: "Made with Unity · runs in the browser.",
    tags: "Unity · HTML5",
    image: laserImage,
  },
  {
    title: "Kitti Journey",
    url: "https://rajkutitgmailcom.itch.io/kitti-journey-ggj-2025",
    badge: "GGJ25",
    description:
      "A cat chasing floating bubbles · Global Game Jam 2025 entry.",
    tags: "Puzzle · Unity · HTML5",
    image:
      "https://img.itch.zone/aW1nLzE5NTMwMTgwLnBuZw==/315x250%23c/2gv6I9.png",
  },
  {
    title: "ToonBlast Test",
    url: "https://rajkutitgmailcom.itch.io/toonblast-test",
    badge: "PROTO",
    description: "First Unity project · playable puzzle prototype.",
    tags: "Puzzle · Unity · HTML5",
    image:
      "https://img.itch.zone/aW1nLzE5MzIzNTkwLnBuZw==/315x250%23c/m6j%2Bb0.png",
  },
];

const stats = [
  { value: "12+", label: "Years shipped", highlight: true },
  { value: "5M+", label: "Downloads", highlight: false },
  { value: "-50%", label: "Iter. time", highlight: false },
  { value: "4★", label: "Ghost Rider", highlight: false },
];

const timeline = [
  {
    stage: "STAGE 4",
    status: "NOW",
    period: "2018 — NOW",
    org: "Zynga · CSR2",
    detail:
      "Senior Gameplay Programmer. Ships live drag-racing to millions, and built a Unity scripting tool that cut design iteration time in half.",
    current: true,
  },
  {
    stage: "STAGE 3",
    status: "CLEARED",
    period: "2016 — 2018",
    org: "Krayonik · AR Education",
    detail:
      "Led AR development for an education app so students could interact with 3D models.",
    current: false,
  },
  {
    stage: "STAGE 2",
    status: "CLEARED",
    period: "2014 — 2016",
    org: "Integer Production",
    detail:
      "Shipped Ghost Rider (5M+ downloads, 4-star), High Speed Racer, Stick Man Sniper, and American Sniper.",
    current: false,
  },
  {
    stage: "STAGE 1",
    status: "CLEARED",
    period: "2013 — 2014",
    org: "Constraint Global Solutions",
    detail: "Independently shipped Shark Strike, an iOS title on the App Store.",
    current: false,
  },
];

const education = [
  {
    period: "2008 — 2012",
    org: "B.Tech · St. Johns College of Engineering and Technology",
    detail: "Kurnool",
  },
  {
    period: "2012 — 2013",
    org: "Postgraduate Diploma · ICAT",
    detail: "Bengaluru",
  },
];

const skills = [
  { label: "Engine", value: "Unity 3D · AR/VR" },
  { label: "Craft", value: "Gameplay scripting · Unity tools" },
  { label: "Platform", value: "Android · iOS" },
];

function Index() {
  return (
    <div className="min-h-screen bg-void text-bone font-body">
      <div className="scanlines fixed inset-0 pointer-events-none opacity-[0.035]" />
      <div className="relative">
        <Header />
        <Hero />
        <Work />
        <WebGames />
        <RuntimeLog />
        <Footer />
      </div>
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-line bg-void/90 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-5 min-h-12 py-2 flex flex-wrap items-center justify-between gap-x-3 gap-y-2 font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.14em] text-dim">
        <span className="text-hazard shrink-0">1P · RJM</span>
        <nav className="flex w-full md:w-auto gap-1 sm:gap-2">
          <a
            className="border border-line px-1.5 sm:px-2 py-1 whitespace-nowrap hover:border-hazard hover:text-hazard transition-colors"
            href="#work"
          >
            01 Work
          </a>
          <a
            className="border border-line px-1.5 sm:px-2 py-1 whitespace-nowrap hover:border-hazard hover:text-hazard transition-colors"
            href="#games"
          >
            02 Games
          </a>
          <a
            className="border border-line px-1.5 sm:px-2 py-1 whitespace-nowrap hover:border-hazard hover:text-hazard transition-colors"
            href="#log"
          >
            03 Log
          </a>
          <a
            className="border border-line px-1.5 sm:px-2 py-1 whitespace-nowrap hover:border-hazard hover:text-hazard transition-colors"
            href="#contact"
          >
            04 Contact
          </a>
        </nav>
        <span className="hidden md:inline text-hazard shrink-0">Credits 01</span>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-5 pt-14 pb-10">
      <p
        className="blink-cursor font-mono text-[11px] uppercase tracking-[0.3em] text-hazard"
        style={{ animationDelay: "0ms" }}
      >
        Insert coin
      </p>
      <h1
        className="rise font-display text-[clamp(3.5rem,11vw,9rem)] leading-[0.86] uppercase tracking-tight text-balance mt-3"
        style={{ animationDelay: "80ms" }}
      >
        Rajkumar
        <br />
        Manikindi
      </h1>
      <div
        className="mt-4 h-1 bg-hazard w-full max-w-2xl"
        style={{
          animation: "sweep .8s cubic-bezier(.32,.72,0,1) both",
          animationDelay: "260ms",
        }}
      />
      <div
        className="rise mt-6 flex flex-wrap items-center gap-3 font-mono text-xs uppercase tracking-[0.15em]"
        style={{ animationDelay: "340ms" }}
      >
        <span className="bg-hazard text-void px-2 py-1 font-bold">
          Senior Gameplay Programmer
        </span>
        <span className="text-dim">
          Zynga · CSR2 · Unity 3D · Android / iOS · AR/VR
        </span>
      </div>
      <a
        href="mailto:connect@rajkumargamedev.com"
        className="rise mt-8 inline-block bg-hazard text-void font-mono text-sm font-bold uppercase tracking-[0.2em] px-5 py-3 hover:bg-bone transition-colors"
        style={{ animationDelay: "400ms" }}
      >
        Press start
      </a>
      <p
        className="rise mt-10 font-mono text-[10px] uppercase tracking-[0.2em] text-hazard"
        style={{ animationDelay: "460ms" }}
      >
        Hi-score
      </p>
      <div
        className="rise mt-2 grid grid-cols-2 sm:grid-cols-4 border border-line divide-x divide-y sm:divide-y-0 divide-line"
        style={{ animationDelay: "500ms" }}
      >
        {stats.map((stat) => (
          <div key={stat.label} className="p-4">
            <p
              className={`font-display text-4xl ${stat.highlight ? "text-hazard" : ""}`}
            >
              {stat.value}
            </p>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-dim mt-1">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Work() {
  return (
    <section
      id="work"
      className="max-w-6xl mx-auto px-5 py-12 border-t border-line scroll-mt-28 md:scroll-mt-12"
    >
      <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between mb-8">
        <h2 className="font-display text-3xl uppercase tracking-tight">
          01 / Shipped Titles
        </h2>
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-dim">
          Select a cabinet ▸
        </span>
      </div>
      <div className="grid md:grid-cols-2 gap-px bg-line border border-line">
        {projects.map((project) => (
          <a
            key={project.title}
            href="#work"
            className="group bg-panel p-6 flex flex-col border border-transparent hover:border-hazard hover:bg-[oklch(0.23_0_0)] transition-colors"
          >
            <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.2em]">
              <span className="text-hazard">Player 1</span>
              {project.badgeVariant === "solid" ? (
                <span className="bg-hazard text-void px-2 py-0.5 font-bold">
                  {project.badge}
                </span>
              ) : (
                <span className="text-hazard font-bold">{project.badge}</span>
              )}
            </div>
            <div className="w-full aspect-[16/9] overflow-hidden outline-1 -outline-offset-1 outline-white/5 rounded-[min(1vw,10px)] mt-3">
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                width={1088}
                height={608}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="font-display text-2xl uppercase mt-4">{project.title}</h3>
            <p className="text-sm text-dim mt-1 text-pretty">{project.description}</p>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-dim mt-3">
              {project.tags}
            </p>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-hazard mt-3">
              Select ▸
            </p>
          </a>
        ))}
      </div>
    </section>
  );
}

function WebGames() {
  return (
    <section
      id="games"
      className="max-w-6xl mx-auto px-5 py-12 border-t border-line scroll-mt-28 md:scroll-mt-12"
    >
      <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between mb-8">
        <h2 className="font-display text-3xl uppercase tracking-tight">
          02 / Web Games
        </h2>
        <a
          href="https://rajkutitgmailcom.itch.io"
          target="_blank"
          rel="noreferrer"
          className="font-mono text-[10px] uppercase tracking-[0.2em] text-dim hover:text-hazard transition-colors"
        >
          ▸ all games on itch.io
        </a>
      </div>
      <div className="grid md:grid-cols-2 gap-px bg-line border border-line">
        {itchGames.map((game) => (
          <a
            key={game.title}
            href={game.url}
            target="_blank"
            rel="noreferrer"
            className="group bg-panel p-6 flex flex-col border border-transparent hover:border-hazard hover:bg-[oklch(0.23_0_0)] transition-colors"
          >
            <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.2em]">
              <span className="text-hazard">Player 1</span>
              <span className="text-hazard font-bold">{game.badge}</span>
            </div>
            <div className="w-full aspect-[16/9] overflow-hidden outline-1 -outline-offset-1 outline-white/5 rounded-[min(1vw,10px)] mt-3">
              <img
                src={game.image}
                alt={game.title}
                loading="lazy"
                width={1088}
                height={608}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="font-display text-2xl uppercase mt-4">{game.title}</h3>
            <p className="text-sm text-dim mt-1 text-pretty">{game.description}</p>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-dim mt-3">
              {game.tags}
            </p>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-hazard mt-3 group-hover:underline">
              Insert coin ↗
            </p>
          </a>
        ))}
      </div>
    </section>
  );
}

function RuntimeLog() {
  return (
    <section
      id="log"
      className="max-w-6xl mx-auto px-5 py-12 border-t border-line scroll-mt-28 md:scroll-mt-12"
    >
      <h2 className="font-display text-3xl uppercase tracking-tight mb-8">
        03 / Runtime Log
      </h2>
      <ol className="border-l-2 border-line ml-2">
        {timeline.map((entry) => (
          <li key={entry.org} className="pl-6 py-4 relative">
            <span
              className={`absolute -left-[7px] top-5 w-3 h-3 ${entry.current ? "bg-hazard" : "bg-dim"}`}
            />
            <p
              className={`font-mono text-[11px] uppercase tracking-[0.2em] ${entry.current ? "text-hazard" : "text-dim"}`}
            >
              {entry.stage} {entry.status} · {entry.period}
            </p>
            <h3 className="font-display text-xl uppercase mt-1">{entry.org}</h3>
            <p className="text-sm text-dim mt-1 text-pretty">{entry.detail}</p>
          </li>
        ))}
      </ol>
      <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.2em] text-hazard">
        Achievement unlocked · Company hackathon winner
      </p>
      <div className="mt-8">
        <h3 className="font-mono text-[10px] uppercase tracking-[0.2em] text-hazard mb-3">
          Bonus
        </h3>
        <ul className="border border-line divide-y divide-line">
          {education.map((entry) => (
            <li key={entry.org} className="bg-panel p-4">
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-dim">
                {entry.period}
              </p>
              <p className="font-display text-lg uppercase mt-1">{entry.org}</p>
              <p className="text-sm text-dim mt-1">{entry.detail}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-8">
        <h3 className="font-mono text-[10px] uppercase tracking-[0.2em] text-hazard mb-3">
          Power-ups
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-line border border-line">
          {skills.map((skill) => (
            <div key={skill.label} className="bg-panel p-4">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-hazard mb-2">
                {skill.label}
              </p>
              <p className="text-sm">{skill.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer
      id="contact"
      className="max-w-6xl mx-auto px-5 py-14 border-t border-line scroll-mt-28 md:scroll-mt-12"
    >
      <h2 className="font-display text-[clamp(2.5rem,7vw,5rem)] uppercase tracking-tight leading-[0.9] text-balance">
        Insert coin
        <br />
        to connect
      </h2>
      <div className="mt-8 flex flex-wrap gap-3 font-mono text-sm uppercase tracking-[0.1em]">
        <a
          href="mailto:connect@rajkumargamedev.com"
          className="bg-hazard text-void font-bold px-5 py-3 hover:bg-bone transition-colors"
        >
          ▸ Email
        </a>
        <a
          href="https://www.linkedin.com/in/rajkumarmanikindi/"
          target="_blank"
          rel="noreferrer"
          className="border border-line px-5 py-3 hover:border-hazard hover:text-hazard transition-colors"
        >
          ▸ LinkedIn
        </a>
      </div>
      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-dim mt-8">
        © Rajkumar Manikindi · Bengaluru, IN · [ new cabinets appended at runtime ]
      </p>
    </footer>
  );
}
