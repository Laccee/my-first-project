// src/agape/journeys/JourneyIntegration.jsx
import React from "react";
import SacredCard from "../components/SacredCard";
import ReflectionPrompt from "../components/ReflectionPrompt";

export default function JourneyIntegration() {
  const prompts = [
    "What is one small practice you are willing to commit to for 7 days?",
    "How do you respond when you miss a day—do you punish or forgive yourself?",
    "What would it look like to live your insights, not just think them?",
  ];

  return (
    <section className="space-y-10">
      <div className="text-center space-y-3">
        <p className="text-[0.7rem] tracking-[0.35em] uppercase text-emerald-400/70">
          Journey: Integration
        </p>
        <h2 className="text-3xl font-playfair text-emerald-200">
          Turning Insight into Life
        </h2>
        <p className="text-gray-400 text-sm max-w-2xl mx-auto">
          Integration is where the work becomes real. It is the art of weaving your practices,
          insights, and experiences into the way you move through the world every day.
        </p>
      </div>

      <SacredCard label="Practice" title="The 7‑Day Devotion">
        <p>
          Choose one simple practice—5 minutes of meditation, a short walk, a breathing pattern,
          a nightly reflection. Commit to it for 7 days. Track how you feel before and after each
          session. At the end, review what changed, what resisted, and what you learned about yourself.
        </p>
      </SacredCard>

      <SacredCard label="Science" title="Habits & Neuroplasticity" accent="slate">
        <p>
          Repeated behaviors can strengthen neural pathways over time, making certain responses
          more likely. Consistent, small practices can gradually reshape patterns of attention,
          emotion, and behavior in meaningful ways.
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
