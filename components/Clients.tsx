"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function Clients() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.remove("opacity-0", "translate-y-10");
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
  }, []);

  return (
    <section
      id="clients"
      className="py-24 bg-white"
    >
      <div
        ref={sectionRef}
        className="max-w-7xl mx-auto px-6 transition-all duration-700 opacity-0 translate-y-10"
      >
        {/* TITLE */}

          <p className="text-center text-yellow-500 font-semibold tracking-widest mb-3">
            CLIENTS
          </p>

        <h2 className="text-4xl font-bold text-blue-900 text-center mb-6">
          Our Clients
        </h2>

        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-14">
          Trusted by national and international companies across corporate,
          industrial, and commercial sectors.
        </p>

        {/* LOGO IMAGE */}
        <div className="flex justify-center mb-20">
          <div className="max-w-3xl w-full">
            <Image
              src="/portfolio/clients.png"
              alt="Our Clients"
              width={800}
              height={800}
              className="w-full h-auto object-contain"
              priority
            />
          </div>
        </div>

        {/* CLIENT LIST TABLE */}
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-200 rounded-lg overflow-hidden">
            <thead className="bg-blue-900 text-white">
              <tr>
                <th className="px-6 py-4 text-left">Client Name</th>
                <th className="px-6 py-4 text-left">Industry</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {[
                ["Newmont", "Mining"],
                ["Telkom Indonesia", "Telecommunication"],
                ["Bank Mandiri", "Banking"],
                ["Bank Muamalat", "Banking"],
                ["ZTE", "Technology"],
                ["JICA", "International Agency"],
                ["Panalpina", "Logistics"],
                ["SAIC", "Automotive"],
                ["Bareskrim Polri", "Government"],
                ["Republika", "Media"],
              ].map(([name, industry], i) => (
                <tr
                  key={i}
                  className="hover:bg-gray-50 transition"
                >
                  <td className="px-6 py-4 font-medium text-gray-900">
                    {name}
                  </td>
                  <td className="px-6 py-4 text-gray-600">
                    {industry}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* PRICE RANGE */}
        <div className="mt-20 bg-blue-50 rounded-2xl p-10">
          <h3 className="text-3xl font-bold text-blue-900 mb-6">
            Estimated Project Cost Range
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              ["Office Fit-Out", "IDR 3 – 6 Mio / m²"],
              ["Interior Renovation", "IDR 4 – 8 Mio / m²"],
              ["Custom Furniture", "Starting from IDR 5 Mio"],
            ].map(([title, price], i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition"
              >
                <h4 className="font-semibold text-lg text-gray-900 mb-2">
                  {title}
                </h4>
                <p className="text-blue-900 font-bold">
                  {price}
                </p>
              </div>
            ))}
          </div>

          <p className="text-sm text-gray-500 mt-6">
            *Prices are indicative and may vary based on design complexity,
            materials, and site conditions.
          </p>
        </div>
      </div>
    </section>
  );
}
