"use client";

import { ContactForm } from "../contact-form";
import { Title } from "../section-title";
import {
  EnvelopeSimpleIcon,
  LinkedinLogoIcon,
  DribbbleLogoIcon,
  GithubLogoIcon,
} from "@phosphor-icons/react";
import { Link } from "@heroui/react";
import { buttonVariants } from "@heroui/styles";

export const Contact = () => {
  return (
    <section
      id="get-in-touch"
      className="mb-8 flex flex-col items-center justify-center px-4"
    >
      <Title title="Get in touch" subtitle="What’s Next?" />
      <ContactForm />
      <div className="mt-8 flex flex-row gap-4">
        <Link
          className={
            buttonVariants({ variant: "ghost", size: "md" }) + " aspect-square"
          }
          aria-label="Email"
          href="mailto:me@ronaldlopes.design"
        >
          <EnvelopeSimpleIcon weight="bold" size={24} />
        </Link>
        <Link
          className={
            buttonVariants({ variant: "ghost", size: "md" }) + " aspect-square"
          }
          aria-label="LinkedIn"
          href="https://www.linkedin.com/in/ronald-lopes/"
        >
          <LinkedinLogoIcon weight="bold" size={24} />
        </Link>
        <Link
          className={
            buttonVariants({ variant: "ghost", size: "md" }) + " aspect-square"
          }
          aria-label="Dribbble"
          href="https://dribbble.com/ronaldlopes"
        >
          <DribbbleLogoIcon weight="bold" size={24} />
        </Link>
        <Link
          className={
            buttonVariants({ variant: "ghost", size: "md" }) + " aspect-square"
          }
          aria-label="GitHub"
          href="https://github.com/ronald-lopes"
        >
          <GithubLogoIcon weight="bold" size={24} />
        </Link>
      </div>
    </section>
  );
};
