"use client";

import { HiOutlineClipboardCheck, HiOutlineHome, HiOutlineOfficeBuilding } from "react-icons/hi";
import { MdOutlineDesignServices } from "react-icons/md";
import Reveal from "./Reveal";

const services = [
  {
    title: "Interior Design",
    desc: "Professional interior planning for commercial, residential, and hospitality spaces.",
    icon: <MdOutlineDesignServices className="text-5xl text-blue-900" />,
  },
  {
    title: "Office Renovation",
    desc: "Complete office renovation and workspace improvement solutions.",
    icon: <HiOutlineOfficeBuilding className="text-5xl text-blue-900" />,
  },
  {
    title: "Construction Services",
    desc: "Structural, mechanical, electrical, and finishing handled by an experienced team.",
    icon: <HiOutlineHome className="text-5xl text-blue-900" />,
  },
  {
    title: "Project Management",
    desc: "End-to-end supervision to ensure timely delivery and quality execution.",
    icon: <HiOutlineClipboardCheck className="text-5xl text-blue-900" />,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-16">
          <Reveal>
            <p className="text-yellow-500 font-semibold tracking-widest mb-3">
              WHAT WE DO
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 leading-tight">
              Our Services
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="text-gray-600 max-w-2xl mx-auto mt-4">
              Delivering high-quality interior design and construction services 
              backed by years of professional experience.
            </p>
          </Reveal>
        </div>

        {/* SERVICE CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, i) => (
            <Reveal key={i} delay={0.1 * i}>
              <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-2">
                <div className="flex justify-center mb-6">{service.icon}</div>

                <h3 className="text-2xl font-bold text-blue-900 text-center mb-3">
                  {service.title}
                </h3>

                <p className="text-gray-600 text-center leading-relaxed">
                  {service.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
