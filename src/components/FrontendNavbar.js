'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function FrontendNavbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  if (!mounted) {
    return (
      <nav className="bg-white shadow-lg py-4 fixed w-full z-10 top-0 pt-6">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-[#f46d22] rounded-lg p-2 hover:bg-orange-50 transition duration-300">
            MyCo
          </Link>
          <div className="hidden md:flex space-x-6">
            <Link href="/" className="nav-link text-gray-600 hover:text-[#f46d22] px-3 py-2 rounded-lg transition duration-300">
              Home
            </Link>
            <Link href="/services" className="nav-link text-gray-600 hover:text-[#f46d22] px-3 py-2 rounded-lg transition duration-300">
              Services
            </Link>
            <Link href="/about" className="nav-link text-gray-600 hover:text-[#f46d22] px-3 py-2 rounded-lg transition duration-300">
              About
            </Link>
            <Link href="/testimonials" className="nav-link text-gray-600 hover:text-[#f46d22] px-3 py-2 rounded-lg transition duration-300">
              Testimonials
            </Link>
            <Link href="/contact" className="nav-link text-gray-600 hover:text-[#f46d22] px-3 py-2 rounded-lg transition duration-300">
              Contact
            </Link>
            <Link href="/login" className="bg-[#f46d22] text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition duration-300">
              Login
            </Link>
          </div>
        </div>
      </nav>
    );
  }

  return (
    <nav className="bg-white shadow-lg py-4 fixed w-full z-10 top-0 pt-6">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-[#f46d22] rounded-lg p-2 hover:bg-orange-50 transition duration-300">
          MyCo
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="nav-link text-gray-600 hover:text-[#f46d22] px-3 py-2 rounded-lg transition duration-300">
            Home
          </Link>
          <Link href="/services" className="nav-link text-gray-600 hover:text-[#f46d22] px-3 py-2 rounded-lg transition duration-300">
            Services
          </Link>
          <Link href="/about" className="nav-link text-gray-600 hover:text-[#f46d22] px-3 py-2 rounded-lg transition duration-300">
            About
          </Link>
          <Link href="/testimonials" className="nav-link text-gray-600 hover:text-[#f46d22] px-3 py-2 rounded-lg transition duration-300">
            Testimonials
          </Link>
          <Link href="/contact" className="nav-link text-gray-600 hover:text-[#f46d22] px-3 py-2 rounded-lg transition duration-300">
            Contact
          </Link>
          <Link href="/login" className="bg-[#f46d22] text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition duration-300">
            Login
          </Link>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMobileMenu}
          className="md:hidden text-gray-600 focus:outline-none focus:text-[#f46d22] transition duration-300"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      
      {/* Mobile Menu */}
      <div className={`md:hidden bg-white py-2 shadow-md ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
        <Link href="/" className="block px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-[#f46d22] rounded-lg transition duration-300">
          Home
        </Link>
        <Link href="/services" className="block px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-[#f46d22] rounded-lg transition duration-300">
          Services
        </Link>
        <Link href="/about" className="block px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-[#f46d22] rounded-lg transition duration-300">
          About
        </Link>
        <Link href="/testimonials" className="block px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-[#f46d22] rounded-lg transition duration-300">
          Testimonials
        </Link>
        <Link href="/contact" className="block px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-[#f46d22] rounded-lg transition duration-300">
          Contact
        </Link>
        <Link href="/login" className="block px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-[#f46d22] rounded-lg transition duration-300">
          Login
        </Link>
      </div>
    </nav>
  );
}
