"use client";
import React, { useState, useEffect, useRef } from "react";
import emailjs from "emailjs-com";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import {
  FaTwitter,
  FaInstagram,
  FaTiktok,
  FaWhatsapp,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

const NavbarHero = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Refs for each section
  const worksRef = useRef(null);
  const servicesRef = useRef(null);
  const aboutRef = useRef(null);
  const testimonialRef = useRef(null);
  const contactRef = useRef(null);
  const heroRef = useRef(null);

  // Check if elements are in view
  const isWorksInView = useInView(worksRef, { once: true, margin: "-100px" });
  const isServicesInView = useInView(servicesRef, {
    once: true,
    margin: "-100px",
  });
  const isAboutInView = useInView(aboutRef, { once: true, margin: "-100px" });
  const isTestimonialInView = useInView(testimonialRef, {
    once: true,
    margin: "-100px",
  });
  const isContactInView = useInView(contactRef, {
    once: true,
    margin: "-100px",
  });

  // Scroll progress for parallax effects
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .send(
        "service_yvou6fs",
        "template_oicz9nb",
        formData,
        "aCQ7vMKnIUoM_c-fL"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setSuccessMessage("Message sent successfully!");
          setFormData({ name: "", email: "", phone: "", message: "" });
        },
        (error) => {
          console.log("FAILED...", error);
          setSuccessMessage("Failed to send message. Try again.");
        }
      )
      .finally(() => {
        setIsSending(false);
      });
  };

  // Function to scroll to a section with animation
  const scrollToSection = (ref, e) => {
    e.preventDefault();
    setIsMenuOpen(false);

    if (ref && ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop - 20,
        behavior: "smooth",
      });
    }
  };

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const slideIn = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="font-mangogrotesque bg-gradient-to-r from-[#ECECEC] via-red-100 to-blue-100 text-red-600 text-3xl md:text-4xl lg:text-5xl overflow-hidden">
      {/* Mobile Menu Button */}
      <motion.div
        className="lg:hidden fixed top-0 left-0 right-0 backdrop-blur-lg bg-white/40 rounded-b-lg flex flex-row justify-between items-center p-4 z-50"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
      >
        <div className="text-red-600 pl-4">AFO</div>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-red-600 focus:outline-none"
        >
          {isMenuOpen ? (
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </motion.div>

      {/* navbar hero section   */}
      <div
        ref={heroRef}
        className="mb-10 bg-[url('/whitewoman.png')] min-h-screen bg-center bg-no-repeat bg-[length:100%] lg:bg-[length:70%] relative "
      >
        <motion.div
          className={`fixed w-full z-40 bg-gradient-to-r from-[#ECECEC] via-red-100 to-blue-100 transition-all duration-300 ${
            isMenuOpen
              ? "h-screen flex items-center justify-center"
              : "h-0 overflow-hidden"
          } lg:static lg:h-auto lg:flex lg:justify-between lg:p-5 `}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="flex flex-col items-center space-y-10 text-6xl lg:flex-row lg:justify-between lg:space-y-0 lg:space-x-10 lg:w-full"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.a
              href="#works"
              className="hover:underline transition-all duration-300 hover:scale-105"
              onClick={(e) => scrollToSection(worksRef, e)}
              variants={fadeIn}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              WORK
            </motion.a>
            <motion.a
              href="#services"
              className="hover:underline transition-all duration-300 hover:scale-105"
              onClick={(e) => scrollToSection(servicesRef, e)}
              variants={fadeIn}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              SERVICES
            </motion.a>
            <motion.a
              href="#about"
              className="hover:underline transition-all duration-300 hover:scale-105"
              onClick={(e) => scrollToSection(aboutRef, e)}
              variants={fadeIn}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              ABOUT
            </motion.a>
            <motion.a
              href="#testimonial"
              className="hover:underline transition-all duration-300 hover:scale-105"
              onClick={(e) => scrollToSection(testimonialRef, e)}
              variants={fadeIn}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              TESTIMONIAL
            </motion.a>
            <motion.a
              href="#contact"
              className="hover:underline transition-all duration-300 hover:scale-105"
              onClick={(e) => scrollToSection(contactRef, e)}
              variants={fadeIn}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              CONTACT
            </motion.a>
          </motion.div>
        </motion.div>
        <div className="flex flex-row justify-between gap-5 px-5 lg:px-10">
          <div className=" lg:pt-20 pt-40">
            <motion.h1
              className="text-8xl md:text-9xl lg:text-[16rem] pl-20 lg:pl-60"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              WEB
            </motion.h1>
            <motion.p
              className="text-8xl md:text-9xl lg:text-[16rem] -mt-4 md:-mt-8 lg:-mt-16 leading-none"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              DEVELOPER
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                y: [0, -15, 0],
              }}
              transition={{
                duration: 1.5,
                delay: 1,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
            >
              <Image
                src="/scrolldown.png"
                alt="ecomimg"
                width={80}
                height={80}
                className="pt-40 brightness-0 invert sepia saturate-100 hue-rotate-0 contrast-100 [filter:invert(27%)_sepia(89%)_saturate(7481%)_hue-rotate(356deg)_brightness(90%)_contrast(80%)]"
              />
            </motion.div>
          </div>
          <motion.div
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl pt-60 sm:pt-60 md:pt-80 lg:pt-60 mt-5 lg:mt-24 px-4 sm:px-5 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto lg:mx-0 lg:pr-5"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h1 className="italic lg:text-right">
              A Web Developer with <br /> 3 years of experience <br /> building
              responsive, user-friendly <br /> websites and applications.
            </h1>
          </motion.div>
        </div>
        <motion.h1
          className="items-center flex justify-center pt-20 text-5xl md:text-4xl lg:text-7xl leading-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          TAYE{" "}
          <motion.span
            className="text-9xl md:text-8xl pl-5 lg:text-[16rem]"
            animate={{
              x: [0, 5, 0, -5, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
          >
            AFOLABI
          </motion.span>
        </motion.h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <Link
            href="https://www.linkedin.com/in/taiwo-afolabi-b5b827227"
            target="_blank"
            className="flex items-center justify-center pt-20 text-5xl space-x-2 hover:text-[#909090]"
          >
            <FaLinkedin /> <span>LinkedIn</span>
          </Link>
        </motion.div>
      </div>

      {/* works   */}
      <div
        ref={worksRef}
        className="bg-red-600 scroll-mt-20 transition-all duration-500"
      >
        <motion.h1
          className="text-9xl md:text-9xl lg:text-[16rem] text-[#ECECEC] text-center py-6"
          initial={{ opacity: 0, y: 50 }}
          animate={
            isWorksInView
              ? {
                  opacity: 1,
                  y: 0,
                  x: [0, 5, 0, -5, 0],
                }
              : {}
          }
          transition={{
            duration: 0.6,
            x: {
              duration: 4,
              repeat: isWorksInView ? Infinity : 0,
              repeatType: "loop",
              ease: "easeInOut",
            },
          }}
        >
          WORKS
        </motion.h1>
        {/* work cards   */}
        <div className="px-5 lg:px-0">
          {/* card 1   */}
          <motion.div
            className="flex flex-col lg:flex-row border-b-8 border-l-8 border-blue-500 rounded-xl justify-between mb-10 lg:mb-0 mx-5"
            initial={{ opacity: 0, y: 100 }}
            animate={isWorksInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="bg-[#ECECEC] lg:w-1/2 text-4xl md:text-5xl lg:text-7xl p-5 lg:p-10">
              <div>
                E-COMMERCE <br />
                WEBSITE <br />
                <span className="text-base md:text-lg lg:text-xl font-sora">
                  NEXTJS, DUMMYAPI, TAILWINDCSS
                </span>
              </div>
              <div className="pt-10 lg:pt-96 font-sora text-base md:text-lg lg:text-xl">
                <div>
                  An E-commerce web that allows you browse through diverse range
                  of meticulously crafted garments, designed to bring out your
                  individuality and cater to your sense of style.
                </div>
                <motion.a
                  href="https://shopnco.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 bg-red-600 font-mangogrotesque text-xl lg:text-3xl border-b-4 border-l-4 border-blue-500 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Project
                </motion.a>
              </div>
            </div>
            <div className="text-[#ECECEC] lg:w-1/2 lg:mt-0">
              <Image
                src="/newecommerce.png"
                alt="ecomimg"
                width={800}
                height={600}
                className="w-full lg:h-auto h-96 object-cover"
              />
            </div>
          </motion.div>

          {/* card 2   */}
          <motion.div
            className="flex flex-col lg:flex-row  border-b-8 border-l-8 border-blue-500 rounded-xl justify-between my-10 lg:my-5 mx-5"
            initial={{ opacity: 0, y: 100 }}
            animate={isWorksInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="bg-[#ECECEC] lg:w-1/2 text-4xl md:text-5xl lg:text-7xl p-5 lg:p-10">
              <div>
                CRYPTO
                <br />
                DASHBOARD <br />
                <span className="text-base md:text-lg lg:text-xl font-sora">
                  NEXTJS, COINGECKOAPI, TAILWINDCSS
                </span>
              </div>
              <div className="pt-10 lg:pt-96 font-sora text-base md:text-lg lg:text-xl">
                <div>
                  A cryptocurrency tracking dashboard with real-time data
                  fetching, dark mode, and a detailed coin info page.
                </div>
                <div>
                  <motion.a
                    href="https://tk-cryptodashboard.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 bg-red-600 font-mangogrotesque text-xl lg:text-3xl border-b-4 border-l-4 border-blue-500 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Project
                  </motion.a>
                </div>
              </div>
            </div>
            <div className="text-[#ECECEC] lg:w-1/2 lg:mt-0">
              <Image
                src="/newcrypto.png"
                alt="gcryptoimg"
                width={800}
                height={600}
                className="w-full lg:h-auto h-96 object-cover"
              />
            </div>
          </motion.div>

          {/* card 3  */}
          <motion.div
            className="flex flex-col lg:flex-row  border-b-8 border-l-8 border-blue-500 rounded-xl justify-between mt-10 lg:mt-5 mx-5"
            initial={{ opacity: 0, y: 100 }}
            animate={isWorksInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="bg-[#ECECEC] lg:w-1/2 text-4xl md:text-5xl lg:text-7xl p-5 lg:p-10">
              <div>
                INVOICE <br />
                GENERATOR <br />
                <span className="text-xl font-sora">
                  NEXTJS, CONTEXTAPI, TAILWINDCSS
                </span>
              </div>
              <div className="pt-10 lg:pt-96 font-sora text-base md:text-lg lg:text-xl">
                <div>
                  A web app that simplifies invoice creation with responsive
                  design, customizable themes, and real-time calculations.
                </div>
                <div>
                  <motion.a
                    href="https://free-invoice-generator.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 bg-red-600 font-mangogrotesque text-xl lg:text-3xl border-b-4 border-l-4 border-blue-500 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Project
                  </motion.a>
                </div>
              </div>
            </div>
            <div className="text-[#ECECEC] lg:w-1/2 lg:mt-0">
              <Image
                src="/newinvoice2.png"
                alt="ecomimg"
                width={800}
                height={600}
                className="w-full lg:h-auto h-96 object-cover"
              />
            </div>
          </motion.div>
        </div>

        {/* services   */}
        <div
          ref={servicesRef}
          className="bg-red-600 mt-10 lg:mt-6 scroll-mt-20 transition-all duration-500"
        >
          <motion.div
            className="text-[#ECECEC] text-center text-9xl lg:text-[13rem] py-5"
            initial={{ opacity: 0 }}
            animate={
              isServicesInView
                ? {
                    opacity: 1,
                    x: [0, 3, 0, -3, 0],
                  }
                : {}
            }
            transition={{
              duration: 0.6,
              x: {
                duration: 3,
                repeat: isServicesInView ? Infinity : 0,
                repeatType: "loop",
                ease: "easeInOut",
              },
            }}
          >
            (SERVICES)
          </motion.div>
          <div className="flex items-center justify-center min-h-screen px-5">
            <motion.div
              className="text-[#ECECEC] text-7xl md:text-6xl lg:text-[10rem] text-center space-y-10 lg:space-y-20"
              variants={staggerContainer}
              initial="hidden"
              animate={isServicesInView ? "visible" : "hidden"}
            >
              <motion.div variants={fadeIn}>WEB DEVELOPMENT</motion.div>
              <motion.div variants={fadeIn}>
                RESPONSIVE & FRIENDLY WEBSITES
              </motion.div>
              <motion.div variants={fadeIn}>VISUAL LOOKS & LAYOUT</motion.div>
              <motion.div variants={fadeIn}>INTERACTIVE ELEMENTS</motion.div>
            </motion.div>
          </div>
        </div>

        {/* about   */}
        <div
          ref={aboutRef}
          className="bg-[#ECECEC] scroll-mt-20 transition-all duration-500"
        >
          <div className="flex flex-col lg:flex-row justify-between px-5 lg:px-0">
            <motion.div
              className="pt-10 lg:pt-5 flex justify-center lg:block"
              initial={{ opacity: 0, x: -100 }}
              animate={isAboutInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <Image
                src="/IMG.png"
                alt="ecomimg"
                width={300}
                height={450}
                className="w-64 lg:w-80 h-auto"
              />
            </motion.div>

            <motion.div
              className="flex flex-row lg:flex-row  justify-between gap-5 lg:gap-10 pt-10 mt-10 lg:mt-0 px-5 lg:px-0"
              variants={staggerContainer}
              initial="hidden"
              animate={isAboutInView ? "visible" : "hidden"}
            >
              <motion.div
                className="font-sora font-medium text-xs lg:text-lg"
                variants={slideIn}
              >
                <span className="font-mangogrotesque font-light text-3xl lg:text-5xl">
                  TAIWO AFOLABI,
                </span>
                <br />
                a passionate Frontend Engineer
                <br />
                from Nigeria. I specialize in crafting
                <br />
                user-friendly and visually appealing
                <br />
                websites.
                <br />
                My Tech Stacks includes:
                <br />
                <span className="font-mangogrotesque font-light text-3xl lg:text-3xl">
                  HTML, CSS,JAVASCRIPT, REACTJS, NEXTJS,
                </span>
                <br />
                <span className="font-mangogrotesque font-light text-3xl lg:text-3xl">
                  TAILWINDCSS & TYPESCRIPT
                </span>
                <br />
                My long-term goal is to work on
                <br />
                innovative projects, build scalable
                <br />
                applications, and contribute
                <br />
                to open-source communities.
                <br />
              </motion.div>
              <motion.div
                className="font-sora font-medium text-xs lg:text-lg mt-36 lg:mt-0 lg:pr-10"
                variants={slideIn}
              >
                <span>When I'm not coding,</span>
                <br />
                I enjoy gaming,drawing,
                <br />
                and playing sports.These
                <br />
                hobbies keep me fit and
                <br />
                balanced. If you're ready
                <br />
                for a brand and website
                <br />
                that feels like home and
                <br />
                helps your business grow,
                <br />
                I'd love to hear from you.
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            className="flex flex-row lg:flex-row justify-between px-5 lg:px-0 pt-10 lg:pt-10"
            initial={{ opacity: 0 }}
            animate={isAboutInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="text-7xl sm:text-6xl lg:text-7xl">
              TAYE
              <br />
              AFO
            </div>
            <motion.div
              className="text-9xl sm:text-8xl md:text-[10rem] lg:text-[16rem] mt-5 lg:mt-0"
              animate={{
                x: [0, 4, 0, -4, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
            >
              ABOUT
            </motion.div>
          </motion.div>
        </div>

        {/* testimonials   */}
        <div
          ref={testimonialRef}
          className="bg-red-600 scroll-mt-20 transition-all duration-500"
        >
          <motion.div
            className="flex flex-col lg:flex-row gap-10 lg:gap-96 justify-between px-5 lg:px-0 pt-10 lg:pt-5"
            variants={staggerContainer}
            initial="hidden"
            animate={isTestimonialInView ? "visible" : "hidden"}
          >
            <motion.div
              className="flex justify-center pl-60 lg:block"
              variants={fadeIn}
            >
              <Image
                src="/IMG1.png"
                alt="ecomimg"
                width={500}
                height={650}
                className=" h-auto"
              />
            </motion.div>

            <motion.div
              className="text-[#ECECEC] text-5xl sm:text-4xl lg:text-7xl text-center lg:text-right px-5 lg:px-10 lg:pr-10"
              variants={fadeIn}
            >
              Working with Afolabi was an absolute game-changer for my brand.
            </motion.div>
          </motion.div>

          <motion.div
            className="flex flex-col lg:flex-row gap-5 lg:gap-5 mb-10 text-[#ECECEC] pt-20 lg:pt-40 justify-between px-5 lg:px-0"
            variants={staggerContainer}
            initial="hidden"
            animate={isTestimonialInView ? "visible" : "hidden"}
          >
            <div className="flex flex-row lg:flex-row gap-10 lg:gap-96">
              <motion.div
                className="font-sora font-bold text-xl text-center lg:text-left"
                variants={fadeIn}
                animate={{
                  x: [0, 2, 0, -2, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut",
                }}
              >
                (Testimonials)
              </motion.div>
              <motion.div
                className="  text-4xl text-center lg:text-left"
                variants={fadeIn}
              >
                Adeyemo Adebusuyi
                <div className="pt-5 lg:pt-64 ">Friend</div>
              </motion.div>
            </div>
            <motion.div
              className="font-sora text-xl lg:text-3xl font-bold text-center lg:text-right mt-5 lg:mt-0 lg:pr-10 lg:pr-72"
              variants={fadeIn}
            >
              He took the time to understand my vision and translated it into a
              clean, cohesive identity that truly reflects who I am and what I
              offer. The website he developed is not only visually stunning but
              also strategic and easy to navigate and use.
            </motion.div>
          </motion.div>
        </div>

        {/* contact   */}
        <div
          ref={contactRef}
          className="bg-[url('/IMG2.png')] bg-cover bg-center pb-10 inset-0 px-5 lg:px-0 scroll-mt-20 transition-all duration-500"
        >
          <motion.div
            className="flex justify-center items-center pt-10 text-6xl sm:text-5xl md:text-7xl lg:text-9xl text-[#ECECEC] text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={isContactInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            MAKE YOUR BRAND UNFORGETTABLE.
          </motion.div>
          <motion.div
            className="flex justify-center text-[#ECECEC] items-center pt-10 lg:pt-16 text-3xl lg:text-3xl"
            initial={{ opacity: 0, y: 50 }}
            animate={isContactInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Send a Message
          </motion.div>
          <motion.div
            className="flex justify-center text-[#ECECEC] items-center text-3xl lg:text-3xl"
            initial={{ opacity: 0, y: 50 }}
            animate={isContactInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            taiwoglory136@gmail.com
          </motion.div>

          {/* form   */}

          <motion.form
            onSubmit={handleSubmit}
            className="space-y-4 py-10  lg:py-5"
            initial={{ opacity: 0 }}
            animate={isContactInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="flex flex-col lg:flex-row justify-center px-5 lg:px-80 py-5 gap-5 lg:gap-10">
              <motion.input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 dark:text-black rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                required
                whileFocus={{ scale: 1.02 }}
              />
              <motion.input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 dark:text-black rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                required
                whileFocus={{ scale: 1.02 }}
              />
            </div>
            <div className="flex flex-col lg:flex-row justify-center px-5 lg:px-80 gap-5 lg:gap-10">
              <motion.input
                type="tel"
                name="phone"
                placeholder="Your Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 items-start dark:text-black rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                whileFocus={{ scale: 1.02 }}
              />
              <motion.textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                rows="2"
                className="w-full p-2 border border-gray-300 dark:text-black rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                required
                whileFocus={{ scale: 1.02 }}
              ></motion.textarea>
            </div>

            {/* Success Message */}
            {successMessage && (
              <motion.p
                className="text-green-600 text-lg flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                {successMessage}
              </motion.p>
            )}

            <motion.button
              type="submit"
              className={`flex items-center justify-center mx-auto p-3 rounded-md transition duration-300 ${
                isSending
                  ? "bg-gray-500 cursor-not-allowed"
                  : "bg-blue-500 hover:bg-blue-600 border-b-4 border-l-4 text-[#ECECEC]"
              }`}
              disabled={isSending}
              whileHover={isSending ? {} : { scale: 1.05 }}
              whileTap={isSending ? {} : { scale: 0.95 }}
            >
              {isSending ? "Sending..." : "Send Message"}
            </motion.button>
          </motion.form>

          <motion.div
            className="flex justify-center text-[#ECECEC] text-6xl sm:text-5xl md:text-7xl lg:text-9xl items-center pt-10 lg:pt-16 text-center px-5"
            initial={{ opacity: 0, y: 50 }}
            animate={isContactInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            UNLEASH YOUR BRAND'S POTENTIAL
          </motion.div>
        </div>

        {/* footer   */}
        <div className="bg-red-600">
          <motion.div
            className="flex flex-col lg:flex-row justify-between border-b border-[#ECECEC] pb-10 mx-5 text-[#ECECEC]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="pt-10 text-4xl lg:text-5xl text-center ">
              <div className="flex flex-col  lg:flex-col gap-5 lg:gap-10">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="https://x.com/afolabi_ta578?t=9Wp2w1ISKya5NA8vsnPkmA&s=09"
                    target="_blank"
                    className="flex items-center justify-center space-x-2 hover:text-[#909090]"
                  >
                    <FaTwitter /> <span>X (FORMERLY TWITTER)</span>
                  </Link>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="https://www.instagram.com/__taiwoafolabi?igsh=MWJ5OHQ3eTVud3d6Zw=="
                    target="_blank"
                    className="flex items-center justify-center space-x-2 hover:text-[#909090]"
                  >
                    <FaInstagram /> <span>INSTAGRAM</span>
                  </Link>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="https://www.linkedin.com/in/taiwo-afolabi-b5b827227"
                    target="_blank"
                    className="flex items-center justify-center space-x-2 hover:text-[#909090]"
                  >
                    <FaLinkedin /> <span>LINKEDIN</span>
                  </Link>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="https://github.com/folabteegee"
                    target="_blank"
                    className="flex items-center justify-center space-x-2 hover:text-[#909090]"
                  >
                    <FaGithub /> <span>GITHUB</span>
                  </Link>
                </motion.div>
              </div>
            </div>

            <motion.div
              className="flex justify-center lg:block mt-5 lg:mt-10"
              whileHover={{ rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image
                src="/IMG3.png"
                alt="ecomimg"
                width={200}
                height={200}
                className="w-40 h-40 lg:w-48 lg:h-48"
              />
            </motion.div>
          </motion.div>

          <motion.div
            className="text-[#ECECEC] text-center pt-20 lg:pt-48 text-9xl sm:text-7xl md:text-8xl lg:text-[26rem]"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{
              opacity: 1,
              scale: 1,
              x: [0, 6, 0, -6, 0],
            }}
            transition={{
              duration: 0.8,
              x: {
                duration: 6,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              },
            }}
            viewport={{ once: true }}
          >
            TAYE AFOLABI
          </motion.div>

          <motion.div
            className="flex flex-row lg:flex-row p-5 text-[#ECECEC] justify-between items-center gap-5 lg:gap-0"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div>TAYE AFOLABI</div>
            <div> © {new Date().getFullYear()}</div>
            <motion.div
              className="cursor-pointer hover:underline transition-all duration-300"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              BACK TO TOP
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default NavbarHero;
