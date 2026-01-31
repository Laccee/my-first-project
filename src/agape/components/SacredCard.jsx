// src/agape/components/SacredCard.jsx
import React from "react";

export default function SacredCard({ label, title, children, accent = "emerald" }) {
  const accentColor =
    accent === "amber"
      ? "border-amber-500/60 text-amber-300"
      : accent === "slate"
      ? "border-slate-500/60 text-slate-200"
      : "border-emerald-500/60 text-emerald-200";

  return (
    <article className={`bg-[#020712] border ${accentColor} rounded-2xl p-5 shadow-[0_0_40px_rgba(16,185,129,0.08)]`}>
      {label && (
        <p className="text-[0.65rem] tracking-[0.3em] uppercase text-gray-400 mb-2">
          {label}
        </p>
      )}
      {title && <h3 className="text-sm font-semibold mb-2">{title}</h3>}
      <div className="text-gray-300 text-sm">{children}</div>
    </article>
  );
}
