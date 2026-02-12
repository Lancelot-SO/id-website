/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import pattern from "../assets/pattern.png";
import personImage from "../assets/slider/coro.png";
import dosh from "../assets/slider/img2.png";
import Mtn from "../assets/onlineadvert/mtn.png"

const TeamSlider = () => {
    const testimonials = [
        {
            id: 1,
            name: "W.N. Kwashie jnr",
            title: "Digital Marketing Manager",
            company: "MTN Ghana",
            image: Mtn,
            testimonial: "Interactive Digital has been an integral part of our online success at MTN Ghana for the past 5 years. Their understanding of the digital landscape in Ghana, creativity and top notch account management has enabled them to deliver exceptional results for our  social media engagement and digital marketing efforts, and I would highly recommend them to any business seeking to enhance their digital presence."
        },
        {
            id: 2,
            name: "Coronation Insurance",
            title: "Lead Developer",
            company: "Coronation Insurance",
            image: personImage,
            testimonial: `Working with Interactive Digital was an exceptional experience. Their team showcased expertise, creativity, and professionalism from the start, turning our vision into a stunning digital presence. They excelled in attention to detail, timely delivery, and proactive problem-solving, making the process seamless and enjoyable. I highly recommend them for their skill and reliability. Their dedication to excellence and customer satisfaction is evident in all they do.`
        },
        {
            id: 3,
            name: "Dosh Revolution",
            title: "Product Manager",
            company: "DOSH Revolution",
            image: dosh,
            testimonial: "Interactive Digital has been an integral part of our online success at DOSH for the past 3 years. Their understanding of the digital landscape in Ghana, creativity and top notch account management has enabled them to deliver exceptional results for our  social media engagement and digital marketing efforts, and I would highly recommend them to any business seeking to enhance their digital presence."
        }
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    // Function to handle next slide
    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    };

    // Function to change slide when clicking a dot
    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    // Current testimonial data
    const { name, title, company, image, testimonial } = testimonials[currentSlide];

    return (
        <section>
            <div className="relative w-full overflow-hidden">
                {/* Image positioned in the top-right corner */}
                <div className="hidden lg:flex absolute top-0 right-0">
                    <img src={pattern} alt="pattern" className="object-cover" loading="lazy" />
                </div>

                {/* Content section with padding-left applied only here */}
                <div className="flex flex-col lg:pl-[200px] px-4 bg-[#F7F7F8]">
                    <div className="w-full py-4">
                        <div>
                            <h3 className="text-[25px] font-semibold">
                                Don't take our word for it. Ask them.
                            </h3>
                        </div>
                    </div>

                    {/* Slider Content */}
                    <div className="flex flex-col sm:flex-row lg:w-[1100px] lg:h-[450px] items-center overflow-hidden mx-auto">
                        {/* Person Image */}
                        <div className="lg:w-[350px] h-[300px] lg:mr-8 mr-0 mb-4 lg:mb-0">
                            <img src={image} alt={name} className="w-full h-full object-cover rounded-lg shadow-lg" />
                        </div>

                        {/* Testimonial Content */}
                        <div className="flex flex-col justify-center max-w-lg text-left sm:text-left">
                            <h2 className="text-[32px] font-semibold leading-tight text-[#141415]">
                                {name}
                            </h2>
                            <p className="text-[#8A8A8A] mt-1">{title} - {company}</p>
                            <p className="text-[#141415] mt-4 leading-relaxed">
                                {testimonial}
                            </p>

                            {/* Navigation Button */}
                            <button
                                onClick={nextSlide}
                                className="mt-6 w-[100px] h-[40px] bg-red-500 text-white rounded-full font-semibold hover:bg-red-600 transition"
                            >
                                Next
                            </button>
                        </div>
                    </div>

                    {/* Slider Navigation Dots */}
                    <div className="absolute lg:bottom-4 bottom-2 flex justify-center w-full">
                        <div className="flex space-x-2">
                            {testimonials.map((_, index) => (
                                <span
                                    key={index}
                                    onClick={() => goToSlide(index)}
                                    className={`w-3 h-3 rounded-full cursor-pointer transition ${index === currentSlide ? 'bg-red-500' : 'bg-gray-300'}`}
                                ></span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default TeamSlider;
