# Redesign: playable main menu portfolio

One page, same address, same palette (near-black void, bone, acid yellow). The site becomes a game you boot instead of stacked resume sections.

## Screen flow

```text
TITLE SCREEN (full viewport)
   | PRESS START (click, Enter or Space)
   v
MAIN MENU: 4 level-select panels
   | pick a panel (click, tap, arrows + Enter)
   v
SCREEN: Campaign | Arcade | Player File | Continue
   | BACK (button or Esc) returns to the menu, with the last panel still selected
```

- Only one screen shows at a time. The old long scroll is gone.
- The screen in use is saved in the address (`#campaign`, `#arcade`, `#player`, `#continue`), so shared links and the browser Back button work. With no hash, the title screen shows.
- Every screen is still in the page HTML (hidden, not removed), so search engines and the static export still see all the content.

## 1. Title screen (new first viewport)

- Full-height screen with a CRT frame: faint scanlines, vignette, slight screen curve, and a small HUD bar (`P1 · BENGALURU, IN`, `HI 12+ YRS`, `CREDIT 0`).
- Large stacked logo: RAJKUMAR / MANIKINDI in Anton at about 16vw, with an acid-yellow drop shadow and a short glitch on load.
- Subtitle in mono: SENIOR GAMEPLAY PROGRAMMER.
- Blinking `INSERT COIN`.
- A large `▶ PRESS START` button. It is a real button that opens the menu on this page, not the email link.
- Footer line: `© RAJKUMAR MANIKINDI · PRESS ENTER`.
- Removed from the first viewport: the sticky nav, the stats grid, the hazard sweep bar, and the role chip.

## 2. Main menu

- Header: `SELECT MODE`, plus a hint row: `↑↓←→ MOVE · ENTER SELECT · ESC BACK`.
- A 2x2 grid of large panels on desktop. Each panel has a big index number, a mode name, a subtitle, and a small icon made with CSS shapes:
  - CAMPAIGN: shipped work · 4 levels
  - ARCADE: browser games · 4 carts
  - PLAYER FILE: career · 4 stages
  - CONTINUE: contact
- Selected state (from hover, keyboard focus or arrow keys): yellow fill with dark text, a `▶` cursor, a slight lift, and a hard offset shadow. Panels that aren't selected are dim outlines.
- Mobile: one column of tall tappable panels (at least 88px high). Labels wrap instead of being clipped.

## 3. Campaign

- Header `CAMPAIGN · WORLD 1`, plus a BACK button.
- Four levels: CSR2, Ghost Rider, Krayonik AR, Iteration Tool. Each card shows a `LEVEL 0X` tag, the existing image, the badge (LIVE, 5M+, AR/VR, −50%), a one-line description and tags.
- Layout: the first level is wide and featured, the other three sit in a row below. On mobile they stack.
- Only the existing images are used. No new screenshots.

## 4. Arcade

- Header `ARCADE · 4 CARTS`, a BACK button, and the `▸ ALL GAMES ON ITCH.IO` link.
- Cards styled like arcade cabinets or cartridges, with the existing art for Asteroid, Laser, Kitti Journey and ToonBlast Test, the badge and tags. A CTA bar reads `INSERT COIN ↗` and opens itch.io in a new tab.

## 5. Player file

- Header `PLAYER FILE · RAJKUMAR M.`
- Hi-score strip at the top, styled like a score table: 12+ YEARS, 5M+ DOWNLOADS, −50% ITERATION TIME, 4★ GHOST RIDER.
- Stages, newest first. Each shows `STAGE X · CLEAR` and the years:
  - Stage 4: 2018–now, Zynga, CSR2. Senior Gameplay Programmer. Live drag racing, a Unity scripting tool that cut design iteration time by 50%, and a company hackathon win. Marked `IN PROGRESS`.
  - Stage 3: 2016–2018, Krayonik. Led AR education apps where students interact with 3D models.
  - Stage 2: 2014–2016, Integer Production. Ghost Rider (5M+, 4★), High Speed Racer, Stick Man Sniper, American Sniper.
  - Stage 1: 2013–2014, Constraint Global Solutions, Chennai. Shark Strike on iOS.
- Bonus stage, education: B.Tech, St. Johns College of Engineering and Technology, Kurnool, 2008–2012. Postgraduate diploma, ICAT, Bengaluru, 2012–2013.
- Power-ups shown as segmented meters that fill when the screen opens: Unity 3D, Gameplay scripting, Unity tools, Android, iOS, AR/VR. Each meter shows a level out of 10 (assumed values, for example Unity 10, AR/VR 7). Tell me your real values.

## 6. Continue

- A big `INSERT COIN TO CONNECT`, plus a `CONTINUE? 9…` countdown that is only decoration (it loops and never navigates anywhere).
- Only two buttons: `▸ EMAIL` (mailto:connect@rajkumargamedev.com) and `▸ LINKEDIN`. No phone number and no Gmail.

## Motion

- Screen changes: a quick CRT wipe or flash (about 250ms).
- Panels and cards: a staggered rise.
- Blink is used only on INSERT COIN and the cursor.
- With reduced motion turned on, all of this becomes simple fades.

## Left untouched

- The palette, fonts, existing images, and project/game data and links.
- Page title and description text, the GitHub Pages workflow, the static build, CNAME, AGENTS.md, and the 404 and error pages.
- No database, login, canvas or game engine.

## Technical details

- `src/routes/index.tsx` is rebuilt as small components: TitleScreen, MainMenu, CampaignScreen, ArcadeScreen, PlayerFileScreen, ContinueScreen, MenuPanel, PowerMeter and BackButton.
- Screen state: `useState<Screen>` synced to `location.hash`. It is read in `useEffect` after load to avoid a mismatch between server and browser. Hidden screens use the `hidden` attribute.
- Keyboard: a single keydown listener on the menu (arrow keys move through the 2x2 grid, Enter opens, Esc goes back). Focus moves to each screen's heading for accessibility. Panels are real `<button>`s with `aria-pressed` or `aria-current`.
- CSS: new utilities in `src/styles.css` (crt-frame, vignette, glitch, wipe, meter-fill, panel-select shadow), plus a hazard shadow token and a `prefers-reduced-motion` block. The one hard-coded hover colour is replaced with a token.
- Run the existing `src/test/app-routing.test.tsx`, then check desktop and mobile (390px) in a browser: title, start, menu keyboard navigation, each screen, and back.
