import React, { useState, useMemo, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";

import { LocationProvider, useLocationContext } from "../contexts/LocationContext";
import { IntentProvider, useIntentContext } from "../contexts/IntentContext";

import { fetchRawEvents } from "../engines/SourceEngine";
import { filterVerifiedEvents } from "../engines/VerificationEngine";
import { enrichEvents } from "../engines/MeaningEngine";
import { personalizeEvents } from "../engines/PersonalizationEngine";

import EnergyMap from "../components/EnergyMap/EnergyMap";
import LocationBar from "../components/LocationBar";
import IntentBar from "../components/IntentBar";

// ------------------------------------------------------------
// ARCHETYPES (merged + canonical)
// ------------------------------------------------------------
const ARCHETYPES = {
  communion: {
    id: "communion",
    label: "Communion",
    color: "#FBBF24",
    symbol: "◎",
    meaning: "Gatherings, dinners, circles, shared presence.",
  },
  transformation: {
    id: "transformation",
    label: "Transformation",
    color: "#A855F7",
    symbol: "✶",
    meaning: "Ceremonies, breathwork, deep inner shifts.",
  },
  skill: {
    id: "skill",
    label: "Skill-Building",
    color: "#3B82F6",
    symbol: "▢",
    meaning: "Workshops, learning, structured practice.",
  },
  renewal: {
    id: "renewal",
    label: "Renewal",
    color: "#22C55E",
    symbol: "❍",
    meaning: "Retreats, rest, reset, spaciousness.",
  },
  exploration: {
    id: "exploration",
    label: "Exploration",
    color: "#F97316",
    symbol: "△",
    meaning: "Creative sessions, play, experimentation.",
  },
};

// ------------------------------------------------------------
// FALLBACK DATA (safe defaults)
// ------------------------------------------------------------
const EVENTS = [];
const JOURNEYS = [];

// ------------------------------------------------------------
// UTILS (merged + hardened)
// ------------------------------------------------------------
function formatLocation(location) {
  if (!location) return "";
  if (typeof location === "string") return location;
  if (typeof location === "object") {
    const { city, regionCode, country } = location;
    return [city, regionCode, country].filter(Boolean).join(", ");
  }
  return "";
}

function getTimeOfDayLabel() {
  const hour = new Date().getHours();
  if (hour < 11) return "morning";
  if (hour < 17) return "afternoon";
  return "evening";
}

// ------------------------------------------------------------
// PAGE
// ------------------------------------------------------------
function EventsPageInner() {
  const [events, setEvents] = useState([]);
  const [personalized, setPersonalized] = useState({
    nearHome: [],
    nearDestination: [],
  });
  const [query, setQuery] = useState("");
  const [activeArchetype, setActiveArchetype] = useState("all");
  const [view, setView] = useState("map"); // map | journeys | gallery
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [selectedJourney, setSelectedJourney] = useState(null);

  const { home, destination } = useLocationContext();
  const { stateOfBeing } = useIntentContext();

  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 250], [1, 0.4]);
  const heroY = useTransform(scrollY, [0, 250], [0, -60]);

  // ------------------------------------------------------------
  // LOAD EVENTS (engine-safe)
  // ------------------------------------------------------------
  useEffect(() => {
    async function load() {
      try {
        const raw = await fetchRawEvents();
        const verified = filterVerifiedEvents(raw);
        const enriched = enrichEvents(verified);
        setEvents(enriched);
      } catch {
        setEvents(EVENTS);
      }
    }
    load();
  }, []);

  // ------------------------------------------------------------
  // PERSONALIZATION
  // ------------------------------------------------------------
  useEffect(() => {
    if (!events.length) return;
    const result = personalizeEvents({
      events,
      homeLocation: home,
      destinationLocation: destination,
      stateOfBeing,
    });
    setPersonalized(result);
  }, [events, home, destination, stateOfBeing]);

  // ------------------------------------------------------------
  // FILTERING (null-safe)
  // ------------------------------------------------------------
  const filteredEvents = useMemo(() => {
    const source = events.length ? events : EVENTS;
    const q = query.trim().toLowerCase();

    return source.filter((e) => {
      const matchesArchetype =
        activeArchetype === "all" || e.archetype === activeArchetype;

      const matchesQuery =
        !q ||
        e.name?.toLowerCase().includes(q) ||
        e.description?.toLowerCase().includes(q) ||
        formatLocation(e.location).toLowerCase().includes(q);

      return matchesArchetype && matchesQuery;
    });
  }, [events, query, activeArchetype]);

  // ------------------------------------------------------------
  // JOURNEY EVENTS
  // ------------------------------------------------------------
  const journeyEvents = useMemo(() => {
    if (!selectedJourney) return [];
    const journey = JOURNEYS.find((j) => j.id === selectedJourney);
    if (!journey?.archetypeBias) return [];
    return filteredEvents.filter((e) =>
      journey.archetypeBias.includes(e.archetype)
    );
  }, [selectedJourney, filteredEvents]);

  // ------------------------------------------------------------
  // MODAL
  // ------------------------------------------------------------
  const renderEventModal = () => (
    <AnimatePresence>
      {selectedEvent && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedEvent(null)}
          className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-gray-900 rounded-2xl p-6 max-w-lg w-full"
          >
            <h2 className="text-xl font-semibold text-white mb-2">
              {selectedEvent.name}
            </h2>
            <p className="text-gray-300 mb-4">
              {selectedEvent.description}
            </p>
            <p className="text-sm text-gray-400 mb-4">
              📍 {formatLocation(selectedEvent.location)}
            </p>
            <button
              onClick={() => setSelectedEvent(null)}
              className="w-full py-2 rounded-xl bg-indigo-500 text-white"
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  // ------------------------------------------------------------
  // RENDER
  // ------------------------------------------------------------
  return (
    <div className="min-h-screen bg-black text-gray-100">
      <LocationBar />
      <IntentBar />

      {/* HERO */}
      <section className="relative h-[55vh] flex items-center justify-center">
        <motion.div
          style={{ opacity: heroOpacity, y: heroY }}
          className="absolute inset-0 bg-gradient-to-b from-gray-900 via-black to-gray-900"
        />
        <motion.div className="relative z-10 text-center px-6 max-w-3xl">
          <p className="text-sm uppercase tracking-widest text-gray-400">
            Global civic experiences
          </p>
          <h1 className="mt-3 text-5xl font-semibold text-white">
            Events as a Living Organism
          </h1>
          <p className="mt-4 text-gray-300">
            Discover gatherings shaped by meaning, archetype, and your current
            state of being.
          </p>
        </motion.div>
      </section>

      {/* COMMAND CENTER */}
      <div className="max-w-6xl mx-auto px-4 mt-10 space-y-6">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search events, locations, themes…"
          className="w-full px-4 py-3 rounded-xl bg-white/10"
        />

        <div className="flex gap-2 flex-wrap">
          <button
            onClick={() => setActiveArchetype("all")}
            className={`px-4 py-2 rounded-full ${
              activeArchetype === "all" ? "bg-white text-black" : "bg-white/5"
            }`}
          >
            All
          </button>
          {Object.values(ARCHETYPES).map((a) => (
            <button
              key={a.id}
              onClick={() => setActiveArchetype(a.id)}
              className="px-4 py-2 rounded-full bg-white/5"
            >
              <span style={{ color: a.color }}>{a.symbol}</span> {a.label}
            </button>
          ))}
        </div>
      </div>

      {/* ENERGY MAP */}
      {view === "map" && (
        <section className="max-w-6xl mx-auto px-4 mt-12">
          <EnergyMap events={filteredEvents} />
        </section>
      )}

      {/* PERSONALIZED */}
      <section className="max-w-6xl mx-auto px-4 mt-12">
        <h2 className="text-2xl font-semibold mb-4">Personalized for You</h2>
        {personalized.nearHome.length ? (
          personalized.nearHome.slice(0, 3).map((e) => (
            <div
              key={e.id}
              onClick={() => setSelectedEvent(e)}
              className="p-4 mb-3 rounded-xl bg-white/5 cursor-pointer"
            >
              <h3 className="text-white">{e.name}</h3>
              <p className="text-sm text-gray-400">
                {formatLocation(e.location)}
              </p>
            </div>
          ))
        ) : (
          <p className="text-gray-400">No personalized events found.</p>
        )}
      </section>

      {renderEventModal()}
    </div>
  );
}

// ------------------------------------------------------------
// PROVIDERS (single, correct)
// ------------------------------------------------------------
export default function EventsPage() {
  return (
    <LocationProvider>
      <IntentProvider>
        <EventsPageInner />
      </IntentProvider>
    </LocationProvider>
  );
}
