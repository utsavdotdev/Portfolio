import Image from "next/image";
import Link from "next/link";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";

interface ProjectCardProps {
  title: string;
  imageSrc: string;
  link: string;
}

const ProjectCard = ({
  title,
  imageSrc,
  link,
}: ProjectCardProps) => {
  return (
    <Link href={link}>
      {/* Project Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* Gradient Overlay - Appears on Hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

      {/* Project Info - Slides up on Hover */}
      <div className="absolute bottom-0 w-full translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out p-4">
        <div className="flex justify-between items-center">
          <h3 className="text-white font-medium font-pops text-xl tracking-wide">
            {title}
          </h3>
          <div className="p-2 transform rotate-0 group-hover:rotate-45 transition-transform duration-300">
            <ArrowUpRightIcon className="w-6 h-6 text-black dark:text-white font-bold stroke-2"/>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
