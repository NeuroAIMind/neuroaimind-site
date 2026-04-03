# Investor Pitch Deck Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build an 8-slide investor pitch deck as a new page in the existing Next.js site, presentable in browser with keyboard navigation.

**Architecture:** New route at `/pitch` with a client component that renders 8 full-viewport slides. CSS handles slide layout, transitions, and print export. JavaScript handles keyboard navigation (arrow keys) and slide state. All styling follows the existing brand system (Inter, IBM Plex Mono, #111 on white).

**Tech Stack:** Next.js 14 App Router, React 18, TypeScript, vanilla CSS (matching existing patterns)

---

## File Structure

| File | Purpose |
|---|---|
| `app/pitch/page.tsx` | Pitch deck page — 8 slides with keyboard navigation |
| `app/pitch/pitch.css` | Pitch-specific styles (slide layout, typography, visuals) |

No other files are created or modified. The existing `app/layout.tsx` provides fonts and metadata. The existing `app/globals.css` provides base reset and CSS variables.

---

### Task 1: Create the pitch page route with slide navigation

**Files:**
- Create: `app/pitch/page.tsx`

- [ ] **Step 1: Create the pitch page with slide navigation skeleton**

Create `app/pitch/page.tsx` with all 8 slides as empty sections and keyboard navigation:

```tsx
"use client";

import { useState, useEffect, useCallback } from "react";
import "./pitch.css";

const TOTAL_SLIDES = 8;

export default function PitchDeck() {
  const [current, setCurrent] = useState(0);

  const goTo = useCallback(
    (n: number) => setCurrent(Math.max(0, Math.min(TOTAL_SLIDES - 1, n))),
    []
  );

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "ArrowRight" || e.key === "ArrowDown" || e.key === " ") {
        e.preventDefault();
        goTo(current + 1);
      }
      if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        e.preventDefault();
        goTo(current - 1);
      }
      if (e.key === "Home") {
        e.preventDefault();
        goTo(0);
      }
      if (e.key === "End") {
        e.preventDefault();
        goTo(TOTAL_SLIDES - 1);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [current, goTo]);

  return (
    <div className="deck">
      <div
        className="deck-track"
        style={{ transform: `translateY(-${current * 100}vh)` }}
      >
        {/* Slide 1: Identity */}
        <section className="slide slide-identity">
          <div className="slide-content">
            <p>Slide 1</p>
          </div>
        </section>

        {/* Slide 2: The Problem */}
        <section className="slide slide-problem">
          <div className="slide-content">
            <p>Slide 2</p>
          </div>
        </section>

        {/* Slide 3: Our Approach */}
        <section className="slide slide-approach">
          <div className="slide-content">
            <p>Slide 3</p>
          </div>
        </section>

        {/* Slide 4: Team */}
        <section className="slide slide-team">
          <div className="slide-content">
            <p>Slide 4</p>
          </div>
        </section>

        {/* Slide 5: Validation */}
        <section className="slide slide-validation">
          <div className="slide-content">
            <p>Slide 5</p>
          </div>
        </section>

        {/* Slide 6: Roadmap */}
        <section className="slide slide-roadmap">
          <div className="slide-content">
            <p>Slide 6</p>
          </div>
        </section>

        {/* Slide 7: The Ask */}
        <section className="slide slide-ask">
          <div className="slide-content">
            <p>Slide 7</p>
          </div>
        </section>

        {/* Slide 8: Close */}
        <section className="slide slide-close">
          <div className="slide-content">
            <p>Slide 8</p>
          </div>
        </section>
      </div>

      {/* Slide counter */}
      <div className="deck-nav">
        <span className="deck-counter">
          {current + 1} / {TOTAL_SLIDES}
        </span>
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Create the base pitch CSS**

Create `app/pitch/pitch.css` with slide layout and navigation styles:

```css
/* Pitch Deck — full-viewport slide layout */

.deck {
  position: fixed;
  inset: 0;
  overflow: hidden;
  background: var(--bg);
}

.deck-track {
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  will-change: transform;
}

.slide {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.slide-content {
  width: min(880px, calc(100% - 4rem));
  max-height: calc(100vh - 6rem);
  overflow: hidden;
}

/* Slide counter */

.deck-nav {
  position: fixed;
  bottom: 1.5rem;
  right: 2rem;
  z-index: 10;
}

.deck-counter {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: var(--text-secondary);
}

/* Print / PDF export */

@media print {
  .deck {
    position: static;
    overflow: visible;
  }

  .deck-track {
    transform: none !important;
    transition: none;
  }

  .slide {
    height: 100vh;
    page-break-after: always;
    break-after: page;
  }

  .deck-nav {
    display: none;
  }
}
```

- [ ] **Step 3: Verify the page loads and navigation works**

Run: `cd "/Users/peng/Dropbox (Personal)/CODE/neuroaimind-site" && npm run dev`

Open `http://localhost:3000/pitch` in browser. Verify:
- Page loads with 8 placeholder slides
- Arrow keys navigate between slides
- Slide counter shows current position
- Transitions are smooth

- [ ] **Step 4: Commit**

```bash
cd "/Users/peng/Dropbox (Personal)/CODE/neuroaimind-site"
git add app/pitch/page.tsx app/pitch/pitch.css
git commit -m "feat: add pitch deck page with slide navigation skeleton"
```

---

### Task 2: Build Slide 1 — Identity + Mission

**Files:**
- Modify: `app/pitch/page.tsx` (slide-identity section)
- Modify: `app/pitch/pitch.css` (add slide-1 styles)

- [ ] **Step 1: Replace the Slide 1 placeholder with content**

In `app/pitch/page.tsx`, replace the slide-identity section:

```tsx
{/* Slide 1: Identity */}
<section className="slide slide-identity">
  <div className="slide-content identity-layout">
    <svg
      className="pitch-logo"
      width="72"
      height="72"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M46,8 L16,8 C8,8 8,16 8,24 L8,76 C8,84 14,92 24,92 L46,92 Z" fill="#111111" />
      <path d="M54,8 L88,8 L88,92 L54,92 Z" fill="#111111" />
      <rect x="8" y="47" width="38" height="6" fill="white" />
    </svg>
    <h1 className="pitch-tagline">Neurons to Mind. Brain to AI.</h1>
    <p className="pitch-subtitle">
      Bridging brain science and AI to advance mental health
    </p>
    <p className="pitch-desc">
      We build computational models that connect biological mechanisms
      of emotion to intelligent systems — and translate them into tools
      that advance mental health.
    </p>
    <p className="pitch-meta">
      NeuroAI Mind Labs&ensp;·&ensp;Gainesville, Florida&ensp;·&ensp;Independent
      Nonprofit Research Organization
    </p>
  </div>
</section>
```

- [ ] **Step 2: Add Slide 1 styles**

Append to `app/pitch/pitch.css`:

```css
/* Slide 1 — Identity */

.identity-layout {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
}

.pitch-logo {
  display: block;
}

.pitch-tagline {
  font-family: Georgia, "Times New Roman", serif;
  font-size: clamp(2rem, 5vw, 3.2rem);
  font-weight: 400;
  line-height: 1.3;
  letter-spacing: 0.04em;
  font-variant: small-caps;
  text-transform: capitalize;
}

.pitch-subtitle {
  font-family: var(--font-mono);
  font-size: 1rem;
  font-weight: 400;
  color: var(--text-secondary);
  letter-spacing: 0.02em;
}

.pitch-desc {
  font-size: 1.1rem;
  line-height: 1.7;
  color: var(--text);
  max-width: 640px;
}

.pitch-meta {
  font-family: var(--font-mono);
  font-size: 0.78rem;
  color: var(--text-secondary);
  letter-spacing: 0.02em;
}
```

- [ ] **Step 3: Verify Slide 1 in browser**

Refresh `http://localhost:3000/pitch`. Verify:
- Logo, tagline, subtitle, description, and meta line render correctly
- Typography matches the main site brand
- Content is centered and fits within the viewport

- [ ] **Step 4: Commit**

```bash
git add app/pitch/page.tsx app/pitch/pitch.css
git commit -m "feat: add Slide 1 — identity and mission"
```

---

### Task 3: Build Slide 2 — The Broken Paradigm

**Files:**
- Modify: `app/pitch/page.tsx` (slide-problem section)
- Modify: `app/pitch/pitch.css` (add slide-2 styles)

- [ ] **Step 1: Replace the Slide 2 placeholder with content**

In `app/pitch/page.tsx`, replace the slide-problem section:

```tsx
{/* Slide 2: The Problem */}
<section className="slide slide-problem">
  <div className="slide-content">
    <h2 className="slide-label">The Challenge</h2>
    <h3 className="slide-title">
      The crisis is growing. The science isn&rsquo;t keeping up.
    </h3>
    <div className="problem-points">
      <div className="problem-point">
        <h4 className="point-heading">The mental health crisis is accelerating</h4>
        <p>
          Depression, anxiety, addiction, and neurodegeneration are among the
          defining challenges of our time — yet treatments remain
          one-size-fits-all.
        </p>
      </div>
      <div className="problem-point">
        <h4 className="point-heading">Current science is fragmented</h4>
        <p>
          Research is siloed across cellular, circuit, system, and behavioral
          levels with no unifying framework connecting mechanism to function.
        </p>
      </div>
      <div className="problem-point">
        <h4 className="point-heading">AI doesn&rsquo;t help yet</h4>
        <p>
          Modern AI can model behavior, but it cannot explain how emotion
          emerges from biological systems or how humans truly think and feel.
        </p>
      </div>
    </div>
    <p className="slide-callout">
      We lack the ability to track, predict, and regulate emotional
      states — and current treatments fail to account for individual
      neural and physiological differences.
    </p>
  </div>
</section>
```

- [ ] **Step 2: Add Slide 2 styles**

Append to `app/pitch/pitch.css`:

```css
/* Shared slide typography */

.slide-label {
  font-family: var(--font-mono);
  font-size: 0.78rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--text-secondary);
  margin-bottom: 0.75rem;
}

.slide-title {
  font-family: Georgia, "Times New Roman", serif;
  font-size: clamp(1.4rem, 3.5vw, 2.2rem);
  font-weight: 400;
  line-height: 1.35;
  letter-spacing: 0.02em;
  margin-bottom: 2rem;
}

.slide-callout {
  font-size: 1.05rem;
  font-weight: 500;
  line-height: 1.6;
  font-style: italic;
  border-left: 3px solid #6366f1;
  padding: 0.75rem 1.25rem;
  margin-top: 2rem;
  color: var(--text);
}

/* Slide 2 — Problem */

.problem-points {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.point-heading {
  font-family: var(--font-body);
  font-size: 0.95rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.problem-point p {
  font-size: 0.92rem;
  line-height: 1.7;
  color: var(--text-secondary);
}

@media (max-width: 720px) {
  .problem-points {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
}
```

- [ ] **Step 3: Verify Slide 2 in browser**

Navigate to Slide 2 with arrow key. Verify:
- Label, title, three problem columns, and callout render correctly
- Three-column grid is responsive (stacks on narrow viewports)
- Callout has indigo left border

- [ ] **Step 4: Commit**

```bash
git add app/pitch/page.tsx app/pitch/pitch.css
git commit -m "feat: add Slide 2 — the broken paradigm"
```

---

### Task 4: Build Slide 3 — Our Approach

**Files:**
- Modify: `app/pitch/page.tsx` (slide-approach section)
- Modify: `app/pitch/pitch.css` (add slide-3 styles)

- [ ] **Step 1: Replace the Slide 3 placeholder with content**

In `app/pitch/page.tsx`, replace the slide-approach section:

```tsx
{/* Slide 3: Our Approach */}
<section className="slide slide-approach">
  <div className="slide-content">
    <h2 className="slide-label">Our Approach</h2>
    <h3 className="slide-title">
      A closed-loop framework from neurons to mind
    </h3>
    <p className="approach-intro">
      We integrate biology, psychology, neuroscience, and AI into a
      single closed-loop framework that studies how emotion emerges and
      evolves across scales.
    </p>
    <div className="framework-layers">
      <div className="layer">
        <h4 className="layer-name">Biological Mechanisms</h4>
        <p>
          Cellular basis of emotion, neural populations, brain circuits,
          brain-body coupling
        </p>
      </div>
      <div className="layer-arrow">&darr;</div>
      <div className="layer">
        <h4 className="layer-name">Data Integration</h4>
        <p>
          Neural, physiological, and behavioral data unified into
          structured datasets
        </p>
      </div>
      <div className="layer-arrow">&darr;</div>
      <div className="layer">
        <h4 className="layer-name">Computational Modeling</h4>
        <p>
          Models that infer latent emotional states, predict their
          evolution, simulate outcomes
        </p>
      </div>
      <div className="layer-arrow">&darr;</div>
      <div className="layer">
        <h4 className="layer-name">Actionable Intelligence</h4>
        <p>
          Closed-loop systems that test hypotheses, guide interventions
          in real-time, adapt dynamically
        </p>
      </div>
    </div>
    <p className="slide-callout">
      Our models are not only descriptive — they are actionable. They
      enable real-time intervention guided by biological mechanism, not
      surface-level behavior.
    </p>
  </div>
</section>
```

- [ ] **Step 2: Add Slide 3 styles**

Append to `app/pitch/pitch.css`:

```css
/* Slide 3 — Approach */

.approach-intro {
  font-size: 1.05rem;
  line-height: 1.7;
  color: var(--text-secondary);
  margin-bottom: 2rem;
  max-width: 640px;
}

.framework-layers {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 0;
}

.layer {
  padding: 0.9rem 1.25rem;
  border: 1px solid var(--border);
  border-radius: 4px;
}

.layer-name {
  font-family: var(--font-mono);
  font-size: 0.82rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-bottom: 0.3rem;
}

.layer p {
  font-size: 0.9rem;
  line-height: 1.6;
  color: var(--text-secondary);
}

.layer-arrow {
  text-align: center;
  font-size: 1.2rem;
  color: var(--text-secondary);
  padding: 0.25rem 0;
}
```

- [ ] **Step 3: Verify Slide 3 in browser**

Navigate to Slide 3. Verify:
- Four layers stack vertically with arrows between them
- Each layer has a bordered card appearance
- Callout renders at bottom with indigo border

- [ ] **Step 4: Commit**

```bash
git add app/pitch/page.tsx app/pitch/pitch.css
git commit -m "feat: add Slide 3 — closed-loop framework approach"
```

---

### Task 5: Build Slide 4 — Founder & Team

**Files:**
- Modify: `app/pitch/page.tsx` (slide-team section)
- Modify: `app/pitch/pitch.css` (add slide-4 styles)

- [ ] **Step 1: Replace the Slide 4 placeholder with content**

In `app/pitch/page.tsx`, replace the slide-team section:

```tsx
{/* Slide 4: Team */}
<section className="slide slide-team">
  <div className="slide-content">
    <h2 className="slide-label">Founder &amp; Team</h2>
    <h3 className="slide-title">
      Built at the intersection of neuroscience and AI
    </h3>
    <div className="team-grid">
      <div className="team-founder">
        <h4 className="point-heading">Founder</h4>
        <ul className="team-list">
          <li>Years of research in NeuroAI and emotion perception</li>
          <li>NSF-funded principal investigator</li>
          <li>
            Deep roots in the University of Florida neuroscience and AI
            ecosystem
          </li>
        </ul>
        <p className="team-edge">
          This work requires someone who lives in both worlds — who
          understands neural mechanisms AND can build the computational
          models. That intersection is rare. We&rsquo;ve been working in
          it for years.
        </p>
      </div>
      <div className="team-network">
        <h4 className="point-heading">Collaborators &amp; Mentors</h4>
        <ul className="team-list">
          <li>
            Active research partnerships with UF faculty across
            neuroscience, AI, and biomedical engineering
          </li>
          <li>
            Established network of mentors and researchers contributing
            to the scientific foundation
          </li>
        </ul>
        <h4 className="point-heading" style={{ marginTop: "1.25rem" }}>
          Planned Y1 Hires
        </h4>
        <ul className="team-list">
          <li>Computational neuroscientists</li>
          <li>AI / ML researchers</li>
          <li>Research engineers</li>
        </ul>
      </div>
    </div>
  </div>
</section>
```

- [ ] **Step 2: Add Slide 4 styles**

Append to `app/pitch/pitch.css`:

```css
/* Slide 4 — Team */

.team-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2.5rem;
}

.team-list {
  list-style: none;
  padding: 0;
}

.team-list li {
  font-size: 0.92rem;
  line-height: 1.7;
  color: var(--text-secondary);
  padding-left: 1rem;
  position: relative;
  margin-bottom: 0.4rem;
}

.team-list li::before {
  content: "—";
  position: absolute;
  left: 0;
  color: var(--text-secondary);
}

.team-edge {
  font-size: 0.92rem;
  line-height: 1.7;
  font-style: italic;
  color: var(--text);
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid var(--border);
}

@media (max-width: 720px) {
  .team-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}
```

- [ ] **Step 3: Verify Slide 4 in browser**

Navigate to Slide 4. Verify:
- Two-column layout: founder left, network + hires right
- List items use em-dash bullets
- Italic "edge" paragraph has top border separator
- Responsive: stacks on mobile

- [ ] **Step 4: Commit**

```bash
git add app/pitch/page.tsx app/pitch/pitch.css
git commit -m "feat: add Slide 4 — founder and team"
```

---

### Task 6: Build Slide 5 — Validation

**Files:**
- Modify: `app/pitch/page.tsx` (slide-validation section)
- Modify: `app/pitch/pitch.css` (add slide-5 styles)

- [ ] **Step 1: Replace the Slide 5 placeholder with content**

In `app/pitch/page.tsx`, replace the slide-validation section:

```tsx
{/* Slide 5: Validation */}
<section className="slide slide-validation">
  <div className="slide-content">
    <h2 className="slide-label">Validation</h2>
    <h3 className="slide-title">Research foundation already in place</h3>
    <div className="validation-columns">
      <div className="validation-col">
        <h4 className="point-heading">Publications &amp; Research</h4>
        <ul className="team-list">
          <li>
            Peer-reviewed publications in NeuroAI and emotion perception
          </li>
          <li>
            Established research track in computational modeling of
            brain-body systems
          </li>
          <li>
            Builds on years of foundational science, not starting from
            scratch
          </li>
        </ul>
      </div>
      <div className="validation-col">
        <h4 className="point-heading">Institutional Partnerships</h4>
        <ul className="team-list">
          <li>
            Active collaborations with University of Florida researchers
            and labs
          </li>
          <li>
            Access to UF&rsquo;s neuroscience, AI, and biomedical
            infrastructure
          </li>
          <li>
            Working within one of the top public research university
            ecosystems
          </li>
        </ul>
      </div>
      <div className="validation-col">
        <h4 className="point-heading">Prior Funding</h4>
        <ul className="team-list">
          <li>
            NSF-funded research — the work has already passed rigorous
            federal peer review
          </li>
        </ul>
        <p className="validation-signal">
          This isn&rsquo;t a hypothesis. It&rsquo;s a research program with
          federal validation.
        </p>
      </div>
    </div>
  </div>
</section>
```

- [ ] **Step 2: Add Slide 5 styles**

Append to `app/pitch/pitch.css`:

```css
/* Slide 5 — Validation */

.validation-columns {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.validation-signal {
  font-size: 0.92rem;
  line-height: 1.6;
  font-weight: 500;
  font-style: italic;
  color: var(--text);
  margin-top: 1rem;
  padding-top: 0.75rem;
  border-top: 1px solid var(--border);
}

@media (max-width: 720px) {
  .validation-columns {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
}
```

- [ ] **Step 3: Verify Slide 5 in browser**

Navigate to Slide 5. Verify:
- Three columns render with headings and lists
- "Federal validation" callout is italicized with top border
- Responsive: stacks on mobile

- [ ] **Step 4: Commit**

```bash
git add app/pitch/page.tsx app/pitch/pitch.css
git commit -m "feat: add Slide 5 — validation and proof points"
```

---

### Task 7: Build Slide 6 — Roadmap

**Files:**
- Modify: `app/pitch/page.tsx` (slide-roadmap section)
- Modify: `app/pitch/pitch.css` (add slide-6 styles)

- [ ] **Step 1: Replace the Slide 6 placeholder with content**

In `app/pitch/page.tsx`, replace the slide-roadmap section:

```tsx
{/* Slide 6: Roadmap */}
<section className="slide slide-roadmap">
  <div className="slide-content">
    <h2 className="slide-label">Roadmap</h2>
    <h3 className="slide-title">
      From foundation to translation in 24 months
    </h3>
    <div className="roadmap-phases">
      <div className="phase">
        <div className="phase-badge">Year 1</div>
        <h4 className="point-heading">Build the Engine</h4>
        <ul className="team-list">
          <li>
            Recruit core research team — computational neuroscientists,
            AI/ML researchers
          </li>
          <li>Build computational infrastructure and data pipelines</li>
          <li>
            Establish formal research partnerships and data-sharing
            agreements
          </li>
          <li>
            Publish foundational work establishing the closed-loop
            framework
          </li>
        </ul>
      </div>
      <div className="phase-connector">
        <span className="connector-line" />
        <span className="connector-arrow">&rarr;</span>
        <span className="connector-line" />
      </div>
      <div className="phase">
        <div className="phase-badge">Year 2</div>
        <h4 className="point-heading">Prove the Model</h4>
        <ul className="team-list">
          <li>
            Launch pilot study applying framework to a specific
            condition (e.g., depression, anxiety)
          </li>
          <li>
            Develop prototype tool for monitoring / predicting emotional
            states
          </li>
          <li>Generate preliminary clinical evidence</li>
          <li>
            Position for larger grants — NIH R01, DARPA, major
            foundation programs
          </li>
        </ul>
      </div>
    </div>
    <p className="slide-callout">
      Year 1 builds the team and platform. Year 2 proves it works. Each
      milestone is designed to unlock the next stage of funding.
    </p>
  </div>
</section>
```

- [ ] **Step 2: Add Slide 6 styles**

Append to `app/pitch/pitch.css`:

```css
/* Slide 6 — Roadmap */

.roadmap-phases {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 1rem;
  align-items: start;
}

.phase {
  padding: 1.25rem;
  border: 1px solid var(--border);
  border-radius: 4px;
}

.phase-badge {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #6366f1;
  margin-bottom: 0.5rem;
}

.phase-connector {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding-top: 2.5rem;
}

.connector-line {
  display: block;
  width: 1rem;
  height: 1px;
  background: var(--border);
}

.connector-arrow {
  font-size: 1rem;
  color: var(--text-secondary);
}

@media (max-width: 720px) {
  .roadmap-phases {
    grid-template-columns: 1fr;
  }

  .phase-connector {
    justify-content: center;
    padding-top: 0;
    transform: rotate(90deg);
  }
}
```

- [ ] **Step 3: Verify Slide 6 in browser**

Navigate to Slide 6. Verify:
- Two phase cards side by side with arrow connector
- Phase badges are indigo colored
- Lists use em-dash bullets (reusing `.team-list` class)
- Callout renders at bottom
- Responsive: stacks vertically on mobile

- [ ] **Step 4: Commit**

```bash
git add app/pitch/page.tsx app/pitch/pitch.css
git commit -m "feat: add Slide 6 — 24-month roadmap"
```

---

### Task 8: Build Slide 7 — The Ask

**Files:**
- Modify: `app/pitch/page.tsx` (slide-ask section)
- Modify: `app/pitch/pitch.css` (add slide-7 styles)

- [ ] **Step 1: Replace the Slide 7 placeholder with content**

In `app/pitch/page.tsx`, replace the slide-ask section:

```tsx
{/* Slide 7: The Ask */}
<section className="slide slide-ask">
  <div className="slide-content">
    <h2 className="slide-label">The Ask</h2>
    <h3 className="slide-title">
      Invest in the science that closes the gap
    </h3>
    <p className="ask-amount">$500K – $3M seed funding</p>
    <div className="ask-table">
      <div className="ask-row">
        <span className="ask-investment">Research team (3–5 hires)</span>
        <span className="ask-outcome">
          The core team that builds the framework
        </span>
      </div>
      <div className="ask-row">
        <span className="ask-investment">
          Computational infrastructure
        </span>
        <span className="ask-outcome">
          Platform to integrate multi-scale brain-body data
        </span>
      </div>
      <div className="ask-row">
        <span className="ask-investment">Pilot study (Y2)</span>
        <span className="ask-outcome">
          First proof that the closed-loop model works clinically
        </span>
      </div>
      <div className="ask-row">
        <span className="ask-investment">
          Publications &amp; partnerships
        </span>
        <span className="ask-outcome">
          Credibility engine for next-stage funding
        </span>
      </div>
    </div>
    <p className="slide-callout">
      NSF has already validated the science. UF provides the ecosystem.
      Your funding is the bridge between proven research and a prototype
      that could change how we approach mental health — at a fraction of
      what it would cost to build from zero.
    </p>
  </div>
</section>
```

- [ ] **Step 2: Add Slide 7 styles**

Append to `app/pitch/pitch.css`:

```css
/* Slide 7 — The Ask */

.ask-amount {
  font-family: Georgia, "Times New Roman", serif;
  font-size: 1.8rem;
  font-weight: 400;
  letter-spacing: 0.02em;
  margin-bottom: 2rem;
}

.ask-table {
  display: flex;
  flex-direction: column;
  gap: 0;
  border: 1px solid var(--border);
  border-radius: 4px;
  overflow: hidden;
}

.ask-row {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 1.5rem;
  padding: 0.85rem 1.25rem;
  border-bottom: 1px solid var(--border);
}

.ask-row:last-child {
  border-bottom: none;
}

.ask-investment {
  font-family: var(--font-mono);
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--text);
}

.ask-outcome {
  font-size: 0.9rem;
  line-height: 1.5;
  color: var(--text-secondary);
}

@media (max-width: 720px) {
  .ask-row {
    grid-template-columns: 1fr;
    gap: 0.25rem;
  }
}
```

- [ ] **Step 3: Verify Slide 7 in browser**

Navigate to Slide 7. Verify:
- Large funding amount displayed prominently
- Table rows render in a bordered card
- Investment/outcome columns align properly
- Callout renders at bottom
- Responsive: stacks on mobile

- [ ] **Step 4: Commit**

```bash
git add app/pitch/page.tsx app/pitch/pitch.css
git commit -m "feat: add Slide 7 — the ask and bargain framing"
```

---

### Task 9: Build Slide 8 — Close

**Files:**
- Modify: `app/pitch/page.tsx` (slide-close section)
- Modify: `app/pitch/pitch.css` (add slide-8 styles)

- [ ] **Step 1: Replace the Slide 8 placeholder with content**

In `app/pitch/page.tsx`, replace the slide-close section:

```tsx
{/* Slide 8: Close */}
<section className="slide slide-close">
  <div className="slide-content close-layout">
    <div className="close-stakes">
      <p>
        Every year, the mental health crisis deepens — depression,
        anxiety, addiction, neurodegeneration continue to grow while
        treatments remain one-size-fits-all.
      </p>
      <p>
        The science to change this exists across fragmented
        disciplines — but without a unifying effort, it stays in silos,
        published and unused.
      </p>
      <p className="close-emphasis">
        The gap between what we know about the brain and what we can do
        for people in crisis is not shrinking. It is growing.
      </p>
    </div>
    <div className="close-cta">
      <p className="close-line">
        NeuroAI Mind Labs exists to close that gap.
      </p>
      <p className="close-tagline">Neurons to Mind. Brain to AI.</p>
      <p className="close-invite">
        We&rsquo;re ready to build — and we&rsquo;re asking you to build
        with us.
      </p>
    </div>
    <div className="close-contact">
      <svg
        className="pitch-logo"
        width="40"
        height="40"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M46,8 L16,8 C8,8 8,16 8,24 L8,76 C8,84 14,92 24,92 L46,92 Z" fill="#111111" />
        <path d="M54,8 L88,8 L88,92 L54,92 Z" fill="#111111" />
        <rect x="8" y="47" width="38" height="6" fill="white" />
      </svg>
      <p className="pitch-meta">info@neuroaimind.org</p>
    </div>
  </div>
</section>
```

- [ ] **Step 2: Add Slide 8 styles**

Append to `app/pitch/pitch.css`:

```css
/* Slide 8 — Close */

.close-layout {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
}

.close-stakes p {
  font-size: 1rem;
  line-height: 1.8;
  color: var(--text-secondary);
  margin-bottom: 0.6rem;
}

.close-emphasis {
  font-weight: 500;
  font-style: italic;
  color: var(--text) !important;
  margin-top: 0.5rem;
}

.close-cta {
  text-align: center;
}

.close-line {
  font-size: 1.15rem;
  font-weight: 500;
  color: var(--text);
  margin-bottom: 0.5rem;
}

.close-tagline {
  font-family: Georgia, "Times New Roman", serif;
  font-size: clamp(1.6rem, 4vw, 2.4rem);
  font-weight: 400;
  letter-spacing: 0.04em;
  font-variant: small-caps;
  text-transform: capitalize;
  margin-bottom: 0.75rem;
}

.close-invite {
  font-size: 1rem;
  color: var(--text-secondary);
}

.close-contact {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
}
```

- [ ] **Step 3: Verify Slide 8 in browser**

Navigate to Slide 8. Verify:
- Stakes paragraphs render with emphasis on the key line
- Tagline is large and centered
- Logo + email at bottom
- Clean, minimal closing feel

- [ ] **Step 4: Commit**

```bash
git add app/pitch/page.tsx app/pitch/pitch.css
git commit -m "feat: add Slide 8 — cost of inaction and close"
```

---

### Task 10: Final polish and full walkthrough

**Files:**
- Modify: `app/pitch/page.tsx` (metadata)
- Verify all slides end-to-end

- [ ] **Step 1: Add page metadata**

Add a metadata export. Since the page uses `"use client"`, we need a separate `layout.tsx` for metadata. Create `app/pitch/layout.tsx`:

```tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NeuroAI Mind Labs — Investor Pitch",
  description:
    "Bridging brain science and AI to advance mental health. Seed funding pitch deck.",
};

export default function PitchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
```

- [ ] **Step 2: Build the project to check for errors**

Run: `cd "/Users/peng/Dropbox (Personal)/CODE/neuroaimind-site" && npm run build`

Expected: Build completes with no errors. The `/pitch` route appears in the build output.

- [ ] **Step 3: Full walkthrough in browser**

Run: `npm run dev`

Open `http://localhost:3000/pitch` and verify all 8 slides:
1. Identity — logo, tagline, subtitle, description, meta
2. Problem — three columns, callout
3. Approach — four-layer framework, callout
4. Team — two-column layout, founder + network
5. Validation — three columns, signal callout
6. Roadmap — two phases with connector, callout
7. Ask — amount, table, bargain callout
8. Close — stakes, tagline, contact

Verify keyboard navigation (arrows, Home, End, Space). Verify print layout (Cmd+P should show all slides).

- [ ] **Step 4: Commit**

```bash
git add app/pitch/layout.tsx
git commit -m "feat: add pitch layout with metadata, complete pitch deck"
```
