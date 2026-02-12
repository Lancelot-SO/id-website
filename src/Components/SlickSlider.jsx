/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import Slider from "react-slick";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";

import Team1 from "../assets/slider/team1.png"
import Team2 from "../assets/slider/team2.png"

import Fred1 from "../assets/slider/Fred1.jpg"
import Fred2 from "../assets/slider/Fred2.jpg"
import Kofi from "../assets/slider/Kofi.jpg"
import Kofi2 from "../assets/slider/Kofi2.jpg"

import Jasmine from "../assets/slider/jasmine.jpg"
import Jasmine1 from "../assets/slider/jasmine2.jpg"



import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const data = [

    {
        id: 1,
        photo: Fred1,
        hoverphoto: Fred2,
        name: "Fred Tackie-Yarboi",
        position: " Head, Performance Marketing and Media",
        desc: `A digital marketing and media strategist with over 14 years experience with digital marketing communications in the Ghanaian landscape.
He has experience delivering multi-channel campaigns across social, search, email, SEO and digital media, delivering business results for global and local brands.`,
    },
    {
        id: 2,
        photo: Jasmine,
        hoverphoto: Jasmine1,
        name: "Jasmine Balfour",
        position: "Content Lead",
        desc: `A spirited content writer and storyteller with a knack for transforming brand stories into lasting impressions. Her creative touch has brought life to renowned names like Malta Guinness, LemFi, Stanbic Bank, Gino Tomato Mix and more. With a flair for crafting narratives that strike a chord, Jasmine firmly believes that a sprinkle of wit and a dash of humour can turn a good story into a great one.`,
    },
    {
        id: 3,
        photo: Kofi,
        hoverphoto: Kofi2,
        name: "Kofi Owusu-Akyaw",
        position: "Snr Account Manager",
        desc: `An Account manager with a passion for creative delivery that exceeds clients’ expectations while forging mutually rewarding bonds. He has over 6 years of digital marketing expertise spanning FMCG, Telco and Banking.
Solution-oriented and with a demonstrable history of successful campaigns, he has worked on big ticket brands including MTN Ghana, Stanbic Bank, uniBank, GLICO and Surfline.`,
    },


    {
        id: 4,
        photo: Team1,
        hoverphoto: Team2,
        name: "Ekow Thompson",
        position: "Chief Operating Officer",
        desc: `A visionary business leader and an engineer with 20 years of experience in the Telecom, Media, and Technology sector. During this time, he honed his skills in business development, sales, technology and innovation management, and business strategy formulation.
He passionately believes in the transformative impact of data and technology on people’s lives and leads Interactive Digital in assisting clients with their marketing communications and digital transformation endeavors.`,
    },
    // Additional board members can be added here...
];

const SlickSlider = () => {
    const sliderRef = React.useRef(null);
    const [hoveredIndex, setHoveredIndex] = useState(null);



    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 0,
        centerMode: true,
        centerPadding: "0",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className="relative overflow-hidden pt-10 lg:h-[700px] h-[1100px]">
            <div className="text-left mb-12 px-4 lg:pl-[200px] ">
                <h2 className="lg:text-4xl text-[20px] font-bold leading-tight">Leadership</h2>
                <p className="lg:w-[950px] lg:h-[40px] lg:text-lg text-[14px] text-gray-600 mt-2 ">
                    Our team brings together diverse expertise in digital strategy, creative technology, and market innovation. Led by professionals with global experience and local insight, we're positioned to drive digital excellence across West Africa.
                </p>
            </div>
            <div className="relative lg:px-10 px-0">
                <Slider ref={sliderRef} {...settings}>
                    {data.map((item, index) => (
                        <div key={index} className="lg:px-0 px-2">
                            <div className="flex lg:flex-row flex-col w-full lg:h-[420px] h-[750px] shadow-lg overflow-hidden rounded-lg">
                                {/* Image Section */}
                                <div
                                    className="lg:w-1/2 w-full h-full bg-[#EFEFF0] relative"
                                    onMouseEnter={() => setHoveredIndex(index)}
                                    onMouseLeave={() => setHoveredIndex(null)}
                                >
                                    <img
                                        src={item.photo}
                                        alt={item.name}
                                        loading="lazy"
                                        className={`w-full lg:h-full h-[500px] object-cover absolute inset-0 transition-opacity duration-500 ${hoveredIndex === index ? "opacity-0" : "opacity-100"
                                            }`}
                                    />
                                    {item.hoverphoto && (
                                        <img
                                            src={item.hoverphoto}
                                            alt={item.name}
                                            loading="lazy"
                                            className={`w-full lg:h-full h-[500px] object-cover absolute inset-0 transition-opacity duration-500 ${hoveredIndex === index ? "opacity-100" : "opacity-0"
                                                }`}
                                        />
                                    )}
                                </div>
                                {/* Text Section */}
                                <div className="lg:w-1/2 w-full lg:h-full h-auto bg-[#EFEFF0] text-white lg:p-8 p-4 flex flex-col justify-center">
                                    <h3 className="text-lg lg:text-2xl text-black font-semibold mb-2">{item.name}</h3>
                                    <p className="text-sm lg:text-md text-black mb-4">{item.position}</p>
                                    <p className="text-xs lg:text-sm text-black">{item.desc}</p>
                                </div>
                            </div>
                        </div>

                    ))}
                </Slider>
            </div>
            {/* Previous Button */}
            <button
                className={`absolute hover:bg-[#FF0226] hover:text-white lg:top-[670px] top-[1000px] lg:right-40 right-[50%] transform -translate-y-1/2 px-4 py-2 rounded-lg 
                   `}
                onClick={() => sliderRef.current.slickPrev()}
            >
                <IoIosArrowRoundBack size={24} />
            </button>

            {/* Next Button */}
            <button
                className={`absolute hover:bg-[#FF0226] hover:text-white lg:top-[670px] top-[1000px] lg:right-20 right-[35%] transform -translate-y-1/2 px-4 py-2 rounded-lg 
                    `}
                onClick={() => sliderRef.current.slickNext()}
            >
                <IoIosArrowRoundForward size={24} />
            </button>
        </div>
    );
};

export default SlickSlider;
