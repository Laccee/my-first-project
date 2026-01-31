// src/agape/community/CommunityReflections.jsx
import React from "react";
import ReflectionPrompt from "../components/ReflectionPrompt";

export default function CommunityReflections() {
  const prompts = [
    "What belief about God/Source are you currently re‑examining?",
    "Where in your life do you feel most called to grow right now?",
    "What does 'discipline as devotion' mean to you personally?",
  ];

  return (
    <section className="space-y-8">
      <div className="text-center space-y-3">
        <p className="text-[0.7rem] tracking-[0.35em] uppercase text-emerald-400/70">
          Community Reflections
        </p>
        <h2 className="text-3xl font-playfair text-emerald-200">
          Questions that Open Doors
        </h2>
        <p className="text-gray-400 text-sm max-w-2xl mx-auto">
          Reflection is where experience becomes wisdom. These prompts are invitations to journal,
          voice‑note, or simply sit with what arises.
        </p>
      </div>

      <div className="bg-[#020712] border border-emerald-900/60 rounded-2xl p-6 space-y-3">
        <h3 className="text-emerald-200 text-lg">Prompts</h3>
        <div className="space-y-2">
          {prompts.map((p) => (
            <ReflectionPrompt key={p} prompt={p} />
          ))}
        </div>
        <p className="text-gray-500 text-xs mt-3 italic">
          Future: private journals, optional sharing, and guided reflection series.
        </p>
      </div>
    </section>
  );
}
