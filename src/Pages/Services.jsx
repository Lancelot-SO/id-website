/* eslint-disable react/no-unescaped-entities */
import servicebg from "../assets/service/servicebg.png"
import service1 from "../assets/service/digital1.jpg"
import service2 from "../assets/service/creative.jpg"
import service3 from "../assets/service/tech.jpg"
import service4 from "../assets/service/market.jpg"



import "./Services.css"



const Services = () => {
    // window.scrollTo({
    //     top: 0,
    //     behavior: 'smooth',
    // });
    return (
        <div className="">
            <div className="relative overflow-hidden">
                <img
                    src={servicebg}
                    alt="about"
                    className="object-cover w-full lg:h-full h-[500px]"
                    loading="lazy"
                />
                <div className="absolute top-[325px] left-[15px] w-full lg:h-[72px] flex flex-col gap-2 lg:top-[50%] lg:left-[30%] lg:w-[558px]">
                    <h2 className="text-[48px] font-bold text-white text-center">
                        Our Services
                    </h2>

                </div>
            </div>
            <div className="w-full h-auto">
                <section className="overflow-hidden">
                    <div className="w-full lg:h-[300px] flex lg:flex-row flex-col lg:pl-[200px] 4xl:pl-[400px] items-center overflow-hidden">
                        <div className="relative lg:w-[1105px] lg:h-[240px] h-[500px]">
                            <img
                                src={service1}
                                alt="about"
                                className="object-cover lg:w-[600px] w-full h-[250px]"
                                loading="lazy"
                            />
                            <a href="/strategy" className="absolute lg:top-1/2 top-[60%] ml-2 lg:right-0 transform -translate-y-1/2 bg-[#F4F4F4] hover:bg-slate-200 shadow-lg border-b-2 border-gray-300 py-1 px-8 lg:w-[650px] w-[350px] lg:h-[220px]">
                                <h2 className="lg:text-2xl text-[20px] font-bold mb-2">Digital Strategy & Consulting</h2>
                                <p className="text-gray-600 lg:text-base text-[14px] mb-2">
                                    In today’s digital-first world, strategy is more than a plan; it’s your compass to success. We design roadmaps that turn bold ideas into measurable results.
                                </p>
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
                    <div className="w-full lg:h-[300px] flex lg:flex-row flex-col-reverse lg:pl-[200px] 4xl:pl-[400px] lg:items-center animate">
                        <div className="relative lg:w-[1105px] lg:h-[240px] h-[500px]">
                            {/* Card Section */}
                            <a
                                href="/digital"
                                className="absolute lg:top-1/2 top-[63%] lg:left-0 left-[7%] transform -translate-y-1/2 bg-[#F4F4F4] hover:bg-slate-200 shadow-lg p-6 lg:w-[650px] w-[350px] lg:h-[220px] z-10 lg:text-right"
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
                                src={service2}
                                alt="about"
                                className="object-cover lg:w-[600px] lg:h-full h-[250px] absolute top-0 right-0"
                                loading="lazy"
                            />
                        </div>
                    </div>
                </section>

                <section>
                    <div className="w-full lg:h-[300px] flex lg:flex-row flex-col lg:pl-[200px] 4xl:pl-[400px] items-center animate">
                        <div className="relative lg:w-[1105px] lg:h-[240px] h-[500px]">
                            <img
                                src={service3}
                                alt="about"
                                className="object-cover lg:w-[600px] w-full h-[250px]"
                                loading="lazy"
                            />
                            <a href="/media" className="absolute lg:top-1/2 top-[60%] ml-6 lg:right-0 transform -translate-y-1/2 bg-[#F4F4F4] hover:bg-slate-200 shadow-lg border-b-2 border-gray-300 py-1 px-8 lg:w-[650px] w-[350px] lg:h-[220px]">
                                <h2 className="lg:text-2xl text-[20px] font-bold mb-2">Tech & Innovation</h2>
                                <p className="text-gray-600 lg:text-base text-[14px] mb-2">
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
                    <div className="w-full lg:h-[300px] flex lg:flex-row flex-col-reverse lg:pl-[200px] 4xl:pl-[400px] lg:items-center animate">
                        <div className="relative lg:w-[1105px] lg:h-[240px] h-[500px]">
                            {/* Card Section */}
                            <a
                                href="/digital"
                                className="absolute lg:top-1/2 top-[63%] lg:left-0 left-[7%] transform -translate-y-1/2 bg-[#F4F4F4] hover:bg-slate-200 shadow-lg p-6 lg:w-[650px] w-[350px] lg:h-[220px] z-10 lg:text-right"
                                style={{ marginRight: "-100px" }} /* Overlap onto the image */
                            >
                                <h2 className="text-2xl font-bold mb-2">Marketing & Performance</h2>
                                <p className="text-gray-600 text-base mb-2">
                                    Drive results that matter with data-driven strategies and creative campaigns that connect your brand with the right audience for maximum impact.
                                </p>
                                <ul className="pl-5 list-disc list-inside text-gray-800">
                                    <li className="font-semibold list-disc">Performance Marketing</li>
                                    <li className="font-semibold">Social Media</li>
                                    <li className="font-semibold">Content Strategy</li>
                                </ul>

                                <span className="hover:underline text-[#ED0707] flex justify-start">Read More</span>

                            </a>

                            {/* Image Section */}
                            <img
                                src={service4}
                                alt="about"
                                className="object-cover lg:w-[600px] lg:h-full h-[250px] absolute top-0 right-0"
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