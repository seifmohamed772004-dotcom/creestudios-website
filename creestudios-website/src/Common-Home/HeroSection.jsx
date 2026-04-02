import React from 'react';
import { motion } from "motion/react";
import imgImageCreestudios from "../Assets/White Logo.png";
import '../Common-Home/HeroSection.css';
import { Link } from 'react-router-dom';

export function HeroSection() {
    return (
        <section className="heroSec">
            
            <motion.div
                className="heroSecBlob"
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            />

            <main className="heroSecContainer">
                <section className="heroSecLayout">
                    
                    <motion.section
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="heroSecLeft"
                    >
                        <header className="heroSecTitleWrapper">
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2, duration: 0.6 }}
                                className="heroSecTitleLine"
                            >
                                BE THE
                            </motion.h1>
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4, duration: 0.6 }}
                                className="heroSecTitleLine"
                            >
                                <span className="heroTitleSpanDark">SOUND</span>
                            </motion.h1>
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6, duration: 0.6 }}
                                className="heroSecTitleLine"
                            >
                                OF
                            </motion.h1>
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.8, duration: 0.6 }}
                                className="heroSecTitleLine"
                            >
                                DESIGN
                            </motion.h1>
                        </header>

                        <motion.section
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1, duration: 0.6 }}
                            className="heroSecLeftBottom"
                        >
                            <p className="heroSecSubtitle">
                                The ultimate platform for designers to showcase, collaborate, and grow.
                            </p>

                            <section className="heroSecButtons">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="heroBtnPrimaryWrapper"
                                >
                                    <div className="heroBtnPrimary">
                                        <span className="heroBtnPrimaryText">START NOW</span>
                                    </div>
                                </motion.button>

                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="heroBtnSecondaryWrapper"
                                >
                                    <div className="heroBtnSecondary">
                                        <Link to="/About" className='LinkS'><span className="heroBtnSecondaryText">EXPLORE</span></Link>
                                    </div>
                                </motion.button>
                            </section>
                        </motion.section>
                    </motion.section>

                    <motion.section
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="heroSecRight"
                    >
                        <article className="heroSecStatusCard">
                            <div className="heroSecStatusBar" />

                            <section className="heroSecStatusContent">
                                <header className="heroSecStatusHeader">
                                    <p className="heroSecStatusLabel">SYSTEM STATUS</p>
                                    <motion.div
                                        animate={{ opacity: [0.5, 1, 0.5] }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                        className="heroSecStatusIndicator"
                                    />
                                </header>

                                <section className="heroSecStatusInfo">
                                    <h2 className="heroSecStatusTitle">MOBILE APP</h2>
                                    <div className="heroSecStatusBadge">
                                        <p className="heroSecStatusBadgeText">Under Maintenance</p>
                                    </div>
                                </section>

                                <section className="heroSecProgressWrapper">
                                    <div className="heroSecProgressBarBg">
                                        <motion.div
                                            initial={{ width: "0%" }}
                                            animate={{ width: "70%" }}
                                            transition={{ duration: 1.5, delay: 1 }}
                                            className="heroSecProgressBarFill"
                                        />
                                    </div>
                                    <footer className="heroSecProgressFooter">
                                        <p className="heroSecProgressText">ETA (2 Days - 16 Hrs)</p>
                                        <p className="heroSecProgressText">70%</p>
                                    </footer>
                                </section>
                            </section>

                            <figure className="heroSecVideoElementWrapper">
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                    className="heroSecVideoElement"
                                />
                            </figure>
                        </article>
                    </motion.section>

                </section>

                <motion.figure
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2, duration: 0.6 }}
                    className="heroSecLogoWrapper"
                >
                    <img src={imgImageCreestudios} alt="CREESTUDIOS" className="heroSecLogo" />
                </motion.figure>
            </main>
        </section>
    );
}