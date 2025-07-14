import React from "react";
import ProjectBox from "@/components/ProjectBox";
import { projects } from "@/constants/data";
import Close from "@/components/Close";

const page = () => {
  return (
    <>
      <div className="flex flex-col w-full min-h-screen md:h-screen 2xl:h-screen p-2 lg:p-4 bg-white dark:bg-neutral-950 transition-colors duration-300 overflow-hidden">
        <main className="relative w-full h-full border-2 rounded-4xl border-gray-300 dark:border-gray-300/20 p-2 bg-white dark:bg-neutral-950 transition-colors duration-300">
          <Close />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 px-2 md:px-12 lg:px-32 pt-24 pb-2">
            {projects.map((project) => (
              <ProjectBox key={project.id} project={project} />
            ))}
          </div>
        </main>
      </div>
    </>
  );
};

export default page;
