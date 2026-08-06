import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import CustomCursor from "./components/CustomCursor";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Journey from "./sections/Journey";
import Contact from "./sections/Contact";

export default function App() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  useEffect(() => {
    const bar = document.querySelector(".scroll-progress");

    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const progress = height > 0 ? (scrollTop / height) * 100 : 0;

      if (bar) bar.style.width = `${progress}%`;
    };

    window.addEventListener("scroll", updateProgress);
    updateProgress();

    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  return (
    <>
      <CustomCursor />
      <div className="noise" />
      <div className="scroll-progress" />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9 }}
      >
        <Navbar theme={theme} setTheme={setTheme} />

        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Journey />
          <Contact />
        </main>

        <footer>
          © 2026 Drashti Dudhat. Built with React, CSS and Framer Motion.
        </footer>
      </motion.div>
    </>
  );
}