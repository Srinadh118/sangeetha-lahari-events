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

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex flex-col group">
            <span className={`font-serif text-lg md:text-xl font-bold tracking-tight transition-colors duration-300 ${
              isScrolled ? "text-ink" : "text-white"
            }`}>
              SANGEETHA LAHARI
            </span>
            <span className={`font-sans text-[10px] tracking-[0.2em] font-semibold transition-colors duration-300 -mt-1 ${
              isScrolled
                ? "text-muted group-hover:text-brand-pink"
                : "text-white/60 group-hover:text-brand-peach"
            }`}>
              EVENTS & CELEBRATIONS
            </span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`font-sans text-sm font-medium transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:transition-all hover:after:w-full ${
                  isScrolled
                    ? "text-muted hover:text-ink after:bg-brand-pink"
                    : "text-white/70 hover:text-white after:bg-brand-peach"
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <a
              href="#contact"
              className={`hidden sm:inline-flex items-center justify-center px-5 py-2.5 font-sans text-sm font-semibold rounded-md transition-all shadow-sm ${
                isScrolled
                  ? "bg-primary hover:bg-primary-active text-on-primary"
                  : "bg-brand-peach hover:bg-brand-peach/90 text-primary"
              }`}
            >
              Get Quote
            </a>
            
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 lg:hidden transition-colors focus:outline-none ${
                isScrolled
                  ? "text-ink hover:text-brand-pink"
                  : "text-white hover:text-brand-peach"
              }`}
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed inset-0 z-40 bg-canvas transition-transform duration-300 lg:hidden flex flex-col pt-24 px-4 sm:px-6 overflow-y-auto max-h-screen pb-12 ${
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
