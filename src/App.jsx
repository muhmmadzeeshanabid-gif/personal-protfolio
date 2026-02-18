import React from "react";
import Header from "./components/header/Header.jsx";
import Skills from "./components/Skills.jsx";
import Experience from "./components/experience/Experience.jsx";
import About from "./components/About.jsx";
import Projects from "./components/projects/Projects.jsx";
import Testimonials from "./components/testimonials/Testimonials.jsx";
import Contact from "./components/contact/Contact.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {
  return (
    <div className="font-sora">
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
