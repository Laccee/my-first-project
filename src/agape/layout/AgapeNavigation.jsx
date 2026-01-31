import React from "react";
import { NavLink } from "react-router-dom";

const links = [
  { to: "/agape", label: "Home" },
  { to: "/agape/journeys", label: "Journeys" },
  { to: "/agape/studies", label: "Studies" },
  { to: "/agape/community", label: "Community" },
  { to: "/agape/events", label: "Gatherings" },
];

export default function AgapeNavigation() {
  return (
    <nav className="hidden md:flex gap-6 text-xs tracking-[0.2em] uppercase">
      {links.map((link) => (
        <NavLink
          key={link.to}
          to={link.to}
          className={({ isActive }) =>
            `hover:text-emerald-300 ${
              isActive ? "text-emerald-300" : "text-gray-400"
            }`
          }
        >
          {link.label}
        </NavLink>
      ))}
    </nav>
  );
}
