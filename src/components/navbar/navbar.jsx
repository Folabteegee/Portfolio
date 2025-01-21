"use client";
import React, { useState, useContext } from "react";
import linkedin2 from "/public/linkedin2.png";
import Image from "next/image";
import Link from "next/link";
import lightmode from "/public/light-mode.png";
import darkmode from "/public/dark-mode.png";
import { ThemeContext } from "../context/ThemeContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);

  // Close menu when clicking outside the menu box
  const handleCloseMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className={`${isOpen ? "relative" : ""}`}>
      <nav className="bg-[#D4D4D4] fixed top-0 left-0 w-full z-10  dark:bg-gray-600 dark:text-white font-montserrat text-[#494848] shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <h1 className=" text-2xl font-bold">
                Taiwo A <span className="text-green-500">.</span>
              </h1>
            </div>

            {/* Menu for larger screens */}
            <div className="hidden md:block">
              <div className="flex ">
                <ul className="flex space-x-8 items-center font-bold border-r-2 border-[#494848] px-5 ">
                  <li>
                    <a
                      href="/"
                      className="hover:text-[#909090] hover:scale-110 transition-transform duration-300"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="/about"
                      className="hover:text-[#909090] hover:scale-110 transition-transform duration-300"
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href="/project"
                      className="hover:text-[#909090] hover:scale-110 transition-transform duration-300"
                    >
                      Projects
                    </a>
                  </li>
                  <li>
                    <a
                      href="/blogs"
                      className="hover:text-[#909090] hover:scale-110 transition-transform duration-300"
                    >
                      Blogs
                    </a>
                  </li>
                  <li>
                    <a
                      href="/contact"
                      className="hover:text-[#909090] hover:scale-110 transition-transform duration-300"
                    >
                      Contact
                    </a>
                  </li>

                  {/* Theme Toggle */}
                  <button
                    onClick={toggleTheme}
                    className="py-2 px-3 bg-white border-none text-xs max-sm:h-7 items-center justify-center font-poppins text-gray-600 rounded-lg"
                  >
                    {theme === "dark" ? (
                      <Image
                        src={lightmode}
                        alt="light"
                        width={15}
                        height={15}
                        className="max-sm:w-3"
                      />
                    ) : (
                      <Image
                        src={darkmode}
                        alt="dark"
                        width={15}
                        height={15}
                        className="max-sm:w-3"
                      />
                    )}
                  </button>
                </ul>

                <Link
                  className="pl-5"
                  href={"https://www.linkedin.com/in/taiwo-afolabi-b5b827227"}
                >
                  <div className="">
                    <Image
                      src={linkedin2}
                      alt="linkedinimg"
                      width={30}
                      height={30}
                      className="mx-auto hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                </Link>
              </div>
            </div>

            {/* Mobile menu toggle */}
            <div className="md:hidden flex gap-4">
              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="py-2 px-3 bg-white border-none text-xs max-sm:h-7 items-center justify-center font-poppins text-gray-600 rounded-lg"
              >
                {theme === "dark" ? (
                  <Image
                    src={lightmode}
                    alt="light"
                    width={15}
                    height={15}
                    className="max-sm:w-3"
                  />
                ) : (
                  <Image
                    src={darkmode}
                    alt="dark"
                    width={15}
                    height={15}
                    className="max-sm:w-3"
                  />
                )}
              </button>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-[#494848] dark:text-white focus:outline-none"
              >
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Background Blur */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm z-10"
          onClick={handleCloseMenu}
        ></div>
      )}

      {/* Mobile menu */}
      {isOpen && (
        <div className="fixed top-0 right-0 h-full w-3/4 bg-[#D4D4D4] dark:bg-gray-600 z-20 shadow-lg">
          <div className="flex flex-col font-montserrat h-full">
            {/* Cancel Button */}
            <div className="p-4">
              <button
                onClick={handleCloseMenu}
                className="text-[#494848]  dark:text-white  hover:text-[#909090] focus:outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Menu Items */}
            <ul className="px-4 pt-2 space-y-4 text-[#494848] dark:text-white flex-grow">
              <li>
                <a
                  href="/"
                  className="block text-lg hover:text-[#909090]"
                  onClick={handleCloseMenu}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="block text-lg hover:text-[#909090]"
                  onClick={handleCloseMenu}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/project"
                  className="block text-lg hover:text-[#909090]"
                  onClick={handleCloseMenu}
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="/blogs"
                  className="block text-lg hover:text-[#909090]"
                  onClick={handleCloseMenu}
                >
                  Blogs
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="block text-lg hover:text-[#909090]"
                  onClick={handleCloseMenu}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
