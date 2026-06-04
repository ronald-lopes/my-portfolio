"use client";

import { siteConfig } from "@/config/site";
import Image from "next/image";
import { Link } from "@heroui/react";
import { buttonVariants } from "@heroui/styles";
import { Ripple } from "m3-ripple";
import "m3-ripple/ripple.css";
import { ThemeSwitcher } from "./theme-switcher";

export const Header = () => {
  return (
    <header
      className="
      fixed z-50 flex w-screen flex-row items-center justify-center 
      bg-background/80 px-8 py-2 backdrop-blur-md md:py-3"
    >
      <div className="flex w-full max-w-5xl justify-between items-center">
        <Link href="/" className="flex items-center gap-2 no-underline">
          <Image src="/icons/logo.svg" width={32} height={32} alt="logo" />
          <p className="font-bold text-inherit">Ronald Lopes</p>
        </Link>

        <div className="flex">
          <ul className="items-center justify-between">
            <div className="flex items-center gap-1">
              <div className="hidden sm:flex">
                {siteConfig.navItems.map((item, index) => (
                  <Link
                    className={buttonVariants({ variant: "ghost" })}
                    href={item.href}
                    rel="noopener noreferrer"
                    key={index}
                    aria-label={item.label}
                  >
                    {item.label}
                    <Ripple />
                  </Link>
                ))}
                <Link
                  className={
                    buttonVariants({ variant: "secondary" }) +
                    " border-2 border-transparent bg-accent-soft hover:border-2 hover:border-accent box-border ease-in-out transition-all duration-500"
                  }
                  href="#get-in-touch"
                  aria-label="Get in touch"
                >
                  Get in touch
                  <Ripple />
                </Link>
              </div>
              <ThemeSwitcher />
            </div>
          </ul>
        </div>
      </div>
    </header>
  );
};
