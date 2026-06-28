"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Heart, Briefcase, Sparkles, ArrowUpRight } from "lucide-react";

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(0);
  const isScrolling = useRef(false);
  const scrollTimeoutRef = useRef<number | null>(null);

  const services = [
    {
      index: "01",
      title: "Wedding Events",
      description:
        "Bespoke luxury wedding planning and design. We choreograph every moment of your big day, from stunning mandap designs to grand banquets.",
      icon: <Heart className="w-5 h-5 text-brand-olive" />,
      colorClass: "bg-brand-olive",
      textColor: "text-brand-olive",
      badgeText: "Luxurious",
      imageName: "service-wedding.webp",
    },
    {
      index: "02",
      title: "Corporate Events",
      description:
        "Professional conferences, galas, award ceremonies, and seminars. We align with your brand guidelines to execute flawless corporate experiences.",
      icon: <Briefcase className="w-5 h-5 text-brand-olive" />,
      colorClass: "bg-brand-olive",
      textColor: "text-brand-olive",
      badgeText: "Professional",
      imageName: "service-corporate.webp",
    },
    {
      index: "03",
      title: "Social Celebrations",
      description:
        "Milestone birthdays, traditional anniversaries, haldi-mehendi functions, and intimate home celebrations designed with love and detail.",
      icon: <Sparkles className="w-5 h-5 text-brand-orange" />,
      colorClass: "bg-brand-orange",
      textColor: "text-brand-orange",
      badgeText: "Intimate",
      imageName: "service-social.webp",
    },
  ];

  // Intersection Observer for desktop scrolling cards
  useEffect(() => {
    if (window.innerWidth < 768) return;

    const observerOptions = {
      root: null,
      rootMargin: "-25% 0px -45% 0px", // focus area in the center of the viewport
      threshold: 0.1,
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      // Ignore intersection updates while a navigation transition (click) is scrolling the page
      if (isScrolling.current) return;

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          const idx = parseInt(id.split("-")[2], 10);
          if (!isNaN(idx)) {
            setActiveIndex(idx);
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    services.forEach((_, idx) => {
      const target = document.getElementById(`service-scroll-${idx}`);
      if (target) observer.observe(target);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (idx: number) => {
    isScrolling.current = true;
    setActiveIndex(idx);

    const target = document.getElementById(`service-scroll-${idx}`);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "center" });
    }

    // Debounce lock release to prevent intermediate cards from stealing focus
    if (scrollTimeoutRef.current) window.clearTimeout(scrollTimeoutRef.current);
    scrollTimeoutRef.current = window.setTimeout(() => {
      isScrolling.current = false;
    }, 1000);
  };

  // Card theme styling map - very light shades of brand-olive and brand-orange
  const cardThemeMap = [
    { bg: "bg-brand-olive/30", border: "border-brand-olive/30" },
    { bg: "bg-brand-olive/40", border: "border-brand-olive/30" },
    { bg: "bg-brand-orange/20", border: "border-brand-orange/20" },
  ];

  return (
    <section id="services" className="bg-canvas py-24 border-b border-hairline/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-brand-pink mb-3 block">
            What We Do
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-ink leading-tight">
            Curating Extraordinary Gatherings
          </h2>
          <p className="font-sans text-base text-muted mt-4 max-w-xl">
            Whether it’s a lifetime promise or a high-stakes corporate gala, we coordinate every logistical and creative detail.
          </p>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Left Column: Sticky Navigation (Desktop Only) */}
          <div className="hidden md:block md:col-span-4 sticky top-32 z-20">
            <div className="relative pl-6 flex flex-col gap-6">
              {/* Continuous vertical timeline track */}
              <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-hairline/60 rounded" />

              {services.map((service, idx) => {
                const isActive = activeIndex === idx;
                return (
                  <div
                    key={idx}
                    onClick={() => handleNavClick(idx)}
                    className={`relative py-3 group cursor-pointer transition-all duration-300 pl-4 ${isActive ? "opacity-100" : "opacity-45 hover:opacity-75"
                      }`}
                  >
                    {/* Active line indicator overlay */}
                    {isActive && (
                      <motion.div
                        layoutId="activeIndicator"
                        className={`absolute left-[-24px] top-0 bottom-0 w-[3px] rounded-full ${service.colorClass}`}
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}

                    {/* Service Number */}
                    <span className="text-xs font-mono font-semibold tracking-wider text-muted-soft block mb-1">
                      {service.index}
                    </span>

                    {/* Title */}
                    <h3 className="font-serif text-xl lg:text-2xl font-bold text-ink mb-1">
                      {service.title}
                    </h3>

                    {/* Expandable Description */}
                    <motion.div
                      initial={false}
                      animate={{
                        height: isActive ? "auto" : 0,
                        opacity: isActive ? 1 : 0,
                      }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="font-sans text-sm text-body leading-relaxed max-w-sm mt-2">
                        {service.description}
                      </p>
                    </motion.div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Scrollable Cards (Desktop Only) */}
          <div className="hidden md:block md:col-span-8 space-y-24 pb-20">
            {services.map((service, idx) => {
              const theme = cardThemeMap[idx];
              return (
                <div
                  key={idx}
                  id={`service-scroll-${idx}`}
                  className="min-h-[75vh] flex items-center justify-center first:pt-0"
                >
                  {/* Branded Padded Frame Card (Image only, big size, 3px padding) */}
                  <div className={`w-full max-w-[820px] aspect-[16/10] rounded-2xl shadow-[-5px_20px_40px_rgba(0,0,0,0.40)] p-1 transition-all duration-300 ${theme.bg} border-2 ${theme.border} shadow-inset-lg`}>
                    <div className={`relative w-full h-full rounded-[13px] overflow-hidden bg-black/5 border ${theme.border}`}>
                      <Image
                        src={`/images/${service.imageName}`}
                        alt={service.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 820px"
                        className="object-cover"
                        priority={idx === 0}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mobile Fallback Stack (Mobile & Tablet < md) */}
          <div className="block md:hidden col-span-12 space-y-12">
            {services.map((service, idx) => {
              const theme = cardThemeMap[idx];
              return (
                <div
                  key={idx}
                  className="flex flex-col gap-6 p-6 rounded-xl border border-hairline/60 bg-surface-soft shadow-sm"
                >
                  {/* Title and Index Row */}
                  <div className="flex items-center justify-between border-b border-hairline/60 pb-3">
                    <div className="flex items-center gap-3">
                      <span className={`text-xs font-mono font-bold px-2 py-0.5 rounded-sm ${service.colorClass} text-white`}>
                        {service.index}
                      </span>
                      <h3 className="font-serif text-xl md:text-2xl font-bold text-ink">
                        {service.title}
                      </h3>
                    </div>
                    <span className="font-sans text-xs font-semibold uppercase tracking-wider text-muted">
                      {service.badgeText}
                    </span>
                  </div>

                  {/* Solid-colored shell card for mobile (3px padding, no text) */}
                  <div className={`w-full aspect-[16/10] rounded-xl shadow-md p-[3px] ${theme.bg}`}>
                    <div className="relative w-full h-full rounded-[9px] overflow-hidden bg-black/5">
                      <Image
                        src={`/images/${service.imageName}`}
                        alt={service.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 450px"
                        className="object-cover"
                      />
                    </div>
                  </div>

                  {/* Description and Action */}
                  <div className="flex flex-col gap-4 mt-2">
                    <p className="font-sans text-sm text-body leading-relaxed">
                      {service.description}
                    </p>

                    <a
                      href="#contact"
                      className="inline-flex items-center justify-between px-4 py-2.5 rounded-md border border-hairline hover:bg-canvas transition-colors group"
                    >
                      <span className="font-sans text-xs font-bold uppercase tracking-wider text-ink">
                        Request Consult
                      </span>
                      <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center shadow-sm group-hover:rotate-45 transition-transform">
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
