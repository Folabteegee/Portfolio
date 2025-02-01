"use client";
import React from "react";
import Link from "next/link";
import {
  FaTwitter,
  FaInstagram,
  FaTiktok,
  FaWhatsapp,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#D4D4D4] dark:bg-gray-700 text-[#494848] dark:text-white py-10 max-sm:py-20 font-montserrat">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8">
          {/* About*/}
          <div>
            <h3 className="border-b-2 border-black dark:border-white font-bold text-lg py-2">
              Taiwo A<span className="text-yellow-500"> .</span>
            </h3>
            <div className="mt-3 space-y-2">
              <h3>Frontend developer in Nigeria</h3>
              <h3>taiwoglory136gmail.com</h3>
              <h3>+234-906-0122-891</h3>
            </div>
          </div>

          {/* Pages */}
          <div>
            <h3 className="text-lg border-b-2  border-black dark:border-white py-2 font-bold">
              Pages <span className="text-yellow-500"> .</span>
            </h3>
            <ul className="mt-3 space-y-2">
              <li>
                <Link href="/" className="hover:text-[#909090]">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#909090]">
                  About
                </Link>
              </li>
              <li>
                <Link href="/project" className="hover:text-[#909090]">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/experience" className="hover:text-[#909090]">
                  Experience
                </Link>
              </li>
              <li>
                <a
                  href="/taiwoafolabiresume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#909090] hover:scale-110 transition-transform duration-300"
                >
                  Resume
                </a>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#909090]">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Work Contacts */}
          <div>
            <h3 className="text-lg border-b-2  border-black dark:border-white py-2 font-bold">
              Work Contact <span className="text-yellow-500"> .</span>
            </h3>
            <ul className="mt-3 space-y-2">
              <li>
                <Link
                  href="https://wa.me/2349060122891"
                  target="_blank"
                  className="flex items-center space-x-2 hover:text-[#909090]"
                >
                  <FaWhatsapp /> <span>WhatsApp</span>
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.linkedin.com/in/taiwo-afolabi-b5b827227"
                  target="_blank"
                  className="flex items-center space-x-2 hover:text-[#909090]"
                >
                  <FaLinkedin /> <span>LinkedIn</span>
                </Link>
              </li>
              <li>
                <Link
                  href="https://github.com/folabteegee"
                  target="_blank"
                  className="flex items-center space-x-2 hover:text-[#909090]"
                >
                  <FaGithub /> <span>GitHub</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Life */}
          <div>
            <h3 className="text-lg border-b-2  border-black dark:border-white py-2 font-bold">
              Social Life <span className="text-yellow-500"> .</span>
            </h3>
            <ul className="mt-3 space-y-2">
              <li>
                <Link
                  href="https://x.com/afolabi_ta578?t=9Wp2w1ISKya5NA8vsnPkmA&s=09"
                  target="_blank"
                  className="flex items-center space-x-2 hover:text-[#909090]"
                >
                  <FaTwitter /> <span>X (Formerly Twitter)</span>
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.instagram.com/__taiwoafolabi?igsh=MWJ5OHQ3eTVud3d6Zw=="
                  target="_blank"
                  className="flex items-center space-x-2 hover:text-[#909090]"
                >
                  <FaInstagram /> <span>Instagram</span>
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.tiktok.com/@.tayelolu?_t=ZM-8tLZhUXmaQP&_r=1"
                  target="_blank"
                  className="flex items-center space-x-2 hover:text-[#909090]"
                >
                  <FaTiktok /> <span>TikTok</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-10 text-center text-sm">
          <p>
            © {new Date().getFullYear()} Taiwo Afolabi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
