/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React from 'react'
import mtnbanner from "../../assets/case/mtnbanner.png"
import palm from "../../assets/case/palm.png"
import timebg from "../../assets/case/timebg.png"
import detbg from "../../assets/case/detbg.png"

import CountUp from "react-countup";


const MtnDetail = () => {

    const videoUrls = [
        "https://www.youtube.com/embed/ty2advRiWJM?si=bkiTeDgDsWeL_UO4",
        "https://www.youtube.com/embed/ty2advRiWJM?si=bkiTeDgDsWeL_UO4",
        "https://www.youtube.com/embed/ty2advRiWJM?si=bkiTeDgDsWeL_UO4",
        "https://www.youtube.com/embed/ty2advRiWJM?si=bkiTeDgDsWeL_UO4",

    ];

    return (
        <div className='overflow-hidden'>
            {/* Banner Section */}
            <div className="relative">
                <img src={mtnbanner} alt="about" className="object-cover w-full h-[400px]" loading="lazy" />
                <div className="absolute top-[225px] left-[15px] w-full lg:h-[72px] flex flex-col gap-2 lg:top-[50%] lg:left-[15%] lg:w-[574px]">
                    <p className="text-white">FOUNDATION</p>
                    <h2 className="lg:text-[48px] text-[30px] font-bold text-white text-left">MTN is Charge is Back</h2>
                    <p className="text-white">OUR MTN CASE STUDY</p>
                </div>
            </div>

            <section>
                <div className='relative w-full h-[429px] bg-white flex items-center'>
                    <div className="absolute top-0 right-0">
                        <img
                            src={palm} alt='palm'
                            loading='lazy'
                            className='w-full lg:h-[500px] h-[300px] object-cover' />
                    </div>

                    <div >
                        <div className='flex flex-col lg:w-[1110px] 4xl:w-[1400px] w-full lg:h-[350px] h-[400px] lg:ml-[200px] my-[200px]'>
                            <div className='w-full flex lg:h-[200px] h-[150px] border-b-2 border-b-black px-4 lg:px-0'>
                                <h2 className='font-bold text-[50px]'>Moderna</h2>
                            </div>
                            <div className='w-full flex lg:flex-row flex-col h-full justify-between lg:pt-6 pt-2 px-4 lg:px-0'>
                                <p className='text-[#141414] text-[35px]'>Overview</p>
                                <p className='lg:w-[650px] text-[#56575D]'>
                                    Lörem ipsum elektrofas fäns. Hemin stadsutglesning: i heteroaktiv.
                                    Nigisk åbol. Odopp suprade, reinfeldtare. Nissa kut. Preppare eurorade påmäv om konkrati. Susanne Jonsson nyng. Dedoliga tvodd, mivödess. Assa fanir skogsbad de färas. Farisade trefik och androgen. Pseudobel social turism autodade. Lådegon vans och pudöräfyliga atreledes.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <section className="relative lg:h-[400px] h-auto w-full">
                <img
                    src={timebg}
                    alt="Time background"
                    className='object-cover h-[500px] 4xl:w-full'
                />

                <div className='absolute lg:top-[20%] top-[10%] left-0 lg:ml-[200px] ml-4 lg:w-[1110px] 4xl:w-[1500px] h-[300px] flex lg:flex-row flex-col lg:gap-20 gap-6'>
                    <div className='flex flex-col flex-1 justify-center'>
                        <h2 className='font-semibold lg:text-[35px] text-[24px]'>The Challenge</h2>
                        <p className='lg:text-[14px] text-[12px]'>
                            Lörem ipsum biock prerade, antitik. Faligen alalingar, megamöbande.
                            Deska ask. Pseudoliga metamodern i mis. Teratos hypor. Dar cynlogi eftersom nism. Bedihul dov multinar. Ter baminde. Euronar epimatisk por och desade. Makrobyren katrede. Kans astrora. Pegira nöktig. Pergyn plankning. Ubagen egengar. Turistkorridor dal resat ifall dil. Väl fonokemi sede. Egon pneumatet att Helen Gustavsson. Fadång kasöbel, röstsamtal: dojosamma. Betårta postsocial neotes. Bin Ladin-rabatt .
                        </p>
                    </div>
                    <div className='flex flex-col flex-1 justify-center'>
                        <h2 className='font-semibold text-[35px] '>The Solution</h2>
                        <p className='lg:text-[14px] text-[12px]'>
                            Lörem ipsum biock prerade, antitik. Faligen alalingar, megamöbande.
                            Deska ask. Pseudoliga metamodern i mis. Teratos hypor. Dar cynlogi eftersom nism. Bedihul dov multinar. Ter baminde. Euronar epimatisk por och desade. Makrobyren katrede. Kans astrora. Pegira nöktig. Pergyn plankning. Ubagen egengar. Turistkorridor dal resat ifall dil. Väl fonokemi sede. Egon pneumatet att Helen Gustavsson. Fadång kasöbel, röstsamtal: dojosamma. Betårta postsocial neotes. Bin Ladin-rabatt .
                        </p>
                    </div>
                </div>
            </section>

            <section>
                <div className='w-full lg:h-[375px] 4xl:h-[500px] h-[550px] lg:pt-[150px] pt-8'>
                    <div className='lg:w-[1110px] h-[150px] lg:ml-[200px] border-t-2 border-t-black pt-4 px-4 lg:px-0'>
                        <h2 className='font-semibold text-[35px] '>The Results</h2>
                        <p className='text-[14px]'>
                            Lörem ipsum biock prerade, antitik. Faligen alalingar, megamöbande.
                            Deska ask. Pseudoliga metamodern i mis. Teratos hypor. Dar cynlogi eftersom nism. Bedihul dov multinar.                             Deska ask. Pseudoliga metamodern i mis. Teratos hypor. Dar cynlogi eftersom nism. Bedihul dov multinar.

                        </p>
                    </div>
                    <div className="lg:w-[1110px] 4xl:w-[1500px] lg:ml-[200px] mt-10 lg:mt-0 px-4 lg:px-0">
                        <div className="w-full flex lg:flex-row flex-col items-center justify-between gap-4 4xl:gap-0 lg:gap-0">
                            <div className='flex lg:flex-row flex-col w-full '>
                                <div className="w-full md:w-[48%] lg:w-[240px] 4xl:w-[350px] flex items-center gap-2">
                                    <span className="text-[50px] font-semibold"><CountUp end={24} duration={2} /></span>
                                    <div className="w-2 h-2 bg-red-500"></div>
                                    <p>Brand preference</p>
                                </div>
                                <div className="w-full md:w-[48%] lg:w-[280px] flex items-center gap-2">
                                    <span className="text-[50px] font-semibold"><CountUp end={1294} duration={2} /></span>
                                    <div className="w-2 h-2 bg-red-500"></div>
                                    <p>Brand favorability</p>
                                </div>
                            </div>
                            <div className='flex lg:flex-row flex-col'>
                                <div className="w-full md:w-[48%] lg:w-[350px] 4xl:w-[400px] flex items-center gap-2">
                                    <span className="text-[50px] font-semibold"><CountUp end={359} duration={2} />M</span>
                                    <div className="w-3 h-2 bg-red-500"></div>
                                    <p>Social media own interaction / impression</p>
                                </div>
                                <div className="w-full md:w-[48%] lg:w-[200px] flex items-center gap-2">
                                    <span className="text-[50px] font-semibold"><CountUp end={247} duration={2} />M</span>
                                    <div className="w-2 h-2 bg-red-500"></div>
                                    <p>Reach</p>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </section>

            <section className="relative w-full lg:h-full h-[650px]">
                <img
                    src={detbg}
                    alt="Time background"
                    className="object-cover w-full h-full"
                />
                <div className="absolute top-[5%] lg:w-[1310px] 4xl:w-[1500px] lg:h-[740px] lg:pl-[200px] flex flex-col">
                    {/* Main video section */}
                    <div className="lg:w-[1110px] 4xl:w-[1500px] lg:h-[400px] w-full h-[200px]">
                        <iframe
                            src="https://www.youtube.com/embed/M3Gph2VfUIw?si=YsJhMGYWRWQTYW4v"
                            title="YouTube video player"
                            className="w-full h-full rounded-lg"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        ></iframe>
                    </div>


                    {/* Thumbnail grid */}
                    <div className="grid grid-cols-2 lg:grid-cols-3 4xl:grid-cols-2 gap-4 mt-4">
                        {videoUrls.slice(1).map((url, index) => (
                            <div
                                key={index}
                                className="relative w-full bg-red-500 4xl:w-[620px] h-[180px] overflow-hidden rounded-lg"
                            >
                                <iframe
                                    src={url}
                                    title={`Video ${index + 2}`}
                                    className="w-full h-full rounded-lg"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen
                                ></iframe>
                                <div className="absolute bottom-1 left-1 flex bg-black bg-opacity-50 rounded-[20px]">
                                    <p className="text-white p-1">Video Name</p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>


        </div>
    )
}

export default MtnDetail