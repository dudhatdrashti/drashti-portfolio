import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CursorGlow() {
  const [pos, setPos] = useState({ x: -200, y: -200 });
  useEffect(() => {
    const move = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);
  return <motion.div className="cursor-glow" animate={{ x: pos.x - 170, y: pos.y - 170 }} transition={{ type: 'spring', stiffness: 45, damping: 18 }} />;
}
