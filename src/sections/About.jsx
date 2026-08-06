import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle";

export default function About() {
  return (
    <section id="about" className="section-pad">
      <SectionTitle
        eyebrow="About Me"
        title="Frontend developer focused on clean and responsive UI"
        text="I enjoy building modern web interfaces that are easy to use, responsive across devices and visually polished."
      />

      <div className="about-grid">
        <motion.div
          className="glass-panel"
          initial={{ opacity: 0, x: -45 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h3>Profile</h3>
          <p>
            I am a Frontend Developer with strong skills in React.js,
            JavaScript, HTML, CSS and Tailwind CSS.
          </p>
          <p>
            I focus on building responsive, user-friendly web interfaces with
            clean design, smooth user experience and performance optimization.
          </p>
          <p>
            I am currently pursuing BCA from Silver Oak University and improving
            my skills through real-world projects.
          </p>
        </motion.div>

        <motion.div
          className="glass-panel highlight-panel"
          initial={{ opacity: 0, x: 45 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h3>What I Do</h3>
          <p>
            <span>01.</span> Responsive frontend development
          </p>
          <p>
            <span>02.</span> Modern UI design with Tailwind CSS
          </p>
          <p>
            <span>03.</span> React components and interactive layouts
          </p>
          <p>
            <span>04.</span> Basic backend understanding with Node.js and MongoDB
          </p>
        </motion.div>
      </div>
    </section>
  );
}