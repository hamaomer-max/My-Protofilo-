import { useEffect, useState } from "react";
import Home from "./components/home";
import About from "./components/about";
import Skill from "./components/skill";
import Project from "./components/project";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,   
      once: false,     
    });
  }, []);
  
  return (
    <>
      <div className="overflow-hidden">
      <Navbar />
      <div className="pt-20">
        <Home />
        <About />
        <Skill />
        <Project />
        <Contact />
        <Footer />
      </div>
      </div>
    </>
  );
}

export default App;
