"use client";
import React, { useState, useEffect, useContext } from "react";
import linkedin2 from "/public/linkedin2.png";
import Image from "next/image";
import Link from "next/link";
import lightmode from "/public/light-mode.png";
import darkmode from "/public/dark-mode.png";
import { ThemeContext } from "../context/ThemeContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [time, setTime] = useState(new Date());
  const [isClient, setIsClient] = useState(false); // Track if we are on the client

  // Close menu when clicking outside the menu box
  const handleCloseMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    setIsClient(true); // Mark client rendering
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!isClient) return null; // Prevent server-side rendering of time

  const formattedTime = time.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });

  const formattedDay = time.toLocaleDateString("en-US", {
    weekday: "short",
  });

  return (
    <div className={`${isOpen ? "relative" : ""}`}>
      <nav className="bg-[#D4D4D4] fixed top-0 left-0 w-full z-10  dark:bg-gray-600 dark:text-white font-montserrat text-[#494848] shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className=" text-2xl font-bold ">
                Taiwo A <span className="text-yellow-500">.</span>
              </Link>
            </div>

            {/* Menu for larger screens */}
            <div className="hidden md:block">
              <div className="flex ">
                <ul className="flex space-x-8 items-center font-bold border-r-2 border-[#494848] dark:border-white px-5 ">
                  <li className=" hover:scale-110 transition-transform duration-300">
                    <a href="/" className="hover:text-[#909090]">
                      Home
                    </a>
                  </li>
                  <li className=" hover:scale-110 transition-transform duration-300">
                    <a href="/about" className="hover:text-[#909090]">
                      About
                    </a>
                  </li>
                  <li className=" hover:scale-110 transition-transform duration-300">
                    <a href="/project" className="hover:text-[#909090]">
                      Projects
                    </a>
                  </li>
                  <li className=" hover:scale-110 transition-transform duration-300">
                    <a href="/experience" className="hover:text-[#909090]">
                      Experience
                    </a>
                  </li>
                  <li className=" hover:scale-110 transition-transform duration-300">
                    <a
                      href="/taiwoafolabiresume.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#909090]"
                    >
                      Resume
                    </a>
                  </li>
                  <li className=" hover:scale-110 transition-transform duration-300">
                    <a href="/contact" className="hover:text-[#909090]">
                      Contact
                    </a>
                  </li>

                  {/* Theme Toggle */}
                  <button
                    onClick={toggleTheme}
                    className="py-2 px-3 bg-white dark:bg-yellow-500  border-none text-xs max-sm:h-7 items-center justify-center font-poppins text-gray-600 rounded-lg"
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
                {/* Live Clock */}
                <div className="text-lg font-semibold  dark:border-white px-5">
                  {formattedDay}, {formattedTime}
                </div>
              </div>
            </div>

            {/* Mobile menu toggle */}
            <div className="md:hidden flex gap-4">
              {/* Live Clock */}
              <div className="text-xs flex items-center font-semibold border-r-2 border-[#494848]  px-4 dark:border-white ">
                {formattedDay}, {formattedTime}
              </div>
              {/* linked in */}
              {/* <Link
                className="pl-5 border-r-2 border-[#494848] dark:border-white  px-4"
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
              </Link> */}
              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="py-2 px-3 bg-white dark:bg-yellow-500 border-none text-xs max-sm:h-7 items-center justify-center font-poppins text-gray-600 rounded-lg"
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
        <div
          className="fixed top-0 justify-center flex right-0 h-2/5 w-3/4 bg-[#D4D4D4] dark:bg-gray-600 z-20 shadow-lg"
          style={{
            borderBottomLeftRadius: "90%",
          }}
        >
          <div className="flex flex-col font-montserrat h-full">
            {/* Cancel Button */}
            <div className="p-4">
              <button
                onClick={handleCloseMenu}
                className="text-[#494848]  dark:text-white hover:text-[#909090] focus:outline-none"
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
              <li className=" hover:scale-110 transition-transform duration-300">
                <a
                  href="/"
                  className="block text-lg hover:text-[#909090]"
                  onClick={handleCloseMenu}
                >
                  Home
                </a>
              </li>
              <li className=" hover:scale-110 transition-transform duration-300">
                <a
                  href="/about"
                  className="block text-lg hover:text-[#909090]"
                  onClick={handleCloseMenu}
                >
                  About
                </a>
              </li>
              <li className=" hover:scale-110 transition-transform duration-300">
                <a
                  href="/project"
                  className="block text-lg hover:text-[#909090]"
                  onClick={handleCloseMenu}
                >
                  Projects
                </a>
              </li>
              <li className=" hover:scale-110 transition-transform duration-300">
                <a
                  href="/experience"
                  className="block text-lg hover:text-[#909090]"
                  onClick={handleCloseMenu}
                >
                  Experience
                </a>
              </li>
              <li className=" hover:scale-110 transition-transform duration-300">
                <a
                  href="/taiwoafolabiresume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-lg hover:text-[#909090]"
                  onClick={handleCloseMenu}
                >
                  Resume
                </a>
              </li>

              <li className=" hover:scale-110 transition-transform duration-300">
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
