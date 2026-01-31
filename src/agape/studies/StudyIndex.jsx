import React from "react";
import { Link } from "react-router-dom";

export default function StudyIndex() {
  const areas = [
    {
      label: "Consciousness",
      path: "/agape/studies/consciousness",
      summary:
        "Exploring awareness, attention, the self, and the edges of what science can measure.",
    },
    {
      label: "Plant Medicine",
      path: "/agape/studies/plant-medicine",
      summary:
        "Educational summaries of research into psychedelic‑assisted therapy and cultural context.",
    },
    {
      label: "Mind‑Body",
      path: "/agape/studies/mind-body",
      summary:
        "Meditation, stress, interoception, sleep, and the science of emotional regulation.",
    },
    {
      label: "Movement Science",
      path: "/agape/studies/movement-science",
      summary:
        "Tai chi, somatics, mobility, and the physiology of gentle, intentional movement.",
    },
  ];

  return (
    <section className="space-y-12">
      <div className="text-center space-y-3">
        <p className="text-[0.7rem] tracking-[0.35em] uppercase text-emerald-400/70">
          Science as Lantern
        </p>
        <h2 className="text-3xl font-playfair text-emerald-200">
          Studies & Research Library
        </h2>
        <p className="text-gray-400 text-sm max-w-2xl mx-auto">
          A curated, accessible library summarizing peer‑reviewed research across consciousness,
          movement, mind‑body practices, and plant medicine.  
          Not medical advice — an invitation to learn.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {areas.map((a) => (
          <Link
            key={a.label}
            to={a.path}
            className="bg-[#020712] border border-gray-800 rounded-2xl p-6 hover:border-emerald-500/60 transition-colors"
          >
            <p className="text-[0.65rem] tracking-[0.3em] uppercase text-emerald-400/70">
              {a.label}
            </p>
            <h3 className="text-emerald-200 text-lg mt-2">{a.label}</h3>
            <p className="text-gray-400 text-sm mt-2">{a.summary}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
