/* eslint-disable no-unused-vars */
import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaTumblr } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className="bg-gray-900 text-white py-10">
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-center space-y-6 md:space-y-0">

                {/* Brand Section */}
                <div className="flex flex-col items-start">
                    <div className="bg-orange-600 w-12 h-12 flex items-center justify-center rounded-md text-white font-bold text-2xl mb-2">
                        ID
                    </div>
                    <h3 className="text-2xl font-semibold">Interactive Digital</h3>
                    <p className="text-gray-400 mt-2">
                        Creates compelling online experiences in digital media for great brands.
                        <br />
                        <span className="text-orange-600 font-semibold">2024.</span>
                    </p>
                    <div className="flex space-x-4 mt-4">
                        <a href="#"><FaFacebook className="text-white text-xl hover:text-gray-400" /></a>
                        <a href="#"><FaTwitter className="text-white text-xl hover:text-gray-400" /></a>
                        <a href="#"><FaLinkedin className="text-white text-xl hover:text-gray-400" /></a>
                        <a href="#"><FaInstagram className="text-white text-xl hover:text-gray-400" /></a>
                    </div>
                </div>

                {/* Links Section */}
                <div className="flex space-x-10">
                    <div>
                        <h4 className="text-white font-semibold text-lg">Services</h4>
                        <ul className="mt-2 space-y-1 text-gray-400">
                            <li>Social Media</li>
                            <li>Online Advertising</li>
                            <li>Media</li>
                            <li>Website Design</li>
                            <li>Strategy</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-white font-semibold text-lg">Platforms</h4>
                        <ul className="mt-2 space-y-1 text-gray-400">
                            <li>About Us</li>
                            <li>Services</li>
                            <li>Portfolio</li>
                            <li>Case Study</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                </div>

                {/* Image Section */}
                <div className="flex flex-col items-center">
                    <img
                        src="https://via.placeholder.com/150"
                        alt="Placeholder"
                        className="w-36 h-auto rounded-lg mb-4"
                    />
                    <div className="flex space-x-4">
                        <a href="#"><FaFacebook className="text-white text-xl hover:text-gray-400" /></a>
                        <a href="#"><FaLinkedin className="text-white text-xl hover:text-gray-400" /></a>
                        <a href="#"><FaInstagram className="text-white text-xl hover:text-gray-400" /></a>
                        <a href="#"><FaTumblr className="text-white text-xl hover:text-gray-400" /></a>
                    </div>
                </div>
            </div>

            {/* Copyright Section */}
            <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-400 text-sm">
                @ 2024 interactivedigital. All rights reserved.
            </div>
        </div>
    );
};

export default Footer;
