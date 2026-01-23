/* eslint-disable react/no-unescaped-entities */
import servicesbg from "../../assets/service/servicesbg.png"
// import service1 from "../assets/service/digital1.jpg"
// import service2 from "../assets/service/creative.jpg"
// import service3 from "../assets/service/tech.jpg"
// import service4 from "../assets/service/market.jpg"

import { CircleCheckBig } from "lucide-react"



const DigitalStrategy = () => {
    // window.scrollTo({
    //     top: 0,
    //     behavior: 'smooth',
    // });
    return (
        <div className="overflow-hidden">
            <div className="relative overflow-hidden">
                {/* Background Image */}
                <img
                    src={servicesbg}
                    alt="services background"
                    className="object-cover w-full lg:h-[80vh] h-[500px] brightness-[0.45]"
                    loading="lazy"
                />


                {/* Text Content - middle left */}
                <div className="absolute inset-0 flex flex-col justify-center px-6 sm:px-12 md:px-[100px] lg:px-[200px] 4xl:pl-[400px] text-left">
                    <div className="max-w-3xl">
                        <h1 className="text-white font-bold text-[32px] sm:text-[42px] lg:text-[54px] leading-tight drop-shadow-lg">
                            Crafting Digital Excellence for
                            <br />
                            Africa’s Ambitious Brand
                        </h1>
                        <p className="text-gray-200 mt-4 text-[14px] sm:text-[16px] lg:text-[18px] font-light tracking-wide">
                            Crafting Digital Excellence for Africa’s Ambitious Brand
                        </p>
                    </div>
                </div>
            </div>

            <div className="min-h-screen bg-white md:p-12 lg:p-16 py-8">
                <div className="px-4 lg:px-[150px] 4xl:px-[400px]">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {/* Left Section */}
                            <div className="flex flex-col">
                                <h1 className="text-4xl md:text-5xl font-bold mb-16 text-gray-900">
                                    Our Services
                                </h1>

                                {/* Stats Card */}
                                <div className="border-2 border-gray-900 rounded-3xl p-8 md:p-12 flex-1 flex flex-col justify-center">
                                    <h2 className="text-5xl md:text-6xl font-medium mb-4 text-gray-900 leading-tight">
                                        230 Projects
                                        <br />
                                        worked on
                                    </h2>
                                    <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                                        Create memorable digital experience that drive results Create memorable digital experience that drive results.
                                        Create memorable digital experience that drive results..
                                    </p>
                                </div>
                            </div>

                            {/* Right Section */}
                            <div>
                                {/* Intro Text */}
                                <p className="text-gray-600 leading-relaxed mb-12 text-sm md:text-base">
                                    From our roots as a dynamic social media agency, we've evolved
                                    into West Africa's emerging digital powerhouse. Founded on the
                                    principle that authentic connections drive business growth, we
                                    combine deep local insights with global digital excellence to
                                    deliver results that matter.
                                </p>

                                {/* Service Cards */}
                                <div className="space-y-6">
                                    {/* Digital Transformation */}
                                    <div className="bg-gray-100 rounded-2xl p-4 border-2 border-transparent hover:border-[#ED0707] transition-all duration-300 group cursor-pointer">
                                        <div className="flex flex-col lg:flex-row items-start gap-4">
                                            {/* Title Pill */}
                                            <div className="flex items-center gap-2 flex-shrink-0 px-4 py-1.5 rounded-full text-sm bg-transparent text-gray-900 font-semibold whitespace-nowrap transition-all duration-300 group-hover:bg-[#ED0707] group-hover:text-white bg-white">
                                                <span>Digital transformation</span>
                                                <CircleCheckBig className="w-5 h-5 flex-shrink-0 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" />
                                            </div>
                                            {/* Description */}
                                            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                                                Create memorable digital experiences that drive results.
                                                Create memorable digital experiences that drive results.
                                                Create memorable digital experiences that drive results.
                                            </p>
                                        </div>
                                    </div>

                                    {/* Market Insight */}
                                    <div className="bg-gray-100 rounded-2xl p-4 border-2 border-transparent hover:border-[#ED0707] transition-all duration-300 group cursor-pointer">
                                        <div className="flex flex-col lg:flex-row items-start gap-4">
                                            <div className="flex items-center gap-2 flex-shrink-0 px-4 py-1.5 rounded-full text-sm bg-transparent text-gray-900 font-semibold whitespace-nowrap transition-all duration-300 group-hover:bg-[#ED0707] group-hover:text-white bg-white">
                                                <span>Market Insight</span>
                                                <CircleCheckBig className="w-5 h-5 flex-shrink-0 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" />
                                            </div>
                                            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                                                Create memorable digital experiences that drive results.
                                                Create memorable digital experiences that drive results.
                                                Create memorable digital experiences that drive results.
                                            </p>
                                        </div>
                                    </div>

                                    {/* Performance Optimization */}
                                    <div className="bg-gray-100 rounded-2xl p-4  border-2 border-transparent hover:border-[#ED0707] transition-all duration-300 group cursor-pointer">
                                        <div className="flex flex-col lg:flex-row items-start gap-4">
                                            <div className="flex items-center gap-2 flex-shrink-0 px-4 py-1.5 rounded-full text-sm bg-transparent text-gray-900 font-semibold whitespace-nowrap transition-all duration-300 group-hover:bg-[#ED0707] group-hover:text-white bg-white">
                                                <span>Performance optimization</span>
                                                <CircleCheckBig className="w-5 h-5 flex-shrink-0 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" />
                                            </div>
                                            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                                                Create memorable digital experiences that drive results.
                                                Create memorable digital experiences that drive results.
                                                Create memorable digital experiences that drive results.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End Right Section */}
                        </div>
                    </div>
                </div>
            </div>

            {/* grid */}
            <section className="bg-[#F9F9F9] py-16 px-6 md:px-[100px] lg:px-[220px] 4xl:px-[400px]">
                <div className="max-w-7xl mx-auto">
                    {/* Header Row */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 items-start gap-8 mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                            Our Portfolio Reels
                        </h2>
                        <p className="text-gray-600 leading-relaxed text-sm md:text-base max-w-xl">
                            From our roots as a dynamic social media agency, we've evolved into West
                            Africa's emerging digital powerhouse. Founded on the principle that
                            authentic connections drive business growth, we combine deep local
                            insights with global digital excellence to deliver results that matter.
                        </p>
                    </div>

                    {/* Portfolio Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {[
                            {
                                src: "https://images.unsplash.com/photo-1526045612212-70caf35c14df?auto=format&fit=crop&w=900&q=80",
                                title: "Project 1",
                            },
                            {
                                src: "https://images.unsplash.com/photo-1526045612212-70caf35c14df?auto=format&fit=crop&w=900&q=80",
                                title: "Project 2",
                            },
                            {
                                src: "https://images.unsplash.com/photo-1504208434309-cb69f4fe52b0?auto=format&fit=crop&w=900&q=80",
                                title: "Project 3",
                            },
                            {
                                src: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=900&q=80",
                                title: "Project 4",
                            },
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="relative rounded-2xl overflow-hidden h-[250px] md:h-[300px] group"
                            >
                                {/* Image */}
                                <img
                                    src={item.src}
                                    alt={item.title}
                                    className="w-full h-full object-cover transform transition-transform duration-700 ease-in-out group-hover:scale-110"
                                    loading="lazy"
                                />

                                {/* Sliding Red Overlay */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="absolute bottom-0 left-0 right-0 h-full translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-in-out bg-gradient-to-t from-[#ED0707]/90 via-[#ED0707]/60 to-transparent flex items-center justify-center">
                                        <span className="text-white text-xl md:text-2xl font-semibold">
                                            {item.title}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    )
}

export default DigitalStrategy