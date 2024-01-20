import React from 'react'
import axios from 'axios'

function getDate() {
  const today = new Date();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const date = today.getDate();
  return `${month} ${date},${year}`;
}

const handleSubmit = (event) => {
  event.preventDefault();
  const title = event.target.title.value.trim();
  const category = event.target.category.value.trim();
  const author = event.target.author.value.trim();
  const reading_time = event.target.time.value.trim();
  const published_date = getDate();
  const content = event.target.content.value.trim();
  const tags = event.target.tags.value.trim()
  const image ="https://techcrunch.com/wp-content/uploads/2022/07/GettyImages-1314165902.jpg?w=430&h=230&crop=1"
  const data = { title,image, category, author, published_date, reading_time, content, tags,}

  if (!title || !category || !author || !reading_time || !content) {
    alert('Please fill in all required fields.');
    return;
  }
  if (typeof title !== 'string' || typeof category !== 'string' || typeof author !== 'string' || isNaN(reading_time) || typeof content !== 'string') {
    alert('Invalid data types for form fields.');
    return;
  }

  else{

    axios
      .post('https://se-h33n.onrender.com/addBlog', data)
      .then((response) => {
        console.log(response);
        event.target.reset();
      })
      .catch((error) => {
        console.log(error);
      })
      alert("Blog Posted Go to Blogs section")
      
  }
};


const AddBlog = () => {
  return (
    <div className='flex items-center justify-center mx-auto py-32 px-6 sm:py-0 sm:px-0 sm:mt-[55px]'>

      <div className='bg-black h-[100%] w-[90vh] my-10 border rounded-lg text-white'>
        <form className=' flex flex-col  space-y-7 mb-5' onSubmit={handleSubmit} action="/">

          <div className='bg-green-500 border-t-0 rounded-md'>

            <h3 className='font-semibold p-4 text-white text-3xl  ml-[20vh] sm:text-2xl font-serif ' >Create Post Here 😃</h3>

          </div>
      
          <div className='mt-8 items-center'>
            <label className='ml-5 '  htmlFor="/">Title  </label>
            <input name='title' className=' p-2 ml-14 mb-2 w-[40%] rounded-md border focus:outline-none bg-white text-gray-600 text-base font-medium border-green-500 focus:shadow-sm ' type="text" placeholder='Title' />
          </div>


          <div className='mt-8 items-center'>
            <label className='ml-5'  htmlFor="/">Category  </label>
            <input name='category' className=' p-2 ml-5 mb-2 w-[40%] rounded-md border focus:outline-none bg-white text-gray-600 text-base font-medium border-green-500 focus:shadow-sm ' type="text" placeholder='for example Ai tech App' />
          </div>

          <div className='mt-8 items-center'>
            <label className='ml-5'  htmlFor="/">Author  </label>
            <input name='author' className=' p-2 ml-9 mb-2 w-[40%] rounded-md border focus:outline-none bg-white text-gray-600 text-base font-medium border-green-500 focus:shadow-sm ' type="text" placeholder='Enter your name' />
          </div>


          <div className='mt-8 items-center'>
            <label className='ml-5'  htmlFor="/">Time  </label>
            <input name='time' className=' p-2 ml-12 mb-2 w-[40%] rounded-md border focus:outline-none bg-white text-gray-600 text-base font-medium border-green-500 focus:shadow-sm ' type="text" placeholder='Average Time to read' />
          </div>


          <div className='mt-8 items-center'>
            <label className='ml-5'  htmlFor="/">Tags  </label>
            <input name='tags'  className= 'p-2 ml-12 mb-2 w-[40%] rounded-md border focus:outline-none bg-white text-gray-600 text-base font-medium border-green-500 focus:shadow-sm ' type="text"  />
          </div>


          <div className='mt-8  flex flex-col'>
            <label className='ml-5'  htmlFor="/">Content  </label>
            <textarea name='content' className=' mt-2 ml-5 mr-4 rounded-md border focus:outline-none bg-white text-gray-600 text-base font-medium border-green-500 focus:shadow-sm capitalize placeholder:font-light p-2 w-auto h-[15vh] '  type="text" placeholder='Start writing here....' />
          </div>


          <button type='submit' className='bg-green-500 my-3 mx-4 px-6 py-2 font-medium rounded hover:bg-white hover:text-green-500 transition-all duration-2s ease-in'>POST</button>


        </form>
      </div>
    </div>

  )
}

export default AddBlog
