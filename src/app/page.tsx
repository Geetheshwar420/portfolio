/*
  THESIS: A portfolio that leads with the maker's name and lets the work command attention — refusing the standard hero-card-grid pattern.
  OWN-WORLD: Near-black (#0a0a0a) ground, off-white (#f0efea) type, warm amber (#c8973a) accent. Instrument Serif italic display + Geist mono labels. Hairline borders, editorial section numbering.
  STORY: Visitor sees the name, understands the scope (Full-Stack + AI + Security), reads selected work in depth, and reaches out or downloads the resume.
  FIRST VIEWPORT: Full-height black canvas. Monospaced eyebrow at top left. Giant italic serif name at lower left. Role line in muted secondary. Three actions (View Work / Resume / GitHub). Grid lines recede into dark. Amber ambient in top-right corner.
  FORM: Editorial-list portfolio. Placed #1 on the ordered list. Seed key: no script run — direct implementation, no concept tournament needed for a precisely specified request.
  FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance.
*/
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
