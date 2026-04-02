import React from 'react';
import { motion } from "motion/react";
import svgPaths from "../Assets/Dribbble.png";
import '../Common-Home/PartnersSection.css';

export function PartnersSection() {
    const partners = Array(6).fill(null);

    return (
        <section className="partnersSec">
            <main className="partnersSecContainer">
                
                <header className="partnersSecHeader">
                    <p className="partnersSecLabel">// Partners</p>
                    <p className="partnersSecDescription">
                        We don't just work with partners—we build creative alliances. Each collaboration is
                        intentional, bringing together unique strengths to push ideas further and create work
                        that stands out.
                    </p>
                </header>

                <section className="partnersSecGrid">
                    {partners.map((_, index) => (
                        <motion.article
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ scale: 1.05 }}
                            className="partnersSecItem"
                        >
                            <svg className="partnersSecIcon" fill="none" viewBox="0 0 41 41">
                                <path
                                    d={index % 2 === 0 ? svgPaths.p1d5bcc00 : svgPaths.p2749d480}
                                    fill="#FFEEDC"
                                    opacity="0.5"
                                    stroke="#FFEEDC"
                                />
                            </svg>
                        </motion.article>
                    ))}
                </section>

                <motion.button
                    whileHover={{ scale: 1.02 }}
                    className="partnersSecLoginBtn"
                >
                    Login
                </motion.button>
            </main>
        </section>
    );
}