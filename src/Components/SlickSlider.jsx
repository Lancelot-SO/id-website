import React from "react";
import Slider from "react-slick";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";

import Team1 from "../assets/slider/team1.png"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const data = [
    {
        id: 1,
        photo: Team1,
        name: "Mr. Frank Beecham",
        position: "Board Chairman",
        desc: `Mr. Frank Beecham is the Chairman of the Board of Coronation Insurance Ghana LTD. Mr. Beecham is a lawyer by profession and a past National President of the Ghana Bar Association. He has spent the greater part of his working life in banking, having joined Merchant Bank Ghana Ltd as a Banking Officer in 1977.`,
    },
    {
        id: 2,
        photo: Team1,
        name: "Mr. Olusegun Ogbonnewo",
        position: "Non-Executive Director",
        desc: `Mr. Olusegun Ogbonnewo is a Director in TenGen Holdings Limited with over 27 years’ professional experience in the financial service industry cutting across banking, human capital development, operations, payment systems and financial technology.`,
    },
    {
        id: 3,
        photo: Team1,
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
        photo: Team1,
        name: "Mrs. Vesta Nunoo",
        position: "Non-Executive Director",
        desc: `Mrs. Vesta Nunoo has over eighteen years’ experience as a Chartered Accountant. She is a Fellow of the Chartered Certified Accountants (FCCA), England for over fifteen years and a member of the institute of Chartered Accountants Ghana (ICAG).`,
    },
    {
        id: 7,
        photo: Team1,
        name: "Dr. Yaw Adom - Boateng",
        position: "Managing Director",
        desc: `Dr. Yaw Adom-Boateng is a Fellow of the Chartered Insurance Institute of Ghana (FCIIG) and the Chartered Insurance Institute of UK (FCII-UK). He is a seasoned insurance professional with over 22 years of experience in the insurance industry.`,
    },
    // Additional board members can be added here...
];

const SlickSlider = () => {
    const sliderRef = React.useRef(null);


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
                                <div className="lg:w-1/2 bg-[#EFEFF0]">
                                    <img
                                        src={item.photo}
                                        alt={item.name}
                                        className="lg:w-full lg:h-full w-[350px] h-[280px] object-cover"
                                    />
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
