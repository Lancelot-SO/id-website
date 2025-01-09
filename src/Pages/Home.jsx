import { useEffect } from "react"
import herobg from "../assets/herobg.png"
import sectbg from "../assets/sectbg.png"
import sectImg from "../assets/sectImg1.png"
import sectImg2 from "../assets/sectImg2.png"

import Blog1 from "../assets/blog/blog1.png"
import Blog2 from "../assets/blog/blog2.png"
import Blog3 from "../assets/blog/blog3.png"

import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom"
import Slider from "../Components/Slider"
import TeamSlider from "../Components/TeamSlider"

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

    const blogPosts = [
        {
            id: 1,
            title: "A dive into the digital phase of advertising",
            excerpt: "Advertising has transcended traditional boundaries into the digital phase over the last 30 years, and it's a change anyone in the advertising field should be constantly adapting to.",
            image: Blog1,
            author: "Janet A. Saah",
            date: "April 02, 2024",
            readTime: "3 min read"
        },
        {
            id: 2,
            title: "Influencers vs social media personalities",
            excerpt: "While influencers can certainly impact consumer decisions, their effectiveness can vary depending on factors such as industry niche, audience engagement, and the specific goals of a brand's marketing...",
            image: Blog2,
            author: "Kwadwo A. Sirebour",
            date: "April 02, 2024",
            readTime: "5 min read"
        },
        {
            id: 3,
            title: "How Artificial Intelligence is Shaping Our Future",
            excerpt: "There's no denying that technology is transforming our world. From the way we work to the way we communicate, innovation seems to be the name ...",
            image: Blog3,
            author: "Judith Abani",
            date: "April 02, 2024",
            readTime: "7 min read"
        },
        {
            id: 4,
            title: "How Artificial Intelligence is Shaping Our Future",
            excerpt: "There's no denying that technology is transforming our world. From the way we work to the way we communicate, innovation seems to be the name ...",
            image: Blog1,
            author: "Judith Abani",
            date: "April 02, 2024",
            readTime: "7 min read"
        }
    ]

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
        <div className="overflow-hidden">
            <div className="relative w-full bg-cover">
                <img
                    src={herobg}
                    className="w-full h-[700px] lg:h-[700px] sm:h-[400px] bg-cover object-cover"
                    loading="lazy"
                    alt="Hero Background"
                />
                <div className="absolute bottom-0 left-0 md:left-[50px] lg:left-[200px] w-full md:w-[780px] h-auto p-4 sm:p-6 bg-[#ED0707] bg-opacity-60">
                    <div className="w-full md:w-[731px]">
                        <div className="w-full sm:w-[337px]">
                            <h1 className="text-white font-semibold text-[32px] sm:text-[36px] md:text-[48px] leading-tight md:leading-[56px]">
                                Your <span className="text-black font-bold">Digital</span>
                                <br />
                                POWERHOUSE
                            </h1>
                        </div>
                        <span className="block mt-2 text-[14px] sm:text-[16px] md:text-[20px] font-medium leading-[20px] md:leading-[28px] text-white opacity-80">
                            Creating experiences, driving solutions, growing your business...
                            <br className="hidden sm:block" />
                            is our business.
                        </span>
                    </div>
                </div>
            </div>



            <section>
                <div className="w-full mt-[30px] flex items-center justify-center">
                    <div className="lg:w-[1050px] w-full lg:h-[457px] h-auto flex lg:flex-row flex-col items-center">
                        {/* Left Section */}
                        <div className="relative lg:w-[553px] w-full h-auto rounded-bl-[20px]">
                            <img
                                src={sectbg}
                                alt="Background"
                                className="rounded-bl-[20px] w-full h-auto"
                                loading="lazy"
                            />
                            <div className="absolute top-2 left-1/2 transform -translate-x-1/2 lg:translate-x-0 lg:left-[100px]">
                                <img
                                    src={sectImg}
                                    alt="Image Overlay"
                                    className="lg:w-[414px] lg:h-[372px] w-[250px] h-[220px] object-contain"
                                    loading="lazy"
                                />
                            </div>
                        </div>

                        {/* Right Section */}
                        <div className="lg:w-[496px] w-full lg:h-full h-auto bg-black rounded-r-[20px] flex items-center justify-center p-4 lg:p-0">
                            <div className="lg:w-[381px] w-full lg:h-[205px] h-auto text-center lg:text-left">
                                <div className="lg:w-[200px] w-full lg:h-[73px] h-auto">
                                    <h2 className="text-white font-bold text-[20px] sm:text-[25px] leading-[30px] sm:leading-[36px]">
                                        YOU DREAM IT,
                                        <br className="block lg:hidden" />
                                        WE CREATE IT
                                    </h2>
                                </div>
                                <div className="lg:w-[381px] w-full lg:h-[119px] h-auto mt-4">
                                    <span className="text-[12px] sm:text-[14px] text-white leading-5 font-normal">
                                        An award-winning 360 marketing communications agency that creates
                                        compelling experiences for great brands. Our solutions leverage
                                        strategy, creative thinking, and coordinated executions to
                                        deliver on business goals with a focus on digital. Our approach
                                        is agile, collaborative, and human-led.
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section>
                <div className="w-full lg:h-[630px] h-auto py-4">
                    {/* Header Section */}
                    <div className="lg:w-[450px] w-full lg:ml-[200px] ml-4 px-4 lg:px-0 py-4">
                        <h3 className="lg:text-[25px] text-[20px] font-bold lg:leading-[64px] leading-[30px]">
                            Our Services
                        </h3>
                        <span className="text-[#56575D] lg:text-[18px] text-[14px] font-normal leading-6">
                            When we say 360, we mean it. From content creation to media production,
                            we do it all...
                        </span>
                    </div>

                    {/* Image and Menu Section */}
                    <div className="relative">
                        <img
                            src={sectImg2}
                            alt="sect"
                            className="object-cover w-full h-auto"
                            loading="lazy"
                        />
                        <div className="absolute bottom-2 lg:left-[200px] left-4 right-4 lg:w-[1083px] w-auto h-auto bg-[#ED0707] bg-opacity-5 p-2 lg:p-4 rounded-md">
                            <nav className="flex lg:flex-row flex-wrap justify-center lg:justify-between items-center">
                                {menuItems.map((item, index) => (
                                    <div
                                        key={index}
                                        className="flex flex-col items-center w-full lg:w-auto mx-1 lg:mx-2 my-2 lg:my-0 first:ml-0 last:mr-0"
                                    >
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
                                        <span className="text-xs lg:text-sm text-white text-center whitespace-nowrap">
                                            {item}
                                        </span>
                                    </div>
                                ))}
                            </nav>
                        </div>
                    </div>
                </div>
            </section>


            <section>
                <div className="w-full lg:h-[500px] h-auto py-6 bg-[#F7F78] flex flex-col lg:pl-[200px] px-4">
                    {/* Header Section */}
                    <div className="lg:w-[480px] w-full h-auto py-2">
                        <h3 className="lg:text-[25px] text-[20px] font-bold lg:leading-[64px] leading-[30px] mt-8">
                            Our Process
                        </h3>
                        <span className="text-[#141415] lg:text-[16px] text-[14px] font-normal leading-[21px]">
                            Providing transformational solutions for Africa’s unique challenges
                        </span>
                    </div>

                    {/* Panels Section */}
                    <div className="w-full lg:h-[324px] h-auto flex items-center mt-4">
                        <div className="w-full max-w-[1050px] h-auto flex lg:flex-row flex-col gap-4">
                            {panels.map((panel, index) => (
                                <div
                                    key={index}
                                    className={`flex-1 ${panel.background} ${panel.textColor} p-6 flex flex-col justify-between ${panel.background === 'bg-white' ? 'shadow-lg' : ''
                                        }`}
                                >
                                    <div>
                                        <div className="w-4 h-4 bg-red-500 rounded-full my-4"></div>
                                        <h2 className="lg:text-xl text-lg font-bold mb-4">{panel.title}</h2>
                                        <p className="lg:text-sm text-xs">{panel.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>


            <section>
                <div className="w-full h-auto bg-[#141415] flex items-center py-6 px-4 lg:px-0">
                    <div className="lg:w-[1047px] w-full lg:h-[132px] h-auto lg:ml-[200px] mx-auto">
                        {/* Quote Text */}
                        <span className="text-white font-bold lg:text-[30px] text-[20px] lg:leading-[44px] leading-[30px] block mb-4">
                            “A good advertisement is one which sells the product without drawing attention to itself.”
                        </span>

                        {/* Author and Contact Button */}
                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                            <span className="text-white font-medium lg:text-[20px] text-[16px] lg:leading-[28px] leading-[24px] mb-4 lg:mb-0">
                                By David Ogilvy
                            </span>
                            <Link
                                to="/contact"
                                className="text-white text-[16px] w-[108px] h-[44px] flex items-center justify-center bg-[#FF0226] rounded-lg"
                            >
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </div>
            </section>


            <section>
                <div>
                    <Slider />
                </div>
            </section>

            <section>
                <TeamSlider />
            </section>

            <section className="flex items-center justify-center">
                <div className=" lg:h-[470px] h-auto bg-white p-6">
                    <div className="flex lg:flex-row flex-col lg:space-x-6 space-x-0 gap-4 lg:gap-0">
                        {blogPosts.map((post) => (
                            <div key={post.id} className="flex-shrink-0 lg:w-64 mb-4 lg:mb-0">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-[216px] h-40 rounded-lg object-cover mb-4"
                                />
                                <div className="lg:h-[120px] h-auto">
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
                <div className="hidden bg-[#EFEFF0] w-full h-[140px] items-center justify-center">
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
                <img src={banner} alt="banner" className="object-cover w-full h-[400px]" loading="lazy" />
            </section>


        </div >
    )
}

export default Home
