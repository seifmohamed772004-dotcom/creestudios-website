import React from "react";
import { motion } from "motion/react";
import "../Common-About/StartToFinishSection.css";

export function StartToFinishSection() {
  const steps = [
    { num: "01", emoji: "🔍", title: "Discovery", time: "1-2 weeks" },
    { num: "02", emoji: "✏️", title: "Strategy", time: "2-3 weeks" },
    { num: "03", emoji: "🎨", title: "Design & Identity", time: "3-4 weeks" },
    { num: "04", emoji: "🚀", title: "Launch", time: "1-2 weeks" },
    { num: "05", emoji: "📊", title: "Optimization", time: "Ongoing" }
  ];

  return (
    <section className="workflow-section">
      <main className="workflow-container">
        
        <motion.header
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="workflow-header"
        >
          <p className="workflow-subtitle">// FIVE PHASES</p>
          <h2 className="workflow-title">
            START TO <span className="accent-green">FINISH</span>
          </h2>
        </motion.header>

        <ol className="workflow-list">
          {steps.map((step, index) => (
            <motion.li
              key={step.num}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="workflow-step-card"
            >
              <motion.figure
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="step-badge"
              >
                <span className="step-num">{step.num}</span>
              </motion.figure>
              
              <p className="step-emoji">{step.emoji}</p>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-time">{step.time}</p>
            </motion.li>
          ))}
        </ol>

      </main>
    </section>
  );
}