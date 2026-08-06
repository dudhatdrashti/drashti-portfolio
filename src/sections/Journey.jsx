import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import { timeline } from '../data/portfolioData';

export default function Journey() {
  return (
    <section id="journey" className="section-pad journey">
      <SectionTitle eyebrow="Journey" title="Education and growth path" text="A focused path toward becoming a strong frontend and full-stack developer." />
      <div className="timeline">
        {timeline.map((item, i) => (
          <motion.div className="timeline-item" key={item.title} initial={{ opacity: 0, x: i % 2 ? 50 : -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <span className="dot" />
            <div>
              <small>{item.year}</small>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
