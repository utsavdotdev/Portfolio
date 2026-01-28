import Close from "@/components/Close";
import ProjectShowcase from "@/components/ProjectShowcase";

const page = async ({ params }: ParamsWithSearch) => {
  const { id } = await params;
  // placeholder images — replace with real project images when wiring data
  const pics = [
    { src: "/gallery/1.jpg", alt: "slide 1" },
    { src: "/gallery/2.jpg", alt: "slide 2" },
    { src: "/gallery/3.jpg", alt: "slide 3" },
  ];

  return (
    <div className="flex flex-col w-full min-h-screen md:h-screen 2xl:h-screen p-2 lg:p-4 bg-white dark:bg-neutral-950 transition-colors duration-300">
      <main className="relative w-full border-2 rounded-4xl border-gray-300 dark:border-gray-300/20 p-2 bg-white dark:bg-neutral-950 transition-colors duration-300 pb-16">
        <Close />
        <div className="flex flex-col w-full mt-32 px-4 lg:px-16">
          <div className="flex flex-col gap-1">
            <h1 className="text-3xl font-medium">Project Title</h1>
            <span className="text-md text-gray-500 dark:text-neutral-500">
              Project Subtitle
            </span>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-10">
            <div className="lg:col-span-7 h-[500px] rounded-lg border border-red-400"></div>
            <div className="lg:col-span-3 h-[500px] rounded-lg border border-red-400"></div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default page;
