"use client";
import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";
import { HamburgerMenuIcon, Cross1Icon } from "@radix-ui/react-icons";
import { useState } from "react";

export default function Header({ highlight }) {
  const pages = [
    { name: "Blog", href: "/blog", highlight: "blog" },
    { name: "Tags", href: "/tags", highlight: "tags" },
    { name: "Projects", href: "/projects", highlight: "projects" },
  ];

  const [isClick, setIsClick] = useState(false);

  const toggleNavBar = () => {
    setIsClick(!isClick);
  };

  return (
    <div
      className="flex flex-col border-b w-full z-50 top-0 left-0 right-0  fixed supports-[backdrop-filter]:bg-background/60 bg-background/95 backdrop-blur
     "
    >
      <div className="flex w-full text-xl items-center justify-between py-4 px-10">
        <div
          className="text-3xl font-semibold italic tracking-wider md:text-5xl text-transparent bg-gradient-to-r from-primary to-gray-400 bg-clip-text select-none cursor-pointer"
          style={{ fontFamily: "Fuggles" }}
        >
          <Link href="/">TheTechMaze</Link>
        </div>
        <div onClick={toggleNavBar} className="md:hidden cursor-pointer">
          {isClick ? <Cross1Icon /> : <HamburgerMenuIcon />}
        </div>

        <div className="hidden md:flex items-center">
          {pages.map((page, index) => (
            <Link key={index} className="group" href={page.href}>
              <div className="px-3 py-1 cursor-pointer hover:bg-gray-200 dark:hover:bg-opacity-10 rounded-lg">
                {page.name}
              </div>
              <hr className="w-4 h-[3px] mx-auto bg-black dark:bg-white opacity-0 group-hover:opacity-100 border-0 rounded " />
              {highlight == page.highlight ? (
                <hr className="w-4 h-[3px] mx-auto bg-black dark:bg-white group-hover:opacity-100 border-0 rounded " />
              ) : (
                <></>
              )}
            </Link>
          ))}

          <div className="ml-10 mt-1">
            <ThemeToggle />
          </div>
        </div>
      </div>
      {isClick && (
        <div className="flex md:hidden flex-col py-4 px-10 space-y-2">
          {pages.map((page, index) => (
            <Link key={index} className="group" href={page.href}>
              <div className="px-3 py-1 cursor-pointer hover:bg-gray-200 border-2 dark:hover:bg-opacity-10 rounded">
                {page.name}
              </div>
            </Link>
          ))}

          <div className="mt-1">
            <ThemeToggle />
          </div>
        </div>
      )}
    </div>
  );
}
