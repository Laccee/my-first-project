import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function EventsSection({ events }) {
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  return (
    <section
      id="events"
      className="relative flex flex-col items-center justify-center text-center py-20 px-8 md:px-16 lg:px-24 bg-gradient-to-b from-gray-900 via-black to-gray-800"
    >
      {/* Section Title */}
      <h2 className="text-5xl font-oswald text-yellow-400 tracking-widest mb-6">
         EVENTS & GATHERINGS 
      </h2>
      <p className="mt-4 text-lg text-gray-300 max-w-3xl leading-relaxed">
       📍 Workshops and soulful gatherings that connects food with mindfulness.📍
      </p>

      {/* Dynamic Events Grid */}
      <div className="mt-16 grid gap-12 grid-cols-1 sm:grid-cols-2 justify-center">
        {events &&
          events.map((event, idx) => (
            <div
              key={idx}
              data-aos="zoom-in"
              data-aos-delay={idx * 200}
              className="group bg-gray-800 border border-gray-700 rounded-xl shadow-lg hover:shadow-2xl transition-transform duration-300 overflow-hidden flex flex-col max-w-md w-full"
            >
              {/* Event Media */}
              {event.media && (
                <div className="relative w-full h-56 overflow-hidden">
                  {event.media.endsWith(".mp4") ? (
                    <video
                      src={event.media}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-full object-cover group-hover:scale-105 transform transition-transform duration-500"
                    />
                  ) : (
                    <img
                      src={event.media}
                      alt={event.name}
                      className="w-full h-full object-cover group-hover:scale-105 transform transition-transform duration-500"
                    />
                  )}
                </div>
              )}

              {/* Event Info */}
              <div className="p-8 flex-1 flex flex-col justify-between text-center">
                <h3 className="text-2xl font-oswald text-yellow-400 mb-2">
                  {event.name}
                </h3>
                <p className="text-gray-400">{event.date}</p>
                <p className="text-gray-500 mb-6">{event.location}</p>

                {/* Centered RSVP Button */}
                <div className="mt-auto flex justify-center">
                  <button className="bg-yellow-400 text-black px-6 py-2 rounded-lg font-bold shadow hover:bg-yellow-500 transition-transform transform hover:scale-105">
                    RSVP
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}
