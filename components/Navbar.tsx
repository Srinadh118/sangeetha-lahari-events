"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, Phone, Mail, MapPin, Instagram, Facebook, Youtube } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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

  const isHeaderDark = isScrolled || isMobileMenuOpen;

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 h-16 ${
          isHeaderDark
            ? "bg-canvas/90 backdrop-blur-md border-b border-hairline/50 shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex flex-col group">
            <span
              className={`font-serif text-lg md:text-xl font-bold tracking-tight transition-colors duration-300 ${
                isHeaderDark ? "text-ink" : "text-white"
              }`}
            >
              SANGEETHA LAHARI
            </span>
            <span
              className={`font-sans text-[10px] tracking-[0.2em] font-semibold transition-colors duration-300 -mt-1 ${
                isHeaderDark
                  ? "text-muted group-hover:text-brand-pink"
                  : "text-white/60 group-hover:text-brand-peach"
              }`}
            >
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
                isHeaderDark
                  ? "bg-primary hover:bg-primary-active text-on-primary"
                  : "bg-brand-peach hover:bg-brand-peach/90 text-primary"
              }`}
            >
              Get Quote
            </a>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 lg:hidden transition-colors focus:outline-none relative z-50 ${
                isHeaderDark
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

      {/* Mobile Menu Drawer using Framer Motion */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop Blur Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 26, stiffness: 190 }}
              className="fixed top-0 right-0 bottom-0 z-45 w-full sm:w-[85vw] sm:max-w-[400px] bg-canvas border-l border-hairline/50 shadow-2xl flex flex-col h-full lg:hidden overflow-hidden"
            >
              {/* Decorative Accent Line on the Left Edge */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-brand-pink via-brand-teal to-brand-peach" />

              {/* Decorative Background Grid Pattern */}
              <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:16px_16px]" />

              {/* Content Container */}
              <div className="flex flex-col h-full pt-24 px-6 sm:px-8 overflow-y-auto no-scrollbar relative z-10">
                {/* Navigation Links */}
                <motion.div
                  variants={{
                    hidden: { opacity: 0 },
                    show: {
                      opacity: 1,
                      transition: {
                        staggerChildren: 0.08,
                        delayChildren: 0.1,
                      },
                    },
                  }}
                  initial="hidden"
                  animate="show"
                  className="flex flex-col gap-5 text-left"
                >
                  {navLinks.map((link) => (
                    <motion.div
                      key={link.name}
                      variants={{
                        hidden: { opacity: 0, x: 20 },
                        show: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 100 } },
                      }}
                    >
                      <a
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="group flex items-center justify-between font-serif text-3xl font-medium text-ink hover:text-brand-pink transition-colors py-1.5"
                      >
                        <span className="relative">
                          {link.name}
                          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-pink transition-all duration-300 group-hover:w-full" />
                        </span>
                        <span className="text-brand-peach opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 font-sans text-xl">
                          →
                        </span>
                      </a>
                    </motion.div>
                  ))}

                  {/* CTA Button */}
                  <motion.div
                    variants={{
                      hidden: { opacity: 0, y: 15 },
                      show: { opacity: 1, y: 0, transition: { delay: 0.4 } },
                    }}
                    className="mt-6"
                  >
                    <a
                      href="#contact"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="w-full inline-flex items-center justify-center py-3.5 bg-primary text-on-primary font-sans text-base font-semibold rounded-md hover:bg-primary-active transition-colors shadow-md relative group overflow-hidden"
                    >
                      <span className="relative z-10 flex items-center gap-2">
                        Get Free Quote
                        <span className="transition-transform group-hover:translate-x-1 duration-300">→</span>
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-brand-pink to-brand-peach opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-0" />
                    </a>
                  </motion.div>
                </motion.div>

                {/* Footer Section in Drawer */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="mt-auto pt-8 pb-8 border-t border-hairline/80 flex flex-col gap-6"
                >
                  {/* Contact Info */}
                  <div className="flex flex-col gap-3">
                    <span className="font-sans text-[10px] uppercase font-bold tracking-widest text-muted-soft">
                      Get in Touch
                    </span>
                    <div className="flex flex-col gap-3.5">
                      <a
                        href="tel:+919876543210"
                        className="flex items-center gap-3 font-sans text-sm text-body hover:text-brand-teal transition-colors group"
                      >
                        <span className="w-8 h-8 rounded-full bg-surface-soft border border-hairline/50 flex items-center justify-center text-brand-teal shrink-0 group-hover:bg-brand-teal group-hover:text-white transition-colors duration-300">
                          <Phone className="w-3.5 h-3.5" />
                        </span>
                        <span className="font-medium">+91 98765 43210</span>
                      </a>

                      <a
                        href="mailto:info@sangeethalahari.com"
                        className="flex items-center gap-3 font-sans text-sm text-body hover:text-brand-pink transition-colors group"
                      >
                        <span className="w-8 h-8 rounded-full bg-surface-soft border border-hairline/50 flex items-center justify-center text-brand-pink shrink-0 group-hover:bg-brand-pink group-hover:text-white transition-colors duration-300">
                          <Mail className="w-3.5 h-3.5" />
                        </span>
                        <span className="font-medium">info@sangeethalahari.com</span>
                      </a>

                      <div className="flex items-start gap-3 font-sans text-xs text-muted leading-relaxed">
                        <span className="w-8 h-8 rounded-full bg-surface-soft border border-hairline/50 flex items-center justify-center text-brand-ochre shrink-0 mt-0.5">
                          <MapPin className="w-3.5 h-3.5" />
                        </span>
                        <span>
                          Road No. 10, Banjara Hills,
                          <br />
                          Hyderabad, TS 500034
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Social Media Link List */}
                  <div className="flex items-center gap-3 pt-2">
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noreferrer"
                      className="w-9 h-9 rounded-full bg-surface-soft border border-hairline/80 flex items-center justify-center text-muted hover:text-brand-pink hover:border-brand-pink hover:bg-canvas transition-all duration-300"
                      aria-label="Instagram"
                    >
                      <Instagram className="w-4 h-4" />
                    </a>
                    <a
                      href="https://facebook.com"
                      target="_blank"
                      rel="noreferrer"
                      className="w-9 h-9 rounded-full bg-surface-soft border border-hairline/80 flex items-center justify-center text-muted hover:text-brand-teal hover:border-brand-teal hover:bg-canvas transition-all duration-300"
                      aria-label="Facebook"
                    >
                      <Facebook className="w-4 h-4" />
                    </a>
                    <a
                      href="https://youtube.com"
                      target="_blank"
                      rel="noreferrer"
                      className="w-9 h-9 rounded-full bg-surface-soft border border-hairline/80 flex items-center justify-center text-muted hover:text-brand-orange hover:border-brand-orange hover:bg-canvas transition-all duration-300"
                      aria-label="YouTube"
                    >
                      <Youtube className="w-4 h-4" />
                    </a>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
