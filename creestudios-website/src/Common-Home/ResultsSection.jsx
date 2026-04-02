import React from 'react';
import { motion } from "motion/react";
import '../Common-Home/ResultsSection.css';

export function ResultsSection() {
    const results = [
        { value: "156%", label: "Sales Increase", sublabel: "Q1 vs previous year" },
        { value: "45K", label: "New Followers", sublabel: "First 30 days" },
        { value: "4.8x", label: "Engagement Rate", sublabel: "Social media" },
        { value: "28%", label: "Market Share", sublabel: "+12% growth" },
    ];

    return (
        <section className="resultsSec">
            <main className="resultsSecContainer">
                
                <motion.header
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="resultsSecHeader"
                >
                    <p className="resultsSecLabel">// Our WORK</p>
                    <h1 className="resultsSecTitle">
                        <span className="resultsTitleSpanLight">PROVEN </span>
                        <span className="resultsTitleSpanDark">RESULTS</span>
                    </h1>
                </motion.header>

                <motion.article
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="resultsSecCard"
                >
                    <section className="resultsSecCardTop">
                        <section className="resultsSecCardTopLeft">
                            <span className="resultsSecBadge">Fashion & Apparel</span>
                            <section className="resultsSecCardTitles">
                                <h2 className="resultsSecCardTitle">Urban Threads</h2>
                                <p className="resultsSecCardSubtitle">Brand Repositioning</p>
                            </section>
                        </section>

                        <motion.figure
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.5 }}
                            className="resultsSecIcon"
                        >
                            <span className="resultsSecIconEmoji">👗</span>
                        </motion.figure>
                    </section>

                    <section className="resultsSecGridContainer">
                        <h3 className="resultsSecGridTitle">THE RESULTS</h3>
                        <section className="resultsSecGrid">
                            {results.map((result, index) => (
                                <motion.article
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="resultsSecGridItem"
                                >
                                    <h4 className="resultsGridItemValue">{result.value}</h4>
                                    <p className="resultsGridItemLabel">{result.label}</p>
                                    <p className="resultsGridItemSublabel">{result.sublabel}</p>
                                </motion.article>
                            ))}
                        </section>
                    </section>

                    <footer className="resultsSecCardBottom">
                        <section className="resultsSecCardBottomItem">
                            <p className="resultsSecCardBottomLabel">TIMELINE</p>
                            <p className="resultsSecCardBottomValue">6 months</p>
                        </section>
                        <section className="resultsSecCardBottomItem">
                            <p className="resultsSecCardBottomLabel">BUDGET</p>
                            <p className="resultsSecCardBottomValue">$250K</p>
                        </section>
                    </footer>
                </motion.article>

                <motion.button
                    whileHover={{ scale: 1.02 }}
                    className="resultsSecLoginBtn"
                >
                    Login
                </motion.button>
            </main>
        </section>
    );
}