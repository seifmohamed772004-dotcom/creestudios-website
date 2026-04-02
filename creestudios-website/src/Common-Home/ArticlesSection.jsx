import React from 'react';
import { motion } from "motion/react";
import imgImageMikeHunter from "../Assets/Mike Hunter.png";
import './ArticlesSection.css';

const ArticlesSection = () => {
    const articles = [
        {
            category: "Design Trends",
            date: "Mar 15",
            title: "The Future of Design Systems",
            description: "How modular design is reshaping creative workflows in 2025.",
            readTime: "5 min read",
        },
        {
            category: "Case Study",
            date: "Mar 12",
            title: "Building Trust Through Design",
            description: "A deep dive into creating authentic brand experiences.",
            readTime: "8 min read",
        },
        {
            category: "Research",
            date: "Mar 08",
            title: "User Research That Works",
            description: "Practical methods for understanding your audience better.",
            readTime: "6 min read",
        },
    ];

    return (
        <main className='articlesBody'>
            <section className='articlesContainer'>
                
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="articlesHeader"
                >
                    <p className="articlesSubtitle">// LATEST POSTS</p>
                    <h1 className="articlesTitle">
                        RECENT <span className="articlesTitleSpan">ARTICLES</span>
                    </h1>
                </motion.section>

                <section className="articlesGrid">
                    {articles.map((article, index) => (
                        <motion.article
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="articleCard"
                        >
                            <section className="articleCardTop">
                                <div className="articleCardGlow" />
                                <div className="articleCategoryBadge">
                                    <p className="articleCategoryText">{article.category}</p>
                                </div>
                            </section>

                            <section className="articleCardBottom">
                                <section className="articleMeta">
                                    <p className="articleDate">{article.date}</p>
                                    <p className="articleReadTime">{article.readTime}</p>
                                </section>

                                <h3 className="articleCardTitle">{article.title}</h3>
                                <p className="articleCardDesc">{article.description}</p>

                                <motion.button
                                    whileHover={{ x: 5 }}
                                    className="articleReadMore"
                                >
                                    Read More <span>→</span>
                                </motion.button>
                            </section>
                        </motion.article>
                    ))}
                </section>

                <motion.section
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="articlesFeatured"
                >
                    <section className="featuredImageWrapper">
                        <img
                            src={imgImageMikeHunter}
                            alt="Featured"
                            className="featuredImage"
                        />
                    </section>

                    <section className="featuredContent">
                        <div className="featuredBadge">
                            <p className="featuredBadgeText">Featured</p>
                        </div>
                        <h3 className="featuredTitle">
                            Design Innovation: Breaking Boundaries in Creative Technology
                        </h3>
                        <p className="featuredDesc">
                            Exploring the intersection of artificial intelligence and human creativity. How
                            emerging technologies are transforming the way we approach design challenges and
                            create meaningful experiences.
                        </p>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            className="featuredButton"
                        >
                            Read Full Article
                        </motion.button>
                    </section>
                </motion.section>

            </section>
        </main>
    );
};

export default ArticlesSection;