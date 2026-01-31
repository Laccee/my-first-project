// src/agape/components/ReflectionPrompt.jsx
import React from "react";

export default function ReflectionPrompt({ prompt }) {
  return (
    <div className="border-l border-emerald-700/60 pl-3 text-sm text-gray-300">
      {prompt}
    </div>
  );
}
