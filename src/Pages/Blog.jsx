import Blog1 from "../assets/blog/blog1.png"
import Blog2 from "../assets/blog/blog2.png"
import Blog3 from "../assets/blog/blog3.png"


const blogPosts = [
    {
        id: 1,
        title: "A dive into the digital phase of advertising",
        excerpt: "Advertising has transcended traditional boundaries into the digital phase over the last 30 years, and it's a change anyone in the advertising field should be constantly adapting to.",
        image: Blog1,
        author: "Janet A. Saah",
        date: "April 02, 2024",
        readTime: "3 min read"
    },
    {
        id: 2,
        title: "Influencers vs social media personalities",
        excerpt: "While influencers can certainly impact consumer decisions, their effectiveness can vary depending on factors such as industry niche, audience engagement, and the specific goals of a brand's marketing...",
        image: Blog2,
        author: "Kwadwo A. Sirebour",
        date: "April 02, 2024",
        readTime: "5 min read"
    },
    {
        id: 3,
        title: "How Artificial Intelligence is Shaping Our Future",
        excerpt: "There's no denying that technology is transforming our world. From the way we work to the way we communicate, innovation seems to be the name ...",
        image: Blog3,
        author: "Judith Abani",
        date: "April 02, 2024",
        readTime: "7 min read"
    },
    {
        id: 4,
        title: "How Artificial Intelligence is Shaping Our Future",
        excerpt: "There's no denying that technology is transforming our world. From the way we work to the way we communicate, innovation seems to be the name ...",
        image: Blog1,
        author: "Judith Abani",
        date: "April 02, 2024",
        readTime: "7 min read"
    }
]

const Blog = () => {
    return (
        <div className="">
            <div className="">
                <h2 className="text-2xl font-bold mb-6">You may also like</h2>
                <div className="flex space-x-6 overflow-x-auto">
                    {blogPosts.map((post) => (
                        <div key={post.id} className="flex-shrink-0 w-64">
                            <img
                                src={post.image}
                                alt={post.title}
                                className="w-[216px] h-40 rounded-lg object-cover mb-4"
                            />
                            <div className="h-[120px]">
                                <h3 className="font-semibold text-[14px] mb-2 line-clamp-2">
                                    {post.title}
                                </h3>
                                <p className="text-[12px] text-gray-600 mb-4 line-clamp-3">
                                    {post.excerpt}
                                </p>
                            </div>
                            <div className="flex flex-col text-sm text-gray-500">
                                <span className="font-bold text-black">{post.author}</span>
                                <div className="flex items-center">
                                    <small>{post.date}</small>
                                    <small className="mx-1">•</small>
                                    <small>{post.readTime}</small>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Blog