import React from 'react'
import Image  from "next/image";
import { FaPhone } from "react-icons/fa6";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

const Header = () => {
  return (
    <nav className="flex items-center justify-between fixed w-full px-8 py-4 bg-white shadow-sm top-0 z-50">
      <div className="flex items-center space-x-2">
        <a href="/" className="text-md lg:text-xl font-bold text-[#5A3E2B] flex items-center gap-2">
        <Image src="/logo.svg" alt="Floch Construction" width={40} height={40} />
          Floch Construction
        </a>
      </div>

      <ul className="hidden lg:flex space-x-8 text-[#5A3E2B] font-medium ">
        <li><a href="#" className="hover:text-[#A87B5C] transition">Accueil</a></li>
        <li><a href="#" className="hover:text-[#a58068] transition">Portfolio</a></li>
        <li><a href="#" className="hover:text-[#A87B5C] transition">Services</a></li>
        <li><a href="#" className="hover:text-[#A87B5C] transition">À propos</a></li>
        <li><a href="#" className="hover:text-[#A87B5C] transition">Contact</a></li>
      </ul>

      <a
        href="tel:+330601323297"
        className="hidden lg:flex items-center space-x-2 bg-[#A87B5C] text-white font-medium px-5 py-2 rounded-md shadow-md hover:bg-[#8C6249] transition"
      >
        <FaPhone className="w-5 h-5" />
        <span>Appeler</span>
      </a>

	  <div className="lg:hidden">
		<button className="text-[#5A3E2B] focus:outline-none">
		  <HiOutlineMenuAlt3 className="w-8 h-8" />
		</button>
	  </div>
    </nav>
  );
}

export default Header