// src/pages/MenuPage.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import OrderNavBar from "../components/navigation/OrderNavBar";

/**
 * Menu categories shown in the OrderNavBar
 */
const MENU_CATEGORIES = [
  { label: "Comfort Classics", slug: "comfort-classics" },
  { label: "Island Staples", slug: "island-staples" },
  { label: "Plant-Based", slug: "plant-based" },
  { label: "Chef Specials", slug: "chef-specials" },
];

export default function MenuPage() {
  const [cart, setCart] = useState([]);
  const [prepTime, setPrepTime] = useState(null);

  const menuItems = [
    { name: "Braised Oxtail Stew 🥘", price: 29, photo: "/images/OxtailStew.png", link: "/menu/oxtail-stew" },
    { name: "Coconut Rice & Peas 🌿", price: 23, photo: "/images/CoconutRice.png", link: "/menu/coconut-rice" },
    { name: "Oxtail & Quinoa Bowl 🥗", price: 34, photo: "/images/OxtailQuinoa.png", link: "/menu/oxtail-quinoa" },
    { name: "Roasted Veggie Harmony 🥦", price: 22, photo: "/images/RoastedVeggie.png", link: "/menu/roasted-veggie" },
    { name: "Spiced Oxtail Curry 🌶️", price: 29, photo: "/images/OxtailCurry.png", link: "/menu/oxtail-curry" },
    { name: "Plantain & Mango Salsa 🍍", price: 18, photo: "/images/PlantainMango.png", link: "/menu/plantain-mango" },
    { name: "Iced Okra Water 🍵", price: 12, photo: "/images/HerbalTea.png", link: "/menu/herbal-tea" },
    { name: "Tropical Fruit Sorbet 🍨", price: 7, photo: "/images/Sorbet.png", link: "/menu/sorbet" },
  ];

  const addToCart = (item) => {
    setCart([...cart, item]);
    setPrepTime(20);
  };

  useEffect(() => {
    if (!prepTime) return;
    const interval = setInterval(() => {
      setPrepTime((prev) => (prev > 0 ? prev - 1 : 0));
    }, 60000);
    return () => clearInterval(interval);
  }, [prepTime]);

  return (
    <div className="relative min-h-screen flex flex-col">

      {/* Floating Logo */}
      <Link
        to="/"
        className="fixed top-4 left-4 z-50 flex items-center space-x-2 bg-white rounded-full shadow-lg px-3 py-2 hover:scale-105 transition"
      >
        <img src="/favicon.ico" alt="Daddy’s Oxtail Logo" className="w-8 h-8" />
        <span className="text-teal-700 font-bold">Daddy’s Oxtail</span>
      </Link>

      {/* Main Content */}
      <section className="bg-gradient-to-b from-teal-50 via-white to-teal-100 py-16 flex-grow">

        <h2 className="text-4xl font-extrabold text-green-700 text-center mb-6">
          🍴 Explore Our Full Menu
        </h2>

        {/* OrderNavBar */}
        <div className="flex justify-center mb-12">
          <OrderNavBar categories={MENU_CATEGORIES} />
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {menuItems.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center"
            >
              <img
                src={item.photo}
                alt={item.name}
                className="rounded-lg shadow-md mb-4 w-48 h-36 object-cover"
              />
              <h3 className="text-xl font-semibold text-teal-700">
                {item.name}
              </h3>
              <Link
                to={item.link}
                className="mt-2 text-gray-600 hover:text-green-700 transition"
              >
                Learn More
              </Link>
              <button
                onClick={() => addToCart(item)}
                className="mt-4 bg-green-600 text-white px-4 py-2 rounded-lg shadow hover:bg-green-700 transition"
              >
                Order Now
              </button>
            </div>
          ))}
        </div>

        {/* Cart */}
        {cart.length > 0 && (
          <div className="mt-12 text-center">
            <h3 className="text-2xl font-bold text-teal-700">🛒 Your Order</h3>
            <ul className="mt-4 space-y-2">
              {cart.map((item, idx) => (
                <li key={idx}>
                  {item.name} — ${item.price}
                </li>
              ))}
            </ul>
            {prepTime !== null && (
              <p className="mt-4 text-lg text-gray-700">
                Estimated prep time: {prepTime} minutes ⏱️
              </p>
            )}
            <button className="mt-6 bg-teal-600 text-white px-6 py-3 rounded-lg shadow hover:bg-teal-700 transition">
              Pay & Process Order
            </button>
          </div>
        )}

        {/* Delivery Map */}
        <div className="mt-12 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-teal-700 text-center mb-4">
            🚚 Track Your Order
          </h3>
          <div className="w-full h-96 bg-gray-200 rounded-lg flex items-center justify-center">
            <p className="text-gray-600">[Map integration goes here]</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-teal-700 text-white py-8 mt-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h4 className="font-bold text-lg mb-2">Explore</h4>
            <ul className="space-y-1">
              <li><Link to="/" className="hover:underline">Home</Link></li>
              <li><Link to="/menu" className="hover:underline">Menu</Link></li>
              <li><Link to="/events" className="hover:underline">Events</Link></li>
              <li><Link to="/about" className="hover:underline">About Us</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-2">Support</h4>
            <ul className="space-y-1">
              <li><Link to="/contact" className="hover:underline">Contact</Link></li>
              <li><Link to="/faq" className="hover:underline">FAQ</Link></li>
              <li><Link to="/privacy" className="hover:underline">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:underline">Terms of Service</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-2">Stay Connected</h4>
            <ul className="space-y-1">
              <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Instagram</a></li>
              <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Facebook</a></li>
              <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Twitter</a></li>
            </ul>
          </div>
        </div>
        <p className="text-center mt-8 text-sm text-teal-200">
          © {new Date().getFullYear()} Daddy’s Oxtail. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

