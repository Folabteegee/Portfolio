"use client";
import React from "react";
import Image from "next/image";
import invoice3 from "/public/invoice3.png";
import crypto from "/public/crypto.png";
import portfolio from "/public/portfolio.png";

const ProjectSection = () => {
  return (
    <section
      id="projects"
      className=" py-36 font-montserrat   dark:bg-gray-800 dark:text-white bg-[#E8E9E8] "
    >
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-[#494848] dark:text-white mb-12">
          Projects <span className="text-green-500">.</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Project 1 */}
          <div className="bg-white shadow-md rounded-lg dark:text-white dark:bg-gray-600 overflow-hidden">
            <div className="relative h-48 bg-[#D4D4D4]">
              <Image
                src={portfolio}
                alt="portfolio"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-bold">Portfolio Website</h3>
              <p className="mt-2 text-sm dark:text-white text-[#494848]">
                A personal portfolio website built with React and TailwindCSS to
                showcase my skills, projects, and experience.
              </p>
              <a
                href="https://your-portfolio-link.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-all duration-300"
              >
                View Project
              </a>
            </div>
          </div>

          {/* Project 2 */}
          <div className="bg-white shadow-md dark:text-white dark:bg-gray-600 rounded-lg overflow-hidden">
            <div className="relative h-48 bg-[#D4D4D4]">
              <Image
                src={invoice3}
                alt="invoice3"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-bold">Invoice Generator App</h3>
              <p className="mt-2 text-sm dark:text-white text-[#494848]">
                A web app that simplifies invoice creation with responsive
                design, customizable themes, and real-time calculations.
              </p>
              <a
                href="https://free-invoice-generator.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-all duration-300"
              >
                View Project
              </a>
            </div>
          </div>

          {/* Project 3 */}
          <div className="bg-white shadow-md dark:text-white dark:bg-gray-600 rounded-lg overflow-hidden">
            <div className="relative h-48 bg-[#D4D4D4]">
              <Image
                src={crypto}
                alt="crypto"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-bold">Crypto Dashboard</h3>
              <p className="mt-2 text-sm dark:text-white text-[#494848]">
                A cryptocurrency tracking dashboard with real-time data
                fetching, dark mode, and a detailed coin info page.
              </p>
              <a
                href="https://tk-cryptodashboard.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-all duration-300"
              >
                View Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
