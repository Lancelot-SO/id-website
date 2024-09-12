import { Link } from "react-router-dom"

import logo from "../assets/logo.png"

const Navbar = () => {
    return (
        <div>
            <div>
                <nav className="fixed top-0 left-0 flex w-full h-[90px] bg-black bg-opacity-70 items-center justify-between lg:px-36">
                    <Link to="/"><img src={logo} alt="logo" /></Link>
                    <ul className="flex items-center justify-between w-[650px] px-2">
                        <div className="flex items-center w-[500px] space-x-10">
                            <li className="font-black text-[12px] leading-[18px] text-white"><Link to="/">HOME</Link></li>
                            <li className="font-black text-[12px] leading-[18px] text-white"><Link to="/about">ABOUT US</Link></li>
                            <li className="font-black text-[12px] leading-[18px] text-white"><Link to="/services">SERVICES</Link></li>
                            <li className="font-black text-[12px] leading-[18px] text-white"><Link to="/blog">BLOG</Link></li>
                            <li className="font-black text-[12px] leading-[18px] text-white"><Link to="/casestudy">CASE STUDY</Link></li>
                        </div>
                        <div className="flex w-[80px] h-[40px] bg-[#ED0707] items-center justify-center">
                            <li className="font-black text-[12px] leading-[18px] text-white"><Link to="/contact">CALL US</Link></li>
                        </div>
                    </ul>
                </nav>
            </div>

        </div>
    )
}

export default Navbar