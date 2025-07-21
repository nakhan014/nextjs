'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Footer() {

  return (
    <footer className="bg-gray-900 text-white py-10">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 MyCo. All rights reserved.</p>
          <div className="flex justify-center space-x-6 mt-4">
            <a href="#" className="text-gray-400 hover:text-white transition duration-300"><i className="fab fa-facebook-f text-xl"></i></a>
            <a href="#" className="text-gray-400 hover:text-white transition duration-300"><i className="fab fa-twitter text-xl"></i></a>
            <a href="#" className="text-gray-400 hover:text-white transition duration-300"><i className="fab fa-linkedin-in text-xl"></i></a>
            <a href="#" className="text-gray-400 hover:text-white transition duration-300"><i className="fab fa-instagram text-xl"></i></a>
          </div>
        </div>
      </footer>
  );
} 