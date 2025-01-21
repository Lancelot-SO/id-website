/* eslint-disable react/no-unescaped-entities */
import servicebg from "../assets/service/servicebg.png"
import service1 from "../assets/service/service1.png"


import banner from "../assets/banner.png"



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

            <section>
                <div className="w-full h-[300px] flex pl-[200px] items-center">
                    <div className="relative w-[1105px] h-[240px]">
                        <img
                            src={service1}
                            alt="about"
                            className="object-cover w-[600px] h-full"
                            loading="lazy"
                        />
                        <a href="/strategy" className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-[#F4F4F4] hover:bg-slate-200 shadow-lg p-8 w-[650px] h-[220px]">
                            <h2 className="text-2xl font-bold mb-2">Digital Strategy</h2>
                            <p className="text-gray-600 text-base mb-4">
                                Transform your business with data-driven digital
                            </p>
                            <ul className="list-disc pl-5 text-gray-800">
                                <li className="font-semibold">Digital transformation</li>
                                <li className="font-semibold">Market insights</li>
                                <li className="font-semibold">Performance optimization</li>
                            </ul>
                        </a>
                    </div>
                </div>
            </section>

            <section>
                <div className="w-full h-[300px] flex pl-[200px] items-center">
                    <div className="relative w-[1105px] h-[240px]">
                        {/* Card Section */}
                        <a
                            href="/strategy"
                            className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-[#F4F4F4] hover:bg-slate-200 shadow-lg p-8 w-[650px] h-[220px] z-10 text-right"
                            style={{ marginRight: "-100px" }} /* Overlap onto the image */
                        >
                            <h2 className="text-2xl font-bold mb-2">Creative &  Experience Design</h2>
                            <p className="text-gray-600 text-base mb-4">
                                Create memorable digital experience that drive results.
                            </p>
                            <ul className="pl-5 list-disc list-inside text-gray-800">
                                <li className="font-semibold list-disc">Digital transformation</li>
                                <li className="font-semibold">Market insights</li>
                                <li className="font-semibold">Performance optimization</li>
                            </ul>
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
                <div className="w-full h-[300px] flex pl-[200px] items-center">
                    <div className="relative w-[1105px] h-[240px]">
                        <img
                            src={service1}
                            alt="about"
                            className="object-cover w-[600px] h-full"
                            loading="lazy"
                        />
                        <a href="/strategy" className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-[#F4F4F4] hover:bg-slate-200 shadow-lg p-8 w-[650px] h-[220px]">
                            <h2 className="text-2xl font-bold mb-2">Technology & Innovation</h2>
                            <p className="text-gray-600 text-base mb-4">
                                Leverage cutting-edge technology for business impact
                            </p>
                            <ul className="list-disc pl-5 text-gray-800">
                                <li className="font-semibold">Digital transformation</li>
                                <li className="font-semibold">Market insights</li>
                                <li className="font-semibold">Performance optimization</li>
                            </ul>
                        </a>
                    </div>
                </div>
            </section>

            <section>
                <div className="w-full h-[300px] flex pl-[200px] items-center">
                    <div className="relative w-[1105px] h-[240px]">
                        {/* Card Section */}
                        <a
                            href="/strategy"
                            className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-[#F4F4F4] hover:bg-slate-200 shadow-lg p-8 w-[650px] h-[220px] z-10 text-right"
                            style={{ marginRight: "-100px" }} /* Overlap onto the image */
                        >
                            <h2 className="text-2xl font-bold mb-2">Creative &  Experience Design</h2>
                            <p className="text-gray-600 text-base mb-4">
                                Create memorable digital experience that drive results.
                            </p>
                            <ul className="pl-5 list-disc list-inside text-gray-800">
                                <li className="font-semibold list-disc">Digital transformation</li>
                                <li className="font-semibold">Market insights</li>
                                <li className="font-semibold">Performance optimization</li>
                            </ul>
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

            <section className="w-full h-[300px] bg-red-500 flex flex-col items-center justify-center text-white">
                <h2 className="text-2xl md:text-4xl font-light mb-4">
                    Ready to Transform Your Digital Presence?
                </h2>
                <p className="text-base font-light md:text-lg mb-6">
                    Let's create something extraordinary together
                </p>
                <a href="/contact" className="px-6 py-3 text-sm md:text-base bg-white hover:bg-slate-200 text-red-500 font-semibold rounded-full shadow hover:bg-gray-100 transition">
                    Contact Us Today
                </a>
            </section>


            <section>
                <img src={banner} alt="banner" className="object-cover w-full h-[400px]" loading="lazy" />
            </section>
        </div>
    )
}

export default Services