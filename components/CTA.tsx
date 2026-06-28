"use client";

import React, { useState } from "react";
import { Phone, Calendar, Mail, FileText, Check } from "lucide-react";

export default function CTA() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    eventType: "",
    preferredDate: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.phone && formData.eventType && formData.preferredDate) {
      setIsSubmitted(true);
      setTimeout(() => {
        setFormData({ name: "", phone: "", eventType: "", preferredDate: "" });
        setIsSubmitted(false);
      }, 5000);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="relative py-24 bg-surface-dark text-white overflow-hidden">
      {/* Background Graphic Fallback (luxury dark ambiance) */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[70%] rounded-full bg-brand-teal/30 blur-[130px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[60%] rounded-full bg-brand-pink/10 blur-[120px]" />
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:32px_32px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Headline and Call Options */}
          <div className="lg:col-span-6">
            <span className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-brand-peach mb-4 block">
              Consultation
            </span>
            <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.15] mb-6">
              Let’s Create Something <br />
              <span className="text-brand-peach">Beautiful Together</span>
            </h2>
            <p className="font-sans text-base md:text-lg text-on-dark-soft mb-10 max-w-lg leading-relaxed">
              Tell us about your dream celebration and we’ll bring it to life. Contact our Hyderabad organizing team to book a private consult.
            </p>

            {/* Quick Contact Links */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href="tel:+919876543210"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-ink font-sans text-sm font-semibold rounded-md hover:bg-canvas transition-colors shadow-md"
              >
                <Phone className="w-4 h-4 text-brand-pink" />
                Call +91 98765 43210
              </a>
              <a
                href="mailto:info@sangeethalahari.com"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-transparent border border-white/20 hover:border-white/80 text-white font-sans text-sm font-medium rounded-md transition-colors"
              >
                <Mail className="w-4 h-4 text-brand-peach" />
                info@sangeethalahari.com
              </a>
            </div>

            {/* User instructions badge for background photo overlay */}
            <div className="mt-8 p-3 bg-white/5 border border-white/10 rounded-md w-fit text-xs text-white/50 font-sans">
              To overlay a background photo, place file: <br />
              <code className="font-mono text-brand-peach text-[11px] block mt-1">
                public/images/cta-bg.jpg
              </code>
            </div>
          </div>

          {/* Right Column: Quick Enquiry Form */}
          <div className="lg:col-span-6">
            <div className="bg-surface-dark-elevated p-8 rounded-xl border border-white/10 shadow-lg">
              <div className="flex items-center gap-2 mb-6">
                <FileText className="w-5 h-5 text-brand-peach" />
                <h3 className="font-serif text-2xl font-bold text-white">
                  Quick Inquiry
                </h3>
              </div>

              {isSubmitted ? (
                /* Thank You State */
                <div className="py-12 flex flex-col items-center justify-center text-center">
                  <div className="w-14 h-14 bg-brand-teal/20 text-brand-mint border border-brand-teal/50 rounded-full flex items-center justify-center mb-4">
                    <Check className="w-8 h-8" />
                  </div>
                  <h4 className="font-serif text-xl font-bold text-white mb-2">
                    Enquiry Received
                  </h4>
                  <p className="font-sans text-sm text-on-dark-soft max-w-sm">
                    Thank you for reaching out! Our organizing coordinator Mr. Suresh will contact you shortly.
                  </p>
                </div>
              ) : (
                /* Inquiry Form */
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name Input */}
                  <div>
                    <label htmlFor="name" className="block font-sans text-xs font-semibold uppercase text-on-dark-soft mb-1.5">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. Rahul Sharma"
                      className="w-full h-11 px-4 rounded-md bg-canvas/5 text-white border border-white/10 focus:border-brand-peach focus:outline-none transition-colors font-sans text-sm placeholder-white/30"
                    />
                  </div>

                  {/* Phone Input */}
                  <div>
                    <label htmlFor="phone" className="block font-sans text-xs font-semibold uppercase text-on-dark-soft mb-1.5">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="e.g. +91 98765 43210"
                      className="w-full h-11 px-4 rounded-md bg-canvas/5 text-white border border-white/10 focus:border-brand-peach focus:outline-none transition-colors font-sans text-sm placeholder-white/30"
                    />
                  </div>

                  {/* Event Type Select */}
                  <div>
                    <label htmlFor="eventType" className="block font-sans text-xs font-semibold uppercase text-on-dark-soft mb-1.5">
                      Event Category
                    </label>
                    <select
                      id="eventType"
                      name="eventType"
                      required
                      value={formData.eventType}
                      onChange={handleInputChange}
                      className="w-full h-11 px-4 rounded-md bg-surface-dark-elevated text-white border border-white/10 focus:border-brand-peach focus:outline-none transition-colors font-sans text-sm"
                    >
                      <option value="" disabled className="text-white/30">Select event type...</option>
                      <option value="Wedding">Wedding Celebration</option>
                      <option value="Reception">Post-Wedding Reception</option>
                      <option value="Corporate">Corporate Meeting/Gala</option>
                      <option value="Social">Social/Birthday Gathering</option>
                      <option value="Other">Other Custom Celebration</option>
                    </select>
                  </div>

                  {/* Date Input */}
                  <div>
                    <label htmlFor="preferredDate" className="block font-sans text-xs font-semibold uppercase text-on-dark-soft mb-1.5">
                      Preferred Date
                    </label>
                    <div className="relative">
                      <input
                        type="date"
                        id="preferredDate"
                        name="preferredDate"
                        required
                        value={formData.preferredDate}
                        onChange={handleInputChange}
                        className="w-full h-11 px-4 rounded-md bg-canvas/5 text-white border border-white/10 focus:border-brand-peach focus:outline-none transition-colors font-sans text-sm"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-3 bg-brand-peach hover:bg-brand-peach/90 text-primary font-sans text-sm font-semibold rounded-md transition-colors shadow-md mt-6 cursor-pointer"
                  >
                    Submit Enquiry
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
