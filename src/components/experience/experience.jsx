"use client";
import React, { useState, useEffect } from "react";
import workspace from "/public/workspace.png";
import education from "/public/education.png";
import Image from "next/image";
import Link from "next/link";

// Loader Component
const Loader = () => {
  return (
    <div className="flex flex-col gap-1 items-center justify-center font-montserrat dark:text-white h-screen bg-[#E8E9E8] dark:bg-gray-800">
      <div className="flex space-x-2">
        <div className="w-6 h-6 bg-yellow-500 rounded-full animate-bounce"></div>
        <div className="w-6 h-6 bg-yellow-500 rounded-full animate-bounce delay-500"></div>
        <div className="w-6 h-6 bg-yellow-500 rounded-full animate-bounce delay-1000"></div>
      </div>
      <div>Please wait</div>
    </div>
  );
};

const ExperienceSection = () => {
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
      id="experience"
      className="bg-[#E8E9E8] dark:text-white  dark:bg-gray-800 py-36 font-montserrat"
    >
      <div className="max-w-7xl  duration-1000 opacity-0 translate-y-10 animate-fade-in-up mx-auto px-6">
        <div className="border-b-2 border-[#494848] dark:border-white h-24 w-full pb-5 flex justify-center">
          <Image
            src={workspace}
            alt="workspace"
            className="hover:scale-110 transition-transform duration-300 object-cover"
          />
        </div>
        <h2 className="text-4xl font-bold text-center pt-3 hover:scale-110 transition-transform duration-300 dark:text-white text-[#494848] mb-12">
          Experience <span className="text-yellow-500">.</span>
        </h2>
        <div className="space-y-12">
          {/* Personal Projects */}
          <div className="bg-white  dark:text-white dark:bg-gray-600 shadow-md rounded-lg p-6">
            <h3 className="text-2xl font-semibold dark:text-white text-[#494848]">
              Personal Web Development Projects
            </h3>
            <p className="text-sm dark:text-white text-[#494848] mt-2">
              Ongoing
            </p>
            <p className="mt-4 text-sm dark:text-white text-[#494848]">
              As a web developer, I have been building several web applications
              to hone my skills. I work on a range of projects, from simple
              landing pages to complex, interactive websites. Much respect to my
              brother,{" "}
              <Link
                href="https://www.linkedin.com/in/samuel-afolabi"
                className="text-yellow-500 font-semibold"
              >
                SAMUEL AFOLABI
              </Link>
              , who has been guiding me through my journey of code from the
              beginning to this moment.
            </p>
            <ul className="mt-4 list-disc pl-5 dark:text-white text-sm text-[#494848]">
              <li>
                Built a responsive portfolio website using Next.js and
                TailwindCSS.
              </li>
              <li>
                Developed a crypto tracking app with React, allowing users to
                track trending coins.
              </li>
              <li>
                Developed an invoice generator app with React, allowing users to
                generate invoices for businesses.
              </li>
              <li>
                Worked with APIs to fetch data and dynamically display content
                on websites.
              </li>
            </ul>
          </div>

          {/* Skills Acquired */}
          <div className="bg-white  dark:text-white dark:bg-gray-600 shadow-md rounded-lg p-6">
            <h3 className="text-2xl dark:text-white font-semibold text-[#494848]">
              Skills Acquired
            </h3>
            <p className="text-sm dark:text-white text-[#494848] mt-2">
              Ongoing
            </p>
            <p className="mt-4 text-sm dark:text-white text-[#494848]">
              Through my learning, I've gained hands-on experience and acquired
              key skills in the field of web development. I continue to grow and
              expand my knowledge in various areas of coding and web design.
            </p>
            <ul className="mt-4 list-disc pl-5 text-sm dark:text-white text-[#494848]">
              <li>HTML, CSS, and JavaScript to build interactive web pages.</li>
              <li>
                Experienced in React.js, Next.js, and TailwindCSS to develop
                dynamic and responsive websites.
              </li>
              <li>
                Knowledgeable in version control using Git and GitHub to
                collaborate on and manage projects.
              </li>
              <li>
                Skilled in integrating third-party APIs to enhance website
                functionality.
              </li>
              <li>
                Ability to create and manage forms, handle user input, and
                validate data efficiently.
              </li>
              <li>
                Comfortable with responsive design principles to ensure websites
                work well on all screen sizes.
              </li>
            </ul>
          </div>

          {/* Self-Learning and Development */}
          <div className="bg-white  dark:bg-gray-600 dark:text-white shadow-md rounded-lg p-6">
            <h3 className="text-2xl font-semibold dark:text-white text-[#494848]">
              Self-Learning & Development
            </h3>
            <p className="text-sm dark:text-white text-[#494848] mt-2">
              Ongoing
            </p>
            <p className="mt-4 dark:text-white text-sm text-[#494848]">
              I am constantly learning and improving my skills in web
              development. From completing online courses to reading books, I
              dedicate time to enhance my knowledge.
            </p>
            <ul className="mt-4 list-disc pl-5 text-sm dark:text-white text-[#494848]">
              <li>
                Learned and implemented new JavaScript libraries and frameworks,
                including React and Next.js.
              </li>
              <li>
                Engaged in open-source projects on GitHub and collaborated with
                fellow developers.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="max-w-7xl pt-20 mx-auto px-6">
        <div className="border-b-2 border-[#494848] dark:border-white h-24 w-full pb-5 flex justify-center">
          <Image
            src={education}
            alt="education"
            className="hover:scale-110 transition-transform duration-300 object-cover"
          />
        </div>
        <h2 className="text-4xl font-bold text-center hover:scale-110 transition-transform duration-300 pt-3 dark:text-white text-[#494848] mb-12">
          Education <span className="text-yellow-500">.</span>
        </h2>
        <div className="space-y-12">
          <div className="bg-white dark:bg-gray-600 shadow-md rounded-lg p-6">
            <h3 className="text-2xl font-semibold dark:text-white text-[#494848]">
              Obafemi Awolowo University
            </h3>
            <h3 className="text-sm font-semibold dark:text-white text-[#494848]">
              Bachelor, Science
            </h3>
            <p className="text-sm dark:text-white text-[#494848] mt-2">
              2021 - Present
            </p>
            <p className="mt-4 text-sm dark:text-white text-[#494848]">
              I am currently pursuing a degree in Microbiology, where I study
              microorganisms and their impact on human health, the environment,
              and biotechnology. My coursework includes laboratory techniques,
              microbial genetics, and immunology, providing me with a strong
              foundation in scientific research and analysis.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-600 shadow-md rounded-lg p-6">
            <h3 className="text-2xl font-semibold dark:text-white text-[#494848]">
              King's Will College
            </h3>
            <h3 className="text-sm font-semibold dark:text-white text-[#494848]">
              Senior Secondary Certificate Examination
            </h3>
            <p className="text-sm dark:text-white text-[#494848] mt-2">
              2014 - 2020
            </p>
            <p className="mt-4 text-sm dark:text-white text-[#494848]">
              Completed Secondary School with Senior Secondary Certificate
              Examination (SSCE) result
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
