import React from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaMapMarkerAlt,
    FaPhoneAlt,
    FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer-wrap" id="footer">
            <div className="container footer-grid">
                <div>
                    <h4 className="footer-heading">Panipuri Store</h4>
                    <p className="footer-text">
                        Serving authentic and delicious panipuri since 2023.
                        Made with love and the finest ingredients.
                    </p>

                    <div className="footer-social">
                        <a href="https://zomato.onelink.me/xqzv/4euxppzx">
                            <img
                                src="/src/assets/zomato.png"
                                alt="icon"
                                className="social-icon"
                            />
                        </a>
                        <a href="https://www.facebook.com/share/17gknnAFFo/">
                            <img
                                src="/src/assets/facebook.jpg"
                                alt="icon"
                                className="social-icon"
                            />
                        </a>
                        <a href="https://www.instagram.com/patnagarpanipuri?igsh=cDQ0azV0eHJ2ZnI2">
                            <img
                                src="/src/assets/instagram.jpg"
                                alt="icon"
                                className="social-icon"
                            />
                        </a>
                    </div>
                </div>

                <div>
                    <h4 className="footer-heading">Quick Links</h4>
                    <ul className="footer-links-list">
                        <li>
                            <a href="#herobanner">About Us</a>
                        </li>
                        <li>
                            <a href="#menu">Menu</a>
                        </li>
                        <li>
                            <a href="#gallery">Gallery</a>
                        </li>
                        <li>
                            <a href="#testimonial">Reviews</a>
                        </li>
                    </ul>
                </div>

                <div>
                    <h4 className="footer-heading">Contact Us</h4>
                    <ul className="footer-contact">
                        <ul className="footer-contact">
                            <ul className="footer-contact">
                                <li>
                                    <a
                                        href="https://maps.app.goo.gl/zrSjtKW3hwEpUTDy9?g_st=aw"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="contact-item"
                                    >
                                        <FaMapMarkerAlt className="contact-icon" />
                                        <span>
                                            Unit No. G/2, Lal Bhuvan Complex,
                                            Plot No. 493/2, near GH6 Pujya Mota
                                            Circle, Sector 22, Gandhinagar,
                                            Gujarat 382021
                                        </span>
                                    </a>
                                </li>

                                <li>
                                    <a
                                        href="tel:+919664864133"
                                        className="contact-item"
                                    >
                                        <FaPhoneAlt className="contact-icon" />
                                        <span>+91 96648 64133</span>
                                    </a>
                                </li>

                                <li>
                                    <a
                                        href="mailto:patnagarpanipuri@gmail.com"
                                        className="contact-item"
                                    >
                                        <FaEnvelope className="contact-icon" />
                                        <span>patnagarpanipuri@gmail.com</span>
                                    </a>
                                </li>
                            </ul>
                        </ul>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom container">
                <p>© 2025 Patnagar Panipuri. All rights reserved.</p>
                {/* <div className="footer-bottom-links">
                    <a href="#">Privacy</a>
                    <a href="#">Terms</a>
                    <a href="#">Cookies</a>
                </div> */}
            </div>
        </footer>
    );
};

export default Footer;
