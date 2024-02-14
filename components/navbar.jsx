"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false);
  const toggleNavbar = () => {
    setNavOpen(!navOpen);
  };

  const navLinks = [
    { text: "Home", href: "/" },
    { text: "Service", href: "/service" },
    { text: "Blogs", href: "https://dibakarbera01.blogspot.com" },
    {text:"Team", href:"/team"},
    { text: "Contact", href: "/contact" },
  ];

  return (
    <nav className=" w-full  z-999 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-4 mb-2 ">
        <div className="flex item-center justify-between ">
          <div className="flex items-center">
            <div className="flex">
              <a href="/" className="text-black">
                BashBridge Labs
              </a>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center space-x-4">
              {navLinks.map((link) => (
                <Link
                  key={link.text}
                  href={link.href}
                  className="text-zinc-800 hover:bg-zinc-100 hover:text-blue-400 rounded px-2 py-1 duration-200"
                >
                  {link.text}
                </Link>
              ))}
            </div>
          </div>
          <div className="md:hidden items-center">
            <button
              className="inline-flex items-center justify-center p-2 rounded-md text-black hover:text-blue-400  duration-200"
              onClick={toggleNavbar}
            >
              {navOpen ? (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {navOpen && (
        <div className="md:hidden">
          <div className="px-3 w-[90%] mx-auto rounded-xl flex flex-col">
          {navLinks.map((link) => (
                <Link
                  key={link.text}
                  href={link.href}
                  className="text-zinc-600 hover:bg-stone-100  rounded-xl px-6 py-6 duration-200 text-lg hover:text-blue-400"
                >
                  {link.text}
                </Link>
              ))}

          </div>
        </div>
      )}
    </nav>
  );
}
