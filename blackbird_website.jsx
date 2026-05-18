import { useState } from "react";
import { motion } from "framer-motion";

export default function BlackbirdWebsite() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Brand colours from style guide
  const colors = {
    black: "#000000",
    white: "#FFFFFF",
    charcoal: "#504B4A",
    walnut: "#82391B",
    eucalyptus: "#60693F",
    moss: "#BFB866",
    coastal: "#D5DFEA",
    limestone: "#EDE8DA",
    grey: "#ACADAE",
    copper: "#CF8759",
  };

  return (
    <div className="min-h-screen w-full" style={{ backgroundColor: colors.limestone }}>
      {/* NAV */}
      <header className="w-full flex items-center justify-between px-8 py-6" style={{ backgroundColor: colors.black }}>
        <img
          src="/assets/logo-blackbird-writing-white.png"
          alt="Blackbird Logo"
          className="h-10 object-contain"
        />

        <nav className="hidden md:flex gap-8 text-white text-sm tracking-wide">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white"
        >
          Menu
        </button>
      </header>

      {/* HERO */}
      <section className="relative flex items-center justify-center text-center px-6 py-32" style={{ backgroundColor: colors.charcoal }}>
        <div>
          <img
            src="/assets/feather-logo-white.png"
            alt="Feather Logo"
            className="mx-auto mb-6 h-20"
          />
          <h1 className="text-5xl md:text-6xl font-semibold text-white tracking-tight">
            Blackbird
          </h1>
          <p className="mt-4 text-lg text-white/80 max-w-xl mx-auto">
            Crafting refined, grounded spaces with a balance of natural texture and modern precision.
          </p>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="px-8 py-24 max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6">About</h2>
        <p className="text-gray-700 leading-relaxed">
          Blackbird is a design-focused construction and carpentry studio delivering high-quality
          residential and commercial builds. We combine craftsmanship with thoughtful material selection
          inspired by natural tones and modern architecture.
        </p>
      </section>

      {/* SERVICES */}
      <section id="services" className="px-8 py-24" style={{ backgroundColor: colors.coastal }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold mb-10">Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Carpentry & Framing",
              "Renovations",
              "Custom Builds",
            ].map((item) => (
              <div key={item} className="p-6 bg-white rounded-2xl shadow-sm">
                <h3 className="text-xl font-medium mb-2">{item}</h3>
                <p className="text-sm text-gray-600">
                  High attention to detail and quality workmanship delivered on every project.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="px-8 py-24 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold mb-10">Projects</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-64 bg-gray-300 rounded-xl overflow-hidden">
              <img
                src={`/assets/project-${i}.jpg`}
                alt={`Project ${i}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="px-8 py-24" style={{ backgroundColor: colors.black }}>
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-3xl font-semibold mb-4">Contact</h2>
          <p className="mb-8 text-white/70">
            Get in touch for quotes, collaborations, or project enquiries.
          </p>
          <a
            href="mailto:hello@blackbird.com"
            className="inline-block px-6 py-3 bg-white text-black rounded-full"
          >
            Email Us
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="px-8 py-6 text-center text-xs" style={{ backgroundColor: colors.charcoal, color: colors.limestone }}>
        © {new Date().getFullYear()} Blackbird. All rights reserved.
      </footer>
    </div>
  );
}
