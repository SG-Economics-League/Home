"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "./Button";
import { twMerge } from "tailwind-merge";
import MenuIcon from "./icons/MenuIcon";
import CrossIcon from "./icons/CrossIcon";
import navigationPages from "../data/navigationPages";
import { REGISTRATION_LINK } from "../data/links";
import { track } from '@vercel/analytics';


function NavbarItem({ href, children, onClick, className }: { href: string; children: React.ReactNode; onClick?: () => void; className?: string }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={twMerge("text-lg px-3 py-1 rounded-md transition-colors duration-200 hover:bg-white/20", className)}
    >
      {children}
    </Link>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      className="
        fixed top-0
        z-50
        w-full
        bg-baseText
        text-sm
        text-white
        bg-[length:20px_20px]
        bg-[linear-gradient(to_bottom,#ddd_1px,transparent_1px),
            linear-gradient(to_right,#ddd_1px,transparent_1px)]
      "
    >
      <nav className="w-full md:max-w-screen-lg md:mx-auto py-2 flex items-center justify-between px-4 md:px-0">
        <Link href="/" aria-label="Go to Home" className="flex items-center">
          <Image src="/logos/navbar.png" alt="Logo" width={240} height={192} />
        </Link>
        <div className="hidden md:flex items-center space-x-6 font-medium">
          {navigationPages.map(({ name, href }) => (
            <NavbarItem key={href} href={href}>
              {name}
            </NavbarItem>
          ))}
          <Button href={REGISTRATION_LINK} 
          onClick={()=>{track("register")}}
          className="ml-2">
            Register Now!
          </Button>
        </div>
        <button
          onClick={() => setIsOpen(true)}
          className="md:hidden text-white"
          aria-label="Open menu"
        >
          <MenuIcon />
        </button>
      </nav>
      <div
        className={`
          fixed top-0 left-0 w-full h-full
          bg-[#fefefb]
          transition-transform
          duration-300
          ${isOpen ? "translate-x-0" : "translate-x-full"}
          z-50
        `}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="p-4 text-[#273a30] text-xl"
          aria-label="Close menu"
        >
          <CrossIcon />
        </button>
        <div className="flex flex-col items-start px-6 space-y-6 mt-4 text-[#273a30] slab font-semibold">
          {navigationPages.map(({ name, href }) => (
            <NavbarItem key={href} href={href} onClick={() => setIsOpen(false)} className="text-xl w-full">
              {name}
            </NavbarItem>
          ))}
          <Button href={REGISTRATION_LINK} onClick={() => {
            setIsOpen(false)
            track("register")  
          }} className="w-full mt-4">
            Register Now!
          </Button>

        </div>
      </div>
    </header>
  );
}
