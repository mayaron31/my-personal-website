import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Timeline from "./components/Timeline";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import './styles/style.css';

function App() {
  return (
    <div>
      {/* Navbar Component */}
      <Navbar />

      {/* Home Section */}
      <section id="home">
        <Hero />
      </section>

      {/* Timeline Section */}
      <section id="timeline">
        <Timeline />
      </section>

      {/* Projects Section */}
      <section id="projects">
        <Projects />
      </section>

      {/* Skills Section */}
      <section id="skills">
        <Skills />
      </section>



      {/* Contact Section */}
      <section id="contact">
        <Contact />
      </section>

      {/* Footer Component */}
      <Footer />
    </div>
  );
}

export default App;
