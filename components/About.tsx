"use client";

import React from "react";
import Image from "next/image";
import { Target, Eye, ShieldCheck } from "lucide-react";

export default function About() {
  const cards = [
    {
      title: "Our Mission",
      content:
        "To transform our clients' dreams into exceptionally planned, visually stunning, and seamlessly executed celebrations that exceed all expectations.",
      icon: <Target className="w-5 h-5 text-brand-pink" />,
      bgClass: "bg-surface-card",
    },
    {
      title: "Our Vision",
      content:
        "To remain Hyderabad's leading legacy event management firm, recognized for introducing modern, premium trends while preserving heritage values.",
      icon: <Eye className="w-5 h-5 text-brand-teal" />,
      bgClass: "bg-surface-soft",
    },
    {
      title: "Our Values",
      content:
        "We are anchored in family-led trust, professional discipline, absolute transparency, creative originality, and a commitment to flawless delivery.",
      icon: <ShieldCheck className="w-5 h-5 text-brand-ochre" />,
      bgClass: "bg-surface-strong",
    },
  ];

  return (
    <section id="about" className="bg-canvas py-24 border-b border-hairline/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Legacy Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20">
          
          {/* Left Column: CEO Portrait Image */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full aspect-[3/4] max-w-sm rounded-xl overflow-hidden bg-surface-soft border border-hairline shadow-lg group">
              <Image
                src="/images/about-ceo.jpg"
                alt="Mr. Suresh, Chief Organizer & Founder"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
              
              <div className="absolute bottom-6 left-6 z-10 text-left">
                <h4 className="font-serif text-xl font-bold text-white mb-1">
                  Mr. Suresh
                </h4>
                <span className="font-sans text-xs font-semibold text-brand-peach uppercase tracking-widest">
                  Chief Organizer & Founder
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative Story */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <span className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-brand-pink mb-3 block">
              Our Legacy
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-ink leading-tight mb-6">
              Three Generations of Celebrations
            </h2>
            <div className="font-sans text-base text-body space-y-4 leading-relaxed">
              <p>
                Founded in Hyderabad with a vision to craft timeless memories, Sangeetha Lahari Events represents a 30-year family legacy of trust, creativity, and flawless execution. What began as a passionate endeavor has evolved across three generations, organizing celebrations that stand the test of time.
              </p>
              <p>
                We specialize in blending traditional values with cutting-edge global design trends. Whether it's an grand wedding mandap or a high-profile corporate summit, our team coordinates all components with extreme precision.
              </p>
              <p className="font-semibold text-ink">
                We pride ourselves on offering:
              </p>
              
              {/* Bullet Highlights */}
              <div className="grid grid-cols-1 xs:grid-cols-2 gap-3 sm:gap-4 pt-2">
                {[
                  "Family-Owned Values",
                  "Personalized Planning",
                  "Creative Conception",
                  "Flawless Logistical Control",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-pink" />
                    <span className="font-sans text-sm font-medium text-ink">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Signature & Closing */}
            <div className="mt-8 pt-6 border-t border-hairline flex flex-col items-start">
              <span className="font-serif text-2xl italic font-bold text-ink tracking-wide">
                Mr. Suresh
              </span>
              <span className="font-sans text-xs font-semibold text-muted uppercase tracking-wider mt-1">
                Chief Organizer
              </span>
            </div>
          </div>

        </div>

        {/* Mission Vision Values Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className={`p-6 xs:p-8 rounded-lg border border-hairline/60 flex flex-col items-start ${card.bgClass}`}
            >
              <div className="p-2.5 bg-canvas rounded-full border border-hairline/40 mb-4">
                {card.icon}
              </div>
              <h3 className="font-serif text-xl font-bold text-ink mb-3">
                {card.title}
              </h3>
              <p className="font-sans text-sm text-body leading-relaxed">
                {card.content}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
