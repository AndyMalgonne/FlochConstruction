"use client";
import React, { useState } from 'react'
import Image  from "next/image";
import { FaPhone } from "react-icons/fa6";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import Link from "next/link"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="flex items-center justify-between fixed w-full px-4 sm:px-8 py-4 bg-white shadow-sm top-0 z-50">
        <div className="flex items-center space-x-2">
          <Link href="/" className="text-sm sm:text-md lg:text-xl font-bold text-[#5A3E2B] flex items-center gap-2">
            <Image src="/logo.svg" alt="Floch Construction" width={32} height={32} className="sm:w-10 sm:h-10" />
            <span className="hidden sm:inline">Floch Construction</span>
          </Link>
        </div>

        <ul className="hidden lg:flex space-x-8 text-[#5A3E2B] font-medium">
          <li><a href="#hero" className="hover:text-[#A87B5C] transition">Accueil</a></li>
          <li><a href="#services" className="hover:text-[#A87B5C] transition">Services</a></li>
          <li><a href="#portfolio" className="hover:text-[#a58068] transition">Portfolio</a></li>
          <li><a href="#about" className="hover:text-[#A87B5C] transition">À propos</a></li>
          <li><a href="#contact" className="hover:text-[#A87B5C] transition">Contact</a></li>
        </ul>

        <a
          href="tel:+330601323297"
          className="hidden lg:flex items-center space-x-2 bg-[#A87B5C] text-white font-medium px-5 py-2 rounded-md shadow-md hover:bg-[#8C6249] transition"
        >
          <FaPhone className="w-5 h-5" />
          <span>Appeler</span>
        </a>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden text-[#5A3E2B] focus:outline-none"
        >
          {isMenuOpen ? <IoClose className="w-7 h-7" /> : <HiOutlineMenuAlt3 className="w-7 h-7" />}
        </button>
      </nav>

      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-40 pt-20 lg:hidden">
          <ul className="flex flex-col items-center space-y-6 text-[#5A3E2B] font-medium text-lg mt-8">
            <li><a href="#hero" onClick={() => setIsMenuOpen(false)} className="hover:text-[#A87B5C] transition">Accueil</a></li>
            <li><a href="#services" onClick={() => setIsMenuOpen(false)} className="hover:text-[#A87B5C] transition">Services</a></li>
            <li><a href="#portfolio" onClick={() => setIsMenuOpen(false)} className="hover:text-[#A87B5C] transition">Portfolio</a></li>
            <li><a href="#about" onClick={() => setIsMenuOpen(false)} className="hover:text-[#A87B5C] transition">À propos</a></li>
            <li><a href="#contact" onClick={() => setIsMenuOpen(false)} className="hover:text-[#A87B5C] transition">Contact</a></li>
            <li className="pt-4">
              <a
                href="tel:+330601323297"
                className="flex items-center space-x-2 bg-[#A87B5C] text-white font-medium px-6 py-3 rounded-md shadow-md hover:bg-[#8C6249] transition"
              >
                <FaPhone className="w-5 h-5" />
                <span>Appeler</span>
              </a>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}

export default Header;