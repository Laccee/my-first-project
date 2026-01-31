// src/agape/studies/StudyMovementScience.jsx
import React from "react";
import StudyCard from "../components/StudyCard";

export default function StudyMovementScience() {
  const items = [
    {
      title: "Balance & Tai Chi",
      summary:
        "Studies suggest tai chi can improve balance and reduce fall risk, particularly in older adults.",
    },
    {
      title: "Movement & Mood",
      summary:
        "Gentle, rhythmic movement practices have been associated with reductions in anxiety and improvements in overall mood.",
    },
    {
      title: "Joint Health & Low‑Impact Exercise",
      summary:
        "Low‑impact movement can support mobility and joint health without the strain of high‑intensity exercise.",
    },
  ];

  return (
    <section className="space-y-8">
      <div className="text-center space-y-3">
        <p className="text-[0.7rem] tracking-[0.35em] uppercase text-emerald-400/70">
          Studies: Movement
        </p>
        <h2 className="text-3xl font-playfair text-emerald-200">
          The Science of Gentle Motion
        </h2>
        <p className="text-gray-400 text-sm max-w-2xl mx-auto">
          Movement science looks at how practices like tai chi and slow flow can support physical
          and emotional well‑being. These summaries highlight potential benefits without prescribing
          specific regimens.
        </p>
      </div>

      <div className="space-y-5">
        {items.map((i) => (
          <StudyCard
            key={i.title}
            area="Movement"
            title={i.title}
            summary={i.summary}
            note="Future: visual breakdowns of movement patterns and progressions."
          />
        ))}
      </div>
    </section>
  );
}
