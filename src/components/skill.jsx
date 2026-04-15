import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaPhp,
  FaGitAlt,
  FaJava,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiBootstrap,
  SiLaravel,
  SiMysql,
  SiPython,
  SiSolidity,
  SiHiveBlockchain,
  SiShadcnui,
  SiPostman
} from "react-icons/si";



function Skill() {
    const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15, // each child delays 0.15s
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 },
  };

  return (

    <section id="skills" className="py-20 px-6 bg-white text-blue-950">
      {/* Section Title */}
      <div className="text-center mb-16" data-aos="fade-up">
        <h2 className="text-4xl md:text-5xl font-bold">Skills</h2>
        <p className="text-lg md:text-xl text-blue-950 mt-4">
          Proficient in developing websites, web applications, <br />
          and systems to meet your digital requirements. Exceptional results
          guaranteed.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Frontend */}
        <div data-aos="fade-up" className="bg-blue-50 p-8 rounded-xl shadow-md hover:shadow-xl transition">
          <h3 className="text-2xl font-semibold relative inline-block">
            Frontend
            <span className="block h-1 w-1/2 bg-yellow-500 mt-2 rounded"></span>
          </h3>

          <ul className="mt-6 space-y-3" data-aos="fade-up">
            <li data-aos="fade-right" className="flex items-center gap-3 hover:translate-x-2 transition duration-300 ">
                <FaReact className="text-cyan-500 text-xl" /> React
            </li>
            <li data-aos="fade-right" className="flex items-center gap-3 hover:translate-x-2 transition duration-300">
                <FaJs className="text-yellow-500 text-xl" /> JavaScript
            </li>
            <li data-aos="fade-right" className="flex items-center gap-3 hover:translate-x-2 transition duration-300">
                <FaHtml5 className="text-orange-500 text-xl" /> HTML5
            </li>
            <li data-aos="fade-right" className="flex items-center gap-3 hover:translate-x-2 transition duration-300">
                <FaCss3Alt className="text-blue-500 text-xl" /> CSS3
            </li>
            <li data-aos="fade-right" className="flex items-center gap-3 hover:translate-x-2 transition duration-300">
                <SiTailwindcss className="text-teal-500 text-xl" /> Tailwind CSS
            </li>
            <li data-aos="fade-right" className="flex items-center gap-3 hover:translate-x-2 transition duration-300">
                <SiBootstrap className="text-purple-500 text-xl" /> Bootstrap
            </li>
            <li data-aos="fade-right" className="flex items-center gap-3 hover:translate-x-2 transition duration-300">
                <SiShadcnui className="text-emerald-500 text-xl" /> Shadcn
            </li>
          </ul>
        </div>


        {/* Backend */}
        <div data-aos="fade-up" className="bg-blue-50 p-8 rounded-xl shadow-md hover:shadow-xl transition">
          <h3 className="text-2xl font-semibold relative inline-block">
            Backend
            <span className="block h-1 w-1/2 bg-blue-500 mt-2 rounded"></span>
          </h3>

          <ul className="mt-6 space-y-3">
            <li data-aos="fade-right" className="flex items-center gap-3 hover:translate-x-2 transition duration-300">
                <FaNodeJs className="text-green-500 text-xl" /> Node.js
            </li>
            <li data-aos="fade-right" className="flex items-center gap-3 hover:translate-x-2 transition duration-300">
                <FaPhp className="text-purple-500 text-xl" /> PHP
            </li>
            <li data-aos="fade-right" className="flex items-center gap-3 hover:translate-x-2 transition duration-300">
                <SiLaravel className="text-red-500 text-xl" /> Laravel
            </li>
            <li data-aos="fade-right" className="flex items-center gap-3 hover:translate-x-2 transition duration-300">
                <SiMysql className="text-blue-500 text-xl" /> MySQL
            </li>
          </ul>
        </div>


        {/* Additional */}
        <div data-aos="fade-up" className="bg-blue-50 p-8 rounded-xl shadow-md hover:shadow-xl transition">
          <h3 className="text-2xl font-semibold relative inline-block">
            Additional
            <span className="block h-1 w-1/2 bg-orange-500 mt-2 rounded"></span>
          </h3>

          <ul className="mt-6 space-y-3">
            <li data-aos="fade-right" className="flex items-center gap-3 hover:translate-x-2 transition duration-300">
                <FaGitAlt className="text-gray-500 text-xl" /> Git & GitHub
            </li>
            <li data-aos="fade-right" className="flex items-center gap-3 hover:translate-x-2 transition duration-300">
                <SiPython className="text-blue-500 text-xl" /> Python
            </li>
            <li data-aos="fade-right" className="flex items-center gap-3 hover:translate-x-2 transition duration-300">
                <FaJava className="text-red-500 text-xl" /> Java
            </li>
            <li data-aos="fade-right" className="flex items-center gap-3 hover:translate-x-2 transition duration-300">
                <SiSolidity className="text-gray-500 text-xl" /> Solidity
            </li>
            <li data-aos="fade-right" className="flex items-center gap-3 hover:translate-x-2 transition duration-300">
                <SiHiveBlockchain className="text-yellow-500 text-xl" /> Blockchain
            </li>
            <li data-aos="fade-right" className="flex items-center gap-3 hover:translate-x-2 transition duration-300">
                <SiPostman className="text-orange-600 text-xl" /> Postman
            </li>
            
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Skill;
