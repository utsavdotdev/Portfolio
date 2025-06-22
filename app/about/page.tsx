import React from "react";
import BentoBox from "@/components/BentoBox";
import Gallery from "@/components/Gallery";
import Close from "@/components/Close";

const page = () => {
  const images = [
    { src: "/gallery/1.jpg" },
    { src: "/gallery/2.jpg" },
    { src: "/gallery/3.jpg" },
    { src: "/gallery/4.jpg" },
    { src: "/gallery/5.jpg" },
  ];
  return (
    <>
      <div className="flex flex-col w-full min-h-screen 2xl:h-screen p-2 lg:p-4 bg-white dark:bg-neutral-950 transition-colors duration-300">
        <main className="relative w-full h-full border-2 rounded-4xl border-gray-300 dark:border-gray-300/20 p-2 bg-white dark:bg-neutral-950 transition-colors duration-300">
          <Close />
          <div className="grid grid-cols-1 lg:grid-cols-8 lg:grid-rows-6 gap-3 sm:gap-4 px-2 sm:px-6 md:px-12 lg:px-32 py-20 h-full overflow-auto">
            <BentoBox
              col="col-span-1 lg:col-start-1 lg:col-end-5 lg:row-start-1 lg:row-end-5"
              className=""
            ></BentoBox>
            <BentoBox
              col="col-span-1 lg:col-start-5 lg:col-end-9 lg:row-start-1 lg:row-end-4"
              className=""
            ></BentoBox>
            <BentoBox
              col="col-span-1 lg:col-start-1 lg:col-end-5 lg:row-start-5 lg:row-end-9"
              className=""
            ></BentoBox>
            <BentoBox
              col="col-span-1 lg:col-start-5 lg:col-end-9 lg:row-start-4 lg:row-end-7"
              className="flex items-center justify-center"
            >
              <Gallery pics={images} />
            </BentoBox>
            <BentoBox
              col="col-span-1 lg:col-start-5 lg:col-end-7 lg:row-start-7 lg:row-end-9"
              className=""
            ></BentoBox>
            <BentoBox
              col="col-span-1 lg:col-start-7 lg:col-end-9 lg:row-start-7 lg:row-end-9"
              className=""
            ></BentoBox>
          </div>
        </main>
      </div>
    </>
  );
};

export default page;
