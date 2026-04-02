import React from 'react';
import { motion } from "motion/react";
import '../Common-Home/Leaders.css';

export function LeadersSection() {
    const mainLeader = {
        emoji: "👩‍💼",
        name: "Seif Mohamed",
        title: "Co-Founder & CEO",
        description: "Former VP of Design at a Fortune 500 company. Sarah leads our vision with 15+ years of experience building products used by millions.",
        quote: '"Great design is invisible—it just works."',
    };

    const otherLeaders = [
        { emoji: "👤", name: "Alex Rivera", title: "VP of Engineering", location: "📍 Barcelona, Spain" },
        { emoji: "👤", name: "Marcus Johnson", title: "Co-Founder & CTO", location: "📍 San Francisco, USA" },
        { emoji: "👤", name: "Priya Patel", title: "VP of Product", location: "📍 London, UK" },
        { emoji: "👤", name: "Yuki Tanaka", title: "VP of Design", location: "📍 Tokyo, Japan" },
        { emoji: "👤", name: "James Williams", title: "VP of Operations", location: "📍 Sydney, Australia" },
    ];

    return (
        <section className="leadersSec">
            <main className="leadersSecContainer">
                
                <motion.header
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="leadersSecHeader"
                >
                    <p className="leadersSecLabel">// LEADERSHIP</p>
                    <h1 className="leadersSecTitle">
                        <span className="leadersTitleSpanLight">OUR </span>
                        <span className="leadersTitleSpanDark">LEADERS</span>
                    </h1>
                </motion.header>

                <section className="leadersSecLayout">
                    
                    <motion.section
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="leadersSecLeft"
                    >
                        <motion.article whileHover={{ scale: 1.02 }} className="leadersSecMainCard">
                            <figure className="leadersSecMainAvatar">
                                <span className="leadersSecEmoji">{mainLeader.emoji}</span>
                            </figure>

                            <section className="leadersSecMainInfo">
                                <h2 className="leadersSecMainName">{mainLeader.name}</h2>
                                <p className="leadersSecMainTitle">{mainLeader.title}</p>
                                <p className="leadersSecMainDesc">{mainLeader.description}</p>
                            </section>

                            <blockquote className="leadersSecMainQuote">
                                <p className="leadersSecQuoteText">{mainLeader.quote}</p>
                            </blockquote>

                            <section className="leadersSecSocials">
                                <motion.button whileHover={{ scale: 1.1 }} className="leadersSecSocialBtn">in</motion.button>
                                <motion.button whileHover={{ scale: 1.1 }} className="leadersSecSocialBtn">𝕏</motion.button>
                            </section>

                            <button className="leadersSecLoginBtn">Login</button>
                        </motion.article>

                        <motion.article whileHover={{ scale: 1.02 }} className="leadersSecSubCard">
                            <figure className="leadersSecSubAvatar">
                                <span className="leadersSecEmojiSm">{otherLeaders[0].emoji}</span>
                            </figure>
                            <h3 className="leadersSecSubName">{otherLeaders[0].name}</h3>
                            <p className="leadersSecSubTitle">{otherLeaders[0].title}</p>
                            <p className="leadersSecSubLocation">{otherLeaders[0].location}</p>
                        </motion.article>
                    </motion.section>

                    <section className="leadersSecRight">
                        {otherLeaders.slice(1).map((leader, index) => (
                            <motion.article
                                key={index}
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ scale: 1.02 }}
                                className="leadersSecSubCard"
                            >
                                <figure className="leadersSecSubAvatar">
                                    <span className="leadersSecEmojiSm">{leader.emoji}</span>
                                </figure>
                                <h3 className="leadersSecSubName">{leader.name}</h3>
                                <p className="leadersSecSubTitle">{leader.title}</p>
                                <p className="leadersSecSubLocation">{leader.location}</p>
                            </motion.article>
                        ))}
                    </section>

                </section>
            </main>
        </section>
    );
}