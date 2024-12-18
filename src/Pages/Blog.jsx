import Blog1 from "../assets/blog/blog1.png";
import Blog2 from "../assets/blog/blog2.png";
import Blog3 from "../assets/blog/blog3.png";
import Profile1 from "../assets/blog/profile.png";
import blogbanner from "../assets/blog/blogbanner.png";
import banner from "../assets/banner.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const blogPosts = [
    {
        id: 1,
        title: "A dive into the digital phase of advertising",
        excerpt: "Advertising has transcended traditional boundaries into the digital phase over the last 30 years, and it's a change anyone in the advertising field should be constantly adapting to.",
        image: Blog1,
        author: "Janet A. Saah",
        date: "April 02, 2024",
        readTime: "3 min read",
        profile: Profile1,
    },
    {
        id: 2,
        title: "Influencers vs social media personalities",
        excerpt: "While influencers can certainly impact consumer decisions, their effectiveness can vary depending on factors such as industry niche, audience engagement, and the specific goals of a brand's marketing...",
        image: Blog2,
        author: "Kwadwo A. Sirebour",
        date: "April 02, 2024",
        readTime: "5 min read",
        profile: Profile1,
    },
    {
        id: 3,
        title: "How Artificial Intelligence is Shaping Our Future",
        excerpt: "There's no denying that technology is transforming our world. From the way we work to the way we communicate, innovation seems to be the name ...",
        image: Blog3,
        author: "Judith Abani",
        date: "April 02, 2024",
        readTime: "7 min read",
        profile: Profile1,
    },
    {
        id: 4,
        title: "How Artificial Intelligence is Shaping Our Future",
        excerpt: "There's no denying that technology is transforming our world. From the way we work to the way we communicate, innovation seems to be the name ...",
        image: Blog1,
        author: "Judith Abani",
        date: "April 02, 2024",
        readTime: "7 min read",
        profile: Profile1,
    },
];

const latestBlog = blogPosts[0]; // Assuming the first blog is the latest

const Blog = () => {
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
                    <div className="flex flex-col lg:flex-row items-center gap-8 bg-white p-6 rounded-lg shadow-lg max-w-6xl mx-auto">
                        <div className="flex-1">
                            <img
                                src={latestBlog.image}
                                alt={latestBlog.title}
                                className="w-full lg:w-[500px] h-[300px] object-cover rounded-lg"
                            />
                        </div>
                        <div className="flex-1 flex flex-col justify-center">
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">
                                {latestBlog.title}
                            </h2>
                            <p className="text-gray-600 leading-relaxed mb-6">
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
                            className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col"
                        >
                            <img
                                src={post.image}
                                alt={post.title}
                                className="w-full h-[200px] object-cover"
                            />
                            <div className="p-4 flex-1">
                                <h3 className="font-bold text-lg mb-2 text-gray-800">{post.title}</h3>
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
                <img src={banner} alt="banner" className="object-cover w-full" loading="lazy" />
            </section>
        </div>
    );
};

export default Blog;
