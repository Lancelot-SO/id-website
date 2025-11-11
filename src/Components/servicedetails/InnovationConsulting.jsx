/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import { motion, AnimatePresence } from "framer-motion";

import innovabg from "../../assets/service/innovabg.png"

const projects = [
    {
        id: 1,
        title: "Project 1",
        color: "from-orange-200 to-orange-400",
        image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1000&q=80",
    },
    {
        id: 2,
        title: "Project 2",
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1000&q=80",
    },
    {
        id: 3,
        title: "Project 3",
        image: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1000&q=80",
    },
    {
        id: 4,
        title: "Project 4",
        image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=1000&q=80",
    },
];

const InnovationConsulting = () => {
    const [activeId, setActiveId] = useState(1);

    return (
        <div>
            <div className="relative overflow-hidden">
                {/* Background Image */}
                <img
                    src={innovabg}
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

            <section className="bg-[#F9F9F9] py-10 px-4 md:px-[100px] lg:px-[200px] 4xl:px-[400px]">
                <div className="max-w-7xl mx-auto">
                    {/* Section Header */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 items-start gap-8 mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                            Our Services
                        </h2>
                        <p className="text-gray-600 leading-relaxed text-sm md:text-base max-w-xl">
                            From our roots as a dynamic social media agency, we've evolved into West Africa's emerging digital powerhouse. Founded on the principle that authentic connections drive business growth, we combine deep local insights with global digital excellence to deliver results that matter.
                        </p>
                    </div>

                    {/* === ROW 1 === */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
                        {/* Text Left */}
                        <div>
                            <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
                                Digital Transformation
                            </h3>
                            <p className="text-gray-600 leading-relaxed text-sm md:text-base max-w-lg">
                                From our roots as a dynamic social media agency, we've evolved into West Africa's emerging digital powerhouse. Founded on the principle that authentic connections drive business growth, we combine deep local insights with global digital excellence to deliver results that matter..

                            </p>
                        </div>

                        {/* Image Right */}
                        <div className="relative rounded-2xl overflow-hidden shadow-md">
                            <img
                                src="https://images.unsplash.com/photo-1554774853-aae0a22c8aa4?auto=format&fit=crop&w=900&q=80"
                                alt="Vision AI Technology"
                                className="w-full h-[300px] md:h-[350px] object-cover"
                                loading="lazy"
                            />
                            <div className="absolute bottom-6 left-6 bg-gradient-to-r from-[#ED0707] to-[#870404] text-white p-4 rounded-xl shadow-lg max-w-[260px]">
                                <h4 className="font-semibold text-lg mb-1">Vision AI Technology</h4>
                                <p className="text-xs leading-relaxed opacity-90">
                                    Our Technology AI Generator website empowers individuals
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* === ROW 2 === */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
                        {/* Image Left */}
                        <div className="relative rounded-2xl overflow-hidden shadow-md order-2 lg:order-1">
                            <img
                                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80"
                                alt="Vision AI Technology"
                                className="w-full h-[300px] md:h-[350px] object-cover"
                                loading="lazy"
                            />
                            <div className="absolute bottom-6 left-6 bg-gradient-to-r from-[#ED0707] to-[#870404] text-white p-4 rounded-xl shadow-lg max-w-[260px]">
                                <h4 className="font-semibold text-lg mb-1">Vision AI Technology</h4>
                                <p className="text-xs leading-relaxed opacity-90">
                                    Our Technology AI Generator website empowers individuals
                                </p>
                            </div>
                        </div>

                        {/* Text Right */}
                        <div className="order-1 lg:order-2">
                            <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
                                Innovation Workshop
                            </h3>
                            <p className="text-gray-600 leading-relaxed text-sm md:text-base max-w-lg">
                                From our roots as a dynamic social media agency, we've evolved into
                                West Africa's emerging digital powerhouse. Founded on the principle
                                that authentic connections drive business growth, we combine deep local
                                insights with global digital excellence to deliver results that matter.
                            </p>
                        </div>
                    </div>

                    {/* === ROW 3 === */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
                        {/* Text Left */}
                        <div>
                            <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
                                Emerging Technologies
                            </h3>
                            <p className="text-gray-600 leading-relaxed text-sm md:text-base max-w-lg">
                                From our roots as a dynamic social media agency, we've evolved into
                                West Africa's emerging digital powerhouse. Founded on the principle
                                that authentic connections drive business growth, we combine deep local
                                insights with global digital excellence to deliver results that matter.
                            </p>
                        </div>

                        {/* Image Right */}
                        <div className="relative rounded-2xl overflow-hidden shadow-md">
                            <img
                                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=900&q=80"
                                alt="Vision AI Technology"
                                className="w-full h-[300px] md:h-[350px] object-cover"
                                loading="lazy"
                            />
                            <div className="absolute bottom-6 left-6 bg-gradient-to-r from-[#ED0707] to-[#870404] text-white p-4 rounded-xl shadow-lg max-w-[260px]">
                                <h4 className="font-semibold text-lg mb-1">Vision AI Technology</h4>
                                <p className="text-xs leading-relaxed opacity-90">
                                    Our Technology AI Generator website empowers individuals
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <main className="min-h-[600px] bg-white text-gray-900 lg:px-[200px] 4xl:px-[400px]">
                {/* Header */}
                <div className="max-w-7xl mx-auto px-4 lg:py-16 py-10">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start mb-20">
                        <h1 className="text-4xl font-bold tracking-tight">Our Portfolio</h1>
                        <div className="lg:col-span-2">
                            <p className="text-gray-600 text-lg leading-relaxed">
                                From our roots as a dynamic social media agency, we've evolved into
                                West Africa's emerging digital powerhouse. Founded on the principle
                                that authentic connections drive business growth, we combine deep
                                local insights with global digital excellence to deliver results
                                that matter.
                            </p>
                        </div>
                    </div>

                    {/* Image Row */}
                    <div className="flex gap-4 overflow-hidden">
                        {projects.map((project) => {
                            const isActive = activeId === project.id;

                            return (
                                <motion.div
                                    key={project.id}
                                    layout
                                    transition={{ layout: { duration: 0.5, type: "spring" } }}
                                    className={`relative rounded-3xl overflow-hidden cursor-pointer flex-shrink-0 ${isActive ? "flex-[2]" : "flex-[0.6]"
                                        }`}
                                    onClick={() => setActiveId(project.id)}
                                >
                                    <motion.img
                                        src={project.image}
                                        alt={project.title}
                                        className={`w-full h-[400px] object-cover transition-all duration-500 ${isActive ? "grayscale-0" : "grayscale"
                                            }`}
                                    />
                                    <AnimatePresence>
                                        {isActive && (
                                            <motion.div
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                exit={{ opacity: 0 }}
                                                className="absolute inset-0 bg-black/30 flex items-center justify-center"
                                            >
                                                <h2 className="text-white text-xl font-semibold">
                                                    {project.title}
                                                </h2>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </main>
        </div>
    )
}

export default InnovationConsulting