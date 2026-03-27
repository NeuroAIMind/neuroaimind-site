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
              <span className="logo-line1">Mind</span>
            </div>
          </div>
        </div>
      </header>

      <section className="hero">
        <div className="container">
          <h1>Neurons to Mind. Brain to AI.</h1>
        </div>
      </section>

      <section className="mission-box-section fade-in">
        <div className="container">
          <div className="mission-box">
            <h2>NeuroAI Mind Labs</h2>
            <p>
              We are enabling a new science of intelligence by building
              brain-inspired AI systems that:
            </p>
            <ul className="mission-list">
              <li>(1) Are grounded in biology</li>
              <li>(2) Model human emotion and social intelligence</li>
              <li>(3) Build persistent, structured memory</li>
              <li>(4) Enable controllable reasoning and planning</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="prose-section">
        <div className="container">
          <div className="prose">
            <div className="prose-group fade-in">
              <h3 className="prose-heading">The Challenge</h3>
              <p>
                Our goal is to understand how brain activity gives rise to emotion,
                social cognition, and behavior — and to build better models of
                intelligence and brain disorders.
              </p>
              <p>
                The brain operates across many scales, from neurons and circuits to
                large-scale systems. Yet we still lack unified models that connect
                these levels.
              </p>
              <p>
                Modern AI can recognize patterns, but it does not explain how cognition
                and emotion emerge from biological systems.
              </p>
            </div>

            <div className="prose-group fade-in">
              <h3 className="prose-heading">Our Approach</h3>
              <p>
                We build brain-inspired computational frameworks grounded in
                neuroscience data. Our models are designed not only to predict, but to
                explain — linking neural mechanisms to emotion, social cognition, and
                behavior.
              </p>
              <p>
                We develop models that integrate structured memory, controllable
                reasoning, and top-down feedback to capture how intelligence emerges
                from the brain — with a focus on emotion, social cognition, and
                behavior.
              </p>
              <p>
                These models enable systems to use memory, guide reasoning, and adapt
                behavior through feedback.
              </p>
            </div>

            <div className="prose-group fade-in">
              <h3 className="prose-heading">Vision &amp; Impact</h3>
              <p>
                Our long-term vision is to develop biologically grounded models of the
                brain that advance neuroscience, inform AI, and open new paths for
                treating brain disorders.
              </p>
              <p>
                By grounding AI in the brain, we aim to create systems that are more
                interpretable, more controllable, and better aligned with human
                cognition.
              </p>
              <p>
                Our work has the potential to impact how we understand and treat brain
                disorders, including anxiety, depression, and neurodegenerative
                disease.
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
            To build intelligent AI, we must understand what makes us human.
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
