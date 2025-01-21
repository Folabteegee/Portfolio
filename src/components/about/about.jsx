"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import coding2 from "/public/coding2.png";
import gaming from "/public/gaming.png";
import drawing from "/public/drawing.png";
import sports from "/public/sports.png";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="bg-[#E8E9E8]  dark:bg-gray-800 dark:text-white font-montserrat py-36 text-[#494848]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="hover:scale-110 transition-transform duration-300 text-4xl font-extrabold">
            About Me <span className="text-green-500">.</span>
          </h2>
          <p className="mt-4 text-2xl max-sm:text-sm font-medium">
            Hi! I’m Taiwo, a passionate web developer who loves to code.
            <br /> When I’m not coding, I enjoy gaming, drawing, sports and
            creative solutions.
            <br /> These hobbies keep me inspired and balanced!
          </p>
        </div>

        {/* Hobby Cards */}
        <div className="">
          {/* Coding */}
          <div className=" max-w-5xl mx-auto flex p-5 flex-row max-md:flex-col items-center gap-20">
            <div className="w-96 h-64  rounded-md bg-gray-300 overflow-hidden shadow-lg flex-shrink-0">
              {/* Replace the div below with your image */}
              <Image
                src={coding2}
                alt="coding2"
                width={400}
                height={400}
                className="mx-auto hover:scale-110 transition-transform duration-300"
              />
            </div>

            {/* Text Content */}
            <div className="">
              <h3 className="text-2xl  font-bold">Coding</h3>
              <p className="mt-1 text-lg">
                Building efficient, dynamic websites and applications is my
                passion. I love solving problems and bringing ideas to life
                through clean, maintainable code.
              </p>
            </div>
          </div>

          {/* Gaming */}
          <div className=" max-w-5xl mx-auto flex flex-row max-sm:flex-col-reverse items-center gap-20">
            <div className="ml-6">
              <h3 className="text-2xl font-bold">Gaming</h3>
              <p className="mt-1 text-lg">
                I enjoy immersing myself in adventure, strategy, and sports
                games. Gaming helps me relax and often inspires my creativity
                for projects.
              </p>
            </div>

            <div className="w-96 h-64 rounded-md bg-gray-300 overflow-hidden shadow-lg flex-shrink-0">
              {/* Replace the div below with your image */}
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
          <div className=" max-w-5xl mx-auto flex flex-row max-md:flex-col pt-7 items-center gap-20">
            <div className="w-96 h-64 rounded-md bg-gray-300 overflow-hidden shadow-lg flex-shrink-0">
              {/* Replace the div below with your image */}
              <Image
                src={drawing}
                alt="drawing"
                width={400}
                height={400}
                className="mx-auto hover:scale-110 transition-transform duration-300"
              />
            </div>

            <div className="ml-6">
              <h3 className="text-2xl font-bold">Drawing</h3>
              <p className="mt-1 text-lg">
                Drawing is my creative outlet. I love sketching ideas and
                improving my design sense, which enhances my work as a
                developer.
              </p>
            </div>
          </div>

          {/* Sports */}
          <div className=" max-w-5xl mx-auto flex flex-row max-sm:flex-col-reverse pt-7 items-center gap-20">
            {/* Text Content */}
            <div className="ml-6">
              <h3 className="text-2xl font-bold">Sports</h3>
              <p className="mt-1 text-lg">
                Sports keep me energized! Whether it’s soccer or jogging,
                staying active helps me stay focused and maintain a healthy
                work-life balance.
              </p>
            </div>

            <div className="w-96 h-64 rounded-md bg-gray-300 overflow-hidden shadow-lg flex-shrink-0">
              {/* Replace the div below with your image */}
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
