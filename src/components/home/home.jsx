"use client";

import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import settings from "/public/settings.png";
import diamond1 from "/public/diamond1.png";
import briefcase1 from "/public/briefcase1.png";
import Image from "next/image";

const HomeSection = () => {
  const [isInView, setIsInView] = useState(false);
  const skillBoxesRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.2 } // Trigger when 20% of the element is in view
    );

    if (skillBoxesRef.current) {
      observer.observe(skillBoxesRef.current);
    }

    return () => {
      if (skillBoxesRef.current) {
        observer.unobserve(skillBoxesRef.current);
      }
    };
  }, []);

  return (
    <div className="bg-[#E8E9E8] dark:bg-gray-800 dark:text-white">
      <section
        id="home"
        className="bg-[#E8E9E8] dark:bg-gray-800 dark:text-white font-montserrat mt-20 max-md:mt-2  min-h-screen flex items-center justify-center px-6 md:px-16 lg:px-32"
      >
        <div className="max-w-5xl mx-auto flex flex-col  duration-1000 opacity-0 translate-y-10 animate-fade-in-up md:flex-row items-center gap-20">
          {/* Profile Picture */}
          <div className="w-64 h-64 md:w-72 md:h-72 rounded-full bg-gray-300 overflow-hidden shadow-lg flex-shrink-0">
            <img
              src="/path-to-your-image.jpg" // Replace with your actual image path
              alt="Taiwo Afolabi"
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
            />
          </div>

          {/* Text Content */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold dark:text-white text-gray-500">
              Hi, I'm{" "}
              <span className="text-[#494848] dark:text-yellow-400">
                Taiwo Afolabi
              </span>
            </h1>
            <p className="mt-4 text-lg md:text-xl dark:text-white text-gray-500">
              A passionate{" "}
              <span className="font-semibold dark:text-yellow-400 text-[#494848]">
                Web Developer
              </span>{" "}
              with 3 years of experience building responsive, user-friendly
              websites and applications.
            </p>

            <div className="mt-6">
              <div className="flex gap-12">
                <a
                  href="#contact"
                  className="relative inline-block px-6 py-3 max-sm:px-3 max-sm:py-3 bg-yellow-500 text-white rounded-lg shadow-md transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-yellow-600 to-yellow-800 opacity-0 transition-opacity duration-300 rounded-lg hover:opacity-100"></span>
                  <span className="relative font-bold">Contact Me</span>
                </a>
                <div>
                  <div className="text-gray-500 dark:text-gray-300 text-1xl font-bold">
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

      <section
        className="font-montserrat dark:bg-gray-800 dark:text-white"
        ref={skillBoxesRef}
      >
        {/* Skill Boxes */}
        <div
          className={`max-w-7xl font-montserrat rounded-lg mx-auto flex flex-col md:flex-row justify-center gap-8 ${
            isInView ? "animate-fade-in" : "opacity-0"
          }`}
        >
          {/* Skill 1 */}
          <div
            className={`flex flex-col dark:text-white dark:bg-gray-600 items-center bg-opacity-10 rounded-lg shadow-2xl p-8 text-center transition-transform duration-700 ${
              isInView
                ? "translate-x-0 opacity-100"
                : "-translate-x-20 opacity-0"
            }`}
          >
            <Image
              src={settings}
              alt="settings"
              width={120}
              height={120}
              className="mx-auto hover:scale-110 dark:text-white transition-transform duration-300"
            />
            <h3 className="text-2xl pt-5 font-bold">Deeper Skillset</h3>
            <p className="mt-2 text-sm">
              I excel in crafting responsive and visually appealing web
              applications using HTML, CSS, React.js, Next.js, and TailwindCSS,
              combining creativity with modern development practices.
            </p>
          </div>

          {/* Skill 2 */}
          <div
            className={`flex flex-col dark:bg-gray-600 items-center bg-opacity-10 rounded-2xl shadow-2xl p-8 text-center transition-transform duration-700 delay-200 ${
              isInView
                ? "translate-y-0 opacity-100"
                : "translate-y-20 opacity-0"
            }`}
          >
            <Image
              src={briefcase1}
              alt="briefcase1"
              width={120}
              height={120}
              className="mx-auto hover:scale-110 transition-transform duration-300"
            />
            <h3 className="text-2xl pt-5 font-bold">Creative Work</h3>
            <p className="mt-2 text-sm">
              I bring ideas to life with a blend of creativity and technical
              expertise, designing engaging user experiences and innovative
              solutions for modern web applications.
            </p>
          </div>

          {/* Skill 3 */}
          <div
            className={`flex flex-col dark:bg-gray-600 items-center bg-opacity-10 rounded-2xl shadow-2xl p-8 text-center transition-transform duration-700 delay-400 ${
              isInView
                ? "translate-x-0 opacity-100"
                : "translate-x-20 opacity-0"
            }`}
          >
            <Image
              src={diamond1}
              alt="diamond1"
              width={120}
              height={120}
              className="mx-auto hover:scale-110 transition-transform duration-300"
            />
            <h3 className="text-2xl pt-5 font-bold">Strong Dedication</h3>
            <p className="mt-2 text-sm">
              With unwavering commitment to excellence, I strive to continuously
              learn, adapt, and deliver high-quality web solutions that meet and
              exceed expectations.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeSection;
