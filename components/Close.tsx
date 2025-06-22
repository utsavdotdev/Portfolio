"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { X } from "lucide-react";


const Close = () => {
  const router = useRouter();
  const handleClose = () => {
    router.back();
  };
  return (
    <>
      <div
        className="absolute top-4 right-6 w-14 h-14 rounded-full border-2 border-gray-300 dark:border-gray-300/20 flex justify-center items-center cursor-pointer hover:bg-gray-100 dark:hover:bg-neutral-900"
        onClick={handleClose}
      >
        <X
          width={30}
          height={30}
          className="text-gray-300 dark:text-gray-300/50"
        />
      </div>
    </>
  );
};

export default Close;
