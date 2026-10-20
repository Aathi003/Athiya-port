import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { LenisContext, useLenis } from "./hooks/useSmoothScroll";
import { useActiveSection } from "./hooks/useActiveSection";
import { useSectionRoute } from "./hooks/useSectionRoute";
import { nav } from "./data/portfolio";

const sectionIds = nav.map((n) => n.id);

export default function App() {
  const lenis = useLenis();
  const active = useActiveSection(sectionIds);
  useSectionRoute(lenis, active);

  return (
    <LenisContext.Provider value={lenis}>
      <Header active={active} />
      <main className="w">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </LenisContext.Provider>
  );
}
