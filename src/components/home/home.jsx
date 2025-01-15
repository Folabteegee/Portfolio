"use client";

import React from "react";
import Link from "next/link";
import html from "/public/html.png";
import css from "/public/css.png";
import js from "/public/js.png";
import nextjs from "/public/nextjs.png";
import react from "/public/react.png";
import tailwindcss from "/public/tailwindcss.png";
import Image from "next/image";

const HomeSection = () => {
  return (
    <div className="bg-[#E8E9E8]  dark:bg-gray-800 dark:text-white  ">
      <section
        id="home"
        className="bg-[#E8E9E8]  dark:bg-gray-800 dark:text-white  font-montserrat mt-20 min-h-screen flex items-center justify-center px-6 md:px-16 lg:px-32"
      >
        <div className=" max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-20">
          {/* Profile Picture */}
          <div className="w-64 h-64 md:w-72 md:h-72 rounded-full bg-gray-300 overflow-hidden shadow-lg flex-shrink-0">
            {/* Replace the div below with your image */}
            <img
              src="/path-to-your-image.jpg" // Replace with your actual image path
              alt="Taiwo Afolabi"
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
            />
            q
          </div>

          {/* Text Content */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold   dark:text-white text-gray-500">
              Hi, I'm{" "}
              <span className="text-[#494848]  dark:text-green-500">
                Taiwo Afolabi
              </span>
            </h1>
            <p className="mt-4 text-lg md:text-xl dark:text-white text-gray-500">
              A passionate{" "}
              <span className="font-semibold  dark:text-green-500  text-[#494848]">
                Web Developer
              </span>{" "}
              with 3 years of experience building responsive, user-friendly
              websites and applications.
            </p>

            <div className="mt-6 ">
              <div className="flex gap-12">
                <a
                  href="#contact"
                  className="relative inline-block px-6 py-3 max-sm:px-3 max-sm:py-3 bg-gray-600 text-white rounded-lg shadow-md transition-transform transform hover:scale-105 hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-gray-500 to-gray-900 opacity-0 transition-opacity duration-300 rounded-lg hover:opacity-100"></span>
                  <span className="relative">Contact Me</span>
                </a>
                <div>
                  <div className="  text-gray-500 dark:text-gray-300 text-1xl font-bold">
                    GitHub
                  </div>
                  <Link href="https://github.com/Folabteegee">
                    "https://github.com/Folabteegee"
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="font-montserrat  dark:bg-gray-800 dark:text-white   ">
        <h1 className=" text-3xl max-sm:text-lg max-sm:px-3 max-sm:pt-12 flex pb-6 justify-center font-bold dark:text-white text-[#494848]">
          Skilled in modern web technologies like
        </h1>
        {/* Skill Boxes */}
        <div className=" max-w-7xl font-montserrat rounded-lg mx-auto flex flex-col md:flex-row justify-center gap-8">
          {/* Skill 1 */}
          <div className="flex flex-col  dark:bg-gray-600 items-center bg-opacity-10 rounded-lg shadow-2xl p-8 text-center">
            <Image
              src={html}
              alt="html"
              width={120}
              height={120}
              className="mx-auto hover:scale-110 transition-transform duration-300"
            />
            <h3 className="text-2xl pt-5 font-bold">HTML</h3>
            <p className="mt-2 text-sm">
              Skilled in writing semantic, clean, and accessible HTML to
              structure web pages effectively.
            </p>
          </div>

          {/* Skill 2 */}
          <div className="flex flex-col  dark:bg-gray-600 items-center bg-opacity-10 rounded-2xl shadow-2xl p-8 text-center">
            <Image
              src={css}
              alt="css"
              width={120}
              height={120}
              className="mx-auto hover:scale-110 transition-transform duration-300"
            />
            <h3 className="text-2xl pt-5 font-bold">CSS</h3>
            <p className="mt-2 text-sm">
              Proficient in creating visually appealing, responsive, and modern
              layouts with CSS and TailwindCSS.
            </p>
          </div>

          {/* Skill 3 */}
          <div className="flex flex-col  dark:bg-gray-600 items-center bg-opacity-10 rounded-2xl shadow-2xl p-8 text-center">
            <Image
              src={js}
              alt="js"
              width={100}
              height={100}
              className="mx-auto hover:scale-110 transition-transform duration-300"
            />
            <h3 className="text-2xl pt-5 font-bold">JavaScript</h3>
            <p className="mt-2 text-sm">
              Experienced in writing clean, efficient JavaScript to build
              dynamic and interactive user experiences.
            </p>
          </div>

          {/* Skill 4 */}
          <div className="flex flex-col  dark:bg-gray-600 items-center bg-opacity-10 rounded-2xl shadow-2xl p-8 text-center">
            <Image
              src={react}
              alt="react"
              width={100}
              height={100}
              className="mx-auto hover:scale-110 transition-transform duration-300"
            />
            <h3 className="text-2xl pt-5 font-bold">ReactJS</h3>
            <p className="mt-2 text-sm">
              Experienced in building dynamic, component-based user interfaces
              with React.js, using hooks and the virtual DOM for efficiency and
              interactivity.
            </p>
          </div>

          {/* Skill 5 */}
          <div className="flex flex-col  dark:bg-gray-600 items-center bg-opacity-10 rounded-2xl shadow-2xl p-8 text-center">
            <Image
              src={nextjs}
              alt="nextjs"
              width={100}
              height={100}
              className="mx-auto hover:scale-110 transition-transform duration-300"
            />
            <h3 className="text-2xl pt-5 font-bold">NextJS</h3>
            <p className="mt-2 text-sm">
              Proficient in creating SEO-friendly, high-performance web
              applications with Next.js, leveraging server-side rendering and
              static site generation.
            </p>
          </div>

          {/* Skill 6 */}
          <div className="flex flex-col  dark:bg-gray-600 items-center bg-opacity-10 rounded-2xl shadow-2xl p-8 text-center">
            <Image
              src={tailwindcss}
              alt="tailwindcss"
              width={100}
              height={100}
              className="mx-auto hover:scale-110 transition-transform duration-300"
            />
            <h3 className="text-2xl pt-5 font-bold">TailwindCSS</h3>
            <p className="mt-2 text-sm">
              Skilled in crafting modern, responsive designs with TailwindCSS,
              utilizing utility-first classes for rapid and efficient styling.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeSection;
