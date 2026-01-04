// src/pages/MenuItemPage.jsx
import React from "react";

export default function MenuItemPage({ item }) {
  if (!item) return <p>Item not found.</p>;

  return (
    <section className="bg-gradient-to-b from-teal-50 via-white to-teal-100 py-16">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8">
        <img src={item.photo} alt={item.name} className="rounded-lg shadow-md mb-6 w-full h-64 object-cover" />
        <h2 className="text-3xl font-bold text-teal-700">{item.name}</h2>
        <p className="mt-4 text-gray-600">{item.description}</p>
        <p className="mt-2 text-lg font-semibold text-green-700">${item.price}</p>
        <button className="mt-6 bg-green-600 text-white px-6 py-3 rounded-lg shadow hover:bg-green-700 transition">
          Order Now
        </button>
        <div className="mt-6">
          <a href="/menu" className="text-teal-600 hover:underline">
            ← Back to Full Menu
          </a>
        </div>
      </div>
    </section>
  );
}

