"use client";

import Link from "next/link";
import React, { useState } from "react";
import { Button } from "./ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const links = [
    { href: "/about", label: "About" },
    { href: "/services", label: "Find a Doctor" },
    { href: "/services", label: "Services" },
  ];
  return (
    <section className="w-full bg-[#fff]">
      <main className="max-w-[90rem] mx-auto px-4 py-4 ">
        <div className="flex items-center justify-between md:px-10 sm:px-10 px-0"> 
        <div className="flex items-center md:gap-40 gap-14">
          <h1 className="md:text-[1.875rem] text-[1.4rem]  font-[700] leading-normal textcolor">
            SmileJoy
          </h1>

          <ul className={`hidden sm:flex md:gap-x-14 sm:gap-10 gap-6 ${isOpen ? "block" : ""}`}>
            {links.map((link, index) => (
              <li key={index} >
                <Link
                  href={link.href}
                  className="textcolor text-[1rem] font-[500] leading-normal hover:text-gray-700"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          </div>
          <Button className="bg-[#FF7352] md:px-6 md:py-6 px-4 py-4 font-[500] text-[0.93519rem] leading-normal rounded-[10px]">
            Book now
          </Button>
        </div>
      </main>
    </section>
  );
};

export default Navbar;
