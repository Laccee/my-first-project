// src/agape/studies/StudyPlantMedicine.jsx
import React from "react";
import StudyCard from "../components/StudyCard";

export default function StudyPlantMedicine() {
  const items = [
    {
      title: "Psilocybin & Depression",
      summary:
        "Clinical trials have investigated psilocybin‑assisted therapy for treatment‑resistant depression, often in carefully controlled settings with professional support.",
    },
    {
      title: "MDMA‑Assisted Therapy",
      summary:
        "Research has explored MDMA‑assisted psychotherapy for PTSD, focusing on how it may support emotional processing in a therapeutic context.",
    },
    {
      title: "Context, Set & Setting",
      summary:
        "Studies and traditional wisdom both emphasize that mindset, environment, and support strongly influence the nature and impact of psychedelic experiences.",
    },
  ];

  return (
    <section className="space-y-8">
      <div className="text-center space-y-3">
        <p className="text-[0.7rem] tracking-[0.35em] uppercase text-emerald-400/70">
          Studies: Plant Medicine
        </p>
        <h2 className="text-3xl font-playfair text-emerald-200">
          Education, Not Instruction
        </h2>
        <p className="text-gray-400 text-sm max-w-2xl mx-auto">
          Plant medicine and psychedelic‑assisted therapies are areas of active research and
          cultural conversation. Here, we focus on summarizing findings and context—not giving
          advice or guidance on use.
        </p>
      </div>

      <div className="space-y-5">
        {items.map((i) => (
          <StudyCard
            key={i.title}
            area="Plant Medicine"
            title={i.title}
            summary={i.summary}
            note="Future: ethical considerations, cultural context, and integration frameworks."
          />
        ))}
      </div>
    </section>
  );
}
