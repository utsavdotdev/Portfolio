"use client"
import React from "react";
import BentoBox from "@/components/BentoBox";
import ThemeToggler from "@/components/ThemeToggler";
import Newsletter from "@/components/Newsletter";
import LinkButton from "@/components/LinkButton";
import { socialMedia } from "@/constants/data";
import Link from "next/link";
import Image from "next/image";
import PixelTransition from "@/components/PixelTransition";
import ProjectCard from "@/components/ProjectCard";
import CopyEmail from "@/components/CopyEmail";
import Stack from "@/components/Stack";

export default function Home() {
  return (
    <div className="flex flex-col w-full min-h-screen md:h-screen 2xl:h-screen p-2 lg:p-4 bg-white dark:bg-neutral-950 transition-colors duration-300">
      <main className="w-full h-full border-2 rounded-4xl border-gray-300 dark:border-gray-300/20 p-2 bg-white dark:bg-neutral-950 transition-colors duration-300">
        <div className="grid grid-cols-8 lg:grid-cols-13 gap-4 p-2 md:p-4 h-full">
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
            className="hidden md:block order-2 lg:order-none cursor-pointer"
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
            <Link
              href="/about"
              className="h-full py-6 px-8 font-pops flex flex-col text-gray-800 dark:text-gray-300 gap-4 cursor-pointer hover:bg-gray-100 dark:hover:bg-neutral-900 group"
            >
              <span className="text-xl text-gray-500 dark:text-neutral-500">
                About
              </span>
              <h3 className="text-xl md:text-2xl font-small mt-2">
                Enjoy Crafting solutions and solving problems.
              </h3>
              <LinkButton />
            </Link>
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
            <Link href={"/project"} className="relative box h-1/3 flex rounded-2xl hover:bg-gray-100 dark:hover:bg-neutral-900 group items-center justify-center py-1 cursor-pointer">
              <span className="font-pops text-[20px] text-gray-800 dark:text-gray-300">
                Projects
              </span>
              <LinkButton className=" scale-70" />
            </Link>
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
            className="order-5 lg:order-none"
          >
            <Stack  />
          </BentoBox>
          <BentoBox
            col="col-span-full md:col-span-3"
            className="px-6 py-8 gap-6 order-5 lg:order-none"
          >
            <CopyEmail />
          </BentoBox>
        </div>
      </main>
    </div>
  );
}
