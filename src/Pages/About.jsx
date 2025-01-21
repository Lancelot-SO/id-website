/* eslint-disable no-irregular-whitespace */
/* eslint-disable react/no-unescaped-entities */
import aboutbg from "../assets/about/abtbanner.png"
import SlickSlider from "../Components/SlickSlider";

import about1 from "../assets/about/about1.png"
import about2 from "../assets/about/about2.png"
import about3 from "../assets/about/about3.png"
import about4 from "../assets/about/about4.png"
import about5 from "../assets/about/about5.png"
import about6 from "../assets/about/about6.png"
import chart from "../assets/about/chart.png"
import pattern from "../assets/about/pattern.png"
import missionImg from "../assets/about/missionImg.png"


import banner from "../assets/banner.png"
import { FaArrowRight } from "react-icons/fa";
import CountUp from "react-countup";


const About = () => {
    // window.scrollTo({
    //     top: 0,
    //     behavior: 'smooth',
    // });
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
                                <a href="/contact" className="flex items-center justify-between px-6 w-[200px] h-full bg-[#DC2625] hover:bg-[#ba2727] text-white rounded-[70px] shadow-md cursor-pointer">
                                    <button>Schedule Call</button>
                                    <FaArrowRight />
                                </a>
                                <a href="/case studies" className="underline text-[#3F4352] font-semibold text-[16px]">View Case Studies</a>
                            </div>
                        </div>
                        <div className="flex flex-col gap-4 w-[555px] h-full pl-16">
                            <div className="flex">
                                <img src={about1} alt="abt"
                                    loading="lazy"
                                    className="w-[253px] h-[270px]" />
                                <div>
                                    <div className="flex flex-col items-start justify-center gap-4 bg-[#D9D9D9] p-6 rounded-lg shadow-md max-w-[259px] h-[281px]">
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
                                    <div className="absolute inset-0 flex px-4 py-8 justify-between">
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
                        <div className="w-[450px] h-[141px] flex flex-col justify-between">
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

                    <div className="absolute top-[45%] left-[50%] p-4 w-[460px] h-[130px] bg-[#ED0707] bg-opacity-70">
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
                            <div className="w-[410px]">
                                <h2 className="text-[35px]">Our Values (ELITE)</h2>
                                <p className="text-[18px] mb-2">Values (ELITE) Our values form the foundation of everything we do:</p>
                                <ul className="list-disc pl-4">
                                    <li className="mb-4 text-[#666C89]">Excellence: Setting the highest standards in digital innovation</li>
                                    <li className="mb-4 text-[#666C89]">Leadership: Pioneering new paths in digital transformation</li>
                                    <li className="mb-4 text-[#666C89]">Integrity: Building trust through transparent partnerships</li>
                                    <li className="mb-4 text-[#666C89]">Teamwork: Collaborating to create exceptional outcomes</li>
                                    <li className="mb-4 text-[#666C89]">Empathy: Understanding audiences to deliver authentic connections</li>
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

            <section>
                <img src={banner} alt="banner" className="object-cover w-full lg:h-[400px]" loading="lazy" />
            </section>
        </div>
    )
}

export default About