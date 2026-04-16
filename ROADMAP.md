# Beta Bay — Roadmap

Planned features and technical upgrades, roughly ordered by priority.

---

## 🤖 CruxBot Integration (High Priority)

Add an AI-powered climbing assistant directly on the site, backed by the [CruxBot](https://github.com/zongyang078/CruxBot) RAG system.

**What it does:** Users can ask climbing questions ("What grade should I start with?", "What's the approach to Castle Rock?") and get answers grounded in real climbing data.

**Planned architecture:**
- Deploy CruxBot retrieval backend to **Hugging Face Spaces** (free tier, no always-on VM required)
- Frontend chat widget in vanilla JS — floating button opens a modal-style chat panel
- Calls HF Spaces API endpoint with the user's query
- Returns grounded answers with source citations

**Tradeoffs considered:**

| Option | Pros | Cons |
|---|---|---|
| HF Spaces (planned) | Free, no VM cost, scales automatically | Cold start ~15-30s on free tier |
| GCP VM (current) | Low latency, full control | Must stay running = ongoing cost |
| Claude API only | Simplest integration, no infra | No RAG, loses climbing-specific grounding |
| Railway / Render | Free tier, auto-sleep | Cold start, less GPU control |

---

## 💾 RSVP Persistence

Currently RSVP submissions are in-memory only — a page refresh resets the participant list.

**Options:**
- `localStorage` — trivial to implement, persists in the same browser, no backend needed
- Simple JSON backend on a free service (Railway, Supabase free tier) — persists across devices
- Google Sheets API — write RSVPs to a spreadsheet, readable without a database

---

## 🗓️ Dynamic Schedule

Replace hardcoded schedule cards with data-driven rendering.

- Define events in a `schedule.json` file
- JS reads the file and generates cards dynamically
- Makes it easy to add/update events without touching HTML
- Opens the door to filtering by date, location, or difficulty level

---

## 🖼️ Photo Gallery

Add a scrollable gallery of climbing session photos.

- Lightbox on click (vanilla JS or a lightweight library like GLightbox)
- Lazy loading for performance
- Could pull from an Instagram embed or a static `/img/gallery/` folder

---

## ⚛️ React Migration

Migrate from vanilla HTML/CSS/JS to a React + Vite setup.

**Why:** Prepares the project for more complex state (chat widget, dynamic schedule, gallery), and aligns with WEB102 coursework.

**Rough migration path:**
1. Set up Vite + React
2. Break page into components: `Navbar`, `Header`, `ScheduleCard`, `RSVPForm`, `Modal`, `FAQ`
3. Replace DOM manipulation with React state (`useState`, `useEffect`)
4. Keep the same CSS design system — minimal visual changes

---

## 🔍 Route Difficulty Filter

Add a filter on the Schedule section so users can see events suitable for their skill level.

- Tag each event with a difficulty range (e.g. `V0-V4`, `5.10+`)
- JS filter buttons show/hide cards based on selected level
- No backend needed — purely client-side

---

## ♿ Accessibility Improvements

- Add `aria-label` attributes to buttons and form inputs
- Ensure keyboard navigation works across the full page
- Test color contrast ratios against WCAG AA standard
- `prefers-reduced-motion` media query to disable animations system-wide (currently handled manually via the Reduce Motion button)

---

## 📱 Mobile Layout

The current layout is desktop-first. A responsive mobile pass would include:

- Hamburger menu for navbar on small screens
- Single-column schedule cards below 600px
- Larger tap targets on form inputs and buttons
- Touch-friendly modal close behavior
