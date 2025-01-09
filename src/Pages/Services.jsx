import servicebg from "../assets/service/servicebg.png"
import service1 from "../assets/service/service-1.png"
import service2 from "../assets/service/service-2.png"
import service3 from "../assets/service/service-3.png"
import service4 from "../assets/service/service-4.png"

import banner from "../assets/banner.png"




import { Link } from "react-router-dom"
const Services = () => {
    return (
        <div>
            <div className="relative">
                <img src={servicebg} alt="about" className="object-cover w-full" loading="lazy" />
                <div className=" absolute top-[285px] left-[195px] w-[858px] h-[72px] flex flex-col gap-2">
                    <h2 className="text-3xl font-bold text-white">Our Services</h2>
                    <p className="text-white text-opacity-50">
                        We are a leading Ghanaian insurance company offering a diverse range of products and services covering general and special risk businesses. We are licensed to underwrite all classes of non-life insurance, such as motor insurance, marine insurance, fire and special perils, goods-in-transit, all risks insurance, etc.
                    </p>
                </div>
            </div>

            <section>
                <div className="w-full h-[304px] flex items-center pl-[200px]">
                    <div className="w-[560px] h-[144px]">
                        <h2 className="text-[30px] font-semibold text-black">Products & Solutions for The Individual</h2>
                        <p className="text-[#56575D] text-[14px]  mt-4">
                            Interactive Digital is a dynamic and innovative marketing communications agency that prides itself on merging creativity with cutting-edge technology to deliver exceptional outcomes for our clients..
                        </p>


                    </div>
                </div>
            </section>

            <section>
                <div className="w-full h-[488px] flex">
                    <div className="bg-[#E1E1E1] flex-1 flex items-center justify-center">
                        <div className="w-[400px] h-[208px] flex flex-col pl-[20px]">
                            <h2 className="text-[30px] font-semibold text-black">Social Media  Marketing </h2>
                            <p className="text-[#56575D] text-[14px]  mt-2">
                                Cut through the noise and find your people!You need people to see you and what you can do. No problem! Sit back, relax, and let us create content that speaks to your tribe!.
                            </p>
                            <Link to="/digital" className="text-[#FF0226] hover:underline mt-6">Get interactive on social media </Link>
                        </div>
                    </div>
                    <div className="bg-blue-600 flex-1">
                        <img src={service1} alt="img" className="object-cover w-full h-full" loading="lazy" />
                    </div>

                </div>
            </section>

            <section>
                <div className="w-full h-[488px] flex">
                    <div className="bg-blue-600 flex-1">
                        <img src={service2} alt="img" className="object-cover w-full h-full" loading="lazy" />
                    </div>
                    <div className="flex-1 flex items-center">
                        <div className="w-[400px] h-[208px] flex flex-col pl-[50px]">
                            <h2 className="text-[30px] font-semibold text-black">Media Production</h2>
                            <p className="text-[#56575D] text-[14px]  mt-2">
                                The hustle and bustle of infinite scrolling, you need a story that stops people in their tracks, with captivating visuals to match. And that’s where we come in…
                            </p>
                            <Link to="/media" className="text-[#FF0226] hover:underline mt-6">Shoot my story</Link>
                        </div>
                    </div>


                </div>
            </section>

            <section>
                <div className="w-full h-[488px] flex">
                    <div className="bg-[#E1E1E1] flex-1 flex items-center justify-center">
                        <div className="w-[400px] h-[208px] flex flex-col pl-[20px]">
                            <h2 className="text-[30px] font-semibold text-black">Online Advertisment  </h2>
                            <p className="text-[#56575D] text-[14px]  mt-2">
                                Getting found online is hard. Getting found by the right audience? - even harder. Navigating the Wild West of the Internet is no easy feat… unless you’re a pro, like us!!.                            </p>
                            <Link to="/advert" className="text-[#FF0226] hover:underline mt-6">Advertise with us</Link>
                        </div>
                    </div>
                    <div className="bg-blue-600 flex-1">
                        <img src={service3} alt="img" className="object-cover w-full h-full" loading="lazy" />
                    </div>

                </div>
            </section>

            <section>
                <div className="w-full h-[488px] flex">
                    <div className="bg-blue-600 flex-1">
                        <img src={service4} alt="img" className="object-cover w-full h-full" loading="lazy" />
                    </div>
                    <div className="flex-1 flex items-center">
                        <div className="w-[400px] h-[208px] flex flex-col pl-[50px]">
                            <h2 className="text-[30px] font-semibold text-black">Strategy Consulting</h2>
                            <p className="text-[#56575D] text-[14px]  mt-2">
                                If at first you don’t succeed, just call us!Millions of accounts and thousands of brands, all fighting for top billing. Standing out is all about cracking the code. And would you look at that, we have that here, ready and waiting - just for you!                            </p>
                            <Link to="/" className="text-[#FF0226] hover:underline mt-6">Talk to us</Link>
                        </div>
                    </div>


                </div>
            </section>

            <section>
                <div className="w-full h-[488px] flex">
                    <div className="bg-[#E1E1E1] flex-1 flex items-center justify-center">
                        <div className="w-[400px] h-[208px] flex flex-col pl-[20px]">
                            <h2 className="text-[30px] font-semibold text-black">Software Development</h2>
                            <p className="text-[#56575D] text-[14px]  mt-2">
                                Find your spot in a noisy world. We know the exact place
                                We harness the power of digital channels to expand your brand’s reach. Our digital marketing experts develop data-driven strategies to connect with your target audience, increase engagement, and drive conversions..                            </p>
                            <Link to="/" className="text-[#FF0226] hover:underline mt-6">Talk to us</Link>
                        </div>
                    </div>
                    <div className="bg-blue-600 flex-1">
                        <img src={service1} alt="img" className="object-cover w-full h-full" loading="lazy" />
                    </div>
                </div>
            </section>

            <section>
                <img src={banner} alt="banner" className="object-cover w-full h-[400px]" loading="lazy" />
            </section>
        </div>
    )
}

export default Services