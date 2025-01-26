/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Digibanner from "../assets/blog/digibanner.jpg";
import Mtn from "../assets/blog/mtn.png";
import Mtn1 from "../assets/blog/mtn1.png";
import Mtn2 from "../assets/blog/mtnbanner.png";
import Picbanner from "../assets/blog/picbanner.png";
import Picmainbanner from "../assets/blog/picmainbanner.png";
import Pic1 from "../assets/blog/Picture 1.jpg"
import Pic2 from "../assets/blog/Picture 2.jpg"
import Profile1 from "../assets/blog/profile1.jpg";
import Profile2 from "../assets/blog/profile2.jpg";
import Profile3 from "../assets/blog/profile3.jpg";


import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

import CommentForm from "./CommentForm";


const blogPosts = [
    {
        id: 1,
        title: "Interactive Digital Celebrates MTN Ghana’s Historic Achievement",
        excerpt: "It’s a triple threat! We are thrilled to congratulate MTN Ghana's outstanding accomplishment as the 5th-time winner of the Chartered Institute of Marketing Ghana (CIMG) Telecommunications Award for Overall Marketing Orientation Organization of the Year 2023, Telecom Company of the Year, as well as the Hall of Fame Award for Telecommunications.",
        image: Mtn,
        photo1: Mtn1,
        photo2: Mtn2,
        author: "Philomina Akekudaga",
        date: "January 09, 2025",
        profile: Profile3,
        content: `It’s a triple threat! We are thrilled to congratulate MTN Ghana's outstanding accomplishment as the 5th-time winner of the Chartered Institute of Marketing Ghana (CIMG) Telecommunications Award for Overall Marketing Orientation Organization of the Year 2023, Telecom Company of the Year, as well as the Hall of Fame Award for Telecommunications. This remarkable achievement is a testament to their commitment to excellence and innovation in the telecommunications industry.`,
        content1: `As MTN Ghana's dedicated digital marketing agency for the past five years, Interactive Digital has played a pivotal role in this success story. Our comprehensive suite of marketing services has been instrumental in driving MTN Ghana's digital presence and market leadership. We've utilized consistent social media management, strategic digital marketing for brand visibility and customer engagement, as well as high-quality content marketing to achieve the results we celebrate today.`,
        content2: `“In celebrating MTN Ghana's remarkable achievements, I reflect on the inspiring 6-year journey we have embarked on together. It has been a privilege to have contributed to driving the attainment of a modern connected life for all and sundry, and we are excited to continue pioneering innovative solutions for all our clients,"  commented Interactive Digital's Chief Operating Officer, Ekow Thompson.`,
        content3: `“He added that this milestone fuels the commitment of Interactive Digital to pushing creative boundaries and enhancing the digital experience for all. We extend our heartfelt congratulations to MTN Ghana as we look back fondly on the incredible work we’ve created together. A truly rewarding experience. We are inspired to push ourselves to new heights of innovation and excellence in digital marketing. Here's to celebrating this milestone and looking forward to many more achievements together as we continue to evolve our services and stay at the forefront of advertising.`,


    },
    {
        id: 2,
        title: "Why Digital Storytelling Matters and How Interactive Digital Is Making It Count.",
        excerpt: "You’re scrolling through your feed online, and then a video pops up, it's not just one of those boring pitches. Instead, it tells a catchy story that draws you in. Before you realise it, you are emotionally invested and eager to learn more about the brand behind it.",
        image: Digibanner,
        author: "Kwadwo A. Sirebour",
        date: "April 02, 2024",
        profile: Profile1,
        content: `You’re scrolling through your feed online, and then a video pops up, it's not just one of those boring pitches. Instead, it tells a catchy story that draws you in. Before you realise it, you are emotionally invested and eager to learn more about the brand behind it. This is the power of Storytelling and how it has evolved gradually over the period. Forward thinking brands are now moving beyond conventional storytelling to a more creative form that emotionally resonates with their target audience. `,
        content1: `To help young creatives have a grasp on telling engaging stories, Interactive Digital’s IDEA BOOTCAMP initiative held a lecture at the University of Ghana on 27th May 2024 with the Communications class on Digital Storytelling/Reputation Building in digital spaces. The lecture was facilitated by two (2) seasoned professional creatives from Interactive Digital, Whitney Thompson and Afia Kwakyewaa Nyantakyi. They delved into the essential components of storytelling, creating a Content Calendar and Managing Digital Reputation.`,
        content2: `Afia commenced the lecture highlighting how fundamental storytelling is to our culture and its evolution over time from Folklore, Scrolls, Books, Radio/Tv to Digital Platforms. She elaborated that, regardless of how and the medium through which stories are told, the ability to captivate and engage people through interesting narratives that ignite emotions lies at the core. She further explained how digital storytelling has transformed the way stories are told by blending traditional storytelling techniques with digital forms. “Unlike the traditional forms of storytelling, digital platforms make way for interaction, visuals and sound that enriches the narrative experience.”`,
        content3: `Drawing from case studies, they reiterated how big brands like Nike use storytelling to create advertising campaigns that resonate well with people. Nike’s “Believe in Something” campaign typifies this strategy by highlighting themes of perseverance, determination and real emotional testimonies from athletes that are thought provoking. During the session, Whitney also delved into Creating Content Calendars and why it is essential in Content Creation. She highlighted the fundamental purpose of content calendars as a blueprint for “organising and scheduling content for consistent posting on digital platforms.”`,
        content4: `She stressed that “any content marketing strategy must include a content calendar to help make sure that content is organised, timely, and successfully in line with the overall marketing objectives” of the brand. Moving to a pivotal topic that some brands mostly take for granted, Afia Kwakyewaa Nyantakyi took the students through the nuances of Digital Reputation Management which is essential for brands in today’s global community. She pointed out that managing a brand’s reputation effectively is the main key to success for every organisation or business. Particularly, it demands “staying ahead of the curve with a strategic approach and being deliberate about whatever you say” in the digital space.`,
        content5: `Afia reaffirmed by this using The Arab Spring and Palestine’s genocide as a practical illustration of how these events rapidly spread online and how different narratives influenced global opinions and actions. Throughout the lecture, the students actively participated in the discussions and shared their insights on Storytelling, Content Calendars and Digital Reputation Management. At the end, they expressed deep gratitude for the enlightening experience shared by Whitey and Afia. This lecture served as a testament to Interactive Digital’s commitment to bringing valuable industry insights into the classroom to bridge the gap between academia and industry.`,


    },
    {
        id: 3,
        title: "Interactive Digital and Street Children Empowerment Foundation (SCEF) Host Successful ‘Sound of Freedom’ Movie Screening to Raise Funds for Street-Connected Children Initiatives.",
        excerpt: "It was all about impact on Friday, October 18, 2024, as the Street Children Empowerment Foundation (SCEF) hosted a fundraising screening of the film “Sound of Freedom” at the AMA Omanye Aba Hall in Accra.",
        image: Mtn,
        author: "Judith Abani",
        date: "October 18, 2024",
        profile: Profile2,
        content: `It was all about impact on Friday, October 18, 2024, as the Street Children Empowerment Foundation (SCEF) hosted a fundraising screening of the film “Sound of Freedom” at the AMA Omanye Aba Hall in Accra. The event, organized to raise funds to support SCEF’s initiatives in creating awareness about child exploitation and trafficking, was a resounding success. The event brought together civil society advocates, supporters, and corporate partners, all united in their commitment to making a positive difference in the lives of street-connected children. `,
        content1: `Following the screening, Apiorkor Seyiram Ashong-Abbey moderated an insightful panel discussion on the devastating impact of child exploitation and trafficking to our future generations and the critical role individuals can play in combating this growing menace. She was joined by Paul Semeh, Founder & Executive Director, Street Children Empowerment Foundation (SCEF). “The abuse these trafficked children are subjected to is what drives me to go out and find street-connected children and try to put them into schools. The fight against this issue is bigger than any one organization. We need everyone to unite in combating this crisis that’s stealing the future of innocent children,” he commented.`,
        content2: `The event was the culmination of months of hard work and collaboration between SCEF and Interactive Digital (!D). Our agency was at the helm of a creative strategic and digital campaign aimed at amplifying SCEF’s cause. Our team, led by Mr. Ekow Thompson, Chief Operations Officer, graced the occasion to show our support for this significant event. “Our support for SCEF’s initiatives is a testament to our belief in driving purpose beyond profits. At !D, we are committed to leveraging our creative and technological expertise to make a meaningful impact on society. Supporting street-connected children is not just a cause; it aligns with our core values of integrity, teamwork, and empathy. We believe that by working together, we can create lasting change and inspire others to join us in this mission. We extend our heartfelt appreciation to the Ninani Group, CRENSHAW and to all the partners who lent us resources in cash and in kind to make this a success.”, Mr. Ekow Thompson said. Join us in supporting SCEF’s mission to empower street-connected children. Together, we can make a difference.`,
    },
    {
        id: 4,
        title: "Leveraging Platform Specific Features For Digital Communication",
        excerpt: "Digital platforms have changed the way businesses communicate and how people connect. These platforms offer a variety of tools and features that often go unnoticed due to a lack of deeper understanding",
        image: Picbanner,
        photo1: Pic1,
        photo2: Pic2,
        author: "Philomina Akekudaga",
        date: "June 07, 2024",
        profile: Profile3,
        content: `Digital platforms have changed the way businesses communicate and how people connect. These platforms offer a variety of tools and features that often go unnoticed due to a lack of deeper understanding. But by fully grasping how these features work, we can enhance the effectiveness of digital communication strategies. As part of efforts to equip students with practical knowledge and skills to harness the features of digital platforms in their academic and professional endeavors, Interactive Digital’s IDea Bootcamp in partnership with University of Ghana held a lecture at the University of Ghana on 7th June 2024. Two seasoned professionals from Interactive Digital; Fredrick Tackie-Yarboi and Jade Appiah-Lartey tutored on ways in which the Features of Digital Platforms can be leveraged for optimum Digital Communications. `,
        content1: `The facilitators began the session amidst an atmosphere of curiosity, asking the students about the various digital platforms they are familiar with, their features and how they utilize them to connect with each other.  Most of the students shared their first- hand experience with some features of the most popular digital platforms. The prevailing notion throughout the interactive session was that most of the students are familiar with the features of the predominant digital platforms but do not fully understand their potential. To better understand the topic at hand, Fred provided a comprehensive overview of the intricacies of digital platform features spanning Multimedia sharing, Messaging and chats, Content creation tools, Interactive features of tools, Analytics and metrics, Community Building, Advertising and promotion, Event Management, Collaborative Events and Customized profiles pages.`,
        content2: `Towards the end, the facilitators had an engagement session where they answered a range of questions from the students. Overall, the students gathered a deep understanding of platform – specific features and how they can harness them in their future career in Digital Communications. Interactive Digital’s IDea Bootcamp initiative is committed to sharing practical knowledge and industry expertise. Idea Bootcamp is not merely a trend, but a deliberate effort towards impacting knowledge to create a more robust and agile workforce for the future.`,
    },
];

const BlogDetail = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });

    const [comments, setComments] = useState([]);
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        website: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (
            formData.fullName &&
            formData.email &&
            formData.website &&
            formData.message
        ) {
            setComments([...comments, formData]);
            setFormData({ fullName: "", email: "", website: "", message: "" });
        } else {
            alert("Please fill in all required fields.");
        }
    };



    const { id } = useParams();
    const blogPost = blogPosts.find((post) => post.id === parseInt(id));

    if (!blogPost) return <div className="mt-[100px] flex items-center justify-center h-[500px] ">Blog post not found!</div>;

    return (
        <div className="bg-gray-50 min-h-screen mt-[100px] overflow-hidden">
            <div className="max-w-[1125px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Content */}
                <main className="lg:col-span-2 bg-white rounded-md shadow-md">
                    <img
                        src={blogPost.image}
                        alt={blogPost.title}
                        className="w-full h-[381px] object-cover rounded-lg"
                        loading="lazy"
                    />
                    <div className="lg:p-6 p-2">
                        <h1 className="text-3xl font-bold mb-2">{blogPost.title}</h1>
                        <div className="flex items-center text-gray-500 mb-4 space-x-2">
                            <img
                                src={blogPost.profile}
                                alt="Author"
                                className="w-8 h-8 object-cover rounded-full"
                                loading="lazy"
                            />
                            <div className="flex justify-between items-center w-full">
                                <span className="text-sm">{blogPost.author}</span>
                                <span className="text-sm">{blogPost.date}</span>
                            </div>

                        </div>
                        <p className="text-gray-700 leading-relaxed">{blogPost.content}</p>
                        <br />
                        <p className="text-gray-700 leading-relaxed">
                            {blogPost.content1}
                        </p>
                        <br />
                        <p className="text-gray-700 leading-relaxed">
                            {blogPost.content2}
                        </p>
                        <br />
                        <p className="text-gray-700 leading-relaxed">
                            {blogPost.content3}
                        </p>
                        <div className="flex lg:flex-row flex-col w-full mt-6 gap-10">
                            <img
                                src={blogPost.photo1}
                                alt="Author"
                                className="w-[317px] h-[300px] object-cover rounded-lg"
                                loading="lazy"

                            />
                            <img
                                src={blogPost.photo2}
                                alt="Author"
                                className="w-[317px] h-[300px] object-cover rounded-lg"
                                loading="lazy"
                            />
                        </div>
                        <br />
                        <p className="text-gray-700 leading-relaxed">
                            {blogPost.content4}
                        </p>
                        <br />
                        <p className="text-gray-700 leading-relaxed">
                            {blogPost.content5}
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

                        {/* Comments Section */}
                        <CommentForm />
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
                        <h3 className="text-xl font-semibold mb-4">Recent Posts</h3>
                        {blogPosts.slice(0, 3).map((post) => (
                            <Link
                                key={post.id}
                                to={`/blog/${post.id}`}
                                className="flex gap-4 mb-4 hover:bg-gray-100 p-2 rounded-md transition">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-16 h-16 object-cover rounded-md"
                                />
                                <div>
                                    <h4 className="text-gray-700 font-medium">{post.title}</h4>
                                    <p className="text-sm text-gray-500">{post.date}</p>
                                </div>
                            </Link>
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
        </div>
    );
};

export default BlogDetail;
