import React from "react";

const PRINCIPLES = [
  {
    title: "Radical Honesty with Self",
    body: "We turn toward our inner world without performance or pretending, willing to see what is true.",
  },
  {
    title: "Open‑Minded Reverence",
    body: "We explore God/Source with curiosity and respect, beyond dogma and mockery.",
  },
  {
    title: "Science as Lantern",
    body: "We honor research as a light that helps us see, without letting it erase the Mystery.",
  },
  {
    title: "Embodiment Over Abstraction",
    body: "Insight is incomplete until it is lived in the body through practice and behavior.",
  },
  {
    title: "Discipline as Devotion",
    body: "Consistency, structure, and effort are expressions of love—for self, for others, for Source.",
  },
  {
    title: "Community as Mirror",
    body: "We do not perform for each other; we witness, reflect, and hold space for each other’s becoming.",
  },
  {
    title: "Humility Before the Mystery",
    body: "We walk in awe, knowing no one here has all the answers.",
  },
];

export default function AgapePrinciples() {
  return (
    <section className="mt-12 space-y-6">
      <div className="text-center space-y-2">
        <p className="text-[0.7rem] tracking-[0.35em] uppercase text-emerald-400/70">
          The Inner Contract
        </p>
        <h3 className="text-2xl font-playfair text-emerald-200">
          The Principles of Agape
        </h3>
        <p className="text-gray-500 text-sm max-w-2xl mx-auto">
          These are not rules to obey, but agreements we make with ourselves and each other 
          to keep this space sacred, honest, and alive.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {PRINCIPLES.map((p, i) => (
          <article
            key={p.title}
            className="bg-[#020712] border border-emerald-900/60 rounded-2xl p-5 flex gap-4"
          >
            <div className="text-emerald-500 text-sm mt-1">
              {String(i + 1).padStart(2, "0")}
            </div>
            <div>
              <h4 className="text-emerald-200 text-sm font-semibold tracking-[0.18em] uppercase">
                {p.title}
              </h4>
              <p className="text-gray-400 text-sm mt-2">{p.body}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
