const PptxGenJS = require("pptxgenjs");
const { writeFileSync } = require("fs");
const { resolve } = require("path");

const pptx = new PptxGenJS();

// Brand colors & fonts
const TEXT = "111111";
const TEXT_SEC = "555555";
const BORDER = "e0e0e0";
const ACCENT = "6366f1";
const ACCENT_LIGHT = "EEF2FF";
const WHITE = "FFFFFF";
const LIGHT_BG = "F9FAFB";

const FONT_BODY = "Inter";
const FONT_MONO = "IBM Plex Mono";
const FONT_SERIF = "Georgia";

pptx.defineLayout({ name: "WIDE", width: 13.33, height: 7.5 });
pptx.layout = "WIDE";
pptx.author = "NeuroAI Mind Labs";
pptx.title = "NeuroAI Mind Labs \u2014 Investor Pitch";

// ═══════════════════════════════════════════════════════════════════════
// Helper: draw a circle icon with a label below
// ═══════════════════════════════════════════════════════════════════════
function addIcon(slide, { x, y, symbol, label, sublabel }) {
  // Circle
  slide.addShape(pptx.ShapeType.ellipse, {
    x: x,
    y: y,
    w: 1.4,
    h: 1.4,
    fill: { color: ACCENT_LIGHT },
    line: { color: ACCENT, width: 1.5 },
  });
  // Symbol inside circle
  slide.addText(symbol, {
    x: x,
    y: y + 0.15,
    w: 1.4,
    h: 1.1,
    fontSize: 32,
    align: "center",
    valign: "middle",
    color: ACCENT,
  });
  // Label
  slide.addText(label, {
    x: x - 0.5,
    y: y + 1.6,
    w: 2.4,
    h: 0.4,
    fontSize: 13,
    fontFace: FONT_BODY,
    color: TEXT,
    bold: true,
    align: "center",
  });
  // Sublabel
  if (sublabel) {
    slide.addText(sublabel, {
      x: x - 0.5,
      y: y + 2.0,
      w: 2.4,
      h: 0.6,
      fontSize: 11,
      fontFace: FONT_BODY,
      color: TEXT_SEC,
      align: "center",
      lineSpacingMultiple: 1.3,
    });
  }
}

// ═══════════════════════════════════════════════════════════════════════
// Helper: section label (top-left mono label)
// ═══════════════════════════════════════════════════════════════════════
function addLabel(slide, text) {
  slide.addText(text, {
    x: 0.8,
    y: 0.5,
    w: 11.73,
    h: 0.35,
    fontSize: 10,
    fontFace: FONT_MONO,
    color: TEXT_SEC,
    bold: true,
    charSpacing: 4,
  });
}

// ═══════════════════════════════════════════════════════════════════════
// Helper: slide title (serif)
// ═══════════════════════════════════════════════════════════════════════
function addTitle(slide, text) {
  slide.addText(text, {
    x: 0.8,
    y: 0.95,
    w: 11.73,
    h: 0.7,
    fontSize: 28,
    fontFace: FONT_SERIF,
    color: TEXT,
  });
}

// ═══════════════════════════════════════════════════════════════════════
// SLIDE 1 — Identity (logo block + tagline)
// ═══════════════════════════════════════════════════════════════════════
const slide1 = pptx.addSlide();
slide1.background = { color: WHITE };

// Logo block — centered horizontally
// Mark: left half (rounded corners) + right half (sharp)
const logoX = 4.2;
const logoY = 1.0;
const markW = 0.9;
const markH = 1.9;
const markGap = 0.15;

// Left half — rounded rect
slide1.addShape(pptx.ShapeType.roundRect, {
  x: logoX,
  y: logoY,
  w: markW,
  h: markH,
  rectRadius: 0.12,
  fill: { color: TEXT },
});
// Cut line on left half
slide1.addShape(pptx.ShapeType.rect, {
  x: logoX,
  y: logoY + markH * 0.46,
  w: markW,
  h: 0.13,
  fill: { color: WHITE },
});
// Right half — sharp rect
slide1.addShape(pptx.ShapeType.rect, {
  x: logoX + markW + markGap,
  y: logoY,
  w: markW,
  h: markH,
  fill: { color: TEXT },
});

// Logo text — to the right of the mark
const textX = logoX + markW * 2 + markGap + 0.3;
// "NeuroAI" — first line
slide1.addText("NeuroAI", {
  x: textX,
  y: logoY + 0.05,
  w: 4.5,
  h: 0.95,
  fontSize: 38,
  fontFace: FONT_BODY,
  color: TEXT,
  bold: true,
  valign: "bottom",
});
// "Mind Labs" — second line
slide1.addText([
  { text: "Mind ", options: { fontSize: 38, fontFace: FONT_BODY, color: TEXT, bold: true } },
  { text: "Labs", options: { fontSize: 38, fontFace: FONT_BODY, color: TEXT_SEC, bold: false } },
], {
  x: textX,
  y: logoY + 0.95,
  w: 4.5,
  h: 0.95,
  valign: "top",
});

// Tagline
slide1.addText("Neurons to Mind. Brain to AI.", {
  x: 1.5,
  y: 3.6,
  w: 10.33,
  h: 1.0,
  fontSize: 38,
  fontFace: FONT_SERIF,
  color: TEXT,
  align: "center",
});

slide1.addText("Bridging brain science and AI to advance mental health", {
  x: 1.5,
  y: 4.7,
  w: 10.33,
  h: 0.5,
  fontSize: 15,
  fontFace: FONT_MONO,
  color: TEXT_SEC,
  align: "center",
});

slide1.addText(
  "Gainesville, Florida, USA  \u00B7  Nonprofit Research Organization",
  {
    x: 1.5,
    y: 6.2,
    w: 10.33,
    h: 0.4,
    fontSize: 11,
    fontFace: FONT_MONO,
    color: TEXT_SEC,
    align: "center",
  }
);

// ═══════════════════════════════════════════════════════════════════════
// SLIDE 2 — The Problem (3 visual icons, minimal text)
// ═══════════════════════════════════════════════════════════════════════
const slide2 = pptx.addSlide();
slide2.background = { color: WHITE };

addLabel(slide2, "THE CHALLENGE");
addTitle(slide2, "The crisis is growing. The science isn\u2019t keeping up.");

// Three icon columns
addIcon(slide2, {
  x: 1.8,
  y: 2.2,
  symbol: "\u26A0",
  label: "Crisis Accelerating",
  sublabel: "Depression, anxiety, addiction\ngrowing unchecked",
});

addIcon(slide2, {
  x: 5.9,
  y: 2.2,
  symbol: "\u2223\u2223\u2223",
  label: "Science Fragmented",
  sublabel: "Cells, circuits, systems, behavior\nstudied in silos",
});

addIcon(slide2, {
  x: 10.0,
  y: 2.2,
  symbol: "\u2716",
  label: "AI Falls Short",
  sublabel: "Models behavior, not how\nemotion truly works",
});

// Bottom callout bar
slide2.addShape(pptx.ShapeType.roundRect, {
  x: 0.8,
  y: 5.5,
  w: 11.73,
  h: 1.0,
  rectRadius: 0.08,
  fill: { color: ACCENT_LIGHT },
});

slide2.addText(
  "Current treatments fail to account for individual neural and physiological differences.",
  {
    x: 1.2,
    y: 5.55,
    w: 10.93,
    h: 0.9,
    fontSize: 14,
    fontFace: FONT_BODY,
    color: ACCENT,
    bold: true,
    align: "center",
    valign: "middle",
  }
);

// ═══════════════════════════════════════════════════════════════════════
// SLIDE 3 — Our Approach (circular loop diagram)
// ═══════════════════════════════════════════════════════════════════════
const slide3 = pptx.addSlide();
slide3.background = { color: WHITE };

addLabel(slide3, "OUR APPROACH");
addTitle(slide3, "A closed-loop framework from neurons to mind");

// Circular loop — 4 nodes positioned in a diamond/circle
const cx = 6.66; // center X
const cy = 4.2;  // center Y
const rx = 2.8;  // horizontal radius
const ry = 1.6;  // vertical radius
const nodeW = 2.6;
const nodeH = 1.0;

const nodes = [
  { label: "Biology", sub: "Neural populations\nBrain-body coupling", angle: 270 },    // top
  { label: "Data", sub: "Neural, physiological\nbehavioral integration", angle: 0 },     // right
  { label: "Models", sub: "Predict emotional states\nSimulate outcomes", angle: 90 },   // bottom
  { label: "Action", sub: "Real-time intervention\nClosed-loop feedback", angle: 180 },   // left
];

nodes.forEach((node) => {
  const rad = (node.angle * Math.PI) / 180;
  const nx = cx + rx * Math.cos(rad) - nodeW / 2;
  const ny = cy + ry * Math.sin(rad) - nodeH / 2;

  // Node box
  slide3.addShape(pptx.ShapeType.roundRect, {
    x: nx,
    y: ny,
    w: nodeW,
    h: nodeH,
    rectRadius: 0.08,
    fill: { color: ACCENT_LIGHT },
    line: { color: ACCENT, width: 1.5 },
  });

  // Node title
  slide3.addText(node.label, {
    x: nx,
    y: ny + 0.08,
    w: nodeW,
    h: 0.35,
    fontSize: 14,
    fontFace: FONT_BODY,
    color: ACCENT,
    bold: true,
    align: "center",
  });

  // Node subtitle
  slide3.addText(node.sub, {
    x: nx,
    y: ny + 0.42,
    w: nodeW,
    h: 0.5,
    fontSize: 10,
    fontFace: FONT_BODY,
    color: TEXT_SEC,
    align: "center",
    lineSpacingMultiple: 1.2,
  });
});

// Arrows between nodes (clockwise: top→right→bottom→left→top)
const arrows = [
  { x: 8.1, y: 3.1, text: "\u2198" },   // top → right
  { x: 8.1, y: 4.8, text: "\u2199" },   // right → bottom
  { x: 5.0, y: 4.8, text: "\u2196" },   // bottom → left
  { x: 5.0, y: 3.1, text: "\u2197" },   // left → top
];

arrows.forEach((a) => {
  slide3.addText(a.text, {
    x: a.x,
    y: a.y,
    w: 0.6,
    h: 0.5,
    fontSize: 20,
    color: ACCENT,
    align: "center",
  });
});

// Center label
slide3.addText("Closed\nLoop", {
  x: cx - 0.7,
  y: cy - 0.35,
  w: 1.4,
  h: 0.7,
  fontSize: 12,
  fontFace: FONT_MONO,
  color: TEXT_SEC,
  align: "center",
  lineSpacingMultiple: 1.2,
});

// Bottom one-liner
slide3.addText(
  "Descriptive + Actionable  \u2014  real-time intervention guided by biological mechanism",
  {
    x: 0.8,
    y: 6.4,
    w: 11.73,
    h: 0.4,
    fontSize: 13,
    fontFace: FONT_BODY,
    color: TEXT,
    bold: true,
    italic: true,
    align: "center",
  }
);

// ═══════════════════════════════════════════════════════════════════════
// SLIDE 4 — Team (visual network diagram)
// ═══════════════════════════════════════════════════════════════════════
const slide4 = pptx.addSlide();
slide4.background = { color: WHITE };

addLabel(slide4, "FOUNDER & TEAM");
addTitle(slide4, "Built at the intersection of neuroscience and AI");

// Center: Founder circle
slide4.addShape(pptx.ShapeType.ellipse, {
  x: 5.46,
  y: 2.4,
  w: 2.4,
  h: 2.4,
  fill: { color: ACCENT },
});

slide4.addText("Founder", {
  x: 5.46,
  y: 2.7,
  w: 2.4,
  h: 0.4,
  fontSize: 14,
  fontFace: FONT_BODY,
  color: WHITE,
  bold: true,
  align: "center",
});

slide4.addText("NeuroAI \u00D7 Emotion\nYears of Research\nUF Ecosystem", {
  x: 5.46,
  y: 3.2,
  w: 2.4,
  h: 1.0,
  fontSize: 11,
  fontFace: FONT_BODY,
  color: "E0E7FF",
  align: "center",
  lineSpacingMultiple: 1.3,
});

// Satellite nodes
const satellites = [
  { x: 1.5, y: 2.0, label: "UF Neuroscience\nFaculty" },
  { x: 1.5, y: 4.2, label: "UF AI & BME\nResearchers" },
  { x: 9.5, y: 2.0, label: "Research\nMentors" },
  { x: 9.5, y: 4.2, label: "Y1 Hires\n(3\u20135 researchers)" },
];

satellites.forEach((s) => {
  // Node
  slide4.addShape(pptx.ShapeType.roundRect, {
    x: s.x,
    y: s.y,
    w: 2.4,
    h: 1.2,
    rectRadius: 0.1,
    fill: { color: LIGHT_BG },
    line: { color: BORDER, width: 1 },
  });
  slide4.addText(s.label, {
    x: s.x,
    y: s.y,
    w: 2.4,
    h: 1.2,
    fontSize: 12,
    fontFace: FONT_BODY,
    color: TEXT,
    bold: true,
    align: "center",
    valign: "middle",
    lineSpacingMultiple: 1.3,
  });

  // Connection line (simple dash)
  const lineStartX = s.x < 5 ? s.x + 2.4 : s.x;
  const lineEndX = s.x < 5 ? 5.46 : 7.86;
  const lineY = s.y + 0.6;

  slide4.addShape(pptx.ShapeType.line, {
    x: lineStartX,
    y: lineY,
    w: Math.abs(lineEndX - lineStartX),
    h: 0,
    line: { color: BORDER, width: 1.5, dashType: "dash" },
  });
});

// Bottom quote
slide4.addText(
  "\u201CThis work requires someone at the intersection of neuroscience and AI. That intersection is rare.\u201D",
  {
    x: 2,
    y: 6.0,
    w: 9.33,
    h: 0.5,
    fontSize: 13,
    fontFace: FONT_BODY,
    color: TEXT,
    italic: true,
    align: "center",
  }
);

// ═══════════════════════════════════════════════════════════════════════
// SLIDE 5 — Validation (3 big proof icons)
// ═══════════════════════════════════════════════════════════════════════
const slide5 = pptx.addSlide();
slide5.background = { color: WHITE };

addLabel(slide5, "VALIDATION");
addTitle(slide5, "Research foundation already in place");

// Three large proof blocks
const proofs = [
  {
    x: 0.8,
    symbol: "\uD83D\uDCCB",
    number: "Peer-Reviewed",
    label: "Publications",
    sub: "NeuroAI & emotion perception\nComputational brain-body models",
  },
  {
    x: 4.8,
    symbol: "\uD83C\uDFDB",
    number: "University of Florida",
    label: "Collaborations",
    sub: "Active lab partnerships\nTop public research university",
  },
  {
    x: 8.8,
    symbol: "\u2713",
    number: "NSF",
    label: "Funded",
    sub: "Federal peer review passed\nValidated research program",
  },
];

proofs.forEach((p) => {
  // Background card
  slide5.addShape(pptx.ShapeType.roundRect, {
    x: p.x,
    y: 2.0,
    w: 3.73,
    h: 4.0,
    rectRadius: 0.1,
    fill: { color: LIGHT_BG },
    line: { color: BORDER, width: 1 },
  });

  // Large accent circle
  slide5.addShape(pptx.ShapeType.ellipse, {
    x: p.x + 1.17,
    y: 2.4,
    w: 1.4,
    h: 1.4,
    fill: { color: ACCENT },
  });

  slide5.addText(p.symbol, {
    x: p.x + 1.17,
    y: 2.55,
    w: 1.4,
    h: 1.1,
    fontSize: 28,
    color: WHITE,
    align: "center",
    valign: "middle",
  });

  // Number / big label
  slide5.addText(p.number, {
    x: p.x,
    y: 4.0,
    w: 3.73,
    h: 0.4,
    fontSize: 14,
    fontFace: FONT_MONO,
    color: ACCENT,
    bold: true,
    align: "center",
  });

  slide5.addText(p.label, {
    x: p.x,
    y: 4.35,
    w: 3.73,
    h: 0.45,
    fontSize: 18,
    fontFace: FONT_BODY,
    color: TEXT,
    bold: true,
    align: "center",
  });

  // Sub text
  slide5.addText(p.sub, {
    x: p.x + 0.3,
    y: 4.9,
    w: 3.13,
    h: 0.8,
    fontSize: 11,
    fontFace: FONT_BODY,
    color: TEXT_SEC,
    align: "center",
    lineSpacingMultiple: 1.4,
  });
});

// ═══════════════════════════════════════════════════════════════════════
// SLIDE 6 — Roadmap (visual timeline)
// ═══════════════════════════════════════════════════════════════════════
const slide6 = pptx.addSlide();
slide6.background = { color: WHITE };

addLabel(slide6, "ROADMAP");
addTitle(slide6, "From foundation to translation in 24 months");

// Timeline bar
slide6.addShape(pptx.ShapeType.rect, {
  x: 1.5,
  y: 3.55,
  w: 10.33,
  h: 0.1,
  fill: { color: BORDER },
});

// Year 1 milestone
slide6.addShape(pptx.ShapeType.ellipse, {
  x: 3.5,
  y: 3.1,
  w: 1.0,
  h: 1.0,
  fill: { color: ACCENT },
});
slide6.addText("Y1", {
  x: 3.5,
  y: 3.1,
  w: 1.0,
  h: 1.0,
  fontSize: 18,
  fontFace: FONT_MONO,
  color: WHITE,
  bold: true,
  align: "center",
  valign: "middle",
});

slide6.addText("Build the Engine", {
  x: 2.0,
  y: 4.3,
  w: 4.0,
  h: 0.4,
  fontSize: 16,
  fontFace: FONT_BODY,
  color: TEXT,
  bold: true,
  align: "center",
});

slide6.addText("Hire team  \u00B7  Infrastructure\nPartnerships  \u00B7  Publish", {
  x: 2.0,
  y: 4.8,
  w: 4.0,
  h: 0.8,
  fontSize: 12,
  fontFace: FONT_BODY,
  color: TEXT_SEC,
  align: "center",
  lineSpacingMultiple: 1.5,
});

// Arrow on timeline
slide6.addText("\u25B6", {
  x: 6.1,
  y: 3.25,
  w: 0.6,
  h: 0.7,
  fontSize: 16,
  color: ACCENT,
  align: "center",
  valign: "middle",
});

// Year 2 milestone
slide6.addShape(pptx.ShapeType.ellipse, {
  x: 8.5,
  y: 3.1,
  w: 1.0,
  h: 1.0,
  fill: { color: ACCENT },
});
slide6.addText("Y2", {
  x: 8.5,
  y: 3.1,
  w: 1.0,
  h: 1.0,
  fontSize: 18,
  fontFace: FONT_MONO,
  color: WHITE,
  bold: true,
  align: "center",
  valign: "middle",
});

slide6.addText("Prove the Model", {
  x: 7.0,
  y: 4.3,
  w: 4.0,
  h: 0.4,
  fontSize: 16,
  fontFace: FONT_BODY,
  color: TEXT,
  bold: true,
  align: "center",
});

slide6.addText("Pilot study  \u00B7  Prototype tool\nClinical evidence  \u00B7  Major grant ready", {
  x: 7.0,
  y: 4.8,
  w: 4.0,
  h: 0.8,
  fontSize: 12,
  fontFace: FONT_BODY,
  color: TEXT_SEC,
  align: "center",
  lineSpacingMultiple: 1.5,
});

// Future arrow
slide6.addText("\u25B6  10\u00D7 follow-on funding", {
  x: 8.5,
  y: 6.0,
  w: 4.0,
  h: 0.4,
  fontSize: 12,
  fontFace: FONT_MONO,
  color: ACCENT,
  bold: true,
  align: "center",
});

// Bottom callout
slide6.addShape(pptx.ShapeType.roundRect, {
  x: 0.8,
  y: 6.5,
  w: 11.73,
  h: 0.6,
  rectRadius: 0.06,
  fill: { color: ACCENT_LIGHT },
});
slide6.addText(
  "Each milestone unlocks the next stage of funding.",
  {
    x: 0.8,
    y: 6.5,
    w: 11.73,
    h: 0.6,
    fontSize: 13,
    fontFace: FONT_BODY,
    color: ACCENT,
    bold: true,
    align: "center",
    valign: "middle",
  }
);

// ═══════════════════════════════════════════════════════════════════════
// SLIDE 7 — The Ask (big number + 4 icon blocks)
// ═══════════════════════════════════════════════════════════════════════
const slide7 = pptx.addSlide();
slide7.background = { color: WHITE };

addLabel(slide7, "THE ASK");

// Big number
slide7.addText("$1M \u2013 $3M", {
  x: 0.8,
  y: 0.8,
  w: 11.73,
  h: 1.6,
  fontSize: 72,
  fontFace: FONT_SERIF,
  color: TEXT,
  align: "center",
});

slide7.addText("seed funding", {
  x: 0.8,
  y: 2.1,
  w: 11.73,
  h: 0.5,
  fontSize: 16,
  fontFace: FONT_MONO,
  color: TEXT_SEC,
  align: "center",
});

// 4 allocation blocks
const allocations = [
  { symbol: "\uD83D\uDC65", label: "Research Team", sub: "3\u20135 hires" },
  { symbol: "\u2699", label: "Infrastructure", sub: "Compute & data" },
  { symbol: "\uD83E\uDDEA", label: "Pilot Study", sub: "Y2 clinical proof" },
  { symbol: "\uD83D\uDD2C", label: "Partnerships", sub: "Research collaborations" },
];

allocations.forEach((a, i) => {
  const ax = 0.8 + i * 3.2;

  slide7.addShape(pptx.ShapeType.roundRect, {
    x: ax,
    y: 3.2,
    w: 2.93,
    h: 2.2,
    rectRadius: 0.1,
    fill: { color: LIGHT_BG },
    line: { color: BORDER, width: 1 },
  });

  slide7.addText(a.symbol, {
    x: ax,
    y: 3.3,
    w: 2.93,
    h: 0.8,
    fontSize: 28,
    align: "center",
    valign: "middle",
  });

  slide7.addText(a.label, {
    x: ax,
    y: 4.1,
    w: 2.93,
    h: 0.4,
    fontSize: 14,
    fontFace: FONT_BODY,
    color: TEXT,
    bold: true,
    align: "center",
  });

  slide7.addText(a.sub, {
    x: ax,
    y: 4.5,
    w: 2.93,
    h: 0.4,
    fontSize: 11,
    fontFace: FONT_BODY,
    color: TEXT_SEC,
    align: "center",
  });
});

// Bottom bargain line
slide7.addShape(pptx.ShapeType.roundRect, {
  x: 0.8,
  y: 5.9,
  w: 11.73,
  h: 0.8,
  rectRadius: 0.06,
  fill: { color: ACCENT_LIGHT },
});
slide7.addText(
  "Science is ready  \u00B7  Team is ready  \u00B7  Your funding bridges research to prototype",
  {
    x: 0.8,
    y: 5.9,
    w: 11.73,
    h: 0.8,
    fontSize: 13,
    fontFace: FONT_BODY,
    color: ACCENT,
    bold: true,
    align: "center",
    valign: "middle",
  }
);

// ═══════════════════════════════════════════════════════════════════════
// SLIDE 8 — Close (tagline only, clean)
// ═══════════════════════════════════════════════════════════════════════
const slide8 = pptx.addSlide();
slide8.background = { color: WHITE };

slide8.addText("Neurons to Mind. Brain to AI.", {
  x: 1.5,
  y: 2.5,
  w: 10.33,
  h: 1.2,
  fontSize: 42,
  fontFace: FONT_SERIF,
  color: TEXT,
  align: "center",
});

// Thin accent line
slide8.addShape(pptx.ShapeType.rect, {
  x: 5.66,
  y: 4.0,
  w: 2.0,
  h: 0.04,
  fill: { color: ACCENT },
});

slide8.addText(
  "We\u2019re ready to build \u2014 and we\u2019re asking you to build with us.",
  {
    x: 1.5,
    y: 4.3,
    w: 10.33,
    h: 0.6,
    fontSize: 16,
    fontFace: FONT_BODY,
    color: TEXT_SEC,
    align: "center",
  }
);

slide8.addText("info@neuroaimind.org", {
  x: 1.5,
  y: 5.8,
  w: 10.33,
  h: 0.4,
  fontSize: 12,
  fontFace: FONT_MONO,
  color: TEXT_SEC,
  align: "center",
});

slide8.addText("NeuroAI Mind Labs", {
  x: 1.5,
  y: 6.2,
  w: 10.33,
  h: 0.4,
  fontSize: 11,
  fontFace: FONT_MONO,
  color: BORDER,
  align: "center",
});

// ═══════════════════════════════════════════════════════════════════════
// Generate
// ═══════════════════════════════════════════════════════════════════════
const outPath = resolve(__dirname, "../docs/NeuroAI-Mind-Labs-Pitch-Deck.pptx");

async function generate() {
  const data = await pptx.write({ outputType: "nodebuffer" });
  writeFileSync(outPath, data);
  console.log(`\n\u2713 Pitch deck saved to: ${outPath}\n`);
}

generate().catch((err) => {
  console.error("Error generating deck:", err);
  process.exit(1);
});
