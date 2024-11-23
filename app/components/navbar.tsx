"use client";

import React, { useState } from 'react';
import { Button } from "@/components/ui/button"

import { ModeToggle } from "@/components/mode-toggle";

const navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Button variant="ghost" onClick={toggleMenu}> Menu</Button>
      {/* <button
        className="fixed top-4 right-4 z-50 p-2 bg-gray-800 text-white rounded"
        onClick={toggleMenu}
      >
        ☰
      </button> */}
      <ModeToggle />
      <div
        className={`fixed inset-0 z-40 flex items-center justify-center bg-black bg-opacity-75 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0'
        } ${isOpen ? 'pointer-events-auto' : 'pointer-events-none delay-300'}`}
      >
        <div className="text-white text-2xl">
          <ul>
            <li className="mb-4"><a href="#home">Home</a></li>
            <li className="mb-4"><a href="#about">About</a></li>
            <li className="mb-4"><a href="#portfolio">Portfolio</a></li>
            <li className="mb-4"><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default navbar;