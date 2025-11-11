// eslint-disable-next-line no-unused-vars
import React from 'react'

import contentbg from "../../assets/service/ct.png"


const CreativeTechnology = () => {
    return (
        <div>
            <div className="relative overflow-hidden">
                {/* Background Image */}
                <img
                    src={contentbg}
                    alt="services background"
                    className="object-cover w-full lg:h-[80vh] h-[500px] brightness-[0.45]"
                    loading="lazy"
                />


                {/* Text Content - middle left */}
                <div className="absolute inset-0 flex flex-col justify-center px-6 sm:px-12 md:px-[100px] lg:px-[200px] 4xl:pl-[400px] text-left">
                    <div className="max-w-3xl">
                        <h1 className="text-white font-bold text-[32px] sm:text-[42px] lg:text-[54px] leading-tight drop-shadow-lg">
                            Crafting Immersive Experiences Through Creative Engineering
                        </h1>
                        <p className="text-gray-200 mt-4 text-[14px] sm:text-[16px] lg:text-[18px] font-light tracking-wide">
                            Crafting Digital Excellence for Africa’s Ambitious Brand
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreativeTechnology