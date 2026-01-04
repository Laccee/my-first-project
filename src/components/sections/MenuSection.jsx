// src/components/sections/MenuSection.jsx
import React from "react";
import { Link } from "react-router-dom";
import OrderNavBar from "../navigation/OrderNavBar";

/**
 * Menu categories displayed under the section header.
 * You can safely rename labels or add/remove categories later.
 */
const MENU_CATEGORIES = [
  { label: "Comfort Classics", slug: "comfort-classics" },
  { label: "Island Staples", slug: "island-staples" },
  { label: "Plant-Based", slug: "plant-based" },
  { label: "Chef Specials", slug: "chef-specials" },
];

export default function MenuSection({ items = [], mapView = false }) {
  return (
    <section
      id="menu"
      className="relative flex flex-col items-center text-center bg-gray-900 py-24 px-8 md:px-16 lg:px-24"
    >
      {/* Header */}
      <Link
        to="/menu"
        className="text-5xl font-oswald text-white tracking-widest mb-6 hover:text-yellow-400 transition"
      >
        🍽️ OUR MENU 🍴
      </Link>

      <p className="text-gray-300 text-lg max-w-2xl mb-10 leading-relaxed">
        Not just food — each dish is a{" "}
        <span className="text-yellow-400 font-bold">celebration</span> of flavor,
        culture, and soul.
      </p>

      {/* Category Navigation */}
      <OrderNavBar categories={MENU_CATEGORIES} />

      {/* Featured view */}
      {!mapView ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 place-items-center mt-16">

          {/* Oxtail */}
          <div className="bg-gray-800 border border-gray-700 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 max-w-md w-full">
            <img
              src="/images/OxtailStew.png"
              alt="Braised Oxtail Stew"
              className="w-full h-64 object-cover rounded-t-xl"
            />
            <div className="p-8">
              <h3 className="text-2xl font-oswald text-yellow-400 mb-2">
                Braised Oxtail Stew 🥘
              </h3>
              <p className="text-gray-400 mb-6">
                Slow-cooked with herbs, rich and soulful.
              </p>
              <Link
                to="/menu/oxtail-stew"
                className="inline-block bg-yellow-400 text-black px-6 py-3 rounded-lg font-bold hover:bg-yellow-500 transition"
              >
                ORDER NOW
              </Link>
            </div>
          </div>

          {/* Coconut Rice */}
          <div className="bg-gray-800 border border-gray-700 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 max-w-md w-full">
            <img
              src="/images/CoconutRice.png"
              alt="Coconut Rice & Peas"
              className="w-full h-64 object-cover rounded-t-xl"
            />
            <div className="p-8">
              <h3 className="text-2xl font-oswald text-yellow-400 mb-2">
                Coconut Rice & Peas 🌿
              </h3>
              <p className="text-gray-400 mb-6">
                Fragrant, grounding, a Sunday tradition.
              </p>
              <Link
                to="/menu/coconut-rice"
                className="inline-block bg-yellow-400 text-black px-6 py-3 rounded-lg font-bold hover:bg-yellow-500 transition"
              >
                ORDER NOW
              </Link>
            </div>
          </div>

        </div>
      ) : (
        /* Map view */
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 place-items-center mt-16">
          {items.map((item) => (
            <div
              key={item.name}
              className="bg-gray-800 border border-gray-700 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:scale-105 flex flex-col max-w-md w-full"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-40 object-cover rounded-t-xl"
              />
              <div className="p-6 flex flex-col flex-grow text-center">
                <h3 className="text-xl font-oswald text-yellow-400 mb-2">
                  {item.flavorTag}
                </h3>
                <p className="text-gray-300 flex-grow">{item.name}</p>
                <Link
                  to={item.link}
                  className="mt-4 inline-block bg-yellow-400 text-black px-4 py-2 rounded-lg font-bold hover:bg-yellow-500 transition"
                >
                  ORDER
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
