/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import pattern from "../assets/pattern.png";
import personImage from "../assets/slider/jay.png";

const TeamSlider = () => {
    const testimonials = [
        {
            id: 1,
            name: "Alex Jerry Sam",
            title: "CEO",
            company: "Mckelite Group",
            image: personImage,
            testimonial: "Eduarix is an ideal location for anybody who wants to learn something new or share what they know with others. Eduarix is a worldwide platform for online learning that helps to connect with one another via knowledge. It comes highly recommended from my side."
        },
        {
            id: 2,
            name: "Sarah Johnson",
            title: "Lead Developer",
            company: "Tech Solutions",
            image: personImage,
            testimonial: "The platform's intuitive interface and comprehensive learning resources have made it an invaluable tool for our team's professional development. Eduarix has significantly improved our learning processes."
        },
        {
            id: 3,
            name: "Michael Chen",
            title: "Product Manager",
            company: "Innovation Hub",
            image: personImage,
            testimonial: "What sets Eduarix apart is its ability to foster meaningful connections between learners and experts across the globe. The knowledge sharing experience is unparalleled and has greatly benefited our organization."
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
                <div className=" absolute top-0 right-0">
                    <img src={pattern} alt="pattern" className="object-cover" loading="lazy" />
                </div>

                {/* Content section with padding-left applied only here */}
                <div className="flex flex-col lg:pl-[200px] pl-4 bg-[#F7F7F8]">
                    <div className="w-[330px] py-4">
                        <div>
                            <h3 className="text-[25px] font-semibold">
                                Don't take our word for it. Ask them.
                            </h3>
                            <span className="text-[#141415] text-[16px] font-normal leading-[21px] mt-2 block">
                                They have the words...
                            </span>
                        </div>
                    </div>

                    {/* Slider Content */}
                    <div className="flex flex-col sm:flex-row max-w-[900px] lg:h-[450px] items-center overflow-hidden mx-auto">
                        {/* Person Image */}
                        <div className="w-[300px] h-[300px] sm:mr-8 mb-4 sm:mb-0">
                            <img src={image} alt={name} className="w-full h-full object-cover rounded-lg shadow-lg" />
                        </div>

                        {/* Testimonial Content */}
                        <div className="flex flex-col justify-center max-w-lg text-center sm:text-left">
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
