/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import "./Slider.css";
import img1 from "../assets/slider/img1.png";
import img2 from "../assets/slider/img2.png";
import img3 from "../assets/slider/img3.png";
import img4 from "../assets/slider/img4.png";
import img5 from "../assets/slider/img5.png";

const images = [img1, img2, img3, img4, img5];

const Slider = () => {
    const [carouselItems, setCarouselItems] = useState(images);

    // Update the classes based on the carousel's current state
    const updateGallery = () => {
        const updatedClasses = carouselItems.map((item, index) => {
            if (index === 0) return 'gallery-item-1';
            if (index === 1) return 'gallery-item-2';
            if (index === 2) return 'gallery-item-3';
            if (index === 3) return 'gallery-item-4';
            if (index === 4) return 'gallery-item-5';
            return '';
        });
        return updatedClasses;
    };

    const [itemClasses, setItemClasses] = useState(updateGallery());

    const setCurrentState = (direction) => {
        if (direction === 'previous') {
            const newArray = [carouselItems[carouselItems.length - 1], ...carouselItems.slice(0, -1)];
            setCarouselItems(newArray);
        } else {
            const newArray = [...carouselItems.slice(1), carouselItems[0]];
            setCarouselItems(newArray);
        }
    };

    useEffect(() => {
        setItemClasses(updateGallery());
    }, [carouselItems]);

    return (
        <section>
            <div className="w-full">
                <div className="w-full lg:h-[630px] h-[430px] flex flex-col bg-[#F7F7F8]">
                    <div className="w-full sm:w-[480px] h-[130px] lg:ml-[200px] pl-0 py-4 px-6">
                        <h3 className="text-[25px] font-bold leading-[64px]">Our Portfolio</h3>
                        <span className="text-[#141415] text-[16px] font-normal leading-[21px]">
                            Providing transformational solutions for Africa's unique challenges
                        </span>
                    </div>
                    <div className="w-full h-[470px] items-center justify-center lg:my-0 my-28">
                        <div className="gallery-container">
                            {carouselItems.map((image, index) => (
                                <img
                                    key={index}
                                    src={image}
                                    alt="slider"
                                    className={`gallery-item ${itemClasses[index]}`}
                                    data-index={index + 1}
                                />
                            ))}
                        </div>
                        <div className="gallery-controls lg:mt-0 mt-24">
                            <button className="gallery-controls-previous" onClick={() => setCurrentState('previous')}>
                                Previous
                            </button>
                            <button className="gallery-controls-next" onClick={() => setCurrentState('next')}>
                                Next
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default Slider;
