import { useState, useEffect, useRef } from "react";
import { useInView } from "framer-motion";

function useTypeWriter(text, speed = 80) {
  const [displayed, setDisplayed] = useState("");
  const [index, setIndex] = useState(0);
  const [started, setStarted] = useState(false);

  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.5 });

  useEffect(() => {
    if (isInView) {
      setStarted(true);
    } else {
      setStarted(false);
      setDisplayed("");
      setIndex(0);
    }
  }, [isInView]);

  useEffect(() => {
    if (!started) return;

    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayed((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      }, speed);
      return () => clearTimeout(timeout);
    } else {
      const reset = setTimeout(() => {
        setDisplayed("");
        setIndex(0);
      }, 1500);
      return () => clearTimeout(reset);
    }
  }, [index, started, text, speed]);

  return { displayed, ref, isInView };
}

export default useTypeWriter;