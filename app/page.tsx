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
              width="100"
              height="100"
              viewBox="0 0 72 72"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="brain-grad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#0ea5e9" />
                  <stop offset="100%" stopColor="#6366f1" />
                </linearGradient>
                <linearGradient id="ai-grad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#6366f1" />
                  <stop offset="100%" stopColor="#a855f7" />
                </linearGradient>
              </defs>
              {/* left half: organic/brain */}
              <path className="logo-brain" d="M36 4 C16 4, 4 20, 4 36 C4 52, 16 68, 36 68 Z" fill="url(#brain-grad)" />
              {/* right half: geometric/AI */}
              <rect className="logo-ai" x="40" y="4" width="28" height="64" fill="url(#ai-grad)" />
              {/* gap between */}
              <rect x="36" y="4" width="4" height="64" fill="white" />
            </svg>
            <div className="logo-text">
              <span className="logo-line1">NeuroAI</span>
              <span className="logo-line1">Mind Labs</span>
            </div>
          </div>
        </div>
      </header>

      <section className="hero">
        <div className="container">
          <h1>Neurons to Mind — Brain to AI</h1>
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
                We lack unified models that connect neural mechanisms to
                emotion, social cognition, and behavior.
              </p>
              <p>
                The brain operates across many scales, from diverse cell types
                and circuits to large-scale systems, yet these levels remain
                fragmented in our understanding.
              </p>
              <p>
                Modern AI systems can recognize patterns at scale, but they do
                not explain how cognition and emotion emerge—or how they are
                implemented in biological systems.
              </p>
              <p>
                Bridging this gap requires models that are both biologically
                grounded and computationally precise.
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
            Understanding the brain is the foundation for building AI that
            truly aligns with human intelligence.
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
