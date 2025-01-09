/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

import logo from "../assets/logo.png";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleLinkClick = () => {
        setIsMenuOpen(false); // Close the menu when a link is clicked
    };

    return (
        <div className="overflow-hidden">
            <nav className="fixed top-0 left-0 flex w-full h-[90px] z-50 bg-black bg-opacity-70 items-center justify-between lg:px-[200px] px-4">
                {/* Logo */}
                <Link to="/">
                    <img src={logo} alt="logo" className="h-[50px]" />
                </Link>

                {/* Desktop Menu */}
                <ul className="hidden lg:flex items-center justify-between w-[650px] px-2">
                    <div className="flex items-center space-x-10">
                        <li className="font-black text-[12px] leading-[18px] text-white">
                            <Link to="/">HOME</Link>
                        </li>
                        <li className="font-black text-[12px] leading-[18px] text-white">
                            <Link to="/about">ABOUT US</Link>
                        </li>
                        <li className="font-black text-[12px] leading-[18px] text-white">
                            <Link to="/services">SERVICES</Link>
                        </li>
                        <li className="font-black text-[12px] leading-[18px] text-white">
                            <Link to="/blog">BLOG</Link>
                        </li>
                        <li className="font-black text-[12px] leading-[18px] text-white">
                            <Link to="/casestudy">CASE STUDY</Link>
                        </li>
                    </div>
                    <div className="flex w-[80px] h-[40px] bg-[#ED0707] items-center justify-center">
                        <li className="font-black text-[12px] leading-[18px] text-white">
                            <Link to="/contact">CALL US</Link>
                        </li>
                    </div>
                </ul>

                {/* Hamburger Menu (Mobile) */}
                <div className="lg:hidden">
                    <button onClick={toggleMenu} className="text-white text-2xl">
                        {isMenuOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>

                {/* Mobile Menu */}
                <div
                    className={`fixed top-0 right-0 h-full w-[80%] bg-black bg-opacity-90 z-40 transform ${isMenuOpen ? "translate-x-0" : "translate-x-full"
                        } transition-transform duration-300`}
                >
                    <ul className="flex flex-col items-center justify-center h-full space-y-8">
                        <li className="font-black text-[18px] text-white">
                            <Link to="/" onClick={handleLinkClick}>
                                HOME
                            </Link>
                        </li>
                        <li className="font-black text-[18px] text-white">
                            <Link to="/about" onClick={handleLinkClick}>
                                ABOUT US
                            </Link>
                        </li>
                        <li className="font-black text-[18px] text-white">
                            <Link to="/services" onClick={handleLinkClick}>
                                SERVICES
                            </Link>
                        </li>
                        <li className="font-black text-[18px] text-white">
                            <Link to="/blog" onClick={handleLinkClick}>
                                BLOG
                            </Link>
                        </li>
                        <li className="font-black text-[18px] text-white">
                            <Link to="/casestudy" onClick={handleLinkClick}>
                                CASE STUDY
                            </Link>
                        </li>
                        <li className="font-black text-[18px] text-white bg-[#ED0707] px-4 py-2 rounded-lg">
                            <Link to="/contact" onClick={handleLinkClick}>
                                CALL US
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
