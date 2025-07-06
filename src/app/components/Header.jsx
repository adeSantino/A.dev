// src/app/components/Header.jsx
"use client";
import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi"; // Import icons for menu toggle

const Header = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage mobile menu visibility

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="text-white font-inter antialiased">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-90 backdrop-blur-sm p-4 shadow-lg">
        <div className="container mx-auto flex justify-between items-center px-4">
          {/* Logo/Name - Simple, bold text */}
          <a
            href="#"
            className="text-2xl font-bold rounded-md hover:text-gray-300 transition-colors duration-300"
          >
            Dan Adrianne
          </a>

          {/* Mobile Menu Toggle Button (Hamburger Icon) */}
          <button
            className="md:hidden text-white text-3xl focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle Navigation"
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>

          {/* Desktop Navigation Links */}
          <ul className="hidden md:flex space-x-6">
            <li>
              <a
                href="#about"
                className="text-lg font-medium rounded-md hover:text-gray-300 transition-colors duration-300"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="text-lg font-medium rounded-md hover:text-gray-300 transition-colors duration-300"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-lg font-medium rounded-md hover:text-gray-300 transition-colors duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Mobile Menu (visible when isOpen is true) */}
        {/*
          We use `md:hidden` on the ul above and `md:flex` below to hide/show
          the mobile menu based on screen size. The `transform` and `transition`
          classes add a slide-down animation.
        */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <ul className="flex flex-col items-center space-y-4 pt-4 pb-2">
            <li>
              <a
                href="#about"
                className="text-lg font-medium hover:text-gray-300 transition-colors duration-300 py-2 block"
                onClick={toggleMenu} // Close menu on link click
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="text-lg font-medium hover:text-gray-300 transition-colors duration-300 py-2 block"
                onClick={toggleMenu}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-lg font-medium hover:text-gray-300 transition-colors duration-300 py-2 block"
                onClick={toggleMenu}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;