import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Projects from "../components/Projects";
import Clients from "../components/Clients";
import Pricing from "../components/Pricing";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <About />
      <Services />
      <Projects />
      <Clients />
      <Pricing />
      <Contact />
    </main>
  );
}
