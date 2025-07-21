'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-lg py-4 fixed w-full z-10 top-0 pt-6">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <a href="#" className="text-2xl font-bold text-[#f46d22] rounded-lg p-2 hover:bg-orange-50 transition duration-300">MyCo</a>
          <div className="hidden md:flex space-x-6">
            <Link href="/" className="nav-link text-gray-600 hover:text-[#f46d22] px-3 py-2 rounded-lg transition duration-300">Home</Link>
            <Link href="/services" className="nav-link text-gray-600 hover:text-[#f46d22] px-3 py-2 rounded-lg transition duration-300">Services</Link>
            <Link href="/about" className="nav-link text-gray-600 hover:text-[#f46d22] px-3 py-2 rounded-lg transition duration-300">About</Link>
            <Link href="/testimonials" className="nav-link text-gray-600 hover:text-[#f46d22] px-3 py-2 rounded-lg transition duration-300">Testimonials</Link>
            <Link href="/contact" className="nav-link text-gray-600 hover:text-[#f46d22] px-3 py-2 rounded-lg transition duration-300">Contact</Link>
          </div>
          {/* Mobile Menu Button */}
          <button id="mobile-menu-button" className="md:hidden text-gray-600 focus:outline-none focus:text-[#f46d22] transition duration-300">
            <i className="fas fa-bars text-2xl"></i>
          </button>
        </div>
        {/* Mobile Menu */}
        <div id="mobile-menu" className="hidden md:hidden bg-white py-2 shadow-md">
          <a href="#home" className="block px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-[#f46d22] rounded-lg transition duration-300">Home</a>
          <a href="#services" className="block px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-[#f46d22] rounded-lg transition duration-300">Services</a>
          <a href="#about" className="block px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-[#f46d22] rounded-lg transition duration-300">About</a>
          <a href="#testimonials" className="block px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-[#f46d22] rounded-lg transition duration-300">Testimonials</a>
          <a href="#contact" className="block px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-[#f46d22]  rounded-lg transition duration-300">Contact</a>
        </div>
        
    </nav>
  );
}
