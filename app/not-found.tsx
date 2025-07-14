import FuzzyText from "@/components/FuzzyText";
import React from "react";
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <div className="flex flex-col w-full min-h-screen 2xl:h-screen bg-white dark:bg-neutral-950 justify-center items-center ">
        <FuzzyText
          baseIntensity={0.2}
          enableHover={true}
          fontFamily="Poppins"
          fontSize={"clamp(2rem, 4vw, 6rem)"}
        >
          404 Page Not found
        </FuzzyText>
        <Link
          href="/"
          className="mt-8 px-6 py-2 rounded bg-neutral-800 dark:bg-neutral-900 bg-neutral-200 text-white dark:text-white text-neutral-900 hover:bg-neutral-700 dark:hover:bg-neutral-800 hover:bg-neutral-300 transition font-pops"
        >
          Back to Home
        </Link>
      </div>
    </>
  );
}
