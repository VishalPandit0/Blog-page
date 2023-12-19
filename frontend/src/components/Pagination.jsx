import React from 'react'
import { FaArrowRight } from 'react-icons/fa';
import { FaArrowLeft} from "react-icons/fa6";

const Pagination = ({handlePageNumber, pageSize, currentPage, blogs}) => {
     const totalPages = Math.ceil(blogs.length / pageSize)
     
     const renderPaginationLink=()=>{
        return Array.from({length: totalPages}, (_,i)=> i+1).map((PageNumber)=>(
            <li className={PageNumber === currentPage ? 'activePage':""} key={PageNumber}>
                <a href='#' onClick={()=>handlePageNumber(PageNumber) }>{PageNumber}</a>
            </li>
        ) )
     }


  return (
    <div className='pagination my-8 flex-wrap gap-4 '>
      <div>
        <button onClick={()=>handlePageNumber(currentPage - 1)} disabled={currentPage == 1} className={`mt-4px ${currentPage===1?"hidden":""}`}><FaArrowLeft /></button>
      </div>
      <div className=" mt-3 mb-3 flex gap-1">
       { renderPaginationLink()}
      </div>
      <div>
      <button onClick={()=>handlePageNumber(currentPage + 1)} disabled={currentPage == totalPages} className={`mt-4px ${currentPage===totalPages?"hidden":""}`}>< FaArrowRight /></button>
      </div>


    </div>
  )
}

export default Pagination
