"use client";
import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
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

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .send(
        "service_yvou6fs", // Replace with your EmailJS Service ID
        "template_oicz9nb", // Replace with your EmailJS Template ID
        formData,
        "aCQ7vMKnIUoM_c-fL" // Replace with your EmailJS Public Key (User ID)
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

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 seconds delay

    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <section
      id="contact"
      className="bg-[#E8E9E8] dark:text-white  dark:bg-gray-800 py-36 font-montserrat px-6"
    >
      <div className="max-w-6xl  duration-1000 opacity-0 translate-y-10 animate-fade-in-up mx-auto">
        <h2 className="text-3xl font-bold text-center dark:text-white text-[#494848] mb-8">
          Contact Me<span className="text-yellow-500"> .</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Side - Contact Details */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <FaMapMarkerAlt className="text-[#494848]  dark:text-white text-2xl" />
              <p className="text-[#494848]  dark:text-white">
                Ile-Ife, Osun state, Nigeria.
              </p>
            </div>

            <div className="flex items-center space-x-4">
              <FaEnvelope className="text-[#494848]  dark:text-white text-2xl" />
              <p className="text-[#494848]  dark:text-white">
                taiwoglory136@gmail.com
              </p>
            </div>

            <div className="flex items-center space-x-4">
              <FaPhone className="text-[#494848]  dark:text-white text-2xl" />
              <p className="text-[#494848]  dark:text-white">
                +234 906 012 2891
              </p>
            </div>

            <div className="flex items-center space-x-4">
              <FaLinkedin className="text-[#494848]  dark:text-white text-2xl" />
              <Link
                href="https://www.linkedin.com/in/taiwo-afolabi-b5b827227"
                target="_blank"
                className="text-[#494848]  dark:text-white hover:text-[#909090]"
              >
                LinkedIn
              </Link>
            </div>

            <div className="flex items-center space-x-4">
              <FaGithub className="text-[#494848]  dark:text-white text-2xl" />
              <Link
                href="https://github.com/Folabteegee"
                target="_blank"
                className="text-[#494848]  dark:text-white hover:text-[#909090]"
              >
                GitHub
              </Link>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-white dark:bg-gray-600 shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold dark:text-white text-[#494848] mb-4">
              Send Me a Message <span className="text-yellow-500"> .</span>
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 dark:text-black rounded-md focus:outline-none focus:ring-2 focus:ring-[#494848]"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300  dark:text-black rounded-md focus:outline-none focus:ring-2 focus:ring-[#494848]"
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Your Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300  dark:text-black rounded-md focus:outline-none focus:ring-2 focus:ring-[#494848]"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className="w-full p-3 border border-gray-300  dark:text-black rounded-md focus:outline-none focus:ring-2 focus:ring-[#494848]"
                required
              ></textarea>

              {/* Success Message */}
              {successMessage && (
                <p className="text-green-600 text-sm">{successMessage}</p>
              )}

              <button
                type="submit"
                className={`w-full py-3 rounded-md transition duration-300 ${
                  isSending
                    ? "bg-gray-500 cursor-not-allowed"
                    : "bg-yellow-500 hover:bg-yellow-600 text-white"
                }`}
                disabled={isSending}
              >
                {isSending ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
