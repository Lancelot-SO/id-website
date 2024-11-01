import { useEffect } from "react"
import herobg from "../assets/herobg.png"
import sectbg from "../assets/sectbg.png"
import sectImg from "../assets/sectImg1.png"
import sectImg2 from "../assets/sectImg2.png"

import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom"
import Slider from "../Components/Slider"
import TeamSlider from "../Components/TeamSlider"
import Blog from "./Blog"

//brands image
import brand1 from "../assets/brand/brand1.png"
import brand2 from "../assets/brand/brand2.png"
import brand3 from "../assets/brand/brand3.png"
import brand4 from "../assets/brand/brand4.png"
import brand5 from "../assets/brand/brand5.png"
import brand6 from "../assets/brand/brand6.png"


import banner from "../assets/banner.png"



const Home = () => {
    const menuItems = [
        "Content development",
        "Social media marketing",
        "Influencer Marketing",
        "Media Production"
    ];

    const panels = [
        {
            title: "...always listening",
            description: "We're always tuned in to what's what, using insights to help your brand cut through the noise and reach your customers.",
            background: "bg-white",
            textColor: "text-black"
        },
        {
            title: "...always listening",
            description: "We don't just plan - we explore your market and discover the truth about how it works, and what makes a difference in your industry. Keeping pace with the speed of digital life!",
            background: "bg-black",
            textColor: "text-white"
        },
        {
            title: "...always listening",
            description: "With a team of creatives bursting at the seams with ideas and executions, we're ready to bring your dreams to life!",
            background: "bg-white",
            textColor: "text-black"
        }
    ];

    useEffect(() => {
        AOS.init({
            duration: 3000,
        });
        AOS.refresh();
    }, []);
    return (
        <div className="">
            <div className="w-full bg-cover">
                <img src={herobg} className="w-full h-[700px] bg-cover" loading="lazy" />
            </div>
            <div>
                <div className="absolute bottom-0 left-[200px] w-[780px] h-[200px] bg-[#ED0707] p-6 bg-opacity-60">
                    <div className="w-[731px] h-[184px]">
                        <div className="w-[337px] h-[112px]">
                            <h1 className="text-white font-semibold text-[48px] leading-[56px]">
                                Your <span className="text-black font-bold">Digital</span>
                                <br />POWERHOUSE</h1>
                        </div>

                        <span className="text-[20px] font-medium leading-[28px] opacity-80 text-white">
                            Creating experiences, driving solutions, growing your business...<br />
                            is our business.
                        </span>
                    </div>
                </div>
            </div>


            <section>
                <div className="w-full h-[563px] mt-[30px] flex items-center justify-center">
                    <div className="w-[1050px] h-[457px] flex">
                        <div className="relative w-[553px] h-full rounded-bl-[20px]">
                            <img src={sectbg} alt="sect" className="rounded-bl-[20px]" loading="lazy" />
                            <div className="absolute top-2 left-[100px]">
                                <img src={sectImg} alt="sect" className="w-[414px] h-[372px]" loading="lazy" />
                            </div>
                        </div>
                        <div className="w-[496px] h-full bg-black rounded-r-[20px] flex items-center justify-center">
                            <div className="w-[381px] h-[205px]">
                                <div className="w-[200px] h-[73px]">
                                    <h2 className="text-white font-bold text-[25px] leading-[36px]">
                                        YOU DREAM IT,
                                        WE CREATE IT</h2>
                                </div>
                                <div className="w-[381px] h-[119px]">
                                    <span className="text-[14px] text-white leading-5 font-normal">
                                        An award-winning 360 marketing communications agency that creates compelling experiences for great brands.
                                        Our solutions leverage strategy, creative thinking and coordinated executions to deliver on business goals with focus on digital.
                                        Our approach is agile, collaborative and human led..
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="w-full h-[630px]">
                    <div className="w-[450px] h-[130px] ml-[200px] py-4">
                        <h3 className="text-[25px] font-bold leading-[64px]">
                            Our Services
                        </h3>
                        <span className="text-[#56575D] text-[18px] font-normal leading-6">
                            When we say 360, we mean it. From content creation
                            to media production, we do it all...
                        </span>
                    </div>
                    <div className="relative">
                        <img src={sectImg2} alt="sect" className="object-cover w-full" loading="lazy" />
                        <div className="absolute bottom-2 left-[200px] w-[1083px] h-[58px] bg-[#ED0707] bg-opacity-5">
                            <nav className="flex justify-between items-start p-4">
                                {menuItems.map((item, index) => (
                                    <div key={index} className="flex flex-col items-center w-full mx-2 first:ml-0 last:mr-0">
                                        <div className="w-full h-1 mb-2">
                                            {item === "Social media marketing" ? (
                                                <div className="w-full h-full flex">
                                                    <div className="w-[40%] bg-red-500 rounded-l-lg"></div>
                                                    <div className="w-[60%] bg-gray-300 rounded-r-lg"></div>
                                                </div>
                                            ) : (
                                                <div className="w-full h-full bg-gray-300 rounded-lg"></div>
                                            )}
                                        </div>
                                        <span className="text-sm text-white text-center whitespace-nowrap">{item}</span>
                                    </div>
                                ))}
                            </nav>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="w-full h-[500px] flex flex-col pl-[200px] bg-[#F7F78]">
                    <div className="w-[480px] h-[130px] py-4">
                        <h3 className="text-[25px] font-bold leading-[64px]">
                            Our Process
                        </h3>
                        <span className="text-[#141415] text-[16px] font-normal leading-[21px]">
                            Providing transformational solutions for Africa’s unique challenges
                        </span>
                    </div>
                    <div className="">
                        <div className="w-full h-[324px] flex items-center">
                            <div className="w-full max-w-[1050px] h-[294px] flex">
                                {panels.map((panel, index) => (
                                    <div
                                        key={index}
                                        className={`flex-1 ${panel.background} ${panel.textColor} p-6 flex flex-col justify-between ${panel.background === 'bg-white' ? 'shadow-lg' : ''
                                            }`}
                                    >
                                        <div>
                                            <div className="w-4 h-4 bg-red-500 rounded-full mb-4"></div>
                                            <h2 className="text-xl font-bold mb-4">{panel.title}</h2>
                                            <p className="text-sm">{panel.description}</p>
                                        </div>
                                        <a href="#" className="text-sm font-semibold flex items-center">
                                            Learn More
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="w-full h-[212px] bg-[#141415] flex items-center">
                    <div className="w-[1047px] h-[132px] ml-[200px]">
                        <span className="text-[30px] font-bold leading-[44px] text-white">
                            “A good advertisement is one which sells the product without drawing
                            attention to itself.”
                        </span>
                        <div className="flex items-center justify-between">
                            <span className="text-[20px] font-medium leading-[28px] text-white">By David Ogilvy </span>
                            <Link to="/" className="text-white text-[16px] w-[108px] h-[44px] flex items-center justify-center bg-[#FF0226] rounded-lg">Contact uS</Link>
                        </div>
                    </div>
                </div>
            </section >

            <section>
                <div>
                    <Slider />
                </div>
            </section>

            <section>
                <TeamSlider />
            </section>

            <section className="flex items-center justify-center">
                <div className=" h-[470px] bg-white p-6">
                    <Blog />
                </div>
            </section>

            <section>
                <div className="bg-[#EFEFF0] w-full h-[140px] flex items-center justify-center">
                    <div className="w-[1245px] h-[58px] flex items-center justify-between">
                        <img src={brand1} alt="brand" className="object-cover" loading="lazy" />
                        <img src={brand2} alt="brand" className="object-cover" loading="lazy" />
                        <img src={brand3} alt="brand" className="object-cover" loading="lazy" />
                        <img src={brand4} alt="brand" className="object-cover" loading="lazy" />
                        <img src={brand5} alt="brand" className="object-cover" loading="lazy" />
                        <img src={brand6} alt="brand" className="object-cover" loading="lazy" />

                    </div>
                </div>
            </section>

            <section>
                <img src={banner} alt="banner" className="object-cover w-full" loading="lazy" />
            </section>


        </div >
    )
}

export default Home
