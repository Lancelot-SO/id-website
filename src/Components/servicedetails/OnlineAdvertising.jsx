/* eslint-disable no-unused-vars */
import React from 'react'
import addbanner from "../../assets/onlineadvert/addbanner.png"
import malt from "../../assets/onlineadvert/malt.png"
import shield from "../../assets/onlineadvert/shield.png"
import mtn from "../../assets/onlineadvert/mtn.png"
import advertfooter from "../../assets/onlineadvert/advertfooter.png"



const OnlineAdvertising = () => {
    return (
        <div>
            <div className="relative">
                <img src={addbanner} alt="about" className="object-cover w-full" loading="lazy" />
                <div className=" absolute top-[285px] left-[195px] w-[858px] h-[72px] flex flex-col gap-2">
                    <h2 className="text-[40px] font-bold text-white">Online Advertising</h2>
                </div>
            </div>

            <section>
                <div className="w-full h-[304px] flex items-center pl-[200px] bg-black">
                    <div className="w-[1000px]">
                        <h2 className="text-[30px] font-semibold text-white w-[483px]">
                            SEEING IS BELIEVING AND THE NUMBERS DON’T LIE!
                        </h2>
                        <div className='text-white flex'>
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
                        <div className="w-[1118px] h-[400px] my-4 py-4 relative">
                            <div className="">
                                <img
                                    src={malt}
                                    alt="Malta Guinness"
                                    className="shadow-lg object-cover"
                                />

                            </div>
                            {/* Content Section */}
                            <div className='absolute top-[70px] right-[5px] w-[657px] h-[342px] flex items-center justify-center bg-white shadow-lg'>
                                <div className='w-[464px]'>
                                    <h2 className="text-2xl font-bold text-black mb-4">
                                        MALTA GUINNESS
                                    </h2>
                                    <p className="text-gray-700 text-lg leading-relaxed">
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
                <div className='bg-white w-full h-[500px] flex items-center justify-center'>
                    <div className="flex items-center">
                        {/* Image and Content Section */}
                        <div className="w-[1118px] h-[400px] my-4 py-4 relative flex flex-row-reverse">
                            {/* Image Section */}
                            <div className="">
                                <img
                                    src={shield}
                                    alt="Dosh"
                                    className="shadow-lg object-cover"
                                />
                            </div>
                            {/* Content Section */}
                            <div className='absolute top-[30px] left-[5px] w-[657px] h-[342px] flex items-center justify-center bg-white shadow-lg'>
                                <div className='w-[464px]'>
                                    <h2 className="text-2xl font-bold text-black mb-4">
                                        DOSH INSURANCE
                                    </h2>
                                    <p className="text-gray-700 text-lg leading-relaxed">
                                        Take charge of your bank account and do more from your computer, smartphone, and other mobile devices. Welcome to Convenient Banking
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className='bg-[#F4F4F4] w-full h-[500px] flex items-center justify-center'>
                    <div className=" flex items-center">
                        {/* Image Section */}
                        <div className="w-[1118px] h-[400px] my-4 py-4 relative">
                            <div className="">
                                <img
                                    src={malt}
                                    alt="Malta Guinness"
                                    className="shadow-lg object-cover"
                                />

                            </div>
                            {/* Content Section */}
                            <div className='absolute top-[70px] right-[5px] w-[657px] h-[342px] flex items-center justify-center bg-white shadow-lg'>
                                <div className='w-[464px]'>
                                    <h2 className="text-2xl font-bold text-black mb-4">
                                        STANBIC BANK
                                    </h2>
                                    <p className="text-gray-700 text-lg leading-relaxed">
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
                <div className='bg-white w-full h-[500px] flex items-center justify-center'>
                    <div className="flex items-center">
                        {/* Image and Content Section */}
                        <div className="w-[1118px] h-[400px] my-4 py-4 relative flex flex-row-reverse">
                            {/* Image Section */}
                            <div className="">
                                <img
                                    src={mtn}
                                    alt="Dosh"
                                    className="shadow-lg object-cover"
                                />
                            </div>
                            {/* Content Section */}
                            <div className='absolute top-[30px] left-[5px] w-[657px] h-[342px] flex items-center justify-center bg-white shadow-lg'>
                                <div className='w-[464px]'>
                                    <h2 className="text-2xl font-bold text-black mb-4">
                                        MTN
                                    </h2>
                                    <p className="text-gray-700 text-lg leading-relaxed">
                                        Take charge of your bank account and do more from your computer, smartphone, and other mobile devices. Welcome to Convenient Banking
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <img src={advertfooter} alt="banner" className="object-cover w-full h-[400px]" loading="lazy" />
            </section>

        </div>
    )
}

export default OnlineAdvertising