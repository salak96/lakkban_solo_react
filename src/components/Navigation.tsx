import React from 'react';
import { Package } from 'lucide-react';

export function Navigation() {
  return (
    <nav className="fixed w-full bg-white shadow-sm z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Package className="h-8 w-8 text-blue-600" />
          <span className="text-xl font-bold text-gray-800">Lakban Solo</span>
        </div>
        <div className="hidden md:flex space-x-8">
          <a href="#home" className="text-gray-600 hover:text-blue-600">Home</a>
          <a href="#about" className="text-gray-600 hover:text-blue-600">About</a>
          <a href="#products" className="text-gray-600 hover:text-blue-600">Products</a>
          <a href="#contact" className="text-gray-600 hover:text-blue-600">Contact</a>
        </div>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300">
          ORDER NOW 
        </button>
      </div>
    </nav>
  );
}