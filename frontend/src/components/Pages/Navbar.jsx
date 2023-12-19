import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FaFacebook, FaDribbble, FaTwitter, FaBars, FaXmark } from "react-icons/fa6"
import LoginModel from './LoginModel';



function Navbar() {
    const [isMenuopen, setisMenuopen] = useState(false)
    const [isModelopen,setisModelopen]=useState(false);

const Modelopen=()=>{
   setisModelopen(true);
}
const Modelclose=()=>{
    setisModelopen(false);
 }
    const toggle = () => {
        setisMenuopen(!isMenuopen) 
    }
    const navitem = [
        { path: "/", link: "Home" },
        { path: "/about", link: "About" },
        { path: "/services", link: "Services" },
        { path: "/blogs", link: "Blogs" },
        { path: "/contact", link: "Contact" },
        { path: "/addBlog",link:"AddBlog"}

    ]
    return (
        <header className='bg-black text-white fixed top-0 left-0 right-0'>
            <nav className="px-4 py-4 max-w-7xl mx-auto flex justify-between">
                <a href='/' className='text-xl font-bold text-white'>Blog<span className='text-green-600'>zz</span></a>

                <ul className='md:flex gap-12 text-lg hidden'>
                    {
                        navitem.map(({ path, link }) => <li className='text-white hover:text-gray-300' key={path}>
                            <NavLink to={path} className={({ isActive, isPending }) =>

                                isPending ? "pending" :
                                isActive ? "active" : ''
                            }>{link}</NavLink>
                        </li>)
                    }
                </ul>

                <div className='text-white lg:flex gap-4 item-center hidden'>
                    <a href='/' className='hover:text-blue-500 py-2 '><FaFacebook /></a>
                    <a href='/' className='hover:text-pink-500 py-2 '><FaDribbble /></a>
                    <a href='/' className='hover:text-blue-500 py-2 '><FaTwitter /></a>
                    <button onClick={Modelopen} className='bg-green-500 px-6 py-2 font-medium rounded hover:bg-white hover:text-green-500 transition-all duration-2s ease-in'>Log in</button>
                </div>
                



                <div className='md:hidden padding '>
                    <button onClick={toggle} className='cursor-pointer'>
                        {
                            isMenuopen ? <FaXmark className='w-5 h-5' /> : <FaBars className='w-5 h-5' />
                        }
                    </button>
                </div>
                

            </nav>
            <LoginModel isModelopen={isModelopen} isModelclose={ Modelclose}/>
            {/* menu items for small size devices */}
            <div>
                <ul className={`md:hidden gap-12  text-lg block space-y-4 px-4 py-6 mt-14  bg-gray-300 ${isMenuopen ? "fixed top-0 left-0 w-full transition all ease-out duration-150" : "hidden"}`}>
                    {
                        navitem.map(({ path, link }) => <li className='text-black' key={path}>
                            <NavLink onClick={toggle} to={path}>{link}</NavLink>
                        </li>)
                    }
                </ul>
            </div>
        </header>

    )
}

export default Navbar
