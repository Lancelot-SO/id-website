/* eslint-disable no-unused-vars */
import React from "react";
import "./CaseStudy.css";
import servicebg from "../assets/service/servicebg.png";
import Malt from "../assets/slider/img1.png";
import Mtn from "../assets/slider/img4.png";
import Dosh from "../assets/slider/img2.png";
import Item1 from "../assets/case/item1.png";
import Item2 from "../assets/case/item2.png";
import Item3 from "../assets/case/item3.png";
import Item4 from "../assets/case/item4.png";
import Item5 from "../assets/case/item5.png";




const CaseStudy = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });



    return (
        <div className="overflow-hidden">
            {/* Header Section */}
            <div className="relative">
                <img src={servicebg} alt="about" className="object-cover w-full h-[400px]" loading="lazy" />
                <div className="absolute top-[245px] left-[15px] w-full lg:h-[72px] flex flex-col gap-2 lg:top-[50%] lg:left-[30%] lg:w-[558px]">
                    <h2 className="lg:text-[48px] text-[30px] font-bold text-white text-center">Our Case Studies</h2>
                </div>
            </div>

            <div className="image-gallery p-6 lg:p-0 ml-4 lg:ml-[200px] 4xl:ml-[400px] lg:mt-10 mt-0">
                <div className="column">
                    <a href="/mtndetail" className="photo">
                        <img src={Mtn} alt="phot" loading="lazy" />
                        <div className="image-overlay">
                            <div className="flex gap-2">
                                <h3>Mtn data base</h3>
                                <span>-</span>
                                <p>Mtn Ghana</p>
                            </div>
                        </div>
                    </a>
                    <div className="photo">
                        <img src={Malt} alt="phot" loading="lazy" />
                        <div className="image-overlay">
                            <div className="flex gap-2">
                                <h3>Mtn data base</h3>
                                <span>-</span>
                                <p>Mtn Ghana</p>
                            </div>
                        </div>
                    </div>
                    <div className="photo">
                        <img src={Dosh} alt="phot" loading="lazy" />
                        <div className="image-overlay">
                            <div className="flex gap-2">
                                <h3>Mtn data base</h3>
                                <span>-</span>
                                <p>Mtn Ghana</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="column">
                    <div className="photo">
                        <img src={Malt} alt="phot" loading="lazy" />
                        <div className="image-overlay">
                            <div className="">
                                <h3>Mtn</h3>
                                <p>Mtn Ghana</p>
                            </div>
                        </div>
                    </div>
                    <div className="photo">
                        <img src={Item2} alt="phot" loading="lazy" />
                        <div className="image-overlay">
                            <div className="flex gap-2">
                                <h3>Mtn data base</h3>
                                <span>-</span>
                                <p>Mtn Ghana</p>
                            </div>                        </div>
                    </div>
                    <div className="photo">
                        <img src={Item3} alt="phot" loading="lazy" />
                        <div className="image-overlay">
                            <div className="flex gap-2">
                                <h3>Mtn data base</h3>
                                <span>-</span>
                                <p>Mtn Ghana</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="column">
                    <div className="photo">
                        <img src={Item4} alt="phot" loading="lazy" />
                        <div className="image-overlay">
                            <div className="flex gap-2">
                                <h3>Mtn data base</h3>
                                <span>-</span>
                                <p>Mtn Ghana</p>
                            </div>
                        </div>
                    </div>
                    <div className="photo">
                        <img src={Item5} alt="phot" loading="lazy" />
                        <div className="image-overlay">
                            <div className="flex gap-2">
                                <h3>Mtn data base</h3>
                                <span>-</span>
                                <p>Mtn Ghana</p>
                            </div>
                        </div>
                    </div>
                    <div className="photo">
                        <img src={Dosh} alt="phot" loading="lazy" />
                        <div className="image-overlay">
                            <div className="flex gap-2">
                                <h3>Mtn data base</h3>
                                <span>-</span>
                                <p>Mtn Ghana</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default CaseStudy;
