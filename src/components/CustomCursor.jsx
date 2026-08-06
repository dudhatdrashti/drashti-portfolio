import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const trailRef = useRef([]);

  useEffect(() => {
    const cursor = cursorRef.current;
    const trails = trailRef.current;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let currentX = mouseX;
    let currentY = mouseY;

    const moveCursor = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
      currentX += (mouseX - currentX) * 0.18;
      currentY += (mouseY - currentY) * 0.18;

      if (cursor) {
        cursor.style.transform = `translate(${currentX}px, ${currentY}px) translate(-50%, -50%)`;
      }

      trails.forEach((trail, index) => {
        if (trail) {
          const delay = (index + 1) * 0.045;
          trail.style.transform = `translate(${currentX}px, ${currentY}px) translate(-50%, -50%) scale(${1 - index * 0.08})`;
          trail.style.opacity = `${0.45 - index * 0.06}`;
          trail.style.transition = `transform ${delay}s ease-out, opacity .3s ease`;
        }
      });

      requestAnimationFrame(animate);
    };

    const addHover = () => cursor?.classList.add("cursor-hover");
    const removeHover = () => cursor?.classList.remove("cursor-hover");

    const createRipple = (e) => {
      const ripple = document.createElement("span");
      ripple.className = "cursor-ripple";
      ripple.style.left = `${e.clientX}px`;
      ripple.style.top = `${e.clientY}px`;
      document.body.appendChild(ripple);

      setTimeout(() => ripple.remove(), 700);
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("click", createRipple);

    const hoverItems = document.querySelectorAll(
      "a, button, .magnetic-btn, .project-card, .contact-btn"
    );

    hoverItems.forEach((item) => {
      item.addEventListener("mouseenter", addHover);
      item.addEventListener("mouseleave", removeHover);
    });

    animate();

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("click", createRipple);

      hoverItems.forEach((item) => {
        item.removeEventListener("mouseenter", addHover);
        item.removeEventListener("mouseleave", removeHover);
      });
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className="custom-cursor" />
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          ref={(el) => (trailRef.current[i] = el)}
          className="cursor-trail"
        />
      ))}
    </>
  );
}