"use client";
import React, { useState } from "react";
import BentoBox from "@/components/BentoBox";
import ThemeToggler from "@/components/ThemeToggler";
import Newsletter from "@/components/Newsletter";
import LinkButton from "@/components/LinkButton";
import { socialMedia, stack } from "@/constants/data";
import { Copy, Check } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import PixelTransition from "@/components/PixelTransition";
import ProjectCard from "@/components/ProjectCard";
import Spark from "@/components/Spark";

export default function Home() {
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
    <div className="flex flex-col w-full min-h-screen 2xl:h-screen p-2 lg:p-4 bg-white dark:bg-neutral-950 transition-colors duration-300">
      {/* <CustomCursor /> */}
      <main className="w-full h-full border-2 rounded-4xl border-gray-300 dark:border-gray-300/20 p-2 bg-white dark:bg-neutral-950 transition-colors duration-300">
        <div className="grid grid-cols-8 lg:grid-cols-13 gap-4 p-2 md:p-4 h-full transition-colors duration-300">
          <BentoBox
            col="col-span-8 lg:col-span-4"
            className="order-1 lg:order-none"
          >
            <div className="h-full py-8 px-8 font-pops flex flex-col justify-center text-gray-800 dark:text-gray-300 gap-4">
              <h3 className="text-2xl md:text-3xl font-medium">
                Hi I&apos;m Utsav,
              </h3>
              <span className="text-md md:text-xl text-gray-500 dark:text-neutral-500">
                A Next.js Developer, Student, and Open-Source Contributor
              </span>
            </div>
          </BentoBox>
          <BentoBox
            col="col-span-full md:col-span-4 lg:col-span-3"
            className="order-3 lg:order-none h-[200px] relative group"
          >
            <ProjectCard
              title="Project 1"
              imageSrc="/p1.webp"
              link="/project/project-1"
            />
          </BentoBox>
          <BentoBox
            col="col-span-full md:col-span-4 lg:col-span-3"
            className="order-3 lg:order-none h-[200px] relative group"
          >
            {" "}
            <ProjectCard
              title="Project 2"
              imageSrc="/p2.webp"
              link="/project/project-2"
            />
          </BentoBox>

          {/* Social Media Box with Theme Switcher */}
          <BentoBox
            col="col-span-full md:col-span-8 lg:col-span-3"
            border={false}
            className="pl-2 order-last lg:order-none"
          >
            <div className="flex flex-col gap-4">
              <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-3 gap-4 h-full">
                {socialMedia.map((social) => (
                  <Link
                    href={social.url}
                    key={social.name}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div
                      className={`h-[64px] md:h-[86px] lg:h-[72px] row-span-1 w-full min-w-full min-h-full box rounded-3xl flex items-center justify-center cursor-pointer transition-all duration-300 group hover:bg-gray-100 dark:hover:bg-neutral-900`}
                    >
                      <social.icon className="h-6 w-6 text-gray-700 dark:text-gray-200 transition-colors" />
                    </div>
                  </Link>
                ))}
              </div>
              <ThemeToggler />
            </div>
          </BentoBox>

          <BentoBox
            col="col-span-3"
            className="hidden md:block order-2 lg:order-none"
          >
            <PixelTransition
              firstContent={
                <Image
                  src="/profile.png"
                  alt="profile"
                  width={500}
                  height={500}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              }
              secondContent={
                <Image
                  width={256}
                  height={256}
                  src="/profile-pixel.png"
                  alt="pixel profile"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                    backgroundColor: "#f2e7bc",
                  }}
                />
              }
              gridSize={20}
              pixelColor="#f2e7bc"
              animationStepDuration={0.4}
              className="border-none"
            />
          </BentoBox>
          <BentoBox
            col="col-span-full md:col-span-5 lg:col-span-5"
            className="order-2 lg:order-none"
          >
            <Spark>
              <div className="h-full py-6 px-8 font-pops flex flex-col text-gray-800 dark:text-gray-300 gap-4 cursor-pointer hover:bg-gray-100 dark:hover:bg-neutral-900 group">
                <span className="text-xl text-gray-500 dark:text-neutral-500">
                  About
                </span>
                <h3 className="text-xl md:text-2xl font-small mt-2">
                  Enjoy Crafting solutions and solving problems.
                </h3>
                <LinkButton />
              </div>
            </Spark>  
          </BentoBox>
          <BentoBox
            col="col-span-full md:col-span-5 lg:col-span-3"
            className="order-4 lg:order-none h-[200px] relative group"
          >
            <ProjectCard
              title="Project 3"
              imageSrc="/p3.webp"
              link="/project/project-3"
            />
          </BentoBox>
          <BentoBox
            col="col-span-full md:col-span-3 lg:col-span-2"
            border={false}
            className="gap-4 order-4 lg:order-none"
          >
            <div className="relative box h-1/3 flex rounded-2xl hover:bg-gray-100 dark:hover:bg-neutral-900 group items-center justify-center py-1 cursor-pointer">
              <span className="font-pops text-[20px] text-gray-800 dark:text-gray-300">
                Projects
              </span>
              <LinkButton className=" scale-70" />
            </div>
            <div className="relative box h-1/3 flex rounded-2xl hover:bg-gray-100 dark:hover:bg-neutral-900 group gap-1 items-center justify-center text-center py-1 cursor-pointer">
              <span className="font-pops text-[20px] text-gray-800 dark:text-gray-300 tracking-wide max-[1180px]:text-[18px]">
                Blogs
              </span>
              <LinkButton className="scale-70" />
            </div>
            <Link
              href={"/resume.pdf"}
              download={true}
              className="relative box h-1/3 flex rounded-2xl hover:bg-gray-100 dark:hover:bg-neutral-900 group gap-1 items-center justify-center py-1"
            >
              <span className="font-pops max-[1180px]:text-[18px] text-[20px] text-gray-800 dark:text-gray-300 tracking-wide">
                Resume
              </span>
              <LinkButton className="scale-70" />
            </Link>
          </BentoBox>

          <BentoBox
            col="col-span-full md:col-span-8 lg:col-span-7"
            className="order-5 lg:order-none"
          >
            <Newsletter />
          </BentoBox>
          <BentoBox
            col="col-span-full md:col-span-5 lg:col-span-3"
            className="p-6 gap-4 order-5 lg:order-none"
          >
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
                        className="w-full h-full object-contain"
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
                        className="w-full h-full object-contain"
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
          </BentoBox>
          <BentoBox
            col="col-span-full md:col-span-3"
            className="px-6 py-8 gap-6 order-5 lg:order-none"
          >
            <span className="text-xl md:text-2xl font-pops text-gray-800 dark:text-gray-300">
              Have project in mind?
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
          </BentoBox>
        </div>
      </main>
    </div>
  );
}
