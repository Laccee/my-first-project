// src/agape/components/StudyCard.jsx
import React from "react";

export default function StudyCard({ area, title, summary, note }) {
  return (
    <article className="bg-[#020712] border border-gray-800 rounded-2xl p-5">
      <p className="text-[0.65rem] tracking-[0.3em] uppercase text-emerald-400/70">
        {area}
      </p>
      <h3 className="text-emerald-200 text-lg mt-2">{title}</h3>
      <p className="text-gray-400 text-sm mt-2">{summary}</p>
      {note && (
        <p className="text-gray-500 text-xs mt-3 italic">
          {note}
        </p>
      )}
    </article>
  );
}
