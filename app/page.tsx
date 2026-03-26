export default function HomePage() {
  return (
    <main>
      <header className="site-header">
        <div className="container">
          <div className="logo-block">
            <svg
              className="logo-mark"
              width="72"
              height="72"
              viewBox="0 0 72 72"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* left half: organic/brain */}
              <path d="M36 4 C16 4, 4 20, 4 36 C4 52, 16 68, 36 68 Z" fill="#111" />
              {/* right half: geometric/AI */}
              <rect x="40" y="4" width="28" height="64" fill="#111" />
              {/* gap between */}
              <rect x="36" y="4" width="4" height="64" fill="white" />
            </svg>
            <div className="logo-text">
              <span className="logo-line1">NeuroAI Mind</span>
              <span className="logo-sub">Labs</span>
            </div>
          </div>
        </div>
      </header>

      <section className="hero">
        <div className="container">
          <h1>Neurons to Mind. Brain to AI.</h1>
        </div>
      </section>

      <section className="info-section">
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

      <section className="mission-box-section">
        <div className="container">
          <div className="mission-box">
            <h2>NeuroAI Mind Labs</h2>
            <p>
              We are building the foundation for understanding the human brain — so
              we can transform how we treat brain disorders and develop the next
              generation of intelligent systems.
            </p>
            <p className="mission-sub">
              We develop a new class of computational models that:
            </p>
            <ul className="mission-list">
              <li>Bridge neurons to cognition</li>
              <li>Are grounded in biological data</li>
              <li>Generate testable hypotheses</li>
              <li>Scale across levels of brain organization</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="prose-section">
        <div className="container">
          <div className="prose">
            <p>
              Our main goal is to understand how the brain gives rise to thought,
              emotion, social cognition, and behavior — and to build intelligent AI
              systems that model and explain these processes.
            </p>

            <p>
              The brain operates across multiple scales, from the activity of single
              neurons to local circuit dynamics to large-scale representations
              underlying cognition and affect. These processes are continuous,
              high-dimensional, and deeply structured. No single method captures
              this complexity.
            </p>

            <p>
              Modern neuroscience lacks a unified understanding of how behavior
              emerges across scales — from cellular biology to neural circuits, brain
              systems, and brain–body interactions.
            </p>

            <p>
              Modern AI systems, despite their remarkable capabilities, lack a
              principled understanding of human cognition. They can recognize patterns
              and categories, but do not capture the underlying processes of emotion,
              social cognition, and human behavior.
            </p>

            <p>
              NeuroAI Mind develops computational frameworks grounded in real
              neuroscience. Our models learn representations that reflect neural
              organization, integrate across scales, and link biological mechanisms
              to cognition and behavior.
            </p>

            <p>
              Rather than treating the brain as a black box, we build models that
              generate testable hypotheses about how neural systems give rise to
              mental processes. These models are not only tools for prediction, but
              for discovery — enabling new ways to study brain function and
              dysfunction.
            </p>

            <p>
              Our long-term vision is the digital twin of the brain: a multi-scale,
              biologically grounded computational framework capable of simulating
              brain function from neurons to mind. Such systems will provide new ways
              to understand and study brain disorders, including anxiety, depression,
              Alzheimer&apos;s disease, and Parkinson&apos;s disease.
            </p>

            <p>
              NeuroAI Mind Labs is an independent, nonprofit research organization.
              We publish our work openly and collaborate with universities, hospitals,
              and research institutions worldwide. Our work is supported by grants
              and philanthropic funding.
            </p>

            <p>
              We share one belief: understanding the brain is one of the most
              important scientific challenges of our time — and AI is the tool that
              will make it possible.
            </p>

            <p>
              We can build the future of brain science and AI together: with academic
              collaborators, clinical partners, and the broader research community
              through open science.
            </p>

            <p>If this vision resonates with you, come join us:</p>
          </div>

          <div className="cta-links">
            <a href="mailto:info@neuroaimind.org">Contact</a>
            <span className="separator">|</span>
            <a href="mailto:info@neuroaimind.org">Opportunities</a>
            <span className="separator">|</span>
            <a href="mailto:info@neuroaimind.org">Support</a>
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
