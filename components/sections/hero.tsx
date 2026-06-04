"use client";

import { Link } from "@heroui/react";
import { buttonVariants } from "@heroui/styles";
import { Ripple } from "m3-ripple";
import "m3-ripple/ripple.css";

export function Hero() {
  return (
    <section
      className="h-[calc(95vh-56px)] 2xl:max-h-212.5 2xl:min-h-125 lg:max-h-175 lg:min-h-125 
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
      <Link
        className={
          buttonVariants({ variant: "primary", size: "lg" }) + " mt-8 px-6"
        }
        href="#work"
        aria-label="View works"
      >
        Check out my work
        <Ripple />
      </Link>
    </section>
  );
}
