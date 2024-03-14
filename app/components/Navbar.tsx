"use client";
import React, { useState } from "react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const closeNavbar = () => {
    setIsOpen(false);
  };

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav className="bg-cyan-900 fixed w-full top-0 bg-opacity-25 backdrop-filter backdrop-blur-lg py-4 mb-10">
      <div className="max-w-8xl mx-auto px-4">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center" onClick={handleLogoClick}>
            <a href="/" className="text-white font-bold">
              Logo
            </a>
          </div>

          {/* Hamburger menu button for mobile */}
          <div className="flex md:hidden">
            <button
              className="flex items-center justify-center p-3 text-white-400"
              onClick={toggleNavbar}
            >
              <svg
                className={`${isOpen ? "hidden" : "block"} h-6 w-6`}
                stroke="white"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
              <svg
                className={`${isOpen ? "block" : "hidden"} h-6 w-6`}
                stroke="white"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Navbar links */}
          <div className="hidden md:flex md:items-center md:ml-6">
            <div className="flex">
              <a
                href="/randomdogs"
                className="px-3 py-2 text-sm font-medium text-white hover:underline"
              >
                Random dogs
              </a>
              <a
                href="/search"
                className="px-3 py-2 text-sm font-medium text-white hover:underline"
              >
                Dog breeds
              </a>
              <a
                href="/dogfacts"
                className="px-3 py-2 text-sm font-medium text-white hover:underline"
              >
                Dog facts
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:hidden transition-all duration-300 ease-in-out`}
        onMouseLeave={closeNavbar}
      >
        <div className="px-2 pt-2 pb-3 sm:px-3">
          <a
            href="#"
            className="flex justify-center items-center px-3 py-2 text-base font-medium text-white rounded-md hover:underline"
          >
            Random dogs
          </a>
          <a
            href="#"
            className="flex justify-center items-center px-3 py-2 text-base font-medium text-white rounded-md hover:underline"
          >
            Dog breeds
          </a>
          <a
            href="#"
            className="flex justify-center items-center px-3 py-2 text-base font-medium text-white rounded-md hover:underline"
          >
            Dog facts
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
