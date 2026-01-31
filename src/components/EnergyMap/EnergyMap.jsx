// src/components/EnergyMap/EnergyMap.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ARCHETYPES } from "../../data/archetypes";

export default function EnergyMap({ events }) {
  const [hovered, setHovered] = useState(null);
  const [selected, setSelected] = useState(null);

  const getOrbitPosition = (index, total, energy) => {
    const angle = (index / total) * Math.PI * 2;
    const radius = 90 + energy * 120;
    return {
      x: Math.cos(angle) * radius,
      y: Math.sin(angle) * radius,
    };
  };

  return (
    <div className="relative w-full h-[420px] sm:h-[500px] flex items-center justify-center">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] rounded-full border border-white/10" />
        <div className="w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] rounded-full border border-white/10" />
        <div className="w-[100px] h-[100px] sm:w-[140px] sm:h-[140px] rounded-full border border-white/10" />
      </div>

      {events.map((event, idx) => {
        const archetype = ARCHETYPES[event.archetype] || {};
        const { x, y } = getOrbitPosition(
          idx,
          Math.max(events.length, 1),
          event.energyScore || 0.5
        );

        return (
          <motion.div
            key={event.id}
            className="absolute cursor-pointer"
            style={{
              left: `calc(50% + ${x}px)`,
              top: `calc(50% + ${y}px)`,
            }}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.08, duration: 0.4 }}
            onHoverStart={() => setHovered(event)}
            onHoverEnd={() => setHovered(null)}
            onClick={() => setSelected(event)}
            whileHover={{ scale: 1.1 }}
          >
            <div
              className="px-3 py-1 rounded-full shadow-lg backdrop-blur-md border border-white/30 text-xs sm:text-sm flex items-center gap-1"
              style={{
                backgroundColor: `${archetype.color || "#ffffff"}22`,
              }}
            >
              <span style={{ color: archetype.color || "#ffffff" }}>
                {archetype.symbol || "•"}
              </span>
              <span className="text-gray-100 truncate max-w-[120px]">
                {event.name}
              </span>
            </div>
          </motion.div>
        );
      })}

      <AnimatePresence>
        {hovered && (
          <motion.div
            key="hover-card"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 backdrop-blur-md border border-white/20 px-4 py-3 rounded-xl text-center max-w-xs"
          >
            <p className="text-sm text-white font-medium">{hovered.name}</p>
            <p className="text-xs text-gray-300 mt-1">
              {hovered.location?.city}, {hovered.location?.country}
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {selected && (
          <motion.div
            key="modal-backdrop"
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              key="modal"
              className="bg-gradient-to-br from-gray-900 to-black border border-white/20 rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl"
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                <p className="text-xs text-gray-400">
                  {selected.startDate} • {selected.location?.city},{" "}
                  {selected.location?.country}
                </p>
                <h3 className="text-xl text-white font-semibold mt-1">
                  {selected.name}
                </h3>
                <p className="text-sm text-gray-300 mt-2">
                  {selected.description}
                </p>

                <button
                  onClick={() => setSelected(null)}
                  className="mt-6 px-5 py-2 rounded-full bg-white/10 border border-white/20 text-gray-200 hover:bg-white/20 transition"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
