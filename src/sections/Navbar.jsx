import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Navbar({ theme, setTheme }) {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills"];
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

  const navStyle = {
    position: "fixed",
    top: "22px",
    right: "28px",
    width: "min(820px, 68vw)",
    height: "68px",
    padding: "0 22px",
    borderRadius: "999px",
    border: "1px solid rgba(255,255,255,.14)",
    background: "rgba(18,18,38,.58)",
    backdropFilter: "blur(22px)",
    WebkitBackdropFilter: "blur(22px)",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    zIndex: 999999,
    boxShadow:
      "0 18px 70px rgba(0,0,0,.36), inset 0 1px rgba(255,255,255,.12)",
  };

  const brandStyle = {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    fontWeight: 900,
    color: "white",
    whiteSpace: "nowrap",
  };

  const markStyle = {
    width: "36px",
    height: "36px",
    borderRadius: "12px",
    display: "grid",
    placeItems: "center",
    background: "linear-gradient(135deg,#8b5cf6,#22d3ee)",
    color: "white",
    fontWeight: 900,
    boxShadow: "0 0 25px rgba(34,211,238,.35)",
    fontSize: "14px",
  };

  const rightStyle = {
    display: "flex",
    alignItems: "center",
    gap: "16px",
    marginLeft: "auto",
  };

  const getLinkStyle = (id) => ({
    color: active === id ? "white" : "#aeb7c8",
    fontWeight: 800,
    fontSize: "13px",
    padding: "7px 10px",
    borderRadius: "999px",
    whiteSpace: "nowrap",
    background:
      active === id
        ? "linear-gradient(135deg,rgba(139,92,246,.28),rgba(34,211,238,.2))"
        : "transparent",
    transition: "0.25s ease",
  });

  const buttonStyle = {
    width: "38px",
    height: "38px",
    minWidth: "38px",
    borderRadius: "12px",
    border: "1px solid rgba(255,255,255,.14)",
    background: "linear-gradient(135deg,#8b5cf6,#22d3ee)",
    color: "white",
    display: "grid",
    placeItems: "center",
    fontSize: "14px",
    boxShadow: "0 10px 30px rgba(34,211,238,.25)",
  };

  return (
    <motion.nav
      style={navStyle}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <a href="#home" style={brandStyle}>
        <span style={markStyle}>D</span>
        <span>
          Drashti <span style={{ color: "#aeb7c8" }}>Dudhat</span>
        </span>
      </a>

      <div style={rightStyle}>
        <a href="#about" style={getLinkStyle("about")}>
          About
        </a>

        <a href="#skills" style={getLinkStyle("skills")}>
          Skills
        </a>

        <button
          type="button"
          style={buttonStyle}
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          aria-label="Toggle theme"
        >
          {theme === "dark" ? "☀️" : "🌙"}
        </button>
      </div>
    </motion.nav>
  );
}