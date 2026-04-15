import { useState } from "react";
import { motion } from "framer-motion";

function About() {
  const [showMore, setShowMore] = useState(false);
  const text = "Full-Stack Web Developer";

  return (
      <section
        id="about"
        data-aos="fade-up"
        className="relative min-h-screen flex items-center justify-center 
      bg-gradient-to-br from-yellow-600 to-yellow-500 text-white px-6 md:px-12 py-20 transition-colors duration-300 h-3   "
      >
        {/* Blur Overlay */}
        <div className="absolute inset-0 backdrop-blur-sm bg-black/30"></div>

        {/* Content */}
        <div data-aos="fade-up" data-aos-delay="200" className="relative z-10 max-w-3xl text-center mb-40 mt-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">About Me</h1>

          <p className="text-lg md:text-xl leading-relaxed text-gray-200 transition-all duration-500">
            I'm Muhammad Omer, an enthusiastic Full-Stack Web Developer who
            graduated from Sulaimany Polytechnic University with a Bachelor in
            Information Technology. I have been developing web systems and
            applications for more than two years. My area of expertise is
            developing modern, scalable web applications with cutting-edge
            technologies.
            {showMore && (
              <>
                {" "}
                I like to write maintainable code, design clean user interfaces,
                and solve real-world problems. Making robust and helpful
                products for my clients is something I enjoy doing every day,
                and it is very important to me. My objective is to advance as a
                developer and make a significant contribution to digital
                products.
              </>
            )}
          </p>

          <button
            onClick={() => setShowMore(!showMore)}
            className="mt-6 text-blue-950 hover:text-blue-900 transition font-semibold"
          >
            {showMore ? "See Less ↑" : "See More ↓"}
          </button>
        </div>
      </section>
  );
}

export default About;
