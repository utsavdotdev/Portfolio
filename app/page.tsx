import React from "react";
import BentoBox from "@/components/BentoBox";
import ThemeToggler from "@/components/ThemeToggler";
import Newsletter from "@/components/Newsletter";
import { MousePointer2 } from "lucide-react";
import CustomCursor from "@/components/CustomCursor";

export default function Home() {
  return (
    <div className="flex flex-col w-full min-h-screen p-2 lg:p-4 bg-white dark:bg-neutral-950 transition-colors duration-300">
      <CustomCursor/>
      <main className="w-full h-full border-2 rounded-4xl border-gray-300 dark:border-gray-300/20 p-2 bg-white dark:bg-neutral-950 transition-colors duration-300">
        <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-13 gap-4 p-4 h-full place-content-center  transition-colors duration-300">
          <BentoBox col="col-span-4">
            <div className="h-full py-8 px-8 font-pops flex flex-col justify-center text-gray-800 dark:text-gray-300 gap-4">
              <h3 className="text-3xl font-medium">Hi I'm Utsav ---</h3>
              <span className="text-xl text-gray-500 dark:text-neutral-500">
                A Next.js Developer, Student, and Open-Source Contributor
              </span>
            </div>
          </BentoBox>
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
          <BentoBox col="col-span-5">
            <div className="h-full py-6 px-8 font-pops flex flex-col text-gray-800 dark:text-gray-300 gap-4 cursor-pointer hover:bg-gray-100 dark:hover:bg-neutral-800 group">
              <span className="text-xl text-gray-500 dark:text-neutral-500">
                About
              </span>
              <h3 className="text-[22px] font-small mt-2">
                Enjoy Crafting solutions and solving problems.
              </h3>
              <div className="flex flex-col">
                <div className="w-12 h-12 flex justify-center align-center self-end rounded-full border-2 border-[#626262] transition-all duration-300 overflow-hidden relative">
                  {/* Arrow coming FROM bottom on hover */}
                  <MousePointer2
                    className="rotate-90 w-6 h-6 absolute transition-all duration-500 
                    translate-x-[-30px] translate-y-[30px] opacity-0
                    group-hover:translate-x-[0px] group-hover:translate-y-[10px] 
                    group-hover:opacity-100"
                  />

                  {/* Arrow going TO top on hover */}
                  <MousePointer2
                    className="rotate-90 w-6 h-6 absolute transition-all duration-500 
                    translate-x-[0px] translate-y-[10px] opacity-100
                    group-hover:translate-x-[30px] group-hover:translate-y-[-30px] 
                    group-hover:opacity-0"
                  />
                </div>
              </div>
            </div>
          </BentoBox>
          <BentoBox col="col-span-3"></BentoBox>
          <BentoBox col="col-span-2"></BentoBox>

          <BentoBox col="col-span-7">
            <Newsletter />
          </BentoBox>
          <BentoBox col="col-span-3"></BentoBox>
          <BentoBox col="col-span-3"></BentoBox>
        </div>
      </main>
    </div>
  );
}
