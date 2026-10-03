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
    period: "2018 — NOW",
    org: "Zynga · CSR2",
    detail: "Senior Gameplay Programmer. Ships live drag-racing titles to millions.",
    current: true,
  },
  {
    period: "KRAYONIK",
    org: "AR Education",
    detail: "Built AR apps and internal tooling for immersive learning.",
    current: false,
  },
  {
    period: "INTEGER PRODUCTION",
    org: "Ghost Rider · Racer · Sniper",
    detail: "Shipped Android arcade titles; Ghost Rider passed 5M downloads.",
    current: false,
  },
];

const skills = [
  { label: "Engine", value: "Unity 3D · AR/VR" },
  { label: "Craft", value: "Gameplay scripting · Tool dev" },
  { label: "Platform", value: "Android · iOS · C#" },
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
      <div className="max-w-6xl mx-auto px-5 h-12 flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.2em] text-dim">
        <span className="text-hazard">▮ SYS://RJM.DEV</span>
        <nav className="flex gap-6">
          <a className="hover:text-hazard" href="#work">
            01 / Work
          </a>
          <a className="hover:text-hazard" href="#games">
            02 / Games
          </a>
          <a className="hover:text-hazard" href="#log">
            03 / Log
          </a>
          <a className="hover:text-hazard" href="#contact">
            04 / Contact
          </a>
        </nav>
        <span className="hidden sm:flex items-center gap-2 text-bone">
          BENGALURU, IN <span className="text-hazard">●</span>
          <span className="blink-cursor inline-block w-2 h-3 bg-hazard" />
        </span>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-5 pt-14 pb-10">
      <p
        className="rise font-mono text-[11px] uppercase tracking-[0.3em] text-hazard"
        style={{ animationDelay: "0ms" }}
      >
        [ boot complete · 12 yrs runtime ]
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
      <div
        className="rise mt-10 grid grid-cols-2 sm:grid-cols-4 border border-line divide-x divide-line"
        style={{ animationDelay: "420ms" }}
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
      className="max-w-6xl mx-auto px-5 py-12 border-t border-line scroll-mt-12"
    >
      <div className="flex items-baseline justify-between mb-8">
        <h2 className="font-display text-3xl uppercase tracking-tight">
          01 / Shipped Titles
        </h2>
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-dim">
          select a tile ▸
        </span>
      </div>
      <div className="grid md:grid-cols-2 gap-px bg-line border border-line">
        {projects.map((project) => (
          <a key={project.title} href="#work" className="group bg-panel p-6 flex flex-col">
            <div className="w-full aspect-[16/9] overflow-hidden outline-1 -outline-offset-1 outline-white/5 rounded-[min(1vw,10px)]">
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                width={1088}
                height={608}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex items-center justify-between mt-4">
              <h3 className="font-display text-2xl uppercase">{project.title}</h3>
              {project.badgeVariant === "solid" ? (
                <span className="font-mono text-[10px] bg-hazard text-void px-2 py-0.5 font-bold">
                  {project.badge}
                </span>
              ) : (
                <span className="font-mono text-[10px] text-hazard font-bold">
                  {project.badge}
                </span>
              )}
            </div>
            <p className="text-sm text-dim mt-1 text-pretty">{project.description}</p>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-dim mt-3">
              {project.tags}
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
      className="max-w-6xl mx-auto px-5 py-12 border-t border-line scroll-mt-12"
    >
      <div className="flex items-baseline justify-between mb-8">
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
            className="group bg-panel p-6 flex flex-col hover:bg-[oklch(0.23_0_0)] transition-colors"
          >
            <div className="w-full aspect-[16/9] overflow-hidden outline-1 -outline-offset-1 outline-white/5 rounded-[min(1vw,10px)]">
              <img
                src={game.image}
                alt={game.title}
                loading="lazy"
                width={1088}
                height={608}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex items-center justify-between mt-4">
              <h3 className="font-display text-2xl uppercase">{game.title}</h3>
              <span className="font-mono text-[10px] text-hazard font-bold">
                {game.badge}
              </span>
            </div>
            <p className="text-sm text-dim mt-1 text-pretty">
              {game.description}
            </p>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-dim mt-3">
              {game.tags} ·{" "}
              <span className="text-hazard group-hover:underline">
                play in browser ↗
              </span>
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
      className="max-w-6xl mx-auto px-5 py-12 border-t border-line scroll-mt-12"
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
              {entry.period}
            </p>
            <h3 className="font-display text-xl uppercase mt-1">{entry.org}</h3>
            <p className="text-sm text-dim mt-1 text-pretty">{entry.detail}</p>
          </li>
        ))}
      </ol>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-px bg-line border border-line">
        {skills.map((skill) => (
          <div key={skill.label} className="bg-panel p-4">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-hazard mb-2">
              {skill.label}
            </p>
            <p className="text-sm">{skill.value}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer
      id="contact"
      className="max-w-6xl mx-auto px-5 py-14 border-t border-line scroll-mt-12"
    >
      <h2 className="font-display text-[clamp(2.5rem,7vw,5rem)] uppercase tracking-tight leading-[0.9] text-balance">
        Insert coin
        <br />
        to connect
      </h2>
      <div className="mt-8 flex flex-wrap gap-3 font-mono text-sm uppercase tracking-[0.1em]">
        <a
          href="mailto:mmanikindirajkumar@gmail.com"
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
        © Rajkumar Manikindi · Bengaluru · [ new tiles appended at runtime ]
      </p>
    </footer>
  );
}
