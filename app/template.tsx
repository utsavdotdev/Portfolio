"use client";
import { motion } from "framer-motion";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{
        type: "tween",
        ease: [0.25, 0.46, 0.45, 0.94],
        duration: 0.3,
      }}
    >
      {children}
    </motion.div>
  );
}
