import BlogPage from '../BlogPage'

const Blog = () => {
 
 return (
    <>
    <div className=' bg-black mx-auto py-40 px-6'>
     <h1 className='text-5xl lg:text-7xl leading-snug font-bold mb-5 text-white  text-center'> Welcome to our blogs </h1>
    </div>
    <div className='max-w-7xl mx-auto'>
       <BlogPage/>
    </div>
    </>
  )
}

export default Blog
