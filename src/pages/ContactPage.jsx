// src/pages/ContactPage.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Future: integrate with backend or CRM
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-teal-50 via-white to-teal-100">
      {/* Floating Logo */}
      <Link
        to="/"
        className="fixed top-4 left-4 z-50 flex items-center space-x-2 bg-white rounded-full shadow-lg px-3 py-2 hover:scale-105 transition"
      >
        <img src="/favicon.ico" alt="Daddy’s Oxtail Logo" className="w-8 h-8" />
        <span className="text-teal-700 font-bold">Daddy’s Oxtail</span>
      </Link>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-20 px-6">
        <h1 className="text-5xl font-extrabold text-green-700 mb-6">
          💬 Let’s Stay Connected
        </h1>
        <p className="text-gray-700 text-lg max-w-2xl leading-relaxed">
          We don’t just serve meals — we build relationships. Reach out anytime
          and let’s create unforgettable experiences together.
        </p>
      </section>

      {/* Contact Form */}
      <section className="flex-grow flex items-center justify-center px-6">
        <div className="bg-white shadow-xl rounded-2xl p-10 w-full max-w-2xl">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-teal-700 font-semibold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-teal-700 font-semibold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-teal-700 font-semibold mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 focus:outline-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-green-600 text-white py-3 rounded-lg font-bold shadow hover:bg-green-700 transition"
              >
                Send Message
              </button>
            </form>
          ) : (
            <div className="text-center">
              <h2 className="text-2xl font-bold text-teal-700 mb-4">
                🎉 Thank You!
              </h2>
              <p className="text-gray-600">
                Your message has been received. Our team will reach out soon to
                continue the conversation.
              </p>
              <Link
                to="/menu"
                className="mt-6 inline-block bg-green-600 text-white px-6 py-3 rounded-lg shadow hover:bg-green-700 transition"
              >
                Explore Menu
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Future-Focused Engagement */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-teal-700 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">🌍 Beyond Contact</h2>
        <p className="max-w-2xl mx-auto mb-8">
          Join our journey — from exclusive events to wellness experiences,
          we’re building a community that celebrates flavor, culture, and soul.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-6">
          <Link
            to="/events"
            className="bg-white text-green-700 px-6 py-3 rounded-lg font-bold shadow hover:bg-gray-100 transition"
          >
            Upcoming Events
          </Link>
          <Link
            to="/about"
            className="bg-white text-green-700 px-6 py-3 rounded-lg font-bold shadow hover:bg-gray-100 transition"
          >
            About Us
          </Link>
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
