"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
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
  }, []);
  return (
    <>
      <div className="absolute top-4 right-6 flex flex-col items-center gap-1">
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
        <span className="font-pops text-sm text-gray-300 dark:text-gray-300/30 font-medium">
          ESC
        </span>
      </div>
    </>
  );
};

export default Close;
