import { useState, useEffect } from "react";

function CommentForm() {
    const [comments, setComments] = useState([]);
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        website: "",
        message: "",
    });

    // Load comments from localStorage on component mount
    useEffect(() => {
        const storedComments = localStorage.getItem("comments");
        if (storedComments) {
            setComments(JSON.parse(storedComments));
        }
    }, []);

    // Save comments to localStorage whenever comments state changes
    useEffect(() => {
        localStorage.setItem("comments", JSON.stringify(comments));
    }, [comments]);

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
            const newComment = { ...formData, date: new Date().toISOString() };
            setComments([...comments, newComment]);
            setFormData({ fullName: "", email: "", website: "", message: "" });
        } else {
            alert("Please fill in all required fields.");
        }
    };

    return (
        <div className="max-w-3xl mx-auto my-10 bg-white rounded-md shadow-sm">
            <h2 className="text-2xl font-semibold mb-6">Leave A Comment</h2>

            <form className="space-y-6" onSubmit={handleSubmit}>
                {/* Full Name and Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label
                            className="block text-gray-700 font-medium mb-2"
                            htmlFor="fullName"
                        >
                            Full Name *
                        </label>
                        <input
                            type="text"
                            id="fullName"
                            placeholder="John David"
                            value={formData.fullName}
                            onChange={handleChange}
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                        />
                    </div>
                    <div>
                        <label
                            className="block text-gray-700 font-medium mb-2"
                            htmlFor="email"
                        >
                            Your Email *
                        </label>
                        <input
                            type="email"
                            id="email"
                            placeholder="example@yourmail.com"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                        />
                    </div>
                </div>

                {/* Website */}
                <div>
                    <label
                        className="block text-gray-700 font-medium mb-2"
                        htmlFor="website"
                    >
                        Website Address*
                    </label>
                    <input
                        type="url"
                        id="website"
                        placeholder="https://www.example.com"
                        value={formData.website}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                </div>

                {/* Message */}
                <div>
                    <label
                        className="block text-gray-700 font-medium mb-2"
                        htmlFor="message"
                    >
                        Message *
                    </label>
                    <textarea
                        id="message"
                        rows="5"
                        placeholder="Hello there, I would like to talk about how to..."
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 resize-none"
                    ></textarea>
                </div>

                {/* Checkbox */}
                <div className="flex items-center gap-2">
                    <input
                        type="checkbox"
                        id="saveInfo"
                        className="w-4 h-4 text-red-600 bg-gray-100 rounded focus:ring-2 focus:ring-red-500"
                    />
                    <label
                        htmlFor="saveInfo"
                        className="text-gray-600 text-sm"
                    >
                        Save my name, email, and website in this browser for the
                        next time I comment.
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

            {/* Comments Section */}
            <div className="mt-10">
                <h2 className="text-xl font-semibold mb-4">Comments</h2>
                {comments.length > 0 ? (
                    <ul className="space-y-4">
                        {comments.map((comment, index) => (
                            <li
                                key={index}
                                className="p-4 border border-gray-200 rounded-md"
                            >
                                <h3 className="text-lg font-medium text-gray-800">
                                    {comment.fullName}
                                </h3>
                                <p className="text-sm text-gray-600">
                                    {comment.email} - {comment.website}
                                </p>
                                <p className="mt-2 text-gray-700">
                                    {comment.message}
                                </p>
                                <p className="text-xs text-gray-400">
                                    {new Date(comment.date).toLocaleString()}
                                </p>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="text-gray-600">No comments yet.</p>
                )}
            </div>
        </div>
    );
}

export default CommentForm;
