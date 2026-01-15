import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Workflow from "@/components/Workflow";
import Clients from "@/components/Clients";
import Contact from "@/components/Contact";
import Projects from "@/components/Projects";


export default function Home() {
  return (
    <main className="pt-20">
      <Hero />
      <About />
      <Services />
      <Workflow />
      <Clients />
      <Contact />
    </main>
  );
}
