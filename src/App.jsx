import React from "react";
import HeroCarousel from "./components/ui/HeroCarousel";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-800">
      {/* Hero Section Carousel */}
      <HeroCarousel />

      {/* Guest Journey Sections */}
      <main className="flex-1 p-8 space-y-12">
        <section className="text-center">
          <h2 className="text-2xl font-semibold text-green-700">Discover Our Menu</h2>
          <p className="mt-2">
            Explore delicious oxtail dishes and wellness-inspired meals crafted
            to nourish body and soul.
          </p>
        </section>

        <section className="text-center">
          <h2 className="text-2xl font-semibold text-green-700">Wellness Content</h2>
          <p className="mt-2">
            Access mindful articles, recipes, and practices that bring balance
            and joy to your daily life.
          </p>
        </section>

        <section className="text-center">
          <h2 className="text-2xl font-semibold text-green-700">Events & Gatherings</h2>
          <p className="mt-2">
            Join workshops, community dinners, and spiritual gatherings that
            connect food with mindfulness.
          </p>
        </section>
      </main>

      {/* Community Entrance at Bottom */}
      <footer className="bg-white border-t p-6 text-center">
        <button className="bg-green-600 text-white px-6 py-3 rounded-lg shadow hover:bg-green-700 transition">
          Enter Our Community
        </button>
      </footer>
    </div>
  );
}

export default App;




 
