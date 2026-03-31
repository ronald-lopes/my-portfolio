"use client";

import { Button } from "@heroui/react";

export function Hero() {
  return (
    <section
      className="h-[calc(95vh-56px)] 2xl:max-h-[850px] 2xl:min-h-[500px] lg:max-h-[700px] lg:min-h-[500px] 
    mt-14 px-4 flex flex-col items-center justify-center"
    >
      <span className="text-md text-center font-light text-gray-700 dark:text-gray-300 sm:text-lg">
        Product Designer and Front-end Developer
      </span>
      <h2 className="max-w-xs sm:max-w-md md:max-w-xl lg:max-w-2xl text-center text-4xl sm:text-5xl md:text-6xl font-semibold text-gray-900 dark:text-gray-100">
        {`I'm passionate about
        crafting experiences
        that resonate with users`}
      </h2>
      <Button
        className="mt-8 px-6"
        variant="primary"
        size="lg"
        onPress={() => (window.location.hash = "#work")}
      >
        Check out my work
      </Button>
    </section>
  );
}
