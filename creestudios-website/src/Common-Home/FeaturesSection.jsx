import React from 'react';
import { motion } from "motion/react";
import svgPaths from "../Assets/45arrow.png";
import img1 from "../Assets/AboutSecimg1.png";
import img2 from "../Assets/AboutSecimg2.png";
import './FeaturesSection.css';

const FeaturesSection = () => {
    const features = [
        {
            number: "01",
            badge: "Feature Set",
            title: "Empowering Creative Visibility",
            description: "Our platform is built to help designers and digital creators showcase their work in a structured, professional environment. By combining discovery tools, portfolio management, and cross-device accessibility, it enables creators to present their ideas clearly.",
            image: img1,
            align: "left",
        },
        {
            number: "02",
            badge: "Feature Set",
            title: "Creative Control & Management",
            description: "The system enables creators to efficiently upload, manage, and organize their work within a structured environment. With built-in moderation and management tools, it balances creative expression with professional control.",
            image: img2,
            align: "right",
        },
    ];

    return (
        <main className="featuresBody">
            <section className="featuresContainer">
                
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="featuresHeader"
                >
                    <p className="featuresSubtitle">// Capabilities</p>
                    <h1 className="featuresTitle">
                        BUILT FOR<br />
                        <span className="featuresTitleSpan">CREATORS</span>
                    </h1>
                </motion.section>

                <section className="featuresList">
                    {features.map((feature, index) => (
                        <motion.section
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="featureItem"
                        >
                            <div className="featureWatermark">{feature.number}</div>

                            <section className={`featureContentRow ${feature.align === 'right' ? 'rowReverse' : ''}`}>
                                
                                <section className="featureTextContent">
                                    <div className="featureTextHeader">
                                        <motion.div whileHover={{ scale: 1.05 }} className="featureBadge">
                                            <p className="featureBadgeText">{feature.badge}</p>
                                        </motion.div>
                                        <h2 className="featureContentTitle">{feature.title}</h2>
                                    </div>

                                    <div className="featureDescWrap">
                                        <p className="featureDesc">{feature.description}</p>
                                    </div>

                                    <motion.button whileHover={{ scale: 1.05 }} className="featureKnowMoreBtn">
                                        <span className="featureKnowMoreText">KNOW MORE</span>
                                        <svg className="featureKnowMoreIcon" fill="none" viewBox="0 0 20 20">
                                            <path d={svgPaths.p3e47bd00} stroke="#FFEEDC" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                                            <path d={svgPaths.p3610fb80} stroke="#FFEEDC" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                                        </svg>
                                    </motion.button>
                                </section>

                                <motion.section whileHover={{ scale: 1.02 }} className="featureImageWrapper">
                                    <div className="featureImageContainer">
                                        <img src={feature.image} alt={feature.title} className="featureImgMain" />
                                        {feature.image2 && (
                                            <img src={feature.image2} alt={feature.title} className="featureImgOverlay" />
                                        )}
                                        <div className="featureImageTint" />
                                        
                                        <div className="featureImageTag">
                                            <p className="featureImageTagText">Know Us More?</p>
                                        </div>
                                    </div>
                                </motion.section>

                            </section>
                        </motion.section>
                    ))}
                </section>

                <motion.button whileHover={{ scale: 1.02 }} className="featuresLoginBtn">
                    <p className="featuresLoginBtnText">Login</p>
                </motion.button>

            </section>
        </main>
    );
};

export default FeaturesSection;