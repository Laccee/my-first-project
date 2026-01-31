import React from "react";

export default function AgapeWelcome() {
  return (
    <section className="space-y-10">
      <div className="text-center space-y-4">
        <p className="text-[0.7rem] tracking-[0.35em] uppercase text-emerald-400/80">
          You did not arrive here by accident
        </p>
        <h2 className="text-3xl md:text-5xl font-playfair text-emerald-200">
          A Sanctuary for the Open‑Hearted Mind
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
          Agape is a living space for those willing to question, to discipline themselves, 
          and to rediscover God/Source beyond inherited stories—through science, practice, and community.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <Pillar
          title="See Clearly"
          body="Turn toward your own patterns, beliefs, and stories with radical honesty and compassion."
        />
        <Pillar
          title="Practice Deeply"
          body="Meditation, movement, breath, and stillness—rituals that turn insight into embodied wisdom."
        />
        <Pillar
          title="Walk Together"
          body="Circles, reflections, and shared journeys with others who are also seeking more."
        />
      </div>
    </section>
  );
}

function Pillar({ title, body }) {
  return (
    <div className="bg-black/70 border border-emerald-900/60 rounded-2xl p-5 shadow-[0_0_40px_rgba(16,185,129,0.08)]">
      <h3 className="text-emerald-200 text-lg mb-2">{title}</h3>
      <p className="text-gray-400 text-sm">{body}</p>
    </div>
  );
}
