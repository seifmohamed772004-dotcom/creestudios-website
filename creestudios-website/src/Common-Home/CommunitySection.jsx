import React from 'react';
import { motion } from "motion/react";
import svgPaths from "../Assets/Google.png";
import './CommunitySection.css';

const CommunitySection = () => {
    const stats = [
        { label: "Active Users", value: "21,997", colorClass: "statGreen" },
        { label: "Currently Working", value: "16,486", colorClass: "statCream" },
        { label: "Friends Linked", value: "77,664", colorClass: "statMutedGreen" },
    ];

    return (
        <main className="communityBody">
            <section className="communityContainer">
                
                <motion.section
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="communityLeft"
                >
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="statBox"
                        >
                            <motion.div
                                initial={{ x: "-100%" }}
                                whileInView={{ x: "0%" }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, delay: index * 0.2 }}
                                className="statBgAnim"
                            />
                            <section className="statContent">
                                <p className="statLabel">{stat.label}</p>
                                <motion.p
                                    initial={{ scale: 0.5, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.2 + 0.3, type: "spring" }}
                                    className={`statValue ${stat.colorClass}`}
                                >
                                    {stat.value}
                                </motion.p>
                            </section>
                        </motion.div>
                    ))}
                </motion.section>

                <motion.section
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="communityRight"
                >
                    <section className="communityHeader">
                        <p className="communitySubtitle">// Community Data</p>
                        <h1 className="communityTitle">
                            JOIN THE<br />
                            <span className="communityTitleSpan">DIGITAL</span><br />
                            <span className="communityTitleSpan">REVOLUTION</span>
                        </h1>
                    </section>

                    <motion.button
                        whileHover={{ scale: 1.05, rotate: -1 }}
                        whileTap={{ scale: 0.95 }}
                        className="communityGetAppBtn"
                    >
                        <div className="btnInnerSkew">
                            <svg className="btnIcon" fill="none" viewBox="0 0 11.667 16.667">
                                <path d={svgPaths.p1937aa00} fill="#FFEEDC" />
                            </svg>
                            <span className="btnText">GET THE APP</span>
                        </div>
                    </motion.button>

                    <section className="downloadOptions">
                        <motion.button whileHover={{ scale: 1.05 }} className="storeBtn">
                            <svg className="storeIcon" fill="none" viewBox="0 0 20 24">
                                <path d={svgPaths.p188ed800} fill="#181818" />
                            </svg>
                            <div className="storeBtnTextWrap">
                                <p className="storeBtnLabel">Download on the</p>
                                <p className="storeBtnName">APP STORE</p>
                            </div>
                        </motion.button>

                        <motion.button whileHover={{ scale: 1.05 }} className="storeBtn">
                            <svg className="storeIcon" fill="none" viewBox="0 0 22.0658 24">
                                <path d={svgPaths.p7780b00} fill="#ACACAC" />
                                <path d={svgPaths.p16d7cd00} fill="#5E5E5E" />
                                <path d={svgPaths.p2d677b00} fill="#464646" />
                                <path d={svgPaths.p8ee9e00} fill="#181818" />
                            </svg>
                            <div className="storeBtnTextWrap">
                                <p className="storeBtnLabel">Download on the</p>
                                <p className="storeBtnName">PLAY STORE</p>
                            </div>
                        </motion.button>
                    </section>
                </motion.section>

            </section>
        </main>
    );
};

export default CommunitySection;