// src/engines/SourceEngine.js
// Responsible for ingesting events from trusted sources (APIs, partners, etc.)
// For now, we just expose a function that returns mock events.

import { MOCK_EVENTS } from "../data/mockEvents";

// In future: fetch from multiple APIs, merge, dedupe, normalize.
export async function fetchRawEvents() {
  // Placeholder: simulate async fetch
  return Promise.resolve(MOCK_EVENTS);
}