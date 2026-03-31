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
              width="96"
              height="96"
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
            We combine neuroscience and AI to understand how the brain and body
            give rise to emotion. We build brain-grounded intelligent systems
            that reflect how humans think and feel, advancing mental health.
          </p>
        </div>
      </section>

      <section className="prose-section">
        <div className="container">
          <div className="prose">
            <div className="prose-group fade-in">
              <h3 className="prose-heading">The Challenge</h3>
              <p>
                We do not yet understand how neural and physiological activity
                gives rise to emotion.
              </p>
              <p>
                Current approaches remain fragmented across levels of
                analysis—from cellular mechanisms to whole-brain and body
                dynamics—without a unifying framework that links mechanism to
                function. Modern AI can model behavior, but it does not yet
                explain how emotion emerges from biological systems or truly
                understand emotion.
              </p>
              <p>
                As a result, our ability to develop precise and personalized
                approaches to mental health remains limited, with current
                treatments often failing to account for individual differences
                in underlying neural and physiological mechanisms.
              </p>
              <p>
                Bridging this gap requires integrating studies across scales,
                developing models that are both biologically grounded and
                computationally precise, and translating these insights into
                more precise and personalized approaches to mental health.
              </p>
            </div>

            <div className="prose-group fade-in">
              <h3 className="prose-heading">Our Approach</h3>
              <p>
                We study how emotion emerges across scales using a closed-loop
                framework that connects neuroscience and AI.
              </p>
              <p>
                We investigate the cellular basis of emotion and how it emerges
                from interactions within neural populations and their coupling
                with the body across circuit and system levels, giving rise to
                structured, dynamic patterns of neural activity that encode
                emotional states.
              </p>
              <p>
                By integrating neural, physiological, and behavioral data with
                computational modeling, we uncover the mechanisms that govern
                these brain–body states and use them to build brain-grounded
                intelligent systems that generate and test hypotheses about how
                emotion is implemented in the brain.
              </p>
              <p>
                Building on these foundations, we develop tools and platforms
                to advance human mental health.
              </p>
            </div>

            <div className="prose-group fade-in">
              <h3 className="prose-heading">Vision &amp; Impact</h3>
              <p>
                Our goal is to establish a mechanistic foundation for
                understanding emotion.
              </p>
              <p>
                By linking neural mechanisms to computational models, we aim to:
              </p>
              <ul className="vision-list">
                <li>Advance our understanding of the human mind</li>
                <li>Inform the design of next-generation AI systems</li>
                <li>Enable new approaches to mental health</li>
              </ul>
              <p>
                This work opens a path toward more interpretable, controllable,
                and human-aligned AI, and toward improved understanding and
                treatment of conditions such as anxiety, depression, and
                neurodegenerative disease.
              </p>
            </div>

            <div className="prose-group fade-in">
              <h3 className="prose-heading">About</h3>
              <p>
                NeuroAI Mind Labs is an independent nonprofit research
                organization working openly with the global scientific
                community.
              </p>
              <p>
                We focus on uncovering the neural mechanisms of emotion and
                translating these insights into computational models of the
                mind to advance mental health.
              </p>
              <p>
                We welcome collaboration with researchers, clinicians, and
                partners who share this vision.
              </p>
            </div>
          </div>

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
