// src/agape/journeys/JourneyMovement.jsx
import React from "react";
import SacredCard from "../components/SacredCard";
import ReflectionPrompt from "../components/ReflectionPrompt";

export default function JourneyMovement() {
  const prompts = [
    "What emotions live in your shoulders, jaw, or hips?",
    "When was the last time you moved purely for joy?",
    "How does slow, intentional movement change your thoughts?",
  ];

  return (
    <section className="space-y-10">
      <div className="text-center space-y-3">
        <p className="text-[0.7rem] tracking-[0.35em] uppercase text-emerald-400/70">
          Journey: Movement
        </p>
        <h2 className="text-3xl font-playfair text-emerald-200">
          Returning to the Body
        </h2>
        <p className="text-gray-400 text-sm max-w-2xl mx-auto">
          Movement here is not performance. It is a conversation with your body—through tai chi,
          slow flow, and somatic awareness—that teaches you how to inhabit yourself fully.
        </p>
      </div>

      <SacredCard label="Practice" title="Five Minutes of Slow Flow">
        <p>
          Stand with feet hip‑width apart. Begin with gentle circles of the wrists, then shoulders,
          then hips. Let the movements be slow and continuous, as if you are moving through water.
          Notice sensations, temperature, and subtle shifts in balance.
        </p>
      </SacredCard>

      <SacredCard label="Science" title="Movement & the Nervous System" accent="slate">
        <p>
          Slow, mindful movement practices like tai chi have been associated with improvements in
          balance, anxiety, and cardiovascular health. They can also support nervous system regulation
          by pairing movement with breath and attention.
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
