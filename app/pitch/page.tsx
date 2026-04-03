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
