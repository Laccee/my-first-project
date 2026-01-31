// src/agape/studies/StudyMindBody.jsx
import React from "react";
import StudyCard from "../components/StudyCard";

export default function StudyMindBody() {
  const items = [
    {
      title: "Stress & Meditation",
      summary:
        "Various studies suggest that regular meditation practice can support reductions in perceived stress and improvements in emotional regulation.",
    },
    {
      title: "Body Awareness & Emotion",
      summary:
        "Research into interoception—the perception of internal bodily states—explores how body awareness relates to emotional experience and regulation.",
    },
    {
      title: "Sleep, Rest & Recovery",
      summary:
        "Mind‑body practices may complement healthy sleep habits, supporting overall well‑being and cognitive function.",
    },
  ];

  return (
    <section className="space-y-8">
      <div className="text-center space-y-3">
        <p className="text-[0.7rem] tracking-[0.35em] uppercase text-emerald-400/70">
          Studies: Mind‑Body
        </p>
        <h2 className="text-3xl font-playfair text-emerald-200">
          Where Thought Meets Flesh
        </h2>
        <p className="text-gray-400 text-sm max-w-2xl mx-auto">
          Mind‑body research explores how practices like meditation, breathwork, and gentle movement
          may influence stress, mood, and physical health. These summaries offer a starting point
          for deeper exploration.
        </p>
      </div>

      <div className="space-y-5">
        {items.map((i) => (
          <StudyCard
            key={i.title}
            area="Mind‑Body"
            title={i.title}
            summary={i.summary}
            note="Future: practice pairings and integration notes."
          />
        ))}
      </div>
    </section>
  );
}
