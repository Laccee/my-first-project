import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-md shadow-lg">
      <div className="relative max-w-7xl mx-auto px-6 py-4 flex items-center justify-end gap-10">

        {/* Floating Logo (top-left) */}
        <a href="/">
          <img
            src="/icons/logo.png"
            alt="Daddy's Oxtail Logo"
            className="fixed top-4 left-4 w-16 h-16 object-contain z-50"
          />
        </a>

        {/* Navigation Links */}
        <Link
          to="/order"
          className="text-yellow-400 font-semibold tracking-wide hover:text-yellow-300 transition"
        >
          Order Online
        </Link>

        <Link
          to="/signin"
          className="text-teal-200 font-medium tracking-wide hover:text-white transition"
        >
          Sign In
        </Link>

        <Link
          to="/menu"
          className="text-teal-200 font-medium tracking-wide hover:text-white transition"
        >
          Menu
        </Link>

        <Link
          to="/our-story"
          className="text-teal-200 font-medium tracking-wide hover:text-white transition"
        >
          Our Story
        </Link>

        <Link
          to="/catering"
          className="text-teal-200 font-medium tracking-wide hover:text-white transition"
        >
          Catering
        </Link>

        <Link
          to="/events"
          className="text-teal-200 font-medium tracking-wide hover:text-white transition"
        >
          Events
        </Link>
      </div>
    </nav>
  );
}
