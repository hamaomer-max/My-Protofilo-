import { useState } from "react";

function About() {
  const text = "Full-Stack Web Developer";

  return (
    <section
      id="about"
      data-aos="fade-up"
      className="relative min-h-screen flex items-center justify-center 
      bg-gradient-to-br from-yellow-600 to-yellow-500 text-white px-6 md:px-12 py-20 transition-colors duration-300 h-3   "
    >
      <div className="absolute inset-0 backdrop-blur-sm bg-black/30"></div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        
        <div data-aos="fade-up" className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Me</h1>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto leading-relaxed">
            I'm Muhammad Omer, a Full-Stack Web Developer graduated from
            Sulaimany Polytechnic University with a Bachelor in Information
            Technology. I build modern, scalable web applications with clean
            code and great user experiences.
          </p>
        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          
          <div data-aos="fade-right" data-aos-delay="100">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-yellow-500 text-2xl">💼</span>
              <h2 className="text-2xl font-bold">Experience</h2>
            </div>
            <div className="border-l-2 border-yellow-500 pl-6 space-y-6">
              <div className="text-white">
                - Full-Stack Web Developer  |  Freelance / Self-Employed (2024 - Present) <br />
                - Full-Stack Developer Intern  |  Tech Company (Internship)
              </div>
            </div>
          </div>

          <div data-aos="fade-left" data-aos-delay="200">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-yellow-500 text-2xl">🎓</span>
              <h2 className="text-2xl font-bold">Education</h2>
            </div>
            <div className="border-l-2 border-yellow-500 pl-6 space-y-6">
              <div className="text-white">
                - Bachelor in Information Technology  |  Sulaimany Polytechnic University (2021 - 2025)
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
