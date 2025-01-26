/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react'

const TopFooter = () => {
    return (
        <>
            <section className="w-full lg:h-[300px] bg-red-500 flex flex-col items-center justify-center text-white p-4 lg:p-0">
                <h2 className="text-2xl md:text-4xl font-light mb-4">
                    Ready to Transform Your Digital Presence?
                </h2>
                <p className="text-base font-light md:text-lg mb-6">
                    Let's create something extraordinary together
                </p>
                <a href="/contact" className="px-6 py-3 text-sm md:text-base bg-white text-red-500 font-semibold rounded-full shadow hover:bg-gray-100 transition">
                    Contact Us Today
                </a>
            </section></>
    )
}

export default TopFooter