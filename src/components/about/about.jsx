"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import coding2 from "/public/coding2.png";
import gaming from "/public/gaming.png";
import drawing from "/public/drawing.png";
import sports from "/public/sports.png";

const AboutSection = () => {
  const [isInView, setIsInView] = useState(false);
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.2 } // Trigger when 20% of the section is in view
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  return (
    <section
      id="about"
      ref={aboutRef}
      className="bg-[#E8E9E8] dark:bg-gray-800 dark:text-white font-montserrat py-36 text-[#494848]"
    >
      <div className="max-w-7xl duration-1000 opacity-0 translate-y-10 animate-fade-in-up mx-auto px-6 ">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="hover:scale-110 transition-transform duration-300 text-4xl font-extrabold">
            About Me <span className="text-yellow-500">.</span>
          </h2>
          <p className="mt-4 text-2xl max-sm:text-sm font-medium">
            Hi! I’m Taiwo, a passionate web developer who loves to code from my
            desk in Osun state,Nigeria.
            <br /> When I’m not coding, I enjoy gaming, drawing, sports and
            creative solutions.
            <br /> These hobbies keep me inspired and balanced!
          </p>
        </div>

        {/* Hobby Cards */}
        <div className="p-5">
          {/* Coding */}
          <div
            className={`max-w-5xl mx-auto border-b-2 border-[#494848] py-4 dark:border-white flex flex-row max-md:flex-col items-center gap-20 transition-transform duration-700 ${
              isInView
                ? "translate-x-0 opacity-100"
                : "-translate-x-20 opacity-0"
            }`}
          >
            <div className="w-96 h-64 rounded-md bg-gray-300 overflow-hidden shadow-lg flex-shrink-0">
              <Image
                src={coding2}
                alt="coding2"
                width={400}
                height={400}
                className="mx-auto hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold">Coding</h3>
              <p className="mt-1 text-lg">
                Building efficient, dynamic websites and applications is my
                passion. I love solving problems and bringing ideas to life
                through clean, maintainable code.
              </p>
            </div>
          </div>

          {/* Gaming */}
          <div
            className={`max-w-5xl mx-auto flex pt-5  border-b-2 border-[#494848] py-4 dark:border-white flex-row max-sm:flex-col-reverse items-center gap-20 transition-transform duration-700 delay-200 ${
              isInView
                ? "translate-x-0 opacity-100"
                : "translate-x-20 opacity-0"
            }`}
          >
            <div>
              <h3 className="text-2xl font-bold">Gaming</h3>
              <p className="mt-1 text-lg">
                I enjoy immersing myself in adventure, strategy, and sports
                games. Gaming helps me relax and often inspires my creativity
                for projects.
              </p>
            </div>
            <div className="w-96 h-64 rounded-md bg-gray-300 overflow-hidden shadow-lg flex-shrink-0">
              <Image
                src={gaming}
                alt="gaming"
                width={400}
                height={400}
                className="mx-auto hover:scale-110 transition-transform duration-300"
              />
            </div>
          </div>

          {/* Drawing */}
          <div
            className={`max-w-5xl mx-auto pt-5  border-b-2 border-[#494848] py-4 dark:border-white flex flex-row max-md:flex-col items-center gap-20 transition-transform duration-700 delay-400 ${
              isInView
                ? "translate-x-0 opacity-100"
                : "-translate-x-20 opacity-0"
            }`}
          >
            <div className="w-96 h-64 rounded-md bg-gray-300 overflow-hidden shadow-lg flex-shrink-0">
              <Image
                src={drawing}
                alt="drawing"
                width={400}
                height={400}
                className="mx-auto hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold">Drawing</h3>
              <p className="mt-1 text-lg">
                Drawing is my creative outlet. I love sketching ideas and
                improving my design sense, which enhances my work as a
                developer.
              </p>
            </div>
          </div>

          {/* Sports */}
          <div
            className={`max-w-5xl mx-auto pt-5  flex flex-row max-sm:flex-col-reverse items-center gap-20 transition-transform duration-700 delay-600 ${
              isInView
                ? "translate-x-0 opacity-100"
                : "translate-x-20 opacity-0"
            }`}
          >
            <div>
              <h3 className="text-2xl font-bold">Sports</h3>
              <p className="mt-1 text-lg">
                Sports keep me energized! Whether it’s soccer or jogging,
                staying active helps me stay focused and maintain a healthy
                work-life balance.
              </p>
            </div>
            <div className="w-96 h-64 rounded-md bg-gray-300 overflow-hidden shadow-lg flex-shrink-0">
              <Image
                src={sports}
                alt="sports"
                width={400}
                height={400}
                className="mx-auto hover:scale-110 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
