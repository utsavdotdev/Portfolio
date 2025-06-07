"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);

  // Motion values for smooth cursor tracking
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  // Spring animations for trailing circles with different delays
  const trail1X = useSpring(cursorX, {
    damping: 25,
    stiffness: 400,
    mass: 0.8,
  });
  const trail1Y = useSpring(cursorY, {
    damping: 25,
    stiffness: 400,
    mass: 0.8,
  });

  const trail2X = useSpring(cursorX, {
    damping: 20,
    stiffness: 300,
    mass: 0.8,
  });
  const trail2Y = useSpring(cursorY, {
    damping: 20,
    stiffness: 300,
    mass: 0.8,
  });

  const trail3X = useSpring(cursorX, {
    damping: 15,
    stiffness: 200,
    mass: 0.8,
  });
  const trail3Y = useSpring(cursorY, {
    damping: 15,
    stiffness: 200,
    mass: 0.8,
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);

      if (!isVisible) {
        setIsVisible(true);
      }
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [cursorX, cursorY, isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Trailing circle 3 - most faded */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-40"
        style={{ x: trail3X, y: trail3Y }}
      >
        <div className="w-6 h-6 bg-[#606060]/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
      </motion.div>

      {/* Trailing circle 2 - medium fade */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-40"
        style={{ x: trail2X, y: trail2Y }}
      >
        <div className="w-6 h-6 bg-[#606060]/20 rounded-full -translate-x-1/2 -translate-y-1/2" />
      </motion.div>

      {/* Trailing circle 1 - less faded */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-40"
        style={{ x: trail1X, y: trail1Y }}
      >
        <div className="w-6 h-6 bg-[#606060]/20 rounded-full -translate-x-1/2 -translate-y-1/2" />
      </motion.div>

      {/* Main cursor - solid */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50"
        style={{ x: cursorX, y: cursorY }}
      >
        <div className="w-6 h-6 bg-[#606060] rounded-full -translate-x-1/2 -translate-y-1/2" />
      </motion.div>
    </>
  );
}
