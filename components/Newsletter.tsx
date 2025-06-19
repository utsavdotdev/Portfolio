"use client";
import React from "react";
import InputBox from "@/components/InputBox";
const Newsletter = () => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
  };
  return (
    <div className="w-full h-full py-8 px-8 font-nun flex items-center text-gray-800 dark:text-gray-200">
      <div className="w-full flex flex-col gap-2 font-pops">
        <h3 className="text-xl md:text-2xl mb-4">
          Get interesting content straight to your inbox for free!
        </h3>

        <InputBox
          placeholders="Your Email Address"
          onChange={handleChange}
          onSubmit={onSubmit}
        />
      </div>
    </div>
  );
};

export default Newsletter;
