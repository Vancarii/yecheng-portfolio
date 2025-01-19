"use client";

import React, { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { LayoutGrid, X } from "lucide-react";
import { ModeToggle } from "@/components/mode-toggle";
import Link from "next/link";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) {
        toggleMenu();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, toggleMenu]);

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <div className="flex justify-between items-center p-8">
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleMenu}
          className="p-4 bg-white bg-opacity-10 backdrop-blur-md border border-white border-opacity-20 rounded-lg"
        >
          <LayoutGrid />
        </Button>

        <ModeToggle />
      </div>
      <div
        className={`fixed inset-0 z-40 flex items-center justify-center bg-menuBackground transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0"
        } ${isOpen ? "pointer-events-auto" : "pointer-events-none"}`}
      >
        <div className="relative flex justify-center items-center w-full h-full">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMenu}
            className="absolute top-8 left-8 p-4 bg-white bg-opacity-10 backdrop-blur-md border border-white border-opacity-20 rounded-lg"
          >
            <X />
          </Button>
          <ul className="flex flex-col items-center space-y-6">
            <li>
              <Link href="/pages/landing">
                <Button
                  variant="outline"
                  onClick={toggleMenu}
                  className="p-6 text-xl bg-white bg-opacity-10 backdrop-blur-md border border-white border-opacity-20 rounded-lg"
                >
                  Home
                </Button>
              </Link>
            </li>
            <li>
              <Link href="/pages/about">
                <Button
                  variant="outline"
                  onClick={toggleMenu}
                  className="p-6 text-xl bg-white bg-opacity-10 backdrop-blur-md border border-white border-opacity-20 rounded-lg"
                >
                  About
                </Button>
              </Link>
            </li>
            <li>
              <Link href="/pages/projects">
                <Button
                  variant="outline"
                  onClick={toggleMenu}
                  className="p-6 text-xl bg-white bg-opacity-10 backdrop-blur-md border border-white border-opacity-20 rounded-lg"
                >
                  Projects
                </Button>
              </Link>
            </li>
            <li>
              <Link href="/pages/contact">
                <Button
                  variant="outline"
                  onClick={toggleMenu}
                  className="p-6 text-xl bg-white bg-opacity-10 backdrop-blur-md border border-white border-opacity-20 rounded-lg"
                >
                  Contact
                </Button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
