"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Gallery", href: "#gallery" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 h-16 ${
          isScrolled
            ? "bg-canvas/90 backdrop-blur-md border-b border-hairline/50 shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 h-full flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex flex-col group">
            <span className="font-serif text-lg md:text-xl font-bold tracking-tight text-ink">
              SANGEETHA LAHARI
            </span>
            <span className="font-sans text-[10px] tracking-[0.2em] font-semibold text-muted -mt-1 group-hover:text-brand-pink transition-colors">
              EVENTS & CELEBRATIONS
            </span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-sans text-sm font-medium text-muted hover:text-ink transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-brand-pink after:transition-all hover:after:w-full"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 bg-primary hover:bg-primary-active text-on-primary font-sans text-sm font-semibold rounded-md transition-colors shadow-sm"
            >
              Get Quote
            </a>
            
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 md:hidden text-ink hover:text-brand-pink transition-colors focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed inset-0 z-40 bg-canvas transition-transform duration-300 md:hidden flex flex-col pt-24 px-6 ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col gap-6 text-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="font-serif text-2xl font-medium text-ink hover:text-brand-pink transition-colors py-2"
            >
              {link.name}
            </a>
          ))}
          <div className="mt-8 px-4">
            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full inline-flex items-center justify-center py-3 bg-primary text-on-primary font-sans text-base font-semibold rounded-md hover:bg-primary-active transition-colors shadow-sm"
            >
              Get Free Quote
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
