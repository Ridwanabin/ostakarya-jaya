"use client";

import { ClipboardList, PenTool, Hammer, CheckCircle, FileSearch, Building2 } from "lucide-react";
import Reveal from "./Reveal";

export default function Workflow() {
  const steps = [
    {
      title: "1. Consultation",
      desc: "We listen to your needs and discuss your project goals to understand your vision.",
      icon: <ClipboardList className="w-12 h-12 text-blue-800" />,
    },
    {
      title: "2. Site Survey",
      desc: "Our team visits the project location to gather accurate measurements and technical data.",
      icon: <FileSearch className="w-12 h-12 text-blue-800" />,
    },
    {
      title: "3. Design & Planning",
      desc: "We create detailed 2D/3D designs, space planning, and cost estimation before execution.",
      icon: <PenTool className="w-12 h-12 text-blue-800" />,
    },
    {
      title: "4. Construction",
      desc: "Execution by our professional team, ensuring quality, safety, and efficiency on-site.",
      icon: <Hammer className="w-12 h-12 text-blue-800" />,
    },
    {
      title: "5. Final Inspection",
      desc: "We perform strict quality control checks before handing over the project.",
      icon: <CheckCircle className="w-12 h-12 text-blue-800" />,
    },
    {
      title: "6. Handover",
      desc: "We deliver a fully completed and clean project ready for use.",
      icon: <Building2 className="w-12 h-12 text-blue-800" />,
    },
  ];

  return (
    <section id="workflow" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* TITLE */}
        <Reveal>
          <h2 className="text-4xl font-bold text-blue-900 text-center mb-4">
            Our Workflow
          </h2>
        </Reveal>

        <Reveal>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-16">
            From initial consultation to project completion, we follow a structured 
            and professional workflow to ensure quality results.
          </p>
        </Reveal>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {steps.map((step, i) => (
            <Reveal key={i}>
              <div
                className="
                  bg-gray-50 p-8 rounded-2xl shadow-md hover:shadow-lg 
                  transition-all duration-300 border border-gray-200 
                  hover:-translate-y-2 cursor-pointer
                "
              >
                <div className="flex justify-center mb-6">{step.icon}</div>

                <h3 className="text-xl font-bold text-blue-900 text-center mb-3">
                  {step.title}
                </h3>

                <p className="text-gray-600 text-center leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
