import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function FeaturedArticleSection({ article }) {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section
      id="wellness"
      className="text-center py-12 px-6 bg-gradient-to-b from-green-50 to-white"
    >
      <h2 className="text-4xl font-playfair text-teal-700 tracking-tight drop-shadow-sm"> Wellness Spotlight </h2>
      <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
        One highlight from our wellness archive — explore more in the full collection.
      </p>

      {/* Featured Article */}
      {article && (
        <div
          data-aos="fade-up"
          className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden flex flex-col mt-10 max-w-md mx-auto"
        >
          <div className="bg-gradient-to-r from-teal-600 to-green-600 p-4">
            <h3 className="text-xl font-bold text-white group-hover:scale-105 transform transition-transform duration-300">
              {article.title}
            </h3>
          </div>
          <div className="p-6 flex-1 flex flex-col justify-between">
            <p className="text-gray-600 text-base leading-relaxed mb-4">
              {article.summary}
            </p>
            <div className="mt-auto flex justify-center gap-4">
              <a
                href={`/articles/${article.id}`}
                className="bg-green-600 text-white px-4 py-2 rounded-lg shadow hover:bg-teal-700 transition-transform transform hover:scale-105"
              >
                Read More
              </a>
              <a
                href="/articles"
                className="text-teal-600 font-semibold hover:underline"
              >
                View Archive
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

