/* eslint-disable no-unused-vars */
import { useState, useRef } from 'react'
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaTumblr } from 'react-icons/fa';
import logo from "../assets/logo.png"
import { Link } from 'react-router-dom';
import { Play, Pause } from 'lucide-react'


const Footer = () => {

    const [isPlaying, setIsPlaying] = useState(false)
    const videoRef = useRef(null);

    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause()
            } else {
                videoRef.current.play()
            }
            setIsPlaying(!isPlaying)
        }
    }
    return (
        <div className="bg-[#1B2534] w-full h-[458px] py-20 text-white flex flex-col items-center justify-center">
            <div className="w-[1168px] h-[315px] flex items-center justify-between px-4">
                {/* Brand Section */}
                <div className="flex flex-col items-start w-[213px] h-[287px] justify-between py-5">
                    <div>
                        <div className="w-12 h-12 flex items-center gap-1">
                            <img src={logo} alt='logo' className='object-cover' loading='lazy' />
                            <h3 className="text-2xl font-semibold">Interactive Digital</h3>
                        </div>
                        <p className="text-gray-400 mt-2 w-full h-[100px] text-[16px] font-normal leading-[25px]">
                            Creates compelling online experiences in digital media for great brands.
                            <br />
                            <span className="text-[#FF0226] font-semibold">2024.</span>
                        </p>
                    </div>
                    <div className="flex space-x-4 mt-4">
                        <a href="#"><FaFacebook className="text-white text-xl hover:text-[#FF0226]" /></a>
                        <a href="#"><FaTwitter className="text-white text-xl hover:text-[#FF0226]" /></a>
                        <a href="#"><FaLinkedin className="text-white text-xl hover:text-[#FF0226]" /></a>
                        <a href="#"><FaInstagram className="text-white text-xl hover:text-[#FF0226]" /></a>
                    </div>
                </div>

                {/* middle Section */}
                <div className='w-[363px] h-[234px] flex items-center justify-center rounded-[23px] bg-[#283343]'>
                    <div className='w-[270px] h-[158px] flex gap-6'>
                        <div className='flex flex-col'>
                            <h2>Services</h2>
                            <ul>
                                <li><Link to="/" className='text-[#ABABAB]'>social Media </Link></li>
                                <li><Link to="/" className='text-[#ABABAB]'>Online advertising </Link></li>
                                <li><Link to="/" className='text-[#ABABAB]'>Media </Link></li>
                                <li><Link to="/" className='text-[#ABABAB]'>Website Design </Link></li>
                                <li><Link to="/" className='text-[#ABABAB]'>Strategy </Link></li>
                            </ul>
                        </div>
                        <div className='flex flex-col'>
                            <h2>Platforms</h2>
                            <ul>
                                <li><Link to="/" className='text-[#ABABAB]'>About Us </Link></li>
                                <li><Link to="/" className='text-[#ABABAB]'>Services</Link></li>
                                <li><Link to="/" className='text-[#ABABAB]'>Portfolio </Link></li>
                                <li><Link to="/" className='text-[#ABABAB]'>Case Study </Link></li>
                                <li><Link to="/" className='text-[#ABABAB]'>Contact </Link></li>
                            </ul>
                        </div>
                    </div>

                </div>

                {/* video Section */}
                <div className="relative w-[297px] h-[236px] rounded-lg overflow-hidden cursor-pointer" onClick={togglePlay}>
                    <video
                        ref={videoRef}
                        className="w-full h-full object-cover"
                        loop
                        playsInline
                        src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                    />
                    {!isPlaying && (
                        <div className="absolute inset-0 bg-black/20 flex items-center justify-center transition-opacity duration-300">
                            <div className="w-16 h-16 rounded-full bg-[#ff7171] flex items-center justify-center transition-transform hover:scale-110">
                                <Play className="w-8 h-8 text-white fill-white translate-x-0.5" />
                            </div>
                        </div>
                    )}
                    {isPlaying && (
                        <div className="absolute bottom-4 right-4 opacity-0 hover:opacity-100 transition-opacity duration-300">
                            <div className="w-10 h-10 rounded-full bg-black/50 flex items-center justify-center">
                                <Pause className="w-5 h-5 text-white" />
                            </div>
                        </div>
                    )}
                </div>



            </div>

            {/* Copyright Section */}
            <div className="border-t border-gray-700 w-[1000px] flex justify-between mt-8 pt-4 text-gray-400 text-sm">
                <span>
                    @ 2024 interactivedigital. All rights reserved.
                </span>
                <div className="flex space-x-4">
                    <a href="#"><FaFacebook className="text-white text-xl hover:text-[#FF0226]" /></a>
                    <a href="#"><FaTwitter className="text-white text-xl hover:text-[#FF0226]" /></a>
                    <a href="#"><FaLinkedin className="text-white text-xl hover:text-[#FF0226]" /></a>
                    <a href="#"><FaInstagram className="text-white text-xl hover:text-[#FF0226]" /></a>
                </div>
            </div>
        </div>
    );
};

export default Footer;
