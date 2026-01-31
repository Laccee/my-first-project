// src/engines/VerificationEngine.js
// Ensures only authentic, verified events enter the system.

export function verifyEvent(event) {
  if (!event.source || !event.source.verified) return false;
  if (!event.name || !event.startDate || !event.location) return false;
  if (!event.location.lat || !event.location.lng) return false;
  if (!event.archetype) return false;
  return true;
}

export function filterVerifiedEvents(events) {
  return events.filter(verifyEvent);
}
