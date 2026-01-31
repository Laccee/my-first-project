// src/agape/components/CircleCard.jsx
import React from "react";

export default function CircleCard({ type, title, description, note }) {
  return (
    <article className="bg-[#020712] border border-emerald-900/60 rounded-2xl p-5">
      <p className="text-[0.65rem] tracking-[0.3em] uppercase text-emerald-400/70">
        {type}
      </p>
      <h3 className="text-emerald-200 text-lg mt-2">{title}</h3>
      <p className="text-gray-400 text-sm mt-2">{description}</p>
      {note && (
        <p className="text-gray-500 text-xs mt-3 italic">
          {note}
        </p>
      )}
    </article>
  );
}
