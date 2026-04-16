import { image, img, section } from "framer-motion/client";
import { useState } from "react";
import { FaDownload } from "react-icons/fa";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="fixed w-full z-50 bg-gradient-to-br from-blue-950 to-black">
      <nav className="flex justify-between items-center px-6 md:px-24 py-5">
        <h1 className="text-xl md:text-2xl font-bold text-white">
          <span>&lt;</span>
          <span className="text-yellow-600">Hama</span>
          <span> /&gt;</span>
        </h1>

        <div className="nav-1 hidden md:flex space-x-6 text-white">
          <a
            href="#home"
            className="hover:underline decoration-yellow-600 underline-offset-4 decoration-2"
          >
            Home
          </a>
          <a
            href="#about"
            className="hover:underline decoration-yellow-600 underline-offset-4 decoration-2"
          >
            About
          </a>
          <a
            href="#skills"
            className="hover:underline decoration-yellow-600 underline-offset-4 decoration-2"
          >
            Skills
          </a>
          <a
            href="#projects"
            className="hover:underline decoration-yellow-600 underline-offset-4 decoration-2"
          >
            Projects
          </a>
          <a
            href="#footer"
            className="hover:underline decoration-yellow-600 underline-offset-4 decoration-2"
          >
            Contact
          </a>
        </div>

        <a
          href="../public/cv/muhammed_omer_cv.pdf"
          download
          className="download-btn bg-yellow-600 hover:bg-yellow-500 hidden md:flex text-white"
        >
          <FaDownload /> Download CV
        </a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl text-white transition-transform duration-300"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span
            className={`block transition-all duration-300 ${
              isMenuOpen ? "rotate-90 scale-110" : "rotate-0 scale-100"
            }`}
          >
            <img
              src={isMenuOpen ? "/images/close.png" : "/images/menu.png"}
              alt={isMenuOpen ? "Close menu" : "Open menu"}
              className="w-7 h-7"
            />
          </span>
        </button>

        
        <div
          className={`nav-1 fixed top-16 left-0 w-full bg-gradient-to-br from-blue-950 to-black
  flex flex-col items-center gap-6 py-8 md:hidden z-50 text-white
  transition-all duration-500 ease-in-out
  ${
    isMenuOpen
      ? "opacity-100 translate-y-0 pointer-events-auto max-h-screen"
      : "opacity-0 -translate-y-6 pointer-events-none max-h-0 overflow-hidden"
  }`}
        >
          {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
            <a
              key={section}
              href={`#${item.toLowerCase()}`}
              className="hover:underline decoration-yellow-600 underline-offset-4 decoration-2"
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
