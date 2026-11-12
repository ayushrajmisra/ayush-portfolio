import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import ScrollProgress from "./components/ui/ScrollProgress";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Experience from "./components/sections/Experience";
import Community from "./components/sections/Community";
import Education from "./components/sections/Education";
import Certifications from "./components/sections/Certifications";
import Achievements from "./components/sections/Achievements";
import Responsibilities from "./components/sections/Responsibilities";
import Contact from "./components/sections/Contact";

function App() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Community />
        <Education />
        <Certifications />
        <Achievements />
        <Responsibilities />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
