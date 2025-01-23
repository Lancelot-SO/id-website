/* eslint-disable react/no-unescaped-entities */
import servicebg from "../assets/service/servicebg.png"
import service1 from "../assets/service/service1.png"
import "./Services.css"



const Services = () => {
    // window.scrollTo({
    //     top: 0,
    //     behavior: 'smooth',
    // });
    return (
        <div>
            <div className="relative">
                <img
                    src={servicebg}
                    alt="about"
                    className="object-cover w-full lg:h-full h-[700px]"
                    loading="lazy"
                />
                <div className="absolute top-[325px] left-[15px] w-full lg:h-[72px] flex flex-col gap-2 lg:top-[50%] lg:left-[30%] lg:w-[558px]">
                    <h2 className="text-[48px] font-bold text-white text-center">
                        Our Services
                    </h2>

                </div>
            </div>
            <div className="w-full h-auto">
                <section>
                    <div className="w-full h-[300px] flex pl-[200px] items-center">
                        <div className="relative w-[1105px] h-[240px]">
                            <img
                                src={service1}
                                alt="about"
                                className="object-cover w-[600px] h-full"
                                loading="lazy"
                            />
                            <a href="/strategy" className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-[#F4F4F4] hover:bg-slate-200 shadow-lg py-1 px-8 w-[650px] h-[220px]">
                                <h2 className="text-2xl font-bold mb-2">Digital Strategy & Consulting</h2>
                                <p className="text-gray-600 text-base mb-2">
                                    In today’s digital-first world, strategy is more than a plan; it’s your compass to success. We design roadmaps that turn bold ideas into measurable results.                                 </p>
                                <ul className="list-disc pl-5 text-gray-800">
                                    <li className="font-semibold">Business Analysis</li>
                                    <li className="font-semibold">Digital Channel Optimization</li>
                                    <li className="font-semibold">Competitive Benchmarking</li>
                                    <li className="font-semibold">Growth Strategy</li>
                                </ul>
                                <span className="hover:underline text-[#ED0707] flex justify-end">Read More</span>
                            </a>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="w-full h-[300px] flex pl-[200px] items-center animate">
                        <div className="relative w-[1105px] h-[240px]">
                            {/* Card Section */}
                            <a
                                href="/digital"
                                className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-[#F4F4F4] hover:bg-slate-200 shadow-lg p-6 w-[650px] h-[220px] z-10 text-right"
                                style={{ marginRight: "-100px" }} /* Overlap onto the image */
                            >
                                <h2 className="text-2xl font-bold mb-2">Creative &  Experience Design</h2>
                                <p className="text-gray-600 text-base mb-2">
                                    Transform ideas into experiences with the art of storytelling and design science.                                 </p>
                                <ul className="pl-5 list-disc list-inside text-gray-800">
                                    <li className="font-semibold list-disc">Brand Strategy:</li>
                                    <li className="font-semibold">UX/UI Design</li>
                                    <li className="font-semibold">Data-Driven Insights</li>
                                    <li className="font-semibold">Creative Campaign</li>
                                </ul>

                                <span className="hover:underline text-[#ED0707] flex justify-start">Read More</span>

                            </a>

                            {/* Image Section */}
                            <img
                                src={service1}
                                alt="about"
                                className="object-cover w-[600px] h-full absolute top-0 right-0"
                                loading="lazy"
                            />
                        </div>
                    </div>
                </section>

                <section>
                    <div className="w-full h-[300px] flex pl-[200px] items-center animate">
                        <div className="relative w-[1105px] h-[240px]">
                            <img
                                src={service1}
                                alt="about"
                                className="object-cover w-[600px] h-full"
                                loading="lazy"
                            />
                            <a href="/strategy" className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-[#F4F4F4] hover:bg-slate-200 shadow-lg p-8 w-[650px] h-[220px]">
                                <h2 className="text-2xl font-bold mb-2">Tech & Innovation</h2>
                                <p className="text-gray-600 text-base mb-4">
                                    Transform your business with data-driven digital
                                </p>
                                <ul className="list-disc pl-5 text-gray-800">
                                    <li className="font-semibold">Web Development & App Development</li>
                                    <li className="font-semibold">Digital Products</li>
                                    <li className="font-semibold">Innovation Solutions</li>
                                </ul>
                                <span className="hover:underline text-[#ED0707] flex justify-end">Read More</span>
                            </a>
                        </div>
                    </div>
                </section>


                <section>
                    <div className="w-full h-[300px] flex pl-[200px] items-center animate">
                        <div className="relative w-[1105px] h-[240px]">
                            {/* Card Section */}
                            <a
                                href="/advert"
                                className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-[#F4F4F4] hover:bg-slate-200 shadow-lg p-8 w-[650px] h-[220px] z-10 text-right"
                                style={{ marginRight: "-100px" }} /* Overlap onto the image */
                            >
                                <h2 className="text-2xl font-bold mb-2">Marketing & Performance</h2>
                                <p className="text-gray-600 text-base mb-4">
                                    Drive results that matter with data-driven strategies and creative campaigns that connect your brand with the right audience for maximum impact.                                </p>
                                <ul className="pl-5 list-disc list-inside text-gray-800">
                                    <li className="font-semibold list-disc">Performance Marketing</li>
                                    <li className="font-semibold">Social Media</li>
                                    <li className="font-semibold">Content Strategy</li>
                                </ul>

                                <span className="hover:underline text-[#ED0707] flex justify-start">Read More</span>

                            </a>

                            {/* Image Section */}
                            <img
                                src={service1}
                                alt="about"
                                className="object-cover w-[600px] h-full absolute top-0 right-0"
                                loading="lazy"
                            />
                        </div>
                    </div>
                </section>
            </div>


        </div>
    )
}

export default Services