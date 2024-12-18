/* eslint-disable react/no-unescaped-entities */
import aboutbg from "../assets/about/aboutbg.png"
import about1 from "../assets/about/about-1.png"
import about2 from "../assets/about/about-2.png"
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import SlickSlider from "../Components/SlickSlider";

import banner from "../assets/banner.png"


const About = () => {
    return (
        <div>
            <div className="relative">
                <img src={aboutbg} alt="about" className="object-cover w-full" loading="lazy" />
                <div className=" absolute top-[285px] left-[195px] w-[858px] h-[72px] flex flex-col gap-2">
                    <h2 className="text-3xl font-bold text-white">About Us</h2>
                    <p className="text-white text-opacity-50">
                        We are a leading Ghanaian insurance company offering a diverse range of products and services covering general and special risk businesses. We are licensed to underwrite all classes of non-life insurance, such as motor insurance, marine insurance, fire and special perils, goods-in-transit, all risks insurance, etc.
                    </p>
                </div>
            </div>

            <section>
                <div className="flex items-center justify-center w-full h-[553px]">
                    <div className="w-[1110px] h-[473px] flex flex-row gap-[50px]">
                        <div className="w-[530px] h-full">
                            <img src={about1} alt="about" className="object-cover rounded-[20px] w-full h-full" loading="lazy" />
                        </div>
                        <div className="w-[530px] h-full flex flex-col items-center justify-center gap-2">
                            <div className="w-[439px] h-[214px] border-l-2 border-[#FF0226] p-4">
                                <h2 className="w-[285px] h-[69px] text-[27px] font-semibold leading-[34px]">Products & Solutions for The Individual</h2>
                                <span className="w-[383px] h-[83px] text-[15px] font-normal leading-[21px] text-[#888991]">
                                    Interactive Digital is a dynamic and innovative marketing communications agency that prides itself on merging creativity with cutting-edge technology to deliver exceptional outcomes for our clients..
                                </span>

                                <Link to="/" className="flex items-center gap-1 text-[#FF0226]">Learn More <FaArrowRight /></Link>

                            </div>
                            <div className="w-[439px] h-[49px] flex items-center border-l-2 border-opacity-50 border-[#888991] p-4">
                                <h2 className="text-[27px] font-semibold leading-[34px] text-black">Our Projects </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="flex lg:flex-row md:flex-row flex-col-reverse w-full gap-24">
                    <div className="flex-1 flex flex-col lg:items-center md:items-center md:justify-center lg:justify-center pl-[150px]">
                        <div className="w-[526px] h-[200px] flex flex-col gap-6">
                            <h2 className="text-[30px] leadng-[64px] font-bold">Why choose ID?</h2>
                            <span className="text-[16px] font-normal leading-[24px] text-[#56575D]">
                                We are committed to conceptualising and executing impactful communication solutions that authentically connect with audiences. Through a blend of artistry and insights, we guarantee that every campaign captures attention and drives tangible, quantifiable results..
                            </span>
                        </div>
                    </div>
                    <div className="flex-1 relative">
                        <img src={about2} alt="service" className="bg-cover w-full" loading="lazy" />
                        <div className="glass bg-[#FF0226] bg-opacity-70 absolute bottom-0 lg:right-0 md:right-0 right-4 rounded-t-lg lg:w-[385px] w-[230px] lg:h-[174px] h-[140px]">
                            <div className="lg:p-6 p-2">
                                <span className="text-white w-[300px] h-[32px] lg:text-[24px] leading-[32px] font-semibold">INTERACTIVE DIGITAL</span>
                                <p className="text-white lg:text-[16px] text-[12px] leading-[24px] font-normal lg:mt-2 mt-0">
                                    Want to know more about our services? Let's talk
                                </p>
                                <div className="flex lg:mt-5 mt-2 lg:w-[116px] w-[95px] h-[36px] bg-white rounded-lg font-semibold lg:text-[14px] text-[10px] leading-[20px] text-black items-center justify-center">
                                    <Link to="https://claims-gh.coronation.ng/" target='_blank' rel='noopener noreferrer'>Call us today</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <SlickSlider />
            </section>

            <section>
                <img src={banner} alt="banner" className="object-cover w-full" loading="lazy" />
            </section>
        </div>
    )
}

export default About