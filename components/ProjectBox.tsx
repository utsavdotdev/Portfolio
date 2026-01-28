import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProjectBox = ({ project }: ProjectBoxProps) => {
  return (
    <>
      <Link
        key={project.id}
        href={project.link}
        className={"box group block rounded-3xl overflow-hidden"}
      >
        <div className="p-6">
            <div className="w-full rounded-xl overflow-hidden shadow-inner mb-5">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={1200}
                height={700}
                className="w-full h-56 sm:h-48 md:h-86 object-cover transition-transform duration-300 group-hover:scale-105"
              />
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

            <span className="ml-4 inline-flex items-center px-4 py-2 md:py-2 rounded-full text-sm md:text-xm font-small bg-neutral-100 text-neutral-800 dark:bg-neutral-800 dark:text-neutral-400">
              {project.label}
            </span>
          </div>
        </div>
      </Link>
    </>
  );
};

export default ProjectBox;
