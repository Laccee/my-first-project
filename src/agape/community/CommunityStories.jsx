 // src/agape/community/CommunityStories.jsx
 import React from "react";
import SacredCard from "../components/SacredCard";

export default function CommunityStories() {
  const placeholders = [
    {
      title: "Leaving the Building, Finding the Presence",
      body: "A story about discovering God/Source outside of traditional spaces.",
    },
    {
      title: "Discipline After Burnout",
      body: "A journey from exhaustion to gentle, sustainable practice.",
    },
  ];

  return (
    <section className="space-y-8">
      <div className="text-center space-y-3">
        <p className="text-[0.7rem] tracking-[0.35em] uppercase text-emerald-400/70">
          Community Stories
        </p>
        <h2 className="text-3xl font-playfair text-emerald-200">
          Journeys Shared in Honesty
        </h2>
        <p className="text-gray-400 text-sm max-w-2xl mx-auto">
          Stories are how we make sense of our lives. This space is for honest accounts of
          doubt, discovery, discipline, and rediscovery of Source beyond old narratives.
        </p>
      </div>

      <div className="space-y-5">
        {placeholders.map((s) => (
          <SacredCard key={s.title} label="Story" title={s.title}>
            <p>{s.body}</p>
            <p className="text-gray-500 text-xs mt-3 italic">
              Future: anonymous or named submissions, audio stories, and themed collections.
            </p>
          </SacredCard>
        ))}
      </div>
    </section>
  );
}
