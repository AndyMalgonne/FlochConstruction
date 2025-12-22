"use client";
import React from 'react'
import Image from "next/image";
import { FaPhone } from "react-icons/fa6";
import Link from "next/link"

const Header = () => {
	return (
		<>
			<nav className="flex items-center justify-between fixed w-full px-4 sm:px-8 py-4 bg-white shadow-sm top-0 z-50">
				<div className="flex items-center space-x-2">
					<Link href="/" className="text-sm sm:text-md lg:text-xl font-bold text-[#5A3E2B] flex items-center gap-2">
						<Image src="/logo.png" alt="Floch Construction" width={32} height={32} className="sm:w-10 sm:h-10" />
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

				<div className="flex items-center gap-4">
					<a
						href="tel:+33601322997"
						className="flex items-center space-x-2 bg-[#A87B5C] text-white font-medium px-4 py-2 rounded-md shadow-md hover:bg-[#8C6249] transition text-sm sm:text-base"
					>
						<FaPhone className="w-4 h-4 sm:w-5 sm:h-5" />
						<span>Appeler</span>
					</a>
				</div>
			</nav>
		</>
	);
}

export default Header;