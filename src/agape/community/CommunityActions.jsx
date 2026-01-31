// src/agape/community/CommunityActions.jsx
import React from "react";
import SacredCard from "../components/SacredCard";

export default function CommunityActions() {
  const actions = [
    {
      title: "7‑Day Presence Challenge",
      body: "Commit to 5 minutes of intentional presence each day—no phone, no distractions.",
    },
    {
      title: "Gratitude in Motion",
      body: "Pair a daily walk with naming three things you are grateful for, out loud.",
    },
  ];

  return (
    <section className="space-y-8">
      <div className="text-center space-y-3">
        <p className="text-[0.7rem] tracking-[0.35em] uppercase text-emerald-400/70">
          Community Actions
        </p>
        <h2 className="text-3xl font-playfair text-emerald-200">
          Discipline in Motion
        </h2>
        <p className="text-gray-400 text-sm max-w-2xl mx-auto">
          Action is where intention becomes reality. These challenges and invitations are designed
          to be simple, repeatable, and deeply human.
        </p>
      </div>

      <div className="space-y-5">
        {actions.map((a) => (
          <SacredCard key={a.title} label="Practice" title={a.title}>
            <p>{a.body}</p>
            <p className="text-gray-500 text-xs mt-3 italic">
              Future: shared progress, check‑ins, and community accountability.
            </p>
          </SacredCard>
        ))}
      </div>
    </section>
  );
}
