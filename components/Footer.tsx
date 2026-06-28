"use client";

import React from "react";
import { Phone, Mail, MapPin, Instagram, Facebook, Youtube } from "lucide-react";

export default function Footer() {
  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Our Services", href: "#services" },
    { name: "Gallery", href: "#gallery" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Enquiry Form", href: "#contact" },
  ];

  const services = [
    { name: "Wedding Events", href: "#services" },
    { name: "Corporate Events", href: "#services" },
    { name: "Social Celebrations", href: "#services" },
  ];

  return (
    <footer className="bg-surface-soft text-body pt-16 border-t border-hairline">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          
          {/* Column 1: Company Branding & Socials */}
          <div className="flex flex-col gap-4">
            <a href="#home" className="flex flex-col">
              <span className="font-serif text-lg font-bold tracking-tight text-ink">
                SANGEETHA LAHARI
              </span>
              <span className="font-sans text-[10px] tracking-[0.2em] font-semibold text-muted -mt-1">
                EVENTS & CELEBRATIONS
              </span>
            </a>
            <p className="font-sans text-xs text-muted leading-relaxed max-w-xs mt-2">
              Hyderabad's premier event management legacy. Designing high-end weddings, corporate summits, and social celebrations with 30 years of unmatched experience.
            </p>
            
            {/* Social Icons */}
            <div className="flex items-center gap-3 mt-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-canvas flex items-center justify-center border border-hairline/80 text-muted hover:text-brand-pink hover:border-brand-pink transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-canvas flex items-center justify-center border border-hairline/80 text-muted hover:text-brand-teal hover:border-brand-teal transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-canvas flex items-center justify-center border border-hairline/80 text-muted hover:text-brand-orange hover:border-brand-orange transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-serif text-sm font-bold text-ink mb-4 uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-2.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="font-sans text-xs text-muted hover:text-ink transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Our Services */}
          <div>
            <h3 className="font-serif text-sm font-bold text-ink mb-4 uppercase tracking-wider">
              Services
            </h3>
            <ul className="flex flex-col gap-2.5">
              {services.map((service) => (
                <li key={service.name}>
                  <a
                    href={service.href}
                    className="font-sans text-xs text-muted hover:text-ink transition-colors"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact details */}
          <div>
            <h3 className="font-serif text-sm font-bold text-ink mb-4 uppercase tracking-wider">
              Get in Touch
            </h3>
            <ul className="flex flex-col gap-3">
              <li className="flex items-start gap-2 text-xs">
                <MapPin className="w-4 h-4 text-brand-pink shrink-0" />
                <span className="font-sans text-muted leading-relaxed">
                  Road No. 10, Banjara Hills,<br />
                  Hyderabad, Telangana, 500034
                </span>
              </li>
              <li className="flex items-center gap-2 text-xs">
                <Phone className="w-4 h-4 text-brand-teal shrink-0" />
                <a
                  href="tel:+919876543210"
                  className="font-sans text-muted hover:text-ink transition-colors"
                >
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-2 text-xs">
                <Mail className="w-4 h-4 text-brand-ochre shrink-0" />
                <a
                  href="mailto:info@sangeethalahari.com"
                  className="font-sans text-muted hover:text-ink transition-colors"
                >
                  info@sangeethalahari.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom copyright and landscape decoration line */}
        <div className="mt-16 pt-8 border-t border-hairline/80 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="font-sans text-[11px] text-muted text-center sm:text-left">
            &copy; {new Date().getFullYear()} Sangeetha Lahari Events. All rights reserved.
          </span>
          <span className="font-sans text-[10px] uppercase font-semibold tracking-widest text-muted text-center sm:text-right">
            Crafting Celebrations Since 1996
          </span>
        </div>
      </div>
      
      {/* Decorative landscape accent line at the absolute bottom */}
      <div className="h-2 w-full bg-gradient-to-r from-brand-pink via-brand-teal to-brand-peach" />
    </footer>
  );
}
