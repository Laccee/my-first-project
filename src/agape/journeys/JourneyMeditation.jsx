// src/agape/journeys/JourneyMeditation.jsx
import React from "react";
import ReflectionPrompt from "../components/ReflectionPrompt";
import SacredCard from "../components/SacredCard";

export default function JourneyMeditation() {
  const prompts = [
    "What happens in your body when you sit in silence for 5 minutes?",
    "What stories arise when you try to do nothing?",
    "How do you know when you are actually present?",
  ];

  return (
    <section className="space-y-10">
      <div className="text-center space-y-3">
        <p className="text-[0.7rem] tracking-[0.35em] uppercase text-emerald-400/70">
          Journey: Meditation
        </p>
        <h2 className="text-3xl font-playfair text-emerald-200">
          Learning to Sit with Yourself
        </h2>
        <p className="text-gray-400 text-sm max-w-2xl mx-auto">
          Meditation here is not about emptying the mind, but about meeting yourself honestly—
          breath by breath, moment by moment, without needing to fix or flee.
        </p>
      </div>

      <SacredCard label="Practice" title="A Simple Daily Sit">
        <p>
          Choose a time of day you can realistically honor. Sit comfortably, spine tall but not rigid.
          Set a timer for 5–10 minutes. Let your attention rest on the breath at the nostrils or chest.
          When the mind wanders, gently notice where it went, and return to the breath without judgment.
        </p>
        <p className="text-gray-500 text-xs mt-3 italic">
          Future: guided audio, streak tracking, and personalized reminders.
        </p>
      </SacredCard>

      <SacredCard label="Science" title="Why This Matters" accent="slate">
        <p>
          Regular meditation practice has been associated with changes in brain regions involved in
          attention, emotional regulation, and self‑awareness. Over time, this can support greater
          resilience, clarity, and capacity to pause before reacting.
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
