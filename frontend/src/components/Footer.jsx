import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter} from "react-icons/fa6"
const Footer = () => {
    return (
                <div className='bg-gray-900 '>
                    <div className='px-4 pt-16 mx-auto sm:max-w-full md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-4'>
                        <div className='grid mb-8 lg:grid-cols-6'>
                            <div className='grid grid-cols-2 gap-5 lg:col-span-4 md:grid-cols-4'>

                                <div className='text-white'>
                                    <p>Categories</p>
                                    <ul className='mt-2 space-y-2'>
                                        <li>
                                            <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-green-600'>something</a>
                                        </li>
                                        <li>
                                            <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-green-600'>something</a>
                                        </li>
                                        <li>
                                            <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-green-600'>something</a>
                                        </li>
                                        <li>
                                            <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-green-600'>something</a>
                                        </li>
                                        <li>
                                            <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-green-600'>something</a>
                                        </li>

                                    </ul>
                                </div>
                                <div className='text-white'>
                                    <p>Categories</p>
                                    <ul className='mt-2 space-y-2'>
                                        <li>
                                            <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-green-600'>something</a>
                                        </li>
                                        <li>
                                            <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-green-600'>something</a>
                                        </li>
                                        <li>
                                            <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-green-600'>something</a>
                                        </li>
                                        <li>
                                            <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-green-600'>something</a>
                                        </li>
                                        <li>
                                            <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-green-600'>something</a>
                                        </li>

                                    </ul>
                                </div>
                                <div className='text-white'>
                                    <p>Categories</p>
                                    <ul className='mt-2 space-y-2'>
                                        <li>
                                            <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-green-600'>something</a>
                                        </li>
                                        <li>
                                            <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-green-600'>something</a>
                                        </li>
                                        <li>
                                            <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-green-600'>something</a>
                                        </li>
                                        <li>
                                            <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-green-600'>something</a>
                                        </li>
                                        <li>
                                            <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-green-600'>something</a>
                                        </li>

                                    </ul>
                                </div>
                                <div className='text-white'>
                                    <p>Categories</p>
                                    <ul className='mt-2 space-y-2'>
                                        <li>
                                            <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-green-600'>something</a>
                                        </li>
                                        <li>
                                            <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-green-600'>something</a>
                                        </li>
                                        <li>
                                            <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-green-600'>something</a>
                                        </li>
                                        <li>
                                            <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-green-600'>something</a>
                                        </li>
                                        <li>
                                            <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-green-600'>something</a>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                            <div className='md:max-w-md lg:col-span-2 lg:mt-0 mt-5'>
                            <p className='font-medium text-gray-300'>Subscribe for More</p>
                                <form className='mt-4 flex flex-col md:flex-row'>
                                    <input type='email' name='email' id='email' className='flex-grow w-full px-4 mb-3 transition duration-200 bg-white border border-gray-300 shadow-sm
                                     rounded  aspect-auto md:mr-2 md:mb-0 focus:border-purple-400 focus:outline-none '/>
                                    <button type='submit' className='inline-flex item-center justify-center h-12 px-6 pt-3 font-medium text-white transition duration-200 rounded shadow-md hover:bg-green-500 focus:outline-none border'>
                                        Subscribe
                                    </button>
                                </form>
                                <p className='mt-4 text-sm text-gray-500'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea libero ipsum quia quam, dolor quisquam modi vel dolore! A provident culpa reiciendis dolores fuga consequuntur nihil ullam odio esse, modi expedita tempore!
                                </p>
                            </div>
                        </div>  
                        <div className='flex flex-col justify-between pt-5 pb-10 border-t border-gray-800 sm:flex-row'>
                            <p className='text-sm text-gray-500'>© copyright 2024 | All right reserved</p>
                            <div className='flex items-center mt-4 space-x-4 sm:mt-0'>
                                <a href="/" className='text-gray-500 transition-all duration-300'><FaTwitter className='h-6 w-6'/></a>
                                <a href="/" className='text-gray-500 transition-all duration-300'><FaInstagram className='h-6 w-6'/></a>
                                <a href="/" className='text-gray-500 transition-all duration-300'><FaFacebook className='h-6 w-6'/></a>
                                
                            </div>
            
                        </div>

                    </div>
                </div>
    )
}

export default Footer
