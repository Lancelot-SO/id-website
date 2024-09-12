import herobg from "../assets/herobg.png"
import dreambg from "../assets/dreambg.png"
import dream1 from "../assets/dream1.png"
import dream2 from "../assets/dream2.png"
import dream3 from "../assets/dream3.png"


const Home = () => {
    return (
        <div className="">
            <div className="w-full bg-cover">
                <img src={herobg} className="w-full  bg-cover" />
            </div>
            <div>
                <div className="absolute bottom-[132px] left-0 w-[720px] bg-[#ED0707] tracking-[5px] pl-[150px] h-[100px] bg-opacity-50">
                    <h2 className="text-white text-[80px] font-[900]">Your</h2>
                </div>
                <div className="absolute bottom-[150px] h-[90px] pl-[40px] w-[711px] right-0">
                    <h2 className="text-[100px] w-full font-[900] text-white">INTERACTIVE</h2>
                </div>
                <div className="w-[720px] h-[250px] bg-[#ED0707] pl-[150px]">
                    <h2 className="text-[80px] font-[900] leading-none">DIGITAL</h2>
                    <h2 className="text-[80px] text-white font-[900] mt-[-20px]">POWERHOUSE</h2>
                    <div className="w-[470px]">
                        <span className="text-white font-[500] text-[16px] leading-[4px]">
                            Creating experiences, driving solutions, growing your business...
                            is our business.
                        </span>
                    </div>
                </div>
                <div className="absolute bottom-[110px] h-[90px] pr-2 right-0">
                    <h2 className="text-[90px] w-full font-[900] text-transparent" style={{ WebkitTextStroke: '2px #ED0707' }}>
                        DIGITAL
                    </h2>
                </div>

            </div>

            <section>
                <div className="relative mt-[40px] bgred">
                    <img src={dreambg} alt="dream" className="w-full bg-cover" />
                    <div className="absolute top-[122px] left-[150px]">
                        <div className="flex items-center gap-[150px]">
                            <div className="w-[423px] h-[276px]">
                                <h3 className="w-[280px] h-[78px] font-[900] text-[35px] leading-[39px] text-[#ED0707]">
                                    YOU DREAM IT,
                                    WE CREATE IT
                                </h3>
                                <p className="font-[400] text-[16px] leading-[24px] mt-6">
                                    An award-winning 360 marketing communications agency that creates compelling experiences for great brands. Our solutions leverage strategy, creative thinking and coordinated executions to deliver on business goals with focus on digital. Our approach is agile, collaborative and human led.
                                </p>
                            </div>
                            <div className="flex flex-col">
                                <img
                                    src={dream1}
                                    alt="dream"
                                    className="w-[300px] mb-4 transform transition-transform duration-300 hover:scale-105"
                                />
                                <div className="flex items-center justify-between px-2 gap-2">
                                    <img
                                        src={dream2}
                                        alt="dream"
                                        className="w-[250px] transform transition-transform duration-300 hover:scale-105"
                                    />
                                    <img
                                        src={dream3}
                                        alt="dream"
                                        className="w-[250px] transform transition-transform duration-300 hover:scale-105"
                                    />
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div>
                    <h1>speed</h1>
                </div>
            </section>

        </div>
    )
}

export default Home
