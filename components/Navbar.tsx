"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Popover } from "@headlessui/react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const headerLinks = [
    { label: "About us", href: "/" },
    { label: "Our Service", href: "/about" },
    { label: "Find a Doctor ", href: "/features" },
  ];

  return (
    <div className="w-full mx-auto bg-white  relative z-50">
      <Popover className="container mx-auto flex items-center  px-4 py-4  md:max-w-[80rem]">
        <Image
          src="/logo.png"
          width={132}
          height={50}
          alt="logo"
          className="md:w-[132px] md:h-[50px] w-[100px] h-[40px]"
        
        />
        <div className="grow">
          <div className="hidden sm:flex items-center justify-start ml-24 gap-2 md:gap-16 ">
            {headerLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                passHref
               
                className="text-[1rem] font-[500] leading-normal hover:text-gray-700"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex grow items-center justify-end sm:hidden">
          <Popover.Button
            className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="sr-only">Open menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </Popover.Button>
        </div>

        <div
          className={`absolute inset-x-0 top-0 origin-top-right transform p-2 transition ${
            menuOpen ? "md:hidden" : "hidden"
          }`}
        >
          <div className="rounded-lg text-[#646464] bg-white shadow-lg ring-1 ring-black ring-opacity-5 divide-y-2 divide-gray-50">
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
                <Image src="/logo.png" width={83} height={47} alt="logo" />
                <div className="mr-2">
                  <Popover.Button
                    className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover-bg-gray-100 hover-text-gray-500 focus-outline-none focus-ring-2 focus-ring-inset focus-ring-indigo-500"
                    onClick={() => setMenuOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <X className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  {headerLinks.map((link, index) => (
                    <Link
                      key={index}
                      href={link.href}
                      passHref
                      className="focus-outline-none focus-ring-2 focus-ring-inset focus-ring-gray-500 px-2"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </div>
              {/* mobile screen button */}
              <div className="mt-6 flex flex-col items-center text-center gap-2">
              <Button className="bg-[#FF7352] md:px-6 md:py-6 px-4 py-4 font-[500] text-[0.93519rem] leading-normal rounded-[10px] w-full">
            Book now
          </Button>
              </div>
            </div>
          </div>
        </div>
        {/* desktop/tab screen button  */}
        <div className="hidden sm:block">
          <Button className="bg-[#FF7352] md:px-6 md:py-6 px-4 py-4 font-[500] text-[0.93519rem] leading-normal rounded-[10px]">
            Book now
          </Button>
        </div>
      </Popover>
    </div>
  );
};

export default Header;
