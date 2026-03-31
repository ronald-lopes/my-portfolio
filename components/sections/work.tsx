"use client";

import { Title } from "@/components/section-title";
import { projects } from "@/config/projects";
import { Button } from "@heroui/react";
import { Project } from "../project-card";
import { ArrowUpRight } from "@phosphor-icons/react";

export const Work = () => {
  return (
    <section
      id="work"
      className="my-14 px-4 flex flex-col items-center align-top justify-start"
    >
      <Title title="Work" subtitle="My Projects and Experience" />
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
      <Button variant="primary" size="md" className="my-8 py-4 px-6">
        <ArrowUpRight size={16} weight="bold" className="mt-1" />
        See more
      </Button>
    </section>
  );
};
