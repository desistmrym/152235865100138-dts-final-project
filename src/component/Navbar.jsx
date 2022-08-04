import React, { useState, useEffect } from "react";
import { BiRightArrowAlt, BiHome } from "react-icons/bi";
import { GiKnifeFork } from "react-icons/gi";
import { BsJournalPlus } from "react-icons/bs";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { IoMdLogOut } from "react-icons/io";

const Navbar = () => {
    const [bgScroll, setBgScroll] = useState(false);
    const [param, setParam] = useState(null);
    const token = localStorage.getItem('token-recepie')
    const location = useLocation();
    const navigate = useNavigate()

    const changeLogo = () => {
        if (window.scrollY >= 60) {
            setBgScroll(true)
        } else {
            setBgScroll(false)
        }
    }

    const handleLogout = () => {
        localStorage.removeItem('token-recepie');
        navigate('/signin')

    }

    useEffect(() => {
        setParam(location.pathname)
        changeLogo()
        window.addEventListener("scroll", changeLogo)
    },[location])
    return (
        <div className={`flex fixed w-full justify-between z-10 text-black ${bgScroll ? "bg-white drop-shadow-lg" : 'bg-transparent'}`}>
            <h1 className="text-xs md:text-xl font-bold p-2 ml-2 md:p-5 md:ml-5"><span className="text-[#FFA113]">All</span>Recepies</h1>
            <ul className="ml-20 mr-10 flex p-2 md:p-5 md:ml-5">
                <Link to='/' className={`mt-1 ${param === '/' ? 'text-[#FFA113]' : 'text-black'}`}>
                    <li className="mr-5 flex border-r-2 border-[#FFA113] hover:text-white cursor-pointer"><BiHome size={20} className="pt-1"></BiHome> <span className="ml-1 mr-3">Home</span></li>
                </Link>
                <Link to='/recepie' className={`mt-1 ${param === '/recepie' ? 'text-[#FFA113]' : 'text-black'}`}>
                    <li className="mr-5 flex border-r-2 border-[#FFA113] hover:text-white cursor-pointer"><GiKnifeFork size={20} className="pt-1"></GiKnifeFork> <span className="ml-1 mr-3">Recepie</span></li>
                </Link>
                {token !== null ? 
                    <>
                        <Link to='/create-recepie' className={`mt-1 ${param === '/create-recepie' ? 'text-[#FFA113]' : 'text-black'}`}>
                            <li className="mr-5 flex border-r-2 border-[#FFA113] hover:text-white cursor-pointer"><BsJournalPlus size={20} className="pt-1"></BsJournalPlus> <span className="ml-1 mr-3">New Recepie</span></li>
                        </Link>
                        <li className="mr-5 flex hover:text-white cursor-pointer mt-1" onClick={() => handleLogout()}><IoMdLogOut size={20} className="pt-1"></IoMdLogOut> <span className="ml-1 mr-3">Logout</span></li>
                    </>
                : 
                    <li className="">
                        <Link to="/signin">
                            <button className="border border-[#FFA113]  text-black px-5 py-1 rounded-lg flex hover:border-white hover:text-[#FFA113]">Get Started <BiRightArrowAlt className="ml-2 text-2xl"></BiRightArrowAlt></button>
                        </Link>
                    </li>
                }
            </ul>
        </div>
    )
}

export default Navbar;