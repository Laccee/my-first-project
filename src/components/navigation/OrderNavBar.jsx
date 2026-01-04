// src/components/navigation/OrderNavBar.jsx
import React from "react";
import { NavLink } from "react-router-dom";

/**
 * Category navigation used inside the Menu section.
 * Simple, scroll-friendly, and intuitive.
 */
export default function OrderNavBar({ categories = [] }) {
  if (!categories.length) return null;

  return (
    <nav className="w-full max-w-5xl">
      <ul className="flex flex-wrap justify-center gap-4 md:gap-6">
        {categories.map((category) => (
          <li key={category.slug}>
            <NavLink
              to={`/menu/${category.slug}`}
              className={({ isActive }) =>
                `
                px-5 py-2 rounded-full text-sm md:text-base font-semibold tracking-wide
                transition duration-200
                ${
                  isActive
                    ? "bg-yellow-400 text-black shadow-md"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white"
                }
              `
              }
            >
              {category.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
