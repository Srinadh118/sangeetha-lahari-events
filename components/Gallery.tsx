"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, X, ChevronLeft, ChevronRight } from "lucide-react";

interface Project {
  id: number;
  title: string;
  location: string;
  category: string;
  imageName: string;
  bgGradient: string;
  heightClass: string;
}

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filters = ["All", "Wedding", "Reception", "Corporate", "Social"];

  const projects: Project[] = [
    {
      id: 1,
      title: "Grand Royal Wedding",
      location: "GMR Arena, Hyderabad",
      category: "Wedding",
      imageName: "gallery-wedding-1.webp",
      bgGradient: "from-brand-pink/20 to-primary/40",
      heightClass: "h-96",
    },
    {
      id: 2,
      title: "Elegant Ballroom Reception",
      location: "Novotel, Hyderabad",
      category: "Reception",
      imageName: "gallery-reception.webp",
      bgGradient: "from-brand-lavender/20 to-primary/40",
      heightClass: "h-72",
    },
    {
      id: 3,
      title: "Annual Corporate Gala",
      location: "HICC Convention, Hyderabad",
      category: "Corporate",
      imageName: "gallery-corporate.webp",
      bgGradient: "from-brand-teal/20 to-primary/40",
      heightClass: "h-80",
    },
    {
      id: 4,
      title: "Vibrant Haldi Ceremony",
      location: "Private Farmhouse, Shamshabad",
      category: "Social",
      imageName: "gallery-haldi.webp",
      bgGradient: "from-brand-ochre/20 to-primary/40",
      heightClass: "h-96",
    },
    {
      id: 5,
      title: "Floral Stage Showcase",
      location: "JRC Conventions, Jubilee Hills",
      category: "Wedding",
      imageName: "gallery-stage.webp",
      bgGradient: "from-brand-coral/20 to-primary/40",
      heightClass: "h-72",
    },
    {
      id: 6,
      title: "Vibrant Mehendi Celebration",
      location: "N Convention, Madhapur",
      category: "Social",
      imageName: "gallery-mehendi.webp",
      bgGradient: "from-brand-peach/20 to-primary/40",
      heightClass: "h-80",
    },
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  const openLightbox = (id: number) => {
    const idx = projects.findIndex((p) => p.id === id);
    if (idx !== -1) {
      setLightboxIndex(idx);
    }
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const navigateLightbox = (direction: "prev" | "next") => {
    if (lightboxIndex === null) return;
    let nextIdx = direction === "next" ? lightboxIndex + 1 : lightboxIndex - 1;
    if (nextIdx >= projects.length) nextIdx = 0;
    if (nextIdx < 0) nextIdx = projects.length - 1;
    setLightboxIndex(nextIdx);
  };

  return (
    <section id="gallery" className="bg-canvas py-24 border-b border-hairline/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header and Filter Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <div>
            <span className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-brand-pink mb-3 block">
              Portfolio
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-ink leading-tight">
              Featured Work
            </h2>
          </div>

          {/* Filtering Tabs */}
          <div className="flex flex-wrap gap-2 bg-surface-soft p-1.5 rounded-full border border-hairline/40 w-fit">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-5 py-2 font-sans text-xs font-semibold rounded-full transition-all cursor-pointer ${
                  activeFilter === filter
                    ? "bg-primary text-white shadow-sm"
                    : "text-muted hover:text-ink"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-max">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => openLightbox(project.id)}
              className={`group relative rounded-xl overflow-hidden cursor-pointer border border-hairline/50 transition-all duration-300 bg-surface-soft hover:-translate-y-1 hover:shadow-md ${project.heightClass}`}
            >
              {/* Project Image */}
              <div className="absolute inset-0 z-0 bg-surface-card">
                <Image
                  src={`/images/${project.imageName}`}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Hover content */}
              <div className="absolute inset-0 z-10 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="font-sans text-[10px] uppercase font-bold tracking-widest text-brand-peach mb-2 block">
                  {project.category}
                </span>
                <h3 className="font-serif text-xl font-bold text-white mb-1">
                  {project.title}
                </h3>
                <span className="font-sans text-xs text-white/70 mb-4 block">
                  {project.location}
                </span>
                <div className="inline-flex items-center gap-2 text-white text-xs font-semibold uppercase tracking-wider">
                  View Project
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col justify-between items-center py-6 px-4">
          
          {/* Top Actions */}
          <div className="w-full max-w-7xl flex justify-between items-center text-white/80">
            <span className="font-sans text-sm font-semibold">
              Project {lightboxIndex + 1} of {projects.length}
            </span>
            <button
              onClick={closeLightbox}
              className="p-2 hover:bg-white/10 rounded-full transition-colors cursor-pointer text-white"
              aria-label="Close Lightbox"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Core Content View */}
          <div className="relative w-full max-w-4xl flex-1 flex items-center justify-between gap-4">
            {/* Prev Trigger */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                navigateLightbox("prev");
              }}
              className="p-3 hover:bg-white/10 rounded-full transition-colors text-white cursor-pointer"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            {/* Display View */}
            <div className="flex-1 max-h-[70vh] flex flex-col items-center justify-center">
              {/* Lightbox Image Container */}
              <div className="relative w-full max-w-2xl h-80 md:h-96 rounded-xl overflow-hidden border border-white/10 bg-[#0c0c0c] flex items-center justify-center">
                <Image
                  src={`/images/${projects[lightboxIndex].imageName}`}
                  alt={projects[lightboxIndex].title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 80vw, 1200px"
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Next Trigger */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                navigateLightbox("next");
              }}
              className="p-3 hover:bg-white/10 rounded-full transition-colors text-white cursor-pointer"
              aria-label="Next image"
            >
              <ChevronRight className="w-8 h-8" />
            </button>
          </div>

          {/* Bottom Details */}
          <div className="text-center text-white max-w-lg px-4">
            <span className="font-sans text-xs uppercase font-bold tracking-widest text-brand-peach mb-1 block">
              {projects[lightboxIndex].category}
            </span>
            <h3 className="font-serif text-2xl font-bold">
              {projects[lightboxIndex].title}
            </h3>
            <span className="font-sans text-sm text-white/60">
              {projects[lightboxIndex].location}
            </span>
          </div>

        </div>
      )}
    </section>
  );
}
