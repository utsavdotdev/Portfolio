"use client";

import React, { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const handleSubmit = () => {};

  return (
    <div className="w-full h-full py-8 px-8 font-nun flex items-center text-gray-800 dark:text-gray-200">
      <div className="w-full flex flex-col gap-2 font-pops">
        <h3 className="text-xl md:text-2xl mb-4">
          Get interesting content straight to your inbox for free!
        </h3>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-4"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            required
            className="flex-1 px-6 py-4 rounded-2xl bg-transparent border border-gray-400/20 focus:outline-none focus:ring-2 focus:ring-[#626262] placeholder:text-gray-400 text-lg"
          />
          <button
            type="submit"
            className="px-8 py-4 bg-[#232323] dark:bg-[#252525] text-white font-medium rounded-2xl transition-colors"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
