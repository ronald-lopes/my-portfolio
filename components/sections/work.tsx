"use client";

import { Title } from "@/components/section-title";
import { projects } from "@/config/projects";
import { Link } from "@heroui/react";
import { buttonVariants } from "@heroui/styles";
import { Project } from "../project-card";
import { ArrowUpRightIcon } from "@phosphor-icons/react";

export const Work = () => {
  return (
    <section
      id="work"
      className="my-14 px-4 flex flex-col items-center align-top justify-start"
    >
      <Title title="My Projects and Experience" subtitle="Work" />
      <div className="flex w-full flex-col sm:flex-wrap sm:flex-row max-w-5xl justify-between">
        {projects.map((item, index) => (
          <Project
            key={index}
            title={item.title}
            category={item.category}
            href={item.href}
            description={item.description}
            image={item.image}
            // isLoading={item.isLoading}
          >
            {/* Add Custom elements to the card
            
            {index === 3 && (
            <>
              
            </>
            )}

            */}
          </Project>
        ))}
      </div>
      <Link
        className={
          buttonVariants({ variant: "primary", size: "md" }) +
          " my-8 py-4 px-6 gap-2"
        }
        href="/projects"
        aria-label="View projects"
      >
        <ArrowUpRightIcon size={16} weight="bold" className="mt-1" />
        See more
      </Link>
    </section>
  );
};
