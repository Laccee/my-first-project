import React from "react";
import AgapeWelcome from "./AgapeWelcome";
import AgapePrinciples from "./AgapePrinciples";

export default function AgapeHome() {
  return (
    <div className="space-y-16">
      <AgapeWelcome />
      <AgapePrinciples />

      <section className="mt-6 grid md:grid-cols-3 gap-6 text-sm text-gray-400">
        <Teaser
          label="Journeys"
          title="Practice as a Way of Life"
          body="Meditation, breath, movement, and stillness experiences designed to be lived, not just read."
        />
        <Teaser
          label="Studies"
          title="Science that Honors the Mystery"
          body="Curated research on consciousness, plant medicine, and mind‑body practices."
        />
        <Teaser
          label="Community"
          title="You Don’t Walk Alone"
          body="Circles, reflections, and shared actions with others on the path."
        />
      </section>
    </div>
  );
}

function Teaser({ label, title, body }) {
  return (
    <div className="bg-black/60 border border-gray-800 rounded-2xl p-5">
      <p className="text-[0.65rem] tracking-[0.3em] uppercase text-emerald-400/70">
        {label}
      </p>
      <h4 className="text-emerald-200 mt-2 text-sm font-semibold">{title}</h4>
      <p className="mt-2 text-gray-400 text-xs">{body}</p>
    </div>
  );
}
