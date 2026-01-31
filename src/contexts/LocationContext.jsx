// src/contexts/LocationContext.jsx
import React, { createContext, useContext, useEffect, useState } from "react";

const LocationContext = createContext(null);

// -------------------------------
// SAFE DEFAULT
// -------------------------------
const DEFAULT_LOCATION = {
  city: null,
  regionCode: null,
  country: null,
  lat: 0,
  lng: 0,
  source: "default",
};

const STORAGE_KEY = "user_location_v1";

// -------------------------------
// REVERSE GEOCODING (OSM)
// -------------------------------
async function reverseGeocode(lat, lng) {
  const url = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lng}`;

  const res = await fetch(url);
  if (!res.ok) throw new Error("Geocoding failed");

  const data = await res.json();
  const addr = data.address || {};

  return {
    city:
      addr.city ||
      addr.town ||
      addr.village ||
      addr.hamlet ||
      null,
    regionCode: addr.state || null,
    country: addr.country || null,
  };
}

export function LocationProvider({ children }) {
  const [home, setHome] = useState(DEFAULT_LOCATION);
  const [destination, setDestination] = useState(null);
  const [status, setStatus] = useState("idle"); // idle | resolving | ready | error

  // -------------------------------
  // LOAD CACHED LOCATION
  // -------------------------------
  useEffect(() => {
    try {
      const cached = localStorage.getItem(STORAGE_KEY);
      if (cached) {
        setHome(JSON.parse(cached));
      }
    } catch {
      // ignore cache errors
    }
  }, []);

  // -------------------------------
  // RESOLVE LOCATION
  // -------------------------------
  useEffect(() => {
    if (!navigator.geolocation) {
      setStatus("error");
      return;
    }

    setStatus("resolving");

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;

        // 🔧 MUST be let (not const)
        let resolved = {
          lat: latitude,
          lng: longitude,
          city: null,
          regionCode: null,
          country: null,
          source: "gps",
        };

        try {
          const geo = await reverseGeocode(latitude, longitude);
          resolved = { ...resolved, ...geo };
        } catch {
          // reverse geocode failed — coords still valid
        }

        setHome(resolved);
        setStatus("ready");

        try {
          localStorage.setItem(STORAGE_KEY, JSON.stringify(resolved));
        } catch {}
      },
      () => {
        setStatus("error");
      },
      {
        enableHighAccuracy: false,
        timeout: 8000,
        maximumAge: 1000 * 60 * 60,
      }
    );
  }, []);

  return (
    <LocationContext.Provider
      value={{
        home,
        destination,
        setHome,
        setDestination,
        status,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
}

export function useLocationContext() {
  const ctx = useContext(LocationContext);
  if (!ctx) {
    throw new Error("useLocationContext must be used within LocationProvider");
  }
  return ctx;
}
