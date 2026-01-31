// src/agape/community/CommunityHome.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function CommunityHome() {
  const sections = [
    {
      label: "Stories",
      path: "/agape/community/stories",
      summary:
        "Honest journeys of doubt, discovery, discipline, and rediscovery of Source.",
    },
    {
      label: "Circles",
      path: "/agape/community/circles",
      summary:
        "Facilitated conversations where we speak, listen, and witness each other.",
    },
    {
      label: "Actions",
      path: "/agape/community/actions",
      summary:
        "Challenges and invitations that turn intention into embodied practice.",
    },
    {
      label: "Reflections",
      path: "/agape/community/reflections",
      summary:
        "Prompts and questions that open inner doors and deepen self‑understanding.",
    },
  ];

  return (
    <section className="space-y-12">
      <div className="text-center space-y-3">
        <p className="text-[0.7rem] tracking-[0.35em] uppercase text-emerald-400/70">
          Not an Audience — a Circle
        </p>
        <h2 className="text-3xl font-playfair text-emerald-200">
          Community as Mirror
        </h2>
        <p className="text-gray-400 text-sm max-w-2xl mx-auto">
          Agape’s community is built on presence, honesty, and shared growth.  
          This is where we walk each other home.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {sections.map((s) => (
          <Link
            key={s.label}
            to={s.path}
            className="bg-[#020712] border border-emerald-900/60 rounded-2xl p-6 hover:border-emerald-500/60 transition-colors"
          >
            <p className="text-[0.65rem] tracking-[0.3em] uppercase text-emerald-400/70">
              {s.label}
            </p>
            <h3 className="text-emerald-200 text-lg mt-2">{s.label}</h3>
            <p className="text-gray-400 text-sm mt-2">{s.summary}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
