import HomeClient from "@/components/HomeClient";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <HomeClient>
      <Hero />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </HomeClient>
  );
}
