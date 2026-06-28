import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import TrustSection from "../components/TrustSection";
import Services from "../components/Services";
import Gallery from "../components/Gallery";
import About from "../components/About";
import Testimonials from "../components/Testimonials";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <TrustSection />
        <Services />
        <Gallery />
        <About />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
