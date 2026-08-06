import { motion } from 'framer-motion';

export default function MagneticButton({ href, children, variant, download }) {
  return (
    <a
      href={href}
      download={download ? true : undefined}
      className={`magnetic-btn ${variant || "primary"}`}
    >
      {children}
    </a>
  );
}
