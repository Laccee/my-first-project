// src/data/mockEvents.js
// DEV ONLY – replace with real API later
export const MOCK_EVENTS = [
  {
    id: "evt_1",
    name: "Sunrise Breathwork Ceremony",
    description:
      "A guided sunrise breathwork immersion designed to reset your nervous system and open the heart.",
    startDate: "2026-03-12",
    endDate: null,
    location: {
      city: "Lisbon",
      country: "Portugal",
      lat: 38.7223,
      lng: -9.1393,
      regionCode: "EU",
    },
    archetype: "transformation",
    statesOfBeing: ["grounded", "renewed", "transformed"],
    energyScore: 0.9,
    source: {
      type: "organization",
      verified: true,
      submittedBy: "org_1",
      submittedAt: "2026-01-10T10:00:00Z",
    },
  },
  {
    id: "evt_2",
    name: "Deep Listening Workshop",
    description:
      "Learn the art of presence, attunement, and relational awareness through experiential practice.",
    startDate: "2026-03-20",
    endDate: null,
    location: {
      city: "New York",
      country: "USA",
      lat: 40.7128,
      lng: -74.006,
      regionCode: "NA",
    },
    archetype: "skill",
    statesOfBeing: ["connected", "inspired"],
    energyScore: 0.7,
    source: {
      type: "organization",
      verified: true,
      submittedBy: "org_2",
      submittedAt: "2026-01-12T09:00:00Z",
    },
  },
  {
    id: "evt_3",
    name: "Movement & Stillness Retreat",
    description:
      "A 3‑day immersive retreat blending somatic movement, meditation, and restorative silence.",
    startDate: "2026-04-05",
    endDate: "2026-04-07",
    location: {
      city: "Chiang Mai",
      country: "Thailand",
      lat: 18.7883,
      lng: 98.9853,
      regionCode: "APAC",
    },
    archetype: "renewal",
    statesOfBeing: ["grounded", "renewed"],
    energyScore: 0.85,
    source: {
      type: "partner",
      verified: true,
      submittedBy: "partner_1",
      submittedAt: "2026-01-15T12:00:00Z",
    },
  },
];