import React from "react";
import BentoBox from "@/components/BentoBox";

export default function Home() {
  return (
    <div className="flex flex-col w-full h-screen p-2 lg:p-4 overflow-hidden bg-white dark:bg-neutral-950">
      <main className="w-full h-full border-2 rounded-4xl border-gray-300 dark:border-gray-300/20 overflow-hidden p-4">
        <div className="grid h-full grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid-rows-[repeat(3,minmax(0,1fr))] gap-4">
          <BentoBox colSpan="col-span-2">Box 1</BentoBox>
          <BentoBox>Box 2</BentoBox>
          <BentoBox>Box 3</BentoBox>
          <BentoBox>Box 4</BentoBox>
          <BentoBox colSpan="col-span-">Box 5</BentoBox>
          <BentoBox>Box 6</BentoBox>
          <BentoBox>Box 7</BentoBox>
          <BentoBox>Box 8</BentoBox>
          <BentoBox colSpan="col-span-2">Box 9</BentoBox>
          <BentoBox>Box 10</BentoBox>
        </div>
      </main>
    </div>
  );
}
