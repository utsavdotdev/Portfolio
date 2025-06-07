import React from "react";
import BentoBox from "@/components/BentoBox";
import ThemeToggler from "@/components/ThemeToggler";
import Newsletter from "@/components/Newsletter";
import CustomCursor from "@/components/CustomCursor";
import LinkButton from "@/components/LinkButton";
import { socialMedia } from "@/constants/data";
import Link from "next/link";
import { hover } from "framer-motion";

export default function Home() {
  return (
    <div className="flex flex-col w-full min-h-screen p-2 lg:p-4 bg-white dark:bg-neutral-950 transition-colors duration-300">
      <CustomCursor />
      <main className="w-full h-full border-2 rounded-4xl border-gray-300 dark:border-gray-300/20 p-2 bg-white dark:bg-neutral-950 transition-colors duration-300">
        <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-13 gap-4 p-4 h-full place-content-center  transition-colors duration-300">
          <BentoBox col="col-span-4">
            <div className="h-full py-8 px-8 font-pops flex flex-col justify-center text-gray-800 dark:text-gray-300 gap-4">
              <h3 className="text-3xl font-medium">Hi I&apos;m Utsav,</h3>
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
                {socialMedia.slice(0, 3).map((social) => (
                  <Link
                    href={social.url}
                    key={social.name}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div
                      className={`h-18 w-18 box rounded-3xl flex items-center justify-center cursor-pointer transition-all duration-300 group hover:bg-gray-100 dark:hover:bg-neutral-900`}
                    >
                      <social.icon className="h-6 w-6 text-gray-700 dark:text-gray-200 transition-colors" />
                    </div>
                  </Link>
                ))}
              </div>
              <div className="flex gap-8">
                {socialMedia.slice(3).map((social) => (
                  <Link
                    href={social.url}
                    key={social.name}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="h-18 w-18 box rounded-3xl flex items-center justify-center cursor-pointer transition-all duration-300 group hover:bg-gray-100 dark:hover:bg-neutral-900">
                      <social.icon className="h-6 w-6 text-gray-700 dark:text-gray-200 transition-colors" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </BentoBox>

          <BentoBox col="col-span-3"></BentoBox>
          <BentoBox col="col-span-5">
            <div className="h-full py-6 px-8 font-pops flex flex-col text-gray-800 dark:text-gray-300 gap-4 cursor-pointer hover:bg-gray-100 dark:hover:bg-neutral-900 group">
              <span className="text-xl text-gray-500 dark:text-neutral-500">
                About
              </span>
              <h3 className="text-[22px] font-small mt-2">
                Enjoy Crafting solutions and solving problems.
              </h3>
              <LinkButton />
            </div>
          </BentoBox>
          <BentoBox col="col-span-3"></BentoBox>
          <BentoBox col="col-span-2" border={false} className="gap-4 py-1">
            <div className="relative box h-1/3 flex rounded-2xl hover:bg-gray-100 dark:hover:bg-neutral-900 group gap-2 items-center justify-center">
              <span className="font-pops text-[22px] text-gray-800 dark:text-gray-300 tracking-wide">
                Projects
              </span>
              <LinkButton className="scale-70" />
            </div>
            <div className="relative box h-1/3 flex rounded-2xl hover:bg-gray-100 dark:hover:bg-neutral-900 group gap-2 items-center justify-center">
              <span className="font-pops text-[22px] text-gray-800 dark:text-gray-300 tracking-wide">
                Blogs
              </span>
              <LinkButton className="scale-70" />
            </div>
            <ThemeToggler />
          </BentoBox>

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
