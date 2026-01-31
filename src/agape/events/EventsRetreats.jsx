// src/agape/events/EventsRetreats.jsx
import React from "react";
import CircleCard from "../components/CircleCard";

export default function EventsRetreats() {
  const retreats = [
    {
      type: "Retreat",
      title: "Agape Weekend: Stillness & Source",
      description: "An intimate, multi‑day container for silence, movement, and shared inquiry.",
      note: "Future: detailed itinerary, application process, and integration support.",
    },
  ];

  return (
    <section className="space-y-8">
      <div className="text-center space-y-3">
        <p className="text-[0.7rem] tracking-[0.35em] uppercase text-emerald-400/70">
          Retreats
        </p>
        <h2 className="text-3xl font-playfair text-emerald-200">
          Stepping Out to Step In
        </h2>
        <p className="text-gray-400 text-sm max-w-2xl mx-auto">
          Retreats are immersive experiences designed to remove distractions and deepen your
          relationship with practice, community, and Source.
        </p>
      </div>

      <div className="space-y-5">
        {retreats.map((r) => (
          <CircleCard
            key={r.title}
            type={r.type}
            title={r.title}
            description={r.description}
            note={r.note}
          />
        ))}
      </div>
    </section>
  );
}
