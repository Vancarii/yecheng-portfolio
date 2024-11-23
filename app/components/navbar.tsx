"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";

import { LayoutGrid } from "lucide-react";

import { ModeToggle } from "@/components/mode-toggle";

const navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <div className="flex justify-between items-center p-16">
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleMenu}
          className="p-4"
        >
          <LayoutGrid />
        </Button>

        <ModeToggle />
        <div
          className={`fixed inset-0 z-40 flex items-center justify-center bg-menuBackground transition-opacity duration-300 ${
            isOpen ? "opacity-100" : "opacity-0"
          } 
          ${isOpen ? "pointer-events-auto" : "pointer-events-none"}
          `}
        >
          <div className="text-2xl pointer-events-none">
            <ul>
              <li className="mb-4">
                <a href="#home">Home</a>
              </li>
              <li className="mb-4">
                <a href="#about">About</a>
              </li>
              <li className="mb-4">
                <a href="#portfolio">Portfolio</a>
              </li>
              <li className="mb-4">
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default navbar;
