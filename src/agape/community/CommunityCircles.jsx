// src/agape/community/CommunityCircles.jsx
import React from "react";
import CircleCard from "../components/CircleCard";

export default function CommunityCircles() {
  const circles = [
    {
      type: "Circle",
      title: "Exploring God Beyond Dogma",
      description: "A facilitated conversation about spiritual experiences outside traditional frameworks.",
      note: "Future: live sessions, replays, and guided prompts.",
    },
    {
      type: "Circle",
      title: "Discipline & Resistance",
      description: "A space to talk about the real challenges of staying consistent with practice.",
      note: "Future: accountability partners and small pods.",
    },
  ];

  return (
    <section className="space-y-8">
      <div className="text-center space-y-3">
        <p className="text-[0.7rem] tracking-[0.35em] uppercase text-emerald-400/70">
          Community Circles
        </p>
        <h2 className="text-3xl font-playfair text-emerald-200">
          Conversations that Transform
        </h2>
        <p className="text-gray-400 text-sm max-w-2xl mx-auto">
          Circles are where we speak, listen, and witness each other. Not to debate or perform,
          but to be changed by honest presence.
        </p>
      </div>

      <div className="space-y-5">
        {circles.map((c) => (
          <CircleCard
            key={c.title}
            type={c.type}
            title={c.title}
            description={c.description}
            note={c.note}
          />
        ))}
      </div>
    </section>
  );
}
