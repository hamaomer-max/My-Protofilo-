import projects from "../projects.js";
import { motion } from "framer-motion";



function Project() {
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15, 
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 },
  };

  return (

    <section data-aos="fade-up" id="projects" className="py-20 px-6 bg-blue-950 text-white">
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold">Projects</h2>
      </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <div
              key={project.id}
              data-aos="fade-up"
              data-aos-delay={project.id * 100}
              className="bg-white/10 backdrop-blur-lg rounded-xl overflow-hidden shadow-lg hover:scale-105 transition duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>

                <p className="text-gray-200 text-sm mb-4">
                  {project.description}
                </p>

                <p className="text-yellow-400 text-sm mb-6">{project.tech}</p>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block  bg-yellow-500 text-blue-950 px-5 py-2 rounded-lg font-semibold hover:bg-yellow-400 transition"
                >
                  View Code
                </a>
              </div>
            </div>
          ))}
        </div>
    </section>
  );
}

export default Project;
