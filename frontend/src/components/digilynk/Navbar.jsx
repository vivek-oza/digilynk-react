"use client";

import React, { useState } from 'react';
import logo from '../../assets/icons/digilynk_dark.png';
import { InteractiveHoverButton } from '../magicui/interactive-hover-button';
import { motion, AnimatePresence, easeInOut } from 'framer-motion';
import { Squash as Hamburger } from 'hamburger-react'
import { RainbowButtonCustom } from "../magicui/rainbow-button-custom";
import { RainbowButton } from '../magicui/rainbow-button';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='fixed top-0 left-0 right-0 h-20 flex shadow-xl shadow-black/10 border-b-2 items-center justify-between p-2 px-4 sm:px-12  border-gray-500 bg-white/25 backdrop-blur-3xl z-50'>
      <div className='flex items-center gap-x-2 text-2xl font-semibold'>
        <img src={logo} className='size-12' alt="LOGO" />
        <span className="inline text-3xl font-bold">Digilynk</span>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center gap-10">
        <ul className='flex font-semibold text-xs gap-x-2'>
          <li className='hover:bg-zinc-800 hover:text-white px-3 py-2 rounded-md hover:border-b-blue-500   cursor-pointer transition'>HOME</li>
          <li className='hover:bg-zinc-800 hover:text-white px-3 py-2 rounded-md hover:border-b-blue-500   cursor-pointer transition'>SERVICES</li>
          <li className='hover:bg-zinc-800 hover:text-white px-3 py-2 rounded-md hover:border-b-blue-500   cursor-pointer transition'>ABOUT US</li>
          <li className='hover:bg-zinc-800 hover:text-white px-3 py-2 rounded-md hover:border-b-blue-500   cursor-pointer transition'>PRICING</li>
          <li className='hover:bg-zinc-800 hover:text-white px-3 py-2 rounded-md hover:border-b-blue-500   cursor-pointer transition'>CONTACT</li>
        </ul>
        {/* <RainbowButtonCustom intensity="subtle">Let's Talk 👋</RainbowButtonCustom> */}
        <RainbowButton theme='light' intensity='high' className="hover:scale-110 transition">Let's Talk 👋</RainbowButton>
      </div>

      {/* Mobile Hamburger Button */}
      <button
        className="lg:hidden p-2 focus:outline-none"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <Hamburger toggled={isOpen} duration={0.4} toggle={setIsOpen} />
      </button>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 1, x: 999 }}
            animate={{ opacity: 1, x: 180 }}
            exit={{ opacity: 1, x: 999 }}
            transition={{ type: "tween", duration: 0.5, ease: "easeOut" }}
            className="lg:hidden absolute top-19.5 left-0 right-0 h-screen bg-black text-white backdrop-blur-3xl flex justify-start"
          >
            <ul className='flex flex-col items-center pt-8 px-4 gap-4 font-semibold'>
              <li className='text-3xl font-bold flex justify-start cursor-pointer transition w-full text-center py-4'>Digilynk</li>
              <li className='hover:text-blue-500  flex justify-start cursor-pointer transition w-full text-center py-2'>HOME</li>
              <li className='hover:text-blue-500 flex justify-start cursor-pointer transition w-full text-center py-2'>SERVICES</li>
              <li className='hover:text-blue-500 flex justify-start cursor-pointer transition w-full text-center py-2'>ABOUT US</li>
              <li className='hover:text-blue-500 flex justify-start cursor-pointer transition w-full text-center py-2'>PRICING</li>
              <li className='hover:text-blue-500 flex justify-start cursor-pointer transition w-full text-center py-2'>CONTACT</li>
              <li className='w-full text-center py-2'>

                {/* <RainbowButtonCustom intensity="subtle" className="">Let's Talk 👋</RainbowButtonCustom> */}
                <RainbowButton intensity="subtle" className="hover:scale-110 hover:animate-caret-blink transition-all ">Let's Talk 👋</RainbowButton>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}