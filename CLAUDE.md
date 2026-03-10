# CLAUDE.md — Mee-maken website project instruction

This file tells any AI assistant (Claude, ChatGPT, or other) everything it needs to know about this project to help effectively. Read this before doing anything else.

---

## Who this is for

**Maartje Damen** — onderzoekend praktijkdenker in het publieke domein. Brugfiguur tussen beleid en uitvoering, tussen sport en ambtenarij, tussen systeem en straatniveau. Writes in Dutch. Thinks in Dutch. The site is Dutch.

---

## What this project is

`mee-maken.nl` — a personal website built with Astro + Tailwind + Markdown. It is not a product or a blog in the conventional sense. It is a public thinking infrastructure: the stage to a private Obsidian vault (the backstage).

The site has three sections:
- **Denken** — essays, opinions, thinking-in-progress
- **Doen** — CV, products, services, expertise
- **Delen** — community, events, spaces to participate

The overarching name **mee-maken** is an attitude, not a category. It means both "to participate in making" and "to witness making." The sublabel system (mee-denken, mee-doen, etc.) is a vocabulary, not a navigation hierarchy.

---

## Technical stack

```
Website/
├── src/
│   ├── components/       # Astro components (Logo.astro, InteractiveCV, Timeline, etc.)
│   ├── content/          # All content as Markdown with YAML frontmatter
│   │   ├── cv/           # CV.md — single YAML file with items array (lowercase on Linux!)
│   │   ├── denken/       # Git submodule → github.com/maartjedamen/03_essays
│   │   ├── events/       # Events for Delen (bring-your-own-talent, urban-play-lab, etc.)
│   │   └── producten/    # Products/diensten for Doen
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   ├── denken/
│   │   │   └── [...slug].astro   # Dynamic detail page for denken entries
│   │   ├── doen/
│   │   │   └── [...slug].astro   # Dynamic detail page for producten entries
│   │   ├── index.astro
│   │   ├── denken.astro
│   │   ├── doen.astro
│   │   ├── delen.astro
│   │   └── over-mij.astro
│   └── styles/
├── astro.config.mjs
├── tailwind.config.js
└── package.json
```

Run locally with: `npm run dev` → `http://localhost:4321`
Build: `npm run build`

**Important (Windows ↔ Linux):** File and folder names are case-sensitive on Netlify's Linux server. Always use lowercase folder names (`cv/` not `CV/`, `Logo.astro` not `logo.astro`). Use `git mv` with a two-step rename trick if you need to change case on Windows.

---

## Deployment

**GitHub repos:**
- `github.com/maartjedamen/mee-maken` — website code (public)
- `github.com/maartjedamen/03_essays` — essays content (public, linked as submodule)

**Netlify:**
- Project: `guileless-profiterole-275121`
- URL: `guileless-profiterole-275121.netlify.app`
- Auto-deploys on every push to `main`
- Build command: `npm run build` / Publish directory: `dist`

**Domain:** `mee-maken.nl` via mijndomein.nl
- A record: `mee-maken.nl` → `75.2.60.5` (Netlify load balancer)
- A record: `www.mee-maken.nl` → `75.2.60.5`
- MX records: untouched (mijndomein handles email — migration to Proton Mail planned for later)

**Publishing workflow:**
1. Write in `02_ideas/` (Obsidian, private)
2. Move to `03_essays/` when ready, add correct frontmatter
3. In terminal from `03_essays/` folder:
   ```bash
   git add . && git commit -m "essay title" && git push
   ```
4. Site rebuilds on Netlify within ~60 seconds. Done.

---

## Knowledge stack — the core concept

Maartje's thinking moves through layers, from private to public:

```
01_notes/     → raw observations, fleeting thoughts (private Obsidian)
02_ideas/     → developing fragments, not yet essays (private Obsidian)
03_essays/    → finished or near-finished long-form pieces (→ website)
04_sources/   → references and reading material (private Obsidian)
```

**The website (`src/content/denken/`) is the public face of `03_essays/`.**

LinkedIn posts are a staging ground: they begin as `ongefilterd` (quick thinking, opinion) and can mature into proper essays. The website hosts both, but they should be clearly distinguished.

---

## Content structure for `src/content/denken/`

Every file in `denken/` must have this frontmatter:

```yaml
---
title: ""           # Required
subtitle: ""        # Required — the pointe of the piece
series: ""          # Required — see series keys below
date: ""            # ISO date (YYYY-MM-DD), optional but preferred
tags: []            # Array of thematic tags
externalUrl: ""     # Only for 'media' series — link to external publication
externalLabel: ""   # Only for 'media' series — name of the outlet
---
```

### Series keys (the knowledge stack on the website)

| series key | label on site | what goes here |
|---|---|---|
| `media` | publicaties | Externally published pieces (Binnenlands Bestuur, etc.). Always has `externalUrl`. |
| `essay` | essays | Maartje's own fully developed long-form writing. Stands alone without LinkedIn context. |
| `ongefilterd` | ongefilterde gedachten | LinkedIn posts and thinking-in-progress. Short, opinion-led, conversational. |
| `anders` | werk in uitvoering | Long-form drafts, book outlines, academic work in progress. Explicitly unfinished. |

### Current content map

| filename | series | notes |
|---|---|---|
| `Verre_van_aanwezig.md` | `media` | Published in Binnenlands Bestuur |
| `voordeur_voor_de_overheid.md` | `anders` | Fully developed essay — candidate for `essay` once finalised |
| `2026-02-06.md` | `anders` | Academic paper draft (sport/religion/immanence) — stays `anders` |
| `2026-02-05.md` | `anders` | Book outline/backbone — stays `anders`, is the most structural piece |
| `2026-01-07.md` | `ongefilterd` | Standalone post (Trump/Venezuela/schaal) — fits `ongefilterd` |
| `01_` through `08_` | `ongefilterd` | The LinkedIn writing experiment series |

**Graduation path:** `ongefilterd` → (rewritten, developed) → `essay`. Never auto-upgrade; always ask Maartje first.

---

## Design principles — non-negotiable

These were hard-won through many iterations. Do not deviate without asking.

**Voice & tone:**
- Direct, warm, slightly unexpected, intellectual without being academic
- Prose over bullets — always. The site should feel like a thinking person, not a product deck.
- No AI-sounding phrasing. No generic formulations. When in doubt: read a piece she has already written and match that register.
- Dutch throughout. Use `jij/je` register, not formal `u`.

**Visual / design:**
- Design axis: warm/human ↔ cold/architectural — Maartje positions closer to the architectural pole without losing the human
- Anti-stijl (what the site is NOT): not activist/geitenwollensokken, not stoer/hard/masculine, not cheerful icons, not AI-template
- Positive identity: academisch, intelligent, corporate enough for political audience, calm, personal
- Color: no sage, no loud/springy colors. Muted, architectural palette.
- Typography: Söhne-like heading (distinctive, architectural) + substantive body font. Inter+Literata was considered too template-like.
- The Delen page should feel slightly warmer than Denken and Doen — same design language, subtle temperature shift.

**Structure:**
- The three main sections (Denken / Doen / Delen) are the operative structure. Don't add sections without discussion.
- `mee-maken` is the overarching name and attitude, not a page.
- Sublabels (mee-denken, mee-bewegen, etc.) exist as vocabulary, not as navigation.

---

## Writing style — when helping Maartje write

- Match her existing pieces. Read `Verre_van_aanwezig.md` or `07_buiten_de_boot_vallen.md` as reference for register.
- She prefers sentences that convey a mode of thinking, not a list of facts.
- She is sensitive to when text "sounds like AI" — flag this proactively.
- Her positioning: "onderzoekend praktijkdenker in het publieke domein" — not a specialist or generalist, a bridge figure.
- Core identity: oud-topsporter (KNRB, TeamNL), MSc Building Technology TU Delft, governance & participatie professional.
- Key phrase that works: "beweegt zich als brugfiguur" — between policy and practice, between sport and civil service.

---

## Thematic content areas

These are the intellectual territories the site covers:

1. **Initiatiefgedreven democratie** — who can and may begin something?
2. **Impactgedreven democratie** — who gets affected by change?
3. **Ambtelijk vakmanschap** — who weighs this together, across scales?

Sport is not a separate domain — it is a lens. Topsport leert over maatschappelijke veerkracht, samenwerking en instituties.

---

## What to do if asked to add content

1. Ask: what series does this belong to? (`media` / `essay` / `ongefilterd` / `anders`)
2. Create the file in `src/content/denken/` with correct frontmatter
3. Filename convention: for LinkedIn-origin posts use `NN_short_slug.md`; for essays use descriptive slug in Dutch; for dated standalone posts use `YYYY-MM-DD.md`
4. Never change the `series` of an existing file without confirming with Maartje
5. Tags should be lowercase, hyphenated for multi-word: `ambtelijk-vakmanschap`, not `Ambtelijk Vakmanschap`

## What to do if asked to change the design

1. Check against the anti-stijl list above
2. Check against the design axis: does this push too far toward warm/human or too far toward cold/architectural?
3. Tailwind utility classes only — no custom CSS unless it's a design token in the base styles
4. The design token system (CSS variables for colors, fonts) is the single source of truth — don't hardcode colors

---

## Files NOT to touch without explicit instruction

- `BaseLayout.astro` — contains the full navigation, header, and footer logic
- `tailwind.config.js` — contains the full design token mapping
- `CV.md` — the single source of truth for the interactive CV timeline
- Any file in `content/CV/` or `content/events/` unless explicitly asked

---

## Relationship between website and Obsidian vault

The Obsidian vault (at `Documents/knowledge/`) is **private backstage**. The website is **public stage**. Specific mapping:

- `01_notes/` → never published directly
- `02_ideas/` → may become `ongefilterd` on the site when ready
- `03_essays/` → becomes `essay` or `media` on the site
- `04_sources/` → never published directly

The `src/content/denken/` folder mirrors `03_essays/` — it is the published layer of the knowledge stack. When syncing new content from Obsidian to the site, the piece should be in `03_essays/` before it goes into `src/content/denken/`.

---

## Quick reference: current pages

| URL | file | content source |
|---|---|---|
| `/` | `index.astro` | Static |
| `/denken` | `denken.astro` | `getCollection("denken")` |
| `/denken/[slug]` | `denken/[...slug].astro` | Individual denken entry |
| `/doen` | `doen.astro` | `getCollection("producten")` + CV |
| `/doen/[slug]` | `doen/[...slug].astro` | Individual producten entry |
| `/delen` | `delen.astro` | `getCollection("events")` |
| `/over-mij` | `over-mij.astro` | Static |

---

*This file should be updated whenever a significant structural decision is made about the site. Last updated: March 2026.*
