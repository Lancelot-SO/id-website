/* eslint-disable no-unused-vars */
import React, { useState, useRef } from 'react';
import videobg from "../assets/media/videobg.png";
import videoicon from "../assets/media/videoIcon.png";
import mediabg from "../assets/media/mediabg.png";
import media1 from "../assets/media/media1.png";
import media2 from "../assets/media/media2.png";
import media3 from "../assets/media/media3.png";
import prod1 from "../assets/media/prod1.png";
import prod2 from "../assets/media/prod2.png";
import prod3 from "../assets/media/prod3.png";
import mediabottom from "../assets/media/mediabottom.png"



const Media = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef(null);

    const handlePlayClick = () => {
        setIsPlaying(true); // Set playing state to true
        videoRef.current.play(); // Play the video
    };

    return (
        <div>
            {/* Video Section */}
            <div className="relative w-full h-[500px]">
                {!isPlaying && (
                    <img
                        src={videobg}
                        alt="Background"
                        className="w-full h-[500px] object-cover absolute inset-0 z-10"
                        loading="lazy"
                    />
                )}

                <video
                    ref={videoRef}
                    src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                    className={`w-full h-[500px] object-cover ${isPlaying ? "block" : "hidden"}`}
                    muted
                    controls
                    loop
                    playsInline
                ></video>

                {!isPlaying && (
                    <div className="absolute inset-0 flex items-center justify-center z-20">
                        <img
                            src={videoicon}
                            alt="Play Video"
                            className="w-24 h-24 object-cover cursor-pointer"
                            loading="lazy"
                            onClick={handlePlayClick}
                        />
                    </div>
                )}
            </div>

            {/* Section Content */}
            <section
                className="w-full h-[1445px] bg-cover py-20"
                style={{ backgroundImage: `url(${mediabg})` }}
            >
                {/* Section content */}
                <div className="lg:mx-[200px] mx-0 w-[1122px] h-[170px] text-white">
                    <h1 className="text-4xl font-bold">Content Production</h1>
                    <p className="mt-4 text-md text-white/80">
                        Not to brag, but no one tells your story like we will behind the cameras. From ideation to post-production, great storytelling captures both subtle as well as explosive narratives. We believe in brands that empathise and understand the experiences of everyday people. Our listening culture shapes the ethos of our production team and our desire to achieve compelling results; And with timely distribution of produced content, our crew is always on standby, just for you.Except on holidays, but we can work something out ;
                    </p>
                </div>

                <div>
                    <div className='w-[1112px] h-[450px] lg:mx-[200px] mx-0 lg:my-[170px] my-0 flex gap-10'>
                        {/* Header */}
                        <div className="text-left mb-6 w-[231px] h-auto">
                            <h2 className="w-[191px] flex items-center justify-center text-lg font-semibold text-red-500 bg-white py-2 px-4 rounded-md">
                                Project List
                            </h2>
                            {/* Project Items */}
                            <ul className="space-y-4">
                                {["Project Name", "Project Name", "Project Name", "Project Name", "Project Name"].map(
                                    (project, index) => (
                                        <li
                                            key={index}
                                            className="flex items-center space-x-3 p-3 rounded-md transition duration-300 cursor-pointer"
                                        >
                                            {/* Play Icon */}
                                            <div className="w-4 h-4 rounded-full border border-white flex items-center justify-center">
                                                <div className="w-2 h-2 bg-white transform rotate-45 clip-path-triangle"></div>
                                            </div>
                                            {/* Project Name */}
                                            <span className="text-sm text-white">{project}</span>
                                        </li>
                                    )
                                )}
                            </ul>
                        </div>

                        <div className="w-[881px] relative h-full flex lg:px-20">
                            <div className="relative">
                                <img
                                    src={media1}
                                    alt="Background 1"
                                    className="w-[600px] absolute top-8 left-8 z-0"
                                    loading="lazy"
                                />
                                <img
                                    src={media2}
                                    alt="Background 2"
                                    className="w-[600px] top-20 left-16 border-4 border-white rounded-[16px] z-20"
                                    loading="lazy"
                                />
                                <img
                                    src={media3}
                                    alt="Background 3"
                                    className="w-[600px] absolute top-20 left-20 z-30 border-4 border-white rounded-[16px]"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="lg:mx-[200px] mx-0 w-[1113px] h-[200px] flex gap-4">
                    <img
                        src={prod1}
                        alt="Play Video"
                        className="w-full h-[170px] object-cover cursor-pointer border-2 border-white rounded-lg"
                        loading="lazy"
                        onClick={handlePlayClick}
                    />

                    <img
                        src={prod2}
                        alt="Play Video"
                        className="w-full h-[170px] object-cover cursor-pointer border-2 border-white rounded-lg"
                        loading="lazy"
                        onClick={handlePlayClick}
                    />

                    <img
                        src={prod3}
                        alt="Play Video"
                        className="w-full h-[170px] object-cover cursor-pointer border-2 border-white rounded-lg"
                        loading="lazy"
                        onClick={handlePlayClick}
                    />
                </div>
            </section>


            <section>
                <img src={mediabottom} alt="banner" className="object-cover w-full h-[400px]" loading="lazy" />
            </section>
        </div>
    );
};

export default Media;
