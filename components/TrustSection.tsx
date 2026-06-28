"use client";

import React from "react";
import { Star, Award, Sparkles, CheckCircle2 } from "lucide-react";

export default function TrustSection() {
  const stats = [
    {
      value: "30+",
      label: "Years of Experience",
      icon: <Award className="w-5 h-5 text-brand-ochre" />,
    },
    {
      value: "500+",
      label: "Events Managed",
      icon: <Sparkles className="w-5 h-5 text-brand-pink" />,
    },
    {
      value: "4.8★",
      label: "Google Rating",
      icon: <Star className="w-5 h-5 fill-brand-ochre text-brand-ochre" />,
    },
    {
      value: "160+",
      label: "Happy Reviews",
      icon: <CheckCircle2 className="w-5 h-5 text-brand-mint" />,
    },
  ];

  const brandLogos = [
    "Yash Technologies",
    "Dr. Reddy's",
    "SBI Life",
    "Penna",
    "Azurity",
    "EuroSchool",
  ];

  return (
    <section className="bg-canvas py-16 md:py-24 border-b border-hairline/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Statistics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-16 md:mb-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-surface-card p-6 rounded-lg border border-hairline/60 flex flex-col items-center text-center hover:shadow-sm hover:border-hairline transition-all duration-300"
            >
              <div className="mb-3 p-2 bg-canvas rounded-full border border-hairline/40">
                {stat.icon}
              </div>
              <span className="font-serif text-3xl md:text-4xl font-bold text-ink mb-1">
                {stat.value}
              </span>
              <span className="font-sans text-xs md:text-sm font-medium text-muted">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Brand Marquee Intro */}
        <div className="text-center mb-8">
          <p className="font-sans text-sm font-semibold tracking-wider text-muted uppercase">
            Trusted by families and leading organizations across Hyderabad
          </p>
        </div>

        {/* Infinite Logo Marquee */}
        <div className="relative w-full overflow-hidden py-4 bg-surface-soft border-y border-hairline/40 rounded-md">
          {/* Gradients to mask edges */}
          <div className="absolute top-0 bottom-0 left-0 w-16 bg-gradient-to-r from-canvas to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 bottom-0 right-0 w-16 bg-gradient-to-l from-canvas to-transparent z-10 pointer-events-none" />

          {/* Marquee Wrapper */}
          <div className="flex w-max animate-marquee">
            {/* First Set */}
            <div className="flex items-center gap-16 md:gap-24 px-8">
              {brandLogos.map((brand, idx) => (
                <div
                  key={idx}
                  className="font-serif text-lg md:text-xl font-semibold text-muted/60 tracking-wider whitespace-nowrap hover:text-ink hover:scale-105 transition-all cursor-default"
                >
                  {brand}
                </div>
              ))}
            </div>
            {/* Duplicated Set for Infinite Loop */}
            <div className="flex items-center gap-16 md:gap-24 px-8" aria-hidden="true">
              {brandLogos.map((brand, idx) => (
                <div
                  key={`dup-${idx}`}
                  className="font-serif text-lg md:text-xl font-semibold text-muted/60 tracking-wider whitespace-nowrap hover:text-ink hover:scale-105 transition-all cursor-default"
                >
                  {brand}
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
