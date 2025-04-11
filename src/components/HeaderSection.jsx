import React, { useState } from 'react'
import { IoIosSearch, IoIosMenu, IoIosClose } from "react-icons/io";
import LightDarkToggle from "./UI/LightDarkToggle"

export default function HeaderSection() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-[#1C1C1C] text-white">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div>
            <h1 className="text-xl font-bold">REVISION</h1>
          </div>

          {/* Desktop Navigation and Icons */}
          <div className="hidden md:flex items-center gap-8">
            <nav>
              <ul className="flex items-center gap-5">
                <li><a href="#Homepages" className="hover:text-gray-300">Homepages</a></li>
                <li><a href="#Features" className="hover:text-gray-300">Features</a></li>
                <li><a href="#About" className="hover:text-gray-300">About</a></li>
                <li><a href="#Contacts" className="hover:text-gray-300">Contact</a></li>
              </ul>
            </nav>
            <div className="flex items-center gap-3">
              <button className="hover:text-gray-300">
                <IoIosSearch size={24} />
              </button>
              <LightDarkToggle />
              <button className="btn border border-white py-2 px-4 md:px-10 rounded-full hover:bg-white hover:text-[#1C1C1C] transition-colors">
                Buy Now
              </button>
            </div>
          </div>

          {/* Mobile Menu Button and Buy Button */}
          <div className="flex items-center gap-4 md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-gray-300"
            >
              {isMenuOpen ? <IoIosClose size={30} /> : <IoIosMenu size={30} />}
            </button>
            <button className="btn border border-white py-2 px-4 rounded-full hover:bg-white hover:text-[#1C1C1C] transition-colors">
              Buy Now
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4">
            <nav>
              <ul className="flex flex-col items-center gap-4">
                <li><a href="#Homepages" className="hover:text-gray-300">Homepages</a></li>
                <li><a href="#Features" className="hover:text-gray-300">Features</a></li>
                <li><a href="#About" className="hover:text-gray-300">About</a></li>
                <li><a href="#Contacts" className="hover:text-gray-300">Contact</a></li>
              </ul>
            </nav>
            <div className="flex justify-center items-center gap-3 mt-6">
              <button className="hover:text-gray-300">
                <IoIosSearch size={24} />
              </button>
              <LightDarkToggle />
            </div>
          </div>
        )}
      </div>
    </header>
  )
}