/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
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

    const activeClassName = "text-red-500"; // Define active class

    return (
        <div className="overflow-hidden">
            <nav className="fixed top-0 left-0 flex w-full h-[90px] z-50 bg-black bg-opacity-70 items-center justify-between lg:px-[200px] px-4">
                {/* Logo */}
                <NavLink to="/">
                    <img src={logo} alt="logo" className="h-[50px]" />
                </NavLink>

                {/* Desktop Menu */}
                <ul className="hidden lg:flex items-center justify-between w-[650px] px-2">
                    <div className="flex items-center space-x-10">
                        {["/", "/about us", "/services", "/blog", "/case studies"].map((path, index) => (
                            <li key={index} className="font-black text-[12px] leading-[18px] text-white">
                                <NavLink
                                    to={path}
                                    className={({ isActive }) =>
                                        isActive ? activeClassName : "text-white"
                                    }
                                >
                                    {path === "/" ? "HOME" : path.toUpperCase().slice(1)}
                                </NavLink>
                            </li>
                        ))}
                    </div>
                    <div className="flex w-[80px] h-[40px] bg-[#ED0707] items-center justify-center">
                        <li className="font-black text-[12px] leading-[18px] text-white">
                            <NavLink
                                to="/contact"
                                className="text-white" // Always use default style for "Contact"
                            >
                                CALL US
                            </NavLink>
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
                        {["/", "/about us", "/services", "/blog", "/case studies"].map((path, index) => (
                            <li key={index} className="font-black text-[18px] text-white">
                                <NavLink
                                    to={path}
                                    onClick={handleLinkClick}
                                    className={({ isActive }) =>
                                        isActive ? activeClassName : "text-white"
                                    }
                                >
                                    {path === "/" ? "HOME" : path.toUpperCase().slice(1)}
                                </NavLink>
                            </li>
                        ))}
                        <li className="font-black text-[18px] bg-[#ED0707] px-4 py-2 rounded-lg">
                            <NavLink
                                to="/contact"
                                onClick={handleLinkClick}
                                className="text-white" // Default style for "Contact"
                            >
                                CALL US
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
