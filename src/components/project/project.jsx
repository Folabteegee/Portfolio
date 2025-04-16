"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import invoice3 from "/public/invoice3.png";
import crypto from "/public/crypto.png";
import portfolio from "/public/portfolio.png";
import ecommerce from "/public/ecommerce.png";

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
const ProjectSection = () => {
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
    <section
      id="projects"
      className=" py-36 font-montserrat overflow-x-hidden dark:bg-gray-800 text-gray-500 dark:text-white bg-[#E8E9E8] "
    >
      <div className="max-w-7xl  duration-1000 opacity-0 translate-y-10 animate-fade-in-up mx-auto px-6">
        <h2 className="text-4xl font-bold text-center hover:scale-110 transition-transform duration-300 text-gray-500 dark:text-white mb-12">
          My Projects <span className="text-yellow-500">.</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Project 1 */}
          <div className="bg-white shadow-md rounded-lg dark:text-white dark:bg-gray-600 overflow-hidden">
            <div className="relative h-48 bg-[#D4D4D4]">
              <Image
                src={portfolio}
                alt="portfolio"
                className="w-full h-full hover:scale-110 transition-transform duration-300 object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-bold">Portfolio Website</h3>
              <p className="mt-2 text-sm dark:text-white text-gray-500">
                A personal portfolio website built with NextJS and TailwindCSS
                to showcase my skills, projects and experience, like the site
                you're on at the moment - My own personal portfolio website.
              </p>
              <a className="inline-block mt-4 bg-yellow-500 text-gray-500  font-bold px-4 py-2 rounded-md hover:bg-yellow-600 transition-all duration-300">
                This Site
              </a>
            </div>
          </div>
          {/* Project 2 */}
          <div className="bg-white shadow-md dark:text-white dark:bg-gray-600 rounded-lg overflow-hidden">
            <div className="relative h-48 bg-[#D4D4D4]">
              <Image
                src={invoice3}
                alt="invoice3"
                className="w-full h-full hover:scale-110 transition-transform duration-300 object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-bold">Invoice Generator App</h3>
              <p className="mt-2 text-sm dark:text-white text-gray-500">
                A web app that simplifies invoice creation with responsive
                design, customizable themes, and real-time calculations.
              </p>
              <a
                href="https://free-invoice-generator.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 bg-yellow-500 font-bold text-gray-500 px-4 py-2 rounded-md hover:bg-yellow-600 transition-all duration-300"
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
                className="w-full h-full hover:scale-110 transition-transform duration-300 object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-bold">Crypto Dashboard</h3>
              <p className="mt-2 text-sm dark:text-white text-gray-500">
                A cryptocurrency tracking dashboard with real-time data
                fetching, dark mode, and a detailed coin info page.
              </p>
              <a
                href="https://tk-cryptodashboard.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 bg-yellow-500 font-bold text-gray-500  px-4 py-2 rounded-md hover:bg-yellow-600 transition-all duration-300"
              >
                View Project
              </a>
            </div>
          </div>

          {/* project 4   */}
          <div className="bg-white shadow-md dark:text-white dark:bg-gray-600 rounded-lg overflow-hidden">
            <div className="relative h-48 bg-[#D4D4D4]">
              <Image
                src={ecommerce}
                alt="ecommerce"
                className="w-full h-full hover:scale-110 transition-transform duration-300 object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-bold">E-commerce website</h3>
              <p className="mt-2 text-sm dark:text-white text-gray-500">
                An E-commerce web that allows you browse through diverse range
                of meticulously crafted garments, designed to bring out your
                individuality and cater to your sense of style.
              </p>
              <a
                href="https://shopnco.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 bg-yellow-500 font-bold text-gray-500  px-4 py-2 rounded-md hover:bg-yellow-600 transition-all duration-300"
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
