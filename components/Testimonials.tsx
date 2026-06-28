"use client";

import React, { useState } from "react";
import { Star, ChevronLeft, ChevronRight, User } from "lucide-react";

interface Testimonial {
  name: string;
  eventType: string;
  rating: number;
  text: string;
  date: string;
}

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const reviews: Testimonial[] = [
    {
      name: "Rahul & Divya",
      eventType: "Luxury Wedding",
      rating: 5,
      text: "Sangeetha Lahari Events turned our wedding into a stunning fairy tale. The mandap floral decorations and the entrance setup were breathtaking. Mr. Suresh was personally involved in every planning meeting, making us feel completely secure.",
      date: "2 months ago",
    },
    {
      name: "Sneha Reddy",
      eventType: "Grand Reception",
      rating: 5,
      text: "Outstanding planning and absolute attention to detail. Every single guest was wowed by the ballroom lighting and the grand stage design. They managed the crowds, catering logistics, and VIP hosting flawlessly.",
      date: "1 month ago",
    },
    {
      name: "Vikram Malhotra",
      eventType: "Corporate Gala (Yash Technologies)",
      rating: 5,
      text: "Highly professional team. They executed our annual corporate gala within strict corporate guidelines and tight timelines. The stage setup, audio-visual execution, and crowd management were perfect.",
      date: "3 weeks ago",
    },
  ];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="testimonials" className="bg-canvas py-24 border-b border-hairline/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Title & Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
          <div className="lg:col-span-8">
            <span className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-brand-pink mb-3 block">
              Reviews
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-ink leading-tight">
              What Our Clients Say
            </h2>
          </div>

          {/* Google Ratings Widget Card */}
          <div className="lg:col-span-4 bg-surface-card p-4 xs:p-6 rounded-lg border border-hairline/60 flex flex-col xs:flex-row xs:items-center justify-between gap-4 shadow-sm">
            <div className="flex flex-col items-start">
              <div className="flex items-center gap-1 mb-1">
                <span className="font-sans text-xs font-bold text-ink bg-primary/10 px-2 py-0.5 rounded text-brand-pink">
                  Google
                </span>
                <span className="font-sans text-xs font-semibold text-muted">
                  Review Rating
                </span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="font-serif text-3xl font-bold text-ink">4.8</span>
                <span className="font-sans text-sm text-muted">/ 5.0</span>
              </div>
              <span className="font-sans text-[11px] text-muted block mt-1">
                Based on 160+ Happy Reviews
              </span>
            </div>

            {/* Stars */}
            <div className="flex flex-col items-start xs:items-end gap-1">
              <div className="flex text-brand-ochre">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4.5 h-4.5 fill-current" />
                ))}
              </div>
              <span className="font-sans text-[10px] text-brand-mint font-semibold uppercase tracking-wider">
                100% Verified
              </span>
            </div>
          </div>
        </div>

        {/* Carousel Slider Panel */}
        <div className="relative max-w-4xl mx-auto bg-surface-soft border border-hairline px-5 pb-8 pt-20 xs:px-8 sm:px-12 md:px-16 rounded-xl shadow-sm">

          {/* Quote Mark */}
          <div className="absolute top-4 left-4 xs:top-6 xs:left-6 text-brand-pink/10 font-serif text-8xl pointer-events-none select-none">
            “
          </div>

          {/* Carousel Card Content */}
          <div className="relative z-10 min-h-[300px] flex flex-col justify-between">
            <div>
              {/* Star Rating */}
              <div className="flex text-brand-ochre mb-6">
                {[...Array(reviews[activeIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>

              {/* Review Text */}
              <blockquote className="font-serif text-base xs:text-lg md:text-xl text-ink leading-relaxed italic mb-8 md:pr-12 xs:pr-0">
                "{reviews[activeIndex].text}"
              </blockquote>
            </div>

            {/* Author Profile */}
            <div className="flex flex-col xs:flex-row xs:items-center justify-between border-t border-hairline/60 pt-6 gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-surface-strong flex items-center justify-center border border-hairline shrink-0">
                  <User className="w-5 h-5 text-muted" />
                </div>
                <div>
                  <h4 className="font-serif text-base font-bold text-ink">
                    {reviews[activeIndex].name}
                  </h4>
                  <span className="font-sans text-xs font-semibold text-muted uppercase tracking-wider">
                    {reviews[activeIndex].eventType}
                  </span>
                </div>
              </div>

              <span className="font-sans text-xs text-muted">
                {reviews[activeIndex].date}
              </span>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="absolute right-4 top-4 xs:right-6 xs:top-6 flex items-center gap-2">
            <button
              onClick={handlePrev}
              className="p-2 bg-canvas hover:bg-surface-strong text-ink rounded-full border border-hairline/60 transition-colors shadow-sm cursor-pointer"
              aria-label="Previous Review"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              className="p-2 bg-canvas hover:bg-surface-strong text-ink rounded-full border border-hairline/60 transition-colors shadow-sm cursor-pointer"
              aria-label="Next Review"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
