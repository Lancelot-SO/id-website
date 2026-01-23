/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react"
// import videobg from "../assets/videobg.mp4"
import sectbg from "../assets/sectbg.png"
import sectImg from "../assets/sectImg3.png"
// import sectImg2 from "../assets/sectImg2.png"

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

import strategyBg from "../assets/service/stratbg.png";
import creativeBg from "../assets/service/creativebg.png";
import techBg from "../assets/service/techbg.png";
import marketingBg from "../assets/service/marketingbg.png";


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
            easing: "ease-in-out",
            once: false,
        });
        AOS.refresh();
    }, []);


    const tabContent = {
        "Digital strategy & Consulting": {
            title: "Digital strategy & Consulting",
            description: "Transform your business with data-driven digital",
            items: ["Digital transformation", "Market insights", "Performance optimization"],
            link: "/strategy",
            background: strategyBg,
        },
        "Creative & Experience Design": {
            title: "Creative & Experience Design",
            description: "Deliver engaging and immersive experiences",
            items: ["Brand strategy", "UI/UX design", "Content creation"],
            link: "/digital",
            background: creativeBg,
        },
        "Technology & Innovation": {
            title: "Technology & Innovation",
            description: "Innovate with cutting-edge technology solutions",
            items: ["Custom software development", "AI solutions", "Cloud services"],
            link: "/media",
            background: techBg,
        },
        "Marketing & Performance": {
            title: "Marketing & Performance",
            description: "Maximize your ROI with effective marketing strategies",
            items: ["Performance marketing", "SEO/SEM", "Campaign analytics"],
            link: "/advert",
            background: marketingBg,
        },
    };


    return (
        <div className="overflow-hidden">
            <div className="relative w-full bg-cover bg-black">
                {/* <video
                    src={videobg}
                    className={`w-full h-[700px] object-cover`}
                    loading="lazy"
                    muted
                    loop
                    autoPlay
                    playsInline
                ></video> */}
                <div className="w-full h-[150px] lg:h-[80vh] 4xl:h-[75vh] pro13:h-[68vh] mt-[89px] 4xl:mt-[88px] overflow-hidden">
                    <iframe
                        className="absolute top-0 left-0 w-full h-full pointer-events-none"
                        src="https://www.youtube.com/embed/u6tmLKHe3RE?autoplay=1&mute=1&controls=0&loop=1&playlist=u6tmLKHe3RE&modestbranding=1&showinfo=0&rel=0&disablekb=1"
                        title="Background Video"
                        style={{ border: 0 }}
                        allow="autoplay; encrypted-media"
                        referrerPolicy="strict-origin-when-cross-origin"
                    ></iframe>
                </div>

                <div className="absolute lg:bottom-[-58px] left-0 md:left-[50px] lg:left-[200px] w-[800px] h-auto p-4 lg:p-6 bg-[#ED0707] lg:rounded-t-[20px] bg-opacity-70">
                    <div className="w-full flex">
                        <div className="flex flex-col w-full">
                            <div className="flex items-center gap-1">
                                <h2 className="lg:text-[52px] text-[30px] msm:text-[28px]mt-[10px] text-white font-semibold">
                                    Bold Ideas.
                                </h2>
                                <h1 className="lg:text-[60px] text-[48px] msm:text-[32px] text-white font-extrabold">Big Results!</h1>
                            </div>

                            <h2 className="text-white lg:text-[24px] text-[18px] msm:text-[15px]">
                                Marketing solutions that transform your brand.
                            </h2>
                        </div>

                    </div>
                </div>
            </div>

            <section>
                <div className="w-full lg:mt-[120px] mt-[120px] flex items-center lg:px-[200px] px-0 py-10 lg:py-0">
                    <div className="lg:w-[1110px] w-full lg:h-[557px] h-[540px] flex lg:flex-row flex-col items-center">
                        {/* Left Section */}
                        <div className="relative lg:w-[553px] w-full h-auto rounded-bl-[20px]">
                            <img
                                src={sectbg}
                                alt="Background"
                                className="rounded-bl-[20px] w-full lg:h-auto h-[350px]"
                                loading="lazy"
                            />
                            <div data-aos="zoom-in" className="absolute lg:top-[-100px] top-16 left-[13%] transform -translate-x-1/2 lg:translate-x-0 lg:left-[70px]">
                                <img
                                    src={sectImg}
                                    alt="Image Overlay"
                                    className="lg:w-[414px] lg:h-[372px] h-[220px] object-cover"
                                    loading="lazy"
                                />
                            </div>
                        </div>

                        {/* Right Section */}
                        <div className="lg:w-[700px] w-full mb-[200px] lg:h-[250px] flex lg:px-0 px-4 lg:py-10 py-5 lg:ml-20">
                            <div className=" w-full lg:h-[205px] text-left">
                                <div className="lg:w-full w-full h-auto">
                                    <h2 className="text-black font-bold text-[20px] sm:text-[25px] leading-[30px] sm:leading-[36px]">
                                        Transforming West Africa's Digital Landscape
                                    </h2>
                                </div>
                                <div className=" w-full lg:h-[119px] h-auto mt-4 text-left">
                                    <span className="text-[18px] text-black leading-5 font-normal">
                                        We're more than a digital agency - we're transformation specialists delivering measurable impact through data-driven strategies, creative excellence, and technological innovation. Trusted by leading brands across West Africa to drive digital success.
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section
                data-aos="fade-in"
                data-aos-duration="3000"
                data-aos-once="false"
                className="relative w-full lg:h-[510px] h-[600px] py-4 bg-cover bg-center transition-all duration-[2000ms] ease-[cubic-bezier(0.25,0.1,0.25,1)] grayscale hover:grayscale-0"
                style={{
                    backgroundImage: `url(${tabContent[hoverTab].background})`,
                }}
            >

                {/* Header */}
                <div className="lg:w-[450px] w-full lg:ml-[200px] ml-4 px-2 lg:px-0 py-0 mt-0">
                    <h3 className="lg:text-[35px] text-[22px] font-bold lg:leading-[64px] leading-[30px] text-white drop-shadow-md">
                        Our Services
                    </h3>
                </div>

                {/* Red Floating Info Box */}
                <div
                    onClick={handleRedContainerClick}
                    data-aos="fade-right"
                    data-aos-duration="1000"
                    className="absolute top-[15%] lg:top-[25%] left-0 w-[530px] h-[250px] bg-[#ED0707]/70 rounded-r-[20px] lg:pl-[200px] pl-4 py-8 cursor-pointer backdrop-blur-sm"
                >
                    <div className="w-[292px] h-[180px] text-white">
                        <h2 className="text-[20px] font-semibold">
                            {tabContent[hoverTab].title}
                        </h2>
                        <span className="text-[18px] flex mb-4">
                            {tabContent[hoverTab].description}
                        </span>
                        <ul
                            data-aos="zoom-in"
                            className="list-disc pl-[20px] text-[13px] space-y-1"
                        >
                            {tabContent[hoverTab].items.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Tabs */}
                <div
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    className="absolute lg:bottom-5 bottom-5 left-0 w-full flex lg:items-center lg:justify-center lg:h-[70px] overflow-x-auto px-4 lg:px-6"
                >
                    <div className="grid lg:grid-cols-4 grid-cols-2 lg:gap-6 gap-2 whitespace-nowrap scrollbar-hide">
                        {Object.keys(tabContent).map((tab) => (
                            <span
                                key={tab}
                                onMouseEnter={() => setHoverTab(tab)}
                                onClick={handleRedContainerClick}
                                className={`p-2 lg:p-4 cursor-pointer border-2 border-red-600 flex items-center justify-center text-[14px] lg:text-base rounded-[20px] transition-all duration-300 ease-in-out snap-center w-full ${hoverTab === tab
                                    ? "bg-[#ED0707] text-white"
                                    : "bg-[#F4F4F4] text-black hover:bg-[#ED0707] hover:text-white"
                                    }`}
                            >
                                {tab}
                            </span>
                        ))}
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
