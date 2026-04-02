import React from "react";
import { motion } from "motion/react";
import "../Common-About/WhoWeAreSection.css";

export function WhoWeAreSection() {
  const stats = [
    { value: "50K+", label: "Active Users" },
    { value: "200+", label: "Team Members" },
    { value: "150+", label: "Countries" },
    { value: "1M+", label: "Projects Created" }
  ];

  const cards = [
    {
      title: "Our Mission",
      content: "To democratize design and empower creators everywhere to build exceptional digital experiences without barriers or limitations."
    },
    {
      title: "Our Vision",
      content: "A world where every creative vision can become reality, where innovation is limitless, and where design tools adapt to human creativity, not the other way around."
    },
    {
      title: "Our Values",
      content: "Innovation, accessibility, community, and excellence. We believe in building tools that respect your creativity while pushing the boundaries of what's possible."
    }
  ];

  return (
    <section className="about-section">
      {/* Background blur */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.1 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        className="about-bg-blur"
      />

      <main className="about-container">
        <div className="about-split-grid">
          
          {/* Left: Animated circles */}
          <motion.figure
            initial={{ opacity: 0, scale: 0.8, rotate: -20 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="animated-graphics-wrapper"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="circle-shape shape-sm top-left"
            >
              <div className="circle-gradient grad-1" />
            </motion.div>
            
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="circle-shape shape-xs center-right"
            >
              <div className="circle-gradient grad-2" />
            </motion.div>
            
            <motion.div
              animate={{ rotate: 360, scale: [1, 1.1, 1] }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="circle-shape shape-lg bottom-center"
            >
              <div className="circle-gradient grad-3" />
            </motion.div>
          </motion.figure>

          {/* Right: Content */}
          <article className="about-content">
            <motion.header
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <p className="about-subtitle">// OUR STORY</p>
              <h2 className="about-title">
                WHO WE <span className="accent-green">ARE</span>
              </h2>
            </motion.header>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="about-text-blocks"
            >
              <section className="about-intro-block">
                <p className="about-lead">
                  We're a team of passionate creators, designers, and innovators dedicated to <span className="accent-green">transforming digital experiences</span> into something extraordinary.
                </p>

                <motion.button whileHover={{ x: 5 }} className="ask-btn">
                  <span className="ask-btn-text">FEEL FREE TO ASK</span>
                  <svg className="ask-btn-icon" fill="none" viewBox="0 0 20 20">
                    <path d="M5.83333 5.83333H14.1667V14.1667" stroke="#FFEEDC" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    <path d="M5.83333 14.1667L14.1667 5.83333" stroke="#FFEEDC" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                  </svg>
                </motion.button>
              </section>

              <p className="about-desc">
                Founded in 2020, we started with a simple belief: that great design should be accessible, powerful, and intuitive. What began as a small project has grown into a platform trusted by thousands of creators worldwide.<br /><br />
                Today, we continue to push boundaries, challenge conventions, and empower our community to bring their boldest ideas to life.
              </p>
            </motion.div>
          </article>
        </div>

        {/* Stats Grid */}
        <motion.dl
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="stats-grid"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="stat-card"
            >
              <dt className="stat-value">{stat.value}</dt>
              <dd className="stat-label">{stat.label}</dd>
            </motion.div>
          ))}
        </motion.dl>

        {/* Mission, Vision, Values Cards */}
        <motion.ul
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="values-grid"
        >
          {cards.map((card, index) => (
            <motion.li
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="value-card"
            >
              <h3 className="value-title">{card.title}</h3>
              <p className="value-desc">{card.content}</p>
            </motion.li>
          ))}
        </motion.ul>
        
      </main>
    </section>
  );
}