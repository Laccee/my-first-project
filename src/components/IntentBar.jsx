// src/components/IntentBar.jsx
import React from "react";
import { useIntentContext } from "../contexts/IntentContext";

const STATES = [
  { id: "grounded", label: "Grounded" },
  { id: "connected", label: "Connected" },
  { id: "renewed", label: "Renewed" },
  { id: "inspired", label: "Inspired" },
  { id: "transformed", label: "Transformed" },
];

export default function IntentBar() {
  const { stateOfBeing, setStateOfBeing } = useIntentContext();

  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 mt-4">
      <div className="rounded-2xl border border-white/15 bg-white/5 p-4">
        <p className="text-xs uppercase tracking-[0.2em] text-gray-400">
          How do you want to feel?
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          {STATES.map((s) => (
            <button
              key={s.id}
              onClick={() =>
                setStateOfBeing(stateOfBeing === s.id ? null : s.id)
              }
              className={`px-4 py-2 rounded-full text-xs border transition-all ${
                stateOfBeing === s.id
                  ? "bg-white text-gray-900 border-white shadow"
                  : "bg-white/5 text-gray-200 border-white/20 hover:bg-white/10"
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
