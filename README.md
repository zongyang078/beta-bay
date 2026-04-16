# Beta Bay 🧗

A climbing community event website for Bay Area climbers — built as a fully static, interactive single-page site with vanilla HTML, CSS, and JavaScript.

![Hero Section](./img/screenshots/hero.png)

---

## Overview

Beta Bay is a weekly climbing meetup connecting Bay Area climbers of all skill levels. This website serves as the public-facing event portal: attendees can learn about the event, browse the schedule, RSVP, and get answers to common questions — all in one place.

The site is intentionally built without frameworks or build tools to demonstrate core web fundamentals: semantic HTML, custom CSS design systems, and vanilla JS DOM manipulation.

---

## Features

### Core
- **RSVP Form** — validated form with real-time error highlighting; submissions append to a live participant list
- **Form Validation** — checks field length and email format (`@` symbol) before accepting a submission
- **Success Modal** — animated thank-you popup on valid RSVP, personalized with the user's name, auto-dismisses after 8 seconds

### UI / UX
- **Dark Mode** — full site theme toggle, persists within session
- **Reduce Motion** — navbar toggle that disables modal image animation for users with motion sensitivity
- **Scroll Fade-in** — sections animate into view as the user scrolls down the page
- **Navbar Underline Animation** — smooth left-to-right underline slide on hover using CSS `::after`
- **Schedule Card Hover** — cards lift on hover with a subtle shadow effect
- **RSVP Highlight Animation** — new participant entries flash green on arrival

### Content
- **Event Schedule** — clickable cards linking to Google Maps / Mountain Project for each location
- **Safety & Requirements** — icon grid summarizing gear and certification requirements
- **FAQ** — accordion-style expandable questions using native HTML `<details>` / `<summary>`

---

## Screenshots

| | |
|---|---|
| ![Schedule](./img/screenshots/schedule.png) | ![RSVP Modal](./img/screenshots/modal.png) |
| Schedule cards with hover + Maps links | RSVP success modal with animation |

| | |
|---|---|
| ![FAQ](./img/screenshots/faq.png) | ![Dark Mode](./img/screenshots/dark-mode.png) |
| FAQ accordion | Dark mode |

---

## Tech Stack

| Layer | Choice | Notes |
|---|---|---|
| Structure | HTML5 | Semantic elements, native `<details>` for FAQ |
| Styling | CSS3 | Custom properties (design tokens), Flexbox, Grid, `@keyframes` |
| Behavior | Vanilla JS (ES6+) | DOM manipulation, `IntersectionObserver`, `setInterval` / `setTimeout` |
| Hosting | GitHub Pages | Static, no build step required |

No frameworks. No dependencies. No build tools.

---

## Design System

The site uses a **Granite & Moss** color palette — earthy tones inspired by Bay Area rock and trail.

```css
--bg-color:           #f4f1eb   /* warm stone */
--text-color:         #2c3e2d   /* deep forest */
--moss:               #6b8f6b   /* sage green */
--terracotta:         #e07b4c   /* sunset orange */
--sand:               #d4c9b0   /* dry trail */
--accent-color-darkest: #1a2a1b /* dark canopy */
```

Typography uses **Courier New** for headings (gives a route-guidebook feel) and **Helvetica Neue** for body text.

---

## Project Structure

```
beta-bay/
├── index.html          # Page structure and content
├── index.js            # All interactive behavior
├── styles.css          # Design system and layout
└── img/
    ├── logo-betabay.svg
    ├── movement-gym.jpg
    ├── planet-granite.jpg
    ├── castle-rock.jpg
    └── screenshots/
        ├── hero.png
        ├── schedule.png
        ├── modal.png
        ├── faq.png
        └── dark-mode.png
```

---

## Running Locally

No installation required.

```bash
git clone https://github.com/zongyang078/beta-bay.git
cd beta-bay
```

Then open `index.html` in a browser, or use the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension in VS Code for auto-reload on save.

---

## Roadmap

See [ROADMAP.md](./ROADMAP.md) for planned features and technical upgrades.

---

## Author

Built by [Zoe (Zongyang Li)](https://github.com/zongyang078) — MSDS student at Northeastern University, Silicon Valley campus.
