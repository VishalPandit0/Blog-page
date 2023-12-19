import React from 'react'
import { useLoaderData } from 'react-router-dom'
import { FaUser, FaClock} from "react-icons/fa"

const BlogOpen = () => {
    const data =useLoaderData();
    const {title,image,category,author,published_date,reading_time,content}=data[0];
  return (
    <div className='max-w-7xl mx-auto my-12'>
        <div className='lg:w-3/4 mx-auto'>
            <div>
              <img src={image} alt="" className='w-full mx-auto rounded' />
            </div>
        </div>
      <div className='lg:w-3/4 mx-auto sm:mx-2'>
           
            <h2 className='text-2xl font-bold mb-4 text-gray-800 cursor-pointer'>
                {title}
            </h2>
            <p className='mb-3 text-gray-600' ><FaUser className='inline-flex items-center mr-2'/>{author} | {published_date}</p>
            <p className='mb-3 text-gray-600' ><FaClock className='inline-flex items-center mr-2'/>{reading_time}</p>
            <p className='text-base mb-2 text-gray-500'>{content}</p>
            <p className='text-base mb-2 text-gray-500'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis praesentium sapiente adipisci explicabo unde error accusamus quaerat vel porro veniam minus, nemo eaque ex labore excepturi nihil? Hic, accusantium cum? Provident deleniti reprehenderit sit quasi molestiae aliquam exercitationem eius delectus perspiciatis accusamus doloribus, maxime eos? Quas ipsa sed delectus repellat.</p>
            <p className='text-base mb-2 text-gray-500'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis praesentium sapiente adipisci explicabo unde error accusamus quaerat vel porro veniam minus, nemo eaque ex labore excepturi nihil? Hic, accusantium cum? Provident deleniti reprehenderit sit quasi molestiae aliquam exercitationem eius delectus perspiciatis accusamus doloribus, maxime eos? Quas ipsa sed delectus repellat.</p>
            
      </div>
    </div>
  )
}

export default BlogOpen
