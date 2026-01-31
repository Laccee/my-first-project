// src/agape/events/EventsWorkshops.jsx
import React from "react";
import CircleCard from "../components/CircleCard";

export default function EventsWorkshops() {
  const workshops = [
    {
      type: "Workshop",
      title: "Meditation & the Brain",
      description: "A session weaving together research and guided practice.",
      note: "Future: live Q&A, recordings, and resource lists.",
    },
    {
      type: "Workshop",
      title: "Breath & Regulation",
      description: "Exploring how breath patterns can support emotional balance.",
      note: "Future: practice library and follow‑up check‑ins.",
    },
  ];

  return (
    <section className="space-y-8">
      <div className="text-center space-y-3">
        <p className="text-[0.7rem] tracking-[0.35em] uppercase text-emerald-400/70">
          Workshops
        </p>
        <h2 className="text-3xl font-playfair text-emerald-200">
          Learning in Real Time
        </h2>
        <p className="text-gray-400 text-sm max-w-2xl mx-auto">
          Workshops blend teaching, practice, and conversation. They are designed to be both
          informative and immediately usable in daily life.
        </p>
      </div>

      <div className="space-y-5">
        {workshops.map((w) => (
          <CircleCard
            key={w.title}
            type={w.type}
            title={w.title}
            description={w.description}
            note={w.note}
          />
        ))}
      </div>
    </section>
  );
}
