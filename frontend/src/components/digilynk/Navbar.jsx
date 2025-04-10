"use client";

import React, { useState, useEffect } from "react";
import logo from "../../assets/icons/digilynk_dark.png";
import logoLight from "../../assets/icons/digilynk_light.png";
import { motion, AnimatePresence } from "framer-motion";
import { Squash as Hamburger } from "hamburger-react";
import { PulsatingButtonCustom } from "../magicui/PulsatingButtonCustom";
import { useNavigate } from "react-router-dom";
import { LucideMoon, LucideSun } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const navigate = useNavigate();

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest('.mobile-menu-container') &&
        !event.target.closest('.hamburger-react')) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  const navLinks = [
    { name: "HOME", href: "#home" },
    { name: "SERVICES", href: "#services" },
    { name: "ABOUT US", href: "#about" },
    { name: "PRICING", href: "#pricing" },
  ];

  const handleContactClick = () => {
    navigate("/contact");
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 h-20 flex shadow-xl shadow-black/10 ${darkMode ? 'bg-slate-950 border-gray-700' : 'bg-white/40 border-gray-500'} border-b-2 items-center justify-between p-2 px-4 sm:px-12 backdrop-blur-3xl z-50`}>
      {/* Logo and Brand */}
      <div className="flex items-center gap-x-2 text-2xl font-semibold">
        <img src={darkMode ? logoLight : logo} className="size-12" alt="LOGO" />
        <span className={`inline text-3xl font-bold ${darkMode ? 'text-blue-500' : 'text-zinc-800'}`}>
          Digilynk
        </span>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center gap-10">
        <ul className="flex font-semibold text-sm gap-x-2">
          {navLinks.map((link) => (
            <li
              key={link.name}
              className={`${darkMode ? 'hover:bg-gray-700 text-white' : 'hover:bg-zinc-800 text-zinc-800 hover:text-white'} px-3 py-2 rounded-md hover:border-b-blue-500 cursor-pointer transition`}
              onClick={() => navigate(link.href)}
            >
              {link.name}
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <button
            onClick={toggleDarkMode}
            className={`p-2 rounded-full ${darkMode ? 'bg-gray-700 text-yellow-300' : 'bg-gray-200 text-gray-700'}`}
            aria-label="Toggle dark mode"
          >
            {darkMode ? <LucideSun /> : <LucideMoon />}
          </button>

          <PulsatingButtonCustom
            pulseColor={darkMode ? "#3b82f6" : "#0096ff"}
            duration="3s"
            variant={darkMode ? "light" : "dark"}
            className="text-xl"
            onClick={handleContactClick}
          >
            CONTACT
          </PulsatingButtonCustom>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="lg:hidden flex items-center gap-4">
        <button
          onClick={toggleDarkMode}
          className={`p-2 rounded-full ${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-200 text-gray-700'}`}
          aria-label="Toggle dark mode"
        >
          {darkMode ? <LucideSun /> : <LucideMoon />}
        </button>

        <button
          className="focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <Hamburger
            toggled={isOpen}
            duration={0.4}
            toggle={setIsOpen}
            color={darkMode ? "#ffffff" : "#1f2937"}
          />
        </button>
      </div>

      {/* Original Style Mobile Menu - Not Full Page */}
      <AnimatePresence className="">
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: -0 }}
            exit={{ opacity: 1, x: 300 }}
            transition={{ type: "tween", duration: 0.5, ease: "easeOut" }}
            className={`lg:hidden absolute top-[calc(5rem)] right-0 w-64 h-[calc(100vh)] ${darkMode ? 'bg-slate-950' : 'bg-white'} text-white backdrop-blur-3xl flex justify-start mobile-menu-container`}
          >
            <ul className="flex flex-col items-start pt-8 px-6 gap-4 font-semibold w-full">
              <li className="text-3xl font-bold flex justify-start cursor-pointer transition w-full text-left py-4">
                Digilynk
              </li>
              {navLinks.map((link) => (
                <li
                  key={link.name}
                  className={`hover:text-blue-500 flex justify-start cursor-pointer transition w-full text-left py-2 ${darkMode ? 'text-gray-300' : 'text-gray-800'}`}
                  onClick={() => {
                    navigate(link.href);
                    setIsOpen(false);
                  }}
                >
                  {link.name}
                </li>
              ))}
              <li className="w-full text-left py-2">
                <PulsatingButtonCustom
                  intensity="low"
                  className="text-xl w-full"
                  pulseColor={darkMode ? "#3b82f6" : "#0096ff"}
                  onClick={handleContactClick}
                >
                  CONTACT
                </PulsatingButtonCustom>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}