"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

import { X } from "lucide-react";

const Close = () => {
  const router = useRouter();
  const handleClose = () => {
    router.back();
  };
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleClose]);
  return (
    <>
      <motion.div
        className="absolute top-8 right-8 flex flex-col items-center gap-1"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1 }}
      >
        <div
          className="w-12 h-12 rounded-full border-2 border-gray-300 dark:border-gray-300/20 flex justify-center items-center cursor-pointer hover:bg-gray-100 dark:hover:bg-neutral-900"
          onClick={handleClose}
        >
          <X
            width={26}
            height={26}
            className="text-gray-300 dark:text-gray-300/50"
          />
        </div>
        <span className="font-pops text-sm text-gray-300 dark:text-gray-300/30 font-medium hidden md:block">
          ESC
        </span>
      </motion.div>
    </>
  );
};

export default Close;
