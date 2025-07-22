import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProjectBox = ({ project }: ProjectBoxProps) => {
  return (
    <>
      <Link
        key={project.id}
        className="group overflow-hidden rounded-lg border border-gray-200 dark:border-neutral-800 hover:border-gray-300 dark:hover:border-neutral-700 transition-all duration-300 hover:shadow-lg dark:hover:shadow-2xl cursor-pointer bg-white dark:bg-[#141414] max-w-md font-pops"
        href={project.link}
      >
        <div className="p-4">
          <div className="mb-4">
            <div className="aspect-video bg-gradient-to-br from-slate-100 to-slate-200 dark:from-gray-800 dark:to-gray-700 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
              <Image
                width={500}
                height={300}
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between gap-2">
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-gray-100 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors line-clamp-1 flex-1">
                {project.title}
              </h3>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 dark:bg-neutral-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-neutral-700 border border-gray-200 dark:border-gray-600 flex-shrink-0">
                {project.label}
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm leading-relaxed line-clamp-2">
              {project.subtitle}
            </p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default ProjectBox;
