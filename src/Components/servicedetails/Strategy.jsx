/* eslint-disable no-irregular-whitespace */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react'
import strategy from "../../assets/strategy/strategybanner.png"
import strat1 from "../../assets/strategy/strat1.png"
import strat2 from "../../assets/strategy/strat2.png"
import strat3 from "../../assets/strategy/strat3.png"
import strat4 from "../../assets/strategy/strat4.png"
import strat5 from "../../assets/strategy/strat5.png"
import strat6 from "../../assets/strategy/strat6.png"





const Strategy = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
    return (
        <div className='overflow-hidden'>
            <div className="relative">
                <img
                    src={strategy}
                    alt="about"
                    className="object-cover w-full lg:h-full h-[400px]"
                    loading="lazy"
                />
                <div className="absolute top-[225px] left-[15px] w-full lg:h-[72px] flex flex-col gap-2 lg:top-[325px] lg:left-[195px] lg:w-[858px]">
                    <h2 className="text-3xl font-bold text-white text-left">
                        Strategy & Consulting
                    </h2>
                </div>
            </div>

            <section>
                <div className="w-full lg:h-[388px] flex lg:flex-row flex-col-reverse">
                    <div className="flex-1 flex items-center justify-center">
                        <div className="w-[600px] lg:h-[208px] flex flex-col lg:pl-[120px]">
                            <h2 className="text-[30px] font-bold text-black px-4 lg:px-0">Consulting </h2>
                            <p className="text-[#56575D] text-[14px] mt-2 px-4 lg:px-0">
                                The Ninani Group and Interactive Digital for that matter, prides itself in a strong strategic orientation in profering communication solutions to its clients.This diversified product portfolio allows the strategic unit of the Interactive Digital to offer a comprehensive range of services to clients, catering to their various needs and objectives in the competitive advertising landscape. .These encompass ..
                            </p>
                        </div>
                    </div>
                    <div className="flex-1">
                        <img src={strat1} alt="img" className="object-cover w-full h-full" loading="lazy" />
                    </div>

                </div>
            </section>

            <section>
                <div className="w-full lg:h-[388px] flex lg:flex-row flex-col-reverse">
                    <div className="bg-[#E1E1E1] flex-1 flex items-center justify-center">
                        <div className="w-[600px] lg:h-[208px] flex flex-col lg:pl-[120px]">
                            <h2 className="text-[30px] font-bold text-red-500 px-4 lg:px-0">Brand Strategy: </h2>
                            <p className="text-[#56575D] text-[14px]  mt-2 px-4 lg:px-0">
                                Development of comprehensive brand strategies for clients, including market segmentation, brand positioning, targeting, messaging, and differentiation strategies.
                            </p>
                        </div>
                    </div>
                    <div className="bg-[#E1E1E1] flex-1">
                        <img src={strat2} alt="img" className="object-cover w-full h-full" loading="lazy" />
                    </div>

                </div>
            </section>

            <section>
                <div className="w-full lg:h-[388px] flex lg:flex-row flex-col">
                    <div className="flex-1 flex items-center justify-center">
                        <div className='lg:w-[750px] h-[400px] lg:pl-[130px] pt-2'>
                            <img src={strat3} alt="img" className="object-cover w-full h-full" loading="lazy" />
                        </div>
                    </div>
                    <div className="flex-1 flex items-center">
                        <div className="w-[600px] lg:h-[208px] flex flex-col lg:pl-[50px]">
                            <h2 className="lg:text-[30px] text-[26px] font-bold text-red-500 px-4 lg:px-0">Digital Marketing Service:</h2>
                            <p className="text-[#56575D] text-[14px]  mt-2 px-4 lg:px-0">
                                Creation and management of digital marketing campaigns, including always-on content for a strong digital presence, search engine marketing (SEM), search engine optimization (SEO), social media advertising, email marketing, and content marketing.                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="w-full lg:h-[388px] flex lg:flex-row flex-col-reverse">
                    <div className="bg-[#E1E1E1] flex-1 flex items-center justify-center">
                        <div className="w-[600px] lg:h-[208px] flex flex-col lg:pl-[120px]">
                            <h2 className="text-[30px] font-bold text-red-500 px-4 lg:px-0">Social Media Management:</h2>
                            <p className="text-[#56575D] text-[14px]  mt-2 px-4 lg:px-0">
                                Development of comprehensive brand strategies for clients, including market segmentation, brand positioning, targeting, messaging, and differentiation strategies.
                            </p>
                        </div>
                    </div>
                    <div className="bg-[#E1E1E1] flex-1">
                        <img src={strat4} alt="img" className="object-cover w-full h-full" loading="lazy" />
                    </div>

                </div>
            </section>

            <section>
                <div className="w-full lg:h-[388px] flex lg:flex-row flex-col">
                    <div className="flex-1 flex items-center justify-center">
                        <div className='w-[750px] h-[400px] lg:pl-[130px] pt-2'>
                            <img src={strat5} alt="img" className="object-cover w-full h-full" loading="lazy" />
                        </div>
                    </div>
                    <div className="flex-1 flex items-center">
                        <div className="w-[600px] lg:h-[208px] flex flex-col lg:pl-[50px]">
                            <h2 className="text-[30px] font-bold text-red-500 px-4 lg:px-0">Marketing Research and Analytics:</h2>
                            <p className="text-[#56575D] text-[14px]  mt-2 px-4 lg:px-0">
                                Development of comprehensive brand strategies for clients, including market segmentation, brand positioning, targeting, messaging, and differentiation strategies.                                </p>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="w-full lg:h-[388px] flex lg:flex-row flex-col-reverse">
                    <div className="bg-[#E1E1E1] flex-1 flex items-center justify-center">
                        <div className="w-[600px] h-[208px] flex flex-col lg:pl-[120px]">
                            <h2 className="text-[30px] font-bold text-red-500 px-4 lg:px-0">Consulting & Training:</h2>
                            <p className="text-[#56575D] text-[14px]  mt-2 px-4 lg:px-0">
                                Development of comprehensive brand strategies for clients, including market segmentation, brand positioning, targeting, messaging, and differentiation strategies.
                            </p>
                        </div>
                    </div>
                    <div className="bg-[#E1E1E1] flex-1">
                        <img src={strat6} alt="img" className="object-cover w-full h-full" loading="lazy" />
                    </div>

                </div>
            </section>

        </div>
    )
}

export default Strategy