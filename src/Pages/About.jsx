/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable no-irregular-whitespace */
/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react"
import aboutbg from "../assets/about/abtbanner.png"
import SlickSlider from "../Components/SlickSlider";

import AOS from "aos";
import "aos/dist/aos.css";

import about1 from "../assets/about/about1.png"
import about2 from "../assets/about/about2.png"
import about3 from "../assets/about/about3.png"
import about4 from "../assets/about/about4.png"
import about5 from "../assets/about/about5.png"
import about6 from "../assets/about/about6.png"
import chart from "../assets/about/chart.png"
import pattern from "../assets/about/pattern.png"
import missionImg from "../assets/about/missionImg.png"


import { FaArrowRight } from "react-icons/fa";
import CountUp from "react-countup";
import { motion, stagger, useAnimate } from "framer-motion";

const randomNumberBetween = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};



const About = () => {
    // window.scrollTo({
    //     top: 0,
    //     behavior: 'smooth',
    // });

    const valuesData = [
        { title: "Excellence", description: "Setting the highest standards in digital innovation" },
        { title: "Leadership", description: "Pioneering new paths in digital transformation" },
        { title: "Integrity", description: "Building trust through transparent partnerships" },
        { title: "Teamwork", description: "Collaborating to create exceptional outcomes" },
        { title: "Empathy", description: "Understanding audiences to deliver authentic connections" },
    ];

    const [activeIndex, setActiveIndex] = useState(null);

    const toggleContent = (index) => {
        setActiveIndex(activeIndex === index ? null : index); // Toggle content visibility
    };

    const [scope, animate] = useAnimate();
    const onButtonClick = () => {
        const sparkles = Array.from({ length: 20 });
        const sparklesAnimation = sparkles.map((_, index) => [
            `.sparkle-${index}`,
            {
                x: randomNumberBetween(-150, 150), // Increase movement range
                y: randomNumberBetween(-150, 150),
                scale: randomNumberBetween(2, 3), // Larger sparkles
                opacity: 1,
            },
            {
                duration: 0.8, // Slower animation
                at: "<",
            },
        ]);

        const sparklesFadeOut = sparkles.map((_, index) => [
            `.sparkle-${index}`,
            {
                opacity: 0,
                scale: 0,
            },
            {
                duration: 1, // Slower fade-out
                at: "<",
            },
        ]);

        const sparklesReset = sparkles.map((_, index) => [
            `.sparkle-${index}`,
            {
                x: 0,
                y: 0,
            },
            {
                duration: 0.000001,
            },
        ]);

        animate([
            ...sparklesReset,
            [".letter", { y: -32 }, { duration: 0.2, delay: stagger(0.05) }],
            ["button", { scale: 0.8 }, { duration: 0.1, at: "<" }],
            ["button", { scale: 1 }, { duration: 0.1 }],
            ...sparklesAnimation,
            [".letter", { y: 0 }, { duration: 0.000001 }],
            ...sparklesFadeOut,
        ]);
    };

    useEffect(() => {
        AOS.init({
            duration: 3000,
        });
        AOS.refresh();
    }, []);
    return (
        <div className="overflow-hidden">
            <div className="relative">
                <img
                    src={aboutbg}
                    alt="about"
                    className="object-cover w-full lg:h-full h-[700px]"
                    loading="lazy"
                />
                <div className="absolute top-[325px] left-[15px] w-full lg:h-[72px] flex flex-col gap-2 lg:top-[50%] lg:left-[20%] lg:w-[558px]">
                    <h2 className="text-3xl font-bold text-white text-center">
                        CRAFTING DIGITAL EXCELLENCE FOR AFRICA'S AMBITIOUS BRANDS
                    </h2>
                    <p className="text-white text-opacity-80 text-sm lg:text-base lg:w-[800px] text-left">

                        Where strategic thinking meets creative innovation to drive transformative
                        digital solutions.
                    </p>
                </div>
            </div>

            <section>
                <div className="flex w-full h-[600px] bg-white px-[200px] py-20">
                    <div className="flex w-[1110px] h-[300px]">
                        <div className="flex flex-col w-[555px] h-full">
                            <h2 className="text-[#3F4352] text-[35px] mb-4">Our Story</h2>
                            <p className="mb-4 text-[18px] text-[#475569]">
                                From our roots as a dynamic social media agency, we've evolved into West Africa's emerging digital powerhouse. Founded on the principle that authentic connections drive business growth, we combine deep local insights with global digital excellence to deliver results that matter..
                            </p>

                            <div className="flex w-[419px] h-[46px] items-center justify-between">
                                <div
                                    ref={scope}
                                    className="flex items-center justify-center px-6 w-[200px] h-full bg-[#DC2625] hover:bg-[#ba2727] text-white rounded-[70px] shadow-md cursor-pointer"
                                >
                                    <button onClick={onButtonClick} className="relative">
                                        <span className="sr-only">Schedule Call</span>
                                        <span className="block h-8 overflow-hidden" aria-hidden>
                                            {["S", "c", "h", "e", "d", "u", "l", "e", " ", "C", "a", "l", "l"].map((letter, index) => (
                                                <span
                                                    data-letter={letter}
                                                    className="letter relative inline-block h-8 leading-8 after:absolute after:left-0 after:top-full after:h-8 after:content-[attr(data-letter)]"
                                                    key={`${letter}-${index}`}
                                                >
                                                    {letter === " " ? "\u00A0" : letter} {/* Add a non-breaking space for the space character */}
                                                </span>
                                            ))}
                                        </span>

                                        <span
                                            aria-hidden
                                            className="pointer-events-none absolute inset-0 -z-10 block"
                                        >
                                            {Array.from({ length: 40 }).map((_, index) => (
                                                <svg
                                                    className={`absolute left-1/2 top-1/2 opacity-0 sparkle-${index}`}
                                                    key={index}
                                                    viewBox="0 0 122 117"
                                                    width="20"
                                                    height="20"
                                                >
                                                    <path
                                                        className="fill-red-600"
                                                        d="M64.39,2,80.11,38.76,120,42.33a3.2,3.2,0,0,1,1.83,5.59h0L91.64,74.25l8.92,39a3.2,3.2,0,0,1-4.87,3.4L61.44,96.19,27.09,116.73a3.2,3.2,0,0,1-4.76-3.46h0l8.92-39L1.09,47.92A3.2,3.2,0,0,1,3,42.32l39.74-3.56L58.49,2a3.2,3.2,0,0,1,5.9,0Z"
                                                    />
                                                </svg>
                                            ))}
                                        </span>
                                    </button>
                                    <a href="/contact" className="ml-4">
                                        <motion.div
                                            animate={{
                                                x: [0, 4, -2, 4, 0], // Define the vibration motion
                                            }}
                                            transition={{
                                                duration: 0.5, // Adjust duration for each cycle
                                                repeat: Infinity, // Loop animation
                                                ease: "easeInOut", // Smooth easing
                                            }}
                                        >
                                            <FaArrowRight />
                                        </motion.div>
                                    </a>

                                </div>
                                <a href="/case studies" className="underline text-[#3F4352] font-semibold text-[16px]">View Case Studies</a>
                            </div>

                        </div>
                        <div className="flex flex-col gap-4 w-[555px] h-full pl-16">
                            <div className="flex">
                                <img src={about1} alt="abt"
                                    data-aos="zoom-in-down"
                                    loading="lazy"
                                    className="w-[253px] h-[270px]" />
                                <div>
                                    <div data-aos="zoom-in-left" className="flex flex-col items-start justify-center gap-4 bg-[#D9D9D9] p-6 rounded-lg shadow-md max-w-[259px] h-[281px]">
                                        <h1 className="text-6xl font-bold text-red-500"><CountUp end={89} duration={2} />+</h1>
                                        <p className="text-left text-gray-600 text-[16px] mt-2">
                                            some big companies that we work with, and trust us very much
                                        </p>
                                        <div className="w-full bg-gray-300 rounded-full h-2 mt-4">
                                            <div className="bg-red-500 h-2 rounded-full" style={{ width: "70%" }}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="relative h-[180px]">
                                    {/* Background Image */}
                                    <img
                                        src={about2}
                                        alt="abt"
                                        loading="lazy"
                                        className="h-full w-full object-cover rounded-lg"
                                    />

                                    {/* Overlay and Content */}
                                    <div data-aos="zoom-in-up" className="absolute inset-0 flex px-4 py-8 justify-between">
                                        {/* Text Content */}
                                        <div className="flex flex-col text-white gap-2">
                                            <small className="text-gray-300 text-sm">Increase Traffic and Boost Sales</small>
                                            <p className="mt-1 w-[270px] text-[25px] font-medium">Boost Traffic and Increase Product Sales</p>
                                        </div>

                                        {/* Chart Image */}
                                        <img
                                            src={chart}
                                            alt="Chart"
                                            loading="lazy"
                                            className="h-[120px] w-auto"
                                        />
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="relative flex w-full h-[500px]">
                    <div className="flex flex-col flex-1 bg-[#F4F4F4] items-center justify-center">
                        <div data-aos="zoom-in" className="w-[450px] h-[141px] flex flex-col justify-between">
                            <span className="font-semibold text-[30px]">Purpose & Vision</span>
                            <p>Vision :<br />
                                To be West Africa's most innovative digital agency, setting new standards for creative excellence and technological innovation..
                            </p>
                        </div>

                    </div>
                    <div className="flex w-[597px]">
                        <img
                            src={missionImg}
                            alt="about"
                            className="object-cover w-full lg:h-full"
                            loading="lazy"
                        />
                    </div>

                    <div data-aos="fade-left" className="absolute top-[45%] left-[50%] p-4 w-[460px] h-[130px] bg-[#ED0707] rounded-[20px] bg-opacity-70">
                        <p className="text-white">
                            Mission :<br />
                            To deliver innovative and impactful communication solutions
                            that connect authentically with audiences to drive growth
                        </p>
                    </div>

                    <img
                        src={pattern}
                        alt="about"
                        className="absolute bottom-0 left-0 object-cover w-[500px] h-[300px]"
                        loading="lazy"
                    />
                </div>
            </section>

            <section>
                <div className="relative flex w-full h-[800px]">
                    <img
                        src={about3}
                        alt="about"
                        className="object-cover w-full h-[400px]"
                        loading="lazy"
                    />

                    <div className="absolute bottom-0 left-[280px] w-[900px] h-[500px] flex bg-white">
                        <div className="flex flex-col flex-1 pl-10 pt-[70px]">
                            <div className="w-[350px]">
                                <h2 className="text-[35px] font-bold">Our Values</h2>
                                <p className="text-[18px] mb-2">
                                    Our values form the{" "}
                                    <span className="text-[#ED0707] font-semibold">foundation</span> of
                                    everything we do:
                                </p>
                                <ul className="space-y-4">
                                    {valuesData.map((value, index) => (
                                        <li key={value.title} className="border-b border-gray-300 pb-2">
                                            <div
                                                onClick={() => toggleContent(index)}
                                                className="flex justify-between items-center cursor-pointer"
                                            >
                                                <span
                                                    className="text-lg hover:text-[#ED0707] transition duration-300"
                                                >
                                                    {value.title}
                                                </span>
                                                <span
                                                    className={`text-xl font-light ${activeIndex === index ? "text-[#ED0707]" : "text-gray-400"
                                                        }`}
                                                >
                                                    {activeIndex === index ? "-" : "+"}
                                                </span>
                                            </div>
                                            <div
                                                className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${activeIndex === index ? "max-h-[200px]" : "max-h-0"
                                                    }`}
                                            >
                                                <p className="mt-2 text-gray-700 text-sm">{value.description}</p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="flex flex-1 pt-[40px] pr-10">
                            <img
                                src={about4}
                                alt="about"
                                className="object-cover w-full h-[460px]"
                                loading="lazy"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="flex w-full h-[420px]">
                    <div className="w-[1310px] h-[320px] flex pl-[200px] mt-16">
                        <div className="flex flex-1">
                            <img
                                src={about5}
                                alt="about"
                                className="object-cover w-full h-full"
                                loading="lazy"
                            />
                        </div>
                        <div className="flex flex-1 items-center justify-center">
                            <div className="h-[227px] w-[500px] pl-10">
                                <h2 className="mb-2 text-[35px]">Our Expertise</h2>
                                <p className="text-[16px] mb-2 text-[#666C89]">We blend strategic thinking, creative excellence, and technical innovation to deliver:</p>
                                <ul className="list-disc pl-4">
                                    <li className="text-[#666C89] text-[16px]">Digital Strategy & Transformation</li>
                                    <li className="text-[#666C89] text-[16px]">Creative Technology Solutions</li>
                                    <li className="text-[#666C89] text-[16px]">Experience Design</li>
                                    <li className="text-[#666C89] text-[16px]">Performance Marketing</li>
                                    <li className="text-[#666C89] text-[16px]">Content & Social Innovation</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="flex w-full h-[400px] items-center justify-center">
                    <div className="w-[1310px] h-[320px] flex px-24">
                        {/* Text Section (Left) */}
                        <div className="flex flex-1 items-center">
                            <div className="h-[227px] w-[500px] pr-10">
                                <h2 className="mb-2 text-[35px]">What Sets Us Apart</h2>
                                <ul className="list-disc pl-4">
                                    <li className="text-[#666C89] text-[16px] mb-4">Deep African market insights</li>
                                    <li className="text-[#666C89] text-[16px] mb-4">Data-driven creativity</li>
                                    <li className="text-[#666C89] text-[16px] mb-4">Integrated digital solutions</li>
                                    <li className="text-[#666C89] text-[16px] mb-4">Innovation-led approach</li>
                                    <li className="text-[#666C89] text-[16px] mb-4">Measurable business impact</li>
                                </ul>
                            </div>
                        </div>

                        {/* Image Section (Right) */}
                        <div className="flex flex-1 pr-2">
                            <img
                                src={about6}
                                alt="about"
                                className="object-cover w-full h-full"
                                loading="lazy"
                            />
                        </div>
                    </div>
                </div>
            </section>


            <section>
                <SlickSlider />
            </section>
        </div>
    )
}

export default About