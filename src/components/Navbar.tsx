
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-lg">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <div className="bg-primary p-2 rounded-md">
            <span className="text-primary-foreground font-bold text-lg">UV</span>
          </div>
          <span className="font-bold text-lg md:text-xl hidden sm:inline-block">UniVista</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/dashboard" className="text-sm font-medium transition-colors hover:text-primary">
            Dashboard
          </Link>
          <Link to="/courses" className="text-sm font-medium transition-colors hover:text-primary">
            Courses
          </Link>
          <Link to="/attendance" className="text-sm font-medium transition-colors hover:text-primary">
            Attendance
          </Link>
          <Link to="/exams" className="text-sm font-medium transition-colors hover:text-primary">
            Exams
          </Link>
          <Link to="/leaves" className="text-sm font-medium transition-colors hover:text-primary">
            Leaves
          </Link>
        </nav>
        
        <div className="flex items-center space-x-4">
          <ThemeToggle />
          
          {/* User Menu (simplified) */}
          <Button variant="outline" size="sm" className="hidden md:flex">
            <span>John Doe</span>
          </Button>
          
          {/* Mobile Menu Button */}
          <button
            className="inline-flex md:hidden items-center justify-center rounded-md p-2 text-foreground"
            onClick={toggleMenu}
          >
            <span className="sr-only">Open menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 top-16 z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto bg-background p-6 pb-32 shadow-lg md:hidden",
          isMenuOpen ? "animate-fade-in" : "animate-fade-out pointer-events-none hidden"
        )}
      >
        <div className="relative z-20 grid gap-6 rounded-md bg-background p-4">
          <Link
            to="/dashboard"
            className="flex items-center space-x-2"
            onClick={() => setIsMenuOpen(false)}
          >
            <span>Dashboard</span>
          </Link>
          <Link
            to="/courses"
            className="flex items-center space-x-2"
            onClick={() => setIsMenuOpen(false)}
          >
            <span>Courses</span>
          </Link>
          <Link
            to="/attendance"
            className="flex items-center space-x-2"
            onClick={() => setIsMenuOpen(false)}
          >
            <span>Attendance</span>
          </Link>
          <Link
            to="/exams"
            className="flex items-center space-x-2"
            onClick={() => setIsMenuOpen(false)}
          >
            <span>Exams</span>
          </Link>
          <Link
            to="/leaves"
            className="flex items-center space-x-2"
            onClick={() => setIsMenuOpen(false)}
          >
            <span>Leaves</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
