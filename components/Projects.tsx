"use client";

import Image from "next/image";
import { useState } from "react";
import Reveal from "./Reveal";

export default function Projects() {
  const projectImages = [
    "/portfolio/project1.png",
    "/portfolio/project2.png",
    "/portfolio/project3.png",
    "/portfolio/project4.png",
    "/portfolio/project5.png",
    "/portfolio/project6.png",
  ];

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="projects" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <p className="text-center text-yellow-500 font-semibold tracking-widest mb-3">
            PORTFOLIO
          </p>
        </Reveal>
        <Reveal>
          <h2 className="text-4xl font-bold text-blue-900 text-center mb-6">
            Featured Projects
          </h2>
        </Reveal>

        <Reveal>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            A selection of our completed interior and construction works across
            commercial, residential, and corporate sectors.
          </p>
        </Reveal>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectImages.map((img, index) => (
            <Reveal key={index}>
              <div
                className="relative cursor-pointer group rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition"
                onClick={() => setSelectedImage(img)}
              >
                <Image
                  src={img}
                  alt={`project-${index}`}
                  width={500}
                  height={400}
                  className="w-full h-64 object-cover"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-blue-900/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition">
                  <span className="text-white font-semibold text-lg">
                    View Project
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* FULLSCREEN MODAL */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 animate-fadeIn"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl w-full px-4" onClick={(e) => e.stopPropagation()}>
              {/* CLOSE BUTTON */}
              <button
                className="absolute -top-10 right-0 text-white text-3xl font-bold hover:text-gray-300"
                onClick={() => setSelectedImage(null)}
              >
                ×
              </button>

              {/* IMAGE */}
              <Image
                src={selectedImage}
                alt="fullscreen project"
                width={1200}
                height={800}
                className="rounded-xl w-full h-auto object-contain shadow-2xl"
              />
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
