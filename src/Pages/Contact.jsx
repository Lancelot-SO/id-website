/* eslint-disable react/no-unknown-property */
import contactbanner from "../assets/contact/contactbanner.png"
import telephone from "../assets/contact/telephonebg.png"
const Contact = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
    return (
        <div className="overflow-hidden">
            <div className="relative">
                <img src={contactbanner} alt="about" className="object-cover w-full lg:h-full h-[300px]" loading="lazy" />
                <div className=" absolute lg:top-[285px] top-[60%] left-[40px] lg:left-[195px] lg:w-[858px] lg:h-[72px] h-[400px] flex flex-col gap-2">
                    <h2 className="text-[40px] font-bold text-white">Contact Us</h2>
                </div>
            </div>

            <section>
                <div className="w-full lg:h-[900px] bg-white flex items-center justify-center">
                    <div className="relative lg:w-[838px] lg:h-[793px]">
                        <img
                            src={telephone}
                            alt="telephone"
                            className="object-cover w-[1000px] lg:h-full h-[600px]"
                            loading="lazy"
                        />


                        <div className="absolute top-8 lg:right-4 right-[30px] bg-opacity-80 lg:p-8 lg:w-[400px] w-[300px]">
                            <form className="space-y-6">
                                <div>
                                    <label htmlFor="fullName" className="block text-gray-700 font-medium">
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        id="fullName"
                                        placeholder="Your full name"
                                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-gray-700 font-medium">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        placeholder="Your email"
                                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="phone" className="block text-gray-700 font-medium">
                                        Phone number
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        placeholder="+233..."
                                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-gray-700 font-medium">
                                        Your Message
                                    </label>
                                    <textarea
                                        id="message"
                                        placeholder="Your Message"
                                        rows="5"
                                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 resize-none"
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full p-3 bg-red-700 text-white font-bold rounded-md hover:bg-red-900 transition"
                                >
                                    SEND
                                </button>
                            </form>
                        </div>
                    </div>

                </div>
            </section>


            <section>
                <div className="w-full h-[450px] bg-red-500">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.8754742037727!2d-0.1937175252546913!3d5.585417794395289!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9a5ddc04ad25%3A0x6ca8976decb5c186!2sInteractive%20Digital%20Ltd!5e0!3m2!1sen!2sgh!4v1736342402056!5m2!1sen!2sgh" width="100%" height="450" style={{ border: '0' }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
            </section>
        </div>
    )
}

export default Contact