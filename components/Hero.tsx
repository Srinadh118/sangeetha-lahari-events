"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";

export default function Hero() {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [useFallback, setUseFallback] = useState(false);

  useEffect(() => {
    // Check if image exists
    const img = new Image();
    img.src = "/images/hero-bg.jpg";
    img.onload = () => setImageLoaded(true);
    img.onerror = () => setUseFallback(true);
  }, []);

  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex items-center justify-start overflow-hidden bg-primary"
    >
      {/* Background Media */}
      {!useFallback ? (
        <div
          className={`absolute inset-0 z-0 transition-opacity duration-1000 bg-cover bg-center ${
            imageLoaded ? "opacity-40 scale-100" : "opacity-0 scale-105"
          }`}
          style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
        />
      ) : (
        /* Luxury Mesh Gradient Fallback */
        <div className="absolute inset-0 z-0 bg-[#0a0a0a]">
          <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-brand-teal/20 blur-[120px]" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-brand-pink/10 blur-[100px]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(26,58,58,0.15),transparent_70%)]" />
        </div>
      )}

      {/* Subtle overlay */}
      <div className="absolute inset-0 z-10 bg-overlay-dark" />

      {/* Grid Pattern Accent */}
      <div className="absolute inset-0 z-10 opacity-5 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:24px_24px]" />

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-8 py-32 flex flex-col justify-center items-start text-left w-full h-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          {/* Eyebrow */}
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-pill bg-brand-teal/20 border border-brand-teal/40 text-brand-mint text-xs font-semibold tracking-wider uppercase mb-6">
            30+ Years of Crafting Memories
          </span>

          {/* Heading */}
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-6 text-shadow-luxury">
            Make Your Celebration <br />
            <span className="text-brand-peach">Unforgettable</span>
          </h1>

          {/* Subheading */}
          <p className="font-sans text-lg sm:text-xl text-on-dark-soft mb-10 max-w-xl leading-relaxed text-shadow-luxury">
            Personalized event management in Hyderabad for weddings, corporate galas, milestone birthdays, and luxury social celebrations.
          </p>

          {/* Action Row */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 bg-brand-peach hover:bg-brand-peach/90 text-primary font-sans text-base font-semibold rounded-md transition-all shadow-md group"
            >
              Get Free Quote
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#gallery"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 bg-transparent border border-white/20 hover:border-white/80 text-white font-sans text-base font-medium rounded-md transition-colors"
            >
              Explore Our Work
            </a>
          </div>
        </motion.div>
      </div>

      {/* Floating Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 pointer-events-none">
        <span className="text-[10px] uppercase tracking-[0.25em] text-white/40 font-medium">Scroll Down</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="text-white/60"
        >
          <ChevronDown size={20} />
        </motion.div>
      </div>
    </section>
  );
}
