type Service = {
  title: string;
  desc: string;
};

const services: Service[] = [
  {
    title: "Interior Design",
    desc: "Functional and aesthetic interior planning.",
  },
  {
    title: "Construction & Renovation",
    desc: "End-to-end construction execution.",
  },
  {
    title: "Office Fit-Out",
    desc: "Professional corporate workspaces.",
  },
  {
    title: "Custom Furniture",
    desc: "Tailored furniture solutions.",
  },
  {
    title: "Project Management",
    desc: "Timeline, budget, and quality control.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-gray-100 py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-10">Our Services</h2>

        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white p-6 rounded-lg shadow transition hover:shadow-lg"
            >
              <h3 className="text-lg font-semibold">
                {service.title}
              </h3>
              <p className="mt-2 text-gray-600">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
