"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import settings from "/public/settings.png";
import diamond1 from "/public/diamond1.png";
import briefcase1 from "/public/briefcase1.png";
import me from "/public/me.png";

// Loader Component
const Loader = () => {
  return (
    <div className="flex flex-col gap-1 items-center justify-center text-gray-500 font-montserrat dark:text-white h-screen bg-[#E8E9E8] dark:bg-gray-800">
      <div className="flex space-x-2">
        <div className="w-6 h-6 bg-yellow-500 rounded-full animate-bounce"></div>
        <div className="w-6 h-6 bg-yellow-500 rounded-full animate-bounce delay-500"></div>
        <div className="w-6 h-6 bg-yellow-500 rounded-full animate-bounce delay-1000"></div>
      </div>
      <div>Please wait</div>
    </div>
  );
};

const HomeSection = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500); // 2 seconds delay

    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="bg-[#E8E9E8] dark:bg-gray-800 pb-56 dark:text-white">
      <section
        id="home"
        className="bg-[#E8E9E8] dark:bg-gray-800 dark:text-white font-montserrat mt-20 max-sm:mt-10 min-h-screen flex items-center justify-center px-6 md:px-16 lg:px-32"
      >
        <div className="max-w-5xl mx-auto flex flex-col duration-1000 opacity-0 translate-y-10 animate-fade-in-up md:flex-row items-center gap-20">
          {/* Profile Picture */}
          <div className="w-96 h-96 max-sm:w-80 max-sm:h-80 rounded-2xl bg-yellow-500 overflow-hidden shadow-lg flex-shrink-0">
            <Image
              src={me}
              alt="me"
              width={400}
              height={400}
              className="mx-auto hover:scale-110 transition-transform duration-300"
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
              <div className="flex justify-evenly gap-12">
                <a
                  href="/contact"
                  className="relative inline-block px-6 py-3 max-sm:px-3 max-sm:py-3 bg-yellow-500 text-[#494848] rounded-lg shadow-md transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-yellow-600 to-yellow-800 opacity-0 transition-opacity duration-300 rounded-lg hover:opacity-100"></span>
                  <span className="relative font-bold">Get Connected</span>
                </a>
                <div>
                  <div className="text-gray-500 dark:text-gray-300 text-1xl font-bold">
                    GitHub
                  </div>
                  <Link
                    className="text-gray-500 dark:text-white"
                    href="https://github.com/Folabteegee"
                  >
                    "https://github.com/Folabteegee"
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="font-montserrat bg-[#E8E9E8] dark:bg-gray-800 dark:text-white">
        <div className="max-w-7xl font-montserrat rounded-lg mx-auto flex flex-col md:flex-row justify-center gap-8">
          {/* Skill 1 */}
          <div className="flex flex-col text-gray-500 dark:text-white dark:bg-gray-600 items-center bg-opacity-10 rounded-lg shadow-2xl p-8 text-center transition-transform duration-700">
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
              applications using HTML, CSS, React.js, Next.js, and TailwindCSS.
            </p>
          </div>

          {/* Skill 2 */}
          <div className="flex flex-col text-gray-500 dark:text-white dark:bg-gray-600 items-center bg-opacity-10 rounded-2xl shadow-2xl p-8 text-center transition-transform duration-700 delay-200">
            <Image
              src={briefcase1}
              alt="briefcase1"
              width={120}
              height={120}
              className="mx-auto hover:scale-110 transition-transform duration-300"
            />
            <h3 className="text-2xl pt-5 font-bold">Creative Work</h3>
            <p className="mt-2 text-sm">
              I bring ideas to life with creativity and technical expertise,
              designing engaging user experiences.
            </p>
          </div>

          {/* Skill 3 */}
          <div className="flex flex-col text-gray-500 dark:text-white dark:bg-gray-600 items-center bg-opacity-10 rounded-2xl shadow-2xl p-8 text-center transition-transform duration-700 delay-400">
            <Image
              src={diamond1}
              alt="diamond1"
              width={120}
              height={120}
              className="mx-auto hover:scale-110 transition-transform duration-300"
            />
            <h3 className="text-2xl pt-5 font-bold">Strong Dedication</h3>
            <p className="mt-2 text-sm">
              I strive to continuously learn, adapt, and deliver high-quality
              web solutions that exceed expectations.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeSection;
