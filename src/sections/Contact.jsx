import { motion } from "framer-motion";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import SectionTitle from "../components/SectionTitle";
import { profile } from "../data/portfolioData";

export default function Contact() {
  const emailLink =
    "mailto:dudhatdrashti28@gmail.com?subject=Portfolio Contact&body=Hello Drashti,%0D%0AI saw your portfolio and would like to connect.";

  const whatsappLink =
    "https://wa.me/917043294671?text=Hello%20Drashti%2C%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect.";

  return (
    <section id="contact" className="section-pad">
      <SectionTitle
        eyebrow="Contact"
        title="Let’s connect for opportunities"
        text="I’m open to frontend developer internships and entry-level roles."
      />

      <motion.div
        className="contact-card"
        initial={{ opacity: 0, y: 55 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <div>
          <h3>Get in touch</h3>

          <p>
            <FiMail /> {profile.email}
          </p>

          <p>
            <FiPhone /> {profile.phone}
          </p>

          <p>
            <FiMapPin /> {profile.location}
          </p>
        </div>

        <div className="contact-actions">
          <a href={emailLink} className="contact-btn">
            <FiMail /> Email Me
          </a>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="contact-btn whatsapp"
          >
            <FaWhatsapp /> WhatsApp Me
          </a>
        </div>
      </motion.div>
    </section>
  );
}