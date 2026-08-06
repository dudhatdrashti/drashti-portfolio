import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import { skills } from '../data/portfolioData';

export default function Skills() {
  return (
    <section id="skills" className="section-pad skills">
      <SectionTitle eyebrow="Tech Stack" title="Tools I use to build modern apps" text="A practical stack for frontend, backend and full-stack project development." />
      <div className="skills-grid">
        {skills.map((skill, i) => (
          <motion.div className="skill-card" key={skill} initial={{ opacity: 0, y: 30, scale: 0.9 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.04, duration: 0.45 }} whileHover={{ y: -8, rotate: i % 2 ? -1 : 1 }}>
            <span>{String(i + 1).padStart(2, '0')}</span>{skill}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
