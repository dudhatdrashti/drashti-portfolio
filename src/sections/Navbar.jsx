import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FiMenu, FiMoon, FiSun, FiX } from "react-icons/fi";

export default function Navbar({ theme, setTheme }) {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "journey", "contact"];
      const current = sections.find((id) => {
        const el = document.getElementById(id);
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top <= 140 && rect.bottom >= 140;
      });
      if (current) setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [menuOpen, setMenuOpen] = useState(false);
  const links = [
    ["about", "About"],
    ["skills", "Skills"],
    ["projects", "Work"],
    ["journey", "Journey"],
    ["contact", "Contact"],
  ];

  return (
    <motion.nav
      className="site-nav"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <a href="#home" className="brand" onClick={() => setMenuOpen(false)}>
        <span className="brand-mark">D</span>
        <span>Drashti <em>Dudhat</em></span>
      </a>

      <div className={`nav-links ${menuOpen ? "is-open" : ""}`}>
        {links.map(([id, label]) => (
          <a
            key={id}
            href={`#${id}`}
            className={active === id ? "active" : ""}
            onClick={() => setMenuOpen(false)}
          >
            {label}
          </a>
        ))}
        <button
          type="button"
          className="theme-toggle"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          aria-label="Toggle theme"
        >
          {theme === "dark" ? <FiSun /> : <FiMoon />}
        </button>
      </div>
      <button
        type="button"
        className="menu-toggle"
        onClick={() => setMenuOpen((open) => !open)}
        aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={menuOpen}
      >
        {menuOpen ? <FiX /> : <FiMenu />}
      </button>
    </motion.nav>
  );
}