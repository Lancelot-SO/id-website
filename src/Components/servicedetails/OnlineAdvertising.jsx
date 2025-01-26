/* eslint-disable no-unused-vars */
import React from 'react'
import addbanner from "../../assets/onlineadvert/addbanner.png"
import malt from "../../assets/onlineadvert/malt.png"
import shield from "../../assets/onlineadvert/shield.png"
import mtn from "../../assets/onlineadvert/mtn.png"
import stanbic from "../../assets/slider/img3.png"



const OnlineAdvertising = () => {
    // window.scrollTo({
    //     top: 0,
    //     behavior: 'smooth',
    // });
    return (
        <div className='overflow-hidden'>
            <div className="relative">
                <img src={addbanner} alt="about" className="object-cover w-full h-[350px]" loading="lazy" />
                <div className=" absolute lg:top-[285px] top-[150px] lg:left-[195px] lg:w-[858px] h-[72px] flex flex-col gap-2">
                    <h2 className="text-[40px] font-bold text-white">Online Advertising</h2>
                </div>
            </div>

            <section>
                <div className="w-full lg:h-[304px] h-[500px] flex items-center lg:pl-[200px] bg-black">
                    <div className="lg:w-[1000px] w-full flex flex-col gap-6 px-4">
                        <h2 className="lg:text-[30px] text-[24px] font-semibold text-white lg:w-[750px]">
                            SEEING IS BELIEVING AND THE NUMBERS DON’T LIE!
                        </h2>
                        <div className='text-white flex lg:flex-row flex-col gap-10'>
                            <span>
                                We are creatives, which means stellar work is our ultimate goal.
                                But we do understand that it doesn’t amount to much if it is placed in front of the right audiences.
                                So it’s a great thing we have a clear understanding of audiences.
                            </span>
                            <span>
                                Through effective research, we establish note-worthy human behaviour online,
                                analyse new markets developing, examine demographic interests in order to advertise the
                                right digital material for the purposes of conversion and brand growth..
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className='bg-[#F4F4F4] w-full h-[500px] flex items-center justify-center'>
                    <div className=" flex items-center">
                        {/* Image Section */}
                        <div className="lg:w-[1118px] h-[400px] my-4 py-4 relative">
                            <div className="">
                                <img
                                    src={malt}
                                    alt="Malta Guinness"
                                    className="shadow-lg object-cover"
                                />

                            </div>
                            {/* Content Section */}
                            <div className='absolute lg:top-[70px] lg:right-[20%] lg:w-[500px] h-[250px] flex items-center justify-center bg-white shadow-lg'>
                                <div className='lg:w-[380px] px-4 lg:px-4'>
                                    <h2 className="text-xl font-bold text-black mb-2">
                                        MALTA GUINNESS
                                    </h2>
                                    <p className="text-gray-700 text-base leading-relaxed">
                                        Cut through the noise and find your people! You need people to see you
                                        and what you can do. No problem! Sit back, relax, and let us create
                                        content that speaks to your tribe!
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </section>

            <section>
                <div className='bg-white w-full lg:h-[500px] h-[660px] flex items-center justify-center'>
                    <div className="flex items-center">
                        {/* Image and Content Section */}
                        <div className="lg:w-[1118px] lg:h-[400px] my-4 py-4 relative flex lg:flex-row-reverse flex-col">
                            {/* Image Section */}
                            <div className="">
                                <img
                                    src={shield}
                                    alt="Dosh"
                                    className="shadow-lg object-cover"
                                />
                            </div>
                            {/* Content Section */}
                            <div className='absolute lg:top-[50px] top-[100%] lg:left-[17%] lg:w-[500px] h-[250px] flex items-center justify-center bg-white shadow-lg'>
                                <div className='lg:w-[380px] px-4 lg:px-4'>
                                    <h2 className="text-xl font-bold text-black mb-2">
                                        DOSH INSURANCE
                                    </h2>
                                    <p className="text-gray-700 text-base leading-relaxed">
                                        Take charge of your bank account and do more from your computer, smartphone, and other mobile devices. Welcome to Convenient Banking.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className='bg-[#F4F4F4] w-full lg:h-[500px] h-[700px] flex items-center justify-center'>
                    <div className=" flex items-center">
                        {/* Image Section */}
                        <div className="lg:w-[1118px] lg:h-[400px] my-4 py-4 relative">
                            <div className="">
                                <img
                                    src={stanbic}
                                    alt="Malta Guinness"
                                    className="w-[491px] h-[327px] shadow-lg object-cover"
                                />

                            </div>
                            {/* Content Section */}
                            <div className='absolute lg:top-[70px] lg:right-[17%] lg:w-[500px] h-[250px] flex items-center justify-center bg-white shadow-lg'>
                                <div className='lg:w-[380px]  px-4 lg:px-4'>
                                    <h2 className="text-xl font-bold text-black mb-2">
                                        STANBIC BANK
                                    </h2>
                                    <p className="text-gray-700 text-base leading-relaxed">
                                        Cut through the noise and find your people! You need people to see you
                                        and what you can do. No problem! Sit back, relax, and let us create
                                        content that speaks to your tribe!
                                    </p>
                                </div>
                            </div>

                        </div>



                    </div>
                </div>

            </section>

            <section>
                <div className='bg-white w-full lg:h-[500px] h-[700px] flex items-center justify-center'>
                    <div className="flex items-center">
                        {/* Image and Content Section */}
                        <div className="lg:w-[1118px] h-[400px] my-4 py-4 relative flex flex-row-reverse">
                            {/* Image Section */}
                            <div className="">
                                <img
                                    src={mtn}
                                    alt="Dosh"
                                    className="shadow-lg object-cover"
                                />
                            </div>
                            {/* Content Section */}
                            <div className='absolute lg:top-[50px] top-[65%] lg:left-[17%] lg:w-[500px] w-[350px] h-[250px] flex items-center justify-center bg-white shadow-lg'>
                                <div className='lg:w-[400px] w-[300px]'>
                                    <h2 className="text-xl font-bold text-black mb-2">
                                        MTN
                                    </h2>
                                    <p className="text-gray-700 text-base leading-relaxed">
                                        Take charge of your bank account and do more from your computer, smartphone, and other mobile devices. Welcome to Convenient Banking
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default OnlineAdvertising