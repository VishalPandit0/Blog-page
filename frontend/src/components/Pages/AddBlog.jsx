import React from 'react'
import axios from 'axios'

function getDate() {
  const today = new Date();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const date = today.getDate();
  return `${month} ${date},${year}`;
}

const handleSubmit=(event)=>{
  event.preventDefault();
  const title = event.target.title.value;
  const category = event.target.category.value;
  const author = event.target.author.value;
  const reading_time = event.target.time.value;
  const published_date = getDate();
  const content = event.target.content.value;
  const data = {title,category,author,reading_time,content,published_date}
  axios
  .post('http://localhost:3001/api/addBlog',data)
  .then((response)=>{
   console.log(response);
   event.target.reset();
  })
  .catch((error)=>{
    console.log(error);
  })
};


const AddBlog = () => {
  return (
   <div className='flex items-center justify-center mx-auto py-32 px-6'>
    <div className='bg-gray-500 w-[50%] rounded'>
     <p className='text-3xl text-black font-bold capitalize flex border-b border-gray-600'>Create your own blog</p>
     <form action="">
      <input type="text" name='title' placeholder='Enter your title' />
      
      </form>  
    </div>
     
   </div>
    
  )
}

export default AddBlog
