import servicebg from "../assets/service/servicebg.png"
import portfolio1 from "../assets/portfolio/portfolio-1.png"
import portfolio4 from "../assets/portfolio/portfolio-4.png"
import portfolio5 from "../assets/portfolio/portfolio-5.png"
import portfolio6 from "../assets/portfolio/portfolio-6.png"

import banner from "../assets/banner.png"


const CaseStudy = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
    return (
        <div>
            <div className="relative">
                <img src={servicebg} alt="about" className="object-cover w-full" loading="lazy" />
                <div className=" absolute top-[285px] left-[195px] w-[858px] h-[72px] flex flex-col gap-2">
                    <h2 className="text-3xl font-bold text-white">Our Case Study</h2>
                    <p className="text-white text-opacity-50">
                        We are a leading Ghanaian insurance company offering a diverse range of products and services covering general and special risk businesses. We are licensed to underwrite all classes of non-life insurance, such as motor insurance, marine insurance, fire and special perils, goods-in-transit, all risks insurance, etc.
                    </p>
                </div>
            </div>

            <section className="bg-black py-10">
                <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-[200px]">
                    {/* Card 1 */}
                    <div className="bg-white rounded overflow-hidden shadow-md">
                        <img
                            src={portfolio1}
                            alt="Image 1"
                            className="w-full h-[230px] object-cover"
                            loading="lazy"
                        />
                        <div className="bg-red-600 p-4 text-white h-[175px] casebg">
                            <h3 className="text-xl font-semibold">Malta Guinness</h3>
                            <p className="text-sm mt-2">
                                Being a part of Coronation means being a part of a community of smart and ambitious people from diverse backgrounds that makes the One Coronation. Explore Life at Coronation...
                            </p>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white rounded overflow-hidden shadow-md">
                        <img
                            src={portfolio1}
                            alt="Image 1"
                            className="w-full h-[230px] object-cover"
                            loading="lazy"
                        />
                        <div className="bg-red-600  p-4 text-white h-[175px] casebg">
                            <h3 className="text-xl font-semibold">Malta Guinness</h3>
                            <p className="text-sm mt-2">
                                Being a part of Coronation means being a part of a community of smart and ambitious people from diverse backgrounds that makes the One Coronation. Explore Life at Coronation...
                            </p>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white rounded overflow-hidden shadow-md">
                        <img
                            src={portfolio1}
                            alt="Image 1"
                            className="w-full h-[230px] object-cover"
                            loading="lazy"
                        />
                        <div className="bg-red-600  p-4 text-white h-[175px] casebg">
                            <h3 className="text-xl font-semibold">Malta Guinness</h3>
                            <p className="text-sm mt-2">
                                Being a part of Coronation means being a part of a community of smart and ambitious people from diverse backgrounds that makes the One Coronation. Explore Life at Coronation...
                            </p>
                        </div>
                    </div>

                    {/* Card 4 */}
                    <div className="bg-white rounded overflow-hidden shadow-md">
                        <img
                            src={portfolio4}
                            alt="Image 1"
                            className="w-full h-[230px] object-cover"
                            loading="lazy"
                        />
                        <div className="bg-red-600  p-4 text-white h-[175px] casebg">
                            <h3 className="text-xl font-semibold">MTN</h3>
                            <p className="text-sm mt-2">
                                Being a part of Coronation means being a part of a community of smart and ambitious people from diverse backgrounds that makes the One Coronation. Explore Life at Coronation...
                            </p>
                        </div>
                    </div>

                    {/* Card 5 */}
                    <div className="bg-white rounded overflow-hidden shadow-md">
                        <img
                            src={portfolio5}
                            alt="Image 1"
                            className="w-full h-[230px] object-cover"
                            loading="lazy"
                        />
                        <div className="bg-red-600  p-4 text-white h-[175px] casebg">
                            <h3 className="text-xl font-semibold">XXXXXXX</h3>
                            <p className="text-sm mt-2">
                                Being a part of Coronation means being a part of a community of smart and ambitious people from diverse backgrounds that makes the One Coronation. Explore Life at Coronation...
                            </p>
                        </div>
                    </div>

                    {/* Card 6 */}
                    <div className="bg-white rounded overflow-hidden shadow-md">
                        <img
                            src={portfolio6}
                            alt="Image 1"
                            className="w-full h-[230px] object-cover"
                            loading="lazy"
                        />
                        <div className="bg-red-600 p-4 text-white h-[175px] casebg">
                            <h3 className="text-xl font-semibold">XXXXXXX</h3>
                            <p className="text-sm mt-2">
                                Being a part of Coronation means being a part of a community of smart and ambitious people from diverse backgrounds that makes the One Coronation. Explore Life at Coronation...
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <img src={banner} alt="banner" className="object-cover w-full h-[400px]" loading="lazy" />
            </section>


        </div>
    )
}

export default CaseStudy