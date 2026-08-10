import React from "react";
import Header from "./components/section/header/Header.jsx";
import Skills from "./components/section/Skills.jsx";
import Experience from "./components/section/experience/Experience.jsx";
import About from "./components/section/About.jsx";
import Projects from "./components/section/projects/Projects.jsx";
import Contact from "./components/section/contact/Contact.jsx";
import Footer from "./components/section/Footer.jsx";

const App = () => {
  return (
    <div className="font-sora">
      <Header />
      <Skills />
      <Experience />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
