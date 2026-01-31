// src/agape/events/EventsGatherings.jsx
import React from "react";
import CircleCard from "../components/CircleCard";

export default function EventsGatherings() {
  const gatherings = [
    {
      type: "Circle",
      title: "Stories of God Outside the Walls",
      description: "A recurring gathering to share spiritual experiences beyond institutions.",
      note: "Future: recurring schedule, themes, and community facilitation.",
    },
    {
      type: "Community Night",
      title: "Practice & Potluck",
      description: "An evening of shared practice followed by a communal meal.",
      note: "Future: sign‑ups, shared guidelines, and integration prompts.",
    },
  ];

  return (
    <section className="space-y-8">
      <div className="text-center space-y-3">
        <p className="text-[0.7rem] tracking-[0.35em] uppercase text-emerald-400/70">
          Gatherings
        </p>
        <h2 className="text-3xl font-playfair text-emerald-200">
          Being Together on Purpose
        </h2>
        <p className="text-gray-400 text-sm max-w-2xl mx-auto">
          Gatherings are the heartbeat of Agape—moments where we show up, in real time, to practice,
          listen, and be changed by each other’s presence.
        </p>
      </div>

      <div className="space-y-5">
        {gatherings.map((g) => (
          <CircleCard
            key={g.title}
            type={g.type}
            title={g.title}
            description={g.description}
            note={g.note}
          />
        ))}
      </div>
    </section>
  );
}
