import React from "react";
import { Outlet, Link, NavLink } from "react-router-dom";

export default function AgapeLayout() {
  return (
    <div className="min-h-screen bg-black text-gray-100 flex flex-col">
      <header className="border-b border-emerald-900/40 bg-gradient-to-b from-black to-[#020712]">
        <div className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
          <Link to="/agape" className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full border border-emerald-400/60 flex items-center justify-center">
              <span className="text-xs tracking-[0.25em] text-emerald-300">α</span>
            </div>
            <div>
              <h1 className="text-xl font-playfair tracking-[0.25em] uppercase text-emerald-200">
                Agape
              </h1>
              <p className="text-[0.65rem] text-emerald-400/70 tracking-[0.25em] uppercase">
                Consciousness • Discipline • Source
              </p>
            </div>
          </Link>

          <nav className="hidden md:flex gap-6 text-xs tracking-[0.2em] uppercase">
            <NavItem to="/agape" label="Home" />
            <NavItem to="/agape/journeys" label="Journeys" />
            <NavItem to="/agape/studies" label="Studies" />
            <NavItem to="/agape/community" label="Community" />
            <NavItem to="/agape/events" label="Gatherings" />
          </nav>

          <Link
            to="/"
            className="text-[0.65rem] uppercase tracking-[0.25em] text-gray-500 hover:text-emerald-300"
          >
            Daddy&apos;s Oxtail
          </Link>
        </div>
      </header>

      <main className="flex-1">
        <div className="max-w-5xl mx-auto px-6 py-10">
          <Outlet />
        </div>
      </main>

      <footer className="border-t border-emerald-900/40 py-6 text-center text-[0.7rem] text-gray-500 tracking-[0.25em] uppercase">
        <p>Agape — A Sanctuary for Seekers</p>
      </footer>
    </div>
  );
}

function NavItem({ to, label }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `hover:text-emerald-300 ${
          isActive ? "text-emerald-300" : "text-gray-400"
        }`
      }
    >
      {label}
    </NavLink>
  );
}
