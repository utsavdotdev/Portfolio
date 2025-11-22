"use client";

import { motion } from "framer-motion";
import { ReactNode, useEffect } from "react";

interface PageTransitionProps {
  children: ReactNode;
  className?: string;
}

const pageVariants = {
  initial: {
    opacity: 0,
    scale: 0.96,
    y: 50,
  },
  in: {
    opacity: 1,
    scale: 1,
    y: 0,
  },
  out: {
    opacity: 0,
    scale: 0.96,
    y: -100,
  },
};

const pageTransition = {
  type: "tween",
  ease: [0.25, 0.46, 0.45, 0.94],
  duration: 0.3,
};

const PageTransition = ({ children, className = "" }: PageTransitionProps) => {
  useEffect(() => {
    const body = document.body;
    const originalOverflow = body.style.overflow;
    // Only hide scrollbar if content does not overflow
    const needsScrollbar = body.scrollHeight > window.innerHeight;
    if (!needsScrollbar) {
      body.style.overflow = "hidden";
    }
    return () => {
      body.style.overflow = originalOverflow;
    };
  }, []);

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
