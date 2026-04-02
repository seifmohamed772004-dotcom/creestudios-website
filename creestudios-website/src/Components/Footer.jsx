import React from 'react';
import { motion } from "motion/react";
import svgPaths from "../Assets/45arrow.png";
import '../Components/Footer.css';

const FooterSection = () => {
    const footerLinks = {
        Product: ["Features", "Pricing", "Integrations", "API", "Updates"],
        Company: ["About", "Team", "Careers", "Blog", "Press"],
        Resources: ["Community", "Help Center", "Tutorials", "Documentation", "Support"],
        Legal: ["Privacy", "Terms", "Security", "Cookies"],
    };

    return (
        <main className="footerBody">
            <section className="footerContainer">
                
                <section className="footerTopRow">
                    <section className="footerBrandSec">
                        <div className="footerLogoText">CREESTUDIOS</div>
                        <p className="footerBrandDesc">
                            Empowering designers and creators worldwide. Building the future of creative
                            collaboration, one project at a time.
                        </p>

                        <section className="footerSocials">
                            {["in", "𝕏", "FB", "IG"].map((social, index) => (
                                <motion.button
                                    key={index}
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    className="footerSocialBtn"
                                >
                                    <span className="footerSocialText">{social}</span>
                                </motion.button>
                            ))}
                        </section>

                        <section className="footerNewsletter">
                            <p className="footerNewsletterLabel">Subscribe to our newsletter</p>
                            <div className="footerNewsletterInputWrap">
                                <input
                                    type="email"
                                    placeholder="Your email"
                                    className="footerInput"
                                />
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="footerSubmitBtn"
                                >
                                    →
                                </motion.button>
                            </div>
                        </section>
                    </section>

                    <section className="footerLinksSec">
                        {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
                            <section key={categoryIndex} className="footerLinkColumn">
                                <h3 className="footerLinkCategory">{category}</h3>
                                <div className="footerLinkList">
                                    {links.map((link, linkIndex) => (
                                        <motion.div key={linkIndex} whileHover={{ x: 5 }}>
                                            <a href="#" className="footerLinkItem">{link}</a>
                                        </motion.div>
                                    ))}
                                </div>
                            </section>
                        ))}
                    </section>
                </section>

                <motion.section
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="footerCtaBanner"
                >
                    <section className="footerCtaTextWrap">
                        <h2 className="footerCtaTitle">READY TO START?</h2>
                        <p className="footerCtaDesc">
                            Join thousands of designers who are already shaping the future of creative work.
                        </p>
                    </section>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="footerCtaBtn"
                    >
                        Get Started Free
                    </motion.button>
                </motion.section>

                <section className="footerBottomBar">
                    <section className="footerBottomLeft">
                        <p className="footerCopyright">© 2026 CREESTUDIOS. All rights reserved.</p>
                        <div className="footerLegalLinks">
                            <a href="#" className="footerLegalItem">Privacy Policy</a>
                            <a href="#" className="footerLegalItem">Terms of Service</a>
                        </div>
                    </section>

                    <section className="footerLanguageSelector">
                        <svg className="footerLangIcon" fill="none" viewBox="0 0 17 17" stroke="#FFEEDC">
                            <path d={svgPaths.p1fbb6700} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" />
                        </svg>
                        <select className="footerLangDropdown">
                            <option value="en">English</option>
                            <option value="es">Español</option>
                            <option value="fr">Français</option>
                            <option value="de">Deutsch</option>
                        </select>
                    </section>
                </section>

                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    className="footerScrollTop"
                >
                    <span className="footerScrollTopIcon">↑</span>
                </motion.button>

            </section>
        </main>
    );
};

export default FooterSection;