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
                                <h2 className="lg:text-2xl text-[20px] font-bold mb-2">Brand Development</h2>
                                <p className="text-gray-600 lg:text-base text-[14px] mb-2">
                                    We craft unique, powerful, and future-ready brands
                                </p>
                                <ul className="list-disc pl-5 text-gray-800">
                                    <li className="font-semibold">Brand strategy</li>
                                    <li className="font-semibold">Campaign development</li>
                                    <li className="font-semibold">Social media management</li>
                                    <li className="font-semibold">Content creation</li>
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
                                href="/production"
                                className="absolute lg:top-1/2 top-[63%] lg:left-0 left-[7%] transform -translate-y-1/2 bg-[#F4F4F4] hover:bg-slate-200 shadow-lg p-6 lg:w-[650px] w-[350px] lg:h-[220px] z-10 lg:text-right"
                                style={{ marginRight: "-100px" }} /* Overlap onto the image */
                            >
                                <h2 className="text-2xl font-bold mb-2">Content Production</h2>
                                <p className="text-gray-600 text-base mb-2">
                                    Content production that tells your story, engages your audience, and drives results with creativity and precision                                 </p>
                                <ul className="pl-5 list-disc list-inside text-gray-800">
                                    <li className="font-semibold list-disc">BMotion design</li>
                                    <li className="font-semibold">Video production</li>
                                    <li className="font-semibold">Social content</li>
                                    <li className="font-semibold">Immersive experiences</li>
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
                            <a href="/experience" className="absolute lg:top-1/2 top-[60%] ml-6 lg:right-0 transform -translate-y-1/2 bg-[#F4F4F4] hover:bg-slate-200 shadow-lg border-b-2 border-gray-300 py-1 px-8 lg:w-[650px] w-[350px] lg:h-[220px]">
                                <h2 className="lg:text-2xl text-[20px] font-bold mb-2">Experience Design</h2>
                                <p className="text-gray-600 lg:text-base text-[14px] mb-2">
                                    Building user-centric experiences that merge creativity with functionality
                                </p>
                                <ul className="list-disc pl-5 text-gray-800">
                                    <li className="font-semibold">UI/UX design</li>
                                    <li className="font-semibold">Service design</li>
                                    <li className="font-semibold">Customer journey mapping</li>
                                    <li className="font-semibold">App/platform creation</li>
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
                                href="/creative"
                                className="absolute lg:top-1/2 top-[63%] lg:left-0 left-[7%] transform -translate-y-1/2 bg-[#F4F4F4] hover:bg-slate-200 shadow-lg p-6 lg:w-[650px] w-[350px] lg:h-[220px] z-10 lg:text-right"
                                style={{ marginRight: "-100px" }} /* Overlap onto the image */
                            >
                                <h2 className="text-2xl font-bold mb-2">Creative Technology</h2>
                                <p className="text-gray-600 text-base mb-2">
                                    We leverage the power of innovative tech to bring creative ideas to life and enhance brand experiences
                                </p>
                                <ul className="pl-5 list-disc list-inside text-gray-800">
                                    <li className="font-semibold list-disc">AR/VR solutions</li>
                                    <li className="font-semibold">AI implementation</li>
                                    <li className="font-semibold">Interactive installations</li>
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
                                <h2 className="lg:text-2xl text-[20px] font-bold mb-2">Data and Analytics</h2>
                                <p className="text-gray-600 lg:text-base text-[14px] mb-2">
                                    We harness data and analytics to uncover valuable insights that fuel smart decision-making and growth
                                </p>
                                <ul className="list-disc pl-5 text-gray-800">
                                    <li className="font-semibold">Performance marketing</li>
                                    <li className="font-semibold">Customer insights</li>
                                    <li className="font-semibold">Marketing analytics</li>
                                    <li className="font-semibold">Predictive modeling</li>
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
                                <h2 className="text-2xl font-bold mb-2">Innovation Consulting</h2>
                                <p className="text-gray-600 text-base mb-2">
                                    We help your brand to adapt, disrupt, and lead in a digital-first world
                                </p>
                                <ul className="pl-5 list-disc list-inside text-gray-800">
                                    <li className="font-semibold list-disc">Digital transformation</li>
                                    <li className="font-semibold">Innovation workshops</li>
                                    <li className="font-semibold">Emerging tech integration</li>
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