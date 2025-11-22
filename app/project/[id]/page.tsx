import Close from "@/components/Close";

const page = async ({ params }: ParamsWithSearch) => {
  const { id } = await params;
  return (
    <>
      <div className="flex flex-col w-full min-h-screen 2xl:h-screen p-2 lg:p-4 bg-white dark:bg-neutral-950 transition-colors duration-300 overflow-hidden">
        <main className="relative w-full h-full border-2 rounded-4xl border-gray-300 dark:border-gray-300/20 p-2 bg-white dark:bg-neutral-950 transition-colors duration-300">
          <Close />
          <div className="flex flex-col gap-3 md:px-32 pt-24 pb-2 h-full md:pb-8 font-pops">
            <header className="flex flex-col gap-1 mb-6">
              <h2 className="text-3xl font-medium">Project title</h2>
              <p className="text-gray-600 dark:text-neutral-500 text-lg">
                Project Subtitle
              </p>
            </header>

            <div className="flex flex-col gap-4 w-full h-132">
              <div className="border-2 rounded-2xl h-1/2 box"></div>
              <div className="border-2 rounded-2xl h-1/2 box"></div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default page;
