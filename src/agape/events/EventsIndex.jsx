// src/agape/events/EventsIndex.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function EventsIndex() {
  const categories = [
    {
      label: "Retreats",
      path: "/agape/events/retreats",
      summary:
        "Immersive, multi‑day containers for silence, movement, and shared inquiry.",
    },
    {
      label: "Workshops",
      path: "/agape/events/workshops",
      summary:
        "Live sessions blending research, practice, and conversation.",
    },
    {
      label: "Gatherings",
      path: "/agape/events/gatherings",
      summary:
        "Circles, community nights, and shared practice experiences.",
    },
  ];

  return (
    <section className="space-y-12">
      <div className="text-center space-y-3">
        <p className="text-[0.7rem] tracking-[0.35em] uppercase text-emerald-400/70">
          From Screen to Embodiment
        </p>
        <h2 className="text-3xl font-playfair text-emerald-200">
          Gatherings & Retreats
        </h2>
        <p className="text-gray-400 text-sm max-w-2xl mx-auto">
          Agape is meant to be lived. These gatherings invite you deeper into practice,
          community, and Source.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {categories.map((c) => (
          <Link
            key={c.label}
            to={c.path}
            className="bg-[#020712] border border-gray-800 rounded-2xl p-6 hover:border-emerald-500/60 transition-colors"
          >
            <p className="text-[0.65rem] tracking-[0.3em] uppercase text-emerald-400/70">
              {c.label}
            </p>
            <h3 className="text-emerald-200 text-lg mt-2">{c.label}</h3>
            <p className="text-gray-400 text-sm mt-2">{c.summary}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
