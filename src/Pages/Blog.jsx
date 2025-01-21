import Mtn from "../assets/blog/mtn.png"
import Picbanner from "../assets/blog/picbanner.png";

import Digi from "../assets/blog/digi.jpg";

import Profile1 from "../assets/blog/profile.png";
import blogbanner from "../assets/blog/blogbanner.png";
import banner from "../assets/banner.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";



const blogPosts = [
    {
        id: 1,
        title: "Interactive Digital Celebrates MTN Ghana’s Historic Achievement",
        excerpt: "It’s a triple threat! We are thrilled to congratulate MTN Ghana's outstanding accomplishment as the 5th-time winner of the Chartered Institute of Marketing Ghana (CIMG) Telecommunications Award for Overall Marketing Orientation Organization of the Year 2023, Telecom Company of the Year, as well as the Hall of Fame Award for Telecommunications.",
        image: Mtn,
        author: "Philomina Akekudaga",
        date: "January 09, 2025",
        profile: Profile1,
    },
    {
        id: 2,
        title: "Why Digital Storytelling Matters and How Interactive Digital Is Making It Count.",
        excerpt: "You’re scrolling through your feed online, and then a video pops up, it's not just one of those boring pitches. Instead, it tells a catchy story that draws you in. Before you realise it, you are emotionally invested and eager to learn more about the brand behind it.",
        image: Digi,
        author: "Kwadwo A. Sirebour",
        date: "April 02, 2024",
        profile: Profile1,
    },
    {
        id: 3,
        title: "Interactive Digital and Street Children Empowerment Foundation (SCEF) Host Successful ‘Sound of Freedom’ Movie Screening to Raise Funds for Street-Connected Children Initiatives.",
        excerpt: "It was all about impact on Friday, October 18, 2024, as the Street Children Empowerment Foundation (SCEF) hosted a fundraising screening of the film “Sound of Freedom” at the AMA Omanye Aba Hall in Accra.",
        image: Mtn,
        author: "Judith Abani",
        date: "October 18, 2024",
        profile: Profile1,
    },
    {
        id: 4,
        title: "Leveraging Platform Specific Features For Digital Communication",
        excerpt: "Digital platforms have changed the way businesses communicate and how people connect. These platforms offer a variety of tools and features that often go unnoticed due to a lack of deeper understanding",
        image: Picbanner,
        author: "Philomina Akekudaga",
        date: "June 07, 2024",
        profile: Profile1,
    },
];

const latestBlog = blogPosts[0]; // Assuming the first blog is the latest

const Blog = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
    const postsPerPage = 3; // Number of posts per page
    const [currentPage, setCurrentPage] = useState(1);
    const navigate = useNavigate();


    const startIndex = (currentPage - 1) * postsPerPage;
    const endIndex = startIndex + postsPerPage;
    const currentPosts = blogPosts.slice(startIndex, endIndex);

    // Calculate total pages
    const totalPages = Math.ceil(blogPosts.length / postsPerPage);

    // Function to handle page change
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    // Function to navigate to BlogDetail page
    const handleReadMore = (id) => {
        navigate(`/blog/${id}`);
    };

    return (
        <div>
            {/* Blog Banner */}
            <div className="relative">
                <img src={blogbanner} alt="about" className="object-cover w-full" loading="lazy" />
                <div className="absolute top-[285px] left-[195px] w-[858px] h-[72px] flex flex-col gap-2">
                    <h2 className="text-[40px] font-medium text-white">Latest news</h2>
                </div>
            </div>

            {/* Latest Blog */}
            <div className="w-full flex justify-center my-10 h-[400px]">
                <div className="px-4 flex flex-col w-[1130px] h-[316px]">
                    <div className="mb-8">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="max-w-md bg-[#F1F1F1] w-[400px] h-[49px] p-4 rounded-md"
                        />
                    </div>
                    <div
                        onClick={() => handleReadMore(latestBlog.id)}
                        className="flex flex-col lg:flex-row items-center gap-8 bg-white p-6 rounded-lg shadow-lg max-w-6xl mx-auto cursor-pointer">
                        <div className="flex-1">
                            <img
                                src={latestBlog.image}
                                alt={latestBlog.title}
                                className="w-full lg:w-[500px] h-[300px] object-cover rounded-lg transform transition-transform duration-300 hover:scale-105"
                            />
                        </div>
                        <div className="flex-1 flex flex-col justify-center">
                            <h2 className="text-2xl font-bold text-gray-800 mb-4 line-clamp-2">
                                {latestBlog.title}
                            </h2>
                            <p className="text-gray-600 leading-relaxed mb-6 line-clamp-4">
                                {latestBlog.excerpt}
                            </p>
                            <div className="flex items-center gap-4 mb-6">
                                <img
                                    src={latestBlog.profile}
                                    alt={latestBlog.author}
                                    className="w-12 h-12 rounded-full object-cover"
                                />
                                <div>
                                    <p className="font-bold text-gray-800">{latestBlog.author}</p>
                                    <p className="text-gray-500 text-sm">{latestBlog.date}</p>
                                </div>
                            </div>
                            <div className="text-right">
                                {/* Navigate to BlogDetail */}
                                <button
                                    onClick={() => handleReadMore(latestBlog.id)}
                                    className="text-red-500 font-semibold hover:text-red-700"
                                >
                                    Read More
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Blog Posts */}
            <div className="py-10 flex flex-col items-center justify-center">
                <div className="w-[1130px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-10">
                    {currentPosts.map((post) => (
                        <div
                            key={post.id}
                            onClick={() => handleReadMore(post.id)}
                            className="bg-white cursor-pointer rounded-lg shadow-lg overflow-hidden flex flex-col"
                        >
                            <div className="relative overflow-hidden">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-[280px] object-cover transform transition-transform duration-300 hover:scale-105"
                                />
                            </div>
                            <div className="p-4 flex-1">
                                <h3 className="font-bold text-lg mb-2 text-gray-800 line-clamp-2">{post.title}</h3>
                                <p className="text-sm text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                            </div>
                            <div className="flex items-center justify-between px-4 pb-4">
                                <div className="flex items-center">
                                    <img
                                        src={post.profile}
                                        alt={post.author}
                                        className="w-10 h-10 rounded-full object-cover mr-3"
                                    />
                                    <div>
                                        <p className="font-semibold text-gray-800 text-sm">{post.author}</p>
                                        <p className="text-gray-500 text-xs">{post.date}</p>
                                    </div>
                                </div>
                                {/* Navigate to BlogDetail */}
                                <button
                                    onClick={() => handleReadMore(post.id)}
                                    className="text-red-500 font-semibold hover:text-red-700"
                                >
                                    Read More
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pagination */}
                <div className="flex gap-2 mt-4">
                    {Array.from({ length: totalPages }, (_, index) => (
                        <button
                            key={index}
                            onClick={() => handlePageChange(index + 1)}
                            className={`px-4 py-2 rounded-md ${currentPage === index + 1
                                ? "bg-red-500 text-white"
                                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                                }`}
                        >
                            {index + 1}
                        </button>
                    ))}
                </div>
            </div>


            <section>
                <img src={banner} alt="banner" className="object-cover w-full h-[400px]" loading="lazy" />
            </section>
        </div>
    );
};

export default Blog;
