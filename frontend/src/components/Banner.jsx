import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight} from "react-icons/fa6"

const Banner = () => {
    return (
        <div className=' bg-black mx-auto py-32 px-6'>
            <div className='text-white text-center'>
                <h1 className='text-5xl lg:text-7xl leading-snug font-bold mb-5'> Welcome to our blogs </h1>
                <p className='text-gray-100 lg:w-3/5 mx-auto mb-5 font-font1'>
                    Unleash Your Imagination: A Hub for Readers and Writers! Dive into captivating blogs, explore insightful articles, and connect with a community passionate about the written word.Join us on a literary journey where words come alive, creativity knows no bounds, and every reader is a potential author. Welcome to a world where blogs thrive and writers inspire.
                </p>
                <div className='hover:text-green-500'>
                  <Link to='/' className='inline-flex text-center'>Learn More <FaArrowRight className='mt-1.5 ml-2'/></Link>
                </div>
            </div>
        </div>
    )
}

export default Banner
