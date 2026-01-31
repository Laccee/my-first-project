// src/engines/PersonalizationEngine.js
// Filters and ranks events based on location + intent.

import { haversineDistanceKm } from "../utils/geo";

export function eventsNearLocation(events, location, radiusKm = 200) {
  if (!location) return [];
  return events.filter((e) => {
    if (!e.location) return false;
    const dist = haversineDistanceKm(
      { lat: location.lat, lng: location.lng },
      { lat: e.location.lat, lng: e.location.lng }
    );
    return dist <= radiusKm;
  });
}

export function eventsMatchingState(events, stateOfBeing) {
  if (!stateOfBeing) return events;
  return events.filter((e) =>
    Array.isArray(e.statesOfBeing) &&
    e.statesOfBeing.includes(stateOfBeing)
  );
}

export function rankByEnergy(events) {
  return [...events].sort((a, b) => (b.energyScore || 0) - (a.energyScore || 0));
}

export function personalizeEvents({
  events,
  homeLocation,
  destinationLocation,
  stateOfBeing,
}) {
  const nearHome = rankByEnergy(
    eventsMatchingState(eventsNearLocation(events, homeLocation), stateOfBeing)
  );

  const nearDestination = rankByEnergy(
    eventsMatchingState(
      eventsNearLocation(events, destinationLocation),
      stateOfBeing
    )
  );

  return {
    nearHome,
    nearDestination,
  };
}
