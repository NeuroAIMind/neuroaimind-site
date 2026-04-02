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
            We bring together biology, psychology, neuroscience, and AI to
            uncover how brain–body systems generate emotion—and translate these
            insights into intelligent systems and biomedical technologies that
            advance mental health.
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
                gives rise to emotion—especially as it unfolds over time and
                across individuals.
              </p>
              <p>
                Current approaches remain fragmented across levels of analysis,
                and modern AI neither explains how emotion emerges from
                biological systems nor reflects how humans truly think and feel.
              </p>
              <p>
                The mental health crisis is growing and has become one of the
                defining challenges of our time. Addressing it requires a
                collective effort to develop innovative treatments that account
                for individual differences in underlying neural and
                physiological mechanisms—something current approaches often
                fail to do.
              </p>
            </div>

            <div className="prose-group fade-in">
              <h3 className="prose-heading">Our Approach</h3>
              <p>
                We study how emotion emerges and evolves across scales using a
                closed-loop framework that connects biology, brain science,
                and AI.
              </p>
              <p>
                We investigate the cellular basis of emotion and how it arises
                from interactions within neural populations, brain circuits, and
                neural systems, and their coupling with the body. By integrating
                these biological insights, we build intelligent systems that
                generate new hypotheses and guide innovation through closed-loop
                discovery.
              </p>
              <p>
                Building on these foundations, we develop advanced biomedical
                tools to advance human mental health.
              </p>
            </div>

            <div className="prose-group fade-in">
              <h3 className="prose-heading">Vision &amp; Impact</h3>
              <p>
                Our goal is to establish a mechanistic, predictive, and
                controllable foundation for understanding emotion.
              </p>
              <p>We aim to:</p>
              <ul className="vision-list">
                <li>Advance understanding of how emotion emerges and evolves in the brain</li>
                <li>Enable intelligent systems that better understand humans</li>
                <li>Enable more precise and personalized approaches to mental health</li>
              </ul>
              <p>
                This work opens new ways to understand, predict, and treat
                conditions such as anxiety, depression, addiction, and
                neurodegenerative disease—and provides a path toward more
                interpretable, controllable, and human-aligned AI.
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
                Our mission is to bridge brain science and AI to enable a deeper
                understanding of human emotion and to advance mental health.
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
