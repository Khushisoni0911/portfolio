import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Research from "@/components/Research";
import Certifications from "@/components/Certifications";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main style={{ position: "relative", zIndex: 1 }}>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Research />
      <Certifications />
      <Achievements />
      <Contact />
      <Footer />
    </main>
  );
}
