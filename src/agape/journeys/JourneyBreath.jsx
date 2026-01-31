// src/agape/journeys/JourneyBreath.jsx
import React from "react";
import SacredCard from "../components/SacredCard";
import ReflectionPrompt from "../components/ReflectionPrompt";

export default function JourneyBreath() {
  const prompts = [
    "How shallow or deep is your breath right now?",
    "What emotions are linked to holding or restricting your breath?",
    "How does your thinking change after 5 minutes of intentional breathing?",
  ];

  return (
    <section className="space-y-10">
      <div className="text-center space-y-3">
        <p className="text-[0.7rem] tracking-[0.35em] uppercase text-emerald-400/70">
          Journey: Breath
        </p>
        <h2 className="text-3xl font-playfair text-emerald-200">
          The Bridge Between Worlds
        </h2>
        <p className="text-gray-400 text-sm max-w-2xl mx-auto">
          Breath is the meeting point of body and mind. By working with it intentionally, you can
          influence your state, your focus, and your capacity to stay present under stress.
        </p>
      </div>

      <SacredCard label="Practice" title="4‑6 Breathing">
        <p>
          Inhale gently through the nose for a count of 4. Exhale softly through the nose or mouth
          for a count of 6. Continue for 5–10 minutes. Let the exhale be smooth, not forced.
          Notice any shifts in tension, heart rate, or mental chatter.
        </p>
      </SacredCard>

      <SacredCard label="Science" title="Breath & Regulation" accent="slate">
        <p>
          Slow, extended exhalations can support activation of the parasympathetic nervous system,
          which is associated with rest and recovery. Breath practices are being studied for their
          potential to support stress management and emotional regulation.
        </p>
      </SacredCard>

      <div className="bg-[#020712] border border-emerald-900/60 rounded-2xl p-6 space-y-3">
        <h3 className="text-emerald-200 text-lg">Reflection Prompts</h3>
        <div className="space-y-2">
          {prompts.map((p) => (
            <ReflectionPrompt key={p} prompt={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
