import React from "react";
import BentoBox from "@/components/BentoBox";
import ThemeToggler from "@/components/ThemeToggler";

export default function Home() {
  return (
    <div className="flex flex-col w-full h-screen p-2 lg:p-4 overflow-hidden bg-[#fff] dark:bg-neutral-950">
      <main className="w-full h-full border-2 rounded-4xl border-gray-300 dark:border-gray-300/20 overflow-hidden p-2 bg-[#fffff] dark:bg-neutral-950">
        <div className="grid grid-cols-13 gap-4 p-4 bg-black h-full place-content-center ">
          <BentoBox col="col-span-4"></BentoBox>
          <BentoBox col="col-span-3"></BentoBox>
          <BentoBox col="col-span-3"></BentoBox>

          {/* Social Media Box with Theme Switcher */}
          <BentoBox col="col-span-3" border={false} className="pl-2">
            <div className="flex flex-col gap-4">
              <div className="flex gap-8">
                <div className="h-18 w-18 rounded-3xl border border-gray-400/10 bg-white dark:bg-[#141414]"></div>
                <div className="h-18 w-18 rounded-3xl border border-gray-400/10 bg-white dark:bg-[#141414]"></div>
                <div className="h-18 w-18 rounded-3xl border border-gray-400/10 bg-white dark:bg-[#141414]"></div>
              </div>
              <div className="flex gap-8">
                <div className="h-18 w-18 rounded-3xl border border-gray-400/10 bg-white dark:bg-[#141414]"></div>
                <div className="h-18 w-18 rounded-3xl border border-gray-400/10 bg-white dark:bg-[#141414]"></div>
                <div className="h-18 w-18 rounded-3xl border border-gray-400/10 bg-white dark:bg-[#141414]"></div>
              </div>
              <ThemeToggler />
            </div>
          </BentoBox>

          <BentoBox col="col-span-3"></BentoBox>
          <BentoBox col="col-span-4"></BentoBox>
          <BentoBox col="col-span-3"></BentoBox>
          <BentoBox col="col-span-3"></BentoBox>

          <BentoBox col="col-span-6"></BentoBox>
          <BentoBox col="col-span-4"></BentoBox>
          <BentoBox col="col-span-3"></BentoBox>
        </div>
      </main>
    </div>
  );
}
