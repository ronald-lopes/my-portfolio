import { Link } from "@heroui/react";
import { buttonVariants } from "@heroui/styles";
import { ArrowRightIcon } from "@phosphor-icons/react";
import Image from "next/image";
import { Ripple } from "m3-ripple";
import "m3-ripple/ripple.css";

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

export function Project(props: ProjectProps) {
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
          <p className="text-base text-muted-foreground mt-2 mb-4">
            {props.description}
          </p>
        </div>
        <Link
          className={
            buttonVariants({ variant: "secondary", size: "md" }) +
            " mt-4 bg-accent-soft border-2 border-transparent hover:border-2 hover:border-accent ease-in-out transition-all duration-500 group"
          }
          href={props.href}
        >
          View Project
          <ArrowRightIcon
            size={24}
            weight="bold"
            className="ml-2 group-hover:translate-x-1 ease-in-out transition-all group-hover:ease-in-out group-hover:duration-600"
          />
          <Ripple />
        </Link>
      </div>
    </div>
  );
}
