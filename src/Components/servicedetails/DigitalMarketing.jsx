/* eslint-disable no-unused-vars */
import React from 'react'
import digitalbanner from "../../assets/digital/digitalbanner.png"
import digital from "../../assets/digital/digital1.png"
import pattern from "../../assets/digital/pattern.png"
import digital2 from "../../assets/digital/digital2.png"
import digital3 from "../../assets/digital/digital3.png"
import digital4 from "../../assets/digital/digital4.png"


const DigitalMarketing = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
    return (
        <div>
            <div className="relative">
                <img src={digitalbanner} alt="about" className="object-cover w-full" loading="lazy" />
                <div className=" absolute top-[285px] left-[195px] w-[858px] h-[72px] flex flex-col gap-2">
                    <h2 className="text-[40px] font-bold text-white">Digital Marketing</h2>
                </div>
            </div>

            <section>
                <div className='w-full h-[510px] flex items-center justify-center'>
                    <div className='w-[1110px] h-[349px] flex'>
                        <div className='flex-1'>
                            <img
                                src={digital}
                                alt="Malta Guinness"
                                className="shadow-lg object-cover w-full h-full"
                            />
                        </div>
                        <div className='flex-1 p-4'>
                            <h2 className='w-[482px] h-[117px] text-[32px] mb-8'>
                                “Bring your <b className='text-[#FF0226] font-extrabold'>“business to social media”, </b>they said. “It will be easy”, they said.
                            </h2>
                            <p>
                                Yes, it’s clear to see why it’s not so easy. Over 4 billion people currently use social media to share, inform and build profitable relationships. However, there are unique ways of using your voice in the best-suited forms for your existing and potential customers. Sometimes that can be overwhelming and that’s where WE come in. We take on the reins to help you define your brand, identify your people and seamlessly integrate your goals, and objectives into sellable, valuable content that your tribe will care about.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className='w-full h-[315px] flex items-center justify-center'>
                    <div>
                        <div className='w-full flex items-center justify-center'>
                            <div className='w-[1110px] h-[230px] flex gap-2'>
                                <img src={digital2} alt="about" className="object-cover w-full rounded-lg" loading="lazy" />
                                <img src={digital3} alt="about" className="object-cover w-full rounded-lg" loading="lazy" />
                                <img src={digital4} alt="about" className="object-cover w-full rounded-lg" loading="lazy" />

                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-[200px] h-[130px]'>
                    <img src={pattern} alt="about" className="object-cover w-full h-full flex " loading="lazy" />
                </div>

            </section>
        </div>
    )
}

export default DigitalMarketing