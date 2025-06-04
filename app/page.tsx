import React from "react";
import BentoBox from "@/components/BentoBox";
import ThemeToggler from "@/components/ThemeToggler";
import Newsletter from "@/components/Newsletter";

export default function Home() {
  return (
    <div className="flex flex-col w-full min-h-screen p-2 lg:p-4 bg-white dark:bg-neutral-950 transition-colors duration-300">
      <main className="w-full h-full border-2 rounded-4xl border-gray-300 dark:border-gray-300/20 p-2 bg-white dark:bg-neutral-950 transition-colors duration-300">
        <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-13 gap-4 p-4 h-full place-content-center  transition-colors duration-300">
          <BentoBox col="col-span-4"></BentoBox>
          <BentoBox col="col-span-3"></BentoBox>
          <BentoBox col="col-span-3"></BentoBox>

          {/* Social Media Box with Theme Switcher */}
          <BentoBox col="col-span-3" border={false} className="pl-2">
            <div className="flex flex-col gap-4">
              <div className="flex gap-8">
                <div className="h-18 w-18 box rounded-3xl"></div>
                <div className="h-18 w-18 box rounded-3xl"></div>
                <div className="h-18 w-18 box rounded-3xl"></div>
              </div>
              <div className="flex gap-8">
                <div className="h-18 w-18 box rounded-3xl"></div>
                <div className="h-18 w-18 box rounded-3xl"></div>
                <div className="h-18 w-18 box rounded-3xl"></div>
              </div>
              <ThemeToggler />
            </div>
          </BentoBox>

          <BentoBox col="col-span-3"></BentoBox>
          <BentoBox col="col-span-4"></BentoBox>
          <BentoBox col="col-span-3"></BentoBox>
          <BentoBox col="col-span-3"></BentoBox>

          <BentoBox col="col-span-7">
            <Newsletter/>
          </BentoBox>
          <BentoBox col="col-span-3"></BentoBox>
          <BentoBox col="col-span-3"></BentoBox>
        </div>
      </main>
    </div>
  );
}
