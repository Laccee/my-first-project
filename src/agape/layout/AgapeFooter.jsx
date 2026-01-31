import React from "react";
import { Link } from "react-router-dom";

export default function AgapeFooter() {
  return (
    <footer className="border-t border-emerald-900/40 py-6 text-center text-[0.7rem] text-gray-500 tracking-[0.25em] uppercase">
      <p>Agape — A Sanctuary for Seekers</p>
      <div className="mt-3 flex justify-center gap-6 text-[0.6rem]">
        <Link to="/agape/studies" className="hover:text-emerald-300">
          Studies
        </Link>
        <Link to="/agape/journeys" className="hover:text-emerald-300">
          Journeys
        </Link>
        <Link to="/agape/community" className="hover:text-emerald-300">
          Community
        </Link>
        <Link to="/agape/events" className="hover:text-emerald-300">
          Gatherings
        </Link>
      </div>
    </footer>
  );
}
