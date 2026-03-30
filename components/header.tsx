"use client";

import { siteConfig } from "@/config/site";
import Image from "next/image";
import { Button } from "@heroui/react";
import Link from "next/link";
import { Ripple } from "m3-ripple";
import "m3-ripple/ripple.css";

export const Header = () => {
  return (
    <header
      className="
      fixed z-50 flex w-screen flex-row items-center justify-center 
      bg-white bg-opacity-80 px-8 py-2 backdrop-blur-md 
      dark:bg-black dark:bg-opacity-80 md:py-3"
    >
      <div className="flex w-full max-w-5xl justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/icons/logo.svg" width={32} height={32} alt="logo" />
          <p className="font-bold text-inherit">Ronald Lopes</p>
        </Link>

        <div className="flex">
          <ul className="hidden items-center justify-between sm:flex">
            <div className="flex items-center gap-1">
              {siteConfig.navItems.map((item, index) => (
                <Link key={index} href={item.href}>
                  <Button size="sm" variant="ghost">
                    <Ripple />
                    {item.label}
                  </Button>
                </Link>
              ))}
              <Link href="#get-in-touch">
                <Button
                  size="sm"
                  className="bg-accent-soft"
                  variant="secondary"
                >
                  <Ripple />
                  Get in touch
                </Button>
              </Link>
            </div>
          </ul>
        </div>
      </div>
    </header>
  );
};
