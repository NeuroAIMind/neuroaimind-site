"use client";

import { useEffect } from "react";

export default function HomePage() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <main>
      <header className="site-header">
        <div className="container">
          <div className="logo-block">
            <svg
              className="logo-mark"
              width="76"
              height="76"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Left half: organic (rounded corner) */}
              <path className="logo-brain" d="M46,8 L16,8 C8,8 8,16 8,24 L8,76 C8,84 14,92 24,92 L46,92 Z" fill="#111111" />
              {/* Right half: geometric (sharp corners) */}
              <path className="logo-ai" d="M54,8 L88,8 L88,92 L54,92 Z" fill="#111111" />
              {/* Single half cut on left side */}
              <rect x="8" y="47" width="38" height="6" fill="white" />
            </svg>
            <div className="logo-text">
              <span className="logo-line"><strong>NeuroAI</strong></span>
              <span className="logo-line"><strong>Mind</strong> <span className="labs">Labs</span></span>
            </div>
          </div>
        </div>
      </header>

      <section className="hero">
        <div className="container">
          <h1 className="hero-tagline">Neurons to Mind. Brain to AI.</h1>
        </div>
      </section>

      <section className="intro-section fade-in">
        <div className="container">
          <p className="intro-text">
            We combine neuroscience and AI to understand how neural systems
            produce emotion, social cognition, and behavior—and to translate
            these insights into AI that serves humanity. By grounding models in
            the brain, we aim to build systems aligned with how humans think
            and feel.
          </p>
        </div>
      </section>

      <section className="prose-section">
        <div className="container">
          <div className="prose">
            <div className="prose-group fade-in">
              <h3 className="prose-heading">The Challenge</h3>
              <p>
                We do not yet understand how the brain gives rise to emotion,
                social intelligence, and behavior.
              </p>
              <p>
                Current approaches are fragmented across scales—from cells to
                whole-brain activity—without a unifying framework. Modern AI
                can model behavior but does not explain how the mind emerges.
              </p>
              <p>
                Bridging this gap requires integrating across scales—from
                cellular mechanisms to behavior—and developing biologically
                grounded models of the mind.
              </p>
            </div>

            <div className="prose-group fade-in">
              <h3 className="prose-heading">Our Approach</h3>
              <p>
                We follow a two-stage, closed-loop framework:
              </p>
              <h4 className="prose-subheading">
                Stage 1 — From Neurons to Mind
              </h4>
              <p>
                We investigate how interactions among diverse neural populations
                give rise to emotion and social intelligence.
              </p>
              <p>
                By modeling the dynamics of neural ensembles, we extract
                computational principles grounded in biological mechanisms.
              </p>
              <h4 className="prose-subheading">
                Stage 2 — From Brain to AI
              </h4>
              <p>
                We translate these principles into computational models that
                incorporate feedback, memory, and structured representations of
                internal state.
              </p>
              <p>
                These models are not only used to perform tasks, but to generate
                and test hypotheses about how cognition and emotion are
                implemented in the brain—closing the loop between neuroscience
                and AI.
              </p>
            </div>

            <div className="prose-group fade-in">
              <h3 className="prose-heading">Vision &amp; Impact</h3>
              <p>
                Our goal is to build biologically grounded models of
                intelligence that:
              </p>
              <ul className="vision-list">
                <li>Advance our understanding of the brain</li>
                <li>Inform the design of next-generation AI systems</li>
                <li>Enable new approaches to brain disorders</li>
              </ul>
              <p>
                By linking mechanism to function, we aim to establish a new
                foundation for studying intelligence across biological and
                artificial systems.
              </p>
              <p>
                This work will reshape how we understand and treat conditions
                such as anxiety, depression, and neurodegenerative disease.
              </p>
            </div>

            <div className="prose-group fade-in">
              <h3 className="prose-heading">About</h3>
              <p>
                NeuroAI Mind Labs is an independent nonprofit research organization
                working openly with the global scientific community.
              </p>
            </div>
          </div>

          <blockquote className="belief-callout fade-in">
            Understanding the mind is the foundation for building AI that
            truly aligns with human.
          </blockquote>

          <p className="collaboration-line fade-in">
            We welcome collaboration with researchers, clinicians, and partners
            who share this vision.
          </p>

        </div>
      </section>

      <section className="info-section fade-in">
        <div className="container">
          <div className="info-grid">
            <dl>
              <dt>Contact</dt>
              <dd>
                <a href="mailto:info@neuroaimind.org">info@neuroaimind.org</a>
              </dd>
            </dl>
            <dl>
              <dt>Opportunities</dt>
              <dd>Researchers + Students + Partners</dd>
            </dl>
            <dl>
              <dt>Location</dt>
              <dd>Gainesville, Florida</dd>
            </dl>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container">
          <p className="footer-text">
            NeuroAI Mind Labs &copy; {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </main>
  );
}
