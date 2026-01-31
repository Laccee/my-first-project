// src/components/LocationBar.jsx
import React from "react";
import { useLocationContext } from "../contexts/LocationContext";

export default function LocationBar() {
  const { home, destination, setDestination } = useLocationContext();

  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 mt-6">
      <div className="rounded-2xl border border-white/15 bg-white/5 p-4 flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-gray-400">
            Location context
          </p>
          <p className="text-sm text-gray-200 mt-1">
            You are in{" "}
            <span className="font-medium">
              {home.city}, {home.country}
            </span>
            {destination && (
              <>
                {" "}
                • Planning for{" "}
                <span className="font-medium">
                  {destination.city}, {destination.country}
                </span>
              </>
            )}
          </p>
        </div>
        <div className="flex gap-2">
          <button
            className="px-4 py-2 rounded-full text-xs border border-white/25 text-gray-200 hover:bg-white/10 transition"
            onClick={() =>
              setDestination({
                city: "Lisbon",
                country: "Portugal",
                lat: 38.7223,
                lng: -9.1393,
              })
            }
          >
            Set destination: Lisbon (demo)
          </button>
          <button
            className="px-4 py-2 rounded-full text-xs border border-white/25 text-gray-200 hover:bg-white/10 transition"
            onClick={() => setDestination(null)}
          >
            Clear destination
          </button>
        </div>
      </div>
    </div>
  );
}
