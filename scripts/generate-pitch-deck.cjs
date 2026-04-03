const PptxGenJS = require("pptxgenjs");
const { writeFileSync } = require("fs");
const { resolve } = require("path");

const pptx = new PptxGenJS();

// Brand colors & fonts
const TEXT = "111111";
const TEXT_SEC = "555555";
const BORDER = "e0e0e0";
const ACCENT = "6366f1";
const WHITE = "FFFFFF";

const FONT_BODY = "Inter";
const FONT_MONO = "IBM Plex Mono";
const FONT_SERIF = "Georgia";

pptx.defineLayout({ name: "WIDE", width: 13.33, height: 7.5 });
pptx.layout = "WIDE";
pptx.author = "NeuroAI Mind Labs";
pptx.title = "NeuroAI Mind Labs — Investor Pitch";

// ─── Slide 1: Identity ───────────────────────────────────────────────

const slide1 = pptx.addSlide();
slide1.background = { color: WHITE };

slide1.addText("Neurons to Mind. Brain to AI.", {
  x: 1.5,
  y: 1.8,
  w: 10.33,
  h: 1.2,
  fontSize: 36,
  fontFace: FONT_SERIF,
  color: TEXT,
  align: "center",
  bold: false,
});

slide1.addText("Bridging brain science and AI to advance mental health", {
  x: 1.5,
  y: 3.1,
  w: 10.33,
  h: 0.6,
  fontSize: 16,
  fontFace: FONT_MONO,
  color: TEXT_SEC,
  align: "center",
});

slide1.addText(
  "We build computational models that connect biological mechanisms of emotion to intelligent systems — and translate them into tools that advance mental health.",
  {
    x: 2.5,
    y: 3.9,
    w: 8.33,
    h: 1.0,
    fontSize: 14,
    fontFace: FONT_BODY,
    color: TEXT,
    align: "center",
    lineSpacingMultiple: 1.5,
  }
);

slide1.addText(
  "NeuroAI Mind Labs  ·  Gainesville, Florida  ·  Independent Nonprofit Research Organization",
  {
    x: 1.5,
    y: 5.3,
    w: 10.33,
    h: 0.5,
    fontSize: 11,
    fontFace: FONT_MONO,
    color: TEXT_SEC,
    align: "center",
  }
);

// ─── Slide 2: The Broken Paradigm ────────────────────────────────────

const slide2 = pptx.addSlide();
slide2.background = { color: WHITE };

slide2.addText("THE CHALLENGE", {
  x: 0.8,
  y: 0.5,
  w: 11.73,
  h: 0.4,
  fontSize: 11,
  fontFace: FONT_MONO,
  color: TEXT_SEC,
  bold: true,
  charSpacing: 3,
});

slide2.addText("The crisis is growing. The science isn\u2019t keeping up.", {
  x: 0.8,
  y: 1.0,
  w: 11.73,
  h: 0.8,
  fontSize: 28,
  fontFace: FONT_SERIF,
  color: TEXT,
});

// Three columns
const colW = 3.6;
const colY = 2.2;
const cols = [
  {
    title: "The mental health crisis\nis accelerating",
    body: "Depression, anxiety, addiction, and neurodegeneration are among the defining challenges of our time — yet treatments remain one-size-fits-all.",
  },
  {
    title: "Current science\nis fragmented",
    body: "Research is siloed across cellular, circuit, system, and behavioral levels with no unifying framework connecting mechanism to function.",
  },
  {
    title: "AI doesn\u2019t\nhelp yet",
    body: "Modern AI can model behavior, but it cannot explain how emotion emerges from biological systems or how humans truly think and feel.",
  },
];

cols.forEach((col, i) => {
  const colX = 0.8 + i * (colW + 0.4);
  slide2.addText(col.title, {
    x: colX,
    y: colY,
    w: colW,
    h: 0.7,
    fontSize: 14,
    fontFace: FONT_BODY,
    color: TEXT,
    bold: true,
    valign: "top",
  });
  slide2.addText(col.body, {
    x: colX,
    y: colY + 0.8,
    w: colW,
    h: 1.4,
    fontSize: 12,
    fontFace: FONT_BODY,
    color: TEXT_SEC,
    lineSpacingMultiple: 1.5,
    valign: "top",
  });
});

// Callout
slide2.addShape(pptx.ShapeType.rect, {
  x: 0.8,
  y: 5.0,
  w: 0.06,
  h: 1.0,
  fill: { color: ACCENT },
});

slide2.addText(
  "We lack the ability to track, predict, and regulate emotional states — and current treatments fail to account for individual neural and physiological differences.",
  {
    x: 1.1,
    y: 5.0,
    w: 10.5,
    h: 1.0,
    fontSize: 13,
    fontFace: FONT_BODY,
    color: TEXT,
    bold: true,
    italic: true,
    lineSpacingMultiple: 1.5,
  }
);

// ─── Slide 3: Our Approach ───────────────────────────────────────────

const slide3 = pptx.addSlide();
slide3.background = { color: WHITE };

slide3.addText("OUR APPROACH", {
  x: 0.8,
  y: 0.5,
  w: 11.73,
  h: 0.4,
  fontSize: 11,
  fontFace: FONT_MONO,
  color: TEXT_SEC,
  bold: true,
  charSpacing: 3,
});

slide3.addText("A closed-loop framework from neurons to mind", {
  x: 0.8,
  y: 1.0,
  w: 11.73,
  h: 0.8,
  fontSize: 28,
  fontFace: FONT_SERIF,
  color: TEXT,
});

slide3.addText(
  "We integrate biology, psychology, neuroscience, and AI into a single closed-loop framework that studies how emotion emerges and evolves across scales.",
  {
    x: 0.8,
    y: 1.8,
    w: 8,
    h: 0.7,
    fontSize: 13,
    fontFace: FONT_BODY,
    color: TEXT_SEC,
    lineSpacingMultiple: 1.4,
  }
);

// Framework layers
const layers = [
  {
    name: "BIOLOGICAL MECHANISMS",
    desc: "Cellular basis of emotion, neural populations, brain circuits, brain-body coupling",
  },
  {
    name: "DATA INTEGRATION",
    desc: "Neural, physiological, and behavioral data unified into structured datasets",
  },
  {
    name: "COMPUTATIONAL MODELING",
    desc: "Models that infer latent emotional states, predict their evolution, simulate outcomes",
  },
  {
    name: "ACTIONABLE INTELLIGENCE",
    desc: "Closed-loop systems that test hypotheses, guide interventions in real-time, adapt dynamically",
  },
];

const layerH = 0.7;
const layerGap = 0.15;
const layerStartY = 2.7;

layers.forEach((layer, i) => {
  const ly = layerStartY + i * (layerH + layerGap);

  slide3.addShape(pptx.ShapeType.roundRect, {
    x: 0.8,
    y: ly,
    w: 11.73,
    h: layerH,
    rectRadius: 0.05,
    line: { color: BORDER, width: 1 },
    fill: { color: WHITE },
  });

  slide3.addText(layer.name, {
    x: 1.0,
    y: ly + 0.05,
    w: 3.5,
    h: 0.3,
    fontSize: 10,
    fontFace: FONT_MONO,
    color: TEXT,
    bold: true,
    charSpacing: 2,
  });

  slide3.addText(layer.desc, {
    x: 1.0,
    y: ly + 0.32,
    w: 11,
    h: 0.35,
    fontSize: 11,
    fontFace: FONT_BODY,
    color: TEXT_SEC,
  });

  // Arrow between layers
  if (i < layers.length - 1) {
    slide3.addText("\u2193", {
      x: 6.2,
      y: ly + layerH - 0.05,
      w: 1,
      h: 0.35,
      fontSize: 14,
      color: TEXT_SEC,
      align: "center",
    });
  }
});

// Callout
const calloutY3 = layerStartY + layers.length * (layerH + layerGap) + 0.2;
slide3.addShape(pptx.ShapeType.rect, {
  x: 0.8,
  y: calloutY3,
  w: 0.06,
  h: 0.8,
  fill: { color: ACCENT },
});

slide3.addText(
  "Our models are not only descriptive — they are actionable. They enable real-time intervention guided by biological mechanism, not surface-level behavior.",
  {
    x: 1.1,
    y: calloutY3,
    w: 10.5,
    h: 0.8,
    fontSize: 13,
    fontFace: FONT_BODY,
    color: TEXT,
    bold: true,
    italic: true,
    lineSpacingMultiple: 1.5,
  }
);

// ─── Slide 4: Founder & Team ────────────────────────────────────────

const slide4 = pptx.addSlide();
slide4.background = { color: WHITE };

slide4.addText("FOUNDER & TEAM", {
  x: 0.8,
  y: 0.5,
  w: 11.73,
  h: 0.4,
  fontSize: 11,
  fontFace: FONT_MONO,
  color: TEXT_SEC,
  bold: true,
  charSpacing: 3,
});

slide4.addText("Built at the intersection of neuroscience and AI", {
  x: 0.8,
  y: 1.0,
  w: 11.73,
  h: 0.8,
  fontSize: 28,
  fontFace: FONT_SERIF,
  color: TEXT,
});

// Left column: Founder
slide4.addText("Founder", {
  x: 0.8,
  y: 2.0,
  w: 5.5,
  h: 0.4,
  fontSize: 14,
  fontFace: FONT_BODY,
  color: TEXT,
  bold: true,
});

const founderPoints = [
  "—  Years of research in NeuroAI and emotion perception",
  "—  NSF-funded principal investigator",
  "—  Deep roots in the University of Florida neuroscience and AI ecosystem",
];

slide4.addText(founderPoints.join("\n"), {
  x: 0.8,
  y: 2.5,
  w: 5.5,
  h: 1.3,
  fontSize: 12,
  fontFace: FONT_BODY,
  color: TEXT_SEC,
  lineSpacingMultiple: 1.6,
  valign: "top",
});

slide4.addShape(pptx.ShapeType.rect, {
  x: 0.8,
  y: 4.0,
  w: 5.5,
  h: 0.01,
  fill: { color: BORDER },
});

slide4.addText(
  "This work requires someone who lives in both worlds — who understands neural mechanisms AND can build the computational models. That intersection is rare. We\u2019ve been working in it for years.",
  {
    x: 0.8,
    y: 4.15,
    w: 5.5,
    h: 1.2,
    fontSize: 12,
    fontFace: FONT_BODY,
    color: TEXT,
    italic: true,
    lineSpacingMultiple: 1.5,
    valign: "top",
  }
);

// Right column: Network
slide4.addText("Collaborators & Mentors", {
  x: 7.0,
  y: 2.0,
  w: 5.5,
  h: 0.4,
  fontSize: 14,
  fontFace: FONT_BODY,
  color: TEXT,
  bold: true,
});

const networkPoints = [
  "—  Active research partnerships with UF faculty across neuroscience, AI, and biomedical engineering",
  "—  Established network of mentors and researchers contributing to the scientific foundation",
];

slide4.addText(networkPoints.join("\n"), {
  x: 7.0,
  y: 2.5,
  w: 5.5,
  h: 1.2,
  fontSize: 12,
  fontFace: FONT_BODY,
  color: TEXT_SEC,
  lineSpacingMultiple: 1.6,
  valign: "top",
});

slide4.addText("Planned Y1 Hires", {
  x: 7.0,
  y: 3.9,
  w: 5.5,
  h: 0.4,
  fontSize: 14,
  fontFace: FONT_BODY,
  color: TEXT,
  bold: true,
});

const hirePoints = [
  "—  Computational neuroscientists",
  "—  AI / ML researchers",
  "—  Research engineers",
];

slide4.addText(hirePoints.join("\n"), {
  x: 7.0,
  y: 4.3,
  w: 5.5,
  h: 1.0,
  fontSize: 12,
  fontFace: FONT_BODY,
  color: TEXT_SEC,
  lineSpacingMultiple: 1.6,
  valign: "top",
});

// ─── Slide 5: Validation ────────────────────────────────────────────

const slide5 = pptx.addSlide();
slide5.background = { color: WHITE };

slide5.addText("VALIDATION", {
  x: 0.8,
  y: 0.5,
  w: 11.73,
  h: 0.4,
  fontSize: 11,
  fontFace: FONT_MONO,
  color: TEXT_SEC,
  bold: true,
  charSpacing: 3,
});

slide5.addText("Research foundation already in place", {
  x: 0.8,
  y: 1.0,
  w: 11.73,
  h: 0.8,
  fontSize: 28,
  fontFace: FONT_SERIF,
  color: TEXT,
});

const valCols = [
  {
    title: "Publications & Research",
    items: [
      "—  Peer-reviewed publications in NeuroAI and emotion perception",
      "—  Established research track in computational modeling of brain-body systems",
      "—  Builds on years of foundational science, not starting from scratch",
    ],
  },
  {
    title: "Institutional Partnerships",
    items: [
      "—  Active collaborations with University of Florida researchers and labs",
      "—  Access to UF\u2019s neuroscience, AI, and biomedical infrastructure",
      "—  Working within one of the top public research university ecosystems",
    ],
  },
  {
    title: "Prior Funding",
    items: [
      "—  NSF-funded research — the work has already passed rigorous federal peer review",
    ],
    signal:
      "This isn\u2019t a hypothesis. It\u2019s a research program with federal validation.",
  },
];

valCols.forEach((col, i) => {
  const cx = 0.8 + i * 4.1;
  slide5.addText(col.title, {
    x: cx,
    y: 2.0,
    w: 3.8,
    h: 0.4,
    fontSize: 14,
    fontFace: FONT_BODY,
    color: TEXT,
    bold: true,
  });

  slide5.addText(col.items.join("\n"), {
    x: cx,
    y: 2.5,
    w: 3.8,
    h: 2.2,
    fontSize: 12,
    fontFace: FONT_BODY,
    color: TEXT_SEC,
    lineSpacingMultiple: 1.6,
    valign: "top",
  });

  if (col.signal) {
    slide5.addShape(pptx.ShapeType.rect, {
      x: cx,
      y: 4.8,
      w: 3.8,
      h: 0.01,
      fill: { color: BORDER },
    });

    slide5.addText(col.signal, {
      x: cx,
      y: 5.0,
      w: 3.8,
      h: 0.8,
      fontSize: 12,
      fontFace: FONT_BODY,
      color: TEXT,
      bold: true,
      italic: true,
      lineSpacingMultiple: 1.4,
    });
  }
});

// ─── Slide 6: Roadmap ───────────────────────────────────────────────

const slide6 = pptx.addSlide();
slide6.background = { color: WHITE };

slide6.addText("ROADMAP", {
  x: 0.8,
  y: 0.5,
  w: 11.73,
  h: 0.4,
  fontSize: 11,
  fontFace: FONT_MONO,
  color: TEXT_SEC,
  bold: true,
  charSpacing: 3,
});

slide6.addText("From foundation to translation in 24 months", {
  x: 0.8,
  y: 1.0,
  w: 11.73,
  h: 0.8,
  fontSize: 28,
  fontFace: FONT_SERIF,
  color: TEXT,
});

// Year 1 box
slide6.addShape(pptx.ShapeType.roundRect, {
  x: 0.8,
  y: 2.0,
  w: 5.5,
  h: 3.2,
  rectRadius: 0.05,
  line: { color: BORDER, width: 1 },
  fill: { color: WHITE },
});

slide6.addText("YEAR 1", {
  x: 1.1,
  y: 2.15,
  w: 2,
  h: 0.3,
  fontSize: 10,
  fontFace: FONT_MONO,
  color: ACCENT,
  bold: true,
  charSpacing: 2,
});

slide6.addText("Build the Engine", {
  x: 1.1,
  y: 2.5,
  w: 5,
  h: 0.35,
  fontSize: 14,
  fontFace: FONT_BODY,
  color: TEXT,
  bold: true,
});

const y1Points = [
  "—  Recruit core research team — computational neuroscientists, AI/ML researchers",
  "—  Build computational infrastructure and data pipelines",
  "—  Establish formal research partnerships and data-sharing agreements",
  "—  Publish foundational work establishing the closed-loop framework",
];

slide6.addText(y1Points.join("\n"), {
  x: 1.1,
  y: 2.9,
  w: 5,
  h: 2.0,
  fontSize: 11,
  fontFace: FONT_BODY,
  color: TEXT_SEC,
  lineSpacingMultiple: 1.6,
  valign: "top",
});

// Arrow
slide6.addText("\u2192", {
  x: 6.3,
  y: 3.2,
  w: 0.8,
  h: 0.5,
  fontSize: 20,
  color: TEXT_SEC,
  align: "center",
});

// Year 2 box
slide6.addShape(pptx.ShapeType.roundRect, {
  x: 7.0,
  y: 2.0,
  w: 5.5,
  h: 3.2,
  rectRadius: 0.05,
  line: { color: BORDER, width: 1 },
  fill: { color: WHITE },
});

slide6.addText("YEAR 2", {
  x: 7.3,
  y: 2.15,
  w: 2,
  h: 0.3,
  fontSize: 10,
  fontFace: FONT_MONO,
  color: ACCENT,
  bold: true,
  charSpacing: 2,
});

slide6.addText("Prove the Model", {
  x: 7.3,
  y: 2.5,
  w: 5,
  h: 0.35,
  fontSize: 14,
  fontFace: FONT_BODY,
  color: TEXT,
  bold: true,
});

const y2Points = [
  "—  Launch pilot study applying framework to a specific condition (e.g., depression, anxiety)",
  "—  Develop prototype tool for monitoring / predicting emotional states",
  "—  Generate preliminary clinical evidence",
  "—  Position for larger grants — NIH R01, DARPA, major foundation programs",
];

slide6.addText(y2Points.join("\n"), {
  x: 7.3,
  y: 2.9,
  w: 5,
  h: 2.0,
  fontSize: 11,
  fontFace: FONT_BODY,
  color: TEXT_SEC,
  lineSpacingMultiple: 1.6,
  valign: "top",
});

// Callout
slide6.addShape(pptx.ShapeType.rect, {
  x: 0.8,
  y: 5.6,
  w: 0.06,
  h: 0.8,
  fill: { color: ACCENT },
});

slide6.addText(
  "Year 1 builds the team and platform. Year 2 proves it works. Each milestone is designed to unlock the next stage of funding.",
  {
    x: 1.1,
    y: 5.6,
    w: 10.5,
    h: 0.8,
    fontSize: 13,
    fontFace: FONT_BODY,
    color: TEXT,
    bold: true,
    italic: true,
    lineSpacingMultiple: 1.5,
  }
);

// ─── Slide 7: The Ask ───────────────────────────────────────────────

const slide7 = pptx.addSlide();
slide7.background = { color: WHITE };

slide7.addText("THE ASK", {
  x: 0.8,
  y: 0.5,
  w: 11.73,
  h: 0.4,
  fontSize: 11,
  fontFace: FONT_MONO,
  color: TEXT_SEC,
  bold: true,
  charSpacing: 3,
});

slide7.addText("Invest in the science that closes the gap", {
  x: 0.8,
  y: 1.0,
  w: 11.73,
  h: 0.8,
  fontSize: 28,
  fontFace: FONT_SERIF,
  color: TEXT,
});

slide7.addText("$500K \u2013 $3M seed funding", {
  x: 0.8,
  y: 1.9,
  w: 11.73,
  h: 0.6,
  fontSize: 24,
  fontFace: FONT_SERIF,
  color: TEXT,
});

// Budget table
const tableRows = [
  ["Research team (3\u20135 hires)", "The core team that builds the framework"],
  [
    "Computational infrastructure",
    "Platform to integrate multi-scale brain-body data",
  ],
  [
    "Pilot study (Y2)",
    "First proof that the closed-loop model works clinically",
  ],
  [
    "Publications & partnerships",
    "Credibility engine for next-stage funding",
  ],
];

const tableY = 2.8;
const rowH = 0.55;

tableRows.forEach((row, i) => {
  const ry = tableY + i * rowH;

  // Border lines
  if (i === 0) {
    slide7.addShape(pptx.ShapeType.rect, {
      x: 0.8,
      y: ry - 0.02,
      w: 11.73,
      h: 0.01,
      fill: { color: BORDER },
    });
  }

  slide7.addText(row[0], {
    x: 0.8,
    y: ry,
    w: 4.5,
    h: rowH,
    fontSize: 11,
    fontFace: FONT_MONO,
    color: TEXT,
    bold: true,
    valign: "middle",
  });

  slide7.addText(row[1], {
    x: 5.5,
    y: ry,
    w: 7,
    h: rowH,
    fontSize: 12,
    fontFace: FONT_BODY,
    color: TEXT_SEC,
    valign: "middle",
  });

  slide7.addShape(pptx.ShapeType.rect, {
    x: 0.8,
    y: ry + rowH - 0.02,
    w: 11.73,
    h: 0.01,
    fill: { color: BORDER },
  });
});

// Callout
slide7.addShape(pptx.ShapeType.rect, {
  x: 0.8,
  y: 5.2,
  w: 0.06,
  h: 1.0,
  fill: { color: ACCENT },
});

slide7.addText(
  "NSF has already validated the science. UF provides the ecosystem. Your funding is the bridge between proven research and a prototype that could change how we approach mental health — at a fraction of what it would cost to build from zero.",
  {
    x: 1.1,
    y: 5.2,
    w: 10.5,
    h: 1.0,
    fontSize: 13,
    fontFace: FONT_BODY,
    color: TEXT,
    bold: true,
    italic: true,
    lineSpacingMultiple: 1.5,
  }
);

// ─── Slide 8: Close ─────────────────────────────────────────────────

const slide8 = pptx.addSlide();
slide8.background = { color: WHITE };

slide8.addText(
  "Every year, the mental health crisis deepens — depression, anxiety, addiction, neurodegeneration continue to grow while treatments remain one-size-fits-all.",
  {
    x: 1.5,
    y: 0.8,
    w: 10.33,
    h: 0.8,
    fontSize: 13,
    fontFace: FONT_BODY,
    color: TEXT_SEC,
    lineSpacingMultiple: 1.6,
  }
);

slide8.addText(
  "The science to change this exists across fragmented disciplines — but without a unifying effort, it stays in silos, published and unused.",
  {
    x: 1.5,
    y: 1.7,
    w: 10.33,
    h: 0.8,
    fontSize: 13,
    fontFace: FONT_BODY,
    color: TEXT_SEC,
    lineSpacingMultiple: 1.6,
  }
);

slide8.addText(
  "The gap between what we know about the brain and what we can do for people in crisis is not shrinking. It is growing.",
  {
    x: 1.5,
    y: 2.6,
    w: 10.33,
    h: 0.8,
    fontSize: 14,
    fontFace: FONT_BODY,
    color: TEXT,
    bold: true,
    italic: true,
    lineSpacingMultiple: 1.6,
  }
);

slide8.addText("NeuroAI Mind Labs exists to close that gap.", {
  x: 1.5,
  y: 3.8,
  w: 10.33,
  h: 0.5,
  fontSize: 16,
  fontFace: FONT_BODY,
  color: TEXT,
  bold: true,
  align: "center",
});

slide8.addText("Neurons to Mind. Brain to AI.", {
  x: 1.5,
  y: 4.4,
  w: 10.33,
  h: 0.8,
  fontSize: 30,
  fontFace: FONT_SERIF,
  color: TEXT,
  align: "center",
});

slide8.addText(
  "We\u2019re ready to build — and we\u2019re asking you to build with us.",
  {
    x: 1.5,
    y: 5.3,
    w: 10.33,
    h: 0.5,
    fontSize: 14,
    fontFace: FONT_BODY,
    color: TEXT_SEC,
    align: "center",
  }
);

slide8.addText("info@neuroaimind.org", {
  x: 1.5,
  y: 6.2,
  w: 10.33,
  h: 0.4,
  fontSize: 11,
  fontFace: FONT_MONO,
  color: TEXT_SEC,
  align: "center",
});

// ─── Generate ────────────────────────────────────────────────────────

const outPath = resolve(__dirname, "../docs/NeuroAI-Mind-Labs-Pitch-Deck.pptx");

async function generate() {
  const data = await pptx.write({ outputType: "nodebuffer" });
  writeFileSync(outPath, data);
  console.log(`\n✓ Pitch deck saved to: ${outPath}\n`);
}

generate().catch((err) => {
  console.error("Error generating deck:", err);
  process.exit(1);
});
