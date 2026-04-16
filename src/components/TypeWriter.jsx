import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const fullText = "Full-Stack Web Developer";

function TypeWriter() {
  const [displayed, setDisplayed] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayed((prev) => prev + fullText[index]);
        setIndex((prev) => prev + 1);
      }, 80); 
      return () => clearTimeout(timeout);
    }
  }, [index]);

  return (
    <span className="sp-1 block text-xl sm:text-2xl md:text-3xl font-semibold mt-3">
      {displayed}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.6, repeat: Infinity, repeatType: "reverse" }}
        className="inline-block ml-1 w-0.5 h-6 bg-yellow-500 align-middle"
      />
    </span>
  );
}

export default TypeWriter;