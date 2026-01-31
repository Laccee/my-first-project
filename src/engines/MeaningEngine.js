// src/engines/MeaningEngine.js
// Adds archetype, state-of-being, and energy semantics.

import { ARCHETYPES } from "../data/archetypes";

// In a real system, this might use ML/NLP to classify.
// For now, we assume archetype + statesOfBeing already exist and just enrich.

export function enrichEventWithMeaning(event) {
  const archetype = ARCHETYPES[event.archetype] || null;
  const energyScore = typeof event.energyScore === "number"
    ? event.energyScore
    : 0.5;

  return {
    ...event,
    archetypeMeta: archetype,
    energyScore,
  };
}

export function enrichEvents(events) {
  return events.map(enrichEventWithMeaning);
}
