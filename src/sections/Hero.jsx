import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiDownload, FiArrowRight, FiMapPin } from "react-icons/fi";
import { profile, stats } from "../data/portfolioData";
import MagneticButton from "../components/MagneticButton";

export default function Hero() {
  return (
    <section id="home" className="hero section-pad">
      <div className="orb orb-one" />
      <div className="orb orb-two" />

      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 45 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
      >
        <motion.div
          className="pill"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.25 }}
        >
          Available for Frontend Developer Roles
        </motion.div>

        <h1>
          Hi, I’m <span>{profile.name}</span>
          <br />
          {profile.role}
        </h1>

        <p>{profile.tagline}</p>

        <div className="hero-location">
          <FiMapPin size={18} /> {profile.location}
        </div>

        <div className="hero-actions">
          <MagneticButton href="#projects">
            View Projects <FiArrowRight size={18} />
          </MagneticButton>

          <MagneticButton
            href={profile.resume}
            variant="secondary"
            download
          >
            Resume <FiDownload size={18} />
          </MagneticButton>
        </div>

        <div className="socials">
          <a href={profile.github} target="_blank" rel="noreferrer">
            <FaGithub size={19} /> GitHub
          </a>

          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            <FaLinkedin size={19} /> LinkedIn
          </a>
        </div>
      </motion.div>

      <motion.div
        className="hero-card"
        initial={{ opacity: 0, rotateY: 30, y: 60 }}
        animate={{ opacity: 1, rotateY: 0, y: 0 }}
        transition={{ duration: 1, delay: 0.25 }}
      >
        <div className="avatar-ring">
          <div className="avatar">DD</div>
        </div>

        <h3>{profile.role}</h3>
        <p>React.js • JavaScript • Tailwind CSS</p>

        <div className="mini-grid">
          {stats.map((s) => (
            <div key={s.label}>
              <strong>{s.value}</strong>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}