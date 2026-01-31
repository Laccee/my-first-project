// src/agape/journeys/JourneyStillness.jsx
import React from "react";
import SacredCard from "../components/SacredCard";
import ReflectionPrompt from "../components/ReflectionPrompt";

export default function JourneyStillness() {
  const prompts = [
    "What do you notice when external noise fades?",
    "Is there any part of you that fears stillness? Why?",
    "What truths become clearer when you stop distracting yourself?",
  ];

  return (
    <section className="space-y-10">
      <div className="text-center space-y-3">
        <p className="text-[0.7rem] tracking-[0.35em] uppercase text-emerald-400/70">
          Journey: Stillness
        </p>
        <h2 className="text-3xl font-playfair text-emerald-200">
          Meeting the Quiet
        </h2>
        <p className="text-gray-400 text-sm max-w-2xl mx-auto">
          Stillness is not the absence of life, but the space where life can be seen clearly.
          This journey invites you to step away from constant input and rest in the quiet.
        </p>
      </div>

      <SacredCard label="Practice" title="Micro‑Retreats">
        <p>
          Once a day, step away from screens and conversation for 10–15 minutes. Sit or lie down
          in a comfortable position. No music, no podcasts, no reading. Simply be with whatever
          arises—sensations, thoughts, emotions—without needing to change them.
        </p>
      </SacredCard>

      <SacredCard label="Science" title="Silence & the Brain" accent="slate">
        <p>
          Periods of quiet and reduced sensory input may support restoration of attention and
          stress reduction. While research is still emerging, intentional stillness can complement
          other practices that support mental clarity and emotional balance.
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
