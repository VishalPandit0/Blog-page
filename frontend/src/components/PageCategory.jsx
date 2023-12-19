import React from 'react'

const PageCategory = ({handleSelectedCategory,activeCategory}) => {
const categories = ["Startups","Security","AI","Tech","Apps"];

  return (
    <div className='px-4 mb-8 lg:space-x-16 flex flex-wrap items-center border-b-2 py-5 text-gray-900 font-semibold  '>
      <button  onClick={()=>handleSelectedCategory(null)}
             className={`mr-2 space-x-16 ${activeCategory?'':'active-button'}`}>All</button>
     {
        categories.map((category)=>(
            <button onClick={()=>handleSelectedCategory(category)}
             className={`mr-2 space-x-16 ${activeCategory===category?'active-button':''}`} key={category}>
                {category}
            </button>

        ))


     }

    </div>
  )
}

export default PageCategory
