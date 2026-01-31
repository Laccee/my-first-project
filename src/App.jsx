// src/App.jsx
import React from "react";
import { Link } from "react-router-dom";

import NavBar from "./components/navigation/NavBar";
import HeroCarousel from "./components/ui/HeroCarousel";
import MenuSection from "./components/sections/MenuSection";
import EventsSection from "./components/sections/EventsSection";
import FeaturedArticleSection from "./components/sections/FeaturedArticleSection";

function App() {
  const sampleMenu = [
    { 
      name: "Oxtail Stew",
      description: "Slow-cooked with herbs",
      price: 29,
      photo: "/images/OxtailStew.png",
      link: "/menu/oxtail-stew"
    },
    { 
      name: "Vegan Bowl",
      description: "Fresh greens & grains",
      price: 12,
      photo: "/images/VeganBowl.png",
      link: "/menu/vegan-bowl"
    },
    { 
      name: "Curry Roti",
      description: "Savory curry wrapped in fresh warm roti",
      price: 18,
      photo: "/images/CurryRoti.png",
      link: "/menu/curry-roti"
    },
  ];

  const sampleEvents = [
    {
      name: "Oxtail Festival",
      date: "March 28, 2026",
      location: "oxtailfestival.com",
      media: "/media/oxtail-festival.mp4",
    },
    {
      name: "Yoga & Food Workshop",
      date: "Feb 2, 2026",
      location: "Main Hall",
      media: "/media/yoga-workshop.mp4",
    },
  ];

  const featuredArticle = {
    id: "mindful-eating",
    title: "Mindful Eating",
    summary: "Tips to slow down and savor meals."
  };

  return (
    <div className="min-h-screen flex flex-col bg-black text-gray-100">

      {/* Header */}
      <header className="bg-gradient-to-r from-black via-teal-600 to-teal-500 text-center py-12 shadow-lg relative">
        <NavBar />

        <a href="/">
          <img
            src="/icons/logo.png"
            alt="Daddy's Oxtail Logo"
            className="fixed top-4 left-4 w-16 h-16 object-contain"
          />
        </a>

        <h1 className="text-6xl font-playfair text-teal-100 tracking-wider drop-shadow-xl">
          Daddy&apos;s Oxtail
        </h1>

        <p className="mt-4 text-lg text-teal-100 uppercase tracking-widest">
          Where Flavor Meets Wellness
        </p>
      </header>

      {/* Hero */}
      <HeroCarousel />

      {/* Sections */}
      <main className="flex-1 p-10 space-y-16">
        <MenuSection items={sampleMenu} />
        <EventsSection events={sampleEvents} />
        <FeaturedArticleSection articles={featuredArticle} />
      </main>

      {/* Footer */}
      <footer className="bg-[#070707] border-t border-gray-800 p-8 text-center">

        {/* Link to Agape */}
        <div className="py-7">
          <Link
            to="/agape"
            className="bg-gradient-to-r from-yellow-500 via-yellow-400 to-amber-500
                       text-black font-semibold px-10 py-3 rounded-xl shadow-lg
                       hover:from-amber-500 hover:to-yellow-600
                       transition-transform transform hover:scale-105"
          >
            Enter Agape Sanctuary
          </Link>
        </div>

        {/* Site Map */}
        <nav className="py-8 px-6">
          <ul className="flex flex-wrap justify-center gap-6 text-gray-400 font-medium">
            <li><Link to="/menu" className="hover:text-teal-400">Menu</Link></li>
            <li><a href="#wellness" className="hover:text-teal-400">Wellness</a></li>
            <li><a href="#events" className="hover:text-teal-400">Events</a></li>
            <li><Link to="/contact" className="hover:text-teal-400">Contact Us</Link></li>
            <li><Link to="/agape" className="hover:text-amber-400">Agape</Link></li>
          </ul>
        </nav>

      </footer>
    </div>
  );
}

export default App;








 
