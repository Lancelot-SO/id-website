/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import analyticbg from "../../assets/service/analyticbg.png"
import { motion, AnimatePresence } from "framer-motion";
import {
    FaCss3Alt,
    FaHtml5,
    FaPython,
    FaWordpress,
    FaReact,
    FaArrowLeft,
    FaArrowRight,
} from "react-icons/fa";

const slides = [
    {
        id: 1,
        title: "Digital Transformation",
        category: "Category",
        description:
            "Lorem ipsum dolor sit amet consectetur. Eu lobortis aliquet nec dui blandit faucibus proin vitae adipiscing.",
        image:
            "https://images.unsplash.com/photo-1510552776732-03e61cf4b144?auto=format&fit=crop&w=900&q=80",
        tech: [FaCss3Alt, FaHtml5, FaPython, FaWordpress, FaReact],
    },
    {
        id: 2,
        title: "Brand Strategy & Design",
        category: "Category",
        description:
            "We help brands connect with audiences through visual storytelling and impactful digital experiences.",
        image:
            "https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?auto=format&fit=crop&w=900&q=80",
        tech: [FaHtml5, FaCss3Alt, FaReact, FaWordpress, FaPython],
    },
];

const DataAnalytics = () => {

    const projects = [
        {
            id: 1,
            title: "Project 1",
            image:
                "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=900&q=80",
        },
        {
            id: 2,
            title: "Project 2",
            image:
                "https://images.unsplash.com/photo-1593642634367-d91a135587b5?auto=format&fit=crop&w=900&q=80",
        },
        {
            id: 3,
            title: "Project 3",
            image:
                "https://images.unsplash.com/photo-1591696205602-2f950c417cb9?auto=format&fit=crop&w=900&q=80",
        },
        {
            id: 4,
            title: "Project 4",
            image:
                "https://images.unsplash.com/photo-1581091012184-5c8af5bda7a9?auto=format&fit=crop&w=900&q=80",
        },
    ];
    const [active, setActive] = useState(1);

    const [current, setCurrent] = useState(0);
    const [direction, setDirection] = useState(0);

    const nextSlide = () => {
        setDirection(1);
        setCurrent((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setDirection(-1);
        setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
    };

    const slideVariants = {
        enter: (direction) => ({
            x: direction > 0 ? 100 : -100,
            opacity: 0,
            position: "absolute",
        }),
        center: {
            x: 0,
            opacity: 1,
            position: "absolute",
        },
        exit: (direction) => ({
            x: direction < 0 ? 100 : -100,
            opacity: 0,
            position: "absolute",
        }),
    };

    return (
        <div className='overflow-hidden'>
            <div className="relative overflow-hidden">
                {/* Background Image */}
                <img
                    src={analyticbg}
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

            <main className="min-h-screen bg-white text-gray-900 flex flex-col items-center justify-center px-4 lg:px-[200px] 4xl:px-[400px] py-20">
                {/* Header */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start mb-20">
                    <h1 className="text-4xl font-bold tracking-tight">Our Services</h1>
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

                {/* Slider */}
                <div className="w-full max-w-7xl relative overflow-hidden">
                    <div className="relative min-h-[400px]">
                        <AnimatePresence initial={false} custom={direction} mode="popLayout">
                            <motion.div
                                key={slides[current].id}
                                custom={direction}
                                variants={slideVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{ duration: 0.6, ease: "easeInOut" }}
                                className="absolute inset-0 grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
                            >
                                {/* Left: Image */}
                                <div className="relative rounded-2xl overflow-hidden shadow-lg">
                                    <img
                                        src={slides[current].image}
                                        alt={slides[current].title}
                                        className="w-full h-[400px] object-cover rounded-2xl"
                                    />
                                </div>

                                {/* Right: Text */}
                                <div>
                                    <p className="text-sm text-gray-400 mb-2 uppercase tracking-wide">
                                        {slides[current].category}
                                    </p>
                                    <h2 className="text-2xl md:text-3xl font-semibold mb-3">
                                        {slides[current].title}
                                    </h2>
                                    <p className="text-gray-600 mb-6 leading-relaxed">
                                        {slides[current].description}
                                    </p>

                                    <p className="text-sm text-gray-400 mb-3 uppercase tracking-wide">
                                        Technology
                                    </p>
                                    <div className="flex items-center gap-6 text-red-600 text-3xl">
                                        {slides[current].tech.map((Icon, i) => (
                                            <Icon key={i} />
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Navigation */}
                    <div className="flex gap-6 mt-16 justify-center">
                        <button
                            onClick={prevSlide}
                            className="w-10 h-10 flex items-center justify-center border border-red-500 text-red-500 rounded-full hover:bg-red-500 hover:text-white transition-all duration-300"
                        >
                            <FaArrowLeft />
                        </button>
                        <button
                            onClick={nextSlide}
                            className="w-10 h-10 flex items-center justify-center border border-red-500 text-red-500 rounded-full hover:bg-red-500 hover:text-white transition-all duration-300"
                        >
                            <FaArrowRight />
                        </button>
                    </div>
                </div>
            </main>

            <section className="min-h-screen bg-gray-50 px-4 lg:px-[210px] 4xl:px-[400px] py-20">
                {/* Header */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-16">
                    <h1 className="text-4xl font-bold tracking-tight">Our Portfolio</h1>
                    <p className="lg:col-span-2 text-gray-600 text-lg leading-relaxed">
                        From our roots as a dynamic social media agency, we've evolved into
                        West Africa's emerging digital powerhouse. Founded on the principle
                        that authentic connections drive business growth, we combine deep
                        local insights with global digital excellence to deliver results that
                        matter.
                    </p>
                </div>

                {/* Portfolio Grid */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 lg:gap-10">
                    {projects.map((project) => (
                        <motion.div
                            key={project.id}
                            onClick={() => setActive(project.id)}
                            animate={{
                                flex: active === project.id ? 1.6 : 1,
                                opacity: active === project.id ? 1 : 0.8,
                                scale: active === project.id ? 1.02 : 1,
                            }}
                            transition={{ duration: 0.6, ease: "easeInOut" }}
                            className={`relative rounded-2xl overflow-hidden shadow-lg cursor-pointer transition-all duration-500 ${active === project.id ? "h-[320px]" : "h-[260px]"
                                } w-full`}
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className={`w-full h-full object-cover rounded-2xl transition-all duration-700 ${active === project.id ? "brightness-90" : "brightness-100"
                                    }`}
                            />
                            {active === project.id && (
                                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                                    <h2 className="text-white text-lg font-semibold">
                                        {project.title}
                                    </h2>
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>

    )
}

export default DataAnalytics