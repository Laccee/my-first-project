// src/agape/journeys/JourneyIndex.jsx
import React from "react";
import { Link } from "react-router-dom";

const JOURNEYS = [
  {
    label: "Meditation",
    tag: "Presence",
    path: "/agape/journeys/meditation",
    summary:
      "Sit with yourself gently. Learn to witness without clinging or pushing away.",
  },
  {
    label: "Breath",
    tag: "Regulation",
    path: "/agape/journeys/breath",
    summary:
      "Use the breath as a bridge between body and mind, shifting your state with intention.",
  },
  {
    label: "Movement",
    tag: "Flow",
    path: "/agape/journeys/movement",
    summary:
      "Tai chi, slow flow, and somatic practices that teach you to inhabit your body fully.",
  },
  {
    label: "Stillness",
    tag: "Silence",
    path: "/agape/journeys/stillness",
    summary:
      "Retreat into quiet, letting the noise fall away so you can hear what’s underneath.",
  },
  {
    label: "Integration",
    tag: "Embodiment",
    path: "/agape/journeys/integration",
    summary:
      "Turn insights into habits, rituals, and choices that reshape your life over time.",
  },
];

export default function JourneyIndex() {
  return (
    <section className="space-y-12">
      <div className="text-center space-y-3">
        <p className="text-[0.7rem] tracking-[0.35em] uppercase text-emerald-400/70">
          Practice as Devotion
        </p>
        <h2 className="text-3xl font-playfair text-emerald-200">
          Journeys of Discipline
        </h2>
        <p className="text-gray-400 text-sm max-w-2xl mx-auto">
          These journeys are not content to consume, but paths to walk.  
          Choose one, commit gently, and let repetition become revelation.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {JOURNEYS.map((j) => (
          <Link
            key={j.label}
            to={j.path}
            className="bg-[#020712] border border-emerald-900/60 rounded-2xl p-6 hover:border-emerald-500/60 transition-colors"
          >
            <p className="text-[0.65rem] tracking-[0.3em] uppercase text-emerald-400/70">
              {j.tag}
            </p>
            <h3 className="text-emerald-200 text-lg mt-2">{j.label}</h3>
            <p className="text-gray-400 text-sm mt-2">{j.summary}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
