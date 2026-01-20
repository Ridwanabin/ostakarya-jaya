"use client";

import Image from "next/image";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* LEFT TEXT */}
        <div>
          <Reveal>
            <p className="text-yellow-500 font-semibold tracking-widest mb-4">
              ABOUT US
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 leading-tight mb-6">
              Over 25 Years of Experience  
              <br />
              Building Functional Spaces
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              PT Ostakarya Jaya is a trusted interior design and construction 
              company specializing in workspace solutions, commercial areas, 
              residential interiors, and hospitality sectors.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              Combining innovative design and high-quality craftsmanship, we 
              deliver long-lasting spaces that embody functionality, aesthetics, 
              and professional standards at every stage of the project.
            </p>
          </Reveal>

          <Reveal delay={0.4}>
            <a
              href="#services"
              className="inline-block bg-blue-900 text-white px-8 py-3 rounded-lg font-semibold shadow hover:bg-blue-800 transition"
            >
              Learn More
            </a>
          </Reveal>
        </div>

        {/* RIGHT IMAGE */}
        <Reveal delay={0.2}>
          <div className="relative w-full h-96 rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/portfolio/project5.png"
              alt="About Ostakarya Jaya"
              fill
              className="object-cover"
            />
          </div>
        </Reveal>

      </div>
    </section>
  );
}
