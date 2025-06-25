"use client";
import React, { useState } from "react";
import { stack } from "@/constants/data";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

const Stack = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="flex flex-col p-6 gap-4 cursor-pointer" onClick={() => setIsOpen(true)}>
        <span className="text-2xl font-pops text-gray-800 dark:text-gray-300 mb-4 block">
          Stack I Use
        </span>
        <div className="h-full overflow-hidden">
          <div className="tech-stack-slider flex items-center justify-start">
            {/* First set of icons */}
            {stack.map((tech, index) => (
              <div
                key={`tech-1-${index}`}
                className="flex flex-col items-center justify-center mx-4"
              >
                <div className="w-16 h-16 mb-3 p-3 bg-[#dee0e1] dark:bg-[#222222] rounded-xl">
                  <Image
                    src={tech.icon}
                    alt={tech.name}
                    className={cn(
                      "w-full h-full object-contain",
                      tech.name === "Github" && "invert-100 dark:invert-0"
                    )}
                    width={16}
                    height={16}
                  />
                </div>
                <span className="text-sm font-satoshi text-gray-800 dark:text-gray-300">
                  {tech.name}
                </span>
              </div>
            ))}

            {/* Duplicate set for seamless loop */}
            {stack.map((tech, index) => (
              <div
                key={`tech-2-${index}`}
                className="flex flex-col items-center justify-center mx-4"
              >
                <div className="w-16 h-16 mb-3 p-3 bg-[#dee0e1] dark:bg-[#222222] rounded-xl">
                  <Image
                    src={tech.icon}
                    alt={tech.name}
                    className={cn(
                      "w-full h-full object-contain",
                      tech.name === "Github" && "invert-100 dark:invert-0"
                    )}
                    width={16}
                    height={16}
                  />
                </div>
                <span className="text-sm font-satoshi text-gray-800 dark:text-gray-300">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 font-pops"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            {/* Modal Content */}
            <motion.div
              className="relative bg-white dark:bg-[#141414] rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 w-full max-w-xs sm:max-w-2xl md:max-w-4xl lg:max-w-5xl max-h-[90vh] overflow-y-auto shadow-2xl border border-gray-300 dark:border-gray-400/10"
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 25,
                duration: 0.4,
              }}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-6 sm:mb-8">
                <motion.h2
                  className="text-xl sm:text-2xl md:text-2xl font-semibold text-gray-800 dark:text-gray-200"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  My Tech Stack
                </motion.h2>
                <div
                  onClick={() => setIsOpen(false)}
                  className="rounded-full hover:bg-gray-100 dark:hover:bg-neutral-800 text-gray-600 dark:text-gray-400 p-2 cursor-pointer"
                >
                  <X className="h-4 w-4 sm:h-5 sm:w-5" />
                </div>
              </div>

              {/* Tech Stack Grid */}
              <motion.div
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4 md:gap-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {stack.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    className="group cursor-pointer"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.05 * index,
                      type: "spring",
                      stiffness: 300,
                      damping: 20,
                    }}
                    whileHover={{ y: -8, scale: 1.05 }}
                  >
                    <div className="bg-gray-50 dark:bg-[#232323] rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 h-full transition-all duration-300 group-hover:shadow-lg group-hover:bg-white dark:group-hover:bg-neutral-500/10 border border-transparent group-hover:border-gray-200 dark:group-hover:border-gray-600 flex flex-col items-center text-center">
                      <Image
                        src={tech.icon}
                        alt="stack"
                        width={64}
                        height={64}
                        className={cn(
                          "w-8 h-8 md:w-12 md:h-12 mb-2 sm:mb-3 transition-transform duration-300 group-hover:scale-110",
                          tech.name === "Github" && "invert-100 dark:invert-0"
                        )}
                      />
                      <h3 className="font-small text-gray-800 dark:text-gray-200 text-xs sm:text-sm">
                        {tech.name}
                      </h3>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Stack;
