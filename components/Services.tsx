"use client";

import React from "react";
import { Heart, Briefcase, Sparkles, ArrowUpRight } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Wedding Events",
      description:
        "Bespoke luxury wedding planning and design. We choreograph every moment of your big day, from stunning mandap designs to grand banquets.",
      icon: <Heart className="w-6 h-6 text-brand-pink" />,
      colorClass: "bg-brand-pink text-white",
      btnColorClass: "bg-white text-ink hover:bg-canvas",
      imageName: "service-wedding.jpg",
      badgeText: "Luxurious",
    },
    {
      title: "Corporate Events",
      description:
        "Professional conferences, galas, award ceremonies, and seminars. We align with your brand guidelines to execute flawless corporate experiences.",
      icon: <Briefcase className="w-6 h-6 text-brand-mint" />,
      colorClass: "bg-brand-teal text-white",
      btnColorClass: "bg-white text-ink hover:bg-canvas",
      imageName: "service-corporate.jpg",
      badgeText: "Professional",
    },
    {
      title: "Social Celebrations",
      description:
        "Milestone birthdays, traditional anniversaries, haldi-mehendi functions, and intimate home celebrations designed with love and detail.",
      icon: <Sparkles className="w-6 h-6 text-brand-ochre" />,
      colorClass: "bg-brand-peach text-ink",
      btnColorClass: "bg-primary text-white hover:bg-primary-active",
      imageName: "service-social.jpg",
      badgeText: "Intimate",
    },
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

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group flex flex-col justify-between p-8 rounded-xl transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl cursor-pointer ${service.colorClass}`}
            >
              <div>
                {/* Image Placeholder Card */}
                <div className="relative w-full h-48 rounded-lg overflow-hidden mb-6 bg-black/10 border border-white/10 flex flex-col items-center justify-center text-center p-4">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  
                  {/* Instructions Badge */}
                  <div className="relative z-10 p-2 bg-canvas/10 backdrop-blur-md rounded border border-white/20 mb-2">
                    <span className="font-sans text-[10px] uppercase font-bold tracking-wider text-white">
                      Upload Required
                    </span>
                  </div>
                  <span className="relative z-10 font-sans text-xs text-white/80 font-medium">
                    Place image in: <br />
                    <code className="text-white font-mono text-[11px] bg-black/40 px-1 py-0.5 rounded">
                      public/images/{service.imageName}
                    </code>
                  </span>
                </div>

                {/* Badge Pill */}
                <span className="inline-block px-3 py-1 rounded-pill bg-white/10 backdrop-blur-sm text-xs font-semibold tracking-wider uppercase mb-4 border border-white/10">
                  {service.badgeText}
                </span>

                {/* Title & Icon Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-white rounded-full shadow-sm">
                    {service.icon}
                  </div>
                  <h3 className="font-serif text-2xl font-bold">
                    {service.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="font-sans text-sm opacity-90 leading-relaxed mb-8">
                  {service.description}
                </p>
              </div>

              {/* Action Button */}
              <div className="flex justify-between items-center mt-auto">
                <span className="font-sans text-xs font-bold uppercase tracking-wider">
                  Request Info
                </span>
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center shadow-sm transition-transform group-hover:rotate-45 ${service.btnColorClass}`}
                >
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
