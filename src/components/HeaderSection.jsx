import React, { useState } from 'react';
import { IoIosSearch } from "react-icons/io";
import { MdMenu, MdClose } from "react-icons/md";
import LightDarkToggle from "./UI/LightDarkToggle";

export default function HeaderSection() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-[#1C1C1C] text-white">
      <div className="flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <h1 className="text-xl font-bold">REVISION</h1>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 text-sm">
          <ul className="flex gap-6 items-center">
            <li><a href="#Homepages" className="hover:text-amber-400">Homepages</a></li>
            <li><a href="#Features" className="hover:text-amber-400">Features</a></li>
            <li><a href="#About" className="hover:text-amber-400">About</a></li>
            <li><a href="#Contacts" className="hover:text-amber-400">Contact</a></li>
          </ul>
        </nav>

        {/* Right Side Icons */}
        <div className="hidden md:flex items-center gap-4">
          <IoIosSearch size={24} className="cursor-pointer" />
          <LightDarkToggle />
          <button className="border border-white py-2 px-6 rounded-full hover:bg-white hover:text-black transition-all">
            Buy Now
          </button>
        </div>

        {/* Mobile Toggle Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <MdClose size={28} /> : <MdMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4">
          <ul className="flex flex-col gap-4 text-sm">
            <li><a href="#Homepages" className="hover:text-amber-400">Homepages</a></li>
            <li><a href="#Features" className="hover:text-amber-400">Features</a></li>
            <li><a href="#About" className="hover:text-amber-400">About</a></li>
            <li><a href="#Contacts" className="hover:text-amber-400">Contact</a></li>
          </ul>
          <div className="flex gap-4 mt-4 items-center">
            <IoIosSearch size={24} />
            <LightDarkToggle />
            <button className="border border-white py-2 px-4 rounded-full hover:bg-white hover:text-black transition-all">
              Buy Now
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
