"use client";
import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import Lenis from "lenis";

export default function ClientProviders({ children }: { children: React.ReactNode }) {
  // Mouse cursor tracking
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  
  const springConfig = { damping: 40, stiffness: 450, mass: 0.4 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);
  
  const [hasPointer, setHasPointer] = useState(false);

  useEffect(() => {
    // Check if device supports a cursor/pointer hover
    const mediaQuery = window.matchMedia("(hover: hover)");
    setHasPointer(mediaQuery.matches);

    // Initialize Lenis Smooth Scroll
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 1.5,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Track mouse move for spotlight effect & cursor glow
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      // Set global CSS variables for spotlight effect
      const x = e.clientX + "px";
      const y = e.clientY + "px";
      document.documentElement.style.setProperty("--mouse-x", x);
      document.documentElement.style.setProperty("--mouse-y", y);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      lenis.destroy();
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY]);

  return (
    <>
      {/* Noise Texture Overlay */}
      <div className="noise-overlay" />

      {/* Global Mouse Spotlight Background Layer */}
      <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_600px_at_var(--mouse-x,_50%)_var(--mouse-y,_50%),_rgba(124,92,252,0.06),_rgba(66,217,255,0.03),_transparent_100%)]" />

      {/* Custom Cursor Glow (Only on desktop screens with pointer hover capabilities) */}
      {hasPointer && (
        <motion.div
          className="pointer-events-none fixed inset-0 z-[9999] mix-blend-screen hidden md:block"
          style={{
            x: cursorX,
            y: cursorY,
            translateX: "-50%",
            translateY: "-50%",
          }}
        >
          {/* Neon Purple Ring */}
          <div className="absolute -top-3 -left-3 h-6 w-6 rounded-full border border-[#7C5CFC]/30 bg-[#7C5CFC]/5 blur-[1px]" />
          {/* Cyber Cyan Core Dot */}
          <div className="absolute -top-1 -left-1 h-2 w-2 rounded-full bg-[#42D9FF] shadow-[0_0_8px_#42D9FF]" />
        </motion.div>
      )}

      {children}
    </>
  );
}
