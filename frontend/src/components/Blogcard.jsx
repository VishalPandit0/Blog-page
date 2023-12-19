import React from 'react'
import { Link } from 'react-router-dom'
import {FaUser} from "react-icons/fa"
const Blogcard = ({blogs, selectedCategory , currentPage , pageSize}) => {
const filteredBlogs = blogs
.filter((blogs)=> !selectedCategory || blogs.category === selectedCategory)
.slice((currentPage -1)*pageSize , currentPage*pageSize);

  return (
    <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8'>
       
      {
       filteredBlogs.map((blog)=><Link to={`/blogs/${blog.id}`} Key={blog.id} className='p-5  shadow-lg rounded cursor-pointer'>
         <div>
          <img src={blog.image} alt="" className="w-full" />
         </div>
         <h3 className='mb-2 mt-4 font-bold hover:text-blue-500 cursor-pointer'>{blog.title}</h3>
         <p className='text-gray-600 mb-2'><FaUser className=' inline-flex items-center mr-2'/>{blog.author}</p>
         <p className='text-sm text-gray-400'>{blog.published_date}</p>


       </Link>)
       
      }
    </div>
  )
}

export default Blogcard
