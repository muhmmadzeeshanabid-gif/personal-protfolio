import React from "react";
import Header from "./components/Header.jsx";
import Skills from "./components/Skills.jsx";
import Experience from "./components/Experience.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";
import Testimonials from "./components/Testimonials.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {
  return (
    <div>
      <Header />
      <Skills />
      <Experience />
      <About />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
