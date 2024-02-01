import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa6"

const SideBar = () => {
    const [PopularBlog, setPopularBlog] = useState([]);

    useEffect(() => {
        const url = 'https://blogserver-j7ih.onrender.com/blogs';
        fetch(url).then(res => res.json()).then(data => setPopularBlog(data.slice(0, 15)))

    })




    return (
        <div>
            <div >
                <h3 className='text-2xl font-semibold px-4 ' >Latest Blogs</h3>
                {
                    PopularBlog.slice(0, 5).map((blog => 
                        <div key={blog.id} className='my-5 border-b-2 border-spacing-2 px-4'>
                            <h3>{blog.title}</h3>
                            
                                <Link to='/' className=' hover:text-green-500 inline-flex text-center'>Learn More <FaArrowRight className='mt-1.5 ml-2' /></Link>
                            
                        </div>

                    ))

                }
            </div>

            <div>
            <h3 className='text-2xl font-semibold px-4 mt-20' >Popular Blogs</h3>
                {
                    PopularBlog.slice(6, 10).map((blog => 
                        <div key={blog.id} className='my-5 border-b-2 border-spacing-2 px-4'>
                            <h3>{blog.title}</h3>
                            
                                <Link to='/' className=' hover:text-green-500 inline-flex text-center'>Learn More <FaArrowRight className='mt-1.5 ml-2' /></Link>
                            
                        </div>

                    ))

                }
            </div>
        </div>
    )
}

export default SideBar
