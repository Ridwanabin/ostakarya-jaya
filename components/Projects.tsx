import Image from "next/image";

type ProjectImage = {
  src: string;
  alt: string;
};

const projects: ProjectImage[] = [
  {
    src: "/projects/project1.jpg",
    alt: "Interior project 1",
  },
  {
    src: "/projects/project2.jpg",
    alt: "Interior project 2",
  },
  {
    src: "/projects/project3.jpg",
    alt: "Interior project 3",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="mb-10 text-3xl font-bold">
          Our Projects
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.src}
              className="overflow-hidden rounded-lg shadow"
            >
              <Image
                src={project.src}
                alt={project.alt}
                width={600}
                height={400}
                className="h-full w-full object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
                priority
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
