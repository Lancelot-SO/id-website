/* eslint-disable no-unused-vars */
import React from "react";
import { useParams } from "react-router-dom";
import Blog1 from "../assets/blog/blog1.png";
import Blog2 from "../assets/blog/blog2.png";
import Blog3 from "../assets/blog/blog3.png";
import Profile1 from "../assets/blog/profile.png";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

import banner from "../assets/banner.png";

import detail1 from "../assets/blog/detail1.png"
import detail2 from "../assets/blog/detail2.png"


const blogPosts = [
    {
        id: 1,
        title: "A dive into the digital phase of advertising",
        content: "Full content for digital advertising goes here...",
        image: Blog1,
        author: "Janet A. Saah",
        date: "April 02, 2024",
        profile: Profile1,
    },
    {
        id: 2,
        title: "Influencers vs social media personalities",
        content: "Full content for influencers vs social media...",
        image: Blog2,
        author: "Kwadwo A. Sirebour",
        date: "April 02, 2024",
        profile: Profile1,
    },
    {
        id: 3,
        title: "How Artificial Intelligence is Shaping Our Future",
        content: "Full content for AI transformation goes here...",
        image: Blog3,
        author: "Judith Abani",
        date: "April 02, 2024",
        profile: Profile1,
    },
];

const BlogDetail = () => {
    const { id } = useParams();
    const blogPost = blogPosts.find((post) => post.id === parseInt(id));

    if (!blogPost) return <div className="mt-[100px] flex items-center justify-center h-[500px] ">Blog post not found!</div>;

    return (
        <div className="bg-gray-50 min-h-screen mt-[100px]">
            <div className="max-w-[1125px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Content */}
                <main className="lg:col-span-2 bg-white rounded-md shadow-md">
                    <img
                        src={blogPost.image}
                        alt={blogPost.title}
                        className="w-full h-[381px] object-cover rounded-lg"
                    />
                    <div className="p-6">
                        <h1 className="text-3xl font-bold mb-2">{blogPost.title}</h1>
                        <div className="flex items-center text-gray-500 mb-4 space-x-2">
                            <img
                                src={blogPost.profile}
                                alt="Author"
                                className="w-8 h-8 rounded-full"
                            />
                            <div className="flex justify-between items-center w-full">
                                <span className="text-sm">{blogPost.author}</span>
                                <span className="text-sm">{blogPost.date}</span>
                            </div>

                        </div>
                        <p className="text-gray-700 leading-relaxed">{blogPost.content}</p>
                        <p>
                            dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
                            quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodomolestie consequat,
                            vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan eiusto odio dignissim qui blandit praesent luptatum.
                            Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet .
                        </p>
                        <br />
                        <p>
                            dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
                            quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodomolestie consequat,
                            vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan eiusto odio dignissim qui blandit praesent luptatum.
                            Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet .
                        </p>
                        <br />
                        <p>
                            dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
                            quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodomolestie consequat,
                            vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan eiusto odio dignissim qui blandit praesent luptatum.
                            Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet .
                        </p>
                        <div className="flex w-full mt-6 gap-10">
                            <img
                                src={detail1}
                                alt="Author"
                                className="w-[317px] h-[274px] rounded-lg"
                            />
                            <img
                                src={detail2}
                                alt="Author"
                                className="w-[317px] h-[274px] rounded-lg"
                            />
                        </div>

                        <h2 className="mt-8 font-bold text-[23px]">Habitasse per feugiat aliquam luctus</h2>
                        <br />
                        <p>
                            dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
                            quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodomolestie consequat,
                            vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan eiusto odio dignissim qui blandit praesent luptatum.
                            Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet .
                        </p>
                        <br />

                        <h2 className="mt-8 font-bold text-[23px]">Habitasse per feugiat aliquam luctus</h2>
                        <br />
                        <p>
                            dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
                            quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodomolestie consequat,
                            vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan eiusto odio dignissim qui blandit praesent luptatum.
                            Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet .
                        </p>

                        <div className="w-full h-[253px] rounded-lg bg-[#F3F7FA] mt-8 items-center justify-center flex flex-col">
                            <span className="w-[490px] h-[94px]">
                                dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
                                quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip.
                            </span>
                            <small> By Jerry Sam</small>
                        </div>
                        <br />
                        <p>
                            dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
                            quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodomolestie consequat,
                            vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan eiusto odio dignissim qui blandit praesent luptatum.
                            Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet .
                        </p>

                        <div className="flex w-full items-center justify-between mt-10">
                            <span>Share</span>
                            <div className="flex space-x-4">
                                <a href="#"><FaFacebook className=" hover:text-[#FF0226]" /></a>
                                <a href="#"><FaTwitter className=" hover:text-[#FF0226]" /></a>
                                <a href="#"><FaLinkedin className=" hover:text-[#FF0226]" /></a>
                                <a href="#"><FaInstagram className=" hover:text-[#FF0226]" /></a>
                            </div>
                        </div>

                        <div className="max-w-3xl mx-auto my-10 bg-white rounded-md shadow-sm">
                            <h2 className="text-2xl font-semibold mb-6">Leave A Comments</h2>

                            <form className="space-y-6">
                                {/* Full Name and Email */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-gray-700 font-medium mb-2" htmlFor="fullName">
                                            Full Name *
                                        </label>
                                        <input
                                            type="text"
                                            id="fullName"
                                            placeholder="john david"
                                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
                                            Your Email *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            placeholder="example@yourmail.com"
                                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                                        />
                                    </div>
                                </div>

                                {/* Website */}
                                <div>
                                    <label className="block text-gray-700 font-medium mb-2" htmlFor="website">
                                        Website *
                                    </label>
                                    <input
                                        type="url"
                                        id="website"
                                        placeholder="your website address here"
                                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                                    />
                                </div>

                                {/* Message */}
                                <div>
                                    <label className="block text-gray-700 font-medium mb-2" htmlFor="message">
                                        Message *
                                    </label>
                                    <textarea
                                        id="message"
                                        rows="5"
                                        placeholder="hello there, i would like to talk about how to..."
                                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                                    ></textarea>
                                </div>

                                {/* Checkbox */}
                                <div className="flex items-center gap-2">
                                    <input
                                        type="checkbox"
                                        id="saveInfo"
                                        className="w-4 h-4 text-red-600 bg-gray-100 rounded focus:ring-2 focus:ring-red-500"
                                    />
                                    <label htmlFor="saveInfo" className="text-gray-600 text-sm">
                                        Save my name, email, and website in this browser for the next time I comment.
                                    </label>
                                </div>

                                {/* Button */}
                                <div>
                                    <button
                                        type="submit"
                                        className="bg-red-600 text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-red-700 transition duration-300"
                                    >
                                        Post Comment →
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </main>

                {/* Sidebar */}
                <aside className="space-y-8">
                    {/* Search */}
                    <div className="bg-white p-4 rounded-md shadow">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="w-full border rounded-md px-3 py-2 focus:outline-none"
                        />
                    </div>

                    {/* Recent Posts */}
                    <div className="bg-white p-4 rounded-md shadow">
                        <h3 className="text-xl font-semibold mb-4">Recent Post</h3>
                        {blogPosts.slice(0, 3).map((post) => (
                            <div key={post.id} className="flex items-center gap-4 mb-4">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-16 h-16 object-cover rounded-md"
                                />
                                <div>
                                    <h4 className="text-gray-700 font-medium">{post.title}</h4>
                                    <p className="text-sm text-gray-500">{post.date}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Categories */}
                    <div className="bg-white p-4 rounded-md shadow">
                        <h3 className="text-xl font-semibold mb-4">Categories</h3>
                        <ul className="text-gray-600">
                            <li>Design News (1)</li>
                            <li>Information Technology (2)</li>
                            <li>New Concepts News (1)</li>
                        </ul>
                    </div>

                    {/* Tags */}
                    <div className="bg-white p-4 rounded-md shadow">
                        <h3 className="text-xl font-semibold mb-4">Tags</h3>
                        <div className="flex flex-wrap gap-2">
                            {["Design", "Development", "AI", "HTML", "CSS", "Media"].map((tag) => (
                                <span
                                    key={tag}
                                    className="px-3 py-1 border text-gray-700 rounded-md text-sm"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </aside>
            </div>

            <section>
                <img src={banner} alt="banner" className="object-cover w-full" loading="lazy" />
            </section>
        </div>
    );
};

export default BlogDetail;
