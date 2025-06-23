"use client";
import React, { useState } from "react";
import { Copy, Check } from "lucide-react";

const CopyEmail = () => {
  const [copy, setCopy] = useState(false);
  const copyEmail = async () => {
    setCopy(true);
    try {
      await navigator.clipboard.writeText("utsavdotdev@gmail.com");
    } catch (err) {
      console.error("Failed to read clipboard contents:", err);
    }
  };
  return (
    <>
      <span className="text-xl md:text-2xl font-pops text-gray-800 dark:text-gray-300">
        Have a project in mind?
      </span>
      <div
        className="rounded-xl font-pops w-full h-16 bg-[#232323] dark:bg-[#252525] flex items-center justify-center text-white text-md md:text-lg cursor-pointer transition-colors hover:bg-[#1f1f1f] dark:hover:bg-[#2a2a2a] gap-3 "
        onClick={() => copyEmail()}
      >
        {copy ? (
          <>
            <Check className="text-green-600" />
            <span className="text-green-600">Email Copied!</span>
          </>
        ) : (
          <>
            <Copy />
            Copy Email
          </>
        )}
      </div>
    </>
  );
};

export default CopyEmail;
