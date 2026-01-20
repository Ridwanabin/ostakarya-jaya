"use client";

import Image from "next/image";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative w- min-h-[80vh] flex items-center overflow-hidden"
    >
      {/* Background Image */}
      <Image
        src="/portfolio/boardroom.png"
        alt="Ostakarya Jaya Interior"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-900/70 to-transparent" />

      {/* CONTENT */}
      <div className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            
            {/* LEFT COLUMN */}
            <div className="py-40">
              
              <Reveal>
                <p className="text-yellow-300 font-semibold tracking-widest mb-6">
                  INTERIOR • CONTRACTOR • DESIGN & BUILD
                </p>
              </Reveal>

              <Reveal delay={0.1}>
                <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight text-left">
                  We Build
                  <br />
                  Spaces That
                  <br />
                  Work
                </h1>
              </Reveal>

              <Reveal delay={0.2}>
                <p className="text-gray-200 text-lg max-w-xl mt-8 leading-relaxed text-left">
                  Ostakarya Jaya is a professional interior design and construction
                  company with over 25 years of experience delivering functional,
                  aesthetic, and durable spaces.
                </p>
              </Reveal>

              <Reveal delay={0.3}>
                <div className="flex gap-5 mt-12">
                  <a
                    href="#contact"
                    className="bg-yellow-400 text-blue-900 font-semibold px-8 py-3 rounded-lg hover:bg-yellow-300 transition shadow-md"
                  >
                    Contact Us
                  </a>

                  <a
                    href="#projects"
                    className="border border-white/70 text-white px-8 py-3 rounded-lg hover:bg-white hover:text-blue-900 transition shadow-md"
                  >
                    View Portfolio
                  </a>
                </div>
              </Reveal>

            </div>

            {/* RIGHT COLUMN (EMPTY, for image focus) */}
            <div className="hidden lg:block" />
          </div>
        </div>
      </div>
    </section>
  );
}
