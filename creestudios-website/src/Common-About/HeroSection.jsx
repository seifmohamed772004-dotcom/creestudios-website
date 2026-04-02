import React from "react";
import { motion } from "motion/react";
import svgPaths from "../Assets/45arrow.png";
import imgImageCreestudios from "../Assets/White Logo.png";
import "../Common-About/HeroSection..css";

export function HeroSection() {
  return (
    <section className="hero-section">
      {/* Animated background blur */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="hero-bg-blur"
      />

      {/* Background text STUDIOS */}
      <figure className="hero-bg-svg-wrapper wrapper-studios">
        <svg className="svg-studios" fill="none" preserveAspectRatio="xMidYMid slice" viewBox="0 0 2983.49 413">
          <g opacity="0.03">
            <path d={svgPaths.p319f2000} fill="#FFEEDC" />
            <path d={svgPaths.p9120600} fill="#FFEEDC" />
            <path d={svgPaths.p25a63900} fill="#FFEEDC" />
            <path d={svgPaths.p1d6e1700} fill="#FFEEDC" />
            <path d={svgPaths.p10c8b080} fill="#FFEEDC" />
            <path d={svgPaths.pa4d500} fill="#FFEEDC" />
            <path d={svgPaths.p1f622f80} fill="#FFEEDC" />
          </g>
        </svg>
      </figure>

      {/* Background text CREE */}
      <figure className="hero-bg-svg-wrapper wrapper-cree">
        <svg className="svg-cree" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1844.55 430.121">
          <g opacity="0.03">
            <path d={svgPaths.p1402f780} fill="#FFEEDC" />
            <path d={svgPaths.p27f24c0} fill="#FFEEDC" />
            <path d={svgPaths.pc5dde00} fill="#FFEEDC" />
            <path d={svgPaths.p3662f380} fill="#FFEEDC" />
          </g>
        </svg>
      </figure>

      {/* Logo */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="hero-logo-header"
      >
        <img alt="Creestudios" src={imgImageCreestudios} className="hero-logo-img" />
      </motion.header>

      {/* Main content */}
      <main className="hero-main-content">
        <motion.article
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="hero-text-block"
        >
          <h1 className="hero-heading">
            KNOW US<br />
            <span className="accent-green">MORE?</span>
          </h1>
          <p className="hero-tagline">"Be the Sound Of Design"</p>
        </motion.article>

        {/* CTA Buttons */}
        <motion.nav
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="hero-cta-nav"
        >
          <motion.button
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="hero-btn btn-primary"
          >
            START NOW
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="hero-btn btn-outline"
          >
            EXPLORE
          </motion.button>
        </motion.nav>
      </main>
    </section>
  );
}