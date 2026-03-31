import { Button, Link } from "@heroui/react";

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
      <Link href="#work" className="no-underline! my-8">
        <Button
          className="px-6 focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0"
          variant="primary"
          size="lg"
        >
          Check out my work
        </Button>
      </Link>
    </section>
  );
}
