// src/agape/studies/StudyConsciousness.jsx
import React from "react";
import StudyCard from "../components/StudyCard";

export default function StudyConsciousness() {
  const items = [
    {
      title: "Attention & Awareness",
      summary:
        "Research explores how focused attention and open monitoring meditation styles engage different neural networks related to awareness and cognitive control.",
    },
    {
      title: "Self & Default Mode Network",
      summary:
        "Studies suggest that certain contemplative practices may alter activity in brain regions associated with self‑referential thinking and mind‑wandering.",
    },
    {
      title: "Mystical Experiences",
      summary:
        "Some research attempts to quantify 'mystical‑type' experiences, examining their psychological impact while acknowledging their deeply subjective nature.",
    },
  ];

  return (
    <section className="space-y-8">
      <div className="text-center space-y-3">
        <p className="text-[0.7rem] tracking-[0.35em] uppercase text-emerald-400/70">
          Studies: Consciousness
        </p>
        <h2 className="text-3xl font-playfair text-emerald-200">
          Exploring Awareness
        </h2>
        <p className="text-gray-400 text-sm max-w-2xl mx-auto">
          Consciousness research sits at the edge of what we can measure and what we can only
          describe. These summaries offer a glimpse into how science approaches questions of mind,
          self, and awareness—without claiming to have the final word.
        </p>
      </div>

      <div className="space-y-5">
        {items.map((i) => (
          <StudyCard
            key={i.title}
            area="Consciousness"
            title={i.title}
            summary={i.summary}
            note="Future: links to specific studies and deeper commentary."
          />
        ))}
      </div>
    </section>
  );
}
