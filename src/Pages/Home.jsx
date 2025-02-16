/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react"
import videobg from "../assets/videobg.mp4"
import sectbg from "../assets/sectbg.png"
import sectImg from "../assets/sectImg1.png"
import sectImg2 from "../assets/sectImg2.png"

import Digi from "../assets/blog/digi.jpg";

import AOS from "aos";
import "aos/dist/aos.css";
import Slider from "../Components/Slider"
import TeamSlider from "../Components/TeamSlider"


import idIcon from "../assets/interactive.png"

import Mtn from "../assets/blog/mtn.png"
import Picbanner from "../assets/blog/picbanner.png";
import { useNavigate } from "react-router-dom";
import Brands from "../Components/Brands"



const Home = () => {
    const [hoverTab, setHoverTab] = useState("Digital strategy & Consulting");

    const handleRedContainerClick = () => {
        if (hoverTab) {
            navigate(tabContent[hoverTab].link);
        }
    };

    const navigate = useNavigate()
    // Function to navigate to BlogDetail page
    const handleReadMore = (id) => {
        navigate(`/blog/${id}`);
    };


    const blogPosts = [
        {
            id: 1,
            title: "Interactive Digital Celebrates MTN Ghana’s Historic Achievement",
            excerpt: "It’s a triple threat! We are thrilled to congratulate MTN Ghana's outstanding accomplishment as the 5th-time winner of the Chartered Institute of Marketing Ghana (CIMG) Telecommunications Award for Overall Marketing Orientation Organization of the Year 2023, Telecom Company of the Year, as well as the Hall of Fame Award for Telecommunications.",
            image: Mtn,
            author: "Philomina Akekudaga",
            date: "January 09, 2025",
        },
        {
            id: 2,
            title: "Why Digital Storytelling Matters and How Interactive Digital Is Making It Count.",
            excerpt: "You’re scrolling through your feed online, and then a video pops up, it's not just one of those boring pitches. Instead, it tells a catchy story that draws you in. Before you realise it, you are emotionally invested and eager to learn more about the brand behind it.",
            image: Digi,
            author: "Kwadwo A. Sirebour",
            date: "April 02, 2024",
        },
        {
            id: 3,
            title: "Interactive Digital and Street Children Empowerment Foundation (SCEF) Host Successful ‘Sound of Freedom’ Movie Screening to Raise Funds for Street-Connected Children Initiatives.",
            excerpt: "It was all about impact on Friday, October 18, 2024, as the Street Children Empowerment Foundation (SCEF) hosted a fundraising screening of the film “Sound of Freedom” at the AMA Omanye Aba Hall in Accra.",
            image: Mtn,
            author: "Judith Abani",
            date: "October 18, 2024",
        },
        {
            id: 4,
            title: "Leveraging Platform Specific Features For Digital Communication",
            excerpt: "Digital platforms have changed the way businesses communicate and how people connect. These platforms offer a variety of tools and features that often go unnoticed due to a lack of deeper understanding",
            image: Picbanner,
            author: "Philomina Akekudaga",
            date: "June 07, 2024",
        },
    ];

    useEffect(() => {
        AOS.init({
            duration: 3000,
        });
        AOS.refresh();
    }, []);


    const tabContent = {
        "Digital strategy & Consulting": {
            title: "Digital strategy & Consulting",
            description: "Transform your business with data-driven digital",
            items: ["Digital transformation", "Market insights", "Performance optimization"],
            link: "/strategy",
        },
        "Creative & Experience Design": {
            title: "Creative & Experience Design",
            description: "Deliver engaging and immersive experiences",
            items: ["Brand strategy", "UI/UX design", "Content creation"],
            link: "/digital",
        },
        "Technology & Innovation": {
            title: "Technology & Innovation",
            description: "Innovate with cutting-edge technology solutions",
            items: ["Custom software development", "AI solutions", "Cloud services"],
            link: "/media",
        },
        "Marketing & Performance": {
            title: "Marketing & Performance",
            description: "Maximize your ROI with effective marketing strategies",
            items: ["Performance marketing", "SEO/SEM", "Campaign analytics"],
            link: "/advert",
        },
    };

    return (
        <div className="overflow-hidden">
            <div className="relative w-full bg-cover bg-black">
                {/* <img
                    src={herobg}
                    className="w-full h-[700px] lg:h-[700px] sm:h-[400px] bg-cover object-cover"
                    loading="lazy"
                    alt="Hero Background"
                /> */}
                <video
                    src={videobg}
                    className={`w-full h-[700px] object-cover`}
                    loading="lazy"
                    muted
                    loop
                    autoPlay
                    playsInline
                ></video>
                <div className="absolute lg:bottom-[-58px] left-0 md:left-[50px] lg:left-[200px] w-full lg:w-[750px] h-auto p-4 sm:p-6 bg-[#ED0707] lg:rounded-t-[20px] bg-opacity-60">
                    <div className="w-full md:w-[731px] ">
                        <div className="w-full lg:w-[637px]">
                            <h1 className="text-white font-light text-[32px] sm:text-[36px] lg:text-[48px] leading-tight md:leading-[56px]">
                                TRANSFORM YOUR <span className="text-black font-bold text-[40px] lg:text-[54px]">DIGITAL </span>
                                PRESENCE
                            </h1>
                        </div>
                        <span className="block mt-2 text-[14px] sm:text-[16px] md:text-[20px] font-medium leading-[20px] md:leading-[28px] text-white opacity-90">
                            Where Innovation Meets Impact.
                        </span>
                    </div>
                </div>
            </div>



            <section>
                <div className="w-full lg:mt-[100px] mt-[120px] flex items-center lg:px-[200px] px-0">
                    <div className="lg:w-[1050px] w-full lg:h-[457px] h-[540px] flex lg:flex-row flex-col items-center">
                        {/* Left Section */}
                        <div className="relative lg:w-[553px] w-full h-auto rounded-bl-[20px]">
                            <img
                                src={sectbg}
                                alt="Background"
                                className="rounded-bl-[20px] w-full lg:h-auto h-[350px]"
                                loading="lazy"
                            />
                            <div data-aos="zoom-in" className="absolute lg:top-[-10px] top-16 left-[13%] transform -translate-x-1/2 lg:translate-x-0 lg:left-[70px]">
                                <img
                                    src={sectImg}
                                    alt="Image Overlay"
                                    className="lg:w-[414px] lg:h-[372px] h-[220px] object-cover"
                                    loading="lazy"
                                />
                            </div>
                        </div>

                        {/* Right Section */}
                        <div className="lg:w-[500px] w-full mb-20 lg:h-[300px] flex lg:px-10 px-4 lg:py-20 py-5">
                            <div className=" w-full lg:h-[205px] text-left">
                                <div className="lg:w-full w-full h-auto">
                                    <h2 className="text-black font-bold text-[20px] sm:text-[25px] leading-[30px] sm:leading-[36px]">
                                        You found us, you're doing something right!
                                    </h2>
                                </div>
                                <div className="lg:w-[381px] w-full lg:h-[119px] h-auto mt-4 text-left">
                                    <span className="text-[12px] sm:text-[14px] text-black leading-5 font-normal">

                                        We are Interactive Digital, a 360 marketing solutions provider. We are sticklers for measurable results, insight and data-driven experiences.

                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section>
                <div className="w-full lg:h-[510px] h-[500px] py-4 bg-slate-100">
                    {/* Header Section */}
                    <div className="lg:w-[450px] w-full lg:ml-[200px] ml-4 px-2 lg:px-0 py-4">
                        <h3 className="lg:text-[25px] text-[20px] font-bold lg:leading-[64px] leading-[30px]">
                            Our Services
                        </h3>
                    </div>

                    {/* Image and Menu Section */}
                    <div className="relative">
                        <img
                            src={sectImg2}
                            alt="sect"
                            className="object-cover w-full lg:h-[350px] h-[400px]"
                            loading="lazy"
                        />

                        {/* Red Container with Dynamic Content */}
                        <div
                            onClick={handleRedContainerClick}
                            className="absolute top-[6%] left-0 w-[530px] h-[250px] bg-[#ED0707] rounded-r-[20px] bg-opacity-70 lg:pl-[200px] pl-4 py-8 cursor-pointer"
                        >
                            <div className="w-[292px] h-[180px] text-white">
                                <h2 className="text-[20px]">{tabContent[hoverTab].title}</h2>
                                <span className="text-[17px] flex mb-4">{tabContent[hoverTab].description}</span>
                                <ul data-aos="zoom-in" className="list-disc pl-[20px] text-[13px]">
                                    {tabContent[hoverTab].items.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div
                            data-aos="fade-down-left"
                            className="absolute lg:bottom-0 bottom-5 left-0 lg:w-[1200px] w-full lg:h-[70px] lg:pl-[200px] pl-4 overflow-x-auto"
                        >
                            <div className="flex gap-4 whitespace-nowrap">
                                {Object.keys(tabContent).map((tab) => (
                                    <span
                                        key={tab}
                                        onClick={handleRedContainerClick}
                                        onMouseEnter={() => setHoverTab(tab)}
                                        className="p-4 cursor-pointer bg-[#F4F4F4] text-black rounded-[20px] hover:bg-[#ED0707] hover:text-white transition-colors"
                                    >
                                        {tab}
                                    </span>
                                ))}
                            </div>
                        </div>


                    </div>
                </div>
            </section>


            <section>
                <div className="w-full lg:h-[360px] h-[600px] bg-[#F7F8F9] flex flex-col lg:items-center lg:justify-center">
                    <div className="w-full text-center mb-6">
                        <h2 className="lg:text-[45px] text-[30px]">THE !D PLAYBOOK</h2>
                    </div>
                    <div className="lg:w-[1110px] 4xl:w-[1500px] w-full flex lg:flex-row flex-col justify-between gap-6">
                        <div className="flex gap-4 lg:w-[411px] h-[140px] px-4 items-center">
                            <img
                                src={idIcon}
                                alt="interactive"
                                loading="lazy"
                                className="object-cover w-12 h-12"
                            />
                            <div className="w-[1px] h-[80px] bg-[#D8D8D8]"></div>
                            <div className="">
                                <h3 className="text-[20px] font-semibold mb-2">Always listening</h3>
                                <span className="text-[14px] text-[#141414]">
                                    We dig into data and consumer behaviour to uncover insights that fuel your Marketing success.
                                </span>
                            </div>
                        </div>
                        <div className="flex gap-4 lg:w-[411px] px-4 lg:h-[140px] h-[160px] items-center">
                            <img
                                src={idIcon}
                                alt="interactive"
                                loading="lazy"
                                className="object-cover w-12 h-12"
                            />
                            <div className="w-[1px] h-[80px] bg-[#D8D8D8]"></div>
                            <div className="">
                                <h3 className="text-[20px] font-semibold mb-4">Always Creating</h3>
                                <div className="text-[14px] text-[#141414] pr-6 w-[290px]">
                                    Our award-winning team turns insights into impactful digital experiences that engage your audience and drive results.                                </div>
                            </div>
                        </div>
                        <div className="flex gap-4 lg:w-[411px] px-4 h-[140px] items-center">
                            <img
                                src={idIcon}
                                alt="interactive"
                                loading="lazy"
                                className="object-cover w-12 h-12"
                            />
                            <div className="w-[1px] h-[80px] bg-[#D8D8D8]"></div>
                            <div className="">
                                <h3 className="text-[20px] font-semibold mb-2">Always Getting Stuff Done</h3>
                                <span className="text-[14px] text-[#141414]">
                                    We track, learn, and optimize your campaigns for better performance and lasting results.                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            <section>
                <div className="w-full h-auto bg-[#141415] flex items-center py-6 px-4 lg:px-0">
                    <div className="lg:w-[1047px] w-full lg:h-[132px] h-auto lg:ml-[200px] mx-auto">
                        {/* Quote Text */}
                        <span className="text-white font-bold lg:text-[30px] text-[20px] lg:leading-[44px] leading-[30px] block mb-4">
                            “Without strategy, content is just stuff, and the world has enough stuff.”
                        </span>

                        {/* Author and Contact Button */}
                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                            <span className="text-white font-medium lg:text-[20px] text-[16px] lg:leading-[28px] leading-[24px] mb-4 lg:mb-0">
                                By Arjun Basu
                            </span>

                        </div>
                    </div>
                </div>
            </section>


            <section>
                <div className="">
                    <Slider />
                </div>
            </section>

            <section>
                <TeamSlider />
            </section>

            <section className="flex items-center justify-center">
                <div className="lg:h-[470px] h-auto p-6">
                    <div className="flex lg:flex-row flex-col lg:space-x-6 space-x-0 lg:gap-0 gap-0">
                        {blogPosts.map((post) => (
                            <div
                                key={post.id}
                                onClick={() => handleReadMore(post.id)}
                                className="flex-shrink-0 lg:w-64 mb-4 lg:mb-0 cursor-pointer overflow-hidden"
                            >
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    loading="lazy"
                                    className="lg:w-[256px] w-full h-[180px] rounded-lg object-cover mb-4 transform transition-transform duration-300 hover:scale-105"
                                />
                                <div className="lg:h-[120px] h-auto overflow-hidden">
                                    <h3 className="font-semibold text-[14px] mb-2 line-clamp-2">
                                        {post.title}
                                    </h3>
                                    <p className="text-[12px] text-gray-600 mb-4 line-clamp-3">
                                        {post.excerpt}
                                    </p>
                                </div>
                                <div className="flex flex-col text-sm text-gray-500">
                                    <span className="font-bold text-black">{post.author}</span>
                                    <div className="flex items-center">
                                        <small>{post.date}</small>
                                        <small className="mx-1">•</small>
                                        <small>{post.readTime}</small>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section>
                <Brands />
            </section>


        </div >
    )
}

export default Home
