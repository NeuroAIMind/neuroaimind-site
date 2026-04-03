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
