import React from "react";
import { motion } from "motion/react";
import "../Common-About/IndustriesSection.css";

export function IndustriesSection() {
  const industries = [
    { title: "Technology & Saas", icon: "💻" },
    { title: "E-commerce & Retail", icon: "🛍️" },
    { title: "Healthcare & Wellness", icon: "🏥" },
    { title: "Education & Edtech", icon: "📚" },
    { title: "Entertainment & Media", icon: "🎬" },
    { title: "Finance & Fintech", icon: "💰" }
  ];

  return (
    <section className="industries-section">
      <main className="industries-container">
        
        <motion.header
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="industries-header"
        >
          <h2 className="industries-title">
            INDUSTRIES WE <span className="accent-green">SERVE</span>
          </h2>
        </motion.header>

        <ul className="industries-grid">
          {industries.map((industry, index) => (
            <motion.li
              key={industry.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="industry-card"
            >
              <span className="industry-icon">{industry.icon}</span>
              <p className="industry-name">{industry.title}</p>
            </motion.li>
          ))}
        </ul>

        {/* CTA Panel */}
        <motion.aside
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="industries-cta-panel"
        >
          <article className="cta-text-wrapper">
            <p className="cta-text">Ready to bring your vision to life?</p>
          </article>
          
          <motion.button
            whileHover={{ scale: 1.05, x: 5 }}
            whileTap={{ scale: 0.95 }}
            className="cta-btn-action"
          >
            Get Started
            <svg className="cta-btn-icon" fill="none" viewBox="0 0 20 20">
              <path d="M4.86133 0.195178C5.12166 -0.0650593 5.54436 -0.0650593 5.80469 0.195178L10.4658 4.85729L10.46 5.81432L5.80469 10.4715C5.54434 10.7319 5.12168 10.7319 4.86133 10.4715C4.60133 10.2113 4.60139 9.78946 4.86133 9.52916L8.38867 6.00084H0.666992C0.298909 6.00084 0 5.70189 0 5.33385C0 4.96566 0.298802 4.66686 0.666992 4.66686H8.39062L4.86133 1.13854C4.60106 0.878181 4.60101 0.455499 4.86133 0.195178Z" fill="currentColor" />
            </svg>
          </motion.button>
        </motion.aside>

      </main>
    </section>
  );
}