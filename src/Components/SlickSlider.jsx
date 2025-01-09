import React, { useState } from "react";
import Slider from "react-slick";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";

import Team1 from "../assets/slider/team1.png"
import Team2 from "../assets/slider/team2.png"
import Kay from "../assets/slider/kay.png"
import Danda from "../assets/slider/danda.png"
import Danda1 from "../assets/slider/danda1.png"


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const data = [
    {
        id: 1,
        photo: Kay,
        name: "Frank Adjei Otu",
        position: "Creative Director",
        desc: `A multidisciplinary creative with boundless imagination that pushes visuals, concepts and ideas beyond the limits of conventional thinking.
A graduate of Kwame Nkrumah University of Science and Technology, Frank has 14 years' experience in the marketing communications space having worked in a few multinational agencies. He has delivered award winning work for brands such as Sky-Girls, Nestle Nescafé, Diageo, GTP and CFAO.`,
    },
    {
        id: 2,
        photo: Kay,
        name: "Mr. Olusegun Ogbonnewo",
        position: "Non-Executive Director",
        desc: `Mr. Olusegun Ogbonnewo is a Director in TenGen Holdings Limited with over 27 years’ professional experience in the financial service industry cutting across banking, human capital development, operations, payment systems and financial technology.`,
    },
    {
        id: 3,
        photo: Danda,
        hoverphoto: Danda1,
        name: "Mrs. Peggy Onwu",
        position: "Non-Executive Director",
        desc: `Mrs. Peggy Onwu has over eighteen years’ experience as a Chartered Accountant. She is a Fellow of the Chartered Certified Accountants (FCCA), England for over fifteen years and a member of the institute of Chartered Accountants Ghana (ICAG).`,
    },
    {
        id: 4,
        photo: Team1,
        name: "Mr. Richard Osei - Anim",
        position: "Non-Executive Director",
        desc: `Mr. Richard Osei-Anim is an Associate and Chartered Insurance Practitioner of the Associate Chartered Insurance Institute of London, UK. He has over 15 years’ experience in insurance and risk management and has worked in the past with Burrows Keith Group, CGU Insurance and broking giants like Aon and Miller Insurance Group.`,
    },
    {
        id: 5,
        photo: Team1,
        name: "Mr. Olamide Olajolo",
        position: "Non-Executive Director",
        desc: `Mr. Olamide Olajolo has about twenty-two (22) years’ experience in the Insurance industry cutting across insurance underwriting and sales. Mr. Olamide Olajolo was formerly the Managing Director/Chief Executive Officer of the Nigeria Liability Insurance Pool and the Vice President Business Development at Heirs Insurance Limited/Heirs Assurance Limited.`,
    },
    {
        id: 6,
        photo: Danda,
        hoverphoto: Danda1,
        name: "Danda Berko Tagbor",
        position: "Programme Manager",
        desc: `An experienced marketer with 10+ years of work experience in the fields of brand/event management, credit control and project management.
Her  work experience covers corporate administration, communications, strategic planning and management, people and client management as well as colleague relationship management.`,
    },
    {
        id: 7,
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
        <div className="relative overflow-hidden pl-[200px] pt-10 h-[700px]">
            <div className="text-left mb-12">
                <h2 className="lg:text-4xl text-[20px] font-bold leading-tight">Meet the Team</h2>
                <p className="w-[580px] h-[40px] lg:text-lg text-[14px] text-gray-600 mt-2 ">
                    Our board consists of highly accomplished financial services experts with a combined wealth of experience spanning more than two centuries.                </p>
            </div>
            <div className="relative">
                <Slider ref={sliderRef} {...settings}>
                    {data.map((item, index) => (
                        <div key={index} className="lg:px-4">
                            <div className="flex lg:flex-row flex-col w-full lg:h-[420px] shadow-lg overflow-hidden rounded-lg">
                                {/* Image Section */}
                                <div
                                    className="lg:w-1/2 bg-[#EFEFF0] relative"
                                    onMouseEnter={() => setHoveredIndex(index)}
                                    onMouseLeave={() => setHoveredIndex(null)}
                                >
                                    <img
                                        src={item.photo}
                                        alt={item.name}
                                        className={`lg:w-full lg:h-full w-[350px] h-[280px] object-cover absolute inset-0 transition-opacity duration-500 ${hoveredIndex === index ? "opacity-0" : "opacity-100"
                                            }`}
                                    />
                                    {item.hoverphoto && (
                                        <img
                                            src={item.hoverphoto}
                                            alt={item.name}
                                            className={`lg:w-full lg:h-full w-[350px] h-[280px] object-cover absolute inset-0 transition-opacity duration-500 ${hoveredIndex === index ? "opacity-100" : "opacity-0"
                                                }`}
                                        />
                                    )}
                                </div>
                                {/* Text Section */}
                                <div className="lg:w-1/2 h-[300px] lg:h-full bg-[#EFEFF0] text-white lg:p-8 p-2 flex flex-col justify-center">
                                    <h3 className="lg:text-2xl text-[20px] text-black font-semibold mb-2 ">{item.name}</h3>
                                    <p className="text-md text-black mb-4 motion-preset-typewriter-[24]">{item.position}</p>
                                    <p className="text-sm text-black">{item.desc}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
            {/* Previous Button */}
            <button
                className={`absolute hover:bg-[#FF0226] hover:text-white lg:top-[670px] lg:right-40 transform -translate-y-1/2 px-4 py-2 rounded-lg 
                   `}
                onClick={() => sliderRef.current.slickPrev()}
            >
                <IoIosArrowRoundBack size={24} />
            </button>

            {/* Next Button */}
            <button
                className={`absolute hover:bg-[#FF0226] hover:text-white lg:top-[670px] top-[780px] lg:right-20 transform -translate-y-1/2 px-4 py-2 rounded-lg 
                    `}
                onClick={() => sliderRef.current.slickNext()}
            >
                <IoIosArrowRoundForward size={24} />
            </button>
        </div>
    );
};

export default SlickSlider;
