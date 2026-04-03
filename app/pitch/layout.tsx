import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NeuroAI Mind Labs — Investor Pitch",
  description:
    "Bridging brain science and AI to advance mental health. Seed funding pitch deck.",
};

export default function PitchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
