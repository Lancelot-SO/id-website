// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Port1 from "../../../assets/service/p1.png";

const images = [
    { id: 1, src: Port1, title: "Project 1" },
    {
        id: 2,
        src: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=800&q=80",
        title: "Project 2",
    },
    {
        id: 3,
        src: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80",
        title: "Project 3",
    },
    {
        id: 4,
        src: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=800&q=80",
        title: "Project 4",
    },
    {
        id: 5,
        src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
        title: "Project 5",
    },
];

const CreativePortfolio = () => {
    const [activeIndex, setActiveIndex] = useState(2);
    const [isMobile, setIsMobile] = useState(false);

    // Detect mobile screens
    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        handleResize(); // initial check
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const nextSlide = () => setActiveIndex((prev) => (prev + 1) % images.length);
    const prevSlide = () =>
        setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));

    const getImageStyle = (index) => {
        const diff = Math.abs(index - activeIndex);

        let size = "w-24 h-36 sm:w-32 sm:h-48 md:w-40 md:h-56";
        let opacity = "opacity-50";
        let zIndex = "z-10";

        if (diff === 1) {
            size = "w-36 h-52 sm:w-44 sm:h-64 md:w-52 md:h-72";
            opacity = "opacity-80";
            zIndex = "z-20";
        }

        if (diff === 0) {
            size = "w-52 h-72 sm:w-64 sm:h-80 md:w-72 md:h-96";
            opacity = "opacity-100";
            zIndex = "z-30";
        }

        return `${size} ${opacity} ${zIndex}`;
    };

    return (
        <section className="bg-red-50 py-16 px-4 sm:px-8 md:px-12 lg:px-[200px] xl:px-[250px] overflow-hidden">
            {/* Header */}
            <div className="max-w-7xl mx-auto text-center md:text-left mb-10 md:mb-16 flex flex-col md:flex-row justify-between items-center md:items-start gap-6">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                    Our Portfolio
                </h2>
                <p className="text-gray-600 text-sm sm:text-base max-w-2xl leading-relaxed">
                    From our roots as a dynamic social media agency, we’ve evolved into
                    West Africa’s emerging digital powerhouse. Founded on the principle
                    that authentic connections drive business growth, we combine deep
                    local insights with global digital excellence to deliver results that matter.
                </p>
            </div>

            {/* Image Gallery */}
            <div className="relative flex justify-center items-center mt-6 md:mt-10">
                {/* Left Arrow (mobile only) */}
                <button
                    onClick={prevSlide}
                    className="absolute left-2 sm:left-4 z-40 p-2 bg-white/80 rounded-full shadow-md hover:bg-white transition md:hidden"
                >
                    <ChevronLeft size={22} />
                </button>

                {/* Gallery Container */}
                {isMobile ? (
                    // 🌀 Mobile version: motion slides
                    <motion.div
                        className="flex items-center justify-center gap-3 sm:gap-4 transition-all duration-700 ease-in-out"
                        animate={{ x: `calc(50% - ${activeIndex * 60}%)` }}
                        transition={{ type: "spring", stiffness: 80, damping: 15 }}
                    >
                        {images.map((image, index) => (
                            <motion.div
                                key={image.id}
                                className={`relative rounded-xl sm:rounded-2xl overflow-hidden shadow-lg cursor-pointer transition-all duration-700 ease-in-out ${getImageStyle(
                                    index
                                )}`}
                                onClick={() => setActiveIndex(index)}
                            >
                                <img
                                    src={image.src}
                                    alt={image.title}
                                    className="w-full h-full object-cover rounded-xl sm:rounded-2xl"
                                />
                                {index === activeIndex && (
                                    <div className="absolute bottom-0 left-0 right-0 text-white text-center text-sm sm:text-lg font-medium bg-black/40 py-2 rounded-b-xl sm:rounded-b-2xl">
                                        {image.title}
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </motion.div>
                ) : (
                    // 💻 Desktop version: static centered layout
                    <div className="flex items-center justify-center gap-6 transition-all duration-700">
                        {images.map((image, index) => (
                            <motion.div
                                key={image.id}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                                className={`relative rounded-2xl overflow-hidden shadow-lg cursor-pointer transition-all duration-700 ease-in-out ${getImageStyle(
                                    index
                                )}`}
                                onClick={() => setActiveIndex(index)}
                            >
                                <img
                                    src={image.src}
                                    alt={image.title}
                                    className="w-full h-full object-cover rounded-2xl"
                                />
                                {index === activeIndex && (
                                    <div className="absolute bottom-0 left-0 right-0 text-white text-center text-lg font-medium bg-black/40 py-2 rounded-b-2xl">
                                        {image.title}
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                )}

                {/* Right Arrow (mobile only) */}
                <button
                    onClick={nextSlide}
                    className="absolute right-2 sm:right-4 z-40 p-2 bg-white/80 rounded-full shadow-md hover:bg-white transition md:hidden"
                >
                    <ChevronRight size={22} />
                </button>
            </div>
        </section>
    );
};

export default CreativePortfolio;
