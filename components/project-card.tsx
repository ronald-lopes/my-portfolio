import { Button } from "@heroui/react";
import Image from "next/image";

interface ProjectProps {
  title: string;
  category: string;
  description: string;
  href: string;
  children?: React.ReactNode;
  image?: string;
  className?: string;
  isLoading?: boolean;
}

export function Project(
  props: ProjectProps,
  // children: React.ReactNode,
) {
  return (
    <div className="flex flex-col sm:max-w-[48%] justify-between items-start my-6">
      <div className="w-full">
        {props.children}
        {props.image && (
          <Image
            src={props.image}
            alt={props.title}
            width={1080}
            height={1080}
            className="aspect-16/8 w-full max-w-full object-cover rounded-3xl"
          />
        )}
      </div>
      <div className="flex flex-col justify-between h-full w-full mt-4">
        <div>
          <span className="text-sm font-medium text-muted">
            {props.category}
          </span>
          <h3 className="text-2xl font-semibold text-foreground">
            {props.title}
          </h3>
          <p className="text-base text-muted-foreground">{props.description}</p>
        </div>
        <Button
          variant="secondary"
          onPress={() => (window.location.href = props.href)}
          size="md"
          className="mt-4 bg-accent-soft"
        >
          View Project
        </Button>
      </div>
    </div>
  );
}
