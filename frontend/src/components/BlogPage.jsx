import React, { useEffect, useState } from 'react'
import Blogcard from './Blogcard'
import Pagination from './Pagination';
import PageCategory from './PageCategory';
import SideBar from './SideBar';

const BlogPage = () => {
  const [blogs,setblogs] = useState([])
  const [currentPage, setcurrentPage]= useState(1);
  const pageSize = 12;
  const [selectedCategory, setselectedCategory]= useState(null);
  const [activeCategory,setactiveCategory]= useState(null);

  useEffect(()=>{
      async function fetchBlogs(){
       let url=`http://localhost:5000/blogs?page=${currentPage}&limit=${pageSize}`;
       
      //  if any category selected 
       if(selectedCategory){
        url+=`&category=${selectedCategory}`;
       } 

      // fetching blogs
       const response = await fetch(url);
       const data = await response.json();
       setblogs(data);
      }
      fetchBlogs();
  }, [currentPage, pageSize ,selectedCategory ])

      // changing pageNumber
  const handlePageNumber=(PageNumber)=>{
       setcurrentPage(PageNumber);
  }
    
    // changing category
  const handleSelectedCategory=(category)=>{
    setselectedCategory(category);
    setcurrentPage(1);
    setactiveCategory(category);
  }

  return (
    <>
    {/* category  */}
      <div>
        <PageCategory handleSelectedCategory={handleSelectedCategory} activeCategory={activeCategory} selectedCategory={selectedCategory} />
      </div>

      {/* card section for blog */}
      <div className='flex flex-row lg:flex-row gap-12'>
        <Blogcard blogs={blogs} currentPage={currentPage} selectedCategory={selectedCategory} pageSize={pageSize}/>


        <div className='sidebar'>
          <SideBar/>
        </div>
      </div>

      {/* paging section */}
      <div>
       <Pagination handlePageNumber={handlePageNumber} pageSize={pageSize} currentPage={currentPage} blogs={blogs}/>
      </div>

    </>
  )
}

export default BlogPage
