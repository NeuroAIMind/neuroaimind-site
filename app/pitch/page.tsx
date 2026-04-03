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
            <div className="logo-block-pitch">
              <svg
                className="pitch-logo"
                width="80"
                height="80"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M46,8 L16,8 C8,8 8,16 8,24 L8,76 C8,84 14,92 24,92 L46,92 Z" fill="#111111" />
                <path d="M54,8 L88,8 L88,92 L54,92 Z" fill="#111111" />
                <rect x="8" y="47" width="38" height="6" fill="white" />
              </svg>
              <div className="logo-text-pitch">
                <span className="logo-line-pitch"><strong>NeuroAI</strong></span>
                <span className="logo-line-pitch"><strong>Mind</strong> <span className="labs-pitch">Labs</span></span>
              </div>
            </div>
            <h1 className="pitch-tagline">Neurons to Mind. Brain to AI.</h1>
            <p className="pitch-subtitle">
              Bridging brain science and AI to advance mental health
            </p>
            <p className="pitch-meta">
              Gainesville, Florida, USA&ensp;·&ensp;Nonprofit Research Organization
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
            <div className="problem-icons">
              <div className="icon-col">
                <div className="icon-circle">&#x26A0;</div>
                <h4 className="icon-label">Crisis Accelerating</h4>
                <p className="icon-sub">Depression, anxiety, addiction<br />growing unchecked</p>
              </div>
              <div className="icon-col">
                <div className="icon-circle">&#x29C9;</div>
                <h4 className="icon-label">Science Fragmented</h4>
                <p className="icon-sub">Cells, circuits, systems, behavior<br />studied in silos</p>
              </div>
              <div className="icon-col">
                <div className="icon-circle">&times;</div>
                <h4 className="icon-label">AI Falls Short</h4>
                <p className="icon-sub">Models behavior, not how<br />emotion truly works</p>
              </div>
            </div>
            <div className="callout-bar">
              Current treatments fail to account for individual neural and physiological differences.
            </div>
          </div>
        </section>

        {/* Slide 3: Our Approach */}
        <section className="slide slide-approach">
          <div className="slide-content">
            <h2 className="slide-label">Our Approach</h2>
            <h3 className="slide-title">
              A closed-loop framework from neurons to mind
            </h3>
            <div className="loop-diagram">
              <div className="loop-node node-top">
                <strong>Biology</strong>
                <span>Neural populations<br />Brain-body coupling</span>
              </div>
              <div className="loop-arrow arrow-tr">&#x2198;</div>
              <div className="loop-node node-right">
                <strong>Data</strong>
                <span>Neural, physiological<br />behavioral integration</span>
              </div>
              <div className="loop-arrow arrow-br">&#x2199;</div>
              <div className="loop-node node-bottom">
                <strong>Models</strong>
                <span>Predict emotional states<br />Simulate outcomes</span>
              </div>
              <div className="loop-arrow arrow-bl">&#x2196;</div>
              <div className="loop-node node-left">
                <strong>Action</strong>
                <span>Real-time intervention<br />Closed-loop feedback</span>
              </div>
              <div className="loop-arrow arrow-tl">&#x2197;</div>
              <div className="loop-center">Closed<br />Loop</div>
            </div>
            <p className="slide-bottom-line">
              Descriptive + Actionable — real-time intervention guided by biological mechanism
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
            <div className="team-network">
              <div className="team-satellite">
                <strong>UF Neuroscience<br />Faculty</strong>
              </div>
              <div className="team-satellite">
                <strong>Research<br />Mentors</strong>
              </div>
              <div className="team-center">
                <strong>Founder</strong>
                <span>NeuroAI &times; Emotion<br />Years of Research<br />UF Ecosystem</span>
              </div>
              <div className="team-satellite">
                <strong>UF AI &amp; BME<br />Researchers</strong>
              </div>
              <div className="team-satellite">
                <strong>Y1 Hires<br />(3&ndash;5 researchers)</strong>
              </div>
            </div>
            <p className="slide-bottom-line">
              &ldquo;This work requires someone at the intersection of neuroscience and AI. That intersection is rare.&rdquo;
            </p>
          </div>
        </section>

        {/* Slide 5: Validation */}
        <section className="slide slide-validation">
          <div className="slide-content">
            <h2 className="slide-label">Validation</h2>
            <h3 className="slide-title">Research foundation already in place</h3>
            <div className="proof-cards">
              <div className="proof-card">
                <div className="proof-icon">&#x1F4CB;</div>
                <h4>Peer-Reviewed</h4>
                <p className="proof-label">Publications</p>
                <p className="proof-sub">NeuroAI &amp; emotion perception<br />Computational brain-body models</p>
              </div>
              <div className="proof-card">
                <div className="proof-icon">&#x1F3DB;</div>
                <h4>University of Florida</h4>
                <p className="proof-label">Collaborations</p>
                <p className="proof-sub">Active lab partnerships<br />Top public research university</p>
              </div>
              <div className="proof-card">
                <div className="proof-icon">&#x2714;&#xFE0E;</div>
                <h4>NSF</h4>
                <p className="proof-label">Funded</p>
                <p className="proof-sub">Federal peer review passed<br />Validated research program</p>
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
            <div className="timeline">
              <div className="timeline-bar" />
              <div className="milestone milestone-y1">
                <div className="milestone-dot">Y1</div>
                <h4>Build the Engine</h4>
                <p>Hire team · Infrastructure<br />Partnerships · Publish</p>
              </div>
              <div className="timeline-arrow">&#x25B6;&#xFE0E;</div>
              <div className="milestone milestone-y2">
                <div className="milestone-dot">Y2</div>
                <h4>Prove the Model</h4>
                <p>Pilot study · Prototype tool<br />Clinical evidence · Major grant ready</p>
              </div>
            </div>
            <div className="callout-bar">
              Each milestone unlocks the next stage of funding.
            </div>
          </div>
        </section>

        {/* Slide 7: The Ask */}
        <section className="slide slide-ask">
          <div className="slide-content ask-layout">
            <h2 className="slide-label">The Ask</h2>
            <p className="ask-amount">$1M &ndash; $3M</p>
            <p className="ask-sub">seed funding</p>
            <div className="ask-cards">
              <div className="ask-card">
                <div className="ask-icon">&#x1F465;</div>
                <h4>Research Team</h4>
                <p>3&ndash;5 hires</p>
              </div>
              <div className="ask-card">
                <div className="ask-icon">&#x2699;</div>
                <h4>Infrastructure</h4>
                <p>Compute &amp; data</p>
              </div>
              <div className="ask-card">
                <div className="ask-icon">&#x1F9EA;</div>
                <h4>Pilot Study</h4>
                <p>Y2 clinical proof</p>
              </div>
              <div className="ask-card">
                <div className="ask-icon">&#x1F52C;</div>
                <h4>Partnerships</h4>
                <p>Research collaborations</p>
              </div>
            </div>
            <div className="callout-bar">
              Science is ready · Team is ready · Your funding bridges research to prototype
            </div>
          </div>
        </section>

        {/* Slide 8: Close */}
        <section className="slide slide-close">
          <div className="slide-content close-layout">
            <h1 className="close-tagline">Neurons to Mind. Brain to AI.</h1>
            <div className="close-divider" />
            <p className="close-invite">
              We&rsquo;re ready to build — and we&rsquo;re asking you to build with us.
            </p>
            <p className="pitch-meta">info@neuroaimind.org</p>
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
