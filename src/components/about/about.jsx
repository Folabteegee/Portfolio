"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import coding2 from "/public/coding2.png";
import gaming from "/public/gaming.png";
import drawing from "/public/drawing.png";
import sports from "/public/sports.png";
import techStackImage from "/public/techStackImage.png";
import learningImage2 from "/public/learningImage2.png";
import goalsImage from "/public/goalsImage.png";
import css1 from "/public/css1.png";
import html1 from "/public/html1.png";
import js1 from "/public/js1.png";
import react from "/public/react.png";
import tailwindcss from "/public/tailwindcss.png";
import nextjs1 from "/public/nextjs1.png";

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

const AboutSection = () => {
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
      id="about"
      className="bg-[#E8E9E8] dark:bg-gray-800 dark:text-white font-montserrat py-36 text-gray-500"
    >
      <div className="max-w-7xl duration-1000 opacity-0 translate-y-10 animate-fade-in-up mx-auto px-6 ">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="hover:scale-110 transition-transform duration-300 text-4xl font-extrabold">
            About Me <span className="text-yellow-500">.</span>
          </h2>
          <p className="mt-4 text-2xl max-sm:text-lg font-medium">
            Hi! I’m Taiwo, a passionate Frontend Engineer from my desk in Osun
            State, Nigeria.
            <br /> I specialize in crafting user-friendly and visually appealing
            websites.
          </p>
        </div>

        {/* Tech Stack */}

        <div className="max-w-5xl mx-auto flex pt-5 border-b-2 border-[#494848] py-4 dark:border-white flex-row max-sm:flex-col items-center gap-20">
          <div className="w-96 h-64 rounded-md bg-gray-300 overflow-hidden shadow-lg flex-shrink-0">
            <Image
              src={techStackImage}
              alt="techstack"
              width={400}
              height={400}
              className="mx-auto hover:scale-110 transition-transform duration-300"
            />
          </div>
          <div className=" flex flex-col gap-5">
            <h3 className="text-2xl font-bold">
              Tech Stack <span className="text-yellow-500">.</span>{" "}
            </h3>
            <p className="mt-1 flex gap-5 text-sm">
              <Image
                src={html1}
                alt="htmlimg"
                width={50}
                height={50}
                className="mx-auto hover:scale-110 transition-transform duration-300"
              />
              <Image
                src={css1}
                alt="cssimg"
                width={50}
                height={50}
                className="mx-auto hover:scale-110 transition-transform duration-300"
              />

              <Image
                src={js1}
                alt="jsimg"
                width={50}
                height={50}
                className="mx-auto hover:scale-110 transition-transform duration-300"
              />
              <Image
                src={react}
                alt="reactimg"
                width={50}
                height={50}
                className="mx-auto hover:scale-110 transition-transform duration-300"
              />
              <Image
                src={nextjs1}
                alt="nextjsimg"
                width={50}
                height={50}
                className="mx-auto hover:scale-110 transition-transform duration-300"
              />
              <Image
                src={tailwindcss}
                alt="tailwindimg"
                width={50}
                height={50}
                className="mx-auto hover:scale-110 transition-transform duration-300"
              />
            </p>
            <div>
              HTML | CSS | JavaScript | React.js | Next.js | TailwindCSS
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto flex pt-5 border-b-2 border-[#494848] py-4 dark:border-white flex-row max-sm:flex-col-reverse items-center gap-20">
          <div>
            <h3 className="text-2xl font-bold">
              What I'm Learning <span className="text-yellow-500">.</span>
            </h3>
            <p className="mt-1 text-sm">
              Currently, I'm focusing on mastering TypeScript and improving my
              backend development skills.
            </p>
          </div>
          <div className="w-96 h-64 rounded-md bg-gray-300 overflow-hidden shadow-lg flex-shrink-0">
            <Image
              src={learningImage2}
              alt="learning2"
              width={400}
              height={400}
              className="mx-auto hover:scale-110 transition-transform duration-300"
            />
          </div>
        </div>

        <div className="max-w-5xl mx-auto flex pt-5 border-b-2 border-[#494848] py-4 dark:border-white flex-row max-sm:flex-col items-center gap-20">
          <div className="w-96 h-64 rounded-md bg-gray-300 overflow-hidden shadow-lg flex-shrink-0">
            <Image
              src={goalsImage}
              alt="goal"
              width={400}
              height={400}
              className="mx-auto hover:scale-110 transition-transform duration-300"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold">
              Goals & Aspirations <span className="text-yellow-500">.</span>
            </h3>
            <p className="mt-1 text-sm">
              My long-term goal is to work on innovative projects, build
              scalable applications, and contribute to open-source communities.
            </p>
          </div>
        </div>
        {/* Hobby Cards */}
        <div className="pt-10">
          <div className="text-3xl font-semibold py-10">
            {" "}
            When I’m not coding, I enjoy gaming, drawing, and playing sports.
            These hobbies keep me fit and balanced{" "}
            <span className="text-yellow-500">.</span>
          </div>
          {/* Gaming */}
          <div className="max-w-5xl mx-auto flex pt-5 border-b-2 border-[#494848] py-4 dark:border-white flex-row max-sm:flex-col-reverse items-center gap-20">
            <div>
              <h3 className="text-2xl font-bold">
                Gaming <span className="text-yellow-500">.</span>
              </h3>
              <p className="mt-1 text-sm">
                I enjoy immersing myself in adventure, strategy, actions and
                sports games. Gaming helps me relax and often inspires my
                creativity. I like <span className="font-semibold">CODM</span>.
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
          <div className="max-w-5xl mx-auto pt-5 border-b-2 border-[#494848] py-4 dark:border-white flex flex-row max-md:flex-col items-center gap-20">
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
              <h3 className="text-2xl font-bold">
                Drawing <span className="text-yellow-500">.</span>
              </h3>
              <p className="mt-1 text-sm">
                Drawing is my creative outlet. I love sketching ideas and
                improving my design sense, which enhances my work as a
                developer.
              </p>
            </div>
          </div>

          {/* Sports */}
          <div className="max-w-5xl mx-auto pt-5 flex flex-row max-sm:flex-col-reverse items-center gap-20">
            <div>
              <h3 className="text-2xl font-bold">
                Sports <span className="text-yellow-500">.</span>
              </h3>
              <p className="mt-1 text-sm">
                Sports keep me energized! Whether it’s soccer or athletics,
                staying active helps me stay focused and maintain a healthy
                work-life balance. I love Lionel Messi and I like to tease those
                who think he's not the GOAT of football🙂.
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
