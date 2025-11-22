import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProjectBox = ({ project }: ProjectBoxProps) => {
  return (
    <>
      <Link
        key={project.id}
        href={project.link}
        className={
          "group block rounded-3xl overflow-hidden bg-gradient-to-br " +
          "from-white to-neutral-50 dark:from-neutral-900 dark:to-neutral-800 " +
          "border border-neutral-200 dark:border-neutral-700 " +
          "hover:shadow-2xl transition-shadow duration-300"
        }
      >
        <div className="p-6">
          <div className="mb-5 rounded-2xl bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 p-6 flex items-center justify-center">
            <div className="w-full rounded-xl overflow-hidden shadow-inner">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={1200}
                height={700}
                className="w-full h-56 sm:h-48 md:h-56 object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </div>

          <div className="flex items-start justify-between gap-4">
            <div className="flex-1 min-w-0">
              <h3 className="text-lg sm:text-xl font-semibold text-neutral-900 dark:text-gray-100 line-clamp-1">
                {project.title}
              </h3>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400 line-clamp-2">
                {project.subtitle}
              </p>
            </div>

            <span className="ml-4 inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-neutral-100 text-neutral-800 border border-neutral-200 dark:bg-neutral-700 dark:text-neutral-100 dark:border-neutral-700">
              {project.label}
            </span>
          </div>
        </div>
      </Link>
    </>
  );
};

export default ProjectBox;
