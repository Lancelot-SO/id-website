// eslint-disable-next-line no-unused-vars
import React from 'react'
import contentbg from "../../assets/service/contentbg.png"

import Video from "../../assets/service/v1.png"
import Exp from "../../assets/service/exp.png"


import { motion } from "framer-motion";
import CreativePortfolio from './servicesections/CreativePortfolio';

const services = [
    {
        title: "Motion Design",
        image:
            "https://images.unsplash.com/photo-1527443154391-507e9dc6c5cc?auto=format&fit=crop&w=800&q=80",
        description:
            "From our roots as a dynamic social media agency, we’ve evolved into West Africa’s emerging digital powerhouse. Founded on the principle that authentic connections drive business growth, we combine deep local insights with global digital excellence to deliver results that matter.",
    },
    {
        title: "Video Production",
        image:
            Video,
        description:
            "From our roots as a dynamic social media agency, we’ve evolved into West Africa’s emerging digital powerhouse. Founded on the principle that authentic connections drive business growth, we combine deep local insights with global digital excellence to deliver results that matter.",
    },
    {
        title: "Social Content",
        image:
            "https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&w=800&q=80",
        description:
            "From our roots as a dynamic social media agency, we’ve evolved into West Africa’s emerging digital powerhouse. Founded on the principle that authentic connections drive business growth, we combine deep local insights with global digital excellence to deliver results that matter.",
    },
    {
        title: "Immersive Experience",
        image:
            Exp,
        description:
            "From our roots as a dynamic social media agency, we’ve evolved into West Africa’s emerging digital powerhouse. Founded on the principle that authentic connections drive business growth, we combine deep local insights with global digital excellence to deliver results that matter.",
    },
];


const ContentProduction = () => {
    return (
        <div className='overflow-hidden'>
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
                            Catching Your Vision And Telling Your Story
                        </h1>
                        <p className="text-gray-200 mt-4 text-[14px] sm:text-[16px] lg:text-[18px] font-light tracking-wide">
                            Crafting Digital Excellence for Africa’s Ambitious Brand
                        </p>
                    </div>
                </div>
            </div>

            <section className="bg-gray-50 py-20 px-4 md:px-12 lg:px-[200px] 4xl:px-[400px]">
                <div className="max-w-7xl mx-auto">
                    {/* Section Header */}
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-20">
                        <h2 className="text-4xl font-bold text-gray-900 mb-6 md:mb-0">
                            Our Services
                        </h2>
                        <p className="text-gray-600 max-w-2xl leading-relaxed">
                            From our roots as a dynamic social media agency, we’ve evolved into
                            West Africa’s emerging digital powerhouse. Founded on the principle
                            that authentic connections drive business growth, we combine deep
                            local insights with global digital excellence to deliver results
                            that matter.
                        </p>
                    </div>

                    {/* Services List */}
                    <div className="flex flex-col gap-24">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                                className={`grid md:grid-cols-2 gap-10 items-center ${index % 2 !== 0 ? "md:[&>*:first-child]:order-2" : ""
                                    }`}
                            >
                                {/* Image */}
                                <div className="relative overflow-hidden rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.15)] hover:shadow-[0_25px_50px_rgba(0,0,0,0.2)] transition-all duration-500">
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-full object-cover rounded-2xl transition-transform duration-500 hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                                        <button className="bg-red-600/50 hover:bg-red-700/50 text-white w-[65px] h-[65px] rounded-full text-2xl shadow-md transition">
                                            ▶
                                        </button>
                                    </div>
                                </div>


                                {/* Text */}
                                <div>
                                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        {service.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <CreativePortfolio />

        </div>
    )
}

export default ContentProduction