"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "./Button";


function NavbarItem({ href, children, onClick, className }: { href: string; children: React.ReactNode; onClick?: () => void; className?: string }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`text-lg px-3 py-1 rounded-md transition-colors duration-200 hover:bg-white/20${className ? ` ${className}` : ""}`}
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
          <NavbarItem href="/rules">Rules</NavbarItem>
          <NavbarItem href="/faq">FAQ</NavbarItem>
          <NavbarItem href="/syllabus">Syllabus</NavbarItem>
          <NavbarItem href="/practise">
            Practise
          </NavbarItem>
          <Button>
            Register Now!
          </Button>
        </div>
        <button
          onClick={() => setIsOpen(true)}
          className="md:hidden text-white"
          aria-label="Open menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-menu-2"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 6l16 0" />
            <path d="M4 12l16 0" />
            <path d="M4 18l16 0" />
          </svg>
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-x"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M18 6l-12 12" />
            <path d="M6 6l12 12" />
          </svg>
        </button>
        <div className="flex flex-col items-start px-6 space-y-6 mt-4 text-[#273a30] slab font-semibold">
          <NavbarItem href="/" onClick={() => setIsOpen(false)} className="text-xl">Home</NavbarItem>
          <NavbarItem href="/rules" onClick={() => setIsOpen(false)} className="text-xl">Rules</NavbarItem>
          <NavbarItem href="/faq" onClick={() => setIsOpen(false)} className="text-xl">FAQ</NavbarItem>
          <NavbarItem href="/syllabus" onClick={() => setIsOpen(false)} className="text-xl">Syllabus</NavbarItem>
          <NavbarItem href="/practise" 
          onClick={() => setIsOpen(false)} className="text-xl">
            2025 Solutions
          </NavbarItem>

        </div>
      </div>
    </header>
  );
}
