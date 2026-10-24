import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";

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
      { property: "og:title", content: "Rajkumar Manikindi — Senior Gameplay Programmer" },
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

type Screen = "title" | "menu" | "campaign" | "arcade" | "player" | "continue";
const SCREENS: Screen[] = ["title", "menu", "campaign", "arcade", "player", "continue"];

/* To add a new shipped title or tool, append an entry here. */
const projects = [
  { title: "CSR2", badge: "LIVE", description: "Drag-racing simulator · Senior Gameplay Programmer at Zynga since 2018.", tags: "Unity · iOS · Android", image: csr2Image },
  { title: "Ghost Rider", badge: "5M+", description: "Arcade motorcycle action · Integer Production · 4-star rating.", tags: "Android · Gameplay", image: ghostRiderImage },
  { title: "Krayonik AR", badge: "AR/VR", description: "Augmented-reality education apps · Led gameplay development and tooling.", tags: "ARKit · Unity", image: krayonikArImage },
  { title: "Iteration Tool", badge: "-50%", description: "Unity scripting tool · halved design iteration time across teams.", tags: "Tool dev · C#", image: iterationToolImage },
];

/* To add a new itch.io web game, append an entry here. */
const itchGames = [
  { title: "Asteroid", url: "https://rajkutitgmailcom.itch.io/asteroid", badge: "HTML5", description: "Made with Unity · runs in the browser.", tags: "Unity · HTML5", image: asteroidImage },
  { title: "Laser", url: "https://rajkutitgmailcom.itch.io/laser", badge: "HTML5", description: "Made with Unity · runs in the browser.", tags: "Unity · HTML5", image: laserImage },
  { title: "Kitti Journey", url: "https://rajkutitgmailcom.itch.io/kitti-journey-ggj-2025", badge: "GGJ25", description: "A cat chasing floating bubbles · Global Game Jam 2025 entry.", tags: "Puzzle · Unity · HTML5", image: "https://img.itch.zone/aW1nLzE5NTMwMTgwLnBuZw==/315x250%23c/2gv6I9.png" },
  { title: "ToonBlast Test", url: "https://rajkutitgmailcom.itch.io/toonblast-test", badge: "PROTO", description: "First Unity project · playable puzzle prototype.", tags: "Puzzle · Unity · HTML5", image: "https://img.itch.zone/aW1nLzE5MzIzNTkwLnBuZw==/315x250%23c/m6j%2Bb0.png" },
];

const hiScores = [
  { value: "12+", label: "Years" },
  { value: "5M+", label: "Downloads" },
  { value: "−50%", label: "Iteration time" },
  { value: "4★", label: "Ghost Rider" },
];

const stages = [
  { n: 4, period: "2018 — NOW", org: "Zynga · CSR2", role: "Senior Gameplay Programmer", points: ["Live drag racing for millions of players", "Unity scripting tool that cut design iteration time by 50%", "Company hackathon winner"], current: true },
  { n: 3, period: "2016 — 2018", org: "Krayonik", role: "Lead · AR Education", points: ["Led AR education apps where students interact with 3D models"], current: false },
  { n: 2, period: "2014 — 2016", org: "Integer Production", role: "Game Developer", points: ["Ghost Rider — 5M+ downloads, 4-star", "High Speed Racer · Stick Man Sniper · American Sniper"], current: false },
  { n: 1, period: "2013 — 2014", org: "Constraint Global Solutions", role: "Chennai", points: ["Shark Strike on iOS"], current: false },
];

const education = [
  { period: "2012 — 2013", title: "Postgraduate Diploma", place: "ICAT, Bengaluru" },
  { period: "2008 — 2012", title: "B.Tech", place: "St. Johns College of Engineering and Technology, Kurnool" },
];

const powerUps = [
  { label: "Unity 3D", level: 10 },
  { label: "Gameplay scripting", level: 10 },
  { label: "Unity tools", level: 9 },
  { label: "Android", level: 9 },
  { label: "iOS", level: 8 },
  { label: "AR/VR", level: 7 },
];

const menuItems: { id: Screen; name: string; sub: string; meta: string; icon: string }[] = [
  { id: "campaign", name: "Campaign", sub: "Shipped work", meta: "4 levels", icon: "⚑" },
  { id: "arcade", name: "Arcade", sub: "Browser games", meta: "4 carts", icon: "◉" },
  { id: "player", name: "Player File", sub: "Career", meta: "4 stages", icon: "☰" },
  { id: "continue", name: "Continue", sub: "Contact", meta: "1 credit", icon: "▶" },
];

function Index() {
  const [screen, setScreen] = useState<Screen>("title");
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    const read = () => {
      const h = window.location.hash.slice(1) as Screen;
      setScreen(SCREENS.includes(h) && h !== "title" ? h : "title");
    };
    read();
    window.addEventListener("hashchange", read);
    return () => window.removeEventListener("hashchange", read);
  }, []);

  const go = useCallback((next: Screen) => {
    if (next === "title") {
      history.pushState(null, "", window.location.pathname);
      setScreen("title");
    } else {
      window.location.hash = next;
    }
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (screen === "title" && (e.key === "Enter" || e.key === " ")) {
        if ((e.target as HTMLElement)?.tagName === "BUTTON") return;
        e.preventDefault();
        go("menu");
      } else if (screen === "menu") {
        const moves: Record<string, number> = { ArrowRight: 1, ArrowLeft: -1, ArrowDown: 2, ArrowUp: -2 };
        if (e.key in moves) {
          e.preventDefault();
          setSelected((s) => {
            const n = (s + moves[e.key] + 4) % 4;
            document.getElementById(`panel-${n}`)?.focus();
            return n;
          });
        } else if (e.key === "Escape") go("title");
      } else if (screen !== "title" && e.key === "Escape") {
        go("menu");
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [screen, go]);

  useEffect(() => {
    if (screen === "menu") document.getElementById(`panel-${selected}`)?.focus({ preventScroll: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [screen]);

  return (
    <div className="relative min-h-[100svh] bg-void text-bone font-body overflow-x-hidden">
      <div className="scanlines fixed inset-0 pointer-events-none opacity-[0.04] z-30" />
      <div className="vignette fixed inset-0 pointer-events-none z-30" />
      <Hud screen={screen} onHome={() => go("title")} />
      <main key={screen} className="screen-in relative">
        <section hidden={screen !== "title"}><TitleScreen onStart={() => go("menu")} /></section>
        <section hidden={screen !== "menu"}>
          <MainMenu selected={selected} onSelect={setSelected} onOpen={(s) => go(s)} />
        </section>
        <section hidden={screen !== "campaign"}><Campaign onBack={() => go("menu")} /></section>
        <section hidden={screen !== "arcade"}><Arcade onBack={() => go("menu")} /></section>
        <section hidden={screen !== "player"}><PlayerFile onBack={() => go("menu")} active={screen === "player"} /></section>
        <section hidden={screen !== "continue"}><Continue onBack={() => go("menu")} /></section>
      </main>
    </div>
  );
}

function Hud({ screen, onHome }: { screen: Screen; onHome: () => void }) {
  return (
    <header className="fixed top-0 inset-x-0 z-20 border-b border-line bg-void/85 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 h-11 flex items-center justify-between gap-3 font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-dim">
        <button onClick={onHome} className="text-hazard hover:text-bone">1P · RJM</button>
        <span className="hidden sm:inline">Bengaluru, IN</span>
        <span>HI <span className="text-bone">12+ YRS</span></span>
        <span className="flex items-center gap-2">
          {screen === "title" ? "CREDIT 0" : "CREDIT 1"}
          <span className="blink-cursor inline-block w-2 h-3 bg-hazard" />
        </span>
      </div>
    </header>
  );
}

function TitleScreen({ onStart }: { onStart: () => void }) {
  return (
    <div className="crt-grid min-h-[100svh] flex flex-col items-center justify-center text-center px-4 pt-14 pb-8">
      <p className="rise font-mono text-[11px] uppercase tracking-[0.4em] text-dim">© 2013–2026 · A Bengaluru Production</p>
      <h1 className="rise glitch font-display uppercase leading-[0.82] tracking-tight text-[clamp(3.6rem,16vw,13rem)] mt-6 logo-shadow" style={{ animationDelay: "120ms" }}>
        Rajkumar
        <br />
        Manikindi
      </h1>
      <p className="rise mt-6 font-mono text-xs sm:text-sm uppercase tracking-[0.35em] bg-hazard text-void font-bold px-3 py-1.5" style={{ animationDelay: "300ms" }}>
        Senior Gameplay Programmer
      </p>
      <p className="blink-cursor mt-12 font-display text-2xl sm:text-3xl uppercase tracking-[0.2em] text-hazard">Insert Coin</p>
      <button
        onClick={onStart}
        autoFocus
        className="rise start-btn mt-6 font-mono font-bold uppercase tracking-[0.3em] text-lg sm:text-xl border-2 border-hazard text-hazard px-10 py-4 hover:bg-hazard hover:text-void focus-visible:bg-hazard focus-visible:text-void outline-none transition-colors"
        style={{ animationDelay: "480ms" }}
      >
        ▶ Press Start
      </button>
      <p className="mt-10 font-mono text-[10px] uppercase tracking-[0.3em] text-dim">Press Enter · Zynga · CSR2 · Unity 3D</p>
    </div>
  );
}

function MainMenu({ selected, onSelect, onOpen }: { selected: number; onSelect: (i: number) => void; onOpen: (s: Screen) => void }) {
  return (
    <div className="min-h-[100svh] max-w-6xl mx-auto px-4 pt-20 pb-10 flex flex-col">
      <div className="flex flex-wrap items-end justify-between gap-2 mb-6">
        <h2 className="font-display text-[clamp(2.5rem,8vw,5.5rem)] uppercase leading-none">Select Mode</h2>
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-dim hidden sm:block">↑↓←→ move · Enter select · Esc back</p>
      </div>
      <div className="grid sm:grid-cols-2 gap-4 flex-1">
        {menuItems.map((item, i) => {
          const active = selected === i;
          return (
            <button
              key={item.id}
              id={`panel-${i}`}
              onMouseEnter={() => onSelect(i)}
              onFocus={() => onSelect(i)}
              onClick={() => onOpen(item.id)}
              aria-current={active}
              className={`rise menu-panel group relative text-left min-h-[88px] sm:min-h-[220px] p-5 sm:p-8 border-2 flex flex-col justify-between outline-none ${active ? "is-active bg-hazard text-void border-hazard" : "border-line text-bone bg-panel/60"}`}
              style={{ animationDelay: `${i * 70}ms` }}
            >
              <div className="flex items-start justify-between gap-3">
                <span className={`font-mono text-xs font-bold tracking-[0.2em] ${active ? "" : "text-dim"}`}>
                  {active ? "▶ " : ""}0{i + 1}
                </span>
                <span className={`text-3xl sm:text-5xl leading-none ${active ? "" : "text-hazard"}`} aria-hidden>{item.icon}</span>
              </div>
              <div className="mt-3">
                <p className="font-display uppercase text-[clamp(2rem,5vw,3.75rem)] leading-none break-words">{item.name}</p>
                <p className={`mt-2 font-mono text-[11px] uppercase tracking-[0.2em] ${active ? "" : "text-dim"}`}>
                  {item.sub} · {item.meta}
                </p>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

function ScreenShell({ kicker, title, onBack, aside, children }: { kicker: string; title: string; onBack: () => void; aside?: ReactNode; children: ReactNode }) {
  const ref = useRef<HTMLHeadingElement>(null);
  return (
    <div className="min-h-[100svh] max-w-6xl mx-auto px-4 pt-20 pb-16">
      <div className="flex flex-wrap items-center justify-between gap-3 mb-8">
        <button onClick={onBack} className="font-mono text-xs uppercase tracking-[0.2em] border border-line px-3 py-2 hover:border-hazard hover:text-hazard">
          ◀ Back
        </button>
        {aside}
      </div>
      <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-hazard">{kicker}</p>
      <h2 ref={ref} tabIndex={-1} className="font-display uppercase leading-none text-[clamp(2.75rem,9vw,6.5rem)] outline-none mb-10">{title}</h2>
      {children}
    </div>
  );
}

function Campaign({ onBack }: { onBack: () => void }) {
  return (
    <ScreenShell kicker="World 1 · Shipped titles" title="Campaign" onBack={onBack}>
      <div className="grid gap-4 md:grid-cols-3">
        {projects.map((p, i) => (
          <article key={p.title} className={`rise level-card bg-panel border-2 border-line flex flex-col ${i === 0 ? "md:col-span-3 md:grid md:grid-cols-2" : ""}`} style={{ animationDelay: `${i * 80}ms` }}>
            <div className={`relative overflow-hidden ${i === 0 ? "aspect-[16/9] md:aspect-auto md:h-full" : "aspect-[16/9]"}`}>
              <img src={p.image} alt={p.title} loading="lazy" width={1088} height={608} className="w-full h-full object-cover" />
              <span className="absolute top-3 left-3 font-mono text-[10px] font-bold bg-void/85 text-hazard px-2 py-1 tracking-[0.2em]">LEVEL 0{i + 1}</span>
            </div>
            <div className="p-5 sm:p-6 flex flex-col">
              <div className="flex items-center justify-between gap-3">
                <h3 className={`font-display uppercase leading-none ${i === 0 ? "text-5xl sm:text-6xl" : "text-3xl"}`}>{p.title}</h3>
                <span className="font-mono text-[11px] bg-hazard text-void px-2 py-0.5 font-bold shrink-0">{p.badge}</span>
              </div>
              <p className="text-sm text-dim mt-3 text-pretty">{p.description}</p>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-dim mt-auto pt-4">{p.tags}</p>
            </div>
          </article>
        ))}
      </div>
    </ScreenShell>
  );
}

function Arcade({ onBack }: { onBack: () => void }) {
  return (
    <ScreenShell
      kicker="4 carts · play in browser"
      title="Arcade"
      onBack={onBack}
      aside={
        <a href="https://rajkutitgmailcom.itch.io" target="_blank" rel="noreferrer" className="font-mono text-[11px] uppercase tracking-[0.2em] text-hazard hover:underline">
          ▸ All games on itch.io ↗
        </a>
      }
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {itchGames.map((g, i) => (
          <a key={g.title} href={g.url} target="_blank" rel="noreferrer" className="rise cabinet group flex flex-col border-2 border-line bg-panel" style={{ animationDelay: `${i * 80}ms` }}>
            <div className="px-3 py-2 border-b-2 border-line flex justify-between font-mono text-[10px] uppercase tracking-[0.2em]">
              <span className="text-dim">Cart 0{i + 1}</span>
              <span className="text-hazard font-bold">{g.badge}</span>
            </div>
            <div className="m-3 aspect-[4/3] overflow-hidden border-2 border-void">
              <img src={g.image} alt={g.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="px-4 pb-4 flex flex-col flex-1">
              <h3 className="font-display uppercase text-2xl leading-none">{g.title}</h3>
              <p className="text-sm text-dim mt-2 text-pretty">{g.description}</p>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-dim mt-2">{g.tags}</p>
            </div>
            <span className="mt-auto block text-center font-mono font-bold uppercase tracking-[0.3em] text-sm py-3 bg-hazard text-void group-hover:bg-bone transition-colors">
              Insert Coin ↗
            </span>
          </a>
        ))}
      </div>
    </ScreenShell>
  );
}

function PlayerFile({ onBack, active }: { onBack: () => void; active: boolean }) {
  return (
    <ScreenShell kicker="Rajkumar M. · Bengaluru, IN" title="Player File" onBack={onBack}>
      <div className="grid grid-cols-2 sm:grid-cols-4 border-2 border-hazard mb-12">
        {hiScores.map((s, i) => (
          <div key={s.label} className={`p-4 sm:p-5 ${i % 2 ? "" : "bg-hazard/10"} border-hazard/40 ${i < 3 ? "sm:border-r" : ""}`}>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-hazard">HI-{i + 1}</p>
            <p className="font-display text-4xl sm:text-5xl mt-1">{s.value}</p>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-dim mt-1">{s.label}</p>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-[1.5fr_1fr] gap-10">
        <div>
          <h3 className="font-mono text-xs uppercase tracking-[0.3em] text-dim mb-4">Stage select · newest first</h3>
          <ol className="space-y-4">
            {stages.map((s) => (
              <li key={s.n} className={`border-2 p-5 ${s.current ? "border-hazard" : "border-line bg-panel"}`}>
                <div className="flex flex-wrap items-center justify-between gap-2 font-mono text-[11px] uppercase tracking-[0.2em]">
                  <span className={s.current ? "text-hazard font-bold" : "text-dim"}>Stage {s.n} · {s.period}</span>
                  <span className={s.current ? "bg-hazard text-void px-2 py-0.5 font-bold" : "text-hazard"}>{s.current ? "In progress" : "Clear ✓"}</span>
                </div>
                <h4 className="font-display uppercase text-3xl leading-none mt-3">{s.org}</h4>
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-dim mt-1">{s.role}</p>
                <ul className="mt-3 space-y-1 text-sm">
                  {s.points.map((pt) => <li key={pt} className="flex gap-2"><span className="text-hazard">▸</span>{pt}</li>)}
                </ul>
              </li>
            ))}
            <li className="border-2 border-dashed border-line p-5">
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-hazard">Bonus stage · Education</p>
              {education.map((e) => (
                <div key={e.title} className="mt-3">
                  <p className="font-display uppercase text-xl leading-none">{e.title}</p>
                  <p className="text-sm text-dim mt-1">{e.place} · {e.period}</p>
                </div>
              ))}
            </li>
          </ol>
        </div>

        <div>
          <h3 className="font-mono text-xs uppercase tracking-[0.3em] text-dim mb-4">Power-ups</h3>
          <div className="space-y-5 border-2 border-line bg-panel p-5">
            {powerUps.map((p, i) => (
              <div key={p.label}>
                <div className="flex justify-between font-mono text-[11px] uppercase tracking-[0.2em]">
                  <span>{p.label}</span>
                  <span className="text-hazard">LV {p.level}</span>
                </div>
                <div className="mt-2 grid grid-cols-10 gap-1" role="meter" aria-valuemin={0} aria-valuemax={10} aria-valuenow={p.level} aria-label={p.label}>
                  {Array.from({ length: 10 }).map((_, k) => (
                    <span
                      key={k}
                      className={`h-3 ${k < p.level ? "bg-hazard" : "bg-line"} ${active && k < p.level ? "meter-seg" : ""}`}
                      style={{ animationDelay: `${i * 90 + k * 40}ms` }}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ScreenShell>
  );
}

function Continue({ onBack }: { onBack: () => void }) {
  return (
    <ScreenShell kicker="Continue? · 9" title="Insert coin to connect" onBack={onBack}>
      <p className="font-mono text-sm uppercase tracking-[0.2em] text-dim max-w-xl">
        Hiring for gameplay, systems or Unity tooling? Pick a channel.
      </p>
      <div className="mt-10 grid sm:grid-cols-2 gap-4 max-w-3xl">
        <a href="mailto:connect@rajkumargamedev.com" className="menu-panel is-active block bg-hazard text-void border-2 border-hazard p-6 sm:p-8">
          <span className="font-mono text-xs font-bold tracking-[0.2em]">▶ P1</span>
          <p className="font-display uppercase text-5xl leading-none mt-3">Email</p>
          <p className="font-mono text-[11px] tracking-[0.1em] mt-2 break-all">connect@rajkumargamedev.com</p>
        </a>
        <a href="https://www.linkedin.com/in/rajkumarmanikindi/" target="_blank" rel="noreferrer" className="menu-panel block border-2 border-line bg-panel p-6 sm:p-8 hover:border-hazard hover:text-hazard">
          <span className="font-mono text-xs font-bold tracking-[0.2em] text-dim">P2</span>
          <p className="font-display uppercase text-5xl leading-none mt-3">LinkedIn</p>
          <p className="font-mono text-[11px] tracking-[0.1em] mt-2 text-dim">/in/rajkumarmanikindi ↗</p>
        </a>
      </div>
      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-dim mt-16">© Rajkumar Manikindi · Bengaluru · Game over? Never.</p>
    </ScreenShell>
  );
}
