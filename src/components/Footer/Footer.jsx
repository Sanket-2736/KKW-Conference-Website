import React from 'react';
import './Footer.css';
import FooterLogo from '../../assets/footer-logo.png';
import PJPawarImg from '../../assets/PJPawar.jpeg';
import RKMunjeImg from '../../assets/RKMunje.jpeg';

function Footer() {
    return (
        <>
            <div className="contact-cards">
                <div className="card-heading">
                    <h2>ADDRESS FOR COMMUNICATION</h2>
                </div>
                <div className="contact-card">
                    <div className="card-left">
                        <h3>Prof. Dr. P.J. Pawar</h3>
                        <p>Professor, Department of Mechanical Engineering</p>
                        <p>K.K. Wagh Institute of Engineering Education and Research, Amrutdham, Panchavati, Nashik 422003, MS, India</p>
                        <p><strong>Mobile:</strong> +91 8983050973</p>
                        <p><strong>Email:</strong> pjpawar@kkwagh.edu.in</p>
                    </div>
                    <div className="card-right">
                        <img src={PJPawarImg} alt="" />
                    </div>
                </div>
                <div className="contact-card">
                    <div className="card-left">
                        <h3>Prof. Dr. R. K. Munje</h3>
                        <p>Dean R and D, Head, Department of Electrical Engineering</p>
                        <p>K.K. Wagh Institute of Engineering Education and Research, Amrutdham, Panchavati, Nashik 422003, MS, India</p>
                        <p><strong>Mobile:</strong> +91 9923181711</p>
                        <p><strong>Email:</strong> rkmunje@kkwagh.edu.in</p>
                    </div>
                    <div className="card-right">
                        <img src={RKMunjeImg} alt="" />
                    </div>
                </div>
            </div>
            <div className="footer" id="contact-us">
                <div className="cover-div">
                    <div className="above-content">
                        <h2>Contact Us</h2>
                    </div>
                    <div className="below-content">
                        <div className="left-content">
                            <ul>
                                <li>
                                    <span><span className="icon"><i className="fa-solid fa-location-dot"></i></span> Address:</span>
                                    <p>Hirabai Haridas Vidyanagari, Amrutdham, Panchavati, Nashik 422003</p>
                                </li>
                                <li>
                                    <span><span className="icon"><i className="fa-solid fa-envelope"></i></span>Email:</span>
                                    <p>kkwieer@kkw.edu.in, kkwieer@gmail.com</p>
                                </li>
                                <li>
                                    <span><span className="icon"><i className="fa-solid fa-phone"></i></span>Phone:</span>
                                    <p>0253-2512876 / 0253-2518864 / 0253-2516671</p>
                                </li>
                                <li>
                                    <span><span className="icon"><i className="fa-solid fa-business-time"></i></span>Office Hours:</span>
                                    <p>Monday - Saturday: 9:00 AM - 5:00 PM</p>
                                </li>
                            </ul>
                        </div>
                        <div className="right-content">
                            <ul>
                                <li>
                                    <span className="right-heading">Get Connected With Us:</span>
                                    <div className="social-icons">
                                        <a href="https://www.facebook.com/kkwieer" target="_blank" rel="noopener noreferrer">
                                            <span className="icon"><i className="fa-brands fa-facebook"></i></span>
                                        </a>
                                        <a href="https://twitter.com/kkwieer" target="_blank" rel="noopener noreferrer">
                                            <span className="icon"><i className="fa-brands fa-square-twitter"></i></span>
                                        </a>
                                        <a href="https://www.linkedin.com/kkwieer" target="_blank" rel="noopener noreferrer">
                                            <span className="icon"><i className="fa-brands fa-linkedin"></i></span>
                                        </a>
                                    </div>
                                </li>
                                <li>
                                    <span className="right-heading">Quick Links:</span>
                                    <ul className="quick-links">
                                        <li><a href="/about">About Us</a></li>
                                        <li><a href="/committee">Committee</a></li>
                                        <li><a href="/registration">Registration</a></li>
                                        <li><a href="/events">Events</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <span className="right-heading">About KKWIEER:</span>
                                    <p>K.K. Wagh Institute is dedicated to providing high-quality engineering education and research opportunities.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="copyright center">
                    <p>&copy; 2024 KKWIEER. All rights reserved.</p>
                </div>
            </div>
        </>
    );
}

export default Footer;
