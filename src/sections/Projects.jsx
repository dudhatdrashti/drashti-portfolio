import { motion } from "framer-motion";
// import { FaGithub } from "react-icons/fa";
// import { FiExternalLink } from "react-icons/fi";
import SectionTitle from "../components/SectionTitle";
import { projects } from "../data/portfolioData";

export default function Projects() {
  return (
    <section id="projects" className="section-pad projects">
      <SectionTitle
        eyebrow="Featured Work"
        title="Projects with clean UI and practical features"
        text="These projects show responsive design, user-focused interfaces, clean structure and real-world frontend development skills."
      />

      <div className="project-grid">
        {projects.map((project, i) => (
          <motion.article
            className="project-card"
            key={project.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: i * 0.08 }}
            whileHover={{ y: -14, rotateX: 4, rotateY: -4 }}
          >
            <div className="project-visual">
              <span>
                {project.title
                  .split(" ")
                  .map((word) => word[0])
                  .slice(0, 2)
                  .join("")}
              </span>
            </div>

            <div className="project-content">
              <p>{project.type}</p>
              <h3>{project.title}</h3>
              <p className="desc">{project.desc}</p>

              <div className="tags">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>

              {/* <div className="project-links">
                <a href={project.live} target="_blank" rel="noreferrer">
                  <FiExternalLink size={17} /> Live
                </a>

                <a href={project.code} target="_blank" rel="noreferrer">
                  <FaGithub size={17} /> Code
                </a>
              </div> */}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}